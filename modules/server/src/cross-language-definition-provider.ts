import { TextDocument } from 'vscode-languageserver-textdocument';
import {
  Definition,
  Location,
  Position,
  Range
} from 'vscode-languageserver/node';
import { GosuDefinitionProvider } from './definition-provider';
import { GosuJavaSymbolResolver } from './java-symbol-resolver';
import { GosuSymbolExtractor } from './symbol-extractor';
import { GosuParser } from '@gosu-lsp/parser';
import { GosuSymbolTable, GosuASTSymbol, JavaResolverConfig } from '@gosu-lsp/shared';
import Debug from 'debug';

const debugLog = Debug('gosu:lsp:cross-language-definition');

export interface CrossLanguageDefinitionResult {
  location?: Location;
  symbol?: GosuASTSymbol;
  isJavaType?: boolean;
}

/**
 * Cross-language definition provider that supports navigation between Gosu and Java
 */
export class GosuCrossLanguageDefinitionProvider {
  private gosuDefinitionProvider: GosuDefinitionProvider;
  private javaSymbolResolver: GosuJavaSymbolResolver;
  private parser: GosuParser;
  private symbolExtractor: GosuSymbolExtractor;
  private cache = new Map<string, GosuSymbolTable>();

  constructor(javaConfig: JavaResolverConfig) {
    this.gosuDefinitionProvider = new GosuDefinitionProvider();
    this.javaSymbolResolver = new GosuJavaSymbolResolver(javaConfig);
    this.parser = new GosuParser();
    this.symbolExtractor = new GosuSymbolExtractor(this.parser);
    debugLog('Initialized GosuCrossLanguageDefinitionProvider with Java config: %O', javaConfig);
  }

  /**
   * Get the definition of the symbol at the given position (supports both Gosu and Java)
   */
  async getDefinition(document: TextDocument, position: Position): Promise<Definition | null> {
    debugLog(`Getting definition for ${document.uri} at ${position.line}:${position.character}`);

    try {
      // First try to get the symbol at the position
      const symbolTable = this.getOrUpdateSymbolTable(document);
      if (!symbolTable) {
        debugLog('No symbol table available');
        return null;
      }

      const symbolAtPosition = this.findSymbolAtPosition(document, position, symbolTable);
      if (!symbolAtPosition) {
        debugLog('No symbol found at position');
        return null;
      }

      debugLog(`Found symbol: ${symbolAtPosition.name} (type: ${symbolAtPosition.type}, dataType: ${symbolAtPosition.dataType})`);

      // Try Java resolution first if this looks like a Java type
      if (await this.isJavaType(symbolAtPosition, symbolTable)) {
        debugLog(`Symbol ${symbolAtPosition.name} identified as Java type`);
        const javaDefinition = await this.resolveJavaDefinition(symbolAtPosition, symbolTable, document);
        if (javaDefinition) {
          debugLog(`Resolved Java definition for ${symbolAtPosition.name}`);
          return javaDefinition;
        }
      } else {
        debugLog(`Symbol ${symbolAtPosition.name} not identified as Java type`);
      }

      // Fall back to Gosu-only definition
      const gosuDefinition = await this.gosuDefinitionProvider.getDefinition(document, position);
      if (gosuDefinition) {
        debugLog(`Resolved Gosu definition for ${symbolAtPosition.name}`);
        return gosuDefinition;
      }

      debugLog(`No definition found for ${symbolAtPosition.name}`);
      return null;

    } catch (error) {
      debugLog(`Error getting cross-language definition:`, error);
      return null;
    }
  }

  /**
   * Update Java resolver configuration
   */
  updateConfiguration(config: JavaResolverConfig): void {
    debugLog('Updating cross-language definition provider configuration');
    this.javaSymbolResolver.updateConfiguration(config);
    
    // Clear our cache as well
    this.cache.clear();
  }

  /**
   * Clear cache for a specific document
   */
  onDocumentChange(document: TextDocument): void {
    debugLog(`Document changed: ${document.uri}, clearing cache`);
    this.cache.delete(document.uri);
    this.gosuDefinitionProvider.onDocumentChange(document);
  }

  /**
   * Clear all caches
   */
  clearAllCaches(): void {
    debugLog('Clearing all cross-language definition provider caches');
    this.cache.clear();
    this.gosuDefinitionProvider.clearAllCaches();
  }

