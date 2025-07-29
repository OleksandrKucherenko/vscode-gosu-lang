import { TextDocument } from 'vscode-languageserver-textdocument';
import {
  Hover,
  Position,
  MarkupContent,
  MarkupKind
} from 'vscode-languageserver/node';
import { GosuParser } from '@gosu-lsp/parser';
import { GosuSymbolExtractor } from './symbol-extractor';
import { GosuSymbolTable, GosuASTSymbol } from '@gosu-lsp/shared';
import Debug from 'debug';

const debugLog = Debug('gosu:lsp:hover');

export interface HoverResult {
  hover?: Hover;
  symbol?: GosuASTSymbol;
}

export class GosuHoverProvider {
  private parser: GosuParser;
  private symbolExtractor: GosuSymbolExtractor;
  private cache = new Map<string, GosuSymbolTable>();

  constructor() {
    this.parser = new GosuParser();
    this.symbolExtractor = new GosuSymbolExtractor(this.parser);
  }

  /**
   * Get hover information for the symbol at the given position
   */
  async getHover(document: TextDocument, position: Position): Promise<Hover | null> {
    debugLog(`Getting hover for ${document.uri} at ${position.line}:${position.character}`);

    try {
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

      const hoverContent = this.createHoverContent(symbolAtPosition, symbolTable);
      if (!hoverContent) {
        debugLog(`No hover content generated for symbol: ${symbolAtPosition.name}`);
        return null;
      }

      const hover: Hover = {
        contents: hoverContent,
        range: {
          start: {
            line: position.line,
            character: this.getWordStartPosition(document, position)
          },
          end: {
            line: position.line,
            character: this.getWordEndPosition(document, position)
          }
        }
      };

      debugLog(`Generated hover for ${symbolAtPosition.name}`);
      return hover;

    } catch (error) {
      debugLog(`Error getting hover:`, error);
      return null;
    }
  }

  /**
   * Find the symbol at the given position in the document
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
      const importMatch = symbolTable.imports.find(imp => imp.name === word);
      if (importMatch) {
        return {
          name: importMatch.name,
          type: 'import',
          line: importMatch.line,
          column: importMatch.column,
          dataType: importMatch.path,
          documentation: `Import from ${importMatch.path}`
        } as GosuASTSymbol;
      }
    }

    return matchedSymbol || null;
  }

  /**
   * Create rich hover content for a symbol
   */
  private createHoverContent(symbol: GosuASTSymbol, symbolTable: GosuSymbolTable): MarkupContent | null {
    const parts: string[] = [];

    // Add symbol signature based on type
    const signature = this.createSymbolSignature(symbol);
    if (signature) {
      parts.push('```gosu\n' + signature + '\n```');
    }

    // Add type information
    const typeInfo = this.createTypeInformation(symbol);
    if (typeInfo) {
      parts.push(typeInfo);
    }

    // Add documentation if available
    if (symbol.documentation) {
      parts.push('---');
      parts.push(symbol.documentation);
    }

    // Add additional context information
    const contextInfo = this.createContextInformation(symbol);
    if (contextInfo) {
      parts.push('---');
      parts.push(contextInfo);
    }

    if (parts.length === 0) {
      return null;
    }

    return {
      kind: MarkupKind.Markdown,
      value: parts.join('\n\n')
    };
  }

  /**
   * Create symbol signature for display
   */
  private createSymbolSignature(symbol: GosuASTSymbol): string | null {
    switch (symbol.type) {
      case 'class':
        return this.createClassSignature(symbol);
      case 'interface':
        return this.createInterfaceSignature(symbol);
      case 'enhancement':
        return this.createEnhancementSignature(symbol);
      case 'function':
      case 'constructor':
        return this.createFunctionSignature(symbol);
      case 'variable':
      case 'field':
      case 'parameter':
        return this.createVariableSignature(symbol);
      case 'property':
        return this.createPropertySignature(symbol);
      case 'import':
        return this.createImportSignature(symbol);
      default:
        return `${symbol.type} ${symbol.name}`;
    }
  }

  /**
   * Create class signature
   */
  private createClassSignature(symbol: GosuASTSymbol): string {
    const modifiers: string[] = [];
    
    if (symbol.visibility && symbol.visibility !== 'internal') {
      modifiers.push(symbol.visibility);
    }
    if (symbol.isStatic) {
      modifiers.push('static');
    }
    if (symbol.isFinal) {
      modifiers.push('final');
    }

    const modifierStr = modifiers.length > 0 ? modifiers.join(' ') + ' ' : '';
    return `${modifierStr}class ${symbol.name}`;
  }

  /**
   * Create interface signature
   */
  private createInterfaceSignature(symbol: GosuASTSymbol): string {
    const modifiers: string[] = [];
    
    if (symbol.visibility && symbol.visibility !== 'public') {
      modifiers.push(symbol.visibility);
    }

    const modifierStr = modifiers.length > 0 ? modifiers.join(' ') + ' ' : '';
    return `${modifierStr}interface ${symbol.name}`;
  }

  /**
   * Create enhancement signature
   */
  private createEnhancementSignature(symbol: GosuASTSymbol): string {
    const modifiers: string[] = [];
    
    if (symbol.visibility && symbol.visibility !== 'public') {
      modifiers.push(symbol.visibility);
    }

    const modifierStr = modifiers.length > 0 ? modifiers.join(' ') + ' ' : '';
    const enhancedType = symbol.dataType ? ` : ${symbol.dataType}` : '';
    return `${modifierStr}enhancement ${symbol.name}${enhancedType}`;
  }

