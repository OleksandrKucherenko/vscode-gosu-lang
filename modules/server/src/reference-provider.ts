import { GosuParser } from "@gosu-lsp/parser"
import type { GosuSymbolTable, GosuSymbolType } from "@gosu-lsp/shared"
import type { Location, Position, Range } from "vscode-languageserver/node"
import type { TextDocument } from "vscode-languageserver-textdocument"
import { GosuSymbolExtractor } from "./symbol-extractor"

export interface ReferenceContext {
  includeDeclaration?: boolean
}

export interface IndexStats {
  documentCount: number
  symbolCount: number
  packageCount: number
}

interface WorkspaceSymbol {
  name: string
  type: GosuSymbolType
  location: Location
  packageName?: string
  className?: string
  isStatic?: boolean
  scope?: string
}

interface DocumentIndex {
  uri: string
  version: number
  symbols: WorkspaceSymbol[]
  usages: WorkspaceSymbol[] // Track symbol usages separately
  symbolTable: GosuSymbolTable
}

export class GosuReferenceProvider {
  private documentIndexes = new Map<string, DocumentIndex>()
  private symbolExtractor: GosuSymbolExtractor
  private parser: GosuParser
  private globalSymbolMap = new Map<string, WorkspaceSymbol[]>()

  constructor() {
    this.parser = new GosuParser()
    this.symbolExtractor = new GosuSymbolExtractor(this.parser)
  }

  /**
   * Find all references to the symbol at the given position
   */
  async findReferences(
    document: TextDocument,
    position: Position,
    context?: ReferenceContext,
  ): Promise<Location[] | null> {
    try {
      // Get symbol at position
      const symbolAtPosition = await this.getSymbolAtPosition(document, position)
      if (!symbolAtPosition) {
        return null
      }

      // Find all references to this symbol across workspace
      const references: Location[] = []
      const includeDeclaration = context?.includeDeclaration ?? true

      // Search through all indexed documents
      for (const [_uri, docIndex] of this.documentIndexes) {
        const docReferences = this.findReferencesInDocument(docIndex, symbolAtPosition, includeDeclaration)
        references.push(...docReferences)
      }

      // If not including declaration, filter it out
      if (!includeDeclaration) {
        return references.filter((ref) => !this.isDeclaration(ref, symbolAtPosition))
      }

      return references.length > 0 ? references : null
    } catch (error) {
      console.error("Error finding references:", error)
      return null
    }
  }

  /**
   * Add or update a document in the workspace index
   */
  async addDocument(document: TextDocument): Promise<void> {
    try {
      // Parse document and extract symbols
      const parseResult = this.parser.parseText(document.getText(), document.uri)
      if (!parseResult.ast) {
        console.warn("Failed to parse document:", document.uri)
        return
      }
      const symbolTable = this.symbolExtractor.extractSymbols(document.uri, parseResult.ast)

      // Convert to workspace symbols and find usages
      const workspaceSymbols = this.convertToWorkspaceSymbols(document.uri, symbolTable)
      const usageSymbols = this.findSymbolUsages(document, symbolTable)

      // Create document index
      const docIndex: DocumentIndex = {
        uri: document.uri,
        version: document.version,
        symbols: workspaceSymbols,
        usages: usageSymbols,
        symbolTable,
      }

      // Remove old index if exists
      this.removeDocumentFromGlobalIndex(document.uri)

      // Add new index
      this.documentIndexes.set(document.uri, docIndex)
      this.addDocumentToGlobalIndex(docIndex)
    } catch (error) {
      console.error("Error adding document to index:", error)
    }
  }

  /**
   * Remove a document from the workspace index
   */
  removeDocument(uri: string): void {
    try {
      this.removeDocumentFromGlobalIndex(uri)
      this.documentIndexes.delete(uri)
    } catch (error) {
      console.error("Error removing document from index:", error)
    }
  }

  /**
   * Get workspace index statistics
   */
  getIndexStats(): IndexStats {
    let totalSymbols = 0
    const packages = new Set<string>()

    for (const docIndex of this.documentIndexes.values()) {
      totalSymbols += docIndex.symbols.length + docIndex.usages.length
      for (const symbol of docIndex.symbols) {
        if (symbol.packageName) {
          packages.add(symbol.packageName)
        }
      }
    }

    return {
      documentCount: this.documentIndexes.size,
      symbolCount: totalSymbols,
      packageCount: packages.size,
    }
  }

