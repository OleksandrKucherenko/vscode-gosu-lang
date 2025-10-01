/**
 * Format command - format files with optional write mode
 * Supports batch processing with progress tracking
 */

import { BatchProcessor } from "../batch.js"
import { cliLogger } from "../logger.js"
import { formatDuration } from "../logger-utils.js"

/**
 * Format command options
 */
export interface FormatOptions {
  files: string[]
  write?: boolean
  config?: string
}

/**
 * Format file result
 */
export interface FormatFileResult {
  file: string
  status: "formatted" | "unchanged" | "failed" | "skipped"
  duration: number
  error?: string
}

/**
 * Format summary
 */
export interface FormatSummary {
  totalFiles: number
  formatted: number
  unchanged: number
  failed: number
  skipped: number
  duration: number
  fileResults: FormatFileResult[]
}

/**
 * Format command result
 */
export interface FormatResult {
  exitCode: 0 | 1 | 2
  summary: FormatSummary
  output?: string
}

/**
 * Execute format command
 * @param options - Format options
 * @returns Format result
 */
export async function executeFormatCommand(options: FormatOptions): Promise<FormatResult> {
  cliLogger.info(`Formatting ${options.files.length} files (write: ${options.write || false})...`)

  // Use BatchProcessor for efficient processing
  const processor = new BatchProcessor({
    files: options.files,
    write: options.write,
    config: options.config,
    onProgress: (completed, total, currentFile) => {
      // Emit progress to stderr
      const percentage = Math.round((completed / total) * 100)
      const message = `Formatting files... [${completed}/${total}] ${percentage}%${
        currentFile ? ` - ${currentFile}` : ""
      }`
      process.stderr.write(`\r${message}`)
    },
  })

  const result = await processor.execute()
  const { summary } = result

  // Clear progress line
  if (options.write && options.files.length > 1) {
    process.stderr.write(`\r${" ".repeat(80)}\r`)
  }

  // Log summary
  if (options.write) {
    cliLogger.info(`Formatted ${summary.formatted} files in ${formatDuration(summary.duration)}`)
    console.error(`\nSummary:`)
    console.error(`  Total: ${summary.totalFiles} files`)
    console.error(`  Modified: ${summary.formatted}`)
    console.error(`  Unchanged: ${summary.unchanged}`)
    console.error(`  Failed: ${summary.failed}`)
    console.error(`  Skipped: ${summary.skipped}`)
    console.error(`  Duration: ${formatDuration(summary.duration)}`)
  }

  // Exit codes: 0=success, 1=formatted (check mode), 2=errors
  const exitCode = summary.failed > 0 ? 2 : summary.formatted > 0 && !options.write ? 1 : 0

  return {
    exitCode,
    summary,
  }
}

export default executeFormatCommand
