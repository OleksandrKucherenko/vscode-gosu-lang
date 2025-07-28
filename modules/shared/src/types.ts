/**
 * Shared types and interfaces for the Gosu Language Server
 */

import { Range, Position } from 'vscode-languageserver-types';

/**
 * Gosu file types supported by the language server
 */
export type GosuFileType = 'class' | 'enhancement' | 'template' | 'program';

/**
 * Gosu file extensions mapped to their types
 */
export const GOSU_FILE_EXTENSIONS = {
  '.gs': 'class' as GosuFileType,
  '.gsx': 'enhancement' as GosuFileType,
  '.gst': 'template' as GosuFileType,
  '.gsp': 'program' as GosuFileType,
} as const;

/**
 * Language server configuration options
 */
export interface GosuLSPConfig {
  /** Enable/disable specific features */
  features: {
    completion: boolean;
    hover: boolean;
    definition: boolean;
    references: boolean;
    formatting: boolean;
    diagnostics: boolean;
  };
  
  /** Java-related configuration */
  java: {
    /** Java source paths for cross-language navigation */
    sourcePaths: string[];
    /** Java classpath for type resolution */
    classpath: string[];
  };
  
  /** Parser configuration */
  parser: {
    /** Enable/disable parse caching */
    enableCaching: boolean;
    /** Parse debounce delay in milliseconds */
    debounceMs: number;
  };
}

/**
 * Default configuration values
 */
export const DEFAULT_CONFIG: GosuLSPConfig = {
  features: {
    completion: true,
    hover: true,
    definition: true,
    references: true,
    formatting: true,
    diagnostics: true,
  },
  java: {
    sourcePaths: [],
    classpath: [],
  },
  parser: {
    enableCaching: true,
    debounceMs: 300,
  },
};

/**
 * Symbol information for Gosu language constructs
 */
export interface GosuSymbol {
  name: string;
  kind: GosuSymbolKind;
  range: Range;
  selectionRange: Range;
  detail?: string;
  documentation?: string;
}

/**
 * Gosu-specific symbol kinds
 */
export enum GosuSymbolKind {
  Class = 'class',
  Enhancement = 'enhancement',
  Property = 'property',
  Function = 'function',
  Constructor = 'constructor',
  Variable = 'variable',
  Field = 'field',
  Method = 'method',
  Interface = 'interface',
  Enum = 'enum',
  EnumConstant = 'enumConstant',
  Package = 'package',
  Template = 'template',
  Program = 'program',
}

/**
 * Diagnostic severity levels
 */
export enum DiagnosticSeverity {
  Error = 1,
  Warning = 2,
  Information = 3,
  Hint = 4,
}

/**
 * Language server error types
 */
export class GosuLSPError extends Error {
  constructor(message: string, public code?: string) {
    super(message);
    this.name = 'GosuLSPError';
  }
}

/**
 * Parser-specific error
 */
export class GosuParseError extends GosuLSPError {
  constructor(message: string, public position?: Position) {
    super(message, 'PARSE_ERROR');
    this.name = 'GosuParseError';
  }
}

/**
 * Utility function to determine Gosu file type from URI
 */
export function getGosuFileType(uri: string): GosuFileType | null {
  const extension = uri.substring(uri.lastIndexOf('.'));
  return GOSU_FILE_EXTENSIONS[extension as keyof typeof GOSU_FILE_EXTENSIONS] || null;
}

/**
 * Utility function to check if a URI is a Gosu file
 */
export function isGosuFile(uri: string): boolean {
  return getGosuFileType(uri) !== null;
}