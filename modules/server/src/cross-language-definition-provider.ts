import { pathToFileURL } from "node:url"
import { GosuParser } from "@gosu-lsp/parser"
import type { GosuASTSymbol, GosuSymbolTable, JavaResolverConfig } from "@gosu-lsp/shared"
import Debug from "debug"
import type { Definition, Location, Position } from "vscode-languageserver/node"
import type { TextDocument } from "vscode-languageserver-textdocument"
import { GosuDefinitionProvider } from "./definition-provider"
import { GosuJavaSymbolResolver } from "./java-symbol-resolver"
import { GosuSymbolExtractor } from "./symbol-extractor"

const debug = Debug("gosu:lsp:cross-language-definition")

export interface CrossLanguageDefinitionResult {
  location?: Location
  symbol?: GosuASTSymbol
  isJavaType?: boolean
}

/**
 * Cross-language definition provider that supports navigation between Gosu and Java
 */
export class GosuCrossLanguageDefinitionProvider {
  private gosuDefinitionProvider: GosuDefinitionProvider
  private javaSymbolResolver: GosuJavaSymbolResolver
  private parser: GosuParser
  private symbolExtractor: GosuSymbolExtractor
  private cache = new Map<string, GosuSymbolTable>()

  constructor(javaConfig: JavaResolverConfig) {
    this.gosuDefinitionProvider = new GosuDefinitionProvider()
    this.javaSymbolResolver = new GosuJavaSymbolResolver(javaConfig)
    this.parser = new GosuParser()
    this.symbolExtractor = new GosuSymbolExtractor(this.parser)
    debug("Initialized GosuCrossLanguageDefinitionProvider with Java config: %O", javaConfig)
  }

  /**
   * Get the definition of the symbol at the given position (supports both Gosu and Java)
   */
  async getDefinition(document: TextDocument, position: Position): Promise<Definition | null> {
    debug(`Getting definition for ${document.uri} at ${position.line}:${position.character}`)

    try {
      // First try to get the symbol at the position
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

      debug(
        `Found symbol: ${symbolAtPosition.name} (type: ${symbolAtPosition.type}, dataType: ${symbolAtPosition.dataType})`,
      )

      // Try Java resolution first if this looks like a Java type
      if (await this.isJavaType(symbolAtPosition, symbolTable)) {
        debug(`Symbol ${symbolAtPosition.name} identified as Java type`)
        const javaDefinition = await this.resolveJavaDefinition(symbolAtPosition, symbolTable, document)
        if (javaDefinition) {
          debug(`Resolved Java definition for ${symbolAtPosition.name}`)
          return javaDefinition
        }
      } else {
        debug(`Symbol ${symbolAtPosition.name} not identified as Java type`)
      }

      // Fall back to Gosu-only definition
      const gosuDefinition = await this.gosuDefinitionProvider.getDefinition(document, position)
      if (gosuDefinition) {
        debug(`Resolved Gosu definition for ${symbolAtPosition.name}`)
        return gosuDefinition
      }

      debug(`No definition found for ${symbolAtPosition.name}`)
      return null
    } catch (error) {
      debug(`Error getting cross-language definition:`, error)
      return null
    }
  }

  /**
   * Update Java resolver configuration
   */
  updateConfiguration(config: JavaResolverConfig): void {
    debug("Updating cross-language definition provider configuration")
    this.javaSymbolResolver.updateConfiguration(config)

    // Clear our cache as well
    this.cache.clear()
  }

  /**
   * Clear cache for a specific document
   */
  onDocumentChange(document: TextDocument): void {
    debug(`Document changed: ${document.uri}, clearing cache`)
    this.cache.delete(document.uri)
    this.gosuDefinitionProvider.onDocumentChange(document)
  }

  /**
   * Clear all caches
   */
  clearAllCaches(): void {
    debug("Clearing all cross-language definition provider caches")
    this.cache.clear()
    this.gosuDefinitionProvider.clearAllCaches()
  }

