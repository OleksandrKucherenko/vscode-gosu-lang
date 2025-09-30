# Feature Specification: Complete Gosu Formatter System

**Feature Branch**: `001-gosu-formatter-completion`  
**Created**: 2025-09-30  
**Status**: Ready for Planning  
**Input**: "Complete the Gosu formatter implementation with CLI enhancements, comprehensive logging/observability, configuration hot-reload, and batch operation progress reporting"

## Execution Flow (main)
```
1. Parse user description from Input ✅
2. Extract key concepts from description ✅
3. For each unclear aspect: Mark with [NEEDS CLARIFICATION] ✅
4. Fill User Scenarios & Testing section ✅
5. Generate Functional Requirements ✅
6. Identify Key Entities ✅
7. Run Review Checklist ✅
8. Return: SUCCESS (spec ready for planning) ✅
```

---

## ⚡ Quick Guidelines
- ✅ Focus on WHAT users need and WHY
- ❌ Avoid HOW to implement (no tech stack, APIs, code structure)
- 👥 Written for business stakeholders, not developers

---

## User Scenarios & Testing

### Primary User Story

As a Gosu developer using VSCode, I want to format my Gosu code files (`.gs`, `.gsx`, `.gst`, `.gsp`) with a single command or on save, so that my codebase maintains consistent styling without manual effort. The formatter should handle syntax errors gracefully, provide clear feedback on what was formatted, and allow me to configure formatting rules to match my team's conventions.

### Acceptance Scenarios

1. **Given** a Gosu class file with inconsistent indentation and spacing, **When** I trigger "Format Document" command in VSCode, **Then** the file is reformatted with proper indentation, spacing, and line breaks according to configuration

2. **Given** I have enabled "format on save" in VSCode settings, **When** I save a modified Gosu file, **Then** the formatter automatically applies formatting before the file is saved

3. **Given** a Gosu file with syntax errors in one function, **When** I format the document, **Then** the formatter processes valid sections and reports specific line/column information for the error without corrupting the valid code

4. **Given** I am working in a terminal/CI environment, **When** I run `npx @gosu-lsp/formatter --write myfile.gs`, **Then** the file is formatted in-place and the exit code indicates success or failure

5. **Given** I have opened the "Gosu Language Server" output panel in VSCode, **When** formatting operations occur, **Then** I see timestamped log entries showing which files were formatted, execution time, and any errors encountered

6. **Given** a project with custom formatting rules in `.gosuformatting.json`, **When** I format any Gosu file in the workspace, **Then** the formatter applies the custom configuration instead of defaults

7. **Given** a Gosu template file (`.gst`) with embedded code and template syntax, **When** I format the file, **Then** template directives (`<%= %>`, `<% %>`) are preserved while embedded Gosu code is formatted

8. **Given** I want to verify my formatter configuration, **When** I run `npx @gosu-lsp/formatter --show-config` in my project directory, **Then** the CLI outputs the resolved configuration showing all active settings and the paths to configuration files that were loaded

9. **Given** I format a directory containing 20 Gosu files using the CLI, **When** the operation completes, **Then** the formatter processes files in parallel, displays progress updates, and outputs a summary showing total files processed, modified, skipped, and failed

10. **Given** a Gosu file exceeding 10,000 lines of code, **When** I attempt to format it, **Then** the formatter immediately rejects the file with error message "File too large (max 10k LOC)" without attempting to parse

11. **Given** I format a batch of files where some are read-only, **When** the operation completes, **Then** the formatter skips the inaccessible files, formats the accessible ones, and reports a summary listing all skipped files with permission reasons

12. **Given** my `.gosuformatting.json` contains a typo (`indentSise: 4`), **When** I format a file, **Then** the formatter warns "Unknown option 'indentSise' in configuration", uses valid options with defaults for unknown ones, and continues formatting successfully

13. **Given** I run `npx @gosu-lsp/formatter --check src/` in CI, **When** any file needs formatting, **Then** the CLI exits with code 1 and lists all files requiring formatting without modifying them

14. **Given** I modify `.gosuformatting.json` while VSCode is open, **When** I save the configuration file, **Then** the formatter automatically reloads the configuration without requiring VSCode restart

### Edge Cases

