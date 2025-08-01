import type { GosuSyntaxError } from "@gosu-lsp/parser"
import { GosuParser } from "@gosu-lsp/parser"
import Debug from "debug"
import { type Diagnostic, DiagnosticSeverity, Position, type Range } from "vscode-languageserver"
import type { TextDocument } from "vscode-languageserver-textdocument"

const debug = Debug("gosu:lsp:diagnostics")

/**
 * Cache entry for parsed document diagnostics
 */
interface DiagnosticsCacheEntry {
  version: number
  diagnostics: Diagnostic[]
}

/**
 * Configuration for diagnostics provider
 */
interface DiagnosticsConfig {
  /** Maximum number of diagnostics to report per document */
  maxDiagnostics?: number
  /** Enable/disable diagnostic caching */
  enableCaching?: boolean
  /** Cache size limit */
  cacheSize?: number
}

/**
 * Default diagnostics configuration
 */
const DEFAULT_CONFIG: Required<DiagnosticsConfig> = {
  maxDiagnostics: 100,
  enableCaching: true,
  cacheSize: 100,
}

/**
 * Diagnostics provider for Gosu language files
 */
export class GosuDiagnosticsProvider {
  private parser: GosuParser
  private cache = new Map<string, DiagnosticsCacheEntry>()
  private config: Required<DiagnosticsConfig>

  constructor(config: DiagnosticsConfig = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config }
    this.parser = new GosuParser({
      maxErrors: this.config.maxDiagnostics,
      includeWarnings: true,
      buildAst: false, // Only need syntax validation for diagnostics
    })

    debug("Initialized diagnostics provider with config: %O", this.config)
  }

  /**
   * Validate a document and return diagnostics
   */
  validateDocument(document: TextDocument): Diagnostic[] {
    const uri = document.uri
    debug("Validating document: %s (version: %d)", uri, document.version)

    // Check cache if enabled
    if (this.config.enableCaching) {
      const cached = this.cache.get(uri)
      if (cached && cached.version === document.version) {
        debug("Using cached diagnostics for %s", uri)
        return cached.diagnostics
      }
    }

    // Parse document and convert errors to diagnostics
    const parseResult = this.parser.parseText(document.getText(), uri)
    const diagnostics = this.convertSyntaxErrorsToDiagnostics(parseResult.syntaxErrors, document)

    // Cache results if enabled
    if (this.config.enableCaching) {
      this.updateCache(uri, document.version, diagnostics)
    }

    debug("Found %d diagnostics for %s", diagnostics.length, uri)
    return diagnostics
  }

  /**
   * Convert GosuSyntaxError array to LSP Diagnostics
   */
  private convertSyntaxErrorsToDiagnostics(syntaxErrors: GosuSyntaxError[], document: TextDocument): Diagnostic[] {
    return syntaxErrors.map((error) => this.convertSyntaxErrorToDiagnostic(error, document))
  }

  /**
   * Convert a single GosuSyntaxError to LSP Diagnostic
   */
  private convertSyntaxErrorToDiagnostic(error: GosuSyntaxError, document: TextDocument): Diagnostic {
    // Convert 1-based line numbers to 0-based for LSP
    const line = Math.max(0, error.line - 1)
    const character = Math.max(0, error.column)

    // Calculate end position based on error length or use single character
    const length = error.length || 1
    const endCharacter = character + length

    // Ensure positions are within document bounds
    const lineCount = document.lineCount
    const safeLineIndex = Math.min(line, lineCount - 1)
    const lineText =
      safeLineIndex < lineCount
        ? document
            .getText({
              start: Position.create(safeLineIndex, 0),
              end: Position.create(safeLineIndex + 1, 0),
            })
            .replace(/\r?\n$/, "")
        : ""

    const maxCharacter = lineText.length
    const safeStartCharacter = Math.min(character, maxCharacter)
    const safeEndCharacter = Math.min(endCharacter, maxCharacter)

    const range: Range = {
      start: Position.create(safeLineIndex, safeStartCharacter),
      end: Position.create(safeLineIndex, Math.max(safeEndCharacter, safeStartCharacter + 1)),
    }

    const diagnostic: Diagnostic = {
      severity: this.mapSeverity(error.severity),
      range,
      message: error.message,
      source: "gosu",
    }

    if (error.code) {
      diagnostic.code = error.code
    }

    return diagnostic
  }

  /**
   * Map GosuSyntaxError severity to LSP DiagnosticSeverity
   */
  private mapSeverity(severity: "error" | "warning"): DiagnosticSeverity {
    switch (severity) {
      case "error":
        return DiagnosticSeverity.Error
      case "warning":
        return DiagnosticSeverity.Warning
      default:
        return DiagnosticSeverity.Error
    }
  }

  /**
   * Update cache with new diagnostics
   */
  private updateCache(uri: string, version: number, diagnostics: Diagnostic[]): void {
    // Implement LRU cache behavior
    if (this.cache.size >= this.config.cacheSize) {
      const firstKey = this.cache.keys().next().value
      if (firstKey) {
        this.cache.delete(firstKey)
      }
    }

    this.cache.set(uri, { version, diagnostics })
    debug("Cached diagnostics for %s (version: %d)", uri, version)
  }

  /**
   * Clear cache for a specific document
   */
  clearCache(uri?: string): void {
    if (uri) {
      this.cache.delete(uri)
      debug("Cleared cache for %s", uri)
    } else {
      this.cache.clear()
      debug("Cleared entire diagnostics cache")
    }
  }

  /**
   * Get cache statistics
   */
  getCacheStats(): { size: number; maxSize: number } {
    return {
      size: this.cache.size,
      maxSize: this.config.cacheSize,
    }
  }

  /**
   * Update configuration
   */
  updateConfig(config: Partial<DiagnosticsConfig>): void {
    this.config = { ...this.config, ...config }

    // Update parser configuration
    this.parser.updateConfig({
      maxErrors: this.config.maxDiagnostics,
      includeWarnings: true,
      buildAst: false,
    })

    debug("Updated diagnostics config: %O", this.config)
  }
}

/**
 * Factory function to create a diagnostics provider
 */
export function createDiagnosticsProvider(config?: DiagnosticsConfig): GosuDiagnosticsProvider {
  return new GosuDiagnosticsProvider(config)
}
