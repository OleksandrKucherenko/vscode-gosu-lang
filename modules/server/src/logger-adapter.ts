/**
 * VSCode logging adapter for Gosu Language Server
 * Uses @vscode-logging/logger for structured logging to VSCode output channel
 */

import { getLogger, type IVSCodeExtLogger } from "@vscode-logging/logger"

/**
 * Log levels supported by the logger
 */
export type LogLevel = "error" | "warn" | "info" | "debug" | "trace"

/**
 * Logger configuration
 */
export interface LoggerConfig {
  /** Log level threshold */
  level: LogLevel
  /** Optional log file path for file logging */
  logFile?: string
  /** Enable console logging (default: true) */
  console?: boolean
}

/**
 * Singleton logger instance
 */
let loggerInstance: IVSCodeExtLogger | null = null
let currentConfig: LoggerConfig = {
  level: "info",
  console: true,
}

/**
 * Initialize the VSCode logger
 * @param config - Logger configuration
 * @returns Logger instance
 */
export function initializeLogger(config: Partial<LoggerConfig> = {}): IVSCodeExtLogger {
  currentConfig = {
    ...currentConfig,
    ...config,
  }

  if (!loggerInstance) {
    loggerInstance = getLogger({
      label: "Gosu Language Server",
      level: currentConfig.level,
      // File logging configuration
      ...(currentConfig.logFile && {
        sourceLocationTracking: true,
        logPath: currentConfig.logFile,
      }),
    })
  }

  return loggerInstance
}

/**
 * Get the current logger instance
 * Initializes with default config if not already initialized
 */
export function getLoggerInstance(): IVSCodeExtLogger {
  if (!loggerInstance) {
    return initializeLogger()
  }
  return loggerInstance
}

/**
 * Update logger configuration
 * @param config - Partial configuration to update
 */
export function updateLoggerConfig(config: Partial<LoggerConfig>): void {
  currentConfig = {
    ...currentConfig,
    ...config,
  }

  if (loggerInstance && config.level) {
    loggerInstance.changeLevel(config.level)
  }
}

/**
 * Get current logger configuration
 */
export function getLoggerConfig(): LoggerConfig {
  return { ...currentConfig }
}

/**
 * Dispose the logger (cleanup)
 */
export function disposeLogger(): void {
  loggerInstance = null
}

/**
 * Export the logger instance for convenience
 */
export const logger = {
  get instance(): IVSCodeExtLogger {
    return getLoggerInstance()
  },

  error(message: string, ...args: any[]): void {
    getLoggerInstance().error(message, ...args)
  },

  warn(message: string, ...args: any[]): void {
    getLoggerInstance().warn(message, ...args)
  },

  info(message: string, ...args: any[]): void {
    getLoggerInstance().info(message, ...args)
  },

  debug(message: string, ...args: any[]): void {
    getLoggerInstance().debug(message, ...args)
  },

  trace(message: string, ...args: any[]): void {
    getLoggerInstance().trace(message, ...args)
  },
}

export default logger
