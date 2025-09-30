<!--
SYNC IMPACT REPORT - Constitution Update

Version Change: TEMPLATE → 1.0.0
Principles Added: All 7 core principles established
Templates Requiring Updates:
  ✅ plan-template.md - Reviewed, compatible with LSP-first and performance principles
  ✅ spec-template.md - Reviewed, compatible with requirements
  ✅ tasks-template.md - Reviewed, compatible with TDD and parallel execution
Follow-up TODOs: None - Initial constitution establishment
-->

# VSCode Gosu Language Support Constitution

## Core Principles

### I. LSP-First Architecture

The extension MUST implement language intelligence through the Language Server Protocol (LSP), maintaining strict separation between editor integration and language services.

**Non-Negotiable Rules:**
- All language features (completion, diagnostics, navigation, formatting) MUST be implemented in the language server (`modules/server`), not the client (`modules/client`)
- Client code MUST only handle VSCode API integration, command registration, and server lifecycle management
- Communication between client and server MUST use standard LSP protocol messages
- No business logic or AST processing MUST occur in the client
- Parser, symbol extraction, and type resolution MUST remain server-side concerns

**Rationale:** LSP separation ensures the language server can be reused in other editors (Vim, Emacs, Eclipse), facilitates independent testing, and aligns with the VSCode ecosystem's architectural patterns. This enables cross-editor compatibility and maintainability.

### II. Test-Driven Development (NON-NEGOTIABLE)

All feature implementation MUST follow strict TDD discipline with tests written before implementation.

**Non-Negotiable Rules:**
- Tests MUST be written first and MUST fail before implementation begins
- Red-Green-Refactor cycle MUST be strictly enforced
- Contract tests MUST exist for all LSP protocol endpoints
- Golden format tests MUST validate formatter output determinism
- Parser tests MUST cover all Gosu language constructs (classes, enhancements, templates, properties)
- Integration tests MUST verify cross-language navigation (Gosu ↔ Java)
- No feature merge without passing tests demonstrating the requirement

**Rationale:** TDD ensures code correctness, prevents regressions, and documents expected behavior. Given the complexity of parsing, formatting, and LSP interactions, upfront tests catch edge cases early. Memories indicate formatter and parser development extensively use TDD with golden files and fixtures.

### III. IntelliJ Feature Parity & Migration Focus

Extension development MUST prioritize features that enable developers to migrate from IntelliJ IDEA without productivity loss.

**Non-Negotiable Rules:**
- Phase 1 (Months 1-4) MUST deliver: syntax highlighting, smart completion with auto-imports, real-time diagnostics, navigation suite (go-to-definition, find references), basic refactoring (rename, extract), debugging support, and build tool integration (Maven/Gradle)
- Sub-100ms response time MUST be maintained for code completion requests
- Java ecosystem integration MUST leverage Red Hat Java extension infrastructure (Eclipse JDT.LS)
- Settings import capability MUST support IntelliJ code style XML conversion
- Features MUST NOT be merged if they introduce >200ms latency on median files

**Rationale:** Adoption depends on smooth migration. Users switching from IntelliJ IDEA (which has robust Gosu support via Guidewire Studio) require feature parity for daily workflows. The planning documents emphasize this migration-ready MVP as critical for adoption.

### IV. Type Safety & Java Interoperability

The extension MUST respect Gosu's statically-typed nature and maintain seamless Java interoperability.

**Non-Negotiable Rules:**
- Symbol resolution MUST honor both Gosu types and Java classpath
- Cross-language navigation MUST work bidirectionally (Gosu → Java, Java → Gosu)
- Type inference results MUST be validated against Gosu's type system rules
- Java dependency resolution MUST integrate with Maven/Gradle configurations via Java extension
- Enhancement type checking MUST respect Gosu's static dispatch semantics
- Completion suggestions MUST preserve type safety (no unsafe casts suggested)

**Rationale:** Gosu is designed for Java developers and runs on the JVM with 100% Java compatibility. Breaking type safety or Java interop undermines the language's core value proposition. Documentation emphasizes that Gosu provides productivity gains without sacrificing Java's type-safety benefits.

### V. Performance & Responsiveness

All language features MUST maintain sub-100ms response times for typical operations and avoid blocking the UI.

**Non-Negotiable Rules:**
- Code completion MUST respond in <100ms (p95 metric)
- Hover information MUST render in <50ms
- Document symbol extraction MUST complete in <200ms for 10k LOC files
- Incremental parsing MUST be used to minimize computational overhead
- Background indexing MUST be implemented with symbol cache persistence
- Cancellation tokens MUST be respected for long-running operations
- Memory usage MUST stay under 2GB typical (50% less than IntelliJ)

**Rationale:** Performance is a key competitive advantage over IntelliJ (faster startup, lighter resource usage). Documents explicitly target <100ms completion and emphasize incremental updates via LSP delta synchronization. Poor performance negates migration incentives.

