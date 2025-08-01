import { GosuParser } from "@gosu-lsp/parser"
import { findSymbolsByPrefix, type GosuASTSymbol, type GosuSymbolTable, getVisibleSymbols } from "@gosu-lsp/shared"
import Debug from "debug"
import {
  type CompletionItem,
  CompletionItemKind,
  type Position,
  type Range,
  type TextDocument,
  TextEdit,
} from "vscode-languageserver/node"
import type { GosuJavaSymbolResolver } from "./java-symbol-resolver"
import { GosuSymbolExtractor } from "./symbol-extractor"

const debug = Debug("gosu:lsp:ast-completion")

/**
 * AST-based completion provider that uses symbol extraction for intelligent completions
 */
export class GosuASTCompletionProvider {
  private parser: GosuParser
  private symbolExtractor: GosuSymbolExtractor
  private javaSymbolResolver: GosuJavaSymbolResolver // Add this
  private symbolTables: Map<string, GosuSymbolTable> = new Map()

  constructor(javaSymbolResolver: GosuJavaSymbolResolver) {
    // Add param
    this.parser = new GosuParser({ buildAst: true })
    this.symbolExtractor = new GosuSymbolExtractor(this.parser)
    this.javaSymbolResolver = javaSymbolResolver // Init new field
    debug("Initialized GosuASTCompletionProvider")
  }

