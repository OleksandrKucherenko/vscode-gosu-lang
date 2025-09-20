# Gosu VS Code Extension Review

## Client (`modules/client`)
- **High** – The commands registered by the client (`gosu.restartLanguageServer`, `gosu.showLanguageServerOutput`, `gosu.showLanguageServerStatus`) are not contributed in `package.json`, so they never appear in the command palette or keybinding UI (`package.json:39-82`, `modules/client/src/extension.ts:78`). This makes the only recovery mechanism (restart) effectively undiscoverable.
- **Medium** – `handleClientError` is defined but never wired into the language client error handler (`modules/client/src/extension.ts:131`). Crash loops therefore surface as raw notifications without the intended retry/back-off behaviour.
- **Medium** – The document selector only watches `scheme: "file"` URIs (`modules/client/src/extension.ts:32-47`), so untitled buffers, remote workspaces, and virtual documents will not activate the LSP. That is atypical for language extensions.
- **Low** – `initializationOptions` advertise toggles such as `enableSemanticHighlighting` and `enableJavaInterop` (`modules/client/src/extension.ts:54-58`), but the server never reads them. This creates configuration dead weight and confuses adopters about what is actually supported.

## Parser (handwritten wrapper)
- **High** – `parseByFileType` ignores the detected file type and always calls `parser.start()` (`modules/parser/src/parser.ts:99-115`). The grammar defines specialised entry points for enhancements, programs, templates, etc., so enhancement/template files will be parsed under class assumptions – exactly the class of parse bugs you reported.
- [x] **Medium** – `validateSyntax` now reuses the existing parser instance and restores configuration after the check (see `modules/parser/src/parser.ts`).
- **Low** – Exceptions falling through the `parseText` catch block are normalised to a single `PARSE_EXCEPTION` at line 1 column 0 (`modules/parser/src/parser.ts:75-92`), erasing the actual failure position. That makes parser diagnostics extremely hard to action.

## Parser (ANTLR-generated artefacts)
- The generated lexer/parser (`modules/parser/src/GosuLexer.ts`, `modules/parser/src/GosuParser.ts`, etc.) still point at `.js` extensions (`import { GosuListener } from "./GosuListener.js"`, `modules/parser/src/GosuParser.ts:5`). TypeScript only resolves that correctly when the build pipeline emits JS siblings first; running tests against the TypeScript sources without a prior `tsc` pass fails.
- Token/production names in the generated output no longer match the symbol extractor expectations (see server findings). Regenerating the parser after each grammar change and committing both the `.ts` and `.d.ts` outputs would avoid the current drift.

## Server (`modules/server`)
- [x] **Critical** – The symbol extractor looks for context classes that do not exist in the generated parser (`InterfaceDeclarationContext`, `EnhancementDeclarationContext`, `PropertyDeclarationContext`, `VariableDeclarationContext`, etc.) – see `modules/server/src/symbol-extractor.ts`. Because the grammar names are `gInterfaceOrStructure`, `gEnhancement`, `propertyDefn`, etc., those branches never fire, leaving the symbol table almost empty. Every higher-level service (completion, definition, references, hover, semantic highlighting) silently fails, which explains the broken navigation you observed.
- [x] **High** – Document change events never invalidate the AST-completion cache (`modules/server/src/server.ts:209-225`). `GosuASTCompletionProvider` exposes `clearDocumentCache`, but it is never called, so completions are permanently stale after the first parse.
- [x] **High** – Cross-language navigation now returns real file URIs when Java source files are available; falls back to `java:///` only for stdlib stubs (`modules/server/src/cross-language-definition-provider.ts`).
- [x] **High** – Java resolver now honours `sourcePaths`/`classpath` and loads `.java` sources dynamically (see `modules/server/src/java-symbol-resolver.ts`).
- [x] **Medium** – Import completion no longer logs symbol tables or writes to `console.log`; logging is confined to the debug namespace (`modules/server/src/ast-completion.ts`).
- [x] **Medium** – Reference indexing now skips matches inside strings and comments, reducing false positives while leaving future AST-based enhancements possible (`modules/server/src/reference-provider.ts`).
- [x] **Low** – Completion resolve now enriches items with markdown documentation so advertised capabilities reflect actual behaviour (`modules/server/src/server.ts`).

