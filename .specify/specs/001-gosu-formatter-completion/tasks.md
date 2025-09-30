# Tasks: Complete Gosu Formatter System

**Input**: Design documents from `.specify/specs/001-gosu-formatter-completion/`  
**Prerequisites**: plan.md ✅, research.md ✅, data-model.md ✅, contracts/ ✅, quickstart.md ✅

## Execution Flow (main)
```
1. Load plan.md from feature directory ✅
2. Load optional design documents ✅
3. Generate tasks by category ✅
4. Apply task rules ✅
5. Number tasks sequentially ✅
6. Generate dependency graph ✅
7. Validate task completeness ✅
8. Return: SUCCESS ✅
```

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions
- **Formatter module**: `modules/formatter/src/`, `modules/formatter/test/`
- **Server module**: `modules/server/src/`, `modules/server/test/`
- **Integration tests**: `test/integration/`

---

## Phase 3.1: Setup

- [ ] **T001** [P] Add commander ^11.0.0, fast-glob ^3.3.0, chokidar ^3.5.0 to modules/formatter/package.json dependencies
- [ ] **T002** [P] Add @vscode-logging/logger ^2.0.0 to modules/server/package.json dependencies (VSCode extension logging)
- [ ] **T003** [P] Verify debug ^4.4.3 is in dependencies (already exists, used for CLI/non-VSCode logging)
- [ ] **T004** [P] Add @types/node to modules/formatter/package.json devDependencies
- [ ] **T005** [P] Create directory structure: modules/formatter/src/cli/, modules/formatter/test/cli/, modules/formatter/test/logger/, modules/formatter/test/config-watcher/, modules/formatter/test/batch/

---

## Phase 3.2: Tests First (TDD) ⚠️ MUST COMPLETE BEFORE 3.3

**CRITICAL: These tests MUST be written and MUST FAIL before ANY implementation**

### Contract Tests

- [ ] **T006** [P] Contract test for CLIOptions in modules/formatter/test/cli/options.contract.test.ts
  - Valid: `{ files: ["test.gs"], write: true }`
  - Valid: `{ showConfig: true }`
  - Invalid: `{ check: true, write: true }` (mutually exclusive)
  - Invalid: `{ files: [] }` (no files without showConfig)
  - Invalid: `{ logLevel: "trace" }` (invalid level)

- [ ] **T007** [P] Contract test for ConfigResolution in modules/formatter/test/config/resolution.contract.test.ts
  - Valid: cascade with project + defaults
  - Valid: explicit config file
  - Invalid: empty sources array
  - Invalid: missing required fields

- [ ] **T008** [P] Contract test for LogEntry in modules/formatter/test/logger/entry.contract.test.ts
  - Valid: complete log entry with metadata
  - Valid: minimal log entry (no metadata)
  - Invalid: missing timestamp, invalid level, empty message
  - Verify formatted string pattern

- [ ] **T009** [P] Contract test for FormatSummary in modules/formatter/test/batch/summary.contract.test.ts
  - Valid: summary with all fields
  - Valid: totalFiles === sum of categories
  - Invalid: negative counts, totalFiles mismatch

### Integration Tests

- [ ] **T010** [P] Integration test for CLI check mode in test/integration/cli-check-mode.test.ts
  - Given: Directory with 3 files (1 formatted, 2 unformatted)
  - When: Run `gosu-format --check src/`
  - Then: Exit code 1, lists 2 files needing formatting, no files modified

- [ ] **T011** [P] Integration test for CLI show-config in test/integration/cli-show-config.test.ts
  - Given: Project with `.gosuformatting.json`
  - When: Run `gosu-format --show-config`
  - Then: JSON output with config and sources array

- [ ] **T012** [P] Integration test for config hot-reload in test/integration/config-hot-reload.test.ts
  - Given: VSCode with formatter active
  - When: Modify `.gosuformatting.json`
  - Then: Config reloaded within 500ms, log entry emitted

- [ ] **T013** [P] Integration test for batch progress in test/integration/batch-progress.test.ts
  - Given: 10 files to format
  - When: Run batch format
  - Then: Progress updates emitted, summary logged

- [ ] **T014** [P] Integration test for parallel execution in test/integration/batch-parallel.test.ts
  - Given: 10 files to format
  - When: Run batch format
  - Then: Files processed in parallel (≥5 files threshold)

- [ ] **T015** [P] Integration test for glob patterns in test/integration/cli-glob-patterns.test.ts
  - Given: Directory with nested .gs files
  - When: Run `gosu-format src/**/*.gs`
  - Then: All matching files found and formatted

---

## Phase 3.3: Core Implementation

### Logging Infrastructure

