/**
 * Formatting handler for LSP server
 * Provides document formatting with progress tracking
 *
 * @deprecated This handler is not currently integrated into the server.
 * Formatting is handled directly in server.ts using @gosu-lsp/formatter.
 *
 * WARNING: This class is NOT imported or used anywhere in the codebase.
 * - No imports found in any .ts, .js, .json files
 * - No dynamic imports or require() calls reference it
 * - Not listed in package.json or extension configuration
 * - Formatting is already working via server.ts direct integration
 *
 * Status: CANDIDATE FOR REMOVAL - functionality exists elsewhere.
 * If this provides different/additional behavior, document it with TODO.
 */

import type { CancellationToken, Connection, DocumentFormattingParams, TextEdit } from "vscode-languageserver"
import { logger } from "../logger-adapter.js"

/**
 * Formatting handler with progress tracking
 * @deprecated Not currently integrated - see file header
 */
export class FormattingHandler {
  private connection: Connection

  constructor(connection: Connection) {
    this.connection = connection
  }

  /**
   * Handle document formatting request
   */
  async handleFormatDocument(params: DocumentFormattingParams, token: CancellationToken): Promise<TextEdit[] | null> {
    const uri = params.textDocument.uri
    logger.info(`Formatting document: ${uri}`)

    const startTime = Date.now()

    try {
      // Start progress reporting
      const progress = await this.connection.window.createWorkDoneProgress()

      progress.begin("Formatting Gosu file", undefined, "Processing...", true)

      // Check for cancellation
      if (token.isCancellationRequested) {
        logger.info("Formatting cancelled by user")
        progress.done()
        return null
      }

      // TODO: Integrate with actual formatter
      // const { formatDocument } = await import('@gosu-lsp/formatter');
      // const result = await formatDocument({ uri, options: params.options });

      const duration = Date.now() - startTime

      // Log performance warning if needed
      if (duration > 200) {
        if (duration > 500) {
          logger.error(`Performance regression: formatting took ${duration}ms for ${uri}`)
        } else {
          logger.warn(`Formatting took longer than expected: ${duration}ms for ${uri}`)
        }
      } else {
        logger.info(`Formatted ${uri} (${duration}ms)`)
      }

      // End progress reporting
      progress.done()

      // Return empty array for now (no changes)
      return []
    } catch (error) {
      const duration = Date.now() - startTime
      const errorMsg = error instanceof Error ? error.message : String(error)

      logger.error(`Failed to format ${uri}`, {
        error: errorMsg,
        duration,
        uri,
      })

      // Show error to user
      this.connection.window.showErrorMessage(`Failed to format document: ${errorMsg}`)

      return null
    }
  }

  /**
   * Handle batch formatting with progress
   */
  async handleBatchFormat(uris: string[], token: CancellationToken): Promise<Map<string, TextEdit[]>> {
    logger.info(`Batch formatting ${uris.length} documents`)

    const results = new Map<string, TextEdit[]>()

    try {
      // Create progress
      const progress = await this.connection.window.createWorkDoneProgress()

      progress.begin("Formatting Gosu files", 0, `0/${uris.length}`, true)

      // Process each file
      for (let i = 0; i < uris.length; i++) {
        // Check for cancellation
        if (token.isCancellationRequested) {
          logger.info("Batch formatting cancelled")
          break
        }

        const uri = uris[i]
        const percentage = Math.round(((i + 1) / uris.length) * 100)

        // Update progress
        progress.report(percentage, `${i + 1}/${uris.length}`)

        // Format document
        try {
          // TODO: Format document
          // const edits = await this.formatSingleDocument(uri);
          // results.set(uri, edits);
          results.set(uri, [])
        } catch (error) {
          logger.error(`Failed to format ${uri}`, { error })
        }
      }

      // End progress
      progress.done()

      logger.info(`Batch formatting completed: ${results.size}/${uris.length} successful`)

      return results
    } catch (error) {
      logger.error("Batch formatting failed", { error })
      throw error
    }
  }
}

export default FormattingHandler
