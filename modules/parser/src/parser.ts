import { getGosuFileType } from "@gosu-lsp/shared"
import { CharStream, CommonTokenStream, type ParseTree } from "antlr4ng"
import Debug from "debug"
import { GosuErrorListener } from "./error-listener"
import { GosuLexer } from "./GosuLexer"
import { GosuParser as AntlrGosuParser } from "./GosuParser"
import type { GosuParseResult, GosuParserConfig, GosuSyntaxError } from "./types"

const debug = Debug("gosu:lsp:parser")

/**
 * Gosu language parser that wraps ANTLR4 generated parser
 */
export class GosuParser {
  private config: Required<GosuParserConfig>

  constructor(config: GosuParserConfig = {}) {
    this.config = {
      maxErrors: config.maxErrors ?? 100,
      includeWarnings: config.includeWarnings ?? true,
      buildAst: config.buildAst ?? true,
    }

    debug("Initialized Gosu parser with config: %O", this.config)
  }

  /**
   * Parse Gosu source text and return parse result
   */
  parseText(sourceText: string, filePath: string): GosuParseResult {
    debug("Parsing file: %s (%d characters)", filePath, sourceText.length)

    const fileType = getGosuFileType(filePath) || "class"
    const errorListener = new GosuErrorListener(this.config.maxErrors)

    try {
      // Create ANTLR input stream
      const inputStream = CharStream.fromString(sourceText)

      // Create lexer
      const lexer = new GosuLexer(inputStream)
      lexer.removeErrorListeners()
      lexer.addErrorListener(errorListener)

      // Create token stream
      const tokenStream = new CommonTokenStream(lexer)

      // Create parser
      const parser = new AntlrGosuParser(tokenStream)
      parser.removeErrorListeners()
      parser.addErrorListener(errorListener)

      // Parse based on file type
      let ast: ParseTree | undefined
      if (this.config.buildAst) {
        ast = this.parseByFileType(parser, fileType)
      } else {
        // Just check syntax without building full AST
        this.parseByFileType(parser, fileType)
      }

      const syntaxErrors = errorListener.getErrors()
      const isValid = syntaxErrors.length === 0

      debug("Parse completed: %s (errors: %d)", isValid ? "SUCCESS" : "FAILED", syntaxErrors.length)

      return {
        isValid,
        syntaxErrors,
        ast,
        filePath,
        fileType,
        sourceText,
      }
    } catch (error) {
      debug("Parse failed with exception: %O", error)

      const syntaxError: GosuSyntaxError = {
        message: error instanceof Error ? error.message : "Unknown parse error",
        line: 1,
        column: 0,
        severity: "error",
        code: "PARSE_EXCEPTION",
      }

      return {
        isValid: false,
        syntaxErrors: [syntaxError],
        filePath,
        fileType,
        sourceText,
      }
    }
  }

  /**
   * Parse using appropriate entry point based on file type
   */
  private parseByFileType(parser: AntlrGosuParser, fileType: string): ParseTree {
    switch (fileType) {
      case "class":
        return parser.start()

      case "enhancement":
        return parser.start()

      case "template":
        return parser.start()

      case "program":
        return parser.start()

      default:
        debug("Unknown file type: %s, using start", fileType)
        return parser.start()
    }
  }

  /**
   * Validate syntax without building AST (faster for quick validation)
   */
  validateSyntax(sourceText: string, filePath: string): GosuSyntaxError[] {
    const previousBuildAst = this.config.buildAst

    if (previousBuildAst === false) {
      return this.parseText(sourceText, filePath).syntaxErrors
    }

    this.config = { ...this.config, buildAst: false }

    try {
      const result = this.parseText(sourceText, filePath)
      return result.syntaxErrors
    } finally {
      this.config = { ...this.config, buildAst: previousBuildAst }
    }
  }

  /**
   * Update parser configuration
   */
  updateConfig(config: Partial<GosuParserConfig>): void {
    this.config = { ...this.config, ...config }
    debug("Updated parser config: %O", this.config)
  }

  /**
   * Get current parser configuration
   */
  getConfig(): Required<GosuParserConfig> {
    return { ...this.config }
  }
}
