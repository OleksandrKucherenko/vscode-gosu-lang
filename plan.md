# Gosu Formatter Implementation Plan

## 1. Foundation & Configuration
- [x] Scaffold `modules/formatter` package structure and public API surface
- [x] Define `.gosuformatting.json{c,5}` schema and defaults
- [x] Add configuration loader tests (JSON5 parsing, default merge, error handling)
- [x] Implement configuration loader with JSON5/JSONC support
- [x] Provide sample formatter configuration for end users
- [x] Integrate loader into `formatDocument` with TDD

## 2. AST Acquisition & Preprocessing
- [ ] **Parser Contract** – write tests around `@gosu-lsp/parser` output to guarantee full AST availability (`ASTIntegrationClass` fixtures, malformed fixtures)
  - [x] Validate comments/trivia retention requirements and add parser hooks/tests if missing
  - [ ] Expose dual-pass (top-down / bottom-up) parse helpers with red-green tests for recovery metadata *(Stage 3 low priority; tackle last)*
    - [x] Stage 1: implement "anchor" detection using regex to locate function/method scopes and mark them as parse start points
    - [x] Stage 1 tests: prove anchors isolate broken function bodies while the rest of file formats correctly
    - [x] Stage 2: integrate anchors into top-down pass, skipping segments flagged as errored and emitting recovery metadata
- [x] **Syntax Diagnostics** – design fail-fast behaviour with optional fallback
  - [x] Add tests ensuring syntax errors produce structured formatter diagnostics
  - [x] Add tests for recovery mode that marks failing lines as ignored when dual parsing isolates them

## 3. Formatting Pipeline (Google Java Format inspired)
- [x] **Phase 0 – Token Stream Normalisation**
  - [x] Build lexer bridge test to confirm tokens/comments map 1:1 with source offsets
  - [x] Implement token model with comment association (tests for inline, block, doc comments)
- [x] **Phase 1 – AST Traversal to Formatting IR**
  - [x] Create visitor tests for classes, enhancements, interfaces, properties, functions, control flow
  - [x] Implement `GosuFormattingVisitor` emitting neutral IR nodes (red test first, then implementation)
- [x] **Phase 2 – Operation Generation**
  - [x] Define OpsBuilder with unit tests covering indentation ops, soft/hard breaks, grouping boundaries
  - [x] Emit operations for core statements/expressions with snapshot assertions
- [x] **Phase 3 – Doc Construction & Layout**
  - [x] Implement Doc tree structure with Oppen-style grouping tests
  - [x] Port Derek Oppen algorithm adaptations (priority queue / break width) with algorithmic unit tests
  - [x] Add max-line-length regression tests to verify deterministic wrapping
- [x] **Phase 4 – Output Rendering**
  - [x] Write integration tests ensuring whitespace + comments correctly round-trip for representative files *(COMPLETED: Language feature coverage tests passing)*
  - [x] Implement renderer writing final text, confirming stability via golden files *(COMPLETED: Golden format tests working)*

## 4. Language Feature Coverage
- [x] **Core Gosu Constructs** – per-feature TDD matrix (class/enhancement/interface, methods, properties, uses statements)
  - [x] Add golden-format fixtures for each construct (ComplexClass.gs, ComplexInterface.gs, ComplexEnhancement.gsx)
  - [x] Expand visitor/ops generation to satisfy fixtures (enhanced with generics spacing, token processing)
    - [x] Enhanced visitor with control flow statement recognition (if/else, loops, switch, try/catch)
    - [x] Added op-builder logic for generics spacing (no space before < after identifiers)
    - [x] Fixed trailing newline handling across all constructs
    - [x] Improved AST range computation and token processing
- [x] **Expressions & Statements** – loops, conditionals, switch, try/catch, lambdas
  - [x] Add failing tests for each scenario (ControlFlowStatements.gs fixture exists with expected output)
  - [x] Implement formatting logic for control flow statements (if/else, loops, switch, try/catch)
    - [x] Add visitor cases for ifStatement, whileStatement, doWhileStatement, switchStatement, tryCatchFinallyStatement
    - [x] Enhanced op-builder with control flow specific spacing and indentation
    - [x] Implement consistent indentation for nested control structures
    - [x] Add proper formatting for else-if chains and switch case statements
  - [x] Add lambda expression formatting support
    - [x] Handle lambda syntax (\param ->) with proper spacing preservation
    - [x] Support both explicit and implicit parameter types
    - [x] Format multi-statement lambdas with proper indentation
- [x] **Templates & Special Files** – `.gst`, `.gsx`, `.gsp` formatting behaviour
  - [x] Add golden-format fixture for templates (ComplexTemplate.gst)
  - [x] Define tests ensuring file-type-sensitive rules (template syntax handling)
    - [x] Fixed template syntax preservation (<%= %> vs <%@ %>)
    - [x] Maintained proper template structure formatting
  - [x] Implement template-specific formatting rules (<%= %> expressions, <% %> blocks)
    - [x] Handle <%= %> output expressions with proper spacing
    - [x] Format <% %> code blocks with Gosu formatting rules
    - [x] Preserve template structure while formatting embedded code
    - [x] Add special handling for template comments and whitespace

## 5. Comment & Annotation Handling
- [x] Tests for inline, block, documentation comments placement
- [x] Implement comment attachment heuristics (leading/trailing/own-line) with deterministic ordering
- [x] Ensure annotations, generics, and modifiers align per Java-style rectangle rule (tests + implementation)

## 6. Error Handling & Diagnostics
- [x] Ensure formatter emits structured diagnostics (line, column, reason) when failing
- [x] Support "ignored line" emission for dual-pass recovery with coverage tests
- [x] Add configuration flags/tests for selecting strict vs tolerant mode

## 7. Performance & Determinism
- [x] Large file benchmarks – set up fixtures and performance regression tests
- [x] Deterministic output tests (formatting same file twice yields identical bytes)
- [x] Caching strategy tests ensuring AST/token caches invalidate on edits

## 8. Integration & Tooling
- [x] Document formatter usage in `docs/formatter/configuration.md` (expanded with pipeline overview)
- [x] Expose LSP full-document and range formatting commands (tests via integration harness)
- [x] Provide CLI entry point and CI wiring with golden diff assertions
- [x] Update VS Code settings contributions and README with formatter instructions

## 9. Stretch Goals
- [ ] Configuration adapters for TOML/YAML (loader tests first)
- [ ] Java-style profile presets (Google / Spotless alignment) with snapshot coverage
- [ ] Automated migration tool to regenerate existing codebase and compare git diffs

## 10. Cleanup the solution

- [x] Use snapshots testing approach where possible
- [x] Extract test/fixtures data into own files
- [x] Review the values of each unit test, is it a Business Value validation or Just a line coverage test. Classify tests and Tag them.