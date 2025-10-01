/**
 * Debug-based logger for Gosu formatter
 * Uses the debug package with namespaces for different modules
 * Enable via DEBUG=gosu:* environment variable
 */

import debug from "debug"

/**
 * Logger interface for consistent logging across modules
 */
export interface Logger {
  error(message: string, ...args: any[]): void
  warn(message: string, ...args: any[]): void
  info(message: string, ...args: any[]): void
  debug(message: string, ...args: any[]): void
}

/**
 * Create a logger instance for a specific namespace
 * @param namespace - The namespace for this logger (e.g., 'formatter', 'cli', 'config')
 * @returns Logger instance
 */
export function createLogger(namespace: string): Logger {
  const baseNamespace = `gosu:${namespace}`

  const errorLogger = debug(`${baseNamespace}:error`)
  const warnLogger = debug(`${baseNamespace}:warn`)
  const infoLogger = debug(`${baseNamespace}:info`)
  const debugLogger = debug(`${baseNamespace}:debug`)

  // Enable error and warn by default if DEBUG is set
  errorLogger.enabled = errorLogger.enabled || debug.enabled(baseNamespace)
  warnLogger.enabled = warnLogger.enabled || debug.enabled(baseNamespace)

  return {
    error(message: string, ...args: any[]): void {
      errorLogger(message, ...args)
    },
    warn(message: string, ...args: any[]): void {
      warnLogger(message, ...args)
    },
    info(message: string, ...args: any[]): void {
      infoLogger(message, ...args)
    },
    debug(message: string, ...args: any[]): void {
      debugLogger(message, ...args)
    },
  }
}

/**
 * Pre-configured logger instances for each module
 */
export const formatterLogger = createLogger("formatter")
export const cliLogger = createLogger("cli")
export const configLogger = createLogger("config")
export const batchLogger = createLogger("batch")

/**
 * Export the createLogger function as default
 */
export default createLogger