  /**
   * Determine if a symbol is likely a Java type
   */
  private async isJavaType(symbol: GosuASTSymbol, symbolTable: GosuSymbolTable): Promise<boolean> {
    // Check if the symbol is an import (likely Java)
    if (symbol.type === "import") {
      return true
    }

    // For member access (methods/fields), check if the dataType is a Java type
    if (symbol.type === "function" && symbol.dataType) {
      debug(`Checking member access: ${symbol.name} on type ${symbol.dataType}`)

      // Check if dataType is a direct Java type
      const directJavaType = await this.javaSymbolResolver.resolveJavaType(symbol.dataType)
      if (directJavaType) {
        debug(`Direct Java type resolved: ${symbol.dataType}`)
        return true
      }

      // Check if dataType matches any imported Java types
      for (const importStatement of symbolTable.imports) {
        // Check direct imports
        if (importStatement.path.endsWith(`.${symbol.dataType}`)) {
          const javaType = await this.javaSymbolResolver.resolveJavaType(importStatement.path)
          if (javaType) {
            debug(`Found via direct import: ${importStatement.path}`)
            return true
          }
        }

        // Check wildcard imports
        if (importStatement.isWildcard) {
          const packageName = importStatement.path.replace(".*", "")
          const fullyQualifiedName = `${packageName}.${symbol.dataType}`
          const javaType = await this.javaSymbolResolver.resolveJavaType(fullyQualifiedName)
          if (javaType) {
            debug(`Found via wildcard import: ${fullyQualifiedName}`)
            return true
          }
        }
      }

      // Check if it's an implicit java.lang type
      const javaLangType = `java.lang.${symbol.dataType}`
      const implicitType = await this.javaSymbolResolver.resolveJavaType(javaLangType)
      if (implicitType) {
        debug(`Found as implicit java.lang type: ${javaLangType}`)
        return true
      }
    }

    // Check if the symbol's data type is a known Java type (for non-member access)
    if (symbol.dataType) {
      // Try to resolve as Java type
      const javaType = await this.javaSymbolResolver.resolveJavaType(symbol.dataType)
      if (javaType) {
        return true
      }
    }

    // Check if the symbol name matches any imported Java types (for type references)
    const symbolName = symbol.name
    for (const importStatement of symbolTable.imports) {
      // Check direct imports
      if (importStatement.path.endsWith(`.${symbolName}`)) {
        const javaType = await this.javaSymbolResolver.resolveJavaType(importStatement.path)
        if (javaType) {
          return true
        }
      }

      // Check wildcard imports
      if (importStatement.isWildcard) {
        const packageName = importStatement.path.replace(".*", "")
        const fullyQualifiedName = `${packageName}.${symbolName}`
        const javaType = await this.javaSymbolResolver.resolveJavaType(fullyQualifiedName)
        if (javaType) {
          return true
        }
      }
    }

    // Check if it's an implicit java.lang type
    const javaLangType = `java.lang.${symbolName}`
    const implicitType = await this.javaSymbolResolver.resolveJavaType(javaLangType)
    if (implicitType) {
      return true
    }

    return false
  }

  /**
   * Resolve Java definition for a symbol
   */
  private async resolveJavaDefinition(
    symbol: GosuASTSymbol,
    symbolTable: GosuSymbolTable,
    _document: TextDocument,
  ): Promise<Definition | null> {
    debug(`Resolving Java definition for symbol: ${symbol.name} (type: ${symbol.type}, dataType: ${symbol.dataType})`)

    try {
      let targetTypeName: string | null = null
      let resolvedJavaType: Awaited<ReturnType<GosuJavaSymbolResolver["resolveJavaType"]>> | null = null

      // Determine the Java type to resolve
      if (symbol.type === "import") {
        debug(`Processing import symbol`)
        targetTypeName = symbol.dataType || null
        if (targetTypeName) {
          resolvedJavaType = await this.javaSymbolResolver.resolveJavaType(targetTypeName)
        }
      } else if (symbol.type === "function" && symbol.dataType) {
        // For member access (methods), resolve the containing type
        debug(`Processing member access: ${symbol.name} on type ${symbol.dataType}`)

        // Need to resolve short name to full qualified name using imports
        let fullyQualifiedTypeName = symbol.dataType

        // If it's a short name, try to resolve it using imports
        if (!fullyQualifiedTypeName.includes(".")) {
          debug(`Resolving short type name: ${fullyQualifiedTypeName}`)

          // Check specific imports first
          for (const importInfo of symbolTable.imports) {
            if (importInfo.path.endsWith(`.${fullyQualifiedTypeName}`)) {
              fullyQualifiedTypeName = importInfo.path
              debug(`Found via direct import: ${fullyQualifiedTypeName}`)
              break
            }
          }

          // If not found and it looks like a java.lang type, add java.lang prefix
          if (!fullyQualifiedTypeName.includes(".") && this.isJavaLangType(fullyQualifiedTypeName)) {
            fullyQualifiedTypeName = `java.lang.${fullyQualifiedTypeName}`
            debug(`Resolved as java.lang type: ${fullyQualifiedTypeName}`)
          }
        }

        debug(`Attempting to resolve fully qualified type: ${fullyQualifiedTypeName}`)
        const directType = await this.javaSymbolResolver.resolveJavaType(fullyQualifiedTypeName)
        if (directType) {
          debug(`Resolved dataType ${symbol.dataType} to ${directType.fullyQualifiedName}`)
          targetTypeName = directType.fullyQualifiedName
          resolvedJavaType = directType
        } else {
          debug(`Failed to resolve dataType ${fullyQualifiedTypeName}`)
        }
      } else {
        debug(`Processing other symbol type`)
        // Try to resolve the symbol name using imports
        const imports = symbolTable.imports.map((imp) => imp.path)
        const resolvedType = await this.javaSymbolResolver.resolveImportedType(symbol.name, imports)
        if (resolvedType) {
          targetTypeName = resolvedType.fullyQualifiedName
          resolvedJavaType = resolvedType
        } else if (symbol.dataType) {
          // Try direct resolution of the data type
          const directType = await this.javaSymbolResolver.resolveJavaType(symbol.dataType)
          if (directType) {
            targetTypeName = directType.fullyQualifiedName
            resolvedJavaType = directType
          }
        }
      }

      if (!targetTypeName) {
        debug(`Could not determine target Java type for ${symbol.name}`)
        return null
      }

      debug(`Target type name: ${targetTypeName}`)

      if (!resolvedJavaType) {
        resolvedJavaType = await this.javaSymbolResolver.resolveJavaType(targetTypeName)
      }

      const uri = resolvedJavaType?.sourceFilePath
        ? pathToFileURL(resolvedJavaType.sourceFilePath).href
        : `java:///${targetTypeName.replace(/\./g, "/")}.java`

      const nameLength = targetTypeName.split(".").pop()?.length || 0

      const javaDefinition: Definition = {
        uri,
        range: {
          start: { line: 0, character: 0 },
          end: { line: 0, character: nameLength },
        },
      }

      debug(`Created Java definition for ${targetTypeName} (originally ${symbol.name}) -> ${uri}`)
      return javaDefinition
    } catch (error) {
      debug(`Error resolving Java definition for ${symbol.name}:`, error)
      return null
    }
  }

