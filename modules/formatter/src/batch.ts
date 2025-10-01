/**
 * Batch processor for formatting multiple files
 * Supports sequential and parallel execution with progress tracking
 */

import { accessSync, constants, readFileSync, writeFileSync } from "node:fs"
import { cpus } from "node:os"
import type { FormatFileResult, FormatSummary } from "./cli/format.js"
import { batchLogger } from "./logger.js"
import { formatFilePath, startTimer } from "./logger-utils.js"
import { ProgressTracker } from "./progress.js"

/**
 * Batch processing options
 */
export interface BatchOptions {
  files: string[]
  write?: boolean
  config?: string
  onProgress?: (completed: number, total: number, currentFile?: string) => void
}

/**
 * Batch processing result
 */
export interface BatchResult {
  summary: FormatSummary
  executionMode: "sequential" | "parallel"
  maxConcurrency?: number
}

/**
 * Batch processor for formatting operations
 */
export class BatchProcessor {
  private readonly options: BatchOptions
  private readonly threshold: number = 5 // Parallel threshold

  constructor(options: BatchOptions) {
    this.options = options
  }

  /**
   * Execute batch formatting operation
   */
  async execute(): Promise<BatchResult> {
    const timer = startTimer()
    const fileCount = this.options.files.length

    batchLogger.info(`Starting batch operation: ${fileCount} files`)

    // Determine execution mode
    const executionMode = fileCount >= this.threshold ? "parallel" : "sequential"
    const maxConcurrency = executionMode === "parallel" ? cpus().length : 1

    batchLogger.debug(`Execution mode: ${executionMode} (concurrency: ${maxConcurrency})`)

    // Create progress tracker
    const progress = new ProgressTracker("Formatting files", fileCount)
    if (this.options.onProgress) {
      progress.onProgress((state) => {
        this.options.onProgress?.(state.completed, state.total, state.currentItem)
      })
    }

    // Process files
    let fileResults: FormatFileResult[]
    if (executionMode === "parallel") {
      fileResults = await this.processParallel(this.options.files, maxConcurrency, progress)
    } else {
      fileResults = await this.processSequential(this.options.files, progress)
    }

    const duration = timer.end()

    // Calculate summary
    const summary: FormatSummary = {
      totalFiles: fileCount,
      formatted: fileResults.filter((r) => r.status === "formatted").length,
      unchanged: fileResults.filter((r) => r.status === "unchanged").length,
      failed: fileResults.filter((r) => r.status === "failed").length,
      skipped: fileResults.filter((r) => r.status === "skipped").length,
      duration,
      fileResults,
    }

    batchLogger.info(
      `Batch operation completed: ${summary.formatted} formatted, ${summary.unchanged} unchanged, ` +
        `${summary.failed} failed, ${summary.skipped} skipped (${duration}ms)`,
    )

    return {
      summary,
      executionMode,
      maxConcurrency: executionMode === "parallel" ? maxConcurrency : undefined,
    }
  }

  /**
   * Process files sequentially
   */
  private async processSequential(files: string[], progress: ProgressTracker): Promise<FormatFileResult[]> {
    const results: FormatFileResult[] = []

    for (const file of files) {
      const result = await this.processFile(file)
      results.push(result)
      progress.update(formatFilePath(file))

      if (result.status === "failed") {
        progress.incrementFailed()
      }
    }

    return results
  }

  /**
   * Process files in parallel with concurrency limit
   */
  private async processParallel(
    files: string[],
    concurrency: number,
    progress: ProgressTracker,
  ): Promise<FormatFileResult[]> {
    const results: FormatFileResult[] = []
    const queue = [...files]
    const inProgress = new Set<Promise<void>>()

    while (queue.length > 0 || inProgress.size > 0) {
      // Fill up to concurrency limit
      while (queue.length > 0 && inProgress.size < concurrency) {
        const file = queue.shift()!

        const promise = this.processFile(file).then((result) => {
          results.push(result)
          progress.update(formatFilePath(file))

          if (result.status === "failed") {
            progress.incrementFailed()
          }

          inProgress.delete(promise)
        })

        inProgress.add(promise)
      }

      // Wait for at least one to complete
      if (inProgress.size > 0) {
        await Promise.race(inProgress)
      }
    }

    return results
  }

  /**
   * Process a single file
   */
  private async processFile(file: string): Promise<FormatFileResult> {
    const timer = startTimer()

    try {
      // Check if file is readable/writable
      if (this.options.write) {
        try {
          accessSync(file, constants.R_OK | constants.W_OK)
        } catch {
          batchLogger.warn(`Skipping read-only file: ${formatFilePath(file)}`)
          return {
            file,
            status: "skipped",
            duration: timer.end(),
          }
        }
      }

      // Read file
      const originalContent = readFileSync(file, "utf-8")

      // Format content (placeholder - will be replaced with actual formatter)
      const formattedContent = await this.formatContent(originalContent, file)

      const duration = timer.end()

      // Check if content changed
      if (originalContent === formattedContent) {
        return {
          file,
          status: "unchanged",
          duration,
        }
      }

      // Write if requested
      if (this.options.write) {
        writeFileSync(file, formattedContent, "utf-8")
      }

      return {
        file,
        status: "formatted",
        duration,
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : String(error)
      batchLogger.error(`Failed to process ${formatFilePath(file)}: ${errorMsg}`)

      return {
        file,
        status: "failed",
        duration: timer.end(),
        error: errorMsg,
      }
    }
  }

  /**
   * Format file content (placeholder)
   * Will be replaced with actual formatter integration
   */
  private async formatContent(content: string, _filePath: string): Promise<string> {
    // TODO: Integrate with actual formatter
    // For now, return content unchanged
    return content
  }
}

export default BatchProcessor
