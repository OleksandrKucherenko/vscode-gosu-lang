/**
 * Configuration file watcher with hot-reload support
 * Watches .gosuformatting.json{c,5} files for changes
 */

import { type FSWatcher, watch } from "chokidar"
import type { FormattingConfiguration } from "./cli/show-config.js"
import { configLogger } from "./logger.js"

/**
 * Configuration change callback
 */
export type ConfigChangeCallback = (config: FormattingConfiguration) => void

/**
 * Configuration watcher options
 */
export interface ConfigWatcherOptions {
  /** Directory to watch */
  directory: string
  /** Debounce delay in milliseconds (default: 300) */
  debounceMs?: number
  /** Callback for configuration changes */
  onChange?: ConfigChangeCallback
}

/**
 * Configuration file watcher
 */
export class ConfigWatcher {
  private watcher: FSWatcher | null = null
  private debounceTimer: NodeJS.Timeout | null = null
  private readonly debounceMs: number
  private readonly directory: string
  private readonly callbacks: ConfigChangeCallback[] = []
  private currentConfig: FormattingConfiguration | null = null

  constructor(options: ConfigWatcherOptions) {
    this.directory = options.directory
    this.debounceMs = options.debounceMs || 300

    if (options.onChange) {
      this.callbacks.push(options.onChange)
    }
  }

  /**
   * Start watching configuration files
   */
  start(): void {
    if (this.watcher) {
      configLogger.warn("Watcher already started")
      return
    }

    const patterns = [
      `${this.directory}/.gosuformatting.json`,
      `${this.directory}/.gosuformatting.jsonc`,
      `${this.directory}/.gosuformatting.json5`,
    ]

    this.watcher = watch(patterns, {
      persistent: true,
      ignoreInitial: true,
      awaitWriteFinish: {
        stabilityThreshold: 100,
        pollInterval: 50,
      },
    })

    this.watcher.on("change", (path: string) => {
      configLogger.info(`Configuration file changed: ${path}`)
      this.handleChange(path)
    })

    this.watcher.on("add", (path: string) => {
      configLogger.info(`Configuration file added: ${path}`)
      this.handleChange(path)
    })

    this.watcher.on("unlink", (path: string) => {
      configLogger.info(`Configuration file removed: ${path}`)
      this.handleChange(path)
    })

    this.watcher.on("error", (error: Error) => {
      configLogger.error(`Watcher error: ${error.message}`)
    })

    configLogger.debug(`Started watching configuration files in ${this.directory}`)
  }

  /**
   * Handle configuration file change with debouncing
   */
  private handleChange(_path: string): void {
    // Clear existing timer
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer)
    }

    // Set new timer
    this.debounceTimer = setTimeout(async () => {
      try {
        await this.reload()
      } catch (error) {
        configLogger.error(`Failed to reload configuration: ${error}`)
      }
    }, this.debounceMs)
  }

  /**
   * Reload configuration from file
   */
  async reload(): Promise<void> {
    try {
      // Load configuration (placeholder - will be replaced with actual loader)
      const config = await this.loadConfig()

      // Validate configuration
      const isValid = this.validate(config)

      if (isValid) {
        this.currentConfig = config
        configLogger.info("Configuration reloaded successfully")

        // Notify callbacks
        for (const callback of this.callbacks) {
          try {
            callback(config)
          } catch (error) {
            configLogger.error(`Callback error: ${error}`)
          }
        }
      } else {
        configLogger.error("Configuration validation failed, keeping previous config")
      }
    } catch (error) {
      configLogger.error(`Failed to load configuration: ${error}`)
      throw error
    }
  }

  /**
   * Validate configuration
   */
  validate(config: FormattingConfiguration): boolean {
    // Basic validation
    if (config.indentSize !== undefined) {
      if (config.indentSize < 1 || config.indentSize > 8) {
        configLogger.error("Invalid indentSize: must be between 1 and 8")
        return false
      }
    }

    if (config.maxLineLength !== undefined) {
      if (config.maxLineLength < 40 || config.maxLineLength > 200) {
        configLogger.error("Invalid maxLineLength: must be between 40 and 200")
        return false
      }
    }

    return true
  }

  /**
   * Load configuration from file (placeholder)
   */
  private async loadConfig(): Promise<FormattingConfiguration> {
    // TODO: Integrate with actual config loader
    // For now, return default config
    return {
      indentSize: 2,
      indentStyle: "spaces",
      maxLineLength: 100,
      braceStyle: "attached",
      strictMode: false,
    }
  }

  /**
   * Register a callback for configuration changes
   */
  onReload(callback: ConfigChangeCallback): void {
    this.callbacks.push(callback)
  }

  /**
   * Get current configuration
   */
  getCurrentConfig(): FormattingConfiguration | null {
    return this.currentConfig
  }

  /**
   * Stop watching and cleanup
   */
  async dispose(): Promise<void> {
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer)
      this.debounceTimer = null
    }

    if (this.watcher) {
      await this.watcher.close()
      this.watcher = null
      configLogger.debug("Watcher disposed")
    }

    this.callbacks.length = 0
    this.currentConfig = null
  }
}

export default ConfigWatcher