### VI. Formatter Determinism & Idempotence

The Gosu formatter MUST produce deterministic, idempotent output for all valid code.

**Non-Negotiable Rules:**
- Formatting the same file twice MUST yield byte-identical output (idempotence test)
- Comment placement MUST be preserved with deterministic attachment heuristics (leading/trailing/own-line)
- Invalid syntax MUST NOT corrupt valid code sections (anchor-based recovery)
- Configuration changes MUST NOT cause non-deterministic output
- Golden format tests MUST validate all language constructs (classes, enhancements, interfaces, properties, templates, control flow)
- Template syntax (<%= %>, <% %>) MUST be preserved during formatting

**Rationale:** Non-deterministic formatters create churn in version control and erode trust. The plan.md indicates the formatter uses Google Java Format-inspired pipeline with Oppen algorithm for deterministic line breaking. Anchor-based recovery ensures partial formatting on syntax errors.

### VII. Incremental Development & Iteration

Features MUST be delivered incrementally with clear milestones and shippable increments.

**Non-Negotiable Rules:**
- Each milestone MUST end with passing unit/integration tests
- VSIX builds MUST be verified to contain runtime artifacts (ANTLR parser outputs)
- Manual smoke tests per docs/manual-testing.md MUST be executed before milestone completion
- Backward compatibility MUST be maintained within major versions
- Breaking changes MUST increment MAJOR version per semantic versioning
- Features MUST ship behind configuration flags if incomplete or experimental

**Rationale:** Incremental delivery reduces risk, enables early feedback, and maintains a shippable main branch. Review document explicitly structures Phase 1 as shippable milestones (Completion → Symbols → Formatting → Build Tooling → Refactoring → Debug).

## Error Handling & Recovery

All language services MUST fail gracefully and provide actionable diagnostics.

**Requirements:**
- Parser errors MUST include line, column, and specific reason (not generic "line 1 col 0" errors)
- Malformed code sections MUST NOT prevent formatting of valid code (dual-pass recovery with anchors)
- LSP crashes MUST trigger exponential back-off retry via `handleClientError` mechanism
- Missing dependencies (Java classpath, build files) MUST produce clear diagnostic messages
- Configuration errors (.gosuformatting.json syntax errors) MUST be reported with validation feedback
- Untitled buffers, remote workspaces, and virtual documents MUST be supported (`scheme: "untitled"`, `scheme: "vscode-remote"`)

**Rationale:** Review document identified critical gaps: error handlers not wired, parse errors losing position info, and parser ignoring file types. Robust error handling is essential for developer experience.

## Quality Gates

All code MUST pass these gates before merging:

**Testing Gates:**
- All unit tests MUST pass (`npm test`)
- Integration tests MUST validate LSP handshake and notification flow
- Contract tests MUST verify request/response schemas for LSP endpoints
- Golden format tests MUST pass with byte-identical output
- Performance benchmarks MUST not regress beyond ±10%

**Code Quality Gates:**
- No `console.log` in production code (use debug namespaces)
- TypeScript strict mode MUST be enabled with no errors
- ESLint MUST pass with no warnings
- ANTLR grammar changes MUST regenerate parser artifacts (committed .ts and .d.ts)
- Generated code MUST import with `.ts` extensions, not `.js` (TypeScript resolution)

**Architecture Gates:**
- Client commands MUST be contributed in package.json (no undiscoverable commands)
- Document selectors MUST include file, untitled, and remote schemes
- Initialization options MUST be consumed by server if advertised
- AST caches MUST be invalidated on document changes

**Rationale:** Review document identified multiple critical and high-priority issues that would have been caught by these gates (missing command contributions, unhandled errors, stale caches, undiscoverable features).

## Governance

This constitution supersedes all other development practices and style guides.

**Amendment Process:**
- Constitutional changes require documented justification and team approval
- Breaking principle adherence requires explicit deviation documentation in Complexity Tracking section of plan.md
- Amendments update version per semantic versioning:
  - MAJOR: Principle removal or redefinition causing incompatible changes
  - MINOR: New principle addition or material guidance expansion
  - PATCH: Clarifications, wording improvements, non-semantic refinements

**Compliance Review:**
- All PRs MUST reference relevant constitutional principles in description
- plan.md Constitution Check section MUST evaluate adherence before Phase 0 research
- Post-design constitution check MUST occur after Phase 1 completion
- Deviations MUST be documented in plan.md Complexity Tracking with justification

**Development Guidance:**
- Use `.windsurf/workflows/*.md` for specific operational procedures (deploy, test, build)
- Use `docs/planning/*.md` for technical context and architectural decisions
- Use this constitution for non-negotiable principles and quality standards

**Version**: 1.0.0 | **Ratified**: 2025-09-30 | **Last Amended**: 2025-09-30