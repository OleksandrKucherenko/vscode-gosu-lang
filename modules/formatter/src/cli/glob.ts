/**
 * Glob pattern expansion for Gosu files
 * Supports *, **, ?, [abc] patterns and respects .gitignore
 */

import fg from "fast-glob"
import { cliLogger } from "../logger.js"

/**
 * Gosu file extensions
 */
const GOSU_EXTENSIONS = [".gs", ".gsx", ".gst", ".gsp"]

/**
 * Expand glob patterns to file paths
 * @param patterns - Glob patterns or file paths
 * @param options - Expansion options
 * @returns Array of absolute file paths
 */
export async function expandGlobPatterns(
  patterns: string | string[],
  options: {
    cwd?: string
    respectGitignore?: boolean
  } = {},
): Promise<string[]> {
  const patternArray = Array.isArray(patterns) ? patterns : [patterns]
  const cwd = options.cwd || process.cwd()
  const respectGitignore = options.respectGitignore !== false

  cliLogger.debug(`Expanding glob patterns: ${patternArray.join(", ")}`)

  try {
    const files = await fg(patternArray, {
      cwd,
      absolute: true,
      onlyFiles: true,
      followSymbolicLinks: false,
      ...(respectGitignore && { ignore: ["**/node_modules/**", "**/.git/**"] }),
    })

    // Filter for Gosu file extensions
    const gosuFiles = files.filter((file: string) => {
      const hasGosuExtension = GOSU_EXTENSIONS.some((ext) => file.endsWith(ext))
      if (!hasGosuExtension) {
        cliLogger.debug(`Skipping non-Gosu file: ${file}`)
      }
      return hasGosuExtension
    })

    cliLogger.info(`Found ${gosuFiles.length} Gosu files from ${patternArray.length} pattern(s)`)

    return gosuFiles
  } catch (error) {
    cliLogger.error(`Failed to expand glob patterns: ${error}`)
    throw error
  }
}

/**
 * Check if a path is a glob pattern
 * @param path - Path to check
 * @returns True if path contains glob characters
 */
export function isGlobPattern(path: string): boolean {
  return /[*?[\]{}]/.test(path)
}

/**
 * Normalize file paths and expand globs
 * @param inputs - File paths or glob patterns
 * @param options - Expansion options
 * @returns Array of absolute file paths
 */
export async function resolveFilePaths(
  inputs: string[],
  options: {
    cwd?: string
    respectGitignore?: boolean
  } = {},
): Promise<string[]> {
  const hasGlobs = inputs.some(isGlobPattern)

  if (hasGlobs) {
    // Expand all patterns
    return expandGlobPatterns(inputs, options)
  }

  // No globs, just return absolute paths
  const { resolve } = await import("node:path")
  const cwd = options.cwd || process.cwd()

  return inputs.map((file) => resolve(cwd, file))
}

export default expandGlobPatterns