## Shared module (`modules/shared`)
- [x] **Medium** – Shared defaults now disable unsupported formatting out of the box (`modules/shared/src/types.ts`).
- [x] **Low** – `getGosuFileType` now matches extensions case-insensitively so uppercase `.GS*` files work across platforms (`modules/shared/src/types.ts`).

## Tooling & build scripts
- `scripts/build-server.js` and `scripts/build-extension.js` only bundle the root entry points and never copy the ANTLR runtime artefacts. Because the generated parser is required at runtime, builds executed without a prior `npm run generate:parser && npm run build` produce VSIX bundles that lack the ANTLR output.
- [x] The monorepo `tsconfig.json` now points `@gosu-lsp/shared` to the source directory so editors resolve imports without building (`tsconfig.json`).

## Testing gaps
- There are unit tests for the keyword-based completion provider, but the server ships the AST-based provider (`modules/server/src/completion.ts` vs. `modules/server/src/ast-completion.ts`). None of the tests exercise the production code path, so regressions in the real completion stack go unnoticed.
- No automated test covers the LSP handshake (initialise/initialized/notification flow). Given the amount of custom logging and caching, an integration test harness would catch the cache-invalidating regressions noted above.

## Phase 1 Migration MVP gaps
- ✅ Syntax highlighting, semantic tokens, diagnostics, definition/hover/reference providers, and cross-language navigation meet the baseline expectations.
- 🚧 `completion` still lacks auto-import generation and richer resolve metadata (Phase 1 calls for IntelliSense parity).
- 🚧 No document/workspace symbol providers yet, so “symbol search” and outline functionality are missing.
- 🚧 Formatting providers (document, range, on-type) are not implemented despite Phase 1 requiring configurable formatting parity with IntelliJ.
- 🚧 Build tooling and JVM configuration are absent: no Maven/Gradle integration or JDK management hooks.
- 🚧 Refactoring surface (rename/move/extract) and quick fixes/organize imports have not been started.
- 🚧 Debug adapter and run/test configurations are missing, leaving the “build/run/debug without switching IDEs” criteria unmet.

## Phase 1 Implementation Plan (Detailed)

The goal of Phase 1 is migration-ready parity for daily development: open an existing JVM project, code productively in Gosu without switching tools, and run/debug with minimal friction. Below is a step-by-step plan decomposed into small, deployable, and testable tasks. Where relevant, APIs and tactics are aligned with docs/planning/vscode-new-programming-language-support.md and IntelliJ parity items in docs/planning/intellij-functionality.md.

### 0) Preflight and Foundations
- Expose client commands in the UI (to increase recoverability and discoverability)
  - Update `package.json` to contribute commands for restart/status/output and bind default keybindings
    - Files: package.json:contributes.commands, contributes.keybindings
    - Acceptance: Commands appear in Command Palette; restart works; status/output open as expected
    - Tests: Lightweight activation test to verify command registration
- Wire `handleClientError` and activate client on untitled/remote schemes
  - Files: modules/client/src/extension.ts: add `errorHandler`, broaden `documentSelector`
  - Acceptance: Crash loop triggers back-off; untitled/remote docs activate the LSP
  - Tests: Simulated error handler test; activation test using in-memory TextDocuments

### 1) Completion Parity: Auto-import + Rich Resolve
Deliver context-aware completions that insert the needed `uses` imports and enrich metadata.

- Add import resolution and edit generation
  - Implement `computeAutoImportEdits()` that:
    - Detects if a symbol requires a `uses` statement (Gosu import)
    - Inserts or amends the `uses` block at canonical location (after package, before class)
    - De-duplicates and groups imports; handles aliasing and wildcard forms
  - Files: modules/server/src/ast-completion.ts, modules/server/src/symbol-extractor.ts, modules/shared/src/types.ts (config toggles)
  - Acceptance: Selecting a completion inserts missing import and symbol text; no duplicate imports
  - Tests: Add tests for simple type, static member, enhancement method, Java type, conflict detection (`__tests__/completion-integration.test.ts`)