- [ ] **T016** Implement debug-based logger in modules/formatter/src/logger.ts
  - Use debug package with namespaces: gosu:formatter, gosu:cli, gosu:config, gosu:batch
  - Create factory function: createLogger(namespace)
  - Export logger instances for each module
  - Enable via DEBUG=gosu:* environment variable

- [ ] **T017** Implement @vscode-logging/logger adapter in modules/server/src/logger-adapter.ts
  - Import and configure @vscode-logging/logger
  - Create logger with name "Gosu Language Server"
  - Configure log level from VSCode settings (gosu.logLevel)
  - Enable file logging with automatic rotation
  - Expose logger instance for server use

- [ ] **T018** [P] Create logging utilities in modules/formatter/src/logger-utils.ts
  - ISO 8601 timestamp formatter
  - Performance timing helpers (start/end)
  - Log message formatters for common patterns
  - Metadata sanitization (if needed)

### CLI Command Handlers

- [ ] **T019** [P] Implement CheckCommand in modules/formatter/src/cli/check.ts
  - Format files in memory (no writes)
  - Compare formatted vs original
  - Collect unformatted files list
  - Return exit code 1 if changes needed, 0 otherwise
  - Output unformatted files to stderr
  - Use debug logger (gosu:cli)

- [ ] **T020** [P] Implement ShowConfigCommand in modules/formatter/src/cli/show-config.ts
  - Load configuration using existing loader
  - Build ConfigResolution with sources
  - Track which settings from which source
  - Output JSON to stdout
  - Return exit code 0
  - Use debug logger (gosu:cli)

- [ ] **T021** [P] Implement FormatCommand in modules/formatter/src/cli/format.ts
  - Accept file list from glob expansion
  - Batch processing with progress tracking
  - Support --write mode (in-place) and stdout mode
  - Generate FormatSummary with counts
  - Return exit codes: 0=success, 1=formatted, 2=syntax error
  - Use debug logger (gosu:cli)

### CLI Entry Point

- [ ] **T022** Refactor CLI entry point in modules/formatter/src/cli.ts
  - Replace manual parsing with commander
  - Define commands: format, check, show-config
  - Define options: --write, --check, --show-config, --config, --log-level
  - Implement mutual exclusion (--check and --write)
  - Wire to handlers
  - Implement help and version
  - Initialize debug logger

### Configuration Hot-Reload

- [ ] **T023** Implement ConfigWatcher in modules/formatter/src/config-watcher.ts
  - Use chokidar to watch `.gosuformatting.json{c,5}`
  - Implement 300ms debouncing
  - Implement reload() and validate() methods
  - Use debug logger (gosu:config)
  - Implement dispose() for cleanup

- [ ] **T024** Integrate ConfigWatcher with LSP in modules/server/src/handlers/configuration.ts
  - Initialize ConfigWatcher on server start
  - Register callback for LSP `workspace/didChangeConfiguration`
  - Invalidate formatter cache on reload
  - Log reload events via @vscode-logging/logger

### Batch Processing

- [ ] **T025** Implement BatchProcessor in modules/formatter/src/batch.ts
  - Accept file list and options
  - Concurrency detection: <5 sequential, ≥5 parallel
  - Parallel execution with os.cpus().length limit
  - Skip-and-continue for read-only files
  - Collect FormatFileResult per file
  - Generate FormatSummary
  - Timeout protection (5x expected time)
  - Use debug logger (gosu:batch)

- [ ] **T026** Implement ProgressTracker in modules/formatter/src/progress.ts
  - Create ProgressState (operation, total, completed, failed, currentItem)
  - Implement update() to increment progress
  - Calculate percentage
  - Estimate time remaining (>10 files)
  - Emit progress events
  - Use debug logger (gosu:batch)

- [ ] **T027** Integrate ProgressTracker with CLI in modules/formatter/src/cli/format.ts
  - Create ProgressTracker for batch ops
  - Emit progress to stderr via debug logger
  - Display current file and percentage
  - Display summary on completion

- [ ] **T028** Integrate ProgressTracker with LSP in modules/server/src/handlers/formatting.ts
  - Create LSP progress token
  - Send `$/progress` notifications
  - Support cancellation via CancellationToken
  - Display in VSCode UI
  - Log via @vscode-logging/logger

### Glob Pattern Support

- [ ] **T029** Implement glob expansion in modules/formatter/src/cli/glob.ts
  - Use fast-glob to expand patterns
  - Support *, **, ?, [abc] patterns
  - Respect .gitignore
  - Filter for .gs, .gsx, .gst, .gsp files
  - Return absolute paths
  - Use debug logger (gosu:cli)

- [ ] **T030** Integrate glob expansion in CLI commands
  - Wire glob.ts into CheckCommand
  - Wire glob.ts into FormatCommand
  - Handle empty expansion (no matches)

