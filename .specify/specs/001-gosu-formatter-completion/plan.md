# Implementation Plan: Complete Gosu Formatter System

**Branch**: `001-gosu-formatter-completion` | **Date**: 2025-09-30 | **Spec**: [spec.md](./spec.md)  
**Input**: Feature specification from `.specify/specs/001-gosu-formatter-completion/spec.md`

## Execution Flow (/plan command scope)
```
1. Load feature spec from Input path ✅
2. Fill Technical Context ✅
3. Fill Constitution Check section ✅
4. Evaluate Constitution Check section ✅
5. Execute Phase 0 → research.md (already exists) ✅
6. Execute Phase 1 → contracts, data-model.md, quickstart.md ✅
7. Re-evaluate Constitution Check section ✅
8. Plan Phase 2 → Describe task generation approach ✅
9. STOP - Ready for /tasks command ✅
```

---

## Summary

Complete the Gosu formatter implementation by adding four enhancement areas: (1) CLI completeness with `--check`, `--show-config`, glob patterns, and proper exit codes; (2) comprehensive logging/observability with structured logging to VSCode output channel; (3) configuration hot-reload using file watchers; (4) batch operation progress reporting with parallel execution support. This builds on the existing formatter core (configuration, AST visitor, operation generation, doc rendering, anchor-based error recovery) to deliver production-ready tooling for VSCode and CI environments.

---

## Technical Context

**Language/Version**: TypeScript 5.9.2, Node.js 20.19.3  
**Primary Dependencies**: 
- Existing: `vscode-languageserver` ^9.0.1, `json5` ^2.2.3, `jsonc-parser` ^3.3.1, `antlr4ng` ^3.0.16, `debug` ^4.4.3
- New: `commander` ^11.0.0 (CLI parsing), `fast-glob` ^3.3.0 (glob patterns), `chokidar` ^3.5.0 (file watching), `@vscode-logging/logger` ^2.0.0 (VSCode logging)

**Storage**: File-based configuration (`.gosuformatting.json{c,5}`), ephemeral runtime state  
**Testing**: Vitest ^3.2.4 with contract tests, integration tests, golden format tests  
**Target Platform**: VSCode Extension (Linux, macOS, Windows), CLI (Node.js 16+)  
**Performance Goals**: 
- <200ms p95 for files <1000 LOC
- <2s for files <10000 LOC
- Reject files >10000 LOC
- Parallel processing for batches ≥5 files

**Constraints**: 
- LSP-first architecture (Principle I)
- TDD discipline (Principle II)
- Formatter determinism and idempotence (Principle VI)
- Sub-100ms response for typical operations (Principle V)

**Scale/Scope**: 
- 4 gap areas (CLI, logging, hot-reload, progress)
- ~25-30 implementation tasks
- Builds on existing formatter core (already complete)

---

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Principle I: LSP-First Architecture ✅
- **Compliance**: All language services remain in `modules/server`, CLI in `modules/formatter`
- **Validation**: Logging infrastructure uses LSP output channel, progress uses LSP `$/progress` API
- **No Violations**: Client-server separation maintained

### Principle II: Test-Driven Development ✅
- **Compliance**: Contract tests for CLI flags, integration tests for hot-reload, golden tests for batch operations
- **Validation**: All tests written before implementation (Phase 3.2 before 3.3)
- **No Violations**: Strict TDD cycle enforced

### Principle III: IntelliJ Feature Parity ✅
- **Compliance**: Formatter enhancements support migration workflows (CI integration, config debugging)
- **Validation**: Performance targets maintained (<200ms completion)
- **No Violations**: No latency regressions introduced

### Principle IV: Type Safety & Java Interoperability ✅
- **Compliance**: Formatter operates on Gosu AST, preserves type information
- **Validation**: No impact on type resolution or Java interop
- **No Violations**: N/A for formatter tooling layer

### Principle V: Performance & Responsiveness ✅
- **Compliance**: Progress reporting prevents UI blocking, parallel execution optimizes throughput
- **Validation**: Performance benchmarks verify <200ms p95 for typical files
- **Risk**: File watching adds minimal overhead (<1ms per event)
- **Mitigation**: Debouncing (300ms) prevents excessive reloads

