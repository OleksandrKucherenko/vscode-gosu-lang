/**
 * Logging utilities for Gosu formatter
 * Provides common formatting and timing helpers
 */

/**
 * Format timestamp in ISO 8601 format
 * @returns ISO 8601 formatted timestamp
 */
export function formatTimestamp(): string {
  return new Date().toISOString()
}

/**
 * Performance timer for tracking operation duration
 */
export class PerformanceTimer {
  private startTime: number
  private endTime: number | null = null

  constructor() {
    this.startTime = Date.now()
  }

  /**
   * End the timer and return duration in milliseconds
   */
  end(): number {
    this.endTime = Date.now()
    return this.duration()
  }

  /**
   * Get duration in milliseconds
   * If timer hasn't ended, returns elapsed time so far
   */
  duration(): number {
    const end = this.endTime || Date.now()
    return end - this.startTime
  }

  /**
   * Get formatted duration string
   */
  formatted(): string {
    const ms = this.duration()
    if (ms < 1000) {
      return `${ms}ms`
    }
    return `${(ms / 1000).toFixed(2)}s`
  }
}

/**
 * Create a performance timer
 */
export function startTimer(): PerformanceTimer {
  return new PerformanceTimer()
}

/**
 * Format file path for logging (relative to cwd if possible)
 * @param filePath - Absolute file path
 * @returns Formatted path
 */
export function formatFilePath(filePath: string): string {
  const cwd = process.cwd()
  if (filePath.startsWith(cwd)) {
    return filePath.substring(cwd.length + 1)
  }
  return filePath
}

/**
 * Format duration in milliseconds to human-readable string
 * @param ms - Duration in milliseconds
 * @returns Formatted duration
 */
export function formatDuration(ms: number): string {
  if (ms < 1000) {
    return `${ms}ms`
  }
  if (ms < 60000) {
    return `${(ms / 1000).toFixed(2)}s`
  }
  const minutes = Math.floor(ms / 60000)
  const seconds = ((ms % 60000) / 1000).toFixed(0)
  return `${minutes}m ${seconds}s`
}

/**
 * Format error for logging
 * @param error - Error object or message
 * @returns Formatted error message
 */
export function formatError(error: unknown): string {
  if (error instanceof Error) {
    return `${error.name}: ${error.message}`
  }
  if (typeof error === "string") {
    return error
  }
  return String(error)
}

/**
 * Format error with stack trace
 * @param error - Error object
 * @returns Formatted error with stack
 */
export function formatErrorWithStack(error: unknown): string {
  if (error instanceof Error && error.stack) {
    return `${error.name}: ${error.message}\n${error.stack}`
  }
  return formatError(error)
}

/**
 * Sanitize metadata object for logging
 * Removes sensitive information and limits depth
 * @param metadata - Metadata object
 * @returns Sanitized metadata
 */
export function sanitizeMetadata(metadata: Record<string, any>): Record<string, any> {
  const sanitized: Record<string, any> = {}

  for (const [key, value] of Object.entries(metadata)) {
    // Skip undefined and null
    if (value === undefined || value === null) {
      continue
    }

    // Skip sensitive keys
    if (
      key.toLowerCase().includes("password") ||
      key.toLowerCase().includes("token") ||
      key.toLowerCase().includes("secret")
    ) {
      sanitized[key] = "[REDACTED]"
      continue
    }

    // Limit string length
    if (typeof value === "string" && value.length > 1000) {
      sanitized[key] = `${value.substring(0, 1000)}... (truncated)`
      continue
    }

    // Limit array length
    if (Array.isArray(value) && value.length > 100) {
      sanitized[key] = [...value.slice(0, 100), `... (${value.length - 100} more items)`]
      continue
    }

    // Shallow copy objects (don't recurse deeply)
    if (typeof value === "object" && !Array.isArray(value)) {
      sanitized[key] = { ...value }
      continue
    }

    sanitized[key] = value
  }

  return sanitized
}

/**
 * Format log message with common pattern
 * @param level - Log level
 * @param source - Source component
 * @param message - Log message
 * @param metadata - Optional metadata
 * @returns Formatted log message
 */
export function formatLogMessage(
  level: "error" | "warning" | "info" | "debug",
  source: string,
  message: string,
  metadata?: Record<string, any>,
): string {
  const timestamp = formatTimestamp()
  let formatted = `[${timestamp}] [${level}] [${source}] ${message}`

  if (metadata && Object.keys(metadata).length > 0) {
    const sanitized = sanitizeMetadata(metadata)
    formatted += ` ${JSON.stringify(sanitized)}`
  }

  return formatted
}

/**
 * Create a structured log entry
 */
export interface LogEntry {
  timestamp: string
  level: "error" | "warning" | "info" | "debug"
  source: string
  message: string
  metadata?: Record<string, any>
  formatted: string
}

/**
 * Create a structured log entry
 * @param level - Log level
 * @param source - Source component
 * @param message - Log message
 * @param metadata - Optional metadata
 * @returns Log entry object
 */
export function createLogEntry(
  level: "error" | "warning" | "info" | "debug",
  source: string,
  message: string,
  metadata?: Record<string, any>,
): LogEntry {
  const timestamp = formatTimestamp()
  const formatted = formatLogMessage(level, source, message, metadata)

  return {
    timestamp,
    level,
    source,
    message,
    ...(metadata && { metadata: sanitizeMetadata(metadata) }),
    formatted,
  }
}
