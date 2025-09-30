# Tasks: Complete Gosu Language Formatter System

**Input**: Design documents from `docs/specs/next-iteration-fix-implementation/`  
**Prerequisites**: gosu-formatter-implementation-plan.md, research.md, data-model.md, contracts/, quickstart.md

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions
- Monorepo structure: `modules/formatter/`, `modules/server/`, `modules/client/`
- Tests co-located: `modules/*/src/__tests__/`
- Fixtures: `test/fixtures/`

---

## Phase 3.1: Setup

- [ ] **T001** Add new NPM dependencies to package.json
  - File: `package.json`
  - Add: `commander@^11.0.0`, `fast-glob@^3.3.0`, `chokidar@^3.5.0`
  - Run: `npm install`
  - Verify: No breaking changes to existing dependencies

- [ ] **T002** [P] Create CLI test fixtures directory
  - File: `test/fixtures/cli/`
  - Create subdirectories: `formatted/`, `unformatted/`, `syntax-errors/`, `configs/`
  - Add sample .gs files for each category
  - Include .gosuformatting.json examples

- [ ] **T003** [P] Create test workspace for manual testing
  - File: `test-workspace/formatter-test/`
  - Include: Multiple .gs files, custom config, subdirectories
  - Purpose: Manual quickstart validation

---

## Phase 3.2: Tests First (TDD) ⚠️ MUST COMPLETE BEFORE 3.3

**CRITICAL: These tests MUST be written and MUST FAIL before ANY implementation**

### Contract Tests (Parallel - Different Files)

- [ ] **T004** [P] Contract test for CLI argument parsing
  - File: `modules/formatter/src/__tests__/cli-contract.test.ts`
  - Test scenarios:
    * Valid flags: --write, --check, --show-config
    * Mutually exclusive: --write + --check throws error
    * File path validation
    * Exit code determination
  - Import: CLIFormatter interface from contracts/cli-interface.md
  - Assert: All parseArgs() edge cases covered

- [ ] **T005** [P] Contract test for CLI formatFiles operation
  - File: `modules/formatter/src/__tests__/cli-format.test.ts`
  - Test scenarios:
    * --write modifies files on disk
    * Default mode outputs to stdout
    * --check returns correct exit codes
    * Glob pattern expansion
  - Use fixtures from test/fixtures/cli/
  - Assert: File modification behavior correct

- [ ] **T006** [P] Contract test for CLI showConfig operation
  - File: `modules/formatter/src/__tests__/cli-show-config.test.ts`
  - Test scenarios:
    * JSON output structure valid
    * Source attribution correct
    * Cascade resolution displayed
    * Exit code 0 on success
  - Mock config files in fixtures
  - Assert: Output matches ConfigResolution schema

- [ ] **T007** [P] Contract test for StructuredLogger
  - File: `modules/server/src/__tests__/logger-contract.test.ts`
  - Test scenarios:
    * Log level filtering (debug filtered when level=info)
    * Metadata included in output
    * Timer API tracks duration
    * Multiple output channels work
  - Mock OutputChannel and stderr
  - Assert: All logging interface methods work

- [ ] **T008** [P] Contract test for ConfigurationManager
  - File: `modules/formatter/src/__tests__/config-contract.test.ts`
  - Test scenarios:
    * Cascade resolution order correct
    * Explicit config path overrides cascade
    * Validation catches invalid values
    * File watcher triggers reload
  - Use fixtures from test/fixtures/cli/configs/
  - Assert: All configuration interface methods work

### Integration Tests (Parallel - Different Files)

- [ ] **T009** [P] Integration test: CLI check mode end-to-end
  - File: `modules/formatter/src/__tests__/cli-check-integration.test.ts`
  - Scenario from quickstart.md #1
  - Test: Run CLI with --check on unformatted file
  - Assert: Exit code 1, file unchanged, correct message
  - Use real CLI entry point, not mocks

- [ ] **T010** [P] Integration test: CLI show-config end-to-end
  - File: `modules/formatter/src/__tests__/cli-show-config-integration.test.ts`
  - Scenario from quickstart.md #2
  - Test: Run --show-config with custom .gosuformatting.json
  - Assert: JSON output valid, sources array correct
  - Use real config loader

