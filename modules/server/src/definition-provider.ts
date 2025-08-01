import { GosuParser } from "@gosu-lsp/parser"
import type { GosuASTSymbol, GosuSymbolTable } from "@gosu-lsp/shared"
import Debug from "debug"
import type { Definition, Location, Position, Range } from "vscode-languageserver/node"
import type { TextDocument } from "vscode-languageserver-textdocument"
import { GosuSymbolExtractor } from "./symbol-extractor"

const debug = Debug("gosu:lsp:definition")

export interface DefinitionResult {
  location?: Location
  symbol?: GosuASTSymbol
}

export class GosuDefinitionProvider {
  private parser: GosuParser
  private symbolExtractor: GosuSymbolExtractor
  private cache = new Map<string, GosuSymbolTable>()

  constructor() {
    this.parser = new GosuParser()
    this.symbolExtractor = new GosuSymbolExtractor(this.parser)
  }

  /**
   * Get the definition of the symbol at the given position
   */
  async getDefinition(document: TextDocument, position: Position): Promise<Definition | null> {
    debug(`Getting definition for ${document.uri} at ${position.line}:${position.character}`)

    try {
      const symbolTable = this.getOrUpdateSymbolTable(document)
      if (!symbolTable) {
        debug("No symbol table available")
        return null
      }

      const symbolAtPosition = this.findSymbolAtPosition(document, position, symbolTable)
      if (!symbolAtPosition) {
        debug("No symbol found at position")
        return null
      }

      const definition = this.findDefinition(symbolAtPosition, symbolTable, document)
      if (!definition) {
        debug(`No definition found for symbol: ${symbolAtPosition.name}`)
        return null
      }

      debug(`Found definition for ${symbolAtPosition.name} at ${definition.start.line}:${definition.start.character}`)
      return {
        uri: document.uri,
        range: definition,
      }
    } catch (error) {
      debug(`Error getting definition:`, error)
      return null
    }
  }

  /**
   * Find the symbol at the given position in the document
   */
  private findSymbolAtPosition(
    document: TextDocument,
    position: Position,
    symbolTable: GosuSymbolTable,
  ): GosuASTSymbol | null {
    const line = document.getText().split("\n")[position.line]
    if (!line) {
      return null
    }

    // Get the word at the position
    const wordInfo = this.getWordAtPosition(line, position.character)
    if (!wordInfo) {
      return null
    }

    const { word } = wordInfo
    debug(`Looking for symbol: ${word}`)

    // Search through AST symbols to find a match
    const allSymbols = [...symbolTable.classes, ...symbolTable.functions, ...symbolTable.variables]

    // First try exact name match
    let matchedSymbol = allSymbols.find((symbol) => symbol.name === word)

    // If no exact match, try partial matches for member access
    if (!matchedSymbol) {
      matchedSymbol = allSymbols.find((symbol) => symbol.name?.includes(word))
    }

    // If still no match, check imports and convert to AST symbol
    if (!matchedSymbol) {
      const importMatch = symbolTable.imports.find((imp) => imp.name === word)
      if (importMatch) {
        return {
          name: importMatch.name,
          type: "import",
          line: importMatch.line,
          column: importMatch.column,
          dataType: importMatch.path,
        } as GosuASTSymbol
      }
    }

    return matchedSymbol || null
  }

  /**
   * Get the word at the specified character position in a line
   */
  private getWordAtPosition(line: string, character: number): { word: string; start: number; end: number } | null {
    if (character < 0 || character >= line.length) {
      return null
    }

    // Find word boundaries
    let start = character
    let end = character

    // Move start backward to find word beginning
    while (start > 0 && this.isWordCharacter(line[start - 1])) {
      start--
    }

    // Move end forward to find word ending
    while (end < line.length && this.isWordCharacter(line[end])) {
      end++
    }

    if (start === end) {
      return null
    }

    const word = line.substring(start, end)
    return { word, start, end }
  }

  /**
   * Check if a character is part of a word (identifier)
   */
  private isWordCharacter(char: string): boolean {
    return /[a-zA-Z0-9_]/.test(char)
  }

  /**
   * Find the definition of a symbol
   */
  private findDefinition(symbol: GosuASTSymbol, _symbolTable: GosuSymbolTable, _document: TextDocument): Range | null {
    // For now, we only handle definitions within the same file
    if (symbol.line === undefined || symbol.column === undefined) {
      return null
    }

    // If the symbol has a location, use it as the definition
    const range: Range = {
      start: {
        line: symbol.line - 1, // Convert from 1-based to 0-based
        character: symbol.column,
      },
      end: {
        line: symbol.line - 1, // Convert from 1-based to 0-based
        character: symbol.column + (symbol.name?.length || 0),
      },
    }

    return range
  }

  /**
   * Get or update the symbol table for a document
   */
  private getOrUpdateSymbolTable(document: TextDocument): GosuSymbolTable | null {
    try {
      const cached = this.cache.get(document.uri)
      if (cached) {
        debug(`Using cached symbol table for ${document.uri}`)
        return cached
      }

      debug(`Parsing document for symbol table: ${document.uri}`)
      const parseResult = this.parser.parseText(document.getText(), document.uri)

      if (!parseResult.ast) {
        debug("Failed to parse document")
        return null
      }

      const symbolTable = this.symbolExtractor.extractSymbols(document.uri, parseResult.ast)
      this.cache.set(document.uri, symbolTable)

      debug(
        `Extracted ${symbolTable.classes.length} classes, ${symbolTable.functions.length} functions, ${symbolTable.variables.length} variables`,
      )
      return symbolTable
    } catch (error) {
      debug(`Error getting symbol table:`, error)
      return null
    }
  }

  /**
   * Clear the cache for a specific document
   */
  onDocumentChange(document: TextDocument): void {
    debug(`Document changed: ${document.uri}, clearing cache`)
    this.cache.delete(document.uri)
  }

  /**
   * Clear all caches
   */
  clearAllCaches(): void {
    debug("Clearing all definition provider caches")
    this.cache.clear()
  }
}
