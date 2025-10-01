# Research: Gosu Formatter Tooling & Observability

**Feature**: Complete Gosu Language Formatter System  
**Created**: 2025-09-30  
**Status**: Complete

## 1. CLI Best Practices

### Decision: Use Commander.js for CLI argument parsing

**Rationale:**
- Industry standard (used by Prettier, create-react-app)
- Type-safe with TypeScript
- Built-in help generation
- Supports subcommands and option validation
- 16M+ weekly downloads, actively maintained

**Alternatives Considered:**
- **yargs**: More features but heavier (4MB vs 200KB)
- **minimist**: Too low-level, manual validation needed
- **meow**: Simpler but lacks type safety

### Decision: Follow Prettier's --check pattern

**Exit Codes:**
- 0: All files formatted correctly
- 1: Some files need formatting (--check mode) OR formatting applied successfully (--write mode)
- 2: Syntax errors encountered
- 3: Configuration errors

**Rationale:** Consistent with ecosystem expectations (Prettier, Black, gofmt all use this pattern)

### Decision: Use fast-glob for glob pattern support

**Rationale:**
- 2x faster than globby
- Supports all standard glob patterns (*, **, ?, [abc])
- Handles `.gitignore` automatically
- 5M+ weekly downloads

**Alternatives Considered:**
- **globby**: More features but slower
- **node-glob**: Legacy, slower

## 2. Logging Patterns

### Decision: Implement custom StructuredLogger class

**Architecture:**
- Central logger instance in `modules/server/src/logger.ts`
- Adapters for different outputs (VSCode OutputChannel, stderr, file)
- Structured JSON for machine-readable logs, formatted text for humans

**Rationale:**
- VSCode OutputChannel requires specific API integration
- Need log level filtering (configurable)
- Performance tracking via timer API
- Metadata support for context (file, line, operation)

**Format:**
```
[2025-09-30 16:38:45.123] [INFO] [formatter] Formatted example.gs (42ms)
[2025-09-30 16:38:45.165] [ERROR] [formatter] Syntax error in test.gs:15:4 - Expected ')'
```

### Decision: Log levels match standard severity

- **ERROR**: Syntax errors, formatter bugs, file access errors
- **WARN**: Configuration warnings, deprecated options
- **INFO**: File formatted, configuration loaded, operation summaries
- **DEBUG**: Detailed execution traces, AST information

**Rationale:** Aligns with syslog and LSP log level conventions

### Decision: Performance threshold monitoring at 200ms

- Log INFO if formatting < 200ms (p95 target)
- Log WARN if formatting 200-500ms
- Log ERROR if formatting > 500ms (performance regression)

**Rationale:** Matches constitutional performance requirement (FR-035)

## 3. Configuration Hot-Reload

### Decision: Use chokidar for file watching

**Rationale:**
- Cross-platform (Windows, macOS, Linux)
- Handles symlinks and network drives
- Debouncing built-in
- Used by webpack, vite, jest
- 15M+ weekly downloads

**Alternatives Considered:**
- **fs.watch**: Native but inconsistent across platforms
- **fs.watchFile**: Polling-based, high CPU usage

### Decision: Debounce reload at 300ms

**Rationale:**
- Prevents multiple reloads during file save (some editors write twice)
- Long enough to avoid churn, short enough for responsiveness

### Decision: Invalidate LSP server cache on config change

**Flow:**
1. File watcher detects `.gosuformatting.json{c,5}` change
2. Debounce timer triggers after 300ms
3. Reload configuration from disk
4. Validate new configuration
5. Broadcast config update to LSP server
6. Log INFO message: "Configuration reloaded from {path}"

**Rationale:** LSP protocol supports dynamic configuration updates via `workspace/didChangeConfiguration`

## 4. Progress Reporting

### Decision: Use LSP $/progress API for VSCode

**Architecture:**
- Create progress token at batch operation start
- Send progress notifications with percentage
- Support cancellation via CancellationToken

**Rationale:** Standard LSP mechanism, integrated into VSCode UI

### Decision: Async iterator pattern for batch processing

```typescript
async function* formatFilesWithProgress(files: string[]) {
  for (let i = 0; i < files.length; i++) {
    const result = await formatFile(files[i]);
    yield { index: i, total: files.length, result };
  }
}
```

**Rationale:**
- Streams results incrementally
- Supports cancellation between files
- Memory efficient for large batches

**Alternatives Considered:**
- **Promise.all**: No progress tracking, fails fast on error
- **p-map**: Good but less control over cancellation

### Decision: CLI progress uses stderr, results use stdout

**Rationale:**
- Allows piping formatted code to stdout
- Progress messages go to stderr (can be redirected separately)
- Matches standard Unix tool behavior

## 5. Exit Code Conventions

### Decision: Adopt standard formatter exit codes

| Code | Meaning | Use Case |
|------|---------|----------|
| 0 | Success | All files formatted OR all files already formatted (--check) |
| 1 | Format needed | --check found unformatted files OR --write formatted files successfully |
| 2 | Syntax error | One or more files have syntax errors preventing formatting |
| 3 | Config error | Configuration file invalid or missing required options |
| 130 | User interrupt | Ctrl+C pressed during operation |

**Rationale:** Matches Prettier, Black, rustfmt conventions

## 6. Configuration Display Format

### Decision: JSON output with source attribution

**Example --show-config output:**
```json
{
  "config": {
    "indentSize": 2,
    "indentStyle": "spaces",
    "maxLineLength": 100,
    "braceStyle": "attached"
  },
  "sources": [
    { "path": "/workspace/.gosuformatting.json", "type": "project" },
    { "path": "<defaults>", "type": "default" }
  ],
  "resolution": "cascade"
}
```

**Rationale:**
- Machine-readable for tooling integration
- Shows which settings come from which file
- Easy to verify configuration is correct

**Alternative Mode:** Add `--show-config=table` for human-readable format

## Implementation Dependencies

**NPM Packages to Add:**
- `commander` (^11.0.0) - CLI parsing
- `fast-glob` (^3.3.0) - Glob patterns
- `chokidar` (^3.5.0) - File watching

**No Breaking Changes**: All additions are new features

## Performance Impact Assessment

- **CLI flag parsing**: <1ms overhead
- **Glob pattern expansion**: ~10-50ms for typical project
- **File watching**: Negligible CPU (event-driven)
- **Progress reporting**: ~0.1ms per file
- **Logging**: <0.5ms per log entry (async writes)

**Total Overhead**: <100ms even for large projects

---

**Research Validation**: All decisions documented with rationales, alternatives considered, and implementation guidance provided.