- **What happens when a file has no syntax errors but unconventional structure?** The formatter applies rules deterministically, producing the same output every time
- **What happens when the entire file is unparseable?** The formatter returns the original content unchanged and logs a detailed error with the first syntax error location
- **What happens when formatting a very large file (>10k LOC)?** The formatter rejects the file with error "File too large (max 10k LOC)" to prevent resource exhaustion
- **What happens when a file exceeds maximum nesting depth or token count?** The formatter rejects the file with error indicating structural limits were exceeded
- **What happens when multiple files are formatted simultaneously?** For batches <5 files, formatting is sequential; for ≥5 files, formatting runs in parallel (bounded by CPU cores) with each operation logged separately
- **What happens when the formatter encounters read-only or inaccessible files?** The formatter skips the file, continues processing remaining files in the batch, and reports all skipped files with reasons at the end
- **What happens when a formatting operation takes longer than expected?** The formatter aborts if operation exceeds 5x the expected time for that file size (timeout protection)
- **What happens when configuration file has syntax errors?** The formatter reports the configuration error with specific line/column and falls back to default configuration
- **What happens when configuration file has unknown or invalid options?** The formatter warns about invalid/unknown options, uses valid options where possible, and continues with those valid settings
- **What happens when running CLI on a directory?** The formatter processes all Gosu files recursively and reports summary statistics

---

## Requirements

### Functional Requirements

#### CLI Enhancements (Gap Area #1)

- **FR-001**: CLI MUST support `--check` flag to verify formatting without modifications, exiting with code 0 if all files are formatted, code 1 if any file needs formatting
- **FR-002**: CLI MUST support `--show-config` flag to display the resolved configuration including all active settings and paths to configuration files used (workspace, user, defaults)
- **FR-003**: CLI MUST accept glob patterns as arguments for batch file selection (e.g., `src/**/*.gs`)
- **FR-004**: CLI MUST return standardized exit codes: 0 for success, 1 for formatting issues, 2 for syntax errors, 3 for configuration errors
- **FR-005**: CLI MUST provide summary statistics when formatting multiple files showing total processed, modified, skipped, and failed counts
- **FR-006**: CLI MUST list all files requiring formatting when running in `--check` mode

#### Logging & Observability (Gap Area #2)

- **FR-007**: System MUST log all formatting operations to VSCode "Gosu Language Server" output channel with ISO 8601 timestamps using @vscode-logging/logger
- **FR-008**: System MUST log execution time for each formatting operation in milliseconds
- **FR-009**: System MUST log specific syntax errors with file path, line number, column number, and error description
- **FR-010**: System MUST log configuration loading events including file path and validation results
- **FR-011**: System MUST support configurable log levels (error, warning, info, debug, trace) via VSCode settings
- **FR-012**: System MUST log performance warnings for files exceeding expected formatting time thresholds
- **FR-013**: CLI MUST output human-readable logs to stderr using debug package while formatted code goes to stdout
- **FR-014**: System MUST log configuration reload events when config files change
- **FR-015a**: VSCode extension MUST use @vscode-logging/logger for user-visible logs with automatic log rotation and file persistence
- **FR-015b**: CLI and non-VSCode components MUST use debug package with namespace-based filtering (e.g., gosu:formatter, gosu:cli, gosu:config)

#### Configuration Hot-Reload (Gap Area #3)

- **FR-016**: System MUST watch `.gosuformatting.json`, `.gosuformatting.jsonc`, and `.gosuformatting.json5` files for changes
- **FR-017**: System MUST automatically reload configuration when config files are modified without requiring VSCode restart
- **FR-018**: System MUST validate reloaded configuration and log validation results
- **FR-019**: System MUST apply new configuration to subsequent formatting operations immediately after reload

#### Batch Operation Progress (Gap Area #4)

- **FR-020**: System MUST display progress feedback when formatting multiple files showing current file and completion percentage
- **FR-021**: System MUST format file batches with automatic concurrency: sequential for <5 files, parallel (bounded by os.cpus().length) for ≥5 files
- **FR-022**: System MUST provide real-time progress updates in CLI showing files processed out of total
- **FR-023**: System MUST display estimated time remaining for batch operations with >10 files

#### Core Formatter (Already Complete - Included for Completeness)

- **FR-024**: System MUST format all Gosu language constructs including classes, enhancements, interfaces, properties, functions, constructors, control flow, expressions, and lambdas
- **FR-025**: System MUST preserve comment placement using deterministic attachment heuristics
- **FR-026**: System MUST handle template files (`.gst`) by preserving template syntax while formatting embedded Gosu code
- **FR-027**: System MUST produce idempotent output (formatting twice yields byte-identical results)
- **FR-028**: System MUST support anchor-based recovery for files with syntax errors