  /**
   * Get symbol at the given position in document
   */
  private async getSymbolAtPosition(document: TextDocument, position: Position): Promise<WorkspaceSymbol | null> {
    const docIndex = this.documentIndexes.get(document.uri)
    if (!docIndex) {
      // If document not indexed, try to index it first
      await this.addDocument(document)
      return this.getSymbolAtPosition(document, position)
    }

    // Find symbol at position in both declarations and usages
    const allSymbols = [...docIndex.symbols, ...docIndex.usages]
    for (const symbol of allSymbols) {
      if (this.isPositionInRange(position, symbol.location.range)) {
        return symbol
      }
    }

    // If no exact match, try to find symbol by name at position
    const textAtPosition = this.getWordAtPosition(document, position)
    if (textAtPosition) {
      return this.findSymbolByNameAtPosition(docIndex, textAtPosition, position)
    }

    return null
  }

  /**
   * Find symbol usages in document text
   */
  private findSymbolUsages(document: TextDocument, symbolTable: GosuSymbolTable): WorkspaceSymbol[] {
    const usages: WorkspaceSymbol[] = []
    const text = document.getText()
    const lines = text.split("\n")

    // Search for all symbol names in the document text
    for (const [symbolName, symbols] of symbolTable.symbols) {
      if (symbols.length === 0) continue

      const firstSymbol = symbols[0]

      // Skip imports as they are already tracked
      if (firstSymbol.type === "import") continue

      // Find all occurrences of this symbol name
      for (let lineNum = 0; lineNum < lines.length; lineNum++) {
        const line = lines[lineNum]
        let columnIndex = 0

        while (true) {
          const index = line.indexOf(symbolName, columnIndex)
          if (index === -1) break

          // Check if this is a whole word (not part of another identifier)
          const beforeChar = index > 0 ? line[index - 1] : " "
          const afterChar = index + symbolName.length < line.length ? line[index + symbolName.length] : " "

          if (!/[a-zA-Z0-9_]/.test(beforeChar) && !/[a-zA-Z0-9_]/.test(afterChar)) {
            // Check if this is not the declaration line
            const isDeclarationLine = symbols.some((s) => s.line === lineNum + 1)

            if (!isDeclarationLine) {
              const location: Location = {
                uri: document.uri,
                range: {
                  start: { line: lineNum, character: index },
                  end: { line: lineNum, character: index + symbolName.length },
                },
              }

              const usage: WorkspaceSymbol = {
                name: symbolName,
                type: this.getUsageType(firstSymbol.type),
                location,
                scope: firstSymbol.scope,
                className: firstSymbol.scope,
              }

              usages.push(usage)
            }
          }

          columnIndex = index + 1
        }
      }
    }

    return usages
  }

  /**
   * Get usage type from declaration type
   */
  private getUsageType(declarationType: GosuSymbolType): GosuSymbolType {
    // For now, just return the same type
    // We could expand this to have specific usage types
    return declarationType
  }

  /**
   * Find references to a symbol in a specific document
   */
  private findReferencesInDocument(
    docIndex: DocumentIndex,
    targetSymbol: WorkspaceSymbol,
    includeDeclaration: boolean,
  ): Location[] {
    const references: Location[] = []

    // Search for all occurrences of the symbol name in both declarations and usages
    const allSymbols = [...docIndex.symbols, ...docIndex.usages]

    for (const symbol of allSymbols) {
      if (this.isSymbolMatch(symbol, targetSymbol)) {
        // Check if this is a declaration or usage
        const isDecl = this.isDeclaration(symbol.location, targetSymbol)
        if (includeDeclaration || !isDecl) {
          references.push(symbol.location)
        }
      }
    }

    return references
  }

  /**
   * Convert symbol table to workspace symbols
   */
  private convertToWorkspaceSymbols(uri: string, symbolTable: GosuSymbolTable): WorkspaceSymbol[] {
    const workspaceSymbols: WorkspaceSymbol[] = []

    for (const symbol of symbolTable.allSymbols) {
      const location: Location = {
        uri,
        range: {
          start: { line: symbol.line - 1, character: symbol.column }, // Convert to 0-based line
          end: { line: symbol.line - 1, character: symbol.column + symbol.name.length },
        },
      }

      const workspaceSymbol: WorkspaceSymbol = {
        name: symbol.name,
        type: symbol.type,
        location,
        scope: symbol.scope,
        className: symbol.scope,
        isStatic: symbol.isStatic,
      }

      workspaceSymbols.push(workspaceSymbol)
    }

    return workspaceSymbols
  }