### Principle VI: Formatter Determinism & Idempotence ✅
- **Compliance**: No changes to core formatting logic, only tooling enhancements
- **Validation**: Existing golden format tests continue to pass
- **No Violations**: Determinism guaranteed by unchanged core

### Principle VII: Incremental Development ✅
- **Compliance**: 4 independent gap areas can be delivered incrementally
- **Validation**: Each area has clear acceptance criteria and tests
- **No Violations**: Feature flags not needed (additive changes only)

### Error Handling & Recovery ✅
- **Compliance**: CLI exit codes standardized, batch operations skip-and-continue
- **Validation**: Detailed error messages with file/line/column info
- **No Violations**: Graceful degradation on config errors

### Quality Gates ✅
- **Compliance**: All tests pass, TypeScript strict mode, ESLint clean
- **Validation**: New dependencies vetted (commander, fast-glob, chokidar are industry standard)
- **No Violations**: No console.log in production code (structured logging only)

**Constitution Check Result**: ✅ **PASS** - No violations, no deviations needed

---

## Project Structure

### Documentation (this feature)
```
.specify/specs/001-gosu-formatter-completion/
├── plan.md              # This file (/plan command output)
├── research.md          # Phase 0 output (reused from existing docs)
├── data-model.md        # Phase 1 output (reused from existing docs)
├── quickstart.md        # Phase 1 output (new)
├── contracts/           # Phase 1 output (new)
│   ├── cli-options.schema.json
│   ├── config-resolution.schema.json
│   ├── log-entry.schema.json
│   └── format-summary.schema.json
└── tasks.md             # Phase 2 output (/tasks command - NOT created by /plan)
```

### Source Code (repository root)
```
modules/
├── formatter/
│   ├── src/
│   │   ├── cli.ts                    # [ENHANCE] Add commander, glob, exit codes
│   │   ├── cli/                      # [NEW] CLI command handlers
│   │   │   ├── check.ts              # --check mode implementation
│   │   │   ├── show-config.ts        # --show-config implementation
│   │   │   └── format.ts             # Enhanced format with progress
│   │   ├── logger.ts                 # [NEW] Structured logging
│   │   ├── config-watcher.ts         # [NEW] File watching for hot-reload
│   │   ├── progress.ts               # [NEW] Progress tracking
│   │   └── batch.ts                  # [NEW] Batch formatting with concurrency
│   └── test/
│       ├── cli/                      # [NEW] CLI contract tests
│       ├── logger/                   # [NEW] Logging tests
│       ├── config-watcher/           # [NEW] Hot-reload tests
│       └── batch/                    # [NEW] Batch operation tests
│
└── server/
    └── src/
        ├── handlers/
        │   └── formatting.ts         # [ENHANCE] Integrate logger, progress
        └── logger-adapter.ts         # [NEW] LSP output channel adapter

test/
└── integration/
    ├── cli-integration.test.ts       # [NEW] End-to-end CLI tests
    ├── hot-reload.test.ts            # [NEW] Config reload tests
    └── batch-formatting.test.ts      # [NEW] Multi-file tests
```

**Structure Decision**: Monorepo with workspaces. Formatter module contains CLI and core logic. Server module integrates formatter via LSP. Tests organized by module with integration tests at root.

---

## Phase 0: Outline & Research

**Status**: ✅ Complete (reusing existing research.md)

Research document already exists at `docs/specs/next-iteration-fix-implementation/research.md` covering:

1. **CLI Best Practices**: Commander.js for parsing, Prettier exit code conventions, fast-glob for patterns
2. **Logging Patterns**: Structured logger with adapters, ISO 8601 timestamps, configurable levels
3. **Configuration Hot-Reload**: Chokidar for file watching, 300ms debouncing, LSP config notifications
4. **Progress Reporting**: LSP `$/progress` API, async iterator pattern, stderr/stdout separation
5. **Exit Code Conventions**: 0=success, 1=format needed, 2=syntax error, 3=config error, 130=interrupt
6. **Configuration Display**: JSON output with source attribution for `--show-config`