- Enrich completion resolve metadata
  - Populate `documentation`, `detail`, `sortText`, `filterText` on `completionItem/resolve`
  - Files: modules/server/src/ast-completion.ts, modules/server/src/server.ts
  - Acceptance: Hovering completion items shows signature docs; stable sort; filters behave as expected
  - Tests: Extend `completion.test.ts` to assert fields and renderable markdown

- Configuration and toggles
  - Add `gosu.completion.autoImport` and `gosu.completion.resolveDocs` settings with sane defaults
  - Files: package.json (contributes.configuration), modules/shared/src/types.ts (defaults)
  - Acceptance: Toggling settings enables/disables auto-import and metadata
  - Tests: Unit tests for config plumbing; integration asserts behaviour changes

### 2) Symbols: Document + Workspace
Provide outline and global symbol search.

- Document symbols
  - Map AST to a `DocumentSymbol` tree: classes, enhancements, interfaces, properties, functions, fields, parameters
  - Files: modules/server/src/symbol-extractor.ts (expose hierarchical API), new modules/server/src/document-symbols.ts, modules/server/src/server.ts (onDocumentSymbol)
  - Acceptance: Outline shows correct hierarchy with ranges; folding/selection ranges align
  - Tests: `document-symbols.test.ts` with fixtures for class/enhancement/template/program files

- Workspace symbols
  - Maintain a lightweight workspace index on open/change/close
  - Implement `workspace/symbol` with fuzzy match on names and container names
  - Files: modules/server/src/workspace-symbols.ts, modules/server/src/server.ts
  - Acceptance: `Go to Symbol in Workspace` finds classes/methods across files; index updates on edits
  - Tests: `workspace-symbols.test.ts` using multi-file fixtures

### 3) Formatting: Document, Range, On-Type, Organize Imports
Ship a pragmatic formatter and import organizer with configuration mapped to common IntelliJ rules.

- Minimal formatting engine (phase 1 scope)
  - Indentation (braces, control flow, blocks), spacing after `,`/`:`/`;`, brace placement, newline around `uses`
  - Files: new modules/server/src/formatter.ts, modules/server/src/server.ts (onFormatting, onRangeFormatting, onTypeFormatting)
  - Acceptance: Formatting is idempotent; respects user indentation/width; safe on malformed code
  - Tests: `formatter.test.ts` with golden samples; idempotence checks on multiple runs

- Organize imports and code action
  - Sort/group `uses` statements; remove unused; collapse wildcards per setting
  - Expose as `source.organizeImports.gosu` and quick fix for missing imports
  - Files: formatter.ts (organize), new modules/server/src/code-actions.ts, modules/server/src/server.ts (onCodeAction)
  - Acceptance: Running “Organize Imports” updates only `uses` block; quick fix offers “Add import …”
  - Tests: `code-actions.test.ts` covering add/remove/sort and diagnostics-driven fixes

- Configuration mapping
  - Add `gosu.format.*` settings (indent size, brace style, import order, newline rules)
  - Files: package.json (configuration), modules/shared/src/types.ts (defaults)
  - Acceptance: Settings are applied; defaults reflect docs/planning/vscode-new-programming-language-support.md guidance
  - Tests: Config-driven formatting variations

### 4) Build Tooling and JVM Configuration
Leverage Java extension infrastructure for classpath/JDK, with minimal glue.

- Depend on Java extensions and fetch classpaths
  - Add `extensionDependencies` for Red Hat Java and Java Debug
  - Use `java.execute.workspaceCommand` to query project classpaths/JDK
  - Files: package.json (extensionDependencies), modules/client/src/extension.ts (client ↔ server RPC to supply classpath), modules/server/src/java-symbol-resolver.ts (consume classpath)
  - Acceptance: Projects with Maven/Gradle resolve Java sources and navigation without manual config
  - Tests: Mocked client command channel; unit tests around resolver; manual matrix in docs/manual-testing.md

