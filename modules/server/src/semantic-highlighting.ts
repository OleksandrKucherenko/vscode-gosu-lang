import { GosuParser } from "@gosu-lsp/parser"
import type { GosuSymbolTable } from "@gosu-lsp/shared"
import Debug from "debug"
import {
  type Range,
  type SemanticTokens,
  SemanticTokensBuilder,
  type SemanticTokensLegend,
} from "vscode-languageserver/node"
import type { TextDocument } from "vscode-languageserver-textdocument"
import { GosuSymbolExtractor } from "./symbol-extractor"

const debug = Debug("gosu:lsp:semantic")

// Token types based on LSP specification and Gosu language needs
export const TOKEN_TYPES = [
  "namespace", // 0 - package declarations
  "class", // 1 - class names
  "enum", // 2 - enum declarations
  "interface", // 3 - interface declarations
  "struct", // 4 - struct declarations
  "typeParameter", // 5 - generic type parameters
  "type", // 6 - type references
  "parameter", // 7 - function parameters
  "variable", // 8 - variables
  "property", // 9 - properties
  "enumMember", // 10 - enum members
  "event", // 11 - events
  "function", // 12 - functions
  "method", // 13 - methods
  "macro", // 14 - macros
  "keyword", // 15 - language keywords
  "modifier", // 16 - access modifiers
  "comment", // 17 - comments
  "string", // 18 - string literals
  "number", // 19 - numeric literals
  "regexp", // 20 - regular expressions
  "operator", // 21 - operators
] as const

// Token modifiers based on LSP specification
export const TOKEN_MODIFIERS = [
  "declaration", // 0 - symbol declaration
  "definition", // 1 - symbol definition
  "readonly", // 2 - readonly/final
  "static", // 3 - static members
  "deprecated", // 4 - deprecated symbols
  "abstract", // 5 - abstract members
  "async", // 6 - async functions
  "modification", // 7 - symbol modification
  "documentation", // 8 - documentation
  "defaultLibrary", // 9 - default library symbols
] as const

export type TokenType = (typeof TOKEN_TYPES)[number]
export type TokenModifier = (typeof TOKEN_MODIFIERS)[number]

interface SemanticToken {
  line: number
  startChar: number
  length: number
  tokenType: number
  tokenModifiers: number
}

interface CacheEntry {
  version: number
  tokens: SemanticTokens
}

export class GosuSemanticHighlightingProvider {
  private parser: GosuParser
  private symbolExtractor: GosuSymbolExtractor
  private cache = new Map<string, CacheEntry>()

  constructor() {
    this.parser = new GosuParser()
    this.symbolExtractor = new GosuSymbolExtractor(this.parser)
  }

  /**
   * Get the token legend for semantic highlighting
   */
  getTokenLegend(): SemanticTokensLegend {
    return {
      tokenTypes: [...TOKEN_TYPES],
      tokenModifiers: [...TOKEN_MODIFIERS],
    }
  }

  /**
   * Get semantic tokens for the entire document
   */
  async getSemanticTokens(document: TextDocument): Promise<SemanticTokens> {
    debug(`Getting semantic tokens for ${document.uri}`)

    // Check cache first
    const cached = this.cache.get(document.uri)
    if (cached && cached.version === document.version) {
      debug(`Using cached tokens for ${document.uri}`)
      return cached.tokens
    }

    try {
      const tokens = await this.computeSemanticTokens(document)

      // Cache the result
      this.cache.set(document.uri, {
        version: document.version,
        tokens,
      })

      debug(`Computed ${tokens.data.length / 5} tokens for ${document.uri}`)
      return tokens
    } catch (error) {
      debug(`Error computing semantic tokens for ${document.uri}:`, error)
      // Return empty tokens on error
      return { data: [] }
    }
  }

  /**
   * Get semantic tokens for a specific range
   */
  async getSemanticTokensRange(document: TextDocument, range: Range): Promise<SemanticTokens> {
    debug(`Getting semantic tokens for range in ${document.uri}`)

    try {
      const allTokens = await this.getSemanticTokens(document)
      const filteredTokens = this.filterTokensInRange(allTokens, range)

      debug(`Filtered to ${filteredTokens.data.length / 5} tokens for range`)
      return filteredTokens
    } catch (error) {
      debug(`Error computing range tokens for ${document.uri}:`, error)
      return { data: [] }
    }
  }

