# Logging Interface Contract

**Feature**: Complete Gosu Language Formatter System  
**Module**: `modules/server/src/logger.ts`

## Interface Definition

```typescript
export interface StructuredLogger {
  /**
   * Log error-level message
   * @param message - Human-readable error description
   * @param metadata - Additional context (error object, file path, etc.)
   */
  error(message: string, metadata?: Record<string, unknown>): void;
  
  /**
   * Log warning-level message
   * @param message - Warning description
   * @param metadata - Additional context
   */
  warn(message: string, metadata?: Record<string, unknown>): void;
  
  /**
   * Log info-level message
   * @param message - Informational message
   * @param metadata - Additional context
   */
  info(message: string, metadata?: Record<string, unknown>): void;
  
  /**
   * Log debug-level message
   * @param message - Debug information
   * @param metadata - Additional context
   */
  debug(message: string, metadata?: Record<string, unknown>): void;
  
  /**
   * Start a timer for performance tracking
   * @param operation - Operation name
   * @returns Timer object with end() method
   */
  startTimer(operation: string): { end: () => void };
  
  /**
   * Set minimum log level (filters out lower levels)
   * @param level - Minimum level to log
   */
  setLevel(level: LogLevel): void;
  
  /**
   * Get current log level
   * @returns Current minimum log level
   */
  getLevel(): LogLevel;
  
  /**
   * Attach VSCode output channel for logging
   * @param channel - VSCode OutputChannel instance
   */
  attachOutputChannel(channel: vscode.OutputChannel): void;
  
  /**
   * Attach stderr stream for CLI logging
   * @param stream - Writable stream (defaults to process.stderr)
   */
  attachStderr(stream?: NodeJS.WriteStream): void;
  
  /**
   * Detach all output channels/streams
   */
  detachAll(): void;
}
```

## Supporting Types

```typescript
export type LogLevel = 'error' | 'warning' | 'info' | 'debug';

export interface LogEntry {
  timestamp: Date;
  level: LogLevel;
  source: string;
  message: string;
  metadata?: Record<string, unknown>;
  formatted: string;
}

export class LogFormatter {
  /**
   * Format log entry for human-readable output
   * @param entry - Log entry to format
   * @returns Formatted string
   */
  static format(entry: LogEntry): string;
  
  /**
   * Format log entry as JSON for machine reading
   * @param entry - Log entry to format
   * @returns JSON string
   */
  static formatJSON(entry: LogEntry): string;
}
```

## Contract Tests

### Test: Log level filtering

**Given**: Logger with level set to 'info'  
**When**: `debug()`, `info()`, `warn()`, `error()` are called  
**Then**: Only info, warn, and error messages are emitted (debug filtered)

### Test: Metadata included in output

**Given**: Logger attached to output channel  
**When**: `info("Formatted file", { file: "example.gs", duration: 42 })`  
**Then**: Output includes file path and duration in metadata

### Test: Performance timer

**Given**: Logger instance  
**When**: Timer started, operation performed, timer ended  
**Then**: INFO log emitted with operation name and duration in ms

### Test: Multiple output channels

**Given**: Logger with VSCode output channel AND stderr attached  
**When**: `info("message")` called  
**Then**: Message written to BOTH outputs

### Test: Output channel integration

**Given**: VSCode OutputChannel instance  
**When**: Logger attached and messages logged  
**Then**: Messages appear in "Gosu Language Server" output panel with timestamps

### Test: Structured logging format

**Given**: Any log message  
**When**: Formatted for output  
**Then**: Format is `[YYYY-MM-DD HH:MM:SS.mmm] [LEVEL] [source] message`

## Log Level Hierarchy

```
DEBUG (most verbose)
  ↓
INFO
  ↓
WARNING
  ↓
ERROR (least verbose)
```

Setting level to 'warning' filters out 'debug' and 'info'.

## Log Message Guidelines

### ERROR Level
- **Use for**: Syntax errors, file access failures, formatter bugs, configuration errors
- **Format**: `ERROR: {description} - {specific error}`
- **Example**: `ERROR: Failed to format file - Syntax error at line 15, column 4: Expected ')'`

### WARNING Level
- **Use for**: Deprecated options, configuration warnings, performance degradation
- **Format**: `WARN: {description} - {recommendation}`
- **Example**: `WARN: Formatting took 450ms - Consider breaking file into smaller modules`

### INFO Level
- **Use for**: File formatted, configuration loaded, operation summaries
- **Format**: `INFO: {action completed} ({details})`
- **Example**: `INFO: Formatted example.gs (42ms)`

### DEBUG Level
- **Use for**: Detailed execution traces, AST information, internal state
- **Format**: `DEBUG: {detailed information}`
- **Example**: `DEBUG: Parser generated 142 AST nodes for example.gs`

## Performance Tracking Contract

### Timer API Usage

```typescript
const timer = logger.startTimer('format-file');
try {
  await formatFile('example.gs');
  timer.end(); // Logs: "INFO: format-file completed (42ms)"
} catch (error) {
  timer.end(); // Still logs duration even on error
  logger.error('Format failed', { error });
}
```

### Performance Thresholds

| Duration | Log Level | Message Pattern |
|----------|-----------|-----------------|
| < 200ms | INFO | `Formatted {file} ({duration}ms)` |
| 200-500ms | WARN | `Formatting took {duration}ms (threshold: 200ms) - {file}` |
| > 500ms | ERROR | `Performance regression: {duration}ms (expected <200ms) - {file}` |

## Output Format Examples

### Human-Readable (VSCode Output Channel / stderr)

```
[2025-09-30 16:38:45.123] [INFO] [formatter] Formatted example.gs (42ms)
[2025-09-30 16:38:45.165] [ERROR] [formatter] Syntax error in test.gs:15:4 - Expected ')'
[2025-09-30 16:38:45.200] [WARN] [config-loader] Using default indentSize (2) - No value in config
[2025-09-30 16:38:45.234] [DEBUG] [formatter] Generated 142 AST nodes
```

### JSON Format (machine-readable, optional)

```json
{
  "timestamp": "2025-09-30T14:38:45.123Z",
  "level": "info",
  "source": "formatter",
  "message": "Formatted example.gs (42ms)",
  "metadata": {
    "file": "/workspace/example.gs",
    "duration": 42,
    "linesChanged": 5
  }
}
```

## Thread Safety & Buffering

- Logger MUST be thread-safe for concurrent formatting operations
- Messages buffered and written async to avoid blocking formatter
- Buffer flushed on process exit or explicit flush() call
- Maximum buffer size: 1000 entries (oldest discarded if exceeded)

## Configuration Integration

### VSCode Settings

```json
{
  "gosu.logLevel": "info",
  "gosu.logging.showTimestamps": true,
  "gosu.logging.format": "text" // or "json"
}
```

### Environment Variables (CLI)

```bash
GOSU_LOG_LEVEL=debug npx @gosu-lsp/formatter file.gs
```

## Performance Requirements

- Log entry creation: <0.1ms
- Output channel write: <0.5ms (async)
- Timer overhead: <0.05ms
- Level filtering: O(1)

## Error Handling

- If output channel detached, buffer messages (up to limit)
- If write fails, fall back to console.error
- Never throw from logging methods (fail silently if necessary)

---

**Contract Status**: Ready for implementation and testing
