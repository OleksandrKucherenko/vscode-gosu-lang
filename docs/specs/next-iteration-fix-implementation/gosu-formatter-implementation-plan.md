# Implementation Plan: Complete Gosu Language Formatter System

**Branch**: `next-iteration-fix-implementation` | **Date**: 2025-09-30 | **Spec**: [gosu-formatter-complete.md](./gosu-formatter-complete.md)  
**Input**: Feature specification from `docs/specs/next-iteration-fix-implementation/gosu-formatter-complete.md`

## Summary

Complete the Gosu Language Formatter system by implementing missing CLI features (--check, --show-config, glob patterns, exit codes), comprehensive logging to VSCode output channel, configuration hot-reload, and progress reporting for batch operations. The core formatter engine is complete; this plan focuses on tooling, observability, and user experience enhancements.

## Technical Context

**Language/Version**: TypeScript 5.x, Node.js 18+  
**Primary Dependencies**: ANTLR4 (parser), LSP (language server protocol), JSON5 (configuration)  
**Storage**: File-based configuration (`.gosuformatting.json{c,5}`)  
**Testing**: Vitest (unit/integration), golden format fixtures  
**Target Platform**: VSCode Extension + CLI (Node.js)  
**Project Type**: Monorepo with modules (formatter, server, client, parser, shared)  
**Performance Goals**: <200ms formatting for <1000 LOC files (p95), <2s for <10k LOC files  
**Constraints**: Must maintain LSP protocol compliance, idempotent output, no code corruption on errors  
**Scale/Scope**: Support all Gosu file types (.gs, .gsx, .gst, .gsp), handle 10k+ LOC files

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### ✅ I. LSP-First Architecture
- Formatting operations use LSP `textDocument/formatting` and `textDocument/rangeFormatting` methods
- CLI is separate from LSP server, formatter logic remains in `modules/formatter`
- No violations

### ✅ II. Test-Driven Development (NON-NEGOTIABLE)
- All new features require tests before implementation
- CLI flag tests, logging tests, configuration hot-reload tests required
- Golden format tests already exist and passing
- Plan includes explicit test creation tasks

### ✅ III. IntelliJ Feature Parity & Migration Focus
- Formatter supports IntelliJ-compatible configuration options
- Performance targets (<200ms) maintained
- No violations

### ✅ IV. Type Safety & Java Interoperability
- Not directly applicable (formatter is language-agnostic tool)
- No violations

### ✅ V. Performance & Responsiveness
- Performance requirements defined (FR-035, FR-036, FR-037, FR-038)
- Incremental formatting and progress feedback planned
- No violations

### ✅ VI. Formatter Determinism & Idempotence
- Core formatter already implements idempotent output
- Golden format tests validate determinism
- No violations

### ✅ VII. Incremental Development & Iteration
- Plan structured in testable milestones
- Each phase deliverable independently
- No violations

**Gate Status**: PASS - No constitutional violations

## Project Structure

### Documentation (this feature)
```
docs/specs/next-iteration-fix-implementation
├── gosu-formatter-complete.md              # Feature spec (this plan's input)
├── gosu-formatter-implementation-plan.md   # This file
├── research.md                             # Phase 0 output
├── data-model.md                           # Phase 1 output
├── quickstart.md                           # Phase 1 output
└── contracts/                              # Phase 1 output
    ├── cli-interface.md
    ├── logging-interface.md
    └── configuration-interface.md
```