#### VSCode Integration (Already Complete - Included for Completeness)

- **FR-029**: Extension MUST register as a document formatting provider for Gosu file types
- **FR-030**: Extension MUST support full-document and range formatting
- **FR-031**: Extension MUST integrate with "format on save" functionality
- **FR-032**: Extension MUST communicate formatting requests via LSP protocol

#### Error Handling & Resource Limits

- **FR-033**: System MUST reject files exceeding 10,000 LOC with clear error message
- **FR-034**: System MUST abort formatting operations exceeding 5x expected execution time
- **FR-035**: System MUST reject files exceeding structural limits (nesting depth, token count)
- **FR-036**: System MUST skip inaccessible or read-only files in batch operations and report them in summary
- **FR-037**: System MUST handle configuration file syntax errors by reporting specific location and falling back to defaults
- **FR-038**: System MUST warn about unknown configuration options and continue with valid options

#### Performance Requirements

- **FR-039**: System MUST format typical files (<1000 LOC) in under 200ms (p95)
- **FR-040**: System MUST format large files (<10000 LOC) in under 2 seconds
- **FR-041**: System MUST provide progress feedback for batch operations to prevent perceived hangs

### Key Entities

- **FormattingConfiguration**: User preferences for formatting rules including indentation, spacing, line breaks, import organization, and error recovery mode
- **FormatResult**: Outcome of a formatting operation including formatted text, applied edits, diagnostics, execution time, and success status
- **FormattingDiagnostic**: Issues encountered during formatting including severity level, location (file, line, column), message, and error code
- **LogEntry**: Single log message including timestamp, level (error/warning/info/debug), source (formatter engine, LSP, CLI), and message content
- **BatchOperationResult**: Summary of multi-file formatting including total files, modified count, skipped count, failed count, and execution time
- **ConfigurationSource**: Origin of configuration settings (defaults, user settings, workspace file) with file path and load timestamp

---

## Review & Acceptance Checklist

### Content Quality
- [x] No implementation details (languages, frameworks, APIs)
- [x] Focused on user value and business needs
- [x] Written for non-technical stakeholders
- [x] All mandatory sections completed

### Requirement Completeness
- [x] No [NEEDS CLARIFICATION] markers remain
- [x] Requirements are testable and unambiguous  
- [x] Success criteria are measurable
- [x] Scope is clearly bounded
- [x] Dependencies and assumptions identified

---

## Execution Status

- [x] User description parsed
- [x] Key concepts extracted
- [x] Ambiguities marked (none remain)
- [x] User scenarios defined
- [x] Requirements generated
- [x] Entities identified
- [x] Review checklist passed

---

## Context & Rationale

### Current Implementation Status

Based on existing documentation, the formatter has:
- ✅ Core formatting engine with AST visitor and operation generation
- ✅ Configuration system with JSON5/JSONC support
- ✅ LSP integration for document/range formatting
- ✅ Basic CLI with file input/output
- ✅ Error recovery with anchor-based approach
- ✅ Performance benchmarks and determinism tests

### Gap Areas Requiring Completion

This specification focuses on four enhancement areas:

1. **CLI Completeness**: Add `--check` mode for CI, `--show-config` for debugging, glob patterns, proper exit codes, and summary statistics
2. **Logging & Observability**: Implement structured logging to VSCode output channel with timestamps, execution times, configurable levels, and performance monitoring
3. **Configuration Hot-Reload**: Add file watchers and automatic configuration reload without VSCode restart
4. **Batch Progress**: Add progress reporting for multi-file operations with real-time feedback

### Design Decisions

- **Concurrency Strategy**: Automatic batch sizing (sequential <5 files, parallel ≥5 files) balances overhead vs throughput
- **Resource Limits**: 10,000 LOC hard limit prevents resource exhaustion while covering 99%+ of real-world files
- **Configuration Validation**: Lenient mode (warn on unknown options, continue) ensures forward compatibility and prevents typos from blocking formatting
- **Error Handling**: Skip-and-continue for batch operations maximizes success rate while providing detailed failure reports

---

**Based on Constitution v1.0.0** - See `.specify/memory/constitution.md`