  /**
   * Determine if a symbol is likely a Java type
   */
  private async isJavaType(symbol: GosuASTSymbol, symbolTable: GosuSymbolTable): Promise<boolean> {
    // Check if the symbol is an import (likely Java)
    if (symbol.type === 'import') {
      return true;
    }

    // For member access (methods/fields), check if the dataType is a Java type
    if (symbol.type === 'function' && symbol.dataType) {
      debugLog(`Checking member access: ${symbol.name} on type ${symbol.dataType}`);
      
      // Check if dataType is a direct Java type
      const directJavaType = await this.javaSymbolResolver.resolveJavaType(symbol.dataType);
      if (directJavaType) {
        debugLog(`Direct Java type resolved: ${symbol.dataType}`);
        return true;
      }

      // Check if dataType matches any imported Java types
      for (const importStatement of symbolTable.imports) {
        // Check direct imports
        if (importStatement.path.endsWith(`.${symbol.dataType}`)) {
          const javaType = await this.javaSymbolResolver.resolveJavaType(importStatement.path);
          if (javaType) {
            debugLog(`Found via direct import: ${importStatement.path}`);
            return true;
          }
        }
        
        // Check wildcard imports
        if (importStatement.isWildcard) {
          const packageName = importStatement.path.replace('.*', '');
          const fullyQualifiedName = `${packageName}.${symbol.dataType}`;
          const javaType = await this.javaSymbolResolver.resolveJavaType(fullyQualifiedName);
          if (javaType) {
            debugLog(`Found via wildcard import: ${fullyQualifiedName}`);
            return true;
          }
        }
      }

      // Check if it's an implicit java.lang type
      const javaLangType = `java.lang.${symbol.dataType}`;
      const implicitType = await this.javaSymbolResolver.resolveJavaType(javaLangType);
      if (implicitType) {
        debugLog(`Found as implicit java.lang type: ${javaLangType}`);
        return true;
      }
    }

    // Check if the symbol's data type is a known Java type (for non-member access)
    if (symbol.dataType) {
      // Try to resolve as Java type
      const javaType = await this.javaSymbolResolver.resolveJavaType(symbol.dataType);
      if (javaType) {
        return true;
      }
    }

    // Check if the symbol name matches any imported Java types (for type references)
    const symbolName = symbol.name;
    for (const importStatement of symbolTable.imports) {
      // Check direct imports
      if (importStatement.path.endsWith(`.${symbolName}`)) {
        const javaType = await this.javaSymbolResolver.resolveJavaType(importStatement.path);
        if (javaType) {
          return true;
        }
      }
      
      // Check wildcard imports
      if (importStatement.isWildcard) {
        const packageName = importStatement.path.replace('.*', '');
        const fullyQualifiedName = `${packageName}.${symbolName}`;
        const javaType = await this.javaSymbolResolver.resolveJavaType(fullyQualifiedName);
        if (javaType) {
          return true;
        }
      }
    }

    // Check if it's an implicit java.lang type
    const javaLangType = `java.lang.${symbolName}`;
    const implicitType = await this.javaSymbolResolver.resolveJavaType(javaLangType);
    if (implicitType) {
      return true;
    }

    return false;
  }

