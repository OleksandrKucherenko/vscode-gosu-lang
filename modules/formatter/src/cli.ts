#!/usr/bin/env node

/**
 * Gosu Formatter CLI
 * Command-line interface for formatting Gosu source files
 */

import { readFileSync } from "node:fs"
import { Command } from "commander"
import { executeCheckCommand } from "./cli/check.js"
import { executeFormatCommand } from "./cli/format.js"
import { resolveFilePaths } from "./cli/glob.js"
import { executeShowConfigCommand } from "./cli/show-config.js"

// Read package.json for version
let version = "0.0.1"
try {
  const packageJson = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf-8"))
  version = packageJson.version
} catch {
  // Use default version if package.json not found
}

const program = new Command()

program.name("gosu-format").description("Format Gosu source files").version(version)

// Format command (default)
program
  .argument("[files...]", "Files or glob patterns to format")
  .option("-w, --write", "Modify files in-place")
  .option("-c, --check", "Verify formatting without modifications (exit 1 if changes needed)")
  .option("--config <path>", "Path to custom configuration file")
  .option("--show-config", "Display resolved configuration and exit")
  .option("--log-level <level>", "Log level (error, warning, info, debug)", "info")
  .action(async (files: string[], options: Record<string, any>) => {
    // Set log level from environment or option
    if (options.logLevel) {
      process.env.DEBUG = `gosu:*:${options.logLevel}`
    }

    // Mutual exclusion check
    if (options.check && options.write) {
      console.error("Error: --check and --write are mutually exclusive")
      process.exit(1)
    }

    // Show config mode
    if (options.showConfig) {
      try {
        const result = await executeShowConfigCommand({
          config: options.config,
          cwd: process.cwd(),
        })
        console.log(result.output)
        process.exit(result.exitCode)
      } catch (error) {
        console.error("Error loading configuration:", error)
        process.exit(2)
      }
      return
    }

    // Validate files
    if (!files || files.length === 0) {
      console.error("Error: No files specified")
      program.help()
      process.exit(1)
    }

    // Expand glob patterns
    let resolvedFiles: string[]
    try {
      resolvedFiles = await resolveFilePaths(files, { cwd: process.cwd() })

      if (resolvedFiles.length === 0) {
        console.error("Error: No matching files found")
        process.exit(1)
      }
    } catch (error) {
      console.error("Error resolving file paths:", error)
      process.exit(2)
    }

    // Check mode
    if (options.check) {
      try {
        const result = await executeCheckCommand({
          files: resolvedFiles,
          config: options.config,
        })

        if (result.stderr) {
          console.error(result.stderr)
        }

        process.exit(result.exitCode)
      } catch (error) {
        console.error("Error checking files:", error)
        process.exit(2)
      }
      return
    }

    // Format mode (default)
    try {
      const result = await executeFormatCommand({
        files: resolvedFiles,
        write: options.write,
        config: options.config,
      })

      process.exit(result.exitCode)
    } catch (error) {
      console.error("Error formatting files:", error)
      process.exit(2)
    }
  })

// Parse arguments
program.parse(process.argv)

// Show help if no arguments
if (process.argv.length === 2) {
  program.help()
}