**Decisions Validated**:
- All technology choices align with constitutional principles
- Performance impact <100ms overhead
- No breaking changes (additive only)

**Output**: Existing `research.md` satisfies Phase 0 requirements

---

## Phase 1: Design & Contracts

*Prerequisites: research.md complete ✅*

### 1. Data Model (Reused)

**Status**: ✅ Complete (reusing existing data-model.md)

Data model document already exists at `docs/specs/next-iteration-fix-implementation/data-model.md` defining:

**Entities**:
- `CLIOptions`: Parsed command-line arguments with validation
- `ConfigResolution`: Configuration cascade with source attribution
- `LogEntry`: Structured log message with metadata
- `FormatSummary`: Batch operation results aggregation
- `FileWatcherState`: File system watcher state management
- `ProgressState`: Long-running operation progress tracking

**Relationships**: Entity relationship diagram with data flow for CLI execution, config reload, and batch formatting

**Validation**: Type safety via TypeScript, runtime validation via zod, boundary checks, error handling

**Output**: Existing `data-model.md` satisfies Phase 1 data modeling

### 2. API Contracts

**Generate JSON schemas** for key entities:

#### Contract 1: CLI Options Schema
**File**: `contracts/cli-options.schema.json`

**Purpose**: Validate parsed CLI arguments

**Schema**:
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "files": { "type": "array", "items": { "type": "string" }, "minItems": 0 },
    "write": { "type": "boolean", "default": false },
    "check": { "type": "boolean", "default": false },
    "showConfig": { "type": "boolean", "default": false },
    "config": { "type": "string" },
    "logLevel": { "enum": ["error", "warning", "info", "debug"] }
  },
  "oneOf": [
    { "required": ["showConfig"], "properties": { "showConfig": { "const": true } } },
    { "required": ["files"], "properties": { "files": { "minItems": 1 } } }
  ],
  "not": {
    "allOf": [
      { "properties": { "check": { "const": true } } },
      { "properties": { "write": { "const": true } } }
    ]
  }
}
```

#### Contract 2: Config Resolution Schema
**File**: `contracts/config-resolution.schema.json`

**Purpose**: Validate configuration cascade output

**Schema**:
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["config", "sources", "resolution"],
  "properties": {
    "config": { "$ref": "#/definitions/FormattingConfiguration" },
    "sources": {
      "type": "array",
      "items": { "$ref": "#/definitions/ConfigSource" },
      "minItems": 1
    },
    "resolution": { "enum": ["cascade", "explicit", "default"] },
    "errors": { "type": "array", "items": { "$ref": "#/definitions/ValidationError" } }
  },
  "definitions": {
    "ConfigSource": {
      "type": "object",
      "required": ["path", "type", "loadedAt", "values"],
      "properties": {
        "path": { "type": "string" },
        "type": { "enum": ["default", "user", "workspace", "project"] },
        "loadedAt": { "type": "string", "format": "date-time" },
        "values": { "type": "object" }
      }
    }
  }
}
```

#### Contract 3: Log Entry Schema
**File**: `contracts/log-entry.schema.json`

**Purpose**: Validate structured log messages