### Source Code (repository root)
```
modules/
├── formatter/                  # Core formatting engine (COMPLETE)
│   ├── src/
│   │   ├── format-document.ts
│   │   ├── visitor.ts
│   │   ├── op-builder.ts
│   │   ├── doc-construction.ts
│   │   ├── renderer.ts
│   │   ├── config-loader.ts   # NEEDS ENHANCEMENT: hot-reload
│   │   └── cli.ts             # NEEDS ENHANCEMENT: new flags
│   └── __tests__/
│       ├── formatter.test.ts
│       ├── config.test.ts     # NEEDS NEW: hot-reload tests
│       └── cli.test.ts        # NEEDS NEW: flag tests
├── server/                     # LSP server (NEEDS ENHANCEMENT)
│   ├── src/
│   │   ├── server.ts          # NEEDS ENHANCEMENT: logging integration
│   │   └── logger.ts          # NEEDS NEW: structured logging
│   └── __tests__/
│       └── logging.test.ts    # NEEDS NEW
├── client/                     # VSCode client
│   └── src/
│       └── extension.ts       # Already integrated
└── shared/
    └── src/
        └── types.ts           # NEEDS ENHANCEMENT: log types

test/
└── fixtures/
    ├── cli/                   # NEEDS NEW: CLI test fixtures
    └── config/                # NEEDS NEW: config test files
```

**Structure Decision**: Monorepo structure maintained. Enhancements focused on `modules/formatter/src/cli.ts` for CLI features, new `modules/server/src/logger.ts` for logging system, and `modules/formatter/src/config-loader.ts` for hot-reload.

## Phase 0: Outline & Research

### Research Tasks

1. **CLI Best Practices Research**
   - Research standard CLI patterns for `--check` mode (Prettier, Black, gofmt)
   - Research configuration display formats (JSON, YAML, table)
   - Research glob pattern libraries (fast-glob, globby)
   - Research exit code conventions (0=success, 1=format needed, 2=syntax, 3=config)
   
2. **Logging Patterns Research**
   - Research VSCode output channel API best practices
   - Research structured logging formats for LSP servers
   - Research log level filtering patterns
   - Research performance monitoring approaches

3. **Configuration Hot-Reload Research**
   - Research file watcher libraries (chokidar, fs.watch)
   - Research configuration cache invalidation patterns
   - Research workspace configuration refresh in LSP

4. **Progress Reporting Research**
   - Research LSP progress API (`$/progress`)
   - Research batch operation patterns
   - Research async iterable patterns for file processing

### Consolidate Findings in research.md

**Output**: `docs/specs/next-iteration-fix-implementation/research.md` with decisions, rationales, and alternatives for each research area

## Phase 1: Design & Contracts

*Prerequisites: research.md complete*

### 1. Data Model (`data-model.md`)

**Key Entities:**

- **CLIOptions**: Command-line flags and arguments
  - Fields: files (string[]), write (boolean), check (boolean), showConfig (boolean), config (string), help (boolean), version (boolean)
  - Validation: mutually exclusive flags, file path validation
  
- **ConfigResolution**: Configuration resolution result
  - Fields: config (FormattingConfiguration), sources (ConfigSource[])
  - ConfigSource: { path: string, type: 'default' | 'user' | 'workspace' | 'project' }
  
- **LogEntry**: Structured log message
  - Fields: timestamp (Date), level (LogLevel), source (string), message (string), metadata (object)
  - LogLevel: 'error' | 'warning' | 'info' | 'debug'
  
- **FormatSummary**: Batch formatting results
  - Fields: totalFiles (number), formatted (number), unchanged (number), failed (number), duration (number)
  
- **FileWatcherState**: Configuration file monitoring
  - Fields: watchers (Map<string, FSWatcher>), debounceTimer (NodeJS.Timeout | null)

### 2. API Contracts (`contracts/`)

**CLI Interface Contract** (`contracts/cli-interface.md`):
```typescript
interface CLIFormatter {
  // Parse and validate command-line arguments
  parseArgs(args: string[]): CLIOptions;
  
  // Format files according to options
  formatFiles(options: CLIOptions): Promise<FormatResult[]>;
  
  // Display configuration
  showConfig(configPath?: string): Promise<ConfigResolution>;
  
  // Check formatting without modifying
  checkFiles(files: string[]): Promise<CheckResult>;
  
  // Return appropriate exit code
  getExitCode(results: FormatResult[]): number;
}
```

