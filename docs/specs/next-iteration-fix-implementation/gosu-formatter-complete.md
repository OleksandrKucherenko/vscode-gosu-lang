# Feature Specification: Complete Gosu Language Formatter System

**Feature Branch**: `next-iteration-fix-implementation` (current branch)  
**Created**: 2025-09-30  
**Last Clarified**: 2025-09-30  
**Status**: Ready for Planning  
**Input**: "We are implementing Gosu Language formatter - need complete spec covering: (1) Gosu code formatter, (2) VSCode extension integration, (3) CLI interface, (4) Logging/observability in VSCode output console"

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

8. **Given** I want to verify my formatter configuration, **When** I run `npx @gosu-lsp/formatter --show-config` in my project directory, **Then** the CLI outputs the resolved configuration showing all active settings and the paths to configuration files that were loaded (e.g., workspace `.gosuformatting.json`, user settings, defaults)

9. **Given** I format a directory containing 20 Gosu files using the CLI, **When** the operation completes, **Then** the formatter processes files in parallel (since ≥5 files), displays progress updates, and outputs a summary showing total files processed, modified, skipped, and failed

10. **Given** a Gosu file exceeding 10,000 lines of code, **When** I attempt to format it, **Then** the formatter immediately rejects the file with error message "File too large (max 10k LOC)" without attempting to parse

11. **Given** I format a batch of files where some are read-only, **When** the operation completes, **Then** the formatter skips the inaccessible files, formats the accessible ones, and reports a summary listing all skipped files with permission reasons

12. **Given** my `.gosuformatting.json` contains a typo (`indentSise: 4`), **When** I format a file, **Then** the formatter warns "Unknown option 'indentSise' in configuration", uses valid options with defaults for unknown ones, and continues formatting successfully

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

## Clarifications & Design Decisions

The following ambiguities were identified and resolved during specification refinement:

### Concurrency & Scalability
- **Decision**: Use automatic batch sizing—sequential formatting for <5 files, parallel (CPU-bounded) for ≥5 files (FR-042)
- **Rationale**: Balances overhead vs throughput; prevents resource contention on small batches

### File Size & Resource Limits
- **Decision**: Hard limit of 10,000 LOC per file; reject larger files immediately (FR-037)
- **Rationale**: Prevents resource exhaustion; aligns with performance SLO (FR-036 requires <2s for 10k LOC)

### Malicious Input Protection
- **Decision**: Implement both timeout-based abort (5x expected time) and structural limits (nesting depth, token count) (FR-038, FR-039)
- **Rationale**: Defense in depth—timeout catches algorithmic complexity attacks, structural limits catch crafted pathological inputs

### File Permission Handling
- **Decision**: Skip inaccessible/read-only files in batch operations, continue processing, report summary at end (FR-034)
- **Rationale**: Maximize batch operation success; users can review skipped files and address permission issues separately

### Configuration Validation Strictness
- **Decision**: Lenient validation—warn about unknown/invalid options, use valid options, continue (FR-028)
- **Rationale**: Forward compatibility; typos in config shouldn't block formatting; explicit warnings guide users to fix issues

---

## Requirements

### Functional Requirements

#### Core Formatting Engine

- **FR-001**: System MUST format all Gosu language constructs including classes, enhancements, interfaces, properties, functions, constructors, control flow statements, expressions, and lambdas
- **FR-002**: System MUST preserve comment placement using deterministic attachment heuristics (leading, trailing, own-line)
- **FR-003**: System MUST handle template files (`.gst`) by preserving template syntax (`<%= %>`, `<% %>`, `<%@ %>`) while formatting embedded Gosu code
- **FR-004**: System MUST produce idempotent output (formatting twice yields byte-identical results)
- **FR-005**: System MUST support anchor-based recovery for files with syntax errors, formatting valid sections while marking error regions

#### VSCode Extension Integration

- **FR-006**: Extension MUST register as a document formatting provider for Gosu file types (`.gs`, `.gsx`, `.gst`, `.gsp`)
- **FR-007**: Extension MUST support both full-document formatting (Ctrl+Shift+F) and range formatting (format selection)
- **FR-008**: Extension MUST integrate with VSCode's "format on save" functionality when enabled
- **FR-009**: Extension MUST communicate formatting requests to the language server via LSP `textDocument/formatting` and `textDocument/rangeFormatting` methods
- **FR-010**: Extension MUST respect user-configured formatting settings from VSCode settings and workspace `.gosuformatting.json{c,5}` files

#### Command-Line Interface

- **FR-011**: CLI MUST accept file paths and glob patterns as arguments for batch formatting
- **FR-012**: CLI MUST support `--write` flag to modify files in-place, otherwise output to stdout
- **FR-013**: CLI MUST support `--check` flag to verify formatting without modifications (exit code 0 if formatted, 1 if changes needed)
- **FR-014**: CLI MUST support `--config` flag to specify custom configuration file path
- **FR-015**: CLI MUST return appropriate exit codes: 0 for success, 1 for formatting issues, 2 for syntax errors, 3 for configuration errors
- **FR-016**: CLI MUST provide summary statistics when formatting multiple files (total processed, modified, failed)
- **FR-017**: CLI MUST support `--show-config` flag to print the current resolved formatter configuration including all active settings and paths to configuration files that were used (workspace config, user config, defaults)