  /**
   * Get completions based on AST symbol analysis
   */
  async getCompletions(
    document: TextDocument,
    position: Position,
    triggerCharacter?: string,
  ): Promise<CompletionItem[]> {
    debug("Getting AST completions at %d:%d (trigger: %s)", position.line, position.character, triggerCharacter)

    try {
      // Parse document and extract symbols
      const symbolTable = await this.getOrUpdateSymbolTable(document)
      const line = position.line + 1 // Convert to 1-based

      // Get context at cursor position
      const context = this.getCompletionContext(document, position)
      debug("Completion context: %s", context.type)

      // Generate completions based on context
      switch (context.type) {
        case "member-access":
          return this.getMemberAccessCompletions(symbolTable, context.prefix, line, document, position)

        case "type-reference":
          return this.getTypeCompletions(symbolTable, context.prefix, document, position)

        case "import-statement":
          return this.getImportCompletions(symbolTable, context.prefix, document, position)

        default:
          return this.getGeneralCompletions(symbolTable, context.prefix, line, document, position)
      }
    } catch (error) {
      debug("Error getting AST completions: %O", error)
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
      debug("Parse failed for %s, using empty symbol table", uri)
      const emptyTable = this.createEmptySymbolTable(uri)
      this.symbolTables.set(uri, emptyTable)
      return emptyTable
    }

    const symbolTable = this.symbolExtractor.extractSymbols(uri, parseResult.ast)
    this.symbolTables.set(uri, symbolTable)

    debug("Extracted %d symbols from %s", symbolTable.allSymbols.length, uri)
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
      scopes: [],
    }
  }

  /**
   * Determine completion context from cursor position
   */
  private getCompletionContext(document: TextDocument, position: Position): CompletionContext {
    const lines = document.getText().split("\n")
    const currentLine = lines[position.line] || ""
    const beforeCursor = currentLine.substring(0, position.character)

    debug('Line before cursor: "%s"', beforeCursor)

    // Check for member access (dot notation)
    if (beforeCursor.match(/\w+\.\s*$/)) {
      const match = beforeCursor.match(/(\w+)\.\s*$/)
      return {
        type: "member-access",
        prefix: "",
        objectName: match?.[1] || "",
      }
    }

    // Check for import/uses statement
    if (beforeCursor.match(/^\s*uses\s+[\w.]*$/)) {
      const match = beforeCursor.match(/uses\s+([\w.]*)$/)
      return {
        type: "import-statement",
        prefix: match?.[1] || "",
      }
    }

    // Check for type reference (after : or extends/implements)
    if (
      beforeCursor.match(/:\s*\w*$/) ||
      beforeCursor.match(/extends\s+\w*$/) ||
      beforeCursor.match(/implements\s+\w*$/)
    ) {
      const match = beforeCursor.match(/(?::|extends|implements)\s+(\w*)$/)
      return {
        type: "type-reference",
        prefix: match?.[1] || "",
      }
    }

    // General context - find prefix at cursor
    const match = beforeCursor.match(/(\w*)$/)
    return {
      type: "general",
      prefix: match?.[1] || "",
    }
  }

  /**
   * Get member access completions (obj.member)
   */
  private getMemberAccessCompletions(
    _symbolTable: GosuSymbolTable,
    prefix: string,
    _line: number,
    document: TextDocument,
    position: Position,
  ): CompletionItem[] {
    debug('Getting member access completions for prefix: "%s"', prefix)

    // Calculate replacement range for the prefix
    const replaceRange = this.getWordRangeAtPosition(document, position, prefix)

    // For now, return common Java/Gosu methods that would be available on most objects
    // In a full implementation, this would analyze the object type and provide type-specific members
    const commonMethods: CompletionItem[] = [
      {
        label: "toString",
        kind: CompletionItemKind.Method,
        detail: "() : String",
        documentation: "Returns a string representation of the object",
        sortText: "3000_toString",
        textEdit: TextEdit.replace(replaceRange, "toString"),
      },
      {
        label: "equals",
        kind: CompletionItemKind.Method,
        detail: "(obj : Object) : boolean",
        documentation: 'Indicates whether some other object is "equal to" this one',
        sortText: "3001_equals",
        textEdit: TextEdit.replace(replaceRange, "equals"),
      },
      {
        label: "hashCode",
        kind: CompletionItemKind.Method,
        detail: "() : int",
        documentation: "Returns a hash code value for the object",
        sortText: "3002_hashCode",
        textEdit: TextEdit.replace(replaceRange, "hashCode"),
      },
    ]

    return commonMethods.filter((item) => item.label.toLowerCase().startsWith(prefix.toLowerCase()))
  }

  /**
   * Get type completions (classes, interfaces, enums)
   */
  private getTypeCompletions(
    symbolTable: GosuSymbolTable,
    prefix: string,
    document: TextDocument,
    position: Position,
  ): CompletionItem[] {
    debug('Getting type completions for prefix: "%s"', prefix)

    // Calculate replacement range for the prefix
    const replaceRange = this.getWordRangeAtPosition(document, position, prefix)
    const completions: CompletionItem[] = []

    // Add imported types
    for (const imp of symbolTable.imports) {
      if (imp.name.toLowerCase().startsWith(prefix.toLowerCase())) {
        completions.push({
          label: imp.name,
          kind: CompletionItemKind.Class,
          detail: imp.path,
          documentation: `Imported from ${imp.path}`,
          sortText: `4000_${imp.name}`,
          textEdit: TextEdit.replace(replaceRange, imp.name),
        })
      }
    }

    // Add declared classes/interfaces/enums
    const typeSymbols = symbolTable.classes.filter((symbol) =>
      symbol.name.toLowerCase().startsWith(prefix.toLowerCase()),
    )

    for (const symbol of typeSymbols) {
      completions.push({
        label: symbol.name,
        kind: this.getCompletionItemKind(symbol.type),
        detail: `${symbol.type} ${symbol.name}`,
        documentation: symbol.documentation || `${symbol.visibility || "internal"} ${symbol.type}`,
        sortText: `4010_${symbol.name}`,
        textEdit: TextEdit.replace(replaceRange, symbol.name),
      })
    }

    // Add common primitive types
    const primitiveTypes = ["String", "int", "boolean", "double", "float", "long", "char", "byte"]
    for (const type of primitiveTypes) {
      if (type.toLowerCase().startsWith(prefix.toLowerCase())) {
        completions.push({
          label: type,
          kind: CompletionItemKind.Keyword,
          detail: `primitive type`,
          documentation: `Built-in primitive type: ${type}`,
          sortText: `4020_${type}`,
          textEdit: TextEdit.replace(replaceRange, type),
        })
      }
    }

    return completions
  }

  /**
   * Get import statement completions
   */
  private async getImportCompletions(
    symbolTable: GosuSymbolTable,
    prefix: string,
    document: TextDocument,
    position: Position,
  ): Promise<CompletionItem[]> {
    debug('Getting import completions for prefix: "%s"', prefix)

    // Calculate replacement range for the prefix - special handling for import statements
    const replaceRange = this.getImportRangeAtPosition(document, position, prefix)
    const completions: CompletionItem[] = []

    // 1. Add completions from defined imports in the current document
    debug("symbolTable:", JSON.stringify(symbolTable, null, 2))
    for (const imp of symbolTable.imports) {
      console.log("Checking import:", imp.name, prefix)
      if (imp.name.toLowerCase().startsWith(prefix.toLowerCase())) {
        completions.push({
          label: imp.name,
          kind: CompletionItemKind.Class,
          detail: imp.path,
          documentation: `Imported from ${imp.path}`,
          sortText: `5000_${imp.name}`,
          textEdit: TextEdit.replace(replaceRange, imp.name),
        })
      }
    }

    // 2. Add completions for known Java standard library types and packages
    const javaTypes = await this.javaSymbolResolver.getStandardLibraryTypes()
    for (const typeName of javaTypes) {
      const parts = typeName.split(".")
      const shortName = parts[parts.length - 1]
      const module = parts.slice(0, -1).join(".")

      if (typeName.toLowerCase().startsWith(prefix.toLowerCase())) {
        completions.push({
          label: typeName,
          kind: CompletionItemKind.Class,
          detail: `import ${typeName}`,
          documentation: `Import from Java Standard Library: ${typeName}`,
          sortText: `5010_${shortName}`,
          textEdit: TextEdit.replace(replaceRange, typeName),
        })

        completions.push({
          label: module,
          kind: CompletionItemKind.Module,
          detail: `import`,
          documentation: `Import Java Standard Library: ${module}`,
          sortText: `5000_${module}`,
          textEdit: TextEdit.replace(replaceRange, module),
        })
      }
    }

    // 3. Add completions for packages based on common top-level packages
    const commonPackages = ["java", "javax", "com", "org"]
    for (const pkg of commonPackages) {
      if (pkg.toLowerCase().startsWith(prefix.toLowerCase())) {
        if (!completions.some((c) => c.label === pkg && c.kind === CompletionItemKind.Module)) {
          completions.push({
            label: pkg,
            kind: CompletionItemKind.Module,
            detail: "Java Package",
            documentation: `Top-level Java package: ${pkg}`,
            sortText: `5020_${pkg}`,
            textEdit: TextEdit.replace(replaceRange, pkg),
          })
        }
      }
    }

    // Filter out duplicates and sort
    return [...new Map(completions.map((item) => [item.label, item])).values()].sort((a, b) =>
      a.label.localeCompare(b.label),
    )
  }

  /**
   * Get general completions (variables, functions, keywords)
   */
  private getGeneralCompletions(
    symbolTable: GosuSymbolTable,
    prefix: string,
    line: number,
    document: TextDocument,
    position: Position,
  ): CompletionItem[] {
    debug('Getting general completions for prefix: "%s"', prefix)

    // Calculate replacement range for the prefix
    const replaceRange = this.getWordRangeAtPosition(document, position, prefix)
    const completions: CompletionItem[] = []

    // Get visible symbols at current line
    const visibleSymbols = getVisibleSymbols(symbolTable, line)

    // Add matching symbols
    for (const symbol of visibleSymbols) {
      if (symbol.name.toLowerCase().startsWith(prefix.toLowerCase())) {
        completions.push(this.createCompletionItem(symbol, replaceRange))
      }
    }

    // Add all functions and variables using prefix search
    const symbolMatches = findSymbolsByPrefix(symbolTable, prefix)
    for (const symbol of symbolMatches) {
      if (!completions.some((item) => item.label === symbol.name)) {
        completions.push(this.createCompletionItem(symbol, replaceRange))
      }
    }

    // Add classes and interfaces
    for (const classSymbol of symbolTable.classes) {
      if (classSymbol.name.toLowerCase().startsWith(prefix.toLowerCase())) {
        if (!completions.some((item) => item.label === classSymbol.name)) {
          completions.push(this.createCompletionItem(classSymbol, replaceRange))
        }
      }
    }

    return completions
  }

  /**
   * Create completion item from symbol
   */
  private createCompletionItem(symbol: GosuASTSymbol, replaceRange?: Range): CompletionItem {
    const item: CompletionItem = {
      label: symbol.name,
      kind: this.getCompletionItemKind(symbol.type),
      detail: this.getSymbolDetail(symbol),
      documentation: symbol.documentation || this.getSymbolDescription(symbol),
      sortText: this.getSortText(symbol),
    }

    // Add text edit if range is provided
    if (replaceRange) {
      item.textEdit = TextEdit.replace(replaceRange, symbol.name)
    }

    // Add function signature for methods and constructors
    if (symbol.type === "function" || symbol.type === "constructor") {
      const params = symbol.parameters?.map((p) => `${p.name}: ${p.type}`).join(", ") || ""
      const insertText = `${symbol.name}(${params})`
      item.detail = `${symbol.name}(${params})${symbol.returnType ? ` : ${symbol.returnType}` : ""}`

      // Always set insertText for tests and other consumers
      item.insertText = insertText

      if (replaceRange) {
        item.textEdit = TextEdit.replace(replaceRange, insertText)
      }
    }

    return item
  }

  /**
   * Get word range at position for text replacement
   */
  private getWordRangeAtPosition(document: TextDocument, position: Position, prefix: string): Range {
    const lines = document.getText().split("\n")
    const currentLine = lines[position.line] || ""

    // Find the start of the word by looking backwards from the cursor
    let start = position.character - prefix.length
    while (start > 0 && /\w/.test(currentLine[start - 1])) {
      start--
    }

    // Find the end of the word by looking forwards from the cursor
    let end = position.character
    while (end < currentLine.length && /\w/.test(currentLine[end])) {
      end++
    }

    return {
      start: { line: position.line, character: start },
      end: { line: position.line, character: end },
    }
  }

  /**
   * Get import range at position for text replacement in import statements
   */
  private getImportRangeAtPosition(document: TextDocument, position: Position, prefix: string): Range {
    const lines = document.getText().split("\n")
    const currentLine = lines[position.line] || ""

    // For import statements, we need to find the import path part after "uses "
    const usesMatch = currentLine.match(/^\s*uses\s+/)
    if (usesMatch) {
      const usesEnd = usesMatch[0].length

      // Find the end of the import path
      let end = position.character
      while (end < currentLine.length && /[\w.]/.test(currentLine[end])) {
        end++
      }

      return {
        start: { line: position.line, character: usesEnd },
        end: { line: position.line, character: end },
      }
    }

    // Fallback to word range
    return this.getWordRangeAtPosition(document, position, prefix)
  }

  /**
   * Get sort text for AST symbols
   */
  private getSortText(symbol: GosuASTSymbol): string {
    // Prioritize symbols by type
    const priority: Record<string, string> = {
      class: "2000",
      interface: "2001",
      function: "2010",
      constructor: "2011",
      property: "2020",
      field: "2021",
      variable: "2030",
      parameter: "2031",
    }

    return priority[symbol.type] || `2999_${symbol.name}`
  }

  /**
   * Get VS Code completion item kind from symbol type
   */
  private getCompletionItemKind(symbolType: string): CompletionItemKind {
    switch (symbolType) {
      case "class":
        return CompletionItemKind.Class
      case "interface":
        return CompletionItemKind.Interface
      case "enhancement":
        return CompletionItemKind.Module
      case "enum":
        return CompletionItemKind.Enum
      case "function":
        return CompletionItemKind.Function
      case "constructor":
        return CompletionItemKind.Constructor
      case "property":
        return CompletionItemKind.Property
      case "field":
        return CompletionItemKind.Field
      case "variable":
        return CompletionItemKind.Variable
      case "parameter":
        return CompletionItemKind.Variable
      case "import":
        return CompletionItemKind.Module
      default:
        return CompletionItemKind.Text
    }
  }

  /**
   * Get symbol detail string
   */
  private getSymbolDetail(symbol: GosuASTSymbol): string {
    const visibility = symbol.visibility ? `${symbol.visibility} ` : ""
    const isStatic = symbol.isStatic ? "static " : ""
    const dataType = symbol.dataType ? ` : ${symbol.dataType}` : ""
    const returnType = symbol.returnType ? ` : ${symbol.returnType}` : ""

    return `${visibility}${isStatic}${symbol.type}${dataType}${returnType}`.trim()
  }

  /**
   * Get symbol description
   */
  private getSymbolDescription(symbol: GosuASTSymbol): string {
    const parts = []

    if (symbol.visibility) parts.push(symbol.visibility)
    if (symbol.isStatic) parts.push("static")
    parts.push(symbol.type)

    if (symbol.dataType || symbol.returnType) {
      parts.push(`of type ${symbol.dataType || symbol.returnType}`)
    }

    if (symbol.scope && symbol.scope !== "file") {
      parts.push(`in ${symbol.scope}`)
    }

    return parts.join(" ")
  }

  /**
   * Clear cached symbol table for document
   */
  clearDocumentCache(uri: string): void {
    this.symbolTables.delete(uri)
    debug("Cleared symbol table cache for %s", uri)
  }

  /**
   * Clear all cached symbol tables
   */
  clearAllCaches(): void {
    this.symbolTables.clear()
    debug("Cleared all symbol table caches")
  }
}

/**
 * Completion context information
 */
interface CompletionContext {
  type: "member-access" | "type-reference" | "import-statement" | "general"
  prefix: string
  objectName?: string
}