  /**
   * Find the symbol at the given position (enhanced for cross-language support)
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

    // Check for member access (e.g., obj.method())
    const memberAccessInfo = this.detectMemberAccess(line, position.character, word)
    if (memberAccessInfo) {
      debug(`Detected member access: ${memberAccessInfo.objectName}.${memberAccessInfo.memberName}`)

      // Find the object's type and create a symbol for the member
      const objectType = this.resolveObjectType(memberAccessInfo.objectName, symbolTable)
      if (objectType) {
        return {
          name: memberAccessInfo.memberName,
          type: "function",
          line: position.line + 1,
          column: position.character,
          dataType: objectType, // Use object's type to resolve the member
        } as GosuASTSymbol
      }
    }

    // Check for generic type references like Map<String, Object>
    const genericMatch = this.detectGenericTypeReference(line, position.character, word)
    if (genericMatch) {
      debug(`Detected generic type: ${genericMatch.typeName}`)
      return {
        name: genericMatch.typeName,
        type: "class",
        line: position.line + 1,
        column: position.character,
        dataType: genericMatch.typeName,
      } as GosuASTSymbol
    }

    // Search through AST symbols to find a match
    const allSymbols = [...symbolTable.classes, ...symbolTable.functions, ...symbolTable.variables]

    // First try exact name match
    let matchedSymbol = allSymbols.find((symbol) => symbol.name === word)

    // If still no match, check imports and convert to AST symbol
    if (!matchedSymbol) {
      const importMatch = symbolTable.imports.find((imp) => {
        // Check if the word matches the imported class name
        const className = imp.path.split(".").pop()
        return className === word || imp.name === word
      })

      if (importMatch) {
        return {
          name: word,
          type: "import",
          line: importMatch.line,
          column: importMatch.column,
          dataType: importMatch.path,
        } as GosuASTSymbol
      }
    }

    // If no exact or import match, try partial matches for member access
    if (!matchedSymbol) {
      matchedSymbol = allSymbols.find((symbol) => symbol.name?.includes(word))
    }

    // Create a symbol for potential Java types even if not explicitly imported
    if (!matchedSymbol) {
      // This could be a Java type reference without explicit import
      return {
        name: word,
        type: "class", // Assume it's a class reference
        line: position.line + 1,
        column: position.character,
        dataType: word, // Use the word itself as the potential type
      } as GosuASTSymbol
    }

    return matchedSymbol
  }

  /**
   * Detect member access patterns (obj.member)
   */
  private detectMemberAccess(
    line: string,
    character: number,
    currentWord: string,
  ): { objectName: string; memberName: string } | null {
    debug(`Detecting member access in line: "${line}" at character ${character}, word: "${currentWord}"`)

    // Find the start and end of the current word
    const wordInfo = this.getWordAtPosition(line, character)
    if (!wordInfo) {
      debug("No word info found")
      return null
    }

    debug(`Word info: start=${wordInfo.start}, end=${wordInfo.end}, word="${wordInfo.word}"`)

    // Look backwards from the start of the current word for a dot
    let dotPosition = -1
    for (let i = wordInfo.start - 1; i >= 0; i--) {
      if (line[i] === ".") {
        dotPosition = i
        debug(`Found dot at position ${i}`)
        break
      }
      if (!/\s/.test(line[i])) {
        debug(`Found non-whitespace '${line[i]}' at position ${i}, stopping search`)
        break // Non-whitespace that's not a dot
      }
    }

    if (dotPosition === -1) {
      debug("No dot found before current word")
      return null
    }

    // Find the object name before the dot
    let objectStart = dotPosition - 1
    while (objectStart >= 0 && this.isWordCharacter(line[objectStart])) {
      objectStart--
    }
    objectStart++ // Move to the first character of the object name

    const objectName = line.substring(objectStart, dotPosition)
    if (!objectName) {
      debug("No object name found before dot")
      return null
    }

    debug(`Detected member access: ${objectName}.${currentWord}`)
    return {
      objectName,
      memberName: currentWord,
    }
  }

