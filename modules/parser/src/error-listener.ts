import { BaseErrorListener, RecognitionException, Recognizer, Token } from 'antlr4ng'
import Debug from 'debug'
import { GosuSyntaxError } from './types'

const debug = Debug('gosu:lsp:parser:errors')

/**
 * Custom error listener that collects syntax errors during parsing
 */
export class GosuErrorListener extends BaseErrorListener {
  private errors: GosuSyntaxError[] = []
  private maxErrors: number

  constructor(maxErrors: number = 100) {
    super()
    this.maxErrors = maxErrors
  }

  /**
   * Called when a syntax error is encountered
   */
  override syntaxError(
    recognizer: Recognizer<any>,
    offendingSymbol: Token | null,
    line: number,
    charPositionInLine: number,
    message: string,
    exception: RecognitionException | null
  ): void {
    if (this.errors.length >= this.maxErrors) {
      debug('Maximum error count reached, ignoring additional errors')
      return
    }

    const error: GosuSyntaxError = {
      message: this.cleanErrorMessage(message),
      line: line,
      column: charPositionInLine,
      severity: 'error',
      length: offendingSymbol?.text?.length || 1,
      code: exception?.constructor.name || 'SYNTAX_ERROR'
    }

    debug('Syntax error at %d:%d - %s', line, charPositionInLine, message)
    this.errors.push(error)
  }

  /**
   * Get all collected errors
   */
  getErrors(): GosuSyntaxError[] {
    return [...this.errors]
  }

  /**
   * Clear all collected errors
   */
  clearErrors(): void {
    this.errors = []
  }

  /**
   * Check if any errors were collected
   */
  hasErrors(): boolean {
    return this.errors.length > 0
  }

  /**
   * Clean up error messages to be more user-friendly
   */
  private cleanErrorMessage(message: string): string {
    // Remove ANTLR-specific noise from error messages
    return message
      .replace(/^line \d+:\d+ /, '') // Remove line:column prefix
      .replace(/\s+/g, ' ')          // Normalize whitespace
      .trim()
  }
}