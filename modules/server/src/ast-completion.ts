import { CompletionItem, CompletionItemKind, Position, TextDocument } from 'vscode-languageserver/node'
import Debug from 'debug'
import { GosuParser } from '../../parser/src/parser'
import { GosuSymbolExtractor } from './symbol-extractor'
import {
  GosuSymbolTable,
  GosuASTSymbol,
  findSymbolsByPrefix,
  findSymbolsByType,
  getVisibleSymbols
} from '../../shared/src/symbols'

const debug = Debug('gosu:lsp:ast-completion')

/**
 * AST-based completion provider that uses symbol extraction for intelligent completions
 */
export class GosuASTCompletionProvider {
  private parser: GosuParser
  private symbolExtractor: GosuSymbolExtractor
  private symbolTables: Map<string, GosuSymbolTable> = new Map()

  constructor() {
    this.parser = new GosuParser({ buildAst: true })
    this.symbolExtractor = new GosuSymbolExtractor(this.parser)
    debug('Initialized GosuASTCompletionProvider')
  }

  /**
   * Get completions based on AST symbol analysis
   */
  async getCompletions(
    document: TextDocument,
    position: Position,
    triggerCharacter?: string
  ): Promise<CompletionItem[]> {
    debug('Getting AST completions at %d:%d (trigger: %s)', position.line, position.character, triggerCharacter)

    try {
      // Parse document and extract symbols
      const symbolTable = await this.getOrUpdateSymbolTable(document)
      const line = position.line + 1 // Convert to 1-based
      
      // Get context at cursor position
      const context = this.getCompletionContext(document, position)
      debug('Completion context: %s', context.type)

      // Generate completions based on context
      switch (context.type) {
        case 'member-access':
          return this.getMemberAccessCompletions(symbolTable, context.prefix, line)
        
        case 'type-reference':
          return this.getTypeCompletions(symbolTable, context.prefix)
        
        case 'import-statement':
          return this.getImportCompletions(symbolTable, context.prefix)
        
        case 'general':
        default:
          return this.getGeneralCompletions(symbolTable, context.prefix, line)
      }

    } catch (error) {
      debug('Error getting AST completions: %O', error)
      return []
    }
  }

  /**
   * Get or update symbol table for document
   */
  private async getOrUpdateSymbolTable(document: TextDocument): Promise<GosuSymbolTable> {
    const uri = document.uri
    
    // Check if we have a cached symbol table
    const cached = this.symbolTables.get(uri)
    if (cached) {
      return cached
    }

    // Parse document and extract symbols
    const sourceText = document.getText()
    const parseResult = this.parser.parseText(sourceText, uri)
    
    if (!parseResult.isValid || !parseResult.ast) {
      debug('Parse failed for %s, using empty symbol table', uri)
      const emptyTable = this.createEmptySymbolTable(uri)
      this.symbolTables.set(uri, emptyTable)
      return emptyTable
    }

    const symbolTable = this.symbolExtractor.extractSymbols(uri, parseResult.ast)
    this.symbolTables.set(uri, symbolTable)
    
    debug('Extracted %d symbols from %s', symbolTable.allSymbols.length, uri)
    return symbolTable
  }

  /**
   * Create empty symbol table
   */
  private createEmptySymbolTable(uri: string): GosuSymbolTable {
    return {
      uri,
      symbols: new Map(),
      allSymbols: [],
      imports: [],
      classes: [],
      functions: [],
      variables: [],
      scopes: []
    }
  }

  /**
   * Determine completion context from cursor position
   */
  private getCompletionContext(document: TextDocument, position: Position): CompletionContext {
    const lines = document.getText().split('\n')
    const currentLine = lines[position.line] || ''
    const beforeCursor = currentLine.substring(0, position.character)
    
    debug('Line before cursor: "%s"', beforeCursor)

    // Check for member access (dot notation)
    if (beforeCursor.match(/\w+\.\s*$/)) {
      const match = beforeCursor.match(/(\w+)\.\s*$/)
      return {
        type: 'member-access',
        prefix: '',
        objectName: match?.[1] || ''
      }
    }

    // Check for import/uses statement
    if (beforeCursor.match(/^\s*uses\s+[\w.]*$/)) {
      const match = beforeCursor.match(/uses\s+([\w.]*)$/)
      return {
        type: 'import-statement',
        prefix: match?.[1] || ''
      }
    }

    // Check for type reference (after : or extends/implements)
    if (beforeCursor.match(/:\s*\w*$/) || beforeCursor.match(/extends\s+\w*$/) || beforeCursor.match(/implements\s+\w*$/)) {
      const match = beforeCursor.match(/(?::|extends|implements)\s+(\w*)$/)
      return {
        type: 'type-reference',
        prefix: match?.[1] || ''
      }
    }

    // General context - find prefix at cursor
    const match = beforeCursor.match(/(\w*)$/)
    return {
      type: 'general',
      prefix: match?.[1] || ''
    }
  }