  /**
   * Resolve the type of an object (variable)
   */
  private resolveObjectType(objectName: string, symbolTable: GosuSymbolTable): string | null {
    debug(`Resolving object type for: ${objectName}`)

    // Find the variable declaration
    const variable = symbolTable.variables.find((v) => v.name === objectName)
    if (variable?.dataType) {
      debug(`Found variable ${objectName} with type: ${variable.dataType}`)
      return this.stripGenericParameters(variable.dataType)
    }

    // Check if it's a parameter or local variable within functions
    for (const func of symbolTable.functions) {
      if (func.parameters) {
        const param = func.parameters.find((p) => p.name === objectName)
        if (param?.type) {
          debug(`Found parameter ${objectName} with type: ${param.type}`)
          return this.stripGenericParameters(param.type)
        }
      }
    }

    // If not found in symbol table, try to infer from common Java types
    // This is a fallback for cases where symbol extraction might miss some declarations
    const commonJavaTypes = new Map([
      ["String", "java.lang.String"],
      ["List", "java.util.List"],
      ["ArrayList", "java.util.ArrayList"],
      ["Map", "java.util.Map"],
      ["HashMap", "java.util.HashMap"],
      ["Set", "java.util.Set"],
      ["HashSet", "java.util.HashSet"],
    ])

    // Check if this might be a Java standard library type
    for (const [shortName, fullName] of commonJavaTypes) {
      if (objectName.toLowerCase().includes(shortName.toLowerCase())) {
        debug(`Inferred type for ${objectName}: ${fullName}`)
        return fullName
      }
    }

    debug(`Could not resolve type for object: ${objectName}`)
    return null
  }

  /**
   * Strip generic parameters from a type name (e.g., "List<String>" -> "List")
   */
  private stripGenericParameters(typeName: string): string {
    const genericIndex = typeName.indexOf("<")
    if (genericIndex !== -1) {
      return typeName.substring(0, genericIndex)
    }
    return typeName
  }

  /**
   * Detect generic type references like Map<String, Object>
   */
  private detectGenericTypeReference(
    line: string,
    character: number,
    currentWord: string,
  ): { typeName: string } | null {
    // Check if the current word is followed by a generic parameter list
    const wordInfo = this.getWordAtPosition(line, character)
    if (!wordInfo) {
      return null
    }

    // Look ahead from the end of the current word for angle brackets
    let i = wordInfo.end
    while (i < line.length && /\s/.test(line[i])) {
      i++ // Skip whitespace
    }

    if (i < line.length && line[i] === "<") {
      // This is a generic type reference
      return { typeName: currentWord }
    }

    // Also check for nested generics like Map<String, List<Integer>>
    // where we might be clicking on "List" inside the angle brackets
    const beforeWord = line.substring(0, wordInfo.start)
    const _afterWord = line.substring(wordInfo.end)

    // Check if we're inside angle brackets
    const openBrackets = (beforeWord.match(/</g) || []).length
    const closeBrackets = (beforeWord.match(/>/g) || []).length

    if (openBrackets > closeBrackets) {
      // We're inside generic parameters
      return { typeName: currentWord }
    }

    return null
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
   * Check if a type name is a common java.lang type
   */
  private isJavaLangType(typeName: string): boolean {
    const javaLangTypes = [
      "String",
      "Object",
      "Integer",
      "Long",
      "Double",
      "Float",
      "Boolean",
      "Character",
      "Byte",
      "Short",
      "Number",
      "Class",
      "Thread",
      "Throwable",
      "Exception",
      "RuntimeException",
      "Error",
      "System",
      "Math",
      "StringBuilder",
      "StringBuffer",
    ]
    return javaLangTypes.includes(typeName)
  }
}