  /**
   * Resolve Java definition for a symbol
   */
  private async resolveJavaDefinition(
    symbol: GosuASTSymbol,
    symbolTable: GosuSymbolTable,
    document: TextDocument
  ): Promise<Definition | null> {
    debugLog(`Resolving Java definition for symbol: ${symbol.name} (type: ${symbol.type}, dataType: ${symbol.dataType})`);

    try {
      let targetTypeName: string | null = null;

      // Determine the Java type to resolve
      if (symbol.type === 'import') {
        debugLog(`Processing import symbol`);
        targetTypeName = symbol.dataType || null;
      } else if (symbol.type === 'function' && symbol.dataType) {
        // For member access (methods), resolve the containing type
        debugLog(`Processing member access: ${symbol.name} on type ${symbol.dataType}`);
        
        // Need to resolve short name to full qualified name using imports
        let fullyQualifiedTypeName = symbol.dataType;
        
        // If it's a short name, try to resolve it using imports
        if (!fullyQualifiedTypeName.includes('.')) {
          debugLog(`Resolving short type name: ${fullyQualifiedTypeName}`);
          
          // Check specific imports first
          for (const importInfo of symbolTable.imports) {
            if (importInfo.path.endsWith(`.${fullyQualifiedTypeName}`)) {
              fullyQualifiedTypeName = importInfo.path;
              debugLog(`Found via direct import: ${fullyQualifiedTypeName}`);
              break;
            }
          }
          
          // If not found and it looks like a java.lang type, add java.lang prefix
          if (!fullyQualifiedTypeName.includes('.') && this.isJavaLangType(fullyQualifiedTypeName)) {
            fullyQualifiedTypeName = `java.lang.${fullyQualifiedTypeName}`;
            debugLog(`Resolved as java.lang type: ${fullyQualifiedTypeName}`);
          }
        }
        
        debugLog(`Attempting to resolve fully qualified type: ${fullyQualifiedTypeName}`);
        const directType = await this.javaSymbolResolver.resolveJavaType(fullyQualifiedTypeName);
        if (directType) {
          debugLog(`Resolved dataType ${symbol.dataType} to ${directType.fullyQualifiedName}`);
          targetTypeName = directType.fullyQualifiedName;
        } else {
          debugLog(`Failed to resolve dataType ${fullyQualifiedTypeName}`);
        }
      } else {
        debugLog(`Processing other symbol type`);
        // Try to resolve the symbol name using imports
        const imports = symbolTable.imports.map(imp => imp.path);
        const resolvedType = await this.javaSymbolResolver.resolveImportedType(symbol.name, imports);
        if (resolvedType) {
          targetTypeName = resolvedType.fullyQualifiedName;
        } else if (symbol.dataType) {
          // Try direct resolution of the data type
          const directType = await this.javaSymbolResolver.resolveJavaType(symbol.dataType);
          if (directType) {
            targetTypeName = directType.fullyQualifiedName;
          }
        }
      }

      if (!targetTypeName) {
        debugLog(`Could not determine target Java type for ${symbol.name}`);
        return null;
      }

      debugLog(`Target type name: ${targetTypeName}`);

      // For now, create a virtual Java definition location
      // In a real implementation, this would point to actual Java source files
      const javaDefinition: Definition = {
        uri: `java:///${targetTypeName.replace(/\./g, '/')}.java`,
        range: {
          start: { line: 0, character: 0 },
          end: { line: 0, character: targetTypeName.split('.').pop()?.length || 0 }
        }
      };

      debugLog(`Created Java definition for ${targetTypeName} (originally ${symbol.name})`);
      return javaDefinition;

    } catch (error) {
      debugLog(`Error resolving Java definition for ${symbol.name}:`, error);
      return null;
    }
  }

  /**
   * Find the symbol at the given position (enhanced for cross-language support)
   */
  private findSymbolAtPosition(
    document: TextDocument,
    position: Position,
    symbolTable: GosuSymbolTable
  ): GosuASTSymbol | null {
    const line = document.getText().split('\n')[position.line];
    if (!line) {
      return null;
    }

    // Get the word at the position
    const wordInfo = this.getWordAtPosition(line, position.character);
    if (!wordInfo) {
      return null;
    }

    const { word } = wordInfo;
    debugLog(`Looking for symbol: ${word}`);

    // Check for member access (e.g., obj.method())
    const memberAccessInfo = this.detectMemberAccess(line, position.character, word);
    if (memberAccessInfo) {
      debugLog(`Detected member access: ${memberAccessInfo.objectName}.${memberAccessInfo.memberName}`);
      
      // Find the object's type and create a symbol for the member
      const objectType = this.resolveObjectType(memberAccessInfo.objectName, symbolTable);
      if (objectType) {
        return {
          name: memberAccessInfo.memberName,
          type: 'function',
          line: position.line + 1,
          column: position.character,
          dataType: objectType // Use object's type to resolve the member
        } as GosuASTSymbol;
      }
    }

    // Check for generic type references like Map<String, Object>
    const genericMatch = this.detectGenericTypeReference(line, position.character, word);
    if (genericMatch) {
      debugLog(`Detected generic type: ${genericMatch.typeName}`);
      return {
        name: genericMatch.typeName,
        type: 'class',
        line: position.line + 1,
        column: position.character,
        dataType: genericMatch.typeName
      } as GosuASTSymbol;
    }

    // Search through AST symbols to find a match
    const allSymbols = [
      ...symbolTable.classes,
      ...symbolTable.functions,
      ...symbolTable.variables
    ];

    // First try exact name match
    let matchedSymbol = allSymbols.find(symbol => symbol.name === word);
    
    // If no exact match, try partial matches for member access
    if (!matchedSymbol) {
      matchedSymbol = allSymbols.find(symbol =>
        symbol.name && symbol.name.includes(word)
      );
    }

    // If still no match, check imports and convert to AST symbol
    if (!matchedSymbol) {
      const importMatch = symbolTable.imports.find(imp => {
        // Check if the word matches the imported class name
        const className = imp.path.split('.').pop();
        return className === word || imp.name === word;
      });
      
      if (importMatch) {
        return {
          name: word,
          type: 'import',
          line: importMatch.line,
          column: importMatch.column,
          dataType: importMatch.path
        } as GosuASTSymbol;
      }
    }

    // Create a symbol for potential Java types even if not explicitly imported
    if (!matchedSymbol) {
      // This could be a Java type reference without explicit import
      return {
        name: word,
        type: 'class', // Assume it's a class reference
        line: position.line + 1,
        column: position.character,
        dataType: word // Use the word itself as the potential type
      } as GosuASTSymbol;
    }

    return matchedSymbol;
  }

