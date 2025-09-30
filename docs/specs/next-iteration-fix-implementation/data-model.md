# Data Model: Gosu Formatter Tooling & Observability

**Feature**: Complete Gosu Language Formatter System  
**Created**: 2025-09-30

## Entity Definitions

### CLIOptions

**Purpose**: Represents parsed and validated command-line arguments

**Fields:**
- `files: string[]` - File paths or glob patterns to format
- `write: boolean` - Modify files in-place (default: false, output to stdout)
- `check: boolean` - Verify formatting without modifications
- `showConfig: boolean` - Display resolved configuration and exit
- `config?: string` - Path to custom configuration file
- `help: boolean` - Display help message
- `version: boolean` - Display version number
- `logLevel?: LogLevel` - Override log level for this run

**Validation Rules:**
- `check` and `write` are mutually exclusive
- `showConfig` cannot be combined with file operations
- At least one file path required unless `showConfig`, `help`, or `version` specified
- `config` path must exist if provided
- `files` must match at least one file (glob expansion must succeed)

**State Transitions:**
- Parsed → Validated → Executed

### ConfigResolution

**Purpose**: Represents the result of configuration cascade resolution

**Fields:**
- `config: FormattingConfiguration` - Resolved configuration object
- `sources: ConfigSource[]` - Ordered list of configuration sources (highest precedence first)
- `resolution: 'cascade' | 'explicit' | 'default'` - How configuration was determined
- `errors: ValidationError[]` - Non-fatal validation warnings

**ConfigSource Sub-Entity:**
- `path: string` - File path or "<defaults>" or "<user-settings>"
- `type: 'default' | 'user' | 'workspace' | 'project'` - Configuration layer
- `loadedAt: Date` - Timestamp when loaded
- `values: Partial<FormattingConfiguration>` - Values contributed by this source

**Relationships:**
- Contains `FormattingConfiguration` (existing entity from formatter module)
- Contains array of `ConfigSource`
- May contain `ValidationError[]`

**Validation Rules:**
- `sources` must have at least one entry (defaults always present)
- `type: 'project'` must have real file path
- All `values` must be valid `FormattingConfiguration` subsets

### LogEntry

**Purpose**: Represents a single structured log message

**Fields:**
- `timestamp: Date` - When log entry was created
- `level: LogLevel` - Severity level
- `source: string` - Component that generated log (e.g., "formatter", "cli", "config-loader")
- `message: string` - Human-readable log message
- `metadata?: Record<string, unknown>` - Additional context (file path, duration, error details)
- `formatted: string` - Pre-formatted text representation

**LogLevel Enum:**
```typescript
type LogLevel = 'error' | 'warning' | 'info' | 'debug';
```

**Validation Rules:**
- `level` must be valid LogLevel
- `message` must be non-empty
- `metadata` must be JSON-serializable
- `formatted` generated from template: `[{timestamp}] [{level}] [{source}] {message}`

**State Transitions:**
- Created → Filtered (by log level) → Emitted (to output channel/stderr)

### FormatSummary

**Purpose**: Aggregates results from batch formatting operations

**Fields:**
- `totalFiles: number` - Total files processed
- `formatted: number` - Files that were modified
- `unchanged: number` - Files already correctly formatted
- `failed: number` - Files that could not be formatted (syntax errors)
- `skipped: number` - Files skipped due to configuration or errors
- `duration: number` - Total operation time in milliseconds
- `fileResults: FormatFileResult[]` - Individual file results

**FormatFileResult Sub-Entity:**
- `file: string` - File path
- `status: 'formatted' | 'unchanged' | 'failed' | 'skipped'` - Result status
- `duration: number` - Time spent formatting this file (ms)
- `error?: string` - Error message if status === 'failed'

**Validation Rules:**
- `totalFiles === formatted + unchanged + failed + skipped`
- `duration >= 0`
- Each `fileResults` entry must have valid status

**Relationships:**
- Aggregates multiple `FormatFileResult` entries
- Used by CLI to determine exit code

### FileWatcherState

**Purpose**: Manages file system watchers for configuration hot-reload