  /**
   * Add document to global symbol index
   */
  private addDocumentToGlobalIndex(docIndex: DocumentIndex): void {
    const allSymbols = [...docIndex.symbols, ...docIndex.usages]

    for (const symbol of allSymbols) {
      if (!this.globalSymbolMap.has(symbol.name)) {
        this.globalSymbolMap.set(symbol.name, [])
      }
      this.globalSymbolMap.get(symbol.name)?.push(symbol)
    }
  }

  /**
   * Remove document from global symbol index
   */
  private removeDocumentFromGlobalIndex(uri: string): void {
    const docIndex = this.documentIndexes.get(uri)
    if (!docIndex) return

    const allSymbols = [...docIndex.symbols, ...docIndex.usages]

    for (const symbol of allSymbols) {
      const symbolList = this.globalSymbolMap.get(symbol.name)
      if (symbolList) {
        const index = symbolList.findIndex((s) => s.location.uri === uri)
        if (index >= 0) {
          symbolList.splice(index, 1)
        }
        if (symbolList.length === 0) {
          this.globalSymbolMap.delete(symbol.name)
        }
      }
    }
  }

  /**
   * Check if position is within range
   */
  private isPositionInRange(position: Position, range: Range): boolean {
    if (position.line < range.start.line || position.line > range.end.line) {
      return false
    }
    if (position.line === range.start.line && position.character < range.start.character) {
      return false
    }
    if (position.line === range.end.line && position.character > range.end.character) {
      return false
    }
    return true
  }

  /**
   * Get word at position
   */
  private getWordAtPosition(document: TextDocument, position: Position): string | null {
    const text = document.getText()
    const lines = text.split("\n")

    if (position.line >= lines.length) {
      return null
    }

    const line = lines[position.line]
    if (position.character >= line.length) {
      return null
    }

    // Find word boundaries
    let start = position.character
    let end = position.character

    // Move start backward to find word start
    while (start > 0 && /[a-zA-Z0-9_]/.test(line[start - 1])) {
      start--
    }

    // Move end forward to find word end
    while (end < line.length && /[a-zA-Z0-9_]/.test(line[end])) {
      end++
    }

    if (start === end) {
      return null
    }

    return line.substring(start, end)
  }

  /**
   * Find symbol by name at position
   */
  private findSymbolByNameAtPosition(
    docIndex: DocumentIndex,
    symbolName: string,
    position: Position,
  ): WorkspaceSymbol | null {
    // First try to find in this document
    const allSymbols = [...docIndex.symbols, ...docIndex.usages]

    for (const symbol of allSymbols) {
      if (symbol.name === symbolName && symbol.location.range.start.line === position.line) {
        return symbol
      }
    }

    // If not found, look for symbol definition in global index
    const globalSymbols = this.globalSymbolMap.get(symbolName)
    if (globalSymbols && globalSymbols.length > 0) {
      // Return the first definition (class/function definition typically)
      return (
        globalSymbols.find((s) => s.type === "class" || s.type === "function" || s.type === "interface") ||
        globalSymbols[0]
      )
    }

    return null
  }

  /**
   * Check if two symbols match (same symbol)
   */
  private isSymbolMatch(symbol1: WorkspaceSymbol, symbol2: WorkspaceSymbol): boolean {
    // Basic name match
    if (symbol1.name !== symbol2.name) {
      return false
    }

    // If they're in the same scope, they likely match
    if (symbol1.scope && symbol2.scope && symbol1.scope === symbol2.scope) {
      return true
    }

    // Type match for better accuracy
    if (symbol1.type === symbol2.type) {
      return true
    }

    return false
  }

  /**
   * Check if location is a symbol declaration
   */
  private isDeclaration(location: Location, symbol: WorkspaceSymbol): boolean {
    // Consider it a declaration if it's the same location as the symbol definition
    return (
      location.uri === symbol.location.uri &&
      location.range.start.line === symbol.location.range.start.line &&
      location.range.start.character === symbol.location.range.start.character &&
      (symbol.type === "class" ||
        symbol.type === "function" ||
        symbol.type === "interface" ||
        symbol.type === "variable" ||
        symbol.type === "field")
    )
  }
}