  /**
   * Detect member access patterns (obj.member)
   */
  private detectMemberAccess(line: string, character: number, currentWord: string): { objectName: string; memberName: string } | null {
    debugLog(`Detecting member access in line: "${line}" at character ${character}, word: "${currentWord}"`);
    
    // Find the start and end of the current word
    const wordInfo = this.getWordAtPosition(line, character);
    if (!wordInfo) {
      debugLog('No word info found');
      return null;
    }

    debugLog(`Word info: start=${wordInfo.start}, end=${wordInfo.end}, word="${wordInfo.word}"`);

    // Look backwards from the start of the current word for a dot
    let dotPosition = -1;
    for (let i = wordInfo.start - 1; i >= 0; i--) {
      if (line[i] === '.') {
        dotPosition = i;
        debugLog(`Found dot at position ${i}`);
        break;
      }
      if (!/\s/.test(line[i])) {
        debugLog(`Found non-whitespace '${line[i]}' at position ${i}, stopping search`);
        break; // Non-whitespace that's not a dot
      }
    }

    if (dotPosition === -1) {
      debugLog('No dot found before current word');
      return null;
    }

    // Find the object name before the dot
    let objectStart = dotPosition - 1;
    while (objectStart >= 0 && this.isWordCharacter(line[objectStart])) {
      objectStart--;
    }
    objectStart++; // Move to the first character of the object name

    const objectName = line.substring(objectStart, dotPosition);
    if (!objectName) {
      debugLog('No object name found before dot');
      return null;
    }

    debugLog(`Detected member access: ${objectName}.${currentWord}`);
    return {
      objectName,
      memberName: currentWord
    };
  }

  /**
   * Resolve the type of an object (variable)
   */
  private resolveObjectType(objectName: string, symbolTable: GosuSymbolTable): string | null {
    debugLog(`Resolving object type for: ${objectName}`);
    
    // Find the variable declaration
    const variable = symbolTable.variables.find(v => v.name === objectName);
    if (variable && variable.dataType) {
      debugLog(`Found variable ${objectName} with type: ${variable.dataType}`);
      return this.stripGenericParameters(variable.dataType);
    }

    // Check if it's a parameter or local variable within functions
    for (const func of symbolTable.functions) {
      if (func.parameters) {
        const param = func.parameters.find(p => p.name === objectName);
        if (param && param.type) {
          debugLog(`Found parameter ${objectName} with type: ${param.type}`);
          return this.stripGenericParameters(param.type);
        }
      }
    }

    // If not found in symbol table, try to infer from common Java types
    // This is a fallback for cases where symbol extraction might miss some declarations
    const commonJavaTypes = new Map([
      ['String', 'java.lang.String'],
      ['List', 'java.util.List'],
      ['ArrayList', 'java.util.ArrayList'],
      ['Map', 'java.util.Map'],
      ['HashMap', 'java.util.HashMap'],
      ['Set', 'java.util.Set'],
      ['HashSet', 'java.util.HashSet']
    ]);

    // Check if this might be a Java standard library type
    for (const [shortName, fullName] of commonJavaTypes) {
      if (objectName.toLowerCase().includes(shortName.toLowerCase())) {
        debugLog(`Inferred type for ${objectName}: ${fullName}`);
        return fullName;
      }
    }

    debugLog(`Could not resolve type for object: ${objectName}`);
    return null;
  }