**Fields:**
- `watchers: Map<string, FSWatcher>` - Active file watchers keyed by watched path
- `debounceTimer: NodeJS.Timeout | null` - Debounce timer for batch changes
- `debounceMs: number` - Debounce delay (default: 300ms)
- `callback: (config: ConfigResolution) => void` - Function to call on config change
- `lastReload: Date | null` - Timestamp of last successful reload

**Validation Rules:**
- `debounceMs > 0`
- `callback` must be provided before watching starts
- `watchers` must be cleaned up on disposal

**State Transitions:**
- Initialized → Watching → Change Detected → Debouncing → Reloading → Watching
- Any state → Disposed (cleanup)

**Relationships:**
- Triggers `ConfigResolution` reload
- Emits `LogEntry` on reload events

### ProgressState

**Purpose**: Tracks progress for long-running batch operations

**Fields:**
- `operation: string` - Operation description (e.g., "Formatting files")
- `total: number` - Total items to process
- `completed: number` - Items completed so far
- `failed: number` - Items that failed
- `currentItem?: string` - Currently processing item description
- `cancellationToken: CancellationToken` - LSP cancellation support
- `progressToken: string | number` - LSP progress notification token

**Validation Rules:**
- `0 <= completed <= total`
- `0 <= failed <= total`
- `completed + failed <= total`
- `progressToken` must be unique per operation

**State Transitions:**
- Created → In Progress → Completed (or Cancelled or Failed)

**Relationships:**
- Used by LSP `$/progress` notifications
- Generates `LogEntry` on completion

## Entity Relationships Diagram

```
CLIOptions
  ├─> ConfigResolution (loads configuration)
  ├─> FormatSummary (produces results)
  └─> LogEntry[] (generates logs)

ConfigResolution
  ├─> ConfigSource[] (composition)
  ├─> FormattingConfiguration (references existing)
  └─> ValidationError[] (contains)

FormatSummary
  └─> FormatFileResult[] (composition)

FileWatcherState
  ├─> ConfigResolution (triggers reload)
  └─> LogEntry (emits on change)

ProgressState
  ├─> FormatSummary (tracks completion)
  └─> LogEntry (emits on milestone)

LogEntry
  └─> metadata: { file?, duration?, error?, ... }
```

## Data Flow

### 1. CLI Execution Flow
```
User Command
  → CLIOptions (parsed)
  → ConfigResolution (loaded)
  → FormatSummary (execution)
  → LogEntry[] (generated)
  → Exit Code (determined)
```

### 2. Configuration Hot-Reload Flow
```
File Change
  → FileWatcherState (detects)
  → Debounce Timer (waits)
  → ConfigResolution (reloaded)
  → LSP Server (notified)
  → LogEntry (logged)
```

### 3. Batch Formatting Flow
```
File List
  → ProgressState (initialized)
  → ForEach File:
      → Format (attempt)
      → FormatFileResult (create)
      → ProgressState (update)
      → LogEntry (log)
  → FormatSummary (aggregate)
  → LogEntry (summary)
```

## Persistence

**Configuration Files:**
- `.gosuformatting.json{c,5}` - Project configuration (persisted)
- VSCode settings - User/workspace preferences (persisted by VSCode)

**Runtime State:**
- `FileWatcherState` - In-memory only, recreated on server restart
- `LogEntry[]` - Buffered in memory, written to output channel
- `ProgressState` - In-memory only, discarded on completion

**No Database**: All state is file-based or ephemeral

## Validation Summary

**Type Safety:**
- All entities use TypeScript interfaces with strict types
- Runtime validation via zod or similar schema validator
- JSON schema for configuration files

**Boundary Validation:**
- File paths validated for existence before processing
- Configuration values validated against allowed ranges
- Log levels validated against enum
- Progress percentages validated (0-100)

**Error Handling:**
- Invalid CLI options → show help and exit code 3
- Invalid configuration → log error, fall back to defaults
- Invalid file paths → log warning, skip file
- Watcher errors → log error, continue operation

---

**Data Model Complete**: All entities defined with fields, relationships, validation rules, and state transitions documented.