  /**
   * Create function signature
   */
  private createFunctionSignature(symbol: GosuASTSymbol): string {
    const modifiers: string[] = [];
    
    // Always show visibility if it exists
    if (symbol.visibility) {
      modifiers.push(symbol.visibility);
    }
    if (symbol.isStatic) {
      modifiers.push('static');
    }
    if (symbol.isFinal) {
      modifiers.push('final');
    }

    const modifierStr = modifiers.length > 0 ? modifiers.join(' ') + ' ' : '';
    const functionKeyword = symbol.type === 'constructor' ? 'construct' : 'function';
    
    // Build parameters string
    const paramStr = this.buildParametersString(symbol.parameters || []);
    
    // Build return type
    const returnType = symbol.returnType && symbol.returnType !== 'void'
      ? ` : ${symbol.returnType}`
      : '';

    return `${modifierStr}${functionKeyword} ${symbol.name}(${paramStr})${returnType}`;
  }

  /**
   * Create variable signature
   */
  private createVariableSignature(symbol: GosuASTSymbol): string {
    const modifiers: string[] = [];
    
    if (symbol.visibility && symbol.visibility !== 'internal') {
      modifiers.push(symbol.visibility);
    }
    if (symbol.isStatic) {
      modifiers.push('static');
    }
    if (symbol.isFinal) {
      modifiers.push('final');
    }

    const modifierStr = modifiers.length > 0 ? modifiers.join(' ') + ' ' : '';
    const varKeyword = symbol.type === 'field' ? 'var' : symbol.type;
    const typeStr = symbol.dataType ? ` : ${symbol.dataType}` : '';

    return `${modifierStr}${varKeyword} ${symbol.name}${typeStr}`;
  }

  /**
   * Create property signature
   */
  private createPropertySignature(symbol: GosuASTSymbol): string {
    const modifiers: string[] = [];
    
    if (symbol.visibility && symbol.visibility !== 'public') {
      modifiers.push(symbol.visibility);
    }
    if (symbol.isStatic) {
      modifiers.push('static');
    }

    const modifierStr = modifiers.length > 0 ? modifiers.join(' ') + ' ' : '';
    const typeStr = symbol.returnType ? ` : ${symbol.returnType}` : '';

    return `${modifierStr}property ${symbol.name}${typeStr}`;
  }

  /**
   * Create import signature
   */
  private createImportSignature(symbol: GosuASTSymbol): string {
    return `uses ${symbol.dataType}`;
  }

  /**
   * Build parameters string for function signatures
   */
  private buildParametersString(parameters: Array<{ name: string; type: string; isOptional?: boolean; defaultValue?: string }>): string {
    return parameters.map(param => {
      const optional = param.isOptional ? '?' : '';
      const defaultVal = param.defaultValue ? ` = ${param.defaultValue}` : '';
      return `${param.name}${optional} : ${param.type}${defaultVal}`;
    }).join(', ');
  }

  /**
   * Create type information section
   */
  private createTypeInformation(symbol: GosuASTSymbol): string | null {
    const infoParts: string[] = [];

    // Add type information
    if (symbol.dataType && symbol.type !== 'import') {
      infoParts.push(`**Type:** \`${symbol.dataType}\``);
    }

    // Add return type for functions
    if (symbol.returnType && symbol.returnType !== 'void') {
      infoParts.push(`**Returns:** \`${symbol.returnType}\``);
    }

    // Add parameter information for functions
    if (symbol.parameters && symbol.parameters.length > 0) {
      const paramInfo = symbol.parameters.map(param => {
        const optional = param.isOptional ? ' (optional)' : '';
        const defaultVal = param.defaultValue ? ` = ${param.defaultValue}` : '';
        return `- \`${param.name} : ${param.type}\`${optional}${defaultVal}`;
      }).join('\n');
      infoParts.push(`**Parameters:**\n${paramInfo}`);
    }

    return infoParts.length > 0 ? infoParts.join('\n\n') : null;
  }

  /**
   * Create context information section
   */
  private createContextInformation(symbol: GosuASTSymbol): string | null {
    const contextParts: string[] = [];

    // Add scope information
    if (symbol.scope) {
      contextParts.push(`**Scope:** ${symbol.scope}`);
    }

    // Add location information
    if (symbol.line !== undefined) {
      contextParts.push(`**Defined at:** line ${symbol.line}`);
    }

    // Add modifiers information
    const modifiers: string[] = [];
    if (symbol.visibility) modifiers.push(symbol.visibility);
    if (symbol.isStatic) modifiers.push('static');
    if (symbol.isFinal) modifiers.push('final');
    
    if (modifiers.length > 0) {
      contextParts.push(`**Modifiers:** ${modifiers.join(', ')}`);
    }

    return contextParts.length > 0 ? contextParts.join('\n\n') : null;
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
   * Get word start position for hover range
   */
  private getWordStartPosition(document: TextDocument, position: Position): number {
    const line = document.getText().split('\n')[position.line];
    if (!line) return position.character;

    const wordInfo = this.getWordAtPosition(line, position.character);
    return wordInfo?.start ?? position.character;
  }

  /**
   * Get word end position for hover range
   */
  private getWordEndPosition(document: TextDocument, position: Position): number {
    const line = document.getText().split('\n')[position.line];
    if (!line) return position.character;

    const wordInfo = this.getWordAtPosition(line, position.character);
    return wordInfo?.end ?? position.character;
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
   * Clear the cache for a specific document
   */
  onDocumentChange(document: TextDocument): void {
    debugLog(`Document changed: ${document.uri}, clearing cache`);
    this.cache.delete(document.uri);
  }

  /**
   * Clear all caches
   */
  clearAllCaches(): void {
    debugLog('Clearing all hover provider caches');
    this.cache.clear();
  }
}