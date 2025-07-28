import Debug from 'debug'
import { TextDocument } from 'vscode-languageserver-textdocument'
import { Position, CompletionItem, CompletionItemKind, InsertTextFormat } from 'vscode-languageserver/node'
import { 
  GosuKeywordInfo, 
  GosuKeywordCategory, 
  getAllGosuKeywords, 
  findKeywordsByPrefix,
  getKeywordsByCategory 
} from '@gosu-lsp/shared'

const debug = Debug('gosu:lsp:completion')

/**
 * Context information for completion suggestions
 */
interface CompletionContext {
  /** Whether we're at the start of a file */
  isFileStart: boolean
  /** Whether we're inside a class body */
  isInClassBody: boolean
  /** Whether we're inside a function body */
  isInFunctionBody: boolean
  /** The current prefix being typed */
  prefix: string
  /** The line content up to the cursor */
  linePrefix: string
}

/**
 * Provides auto-completion suggestions for Gosu language keywords
 */
export class GosuCompletionProvider {
  private readonly debug = Debug('gosu:lsp:completion:provider')

  /**
   * Get completion items for the given document position
   */
  getCompletions(document: TextDocument, position: Position): CompletionItem[] {
    this.debug(`Getting completions at ${position.line}:${position.character}`)
    
    try {
      // Analyze the context at the cursor position
      const context = this.analyzeContext(document, position)
      
      this.debug(`Completion context:`, {
        isFileStart: context.isFileStart,
        isInClassBody: context.isInClassBody,
        isInFunctionBody: context.isInFunctionBody,
        prefix: context.prefix,
        linePrefix: context.linePrefix
      })
      
      // Get relevant keywords based on context
      let relevantKeywords: GosuKeywordInfo[]
      
      // First get keywords based on context
      const contextKeywords = this.getKeywordsForContext(context)
      this.debug(`Context keywords:`, contextKeywords.map(k => k.keyword))
      
      if (context.prefix) {
        // Filter context keywords by prefix
        relevantKeywords = contextKeywords.filter(keyword =>
          keyword.keyword.toLowerCase().startsWith(context.prefix.toLowerCase())
        )
        this.debug(`Found ${relevantKeywords.length} keywords matching prefix "${context.prefix}": ${relevantKeywords.map(k => k.keyword)}`)
      } else {
        // Use all context keywords
        relevantKeywords = contextKeywords
        this.debug(`Found ${relevantKeywords.length} keywords for context`)
      }
      
      // Convert keywords to completion items
      const completions = relevantKeywords.map(keyword =>
        this.createCompletionItem(keyword)
      )
      
      this.debug(`Returning ${completions.length} completions`)
      return completions
      
    } catch (error) {
      this.debug('Error getting completions:', error)
      return []
    }
  }

  /**
   * Analyze the context around the cursor position
   */
  private analyzeContext(document: TextDocument, position: Position): CompletionContext {
    const text = document.getText()
    const lines = text.split('\n')
    const currentLine = lines[position.line] || ''
    const linePrefix = currentLine.substring(0, position.character)
    
    // Extract the current word/prefix being typed
    const wordMatch = linePrefix.match(/(\w+)$/)
    const prefix = wordMatch ? wordMatch[1] : ''
    
    // Analyze document structure
    const isFileStart = this.isAtFileStart(lines, position.line)
    const isInClassBody = this.isInClassBody(lines, position.line)
    const isInFunctionBody = this.isInFunctionBody(lines, position.line)
    
    return {
      isFileStart,
      isInClassBody,
      isInFunctionBody,
      prefix,
      linePrefix: linePrefix.trim()
    }
  }

  /**
   * Check if position is at the start of the file (only package/imports expected)
   */
  private isAtFileStart(lines: string[], currentLine: number): boolean {
    // Check if we're in the first few lines and no class/interface has been declared yet
    for (let i = 0; i <= currentLine && i < lines.length; i++) {
      const line = lines[i].trim()
      if (line.match(/^(public|private|protected|internal)?\s*(class|interface|enhancement|enum|structure)\s+/)) {
        return false
      }
    }
    return currentLine < 3 // More restrictive: only first 3 lines are "file start"
  }

  /**
   * Check if position is inside a class body (includes enhancement bodies)
   */
  private isInClassBody(lines: string[], currentLine: number): boolean {
    let braceDepth = 0
    let inClassLike = false
    
    for (let i = 0; i <= currentLine && i < lines.length; i++) {
      const line = lines[i].trim()
      
      // Check for class-like declarations (class, interface, enhancement, etc.)
      if (line.match(/^(public|private|protected|internal)?\s*(class|interface|enhancement|enum|structure)\s+/)) {
        inClassLike = true
      }
      
      // Count braces
      const openBraces = (line.match(/\{/g) || []).length
      const closeBraces = (line.match(/\}/g) || []).length
      braceDepth += openBraces - closeBraces
    }
    
    return inClassLike && braceDepth > 0
  }