---

## Phase 3.4: Integration

- [ ] **T031** Wire @vscode-logging/logger to LSP server in modules/server/src/server.ts
  - Initialize @vscode-logging/logger on server start
  - Create logger with name "Gosu Language Server"
  - Configure from VSCode settings (gosu.logLevel)
  - Enable file logging with rotation
  - Ensure all formatter operations log through this logger

- [ ] **T032** Add log level configuration to VSCode settings in package.json
  - Add `gosu.logLevel` setting (error, warning, info, debug, trace)
  - Default to "info"
  - Document setting in package.json description
  - Add `gosu.logFile` setting for log file location (optional)

- [ ] **T033** Implement performance monitoring in formatter handlers
  - Track execution time for each format operation
  - Log WARN if >200ms, ERROR if >500ms
  - Include file path and duration in log metadata
  - Use @vscode-logging/logger in server, debug in CLI

- [ ] **T034** Add error handling for file access issues
  - Catch EACCES (permission denied) errors
  - Catch ENOENT (file not found) errors
  - Log errors with file path and reason
  - Skip file and continue batch operation

---

## Phase 3.5: Polish

- [ ] **T035** [P] Run quickstart validation steps 1-20 from quickstart.md
  - Execute all CLI scenarios with DEBUG=gosu:*
  - Verify VSCode integration with @vscode-logging/logger
  - Validate logging output in output channel and log files
  - Confirm hot-reload behavior
  - Test batch progress

- [ ] **T036** [P] Update README.md with new CLI flags
  - Document --check mode
  - Document --show-config flag
  - Document glob pattern support
  - Document exit codes
  - Add batch operation examples
  - Document DEBUG environment variable usage

- [ ] **T037** [P] Add JSDoc comments to public APIs
  - Document debug logger factory functions
  - Document CLI command interfaces
  - Document BatchProcessor API
  - Document ProgressTracker API
  - Document @vscode-logging/logger configuration

- [ ] **T038** Performance benchmark for batch operations
  - Measure sequential vs parallel execution
  - Verify <5 files = sequential
  - Verify ≥5 files = parallel (os.cpus().length)
  - Confirm performance improvement

- [ ] **T039** Verify all existing tests still pass
  - Run `npm test` in all modules
  - Verify no regressions in formatter core
  - Verify golden format tests pass
  - Verify existing integration tests pass

- [ ] **T040** Run manual smoke tests
  - Format single file in VSCode
  - Format on save
  - Check output channel logs and log files
  - Modify config and verify reload
  - Run CLI commands with DEBUG=gosu:*

---

## Dependencies

```
Setup (T001-T005) → Tests (T006-T015) → Implementation (T016-T030) → Integration (T031-T034) → Polish (T035-T040)

Within Implementation:
- T016 (debug logger) blocks T019-T021, T023, T025, T026, T029
- T017 (@vscode-logging/logger) blocks T024, T028, T031, T033
- T019-T021 (Commands) require T022 (CLI refactor)
- T023 (ConfigWatcher) blocks T024
- T025 (BatchProcessor) blocks T026, T027, T028
- T029 (Glob) blocks T030
```

## Parallel Execution Examples

```bash
# Phase 3.1 Setup (all parallel)
Task T001 & Task T002 & Task T003 & Task T004 & Task T005

# Phase 3.2 Contract Tests (all parallel)
Task T006 & Task T007 & Task T008 & Task T009

# Phase 3.2 Integration Tests (all parallel)
Task T010 & Task T011 & Task T012 & Task T013 & Task T014 & Task T015

# Phase 3.3 CLI Commands (parallel after T022)
Task T019 & Task T020 & Task T021

# Phase 3.5 Polish (some parallel)
Task T035 & Task T036 & Task T037
```

## Notes

- [P] tasks can run in parallel (different files, no dependencies)
- Verify tests fail before implementing (Red-Green-Refactor)
- Commit after each task or logical group
- Run `npm test` after each implementation task
- Use DEBUG=gosu:* to enable debug logging in CLI
- Check VSCode output channel for @vscode-logging/logger output

---

## Validation Checklist

- [x] All contracts have corresponding tests (T006-T009)
- [x] All integration scenarios have tests (T010-T015)
- [x] All tests come before implementation
- [x] Parallel tasks truly independent
- [x] Each task specifies exact file path
- [x] No task modifies same file as another [P] task
- [x] TDD order enforced (Phase 3.2 before 3.3)
- [x] Logging strategy clarified (debug for CLI, @vscode-logging/logger for VSCode)

---

**Task Generation Complete**: 40 tasks ready for execution following TDD discipline with industry-standard logging libraries