  /**
   * Handle document change event
   */
  onDocumentChange(document: TextDocument): void {
    debug(`Document changed: ${document.uri}, clearing cache`)
    this.cache.delete(document.uri)
  }

  /**
   * Clear all caches
   */
  clearAllCaches(): void {
    debug("Clearing all semantic highlighting caches")
    this.cache.clear()
  }

  /**
   * Compute semantic tokens for a document
   */
  private async computeSemanticTokens(document: TextDocument): Promise<SemanticTokens> {
    const text = document.getText()

    // Handle empty documents
    if (!text.trim()) {
      return { data: [] }
    }

    const builder = new SemanticTokensBuilder()
    const lines = text.split("\n")

    try {
      // Parse the document and extract symbols
      const parseResult = this.parser.parseText(text, document.uri)
      let symbolTable: GosuSymbolTable | undefined

      if (parseResult.ast) {
        symbolTable = this.symbolExtractor.extractSymbols(document.uri, parseResult.ast)
      }

      // Process each line for semantic tokens
      for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
        const line = lines[lineIndex]
        if (symbolTable) {
          this.processLine(line, lineIndex, builder, symbolTable)
        } else {
          this.processLineBasic(line, lineIndex, builder)
        }
      }
    } catch (error) {
      debug(`Parse error, falling back to basic tokenization:`, error)

      // Fallback to basic regex-based tokenization
      for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
        const line = lines[lineIndex]
        this.processLineBasic(line, lineIndex, builder)
      }
    }

    return builder.build()
  }

  /**
   * Process a line with AST-based analysis
   */
  private processLine(
    line: string,
    lineIndex: number,
    builder: SemanticTokensBuilder,
    symbolTable: GosuSymbolTable,
  ): void {
    // Keywords
    this.highlightKeywords(line, lineIndex, builder)

    // String literals
    this.highlightStrings(line, lineIndex, builder)

    // Numeric literals
    this.highlightNumbers(line, lineIndex, builder)

    // Comments
    this.highlightComments(line, lineIndex, builder)

    // Symbols from AST
    this.highlightSymbols(line, lineIndex, builder, symbolTable)
  }

  /**
   * Process a line with basic regex patterns (fallback)
   */
  private processLineBasic(line: string, lineIndex: number, builder: SemanticTokensBuilder): void {
    // Keywords
    this.highlightKeywords(line, lineIndex, builder)

    // String literals
    this.highlightStrings(line, lineIndex, builder)

    // Numeric literals
    this.highlightNumbers(line, lineIndex, builder)

    // Comments
    this.highlightComments(line, lineIndex, builder)

    // Basic identifiers (classes, functions)
    this.highlightBasicIdentifiers(line, lineIndex, builder)
  }

  /**
   * Highlight Gosu keywords
   */
  private highlightKeywords(line: string, lineIndex: number, builder: SemanticTokensBuilder): void {
    const keywords = [
      "package",
      "uses",
      "class",
      "interface",
      "enum",
      "enhancement",
      "structure",
      "function",
      "property",
      "var",
      "final",
      "static",
      "private",
      "protected",
      "public",
      "abstract",
      "override",
      "construct",
      "delegate",
      "implements",
      "extends",
      "if",
      "else",
      "while",
      "for",
      "do",
      "switch",
      "case",
      "default",
      "break",
      "continue",
      "return",
      "throw",
      "try",
      "catch",
      "finally",
      "using",
      "new",
      "this",
      "super",
      "typeof",
      "typeis",
      "as",
      "instanceof",
      "true",
      "false",
      "null",
      "void",
    ]

    for (const keyword of keywords) {
      const regex = new RegExp(`\\b${keyword}\\b`, "g")
      let match

      while ((match = regex.exec(line)) !== null) {
        const tokenType = this.getKeywordTokenType(keyword)
        const modifiers = this.getKeywordModifiers(keyword)

        builder.push(lineIndex, match.index, keyword.length, tokenType, modifiers)
      }
    }
  }

  /**
   * Highlight string literals
   */
  private highlightStrings(line: string, lineIndex: number, builder: SemanticTokensBuilder): void {
    // Double-quoted strings
    const doubleQuoteRegex = /"[^"]*"/g
    let match

    while ((match = doubleQuoteRegex.exec(line)) !== null) {
      builder.push(lineIndex, match.index, match[0].length, TOKEN_TYPES.indexOf("string"), 0)
    }

    // Single-quoted strings
    const singleQuoteRegex = /'[^']*'/g
    while ((match = singleQuoteRegex.exec(line)) !== null) {
      builder.push(lineIndex, match.index, match[0].length, TOKEN_TYPES.indexOf("string"), 0)
    }
  }

  /**
   * Highlight numeric literals
   */
  private highlightNumbers(line: string, lineIndex: number, builder: SemanticTokensBuilder): void {
    // Integer and floating-point numbers
    const numberRegex = /\b\d+\.?\d*\b/g
    let match

    while ((match = numberRegex.exec(line)) !== null) {
      builder.push(lineIndex, match.index, match[0].length, TOKEN_TYPES.indexOf("number"), 0)
    }
  }

  /**
   * Highlight comments
   */
  private highlightComments(line: string, lineIndex: number, builder: SemanticTokensBuilder): void {
    // Single-line comments
    const commentIndex = line.indexOf("//")
    if (commentIndex !== -1) {
      builder.push(lineIndex, commentIndex, line.length - commentIndex, TOKEN_TYPES.indexOf("comment"), 0)
    }

    // Block comments (/* ... */) - basic handling
    const blockCommentStart = line.indexOf("/*")
    const blockCommentEnd = line.indexOf("*/")

    if (blockCommentStart !== -1) {
      const endPos = blockCommentEnd !== -1 ? blockCommentEnd + 2 : line.length
      builder.push(lineIndex, blockCommentStart, endPos - blockCommentStart, TOKEN_TYPES.indexOf("comment"), 0)
    }
  }

  /**
   * Highlight symbols from AST analysis
   */
  private highlightSymbols(
    line: string,
    lineIndex: number,
    builder: SemanticTokensBuilder,
    symbolTable: GosuSymbolTable,
  ): void {
    // Highlight class names
    for (const classSymbol of symbolTable.classes) {
      if (classSymbol.name) {
        const regex = new RegExp(`\\b${this.escapeRegex(classSymbol.name)}\\b`, "g")
        let match

        while ((match = regex.exec(line)) !== null) {
          const modifiers = classSymbol.isStatic ? 1 << TOKEN_MODIFIERS.indexOf("static") : 0

          builder.push(lineIndex, match.index, classSymbol.name.length, TOKEN_TYPES.indexOf("class"), modifiers)
        }
      }
    }

    // Highlight function names
    for (const functionSymbol of symbolTable.functions) {
      if (functionSymbol.name) {
        const regex = new RegExp(`\\b${this.escapeRegex(functionSymbol.name)}\\b`, "g")
        let match

        while ((match = regex.exec(line)) !== null) {
          let modifiers = 0
          if (functionSymbol.isStatic) modifiers |= 1 << TOKEN_MODIFIERS.indexOf("static")

          builder.push(lineIndex, match.index, functionSymbol.name.length, TOKEN_TYPES.indexOf("function"), modifiers)
        }
      }
    }

    // Highlight variable names
    for (const variableSymbol of symbolTable.variables) {
      if (variableSymbol.name) {
        const regex = new RegExp(`\\b${this.escapeRegex(variableSymbol.name)}\\b`, "g")
        let match

        while ((match = regex.exec(line)) !== null) {
          let modifiers = 0
          if (variableSymbol.isStatic) modifiers |= 1 << TOKEN_MODIFIERS.indexOf("static")
          if (variableSymbol.isFinal) modifiers |= 1 << TOKEN_MODIFIERS.indexOf("readonly")

          builder.push(lineIndex, match.index, variableSymbol.name.length, TOKEN_TYPES.indexOf("variable"), modifiers)
        }
      }
    }
  }

  /**
   * Highlight basic identifiers (fallback method)
   */
  private highlightBasicIdentifiers(line: string, lineIndex: number, builder: SemanticTokensBuilder): void {
    // Class names (capitalized identifiers)
    const classRegex = /\b[A-Z][a-zA-Z0-9_]*\b/g
    let match

    while ((match = classRegex.exec(line)) !== null) {
      // Skip if it's a keyword
      if (!this.isKeyword(match[0])) {
        builder.push(lineIndex, match.index, match[0].length, TOKEN_TYPES.indexOf("class"), 0)
      }
    }

    // Function names (after 'function' keyword)
    const functionRegex = /function\s+([a-zA-Z_][a-zA-Z0-9_]*)/g
    while ((match = functionRegex.exec(line)) !== null) {
      const functionName = match[1]
      const functionIndex = match.index + match[0].length - functionName.length

      builder.push(
        lineIndex,
        functionIndex,
        functionName.length,
        TOKEN_TYPES.indexOf("function"),
        1 << TOKEN_MODIFIERS.indexOf("declaration"),
      )
    }
  }

  /**
   * Get token type for a keyword
   */
  private getKeywordTokenType(keyword: string): number {
    const structuralKeywords = ["class", "interface", "enum", "enhancement", "structure"]
    const modifierKeywords = ["private", "protected", "public", "static", "final", "abstract", "override"]

    if (structuralKeywords.includes(keyword)) {
      return TOKEN_TYPES.indexOf("keyword")
    }

    if (modifierKeywords.includes(keyword)) {
      return TOKEN_TYPES.indexOf("modifier")
    }

    return TOKEN_TYPES.indexOf("keyword")
  }

  /**
   * Get token modifiers for a keyword
   */
  private getKeywordModifiers(keyword: string): number {
    const declarationKeywords = ["class", "interface", "enum", "function", "var"]

    if (declarationKeywords.includes(keyword)) {
      return 1 << TOKEN_MODIFIERS.indexOf("declaration")
    }

    return 0
  }

  /**
   * Filter tokens to a specific range
   */
  private filterTokensInRange(tokens: SemanticTokens, range: Range): SemanticTokens {
    const filteredData: number[] = []

    // Semantic tokens are encoded as relative positions
    // We need to decode them to filter by range
    let currentLine = 0
    let currentChar = 0

    for (let i = 0; i < tokens.data.length; i += 5) {
      const deltaLine = tokens.data[i]
      const deltaStart = tokens.data[i + 1]
      const length = tokens.data[i + 2]
      const tokenType = tokens.data[i + 3]
      const tokenModifiers = tokens.data[i + 4]

      // Update current position
      if (deltaLine > 0) {
        currentLine += deltaLine
        currentChar = deltaStart
      } else {
        currentChar += deltaStart
      }

      // Check if token is in range
      if (currentLine >= range.start.line && currentLine <= range.end.line) {
        if (currentLine === range.start.line && currentChar < range.start.character) {
          continue
        }
        if (currentLine === range.end.line && currentChar + length > range.end.character) {
          continue
        }

        // Add token to filtered results
        filteredData.push(deltaLine, deltaStart, length, tokenType, tokenModifiers)
      }
    }

    return { data: filteredData }
  }

  /**
   * Escape special regex characters
   */
  private escapeRegex(text: string): string {
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  }

  /**
   * Check if a word is a Gosu keyword
   */
  private isKeyword(word: string): boolean {
    const keywords = [
      "package",
      "uses",
      "class",
      "interface",
      "enum",
      "enhancement",
      "structure",
      "function",
      "property",
      "var",
      "final",
      "static",
      "private",
      "protected",
      "public",
      "abstract",
      "override",
      "construct",
      "delegate",
      "implements",
      "extends",
      "if",
      "else",
      "while",
      "for",
      "do",
      "switch",
      "case",
      "default",
      "break",
      "continue",
      "return",
      "throw",
      "try",
      "catch",
      "finally",
      "using",
      "new",
      "this",
      "super",
      "typeof",
      "typeis",
      "as",
      "instanceof",
      "true",
      "false",
      "null",
      "void",
    ]

    return keywords.includes(word)
  }
}
