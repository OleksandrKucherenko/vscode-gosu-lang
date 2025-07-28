import type { GosuFileType } from '@gosu-lsp/shared'
import type { ParseTree } from 'antlr4ng'

/**
 * Represents a syntax error found during parsing
 */
export interface GosuSyntaxError {
  /** Error message */
  message: string
  /** Line number (1-based) */
  line: number
  /** Column number (0-based) */
  column: number
  /** Error severity */
  severity: 'error' | 'warning'
  /** Length of the error span */
  length?: number
  /** Error code */
  code?: string
}

/**
 * Result of parsing Gosu source code
 */
export interface GosuParseResult {
  /** Whether the parse was successful (no syntax errors) */
  isValid: boolean
  /** List of syntax errors found during parsing */
  syntaxErrors: GosuSyntaxError[]
  /** The parsed AST (if parsing succeeded) */
  ast?: ParseTree
  /** The file path that was parsed */
  filePath: string
  /** The detected file type */
  fileType: GosuFileType
  /** The source text that was parsed */
  sourceText: string
}

/**
 * Configuration for the Gosu parser
 */
export interface GosuParserConfig {
  /** Maximum number of syntax errors to collect */
  maxErrors?: number
  /** Whether to include warnings in the result */
  includeWarnings?: boolean
  /** Whether to build the full AST or just check syntax */
  buildAst?: boolean
}