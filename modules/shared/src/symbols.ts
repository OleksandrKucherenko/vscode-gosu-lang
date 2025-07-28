/**
 * Symbol information extracted from Gosu AST for intelligent completion
 */

export type GosuSymbolType = 
  | 'variable' 
  | 'parameter' 
  | 'function' 
  | 'property' 
  | 'constructor'
  | 'class' 
  | 'interface' 
  | 'enhancement'
  | 'enum'
  | 'import'
  | 'field'

export interface GosuASTSymbol {
  /** Symbol name */
  name: string
  /** Symbol type */
  type: GosuSymbolType
  /** Data type (e.g., 'String', 'int', 'MyClass') */
  dataType?: string
  /** Line where symbol is defined (1-based) */
  line: number
  /** Column where symbol is defined (0-based) */
  column: number
  /** Symbol visibility (public, private, protected, internal) */
  visibility?: 'public' | 'private' | 'protected' | 'internal'
  /** Whether symbol is static */
  isStatic?: boolean
  /** Whether symbol is final/readonly */
  isFinal?: boolean
  /** Function parameters (for functions/constructors) */
  parameters?: GosuParameter[]
  /** Function return type (for functions) */
  returnType?: string
  /** Documentation/comments */
  documentation?: string
  /** Scope where symbol is defined (class name, function name, etc) */
  scope?: string
}

export interface GosuParameter {
  /** Parameter name */
  name: string
  /** Parameter type */
  type: string
  /** Whether parameter is optional */
  isOptional?: boolean
  /** Default value */
  defaultValue?: string
}

export interface GosuImport {
  /** Imported package/class name */
  name: string
  /** Full import path */
  path: string
  /** Whether it's a wildcard import (.*) */
  isWildcard?: boolean
  /** Line where import is declared */
  line: number
  /** Column where import is declared */
  column: number
}

/**
 * Symbol table containing all symbols found in a document
 */
export interface GosuSymbolTable {
  /** Document URI */
  uri: string
  /** Symbols indexed by name for quick lookup */
  symbols: Map<string, GosuASTSymbol[]>
  /** All symbols in declaration order */
  allSymbols: GosuASTSymbol[]
  /** Import statements */
  imports: GosuImport[]
  /** Classes defined in this document */
  classes: GosuASTSymbol[]
  /** Functions defined in this document */
  functions: GosuASTSymbol[]
  /** Variables defined in this document */
  variables: GosuASTSymbol[]
  /** Current scope context (for nested scopes) */
  scopes: GosuScope[]
}

export interface GosuScope {
  /** Scope type */
  type: 'file' | 'class' | 'function' | 'block'
  /** Scope name */
  name: string
  /** Symbols defined in this scope */
  symbols: GosuASTSymbol[]
  /** Parent scope */
  parent?: GosuScope
  /** Start line of scope */
  startLine: number
  /** End line of scope */
  endLine: number
}

/**
 * Create a new empty symbol table
 */
export function createSymbolTable(uri: string): GosuSymbolTable {
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
 * Add a symbol to the symbol table
 */
export function addSymbolToTable(table: GosuSymbolTable, symbol: GosuASTSymbol): void {
  table.allSymbols.push(symbol)
  
  // Add to name-based lookup
  const existing = table.symbols.get(symbol.name) || []
  existing.push(symbol)
  table.symbols.set(symbol.name, existing)
  
  // Add to type-specific arrays
  switch (symbol.type) {
    case 'class':
    case 'interface':
    case 'enhancement':
    case 'enum':
      table.classes.push(symbol)
      break
    case 'function':
    case 'constructor':
      table.functions.push(symbol)
      break
    case 'variable':
    case 'parameter':
    case 'field':
    case 'property':
      table.variables.push(symbol)
      break
  }
}

/**
 * Find symbols by name (case-sensitive)
 */
export function findSymbolsByName(table: GosuSymbolTable, name: string): GosuASTSymbol[] {
  return table.symbols.get(name) || []
}

/**
 * Find symbols by prefix (case-insensitive)
 */
export function findSymbolsByPrefix(table: GosuSymbolTable, prefix: string): GosuASTSymbol[] {
  const lowerPrefix = prefix.toLowerCase()
  const results: GosuASTSymbol[] = []
  
  for (const symbolList of table.symbols.values()) {
    for (const symbol of symbolList) {
      if (symbol.name.toLowerCase().startsWith(lowerPrefix)) {
        results.push(symbol)
      }
    }
  }
  
  return results
}

/**
 * Find symbols by type
 */
export function findSymbolsByType(table: GosuSymbolTable, type: GosuSymbolType): GosuASTSymbol[] {
  return table.allSymbols.filter(symbol => symbol.type === type)
}

/**
 * Get symbols visible at a specific line/position
 */
export function getVisibleSymbols(table: GosuSymbolTable, line: number): GosuASTSymbol[] {
  const visibleSymbols: GosuASTSymbol[] = []
  
  // Add file-level symbols (imports, classes)
  visibleSymbols.push(...table.imports.map(imp => ({
    name: imp.name,
    type: 'import' as GosuSymbolType,
    line: imp.line,
    column: imp.column,
    dataType: imp.path
  })))
  
  visibleSymbols.push(...table.classes)
  
  // Find current scope and add its symbols
  for (const scope of table.scopes) {
    if (line >= scope.startLine && line <= scope.endLine) {
      visibleSymbols.push(...scope.symbols)
    }
  }
  
  return visibleSymbols
}