  /**
   * Strip generic parameters from a type name (e.g., "List<String>" -> "List")
   */
  private stripGenericParameters(typeName: string): string {
    const genericIndex = typeName.indexOf('<');
    if (genericIndex !== -1) {
      return typeName.substring(0, genericIndex);
    }
    return typeName;
  }

  /**
   * Detect generic type references like Map<String, Object>
   */
  private detectGenericTypeReference(line: string, character: number, currentWord: string): { typeName: string } | null {
    // Check if the current word is followed by a generic parameter list
    const wordInfo = this.getWordAtPosition(line, character);
    if (!wordInfo) {
      return null;
    }

    // Look ahead from the end of the current word for angle brackets
    let i = wordInfo.end;
    while (i < line.length && /\s/.test(line[i])) {
      i++; // Skip whitespace
    }

    if (i < line.length && line[i] === '<') {
      // This is a generic type reference
      return { typeName: currentWord };
    }

    // Also check for nested generics like Map<String, List<Integer>>
    // where we might be clicking on "List" inside the angle brackets
    const beforeWord = line.substring(0, wordInfo.start);
    const afterWord = line.substring(wordInfo.end);
    
    // Check if we're inside angle brackets
    const openBrackets = (beforeWord.match(/</g) || []).length;
    const closeBrackets = (beforeWord.match(/>/g) || []).length;
    
    if (openBrackets > closeBrackets) {
      // We're inside generic parameters
      return { typeName: currentWord };
    }

    return null;
  }

  /**
   * Get the word at the specified character position in a line
   */
  private getWordAtPosition(line: string, character: number): { word: string; start: number; end: number } | null {
    if (character < 0 || character >= line.length) {
      return null;
    }

    // Find word boundaries
    let start = character;
    let end = character;

    // Move start backward to find word beginning
    while (start > 0 && this.isWordCharacter(line[start - 1])) {
      start--;
    }

    // Move end forward to find word ending
    while (end < line.length && this.isWordCharacter(line[end])) {
      end++;
    }

    if (start === end) {
      return null;
    }

    const word = line.substring(start, end);
    return { word, start, end };
  }

  /**
   * Check if a character is part of a word (identifier)
   */
  private isWordCharacter(char: string): boolean {
    return /[a-zA-Z0-9_]/.test(char);
  }

  /**
   * Get or update the symbol table for a document
   */
  private getOrUpdateSymbolTable(document: TextDocument): GosuSymbolTable | null {
    try {
      const cached = this.cache.get(document.uri);
      if (cached) {
        debugLog(`Using cached symbol table for ${document.uri}`);
        return cached;
      }

      debugLog(`Parsing document for symbol table: ${document.uri}`);
      const parseResult = this.parser.parseText(document.getText(), document.uri);
      
      if (!parseResult.ast) {
        debugLog('Failed to parse document');
        return null;
      }

      const symbolTable = this.symbolExtractor.extractSymbols(document.uri, parseResult.ast);
      this.cache.set(document.uri, symbolTable);
      
      debugLog(`Extracted ${symbolTable.classes.length} classes, ${symbolTable.functions.length} functions, ${symbolTable.variables.length} variables`);
      return symbolTable;

    } catch (error) {
      debugLog(`Error getting symbol table:`, error);
      return null;
    }
  }

  /**
   * Check if a type name is a common java.lang type
   */
  private isJavaLangType(typeName: string): boolean {
    const javaLangTypes = [
      'String', 'Object', 'Integer', 'Long', 'Double', 'Float',
      'Boolean', 'Character', 'Byte', 'Short', 'Number',
      'Class', 'Thread', 'Throwable', 'Exception', 'RuntimeException',
      'Error', 'System', 'Math', 'StringBuilder', 'StringBuffer'
    ];
    return javaLangTypes.includes(typeName);
  }
}