- [ ] **T011** [P] Integration test: Glob pattern batch formatting
  - File: `modules/formatter/src/__tests__/cli-glob-integration.test.ts`
  - Scenario from quickstart.md #3
  - Test: Format multiple files via glob pattern
  - Assert: All matching files formatted, summary correct
  - Use real file system operations

- [ ] **T012** [P] Integration test: VSCode output channel logging
  - File: `modules/server/src/__tests__/logging-vscode-integration.test.ts`
  - Scenario from quickstart.md #4
  - Test: Format operation logs to mock OutputChannel
  - Assert: Timestamps, log levels, duration all present
  - Mock vscode.OutputChannel API

- [ ] **T013** [P] Integration test: Configuration hot-reload
  - File: `modules/formatter/src/__tests__/config-hotreload-integration.test.ts`
  - Scenario from quickstart.md #5
  - Test: Modify config file, verify reload triggered
  - Assert: Callback invoked after debounce, new config applied
  - Use real file watcher (chokidar)

- [ ] **T014** [P] Integration test: Exit code scenarios
  - File: `modules/formatter/src/__tests__/cli-exitcodes-integration.test.ts`
  - Scenario from quickstart.md #6
  - Test: All exit code scenarios (0, 1, 2, 3)
  - Assert: Correct code for each scenario
  - Use real CLI with different fixture files

- [ ] **T015** [P] Integration test: Performance logging thresholds
  - File: `modules/formatter/src/__tests__/logging-performance-integration.test.ts`
  - Scenario from quickstart.md #7
  - Test: Format files with varying durations
  - Assert: WARN logged for >200ms, INFO for <200ms
  - Artificially slow formatter for testing

---

## Phase 3.3: Core Implementation (ONLY after tests are failing)

### Data Model Implementations (Parallel - Different Files)

- [ ] **T016** [P] Implement CLIOptions type and validation
  - File: `modules/formatter/src/types/cli-options.ts`
  - Based on: data-model.md CLIOptions entity
  - Export: CLIOptions interface, validation function
  - Validation: Mutual exclusion, file path checks
  - Tests already exist: T004

- [ ] **T017** [P] Implement ConfigResolution type
  - File: `modules/formatter/src/types/config-resolution.ts`
  - Based on: data-model.md ConfigResolution entity
  - Export: ConfigResolution, ConfigSource interfaces
  - Include: Source attribution, cascade metadata
  - Tests already exist: T006, T008

- [ ] **T018** [P] Implement LogEntry type and formatter
  - File: `modules/server/src/types/log-entry.ts`
  - Based on: data-model.md LogEntry entity
  - Export: LogEntry interface, LogLevel enum, LogFormatter class
  - Format methods: Text and JSON output
  - Tests already exist: T007

- [ ] **T019** [P] Implement FormatSummary type
  - File: `modules/formatter/src/types/format-summary.ts`
  - Based on: data-model.md FormatSummary entity
  - Export: FormatSummary, FormatFileResult interfaces
  - Validation: totalFiles === sum of status counts
  - Tests already exist: T005, T011

- [ ] **T020** [P] Implement FileWatcherState type
  - File: `modules/formatter/src/types/file-watcher-state.ts`
  - Based on: data-model.md FileWatcherState entity
  - Export: FileWatcherState interface, lifecycle methods
  - Include: Debounce timer management
  - Tests already exist: T008, T013

- [ ] **T021** [P] Implement ProgressState type
  - File: `modules/formatter/src/types/progress-state.ts`
  - Based on: data-model.md ProgressState entity
  - Export: ProgressState interface
  - Include: Cancellation token support
  - Will be used by future progress implementation

### CLI Implementation (Sequential - Same Module)

- [ ] **T022** Enhance CLI with Commander.js argument parsing
  - File: `modules/formatter/src/cli.ts`
  - Based on: research.md decision, contracts/cli-interface.md
  - Implement: parseArgs() using commander
  - Add flags: --write, --check, --show-config, --config, --help, --version
  - Validation: Mutual exclusion, file requirements
  - Tests already exist: T004, T009, T010, T014

- [ ] **T023** Implement CLI showConfig command
  - File: `modules/formatter/src/cli.ts` (continue from T022)
  - Based on: contracts/cli-interface.md showConfig()
  - Load config using ConfigurationManager
  - Output: JSON format to stdout
  - Display: Resolved config + source attribution
  - Tests already exist: T006, T010

