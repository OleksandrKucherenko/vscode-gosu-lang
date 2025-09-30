/**
 * Progress tracking for batch operations
 * Provides progress updates and time estimation
 */

import { batchLogger } from "./logger.js"
import { formatDuration } from "./logger-utils.js"

/**
 * Progress state
 */
export interface ProgressState {
  operation: string
  total: number
  completed: number
  failed: number
  currentItem?: string
  percentage: number
  estimatedTimeRemaining?: number
}

/**
 * Progress update callback
 */
export type ProgressCallback = (state: ProgressState) => void

/**
 * Progress tracker for batch operations
 */
export class ProgressTracker {
  private readonly operation: string
  private readonly total: number
  private completed: number = 0
  private failed: number = 0
  private currentItem: string | undefined
  private readonly callbacks: ProgressCallback[] = []
  private readonly startTime: number
  private itemStartTimes: number[] = []

  constructor(operation: string, total: number) {
    this.operation = operation
    this.total = total
    this.startTime = Date.now()

    batchLogger.debug(`Progress tracker created: ${operation} (${total} items)`)
  }

  /**
   * Update progress with completed item
   * @param item - Current item being processed
   */
  update(item?: string): void {
    this.completed++
    this.currentItem = item

    // Track timing for estimation
    if (this.itemStartTimes.length < 100) {
      this.itemStartTimes.push(Date.now())
    }

    const state = this.getState()

    batchLogger.debug(`Progress: ${state.completed}/${state.total} (${state.percentage}%)${item ? ` - ${item}` : ""}`)

    // Notify callbacks
    for (const callback of this.callbacks) {
      try {
        callback(state)
      } catch (error) {
        batchLogger.error(`Progress callback error: ${error}`)
      }
    }
  }

  /**
   * Increment failed count
   */
  incrementFailed(): void {
    this.failed++
  }

  /**
   * Get current progress state
   */
  getState(): ProgressState {
    const percentage = Math.round((this.completed / this.total) * 100)
    const estimatedTimeRemaining = this.estimateTimeRemaining()

    return {
      operation: this.operation,
      total: this.total,
      completed: this.completed,
      failed: this.failed,
      currentItem: this.currentItem,
      percentage,
      ...(estimatedTimeRemaining !== undefined && { estimatedTimeRemaining }),
    }
  }

  /**
   * Estimate time remaining in milliseconds
   * Only available after processing >10 items
   */
  private estimateTimeRemaining(): number | undefined {
    if (this.completed < 10) {
      return undefined
    }

    const elapsed = Date.now() - this.startTime
    const averageTimePerItem = elapsed / this.completed
    const remaining = this.total - this.completed

    return Math.round(remaining * averageTimePerItem)
  }

  /**
   * Register a progress callback
   * @param callback - Callback function
   */
  onProgress(callback: ProgressCallback): void {
    this.callbacks.push(callback)
  }

  /**
   * Get formatted progress message
   */
  getFormattedMessage(): string {
    const state = this.getState()
    let message = `${state.operation}... [${state.completed}/${state.total}] ${state.percentage}%`

    if (state.currentItem) {
      message += ` - ${state.currentItem}`
    }

    if (state.estimatedTimeRemaining !== undefined) {
      message += ` (${formatDuration(state.estimatedTimeRemaining)} remaining)`
    }

    return message
  }

  /**
   * Check if operation is complete
   */
  isComplete(): boolean {
    return this.completed >= this.total
  }

  /**
   * Get elapsed time in milliseconds
   */
  getElapsedTime(): number {
    return Date.now() - this.startTime
  }
}

export default ProgressTracker