**Logging Interface Contract** (`contracts/logging-interface.md`):
```typescript
interface StructuredLogger {
  // Log at different levels
  error(message: string, metadata?: object): void;
  warn(message: string, metadata?: object): void;
  info(message: string, metadata?: object): void;
  debug(message: string, metadata?: object): void;
  
  // Performance tracking
  startTimer(operation: string): { end: () => void };
  
  // Configuration
  setLevel(level: LogLevel): void;
  getLevel(): LogLevel;
  
  // Output channel integration
  attachOutputChannel(channel: vscode.OutputChannel): void;
}
```

**Configuration Interface Contract** (`contracts/configuration-interface.md`):
```typescript
interface ConfigurationManager {
  // Load and resolve configuration
  loadConfig(workspaceRoot: string): Promise<ConfigResolution>;
  
  // Watch for changes
  watchConfig(workspaceRoot: string, callback: (config: ConfigResolution) => void): void;
  
  // Stop watching
  unwatchConfig(): void;
  
  // Validate configuration
  validateConfig(config: unknown): ValidationResult;
  
  // Display resolved config
  displayConfig(resolution: ConfigResolution): string;
}
```

### 3. Test Scenarios

**Contract Tests** (created before implementation):
- `__tests__/cli-contract.test.ts`: Test CLI argument parsing, flag combinations, exit codes
- `__tests__/logging-contract.test.ts`: Test log level filtering, output formatting, performance tracking
- `__tests__/config-contract.test.ts`: Test configuration resolution, validation, hot-reload

**Integration Tests**:
- CLI `--check` mode returns correct exit codes
- CLI `--show-config` displays resolved configuration with source paths
- Logging system writes to VSCode output channel
- Configuration hot-reload triggers formatter updates

### 4. Quickstart (`quickstart.md`)

**Quickstart Test Scenario**:
```bash
# 1. Test CLI check mode
npx @gosu-lsp/formatter --check test-workspace/*.gs
# Expected: Exit code 0 if formatted, 1 if changes needed

# 2. Test show-config
npx @gosu-lsp/formatter --show-config
# Expected: JSON output showing resolved config and source files

# 3. Test batch formatting with glob
npx @gosu-lsp/formatter --write 'src/**/*.gs'
# Expected: Summary statistics of formatted files

# 4. Test VSCode logging
# - Open VSCode
# - Open "Gosu Language Server" output channel
# - Format a file
# Expected: See timestamped log entry with duration

# 5. Test config hot-reload
# - Modify .gosuformatting.json
# - Format a file
# Expected: New settings applied without restart
```

## Phase 2: Task Planning Approach

**Task Generation Strategy**:
- Group tasks by feature area (CLI, Logging, Config, Progress)
- Each contract test task marked [P] for parallel execution
- Implementation tasks sequential within feature, parallel across features
- Integration tests after implementation complete

**Ordering Strategy**:
- Tests first (TDD)
- CLI enhancements (foundational, no dependencies)
- Logging system (used by CLI and server)
- Config hot-reload (depends on logging)
- Progress reporting (depends on logging)

**Estimated Output**: 25-30 tasks total
- CLI: 8 tasks (tests + implementation)
- Logging: 7 tasks (tests + implementation)
- Config: 5 tasks (tests + implementation)
- Progress: 5 tasks (tests + implementation)

**IMPORTANT**: This phase is executed by the /tasks command, NOT by /plan

## Phase 3+: Future Implementation

**Phase 3**: Task execution (/tasks command creates tasks.md)  
**Phase 4**: Implementation (execute tasks.md following TDD principles)  
**Phase 5**: Validation (integration tests, CLI smoke tests, VSCode manual testing)

## Complexity Tracking

*No constitutional violations - table not needed*

## Progress Tracking

**Phase Status**:
- [x] Phase 0: Research complete (/plan command)
- [x] Phase 1: Design complete (/plan command)
- [x] Phase 2: Task planning approach described (/plan command)
- [x] Phase 3: Tasks generated (/tasks command) - 45 tasks in tasks.md
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:
- [x] Initial Constitution Check: PASS
- [x] Post-Design Constitution Check: PASS
- [x] All NEEDS CLARIFICATION resolved
- [x] Complexity deviations documented (none)

---
*Based on Constitution v1.0.0 - See `.specify/memory/constitution.md`*