  /**
   * Get member access completions (obj.member)
   */
  private getMemberAccessCompletions(
    symbolTable: GosuSymbolTable,
    prefix: string,
    line: number
  ): CompletionItem[] {
    debug('Getting member access completions for prefix: "%s"', prefix)

    // For now, return common Java/Gosu methods that would be available on most objects
    // In a full implementation, this would analyze the object type and provide type-specific members
    const commonMethods: CompletionItem[] = [
      {
        label: 'toString',
        kind: CompletionItemKind.Method,
        detail: '() : String',
        documentation: 'Returns a string representation of the object',
        sortText: '3000_toString'
      },
      {
        label: 'equals',
        kind: CompletionItemKind.Method,
        detail: '(obj : Object) : boolean',
        documentation: 'Indicates whether some other object is "equal to" this one',
        sortText: '3001_equals'
      },
      {
        label: 'hashCode',
        kind: CompletionItemKind.Method,
        detail: '() : int',
        documentation: 'Returns a hash code value for the object',
        sortText: '3002_hashCode'
      }
    ]

    return commonMethods.filter(item => 
      item.label.toLowerCase().startsWith(prefix.toLowerCase())
    )
  }

  /**
   * Get type completions (classes, interfaces, enums)
   */
  private getTypeCompletions(symbolTable: GosuSymbolTable, prefix: string): CompletionItem[] {
    debug('Getting type completions for prefix: "%s"', prefix)

    const completions: CompletionItem[] = []

    // Add imported types
    for (const imp of symbolTable.imports) {
      if (imp.name.toLowerCase().startsWith(prefix.toLowerCase())) {
        completions.push({
          label: imp.name,
          kind: CompletionItemKind.Class,
          detail: imp.path,
          documentation: `Imported from ${imp.path}`,
          sortText: `4000_${imp.name}`
        })
      }
    }

    // Add declared classes/interfaces/enums
    const typeSymbols = symbolTable.classes.filter(symbol => 
      symbol.name.toLowerCase().startsWith(prefix.toLowerCase())
    )

    for (const symbol of typeSymbols) {
      completions.push({
        label: symbol.name,
        kind: this.getCompletionItemKind(symbol.type),
        detail: `${symbol.type} ${symbol.name}`,
        documentation: symbol.documentation || `${symbol.visibility || 'internal'} ${symbol.type}`,
        sortText: `4010_${symbol.name}`
      })
    }

    // Add common primitive types
    const primitiveTypes = ['String', 'int', 'boolean', 'double', 'float', 'long', 'char', 'byte']
    for (const type of primitiveTypes) {
      if (type.toLowerCase().startsWith(prefix.toLowerCase())) {
        completions.push({
          label: type,
          kind: CompletionItemKind.Keyword,
          detail: `primitive type`,
          documentation: `Built-in primitive type: ${type}`,
          sortText: `4020_${type}`
        })
      }
    }

    return completions
  }

  /**
   * Get import statement completions
   */
  private getImportCompletions(symbolTable: GosuSymbolTable, prefix: string): CompletionItem[] {
    debug('Getting import completions for prefix: "%s"', prefix)

    // Common Java packages and classes
    const commonImports = [
      'java.util.List',
      'java.util.ArrayList',
      'java.util.Map',
      'java.util.HashMap',
      'java.util.Set',
      'java.util.HashSet',
      'java.lang.String',
      'java.lang.Object',
      'java.io.File',
      'java.io.IOException',
      'java.text.SimpleDateFormat',
      'java.util.Date'
    ]

    return commonImports
      .filter(imp => imp.toLowerCase().includes(prefix.toLowerCase()))
      .map(imp => ({
        label: imp,
        kind: CompletionItemKind.Module,
        detail: 'import',
        documentation: `Import ${imp}`,
        sortText: `5000_${imp}`
      }))
  }