**Schema**:
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["timestamp", "level", "source", "message", "formatted"],
  "properties": {
    "timestamp": { "type": "string", "format": "date-time" },
    "level": { "enum": ["error", "warning", "info", "debug"] },
    "source": { "type": "string", "minLength": 1 },
    "message": { "type": "string", "minLength": 1 },
    "metadata": { "type": "object" },
    "formatted": { "type": "string", "minLength": 1 }
  }
}
```

#### Contract 4: Format Summary Schema
**File**: `contracts/format-summary.schema.json`

**Purpose**: Validate batch operation results

**Schema**:
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["totalFiles", "formatted", "unchanged", "failed", "skipped", "duration", "fileResults"],
  "properties": {
    "totalFiles": { "type": "integer", "minimum": 0 },
    "formatted": { "type": "integer", "minimum": 0 },
    "unchanged": { "type": "integer", "minimum": 0 },
    "failed": { "type": "integer", "minimum": 0 },
    "skipped": { "type": "integer", "minimum": 0 },
    "duration": { "type": "number", "minimum": 0 },
    "fileResults": {
      "type": "array",
      "items": { "$ref": "#/definitions/FormatFileResult" }
    }
  },
  "definitions": {
    "FormatFileResult": {
      "type": "object",
      "required": ["file", "status", "duration"],
      "properties": {
        "file": { "type": "string" },
        "status": { "enum": ["formatted", "unchanged", "failed", "skipped"] },
        "duration": { "type": "number", "minimum": 0 },
        "error": { "type": "string" }
      }
    }
  }
}
```

### 3. Contract Tests

**Generate failing contract tests** for each schema:

#### Test 1: CLI Options Validation
**File**: `modules/formatter/test/cli/options.contract.test.ts`

**Test Cases**:
- ✅ Valid: `{ files: ["test.gs"], write: true }`
- ✅ Valid: `{ showConfig: true }`
- ❌ Invalid: `{ check: true, write: true }` (mutually exclusive)
- ❌ Invalid: `{ files: [] }` (no files and no showConfig)
- ❌ Invalid: `{ logLevel: "trace" }` (invalid level)

#### Test 2: Config Resolution Validation
**File**: `modules/formatter/test/config/resolution.contract.test.ts`

**Test Cases**:
- ✅ Valid: Cascade with project + defaults
- ✅ Valid: Explicit config file
- ❌ Invalid: Empty sources array
- ❌ Invalid: Invalid resolution type
- ❌ Invalid: Missing required fields

#### Test 3: Log Entry Validation
**File**: `modules/formatter/test/logger/entry.contract.test.ts`

**Test Cases**:
- ✅ Valid: Complete log entry with metadata
- ✅ Valid: Minimal log entry (no metadata)
- ❌ Invalid: Missing timestamp
- ❌ Invalid: Invalid log level
- ❌ Invalid: Empty message

#### Test 4: Format Summary Validation
**File**: `modules/formatter/test/batch/summary.contract.test.ts`

**Test Cases**:
- ✅ Valid: Summary with all fields
- ✅ Valid: totalFiles === sum of categories
- ❌ Invalid: Negative counts
- ❌ Invalid: totalFiles mismatch
- ❌ Invalid: Missing fileResults

### 4. Integration Test Scenarios

**Extract from acceptance scenarios**:

#### Scenario 1: CLI Check Mode (FR-001, FR-006)
**File**: `test/integration/cli-check-mode.test.ts`

**Given**: Directory with 3 files (1 formatted, 2 unformatted)  
**When**: Run `gosu-format --check src/`  
**Then**: Exit code 1, lists 2 files needing formatting

#### Scenario 2: CLI Show Config (FR-002)
**File**: `test/integration/cli-show-config.test.ts`

**Given**: Project with `.gosuformatting.json`  
**When**: Run `gosu-format --show-config`  
**Then**: JSON output with config and sources array

#### Scenario 3: Config Hot-Reload (FR-015, FR-016)
**File**: `test/integration/config-hot-reload.test.ts`

**Given**: VSCode with formatter active  
**When**: Modify `.gosuformatting.json`  
**Then**: Config reloaded within 500ms, log entry emitted

#### Scenario 4: Batch Progress (FR-019, FR-021)
**File**: `test/integration/batch-progress.test.ts`

**Given**: 10 files to format  
**When**: Run batch format  
**Then**: Progress updates emitted, summary logged

### 5. Quickstart Guide

**File**: `quickstart.md`

**Purpose**: Validate feature works end-to-end

**Steps**:
1. Install dependencies: `npm install`
2. Build formatter: `npm run build`
3. Format single file: `npx gosu-format --write test.gs`
4. Check formatting: `npx gosu-format --check src/`
5. Show config: `npx gosu-format --show-config`
6. Format directory: `npx gosu-format --write src/**/*.gs`
7. Verify VSCode integration: Open file, trigger format, check output channel
8. Test hot-reload: Modify `.gosuformatting.json`, verify reload log