  /**
   * Check if position is inside a function body
   */
  private isInFunctionBody(lines: string[], currentLine: number): boolean {
    let classLikeBraceDepth = 0
    let functionBraceDepth = 0
    let inFunction = false
    let inClassLike = false
    
    for (let i = 0; i <= currentLine && i < lines.length; i++) {
      const line = lines[i].trim()
      
      // Check for class-like declaration
      if (line.match(/^(public|private|protected|internal)?\s*(class|interface|enhancement|enum|structure)\s+/)) {
        inClassLike = true
        continue
      }
      
      // Check for function declaration (only count if we're inside a class-like construct)
      if (inClassLike && line.match(/(function|construct)\s+/)) {
        inFunction = true
        // Reset function brace depth when we encounter a new function
        functionBraceDepth = 0
      }
      
      // Count braces
      const openBraces = (line.match(/\{/g) || []).length
      const closeBraces = (line.match(/\}/g) || []).length
      
      // Track class-like braces
      if (inClassLike) {
        classLikeBraceDepth += openBraces - closeBraces
      }
      
      // Track function braces if we're in a function
      if (inFunction && classLikeBraceDepth > 0) {
        functionBraceDepth += openBraces - closeBraces
        
        // If we've closed the function, we're no longer in it
        if (functionBraceDepth <= 0) {
          inFunction = false
        }
      }
    }
    
    return inClassLike && inFunction && classLikeBraceDepth > 0 && functionBraceDepth > 0
  }

  /**
   * Get keywords relevant for the current context
   */
  private getKeywordsForContext(context: CompletionContext): GosuKeywordInfo[] {
    const keywords: GosuKeywordInfo[] = []
    
    if (context.isFileStart) {
      // At file start, suggest package and declaration keywords
      keywords.push(...getKeywordsByCategory('declaration').filter(k => 
        ['package', 'class', 'interface', 'enhancement', 'enum', 'structure'].includes(k.keyword)
      ))
      keywords.push(...getKeywordsByCategory('visibility'))
    } else if (context.isInFunctionBody) {
      // Inside function body, suggest control flow and literals
      keywords.push(...getKeywordsByCategory('control'))
      keywords.push(...getKeywordsByCategory('literal'))
      keywords.push(...getKeywordsByCategory('type'))
      keywords.push(...getKeywordsByCategory('declaration').filter(k => k.keyword === 'var'))
    } else if (context.isInClassBody) {
      // Inside class body, suggest member declarations
      keywords.push(...getKeywordsByCategory('declaration').filter(k => 
        ['function', 'var', 'property', 'construct'].includes(k.keyword)
      ))
      keywords.push(...getKeywordsByCategory('visibility'))
      keywords.push(...getKeywordsByCategory('modifier'))
    } else {
      // Default context - return most common keywords
      keywords.push(...getKeywordsByCategory('declaration'))
      keywords.push(...getKeywordsByCategory('visibility'))
    }
    
    return keywords
  }

  /**
   * Convert a Gosu keyword to an LSP CompletionItem
   */
  private createCompletionItem(keyword: GosuKeywordInfo): CompletionItem {
    const item: CompletionItem = {
      label: keyword.keyword,
      kind: this.getCompletionItemKind(keyword.category),
      detail: keyword.description,
      documentation: `Gosu ${keyword.category}: ${keyword.description}`,
      insertText: keyword.snippet || keyword.keyword,
      insertTextFormat: keyword.snippet ? InsertTextFormat.Snippet : InsertTextFormat.PlainText,
      sortText: this.getSortText(keyword)
    }
    
    return item
  }

  /**
   * Get the appropriate LSP CompletionItemKind for a keyword category
   */
  private getCompletionItemKind(category: GosuKeywordCategory): CompletionItemKind {
    switch (category) {
      case 'declaration':
        return CompletionItemKind.Keyword
      case 'visibility':
      case 'modifier':
        return CompletionItemKind.Keyword
      case 'control':
        return CompletionItemKind.Keyword
      case 'literal':
        return CompletionItemKind.Keyword
      case 'type':
        return CompletionItemKind.TypeParameter
      default:
        return CompletionItemKind.Keyword
    }
  }

  /**
   * Get sort text to control completion order
   */
  private getSortText(keyword: GosuKeywordInfo): string {
    // Prioritize certain keywords
    const priority: Record<string, string> = {
      'class': '0001',
      'interface': '0002',
      'package': '0003',
      'function': '0004',
      'var': '0005',
      'public': '0010',
      'private': '0011',
      'if': '0020',
      'for': '0021',
      'return': '0022'
    }
    
    return priority[keyword.keyword] || `1000_${keyword.keyword}`
  }
}