#### Logging & Observability

- **FR-018**: System MUST log all formatting operations to VSCode "Gosu Language Server" output channel with timestamps
- **FR-019**: System MUST log execution time for each formatting operation
- **FR-020**: System MUST log specific syntax errors with file path, line, column, and error description
- **FR-021**: System MUST log configuration loading events including file path and validation results
- **FR-022**: System MUST provide different log levels (error, warning, info, debug) configurable via settings
- **FR-023**: System MUST log performance metrics for files exceeding expected formatting time thresholds
- **FR-024**: CLI MUST output human-readable logs to stderr while formatted code goes to stdout

#### Configuration Management

- **FR-025**: System MUST support configuration via `.gosuformatting.json`, `.gosuformatting.jsonc`, or `.gosuformatting.json5` files
- **FR-026**: System MUST support configuration cascade: user settings < workspace settings < project config file
- **FR-027**: System MUST validate configuration on load and report specific validation errors
- **FR-028**: System MUST warn about unknown or invalid configuration options, use valid options, and continue (lenient validation mode)
- **FR-029**: System MUST expose configurable options including: indent size, indent style (spaces/tabs), max line length, brace style, line break rules, import organization rules
- **FR-030**: System MUST reload configuration when config files change without requiring VSCode restart

#### Error Handling

- **FR-031**: System MUST fail gracefully when encountering syntax errors, providing actionable diagnostics
- **FR-032**: System MUST never corrupt valid code sections when formatting files with partial syntax errors
- **FR-033**: System MUST distinguish between syntax errors (file problem) and formatter bugs (internal errors)
- **FR-034**: System MUST skip inaccessible or read-only files during batch operations, continue processing remaining files, and report all skipped files with reasons in the summary
- **FR-035**: System MUST handle file encoding issues and report them explicitly

#### Performance Requirements

- **FR-035**: System MUST format typical files (<1000 LOC) in under 200ms (p95)
- **FR-036**: System MUST format large files (<10000 LOC) in under 2 seconds
- **FR-037**: System MUST reject files exceeding 10000 LOC with clear error message indicating maximum file size
- **FR-038**: System MUST abort formatting operations that exceed 5x expected execution time for the file size (timeout protection)
- **FR-039**: System MUST reject files exceeding structural limits (maximum nesting depth, token count) to prevent pathological input attacks
- **FR-040**: System MUST support incremental formatting to optimize repeated operations
- **FR-041**: System MUST provide progress feedback for batch operations on multiple files
- **FR-042**: System MUST format file batches automatically: sequential for <5 files, parallel (bounded by CPU cores) for ≥5 files

### Key Entities

- **FormattingConfiguration**: Represents user preferences for formatting rules including indentation, spacing, line breaks, import organization, and error recovery mode
- **FormatResult**: Represents the outcome of a formatting operation including formatted text, applied edits, diagnostics, execution time, and success status
- **FormattingDiagnostic**: Represents issues encountered during formatting including severity level, location (file, line, column), message, and error code
- **LogEntry**: Represents a single log message including timestamp, level (error/warning/info/debug), source (formatter engine, LSP, CLI), and message content

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

## Gap Analysis vs Current Implementation

Based on `plan.md`, the following areas need completion or enhancement:

### ✅ Already Complete
- Core formatting engine (sections 1-7 of plan.md)
- Configuration system with JSON5/JSONC support
- LSP integration for document/range formatting
- CLI entry point with basic functionality
- Error recovery with anchor-based approach
- Performance benchmarks and determinism tests

### 🚧 Needs Enhancement

1. **CLI Completeness** (FR-011 to FR-017)
   - Add `--check` mode for CI verification
   - Add `--show-config` flag to display resolved configuration
   - Add glob pattern support for batch processing
   - Implement exit code conventions
   - Add summary statistics reporting

2. **Logging & Observability** (FR-018 to FR-024)
   - Implement structured logging to VSCode output channel
   - Add execution time tracking and reporting
   - Add configurable log levels
   - Add performance threshold monitoring
   - Separate stderr/stdout in CLI

3. **Configuration Cascade** (FR-029)
   - Implement file watcher for configuration changes
   - Add hot-reload without VSCode restart

4. **Progress Feedback** (FR-038)
   - Add progress reporting for batch operations

### 📋 Recommended Next Steps

1. Create tasks for CLI enhancements (check mode, show-config flag, glob support, exit codes)
2. Create tasks for comprehensive logging system
3. Create tasks for configuration hot-reload
4. Create tasks for batch operation progress reporting
5. Update integration tests to cover new scenarios (including --show-config output validation)
6. Update documentation with complete usage examples

---

**Note**: This specification complements the existing `plan.md` by defining user-facing requirements and acceptance criteria, while `plan.md` remains the technical implementation roadmap.