**Expected Outcome**: All steps complete successfully, logs visible in output channel

### 6. Update Agent Context

**Action**: Run `.specify/scripts/bash/update-agent-context.sh windsurf`

**Updates**:
- Add commander, fast-glob, chokidar to active technologies
- Add CLI commands section with new flags
- Add recent change: "Formatter completion - CLI, logging, hot-reload, progress"
- Keep under 150 lines

**Output**: Updated `.windsurf/WINDSURF.md` (or equivalent agent file)

**Output Summary**: 
- ✅ data-model.md (reused)
- ✅ contracts/*.schema.json (4 files)
- ✅ Contract tests (4 files, failing)
- ✅ Integration tests (4 files, failing)
- ✅ quickstart.md
- ✅ Agent context updated

---

## Phase 2: Task Planning Approach

*This section describes what the /tasks command will do - DO NOT execute during /plan*

**Task Generation Strategy**:

1. **Load Design Artifacts**:
   - contracts/*.schema.json → contract test tasks
   - data-model.md entities → implementation tasks
   - quickstart.md steps → validation tasks

2. **Generate Task Categories**:
   - **Setup**: Add dependencies (commander, fast-glob, chokidar)
   - **Tests First (TDD)**: Contract tests, integration tests (MUST fail before implementation)
   - **Core Implementation**: Logger, CLI handlers, config watcher, batch processor, progress tracker
   - **Integration**: Wire logger to LSP, integrate progress API, connect config watcher
   - **Polish**: Update documentation, run quickstart, performance validation

3. **Ordering Strategy**:
   - TDD order: Tests before implementation
   - Dependency order: Logger → CLI → Config Watcher → Batch → Progress
   - Mark [P] for parallel execution:
     - Contract tests (different files)
     - CLI command handlers (check, show-config, format)
     - Integration tests (independent scenarios)

4. **Estimated Task Count**: 28-32 tasks
   - Setup: 2 tasks
   - Tests: 8 tasks (contract + integration)
   - Implementation: 12-15 tasks
   - Integration: 4 tasks
   - Polish: 4 tasks

**Task Template Example**:
```
T001 [P] Add commander, fast-glob, chokidar to modules/formatter/package.json
T002 [P] Contract test for CLIOptions in modules/formatter/test/cli/options.contract.test.ts
T003 [P] Contract test for LogEntry in modules/formatter/test/logger/entry.contract.test.ts
...
T010 Implement StructuredLogger in modules/formatter/src/logger.ts
T011 [P] Implement CheckCommand in modules/formatter/src/cli/check.ts
T012 [P] Implement ShowConfigCommand in modules/formatter/src/cli/show-config.ts
...
```

**IMPORTANT**: This phase is executed by the /tasks command, NOT by /plan

---

## Phase 3+: Future Implementation

*These phases are beyond the scope of the /plan command*

**Phase 3**: Task execution (/tasks command creates tasks.md)  
**Phase 4**: Implementation (execute tasks.md following TDD discipline)  
**Phase 5**: Validation (run tests, execute quickstart.md, performance benchmarks)

---

## Complexity Tracking

*Fill ONLY if Constitution Check has violations that must be justified*

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |

**No constitutional violations** - all enhancements align with existing principles.

---

## Progress Tracking

*This checklist is updated during execution flow*

**Phase Status**:
- [x] Phase 0: Research complete (reused existing research.md)
- [x] Phase 1: Design complete (contracts, data-model, quickstart)
- [x] Phase 2: Task planning approach described
- [ ] Phase 3: Tasks generated (/tasks command)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:
- [x] Initial Constitution Check: PASS
- [x] Post-Design Constitution Check: PASS
- [x] All NEEDS CLARIFICATION resolved (none in spec)
- [x] Complexity deviations documented (none)

---

*Based on Constitution v1.0.0 - See `.specify/memory/constitution.md`*
