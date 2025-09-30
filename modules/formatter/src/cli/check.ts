/**
 * Check command - verify formatting without modifying files
 * Exit code 1 if changes needed, 0 otherwise
 */

import { readFileSync } from "node:fs"
import { cliLogger } from "../logger.js"
import { formatFilePath, startTimer } from "../logger-utils.js"

/**
 * Check command options
 */
export interface CheckOptions {
  files: string[]
  config?: string
}

/**
 * Check command result
 */
export interface CheckResult {
  exitCode: 0 | 1 | 2
  unformattedFiles: string[]
  totalFiles: number
  stderr: string
}

/**
 * Execute check command
 * @param options - Check options
 * @returns Check result
 */
export async function executeCheckCommand(options: CheckOptions): Promise<CheckResult> {
  const timer = startTimer()
  cliLogger.info(`Checking ${options.files.length} files...`)

  const unformattedFiles: string[] = []
  const errors: string[] = []

  for (const file of options.files) {
    try {
      const originalContent = readFileSync(file, "utf-8")

      // Format in memory (mock - will be replaced with actual formatter)
      const formattedContent = await formatInMemory(originalContent, file)

      // Compare
      if (originalContent !== formattedContent) {
        unformattedFiles.push(file)
        cliLogger.debug(`File needs formatting: ${formatFilePath(file)}`)
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : String(error)
      errors.push(`${formatFilePath(file)}: ${errorMsg}`)
      cliLogger.error(`Failed to check ${formatFilePath(file)}`, { error: errorMsg })
    }
  }

  // Build stderr output
  let stderr = ""
  if (unformattedFiles.length > 0) {
    stderr += `The following files need formatting:\n`
    for (const file of unformattedFiles) {
      stderr += `  ${formatFilePath(file)}\n`
    }
  }
  if (errors.length > 0) {
    stderr += `\nErrors:\n`
    for (const error of errors) {
      stderr += `  ${error}\n`
    }
  }

  const duration = timer.end()
  cliLogger.info(
    `Check completed in ${duration}ms: ${unformattedFiles.length}/${options.files.length} files need formatting`,
  )

  // Exit code: 0 if all formatted, 1 if changes needed, 2 if errors
  const exitCode = errors.length > 0 ? 2 : unformattedFiles.length > 0 ? 1 : 0

  return {
    exitCode,
    unformattedFiles,
    totalFiles: options.files.length,
    stderr,
  }
}

/**
 * Format file content in memory (placeholder)
 * Will be replaced with actual formatter integration
 */
async function formatInMemory(content: string, _filePath: string): Promise<string> {
  // TODO: Integrate with actual formatter
  // For now, return content unchanged
  return content
}

export default executeCheckCommand
