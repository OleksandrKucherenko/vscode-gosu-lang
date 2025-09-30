/**
 * Formatting handler for LSP server
 * Provides document formatting with progress tracking
 */

import type { CancellationToken, Connection, DocumentFormattingParams, TextEdit } from "vscode-languageserver"
import { logger } from "../logger-adapter.js"

/**
 * Formatting handler with progress tracking
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
      // Create progress token for long-running operations
      const progressToken = `format-${Date.now()}`

      // Start progress reporting
      await this.connection.window.createWorkDoneProgress()

      this.connection.sendProgress("$/progress", progressToken, {
        kind: "begin",
        title: "Formatting Gosu file",
        message: "Processing...",
        cancellable: true,
      })

      // Check for cancellation
      if (token.isCancellationRequested) {
        logger.info("Formatting cancelled by user")
        this.connection.sendProgress("$/progress", progressToken, {
          kind: "end",
          message: "Cancelled",
        })
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
      this.connection.sendProgress("$/progress", progressToken, {
        kind: "end",
        message: `Completed in ${duration}ms`,
      })

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
    const progressToken = `batch-format-${Date.now()}`

    try {
      // Create progress
      await this.connection.window.createWorkDoneProgress()

      this.connection.sendProgress("$/progress", progressToken, {
        kind: "begin",
        title: "Formatting Gosu files",
        message: `0/${uris.length}`,
        percentage: 0,
        cancellable: true,
      })

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
        this.connection.sendProgress("$/progress", progressToken, {
          kind: "report",
          message: `${i + 1}/${uris.length}`,
          percentage,
        })

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
      this.connection.sendProgress("$/progress", progressToken, {
        kind: "end",
        message: `Completed ${results.size}/${uris.length} files`,
      })

      logger.info(`Batch formatting completed: ${results.size}/${uris.length} successful`)

      return results
    } catch (error) {
      logger.error("Batch formatting failed", { error })
      throw error
    }
  }
}

export default FormattingHandler