  /**
   * Get general completions (variables, functions, keywords)
   */
  private getGeneralCompletions(
    symbolTable: GosuSymbolTable,
    prefix: string,
    line: number
  ): CompletionItem[] {
    debug('Getting general completions for prefix: "%s"', prefix)

    const completions: CompletionItem[] = []

    // Get visible symbols at current line
    const visibleSymbols = getVisibleSymbols(symbolTable, line)
    
    // Add matching symbols
    for (const symbol of visibleSymbols) {
      if (symbol.name.toLowerCase().startsWith(prefix.toLowerCase())) {
        completions.push(this.createCompletionItem(symbol))
      }
    }

    // Add all functions and variables using prefix search
    const symbolMatches = findSymbolsByPrefix(symbolTable, prefix)
    for (const symbol of symbolMatches) {
      if (!completions.some(item => item.label === symbol.name)) {
        completions.push(this.createCompletionItem(symbol))
      }
    }

    // Add classes and interfaces
    for (const classSymbol of symbolTable.classes) {
      if (classSymbol.name.toLowerCase().startsWith(prefix.toLowerCase())) {
        if (!completions.some(item => item.label === classSymbol.name)) {
          completions.push(this.createCompletionItem(classSymbol))
        }
      }
    }

    return completions
  }

  /**
   * Create completion item from symbol
   */
  private createCompletionItem(symbol: GosuASTSymbol): CompletionItem {
    const item: CompletionItem = {
      label: symbol.name,
      kind: this.getCompletionItemKind(symbol.type),
      detail: this.getSymbolDetail(symbol),
      documentation: symbol.documentation || this.getSymbolDescription(symbol),
      sortText: this.getSortText(symbol)
    }

    // Add function signature for methods and constructors
    if (symbol.type === 'function' || symbol.type === 'constructor') {
      const params = symbol.parameters?.map(p => `${p.name}: ${p.type}`).join(', ') || ''
      item.insertText = `${symbol.name}(${params})`
      item.detail = `${symbol.name}(${params})${symbol.returnType ? ` : ${symbol.returnType}` : ''}`
    }

    return item
  }

  /**
   * Get sort text for AST symbols
   */
  private getSortText(symbol: GosuASTSymbol): string {
    // Prioritize symbols by type
    const priority: Record<string, string> = {
      'class': '2000',
      'interface': '2001',
      'function': '2010',
      'constructor': '2011',
      'property': '2020',
      'field': '2021',
      'variable': '2030',
      'parameter': '2031'
    }
    
    return priority[symbol.type] || `2999_${symbol.name}`
  }

  /**
   * Get VS Code completion item kind from symbol type
   */
  private getCompletionItemKind(symbolType: string): CompletionItemKind {
    switch (symbolType) {
      case 'class': return CompletionItemKind.Class
      case 'interface': return CompletionItemKind.Interface
      case 'enhancement': return CompletionItemKind.Module
      case 'enum': return CompletionItemKind.Enum
      case 'function': return CompletionItemKind.Function
      case 'constructor': return CompletionItemKind.Constructor
      case 'property': return CompletionItemKind.Property
      case 'field': return CompletionItemKind.Field
      case 'variable': return CompletionItemKind.Variable
      case 'parameter': return CompletionItemKind.Variable
      case 'import': return CompletionItemKind.Module
      default: return CompletionItemKind.Text
    }
  }

  /**
   * Get symbol detail string
   */
  private getSymbolDetail(symbol: GosuASTSymbol): string {
    const visibility = symbol.visibility ? `${symbol.visibility} ` : ''
    const isStatic = symbol.isStatic ? 'static ' : ''
    const dataType = symbol.dataType ? ` : ${symbol.dataType}` : ''
    const returnType = symbol.returnType ? ` : ${symbol.returnType}` : ''
    
    return `${visibility}${isStatic}${symbol.type}${dataType}${returnType}`.trim()
  }

  /**
   * Get symbol description
   */
  private getSymbolDescription(symbol: GosuASTSymbol): string {
    const parts = []
    
    if (symbol.visibility) parts.push(symbol.visibility)
    if (symbol.isStatic) parts.push('static')
    parts.push(symbol.type)
    
    if (symbol.dataType || symbol.returnType) {
      parts.push(`of type ${symbol.dataType || symbol.returnType}`)
    }
    
    if (symbol.scope && symbol.scope !== 'file') {
      parts.push(`in ${symbol.scope}`)
    }
    
    return parts.join(' ')
  }

  /**
   * Clear cached symbol table for document
   */
  clearDocumentCache(uri: string): void {
    this.symbolTables.delete(uri)
    debug('Cleared symbol table cache for %s', uri)
  }

  /**
   * Clear all cached symbol tables
   */
  clearAllCaches(): void {
    this.symbolTables.clear()
    debug('Cleared all symbol table caches')
  }
}

/**
 * Completion context information
 */
interface CompletionContext {
  type: 'member-access' | 'type-reference' | 'import-statement' | 'general'
  prefix: string
  objectName?: string
}