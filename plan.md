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
    - [x] Stage 1: implement “anchor” detection using regex to locate function/method scopes and mark them as parse start points
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
- [ ] **Phase 2 – Operation Generation**
  - [ ] Define OpsBuilder with unit tests covering indentation ops, soft/hard breaks, grouping boundaries
  - [ ] Emit operations for core statements/expressions with snapshot assertions
- [ ] **Phase 3 – Doc Construction & Layout**
  - [ ] Implement Doc tree structure with Oppen-style grouping tests
  - [ ] Port Derek Oppen algorithm adaptations (priority queue / break width) with algorithmic unit tests
  - [ ] Add max-line-length regression tests to verify deterministic wrapping
- [ ] **Phase 4 – Output Rendering**
  - [ ] Write integration tests ensuring whitespace + comments correctly round-trip for representative files
  - [ ] Implement renderer writing final text, confirming stability via golden files

## 4. Language Feature Coverage
- [ ] **Core Gosu Constructs** – per-feature TDD matrix (class/enhancement/interface, methods, properties, uses statements)
  - [ ] Add golden-format fixtures for each construct
  - [ ] Expand visitor/ops generation to satisfy fixtures
- [ ] **Expressions & Statements** – loops, conditionals, switch, try/catch, lambdas
  - [ ] Add failing tests for each scenario before implementation
- [ ] **Templates & Special Files** – `.gst`, `.gsx`, `.gsp` formatting behaviour
  - [ ] Define tests ensuring file-type-sensitive rules

## 5. Comment & Annotation Handling
- [ ] Tests for inline, block, documentation comments placement
- [ ] Implement comment attachment heuristics (leading/trailing/own-line) with deterministic ordering
- [ ] Ensure annotations, generics, and modifiers align per Java-style rectangle rule (tests + implementation)

## 6. Error Handling & Diagnostics
- [ ] Ensure formatter emits structured diagnostics (line, column, reason) when failing
- [ ] Support “ignored line” emission for dual-pass recovery with coverage tests
- [ ] Add configuration flags/tests for selecting strict vs tolerant mode

## 7. Performance & Determinism
- [ ] Large file benchmarks – set up fixtures and performance regression tests
- [ ] Deterministic output tests (formatting same file twice yields identical bytes)
- [ ] Caching strategy tests ensuring AST/token caches invalidate on edits

## 8. Integration & Tooling
- [ ] Document formatter usage in `docs/formatter/configuration.md` (expanded with pipeline overview)
- [ ] Expose LSP full-document and range formatting commands (tests via integration harness)
- [ ] Provide CLI entry point and CI wiring with golden diff assertions
- [ ] Update VS Code settings contributions and README with formatter instructions

## 9. Stretch Goals
- [ ] Configuration adapters for TOML/YAML (loader tests first)
- [ ] Java-style profile presets (Google / Spotless alignment) with snapshot coverage
- [ ] Automated migration tool to regenerate existing codebase and compare git diffs