- [ ] **T024** Implement CLI checkFiles command
  - File: `modules/formatter/src/cli.ts` (continue from T023)
  - Based on: contracts/cli-interface.md checkFiles()
  - Check formatting without modification
  - Return: CheckResult with file categorization
  - Exit code: 1 if changes needed, 0 if formatted
  - Tests already exist: T005, T009, T014

- [ ] **T025** Add glob pattern support to CLI
  - File: `modules/formatter/src/cli.ts` (continue from T024)
  - Based on: research.md decision (fast-glob)
  - Use fast-glob to expand patterns
  - Handle: *, **, ?, [abc] patterns
  - Respect: .gitignore automatically
  - Tests already exist: T011

- [ ] **T026** Implement CLI exit code logic
  - File: `modules/formatter/src/cli.ts` (continue from T025)
  - Based on: contracts/cli-interface.md getExitCode()
  - Map results to exit codes: 0/1/2/3/130
  - Handle: Success, format needed, syntax error, config error, interrupt
  - Tests already exist: T014

### Logging Implementation (Sequential - Same Module)

- [ ] **T027** Create StructuredLogger class
  - File: `modules/server/src/logger.ts`
  - Based on: contracts/logging-interface.md
  - Implement: error(), warn(), info(), debug() methods
  - Log level filtering: Hierarchy enforcement
  - Output: Formatted text with timestamps
  - Tests already exist: T007, T012

- [ ] **T028** Add performance timer API to logger
  - File: `modules/server/src/logger.ts` (continue from T027)
  - Based on: contracts/logging-interface.md startTimer()
  - Return: Object with end() method
  - Log: Operation name + duration in ms
  - Threshold checking: WARN if >200ms
  - Tests already exist: T015

- [ ] **T029** Add VSCode OutputChannel adapter to logger
  - File: `modules/server/src/logger.ts` (continue from T028)
  - Based on: contracts/logging-interface.md attachOutputChannel()
  - Accept: vscode.OutputChannel instance
  - Write: Formatted logs to channel
  - Async: Non-blocking writes with buffering
  - Tests already exist: T012

- [ ] **T030** Add stderr adapter to logger for CLI
  - File: `modules/server/src/logger.ts` (continue from T029)
  - Based on: contracts/logging-interface.md attachStderr()
  - Write: Logs to process.stderr
  - Separate: Progress messages from formatted output
  - Format: Same as OutputChannel
  - Tests already exist: T007

### Configuration Implementation (Sequential - Same Module)

- [ ] **T031** Enhance ConfigurationManager with hot-reload
  - File: `modules/formatter/src/config-loader.ts`
  - Based on: contracts/configuration-interface.md watchConfig()
  - Use: chokidar for file watching
  - Watch: .gosuformatting.json{,c,5} files
  - Debounce: 300ms delay for batch changes
  - Tests already exist: T008, T013

- [ ] **T032** Implement configuration display formatting
  - File: `modules/formatter/src/config-loader.ts` (continue from T031)
  - Based on: contracts/configuration-interface.md displayConfig()
  - Formats: JSON (default) and table (future)
  - Include: Source attribution in output
  - Show: Which settings from which files
  - Tests already exist: T006, T010

- [ ] **T033** Add configuration validation with detailed errors
  - File: `modules/formatter/src/config-loader.ts` (continue from T032)
  - Based on: contracts/configuration-interface.md validateConfig()
  - Validate: All field constraints from data-model.md
  - Errors: Specific messages with field paths
  - Warnings: Deprecated options
  - Tests already exist: T008

---

## Phase 3.4: Integration

- [ ] **T034** Integrate StructuredLogger into LSP server
  - File: `modules/server/src/server.ts`
  - Import: StructuredLogger from logger.ts
  - Create: Logger instance on server startup
  - Attach: VSCode OutputChannel "Gosu Language Server"
  - Log: All formatting operations with duration
  - Configuration: Respect gosu.logLevel setting

- [ ] **T035** Integrate logger into formatter module
  - File: `modules/formatter/src/format-document.ts`
  - Import: StructuredLogger instance from server
  - Add: Timer wrapping for format operations
  - Log: File path, duration, status on each format
  - Error logging: Syntax errors with line/column
  - Performance: Log WARN if >200ms