- Watch build files and refresh
  - Watch `pom.xml`, `build.gradle`, `.classpath`, `gradle.properties` and refresh caches
  - Files: modules/client/src/extension.ts (file watchers), modules/server/src/server.ts (refresh handlers)
  - Acceptance: Editing build files triggers re-resolution within seconds
  - Tests: Lightweight integration test with synthetic notifications

- Packaging hygiene
  - Ensure ANTLR outputs are bundled (see docs/release-build-architecture.md)
  - Files: scripts/build-*.js, .vscodeignore, package scripts
  - Acceptance: VSIX contains parser artefacts; standalone server loads without missing deps
  - Tests: `npm run test:server` passes; CI artifact inspection

### 5) Refactoring and Quick Fixes (Phase 1 scope)
Start with high-value, low-risk refactorings and common quick fixes.

- Rename provider
  - Implement `textDocument/rename` using workspace index + per-file edits; handle local, member, and type identifiers
  - Files: new modules/server/src/rename-provider.ts, modules/server/src/server.ts
  - Acceptance: Rename updates all occurrences respecting scope; preview works in VS Code
  - Tests: `rename-provider.test.ts` single-file and multi-file fixtures

- Quick fixes and source actions
  - Missing import: propose `uses` insertion from known symbols (ties to completion import logic)
  - Organize imports: expose as `source.organizeImports.gosu`
  - Remove unused imports: based on simple reference scan in file
  - Files: code-actions.ts, diagnostics.ts (mark unused), server.ts
  - Acceptance: CodeAction list shows expected fixes with minimal false positives
  - Tests: `code-actions.test.ts` with diagnostics → fixes mapping

### 6) Debug and Run/Test Configurations
Enable running/debugging Gosu programs with minimal setup by leaning on Java Debug.

- Launch configuration and adapter glue
  - Contribute a `gosu` debug type that translates to Java Debug launch with computed classpath and main class (or program runner)
  - Files: package.json (debuggers, commands), new modules/client/src/debug.ts (launcher), scripts if needed
  - Acceptance: “Run” and “Debug” on a Gosu entry point starts JVM with breakpoints/variables working
  - Tests: Manual validation script and instructions in docs/manual-testing.md; automated smoke test to validate launch args composition

- Test/run tasks
  - Provide `tasks.json` snippets to run gosu programs/tests where applicable
  - Files: package.json (snippets), docs/manual-testing.md (instructions)
  - Acceptance: Users can scaffold run tasks quickly; documentation is clear

### 7) Documentation, DX and Observability
Ensure features are discoverable, debuggable, and safe to iterate.

- Update documentation
  - Files: README.md (feature matrix), docs/manual-testing.md (scenarios), docs/planning/roadmap.md (Phase 1 complete criteria)
  - Acceptance: Docs enumerate how to use and verify each feature

- Logging and telemetry (debug only)
  - Consolidate `debug` namespaces; optional verbose logs via setting
  - Files: server modules, shared logger util
  - Acceptance: Developers can enable granular logs to triage issues; off by default

### Delivery Milestones (each increment is shippable)
1. Foundations + Completion auto-import/resolve
2. Document/Workspace Symbols
3. Formatting + Organize Imports (+ quick fix: missing import)
4. Build Tooling/JDK integration (classpath fetch + watchers)
5. Rename + Quick Fixes set
6. Debug/Run configurations

Each milestone ends with:
- Unit/integration tests green (vitest)
- Manual smoke tests per docs/manual-testing.md
- VSIX build verified to contain runtime artefacts

### Verification Matrix (per feature)
- Performance: <100ms for completion/definition on median files
- Correctness: golden tests; idempotent formatting; rename scope awareness
- Configurability: user/workspace settings flip behaviour where applicable
- Interop: Java navigation intact post-integration

References and guidance used: docs/planning/vscode-new-programming-language-support.md, docs/planning/intellij-functionality.md, docs/release-build-architecture.md.