- [ ] **T036** Wire CLI commands to formatter and logger
  - File: `modules/formatter/src/cli.ts`
  - Connect: CLI commands to formatter operations
  - Logging: All operations to stderr
  - Progress: Summary statistics at end
  - Exit codes: Based on results

- [ ] **T037** Connect file watcher to LSP configuration update
  - File: `modules/server/src/server.ts`
  - Import: ConfigurationManager with watcher
  - Setup: Watcher on server initialization
  - Callback: Broadcast workspace/didChangeConfiguration
  - Cleanup: Dispose watcher on server shutdown

---

## Phase 3.5: Polish

- [ ] **T038** [P] Add unit tests for CLI edge cases
  - File: `modules/formatter/src/__tests__/cli-edge-cases.test.ts`
  - Test: Empty file list, invalid paths, permission errors
  - Test: Signal handling (SIGINT, SIGTERM)
  - Test: Large file batch (100+ files)
  - Coverage: Aim for 90%+ on cli.ts

- [ ] **T039** [P] Add unit tests for logger edge cases
  - File: `modules/server/src/__tests__/logger-edge-cases.test.ts`
  - Test: Buffer overflow (>1000 entries)
  - Test: Detached output channel behavior
  - Test: Concurrent logging from multiple threads
  - Coverage: Aim for 90%+ on logger.ts

- [ ] **T040** [P] Add unit tests for config edge cases
  - File: `modules/formatter/src/__tests__/config-edge-cases.test.ts`
  - Test: Circular config references
  - Test: Config file deleted during watch
  - Test: Malformed JSON recovery
  - Coverage: Aim for 90%+ on config-loader.ts

- [ ] **T041** Performance benchmark for batch formatting
  - File: `modules/formatter/src/__tests__/performance.bench.ts`
  - Use: Vitest benchmark API
  - Test: 1 file, 10 files, 100 files
  - Assert: <200ms avg for single file, linear scaling
  - Report: Comparison with baseline

- [ ] **T042** [P] Update CLI documentation
  - File: `docs/cli-usage.md`
  - Document: All flags (--write, --check, --show-config, --config)
  - Examples: Common use cases from quickstart.md
  - Exit codes: Table of codes and meanings
  - Troubleshooting: Common issues

- [ ] **T043** [P] Update logging documentation
  - File: `docs/logging.md`
  - Document: Log levels and when to use each
  - Configuration: gosu.logLevel setting
  - Output channel: How to view logs in VSCode
  - Performance: How to interpret timing logs

- [ ] **T044** [P] Update configuration documentation
  - File: `docs/configuration.md`
  - Document: All config options
  - Hot-reload: Behavior and debounce timing
  - Cascade: Precedence order explanation
  - Display: Using --show-config for debugging

- [ ] **T045** Run complete quickstart validation
  - File: `docs/specs/next-iteration-fix-implementation/quickstart.md`
  - Execute: All 8 manual test scenarios
  - Verify: Success criteria met for each
  - Document: Any deviations or issues
  - Sign-off: Feature complete checklist

---

## Dependencies

### Critical Path (Sequential)
```
T001 (setup) → T002,T003 (fixtures)
→ T004-T015 (tests, all parallel)
→ T016-T021 (types, all parallel)
→ T022-T026 (CLI, sequential)
→ T027-T030 (logging, sequential)
→ T031-T033 (config, sequential)
→ T034-T037 (integration, sequential)
→ T038-T045 (polish, mostly parallel)
```

### Detailed Dependencies
- **T004-T015** (tests) must complete before **T016-T033** (implementation)
- **T016-T021** (types) have no dependencies on each other [P]
- **T022-T026** (CLI) must be sequential (same file)
- **T027-T030** (logging) must be sequential (same file)
- **T031-T033** (config) must be sequential (same file)
- **T034** (server integration) requires T027-T030 complete
- **T035** (formatter integration) requires T027-T030 complete
- **T036** (CLI wiring) requires T022-T026 and T027-T030 complete
- **T037** (watcher integration) requires T031-T033 complete
- **T038-T044** (polish) can run in parallel [P]
- **T045** (quickstart) must be last

---

## Parallel Execution Examples

### Batch 1: Contract Tests (After Setup)
```bash
# All contract tests can run simultaneously
Task: "Contract test for CLI argument parsing in modules/formatter/src/__tests__/cli-contract.test.ts"
Task: "Contract test for CLI formatFiles in modules/formatter/src/__tests__/cli-format.test.ts"
Task: "Contract test for CLI showConfig in modules/formatter/src/__tests__/cli-show-config.test.ts"
Task: "Contract test for StructuredLogger in modules/server/src/__tests__/logger-contract.test.ts"
Task: "Contract test for ConfigurationManager in modules/formatter/src/__tests__/config-contract.test.ts"
```

### Batch 2: Integration Tests
```bash
# All integration tests can run simultaneously
Task: "Integration test: CLI check mode in modules/formatter/src/__tests__/cli-check-integration.test.ts"
Task: "Integration test: CLI show-config in modules/formatter/src/__tests__/cli-show-config-integration.test.ts"
Task: "Integration test: Glob patterns in modules/formatter/src/__tests__/cli-glob-integration.test.ts"
Task: "Integration test: VSCode logging in modules/server/src/__tests__/logging-vscode-integration.test.ts"
Task: "Integration test: Config hot-reload in modules/formatter/src/__tests__/config-hotreload-integration.test.ts"
Task: "Integration test: Exit codes in modules/formatter/src/__tests__/cli-exitcodes-integration.test.ts"
Task: "Integration test: Performance logging in modules/server/src/__tests__/logging-performance-integration.test.ts"
```

### Batch 3: Type Implementations
```bash
# All type definitions can be created simultaneously
Task: "Implement CLIOptions type in modules/formatter/src/types/cli-options.ts"
Task: "Implement ConfigResolution type in modules/formatter/src/types/config-resolution.ts"
Task: "Implement LogEntry type in modules/server/src/types/log-entry.ts"
Task: "Implement FormatSummary type in modules/formatter/src/types/format-summary.ts"
Task: "Implement FileWatcherState type in modules/formatter/src/types/file-watcher-state.ts"
Task: "Implement ProgressState type in modules/formatter/src/types/progress-state.ts"
```

### Batch 4: Polish Tasks
```bash
# Documentation and edge case tests can run simultaneously
Task: "Unit tests for CLI edge cases in modules/formatter/src/__tests__/cli-edge-cases.test.ts"
Task: "Unit tests for logger edge cases in modules/server/src/__tests__/logger-edge-cases.test.ts"
Task: "Unit tests for config edge cases in modules/formatter/src/__tests__/config-edge-cases.test.ts"
Task: "Update CLI documentation in docs/cli-usage.md"
Task: "Update logging documentation in docs/logging.md"
Task: "Update configuration documentation in docs/configuration.md"
```

---

## Notes

- **TDD Discipline**: Tests (T004-T015) MUST fail before implementation (T016-T037) begins
- **[P] Marking**: Only tasks in different files can be parallel
- **Sequential**: CLI (T022-T026), logging (T027-T030), config (T031-T033) are sequential within their modules
- **Commit Strategy**: Commit after each task completion
- **Verification**: Run `npm test` after each implementation task
- **Quickstart**: Final validation (T045) requires all features complete

---

## Validation Checklist

**Pre-Implementation** (After Phase 3.2):
- [x] All 3 contracts have corresponding tests (T004-T008)
- [x] All 6 entities have type implementation tasks (T016-T021)
- [x] All 8 quickstart scenarios have integration tests (T009-T015)
- [x] All tests come before implementation
- [x] Parallel tasks [P] are truly independent (different files)
- [x] Each task specifies exact file path
- [x] No task modifies same file as another [P] task

**Post-Implementation** (After Phase 3.5):
- [ ] All tests pass (`npm test`)
- [ ] Quickstart scenarios validated (T045)
- [ ] Documentation complete (T042-T044)
- [ ] Performance benchmarks passing (T041)
- [ ] No regressions in existing formatter functionality

---

**Total Tasks**: 45  
**Parallel Tasks**: 27 marked [P]  
**Sequential Tasks**: 18 (dependency-based)  
**Estimated Completion**: 3-5 days with TDD discipline

**Ready for Execution**: ✅ All tasks specific, testable, and properly ordered
