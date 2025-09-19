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
- [ ] **Low** – The server declares support for capabilities such as completion resolve, semantic tokens range, and Java interop (`modules/server/src/server.ts:166-210`) but never enriches the responses. Advertising unsupported features misleads clients during capability negotiation.

## Shared module (`modules/shared`)
- [x] **Medium** – Shared defaults now disable unsupported formatting out of the box (`modules/shared/src/types.ts`).
- [x] **Low** – `getGosuFileType` now matches extensions case-insensitively so uppercase `.GS*` files work across platforms (`modules/shared/src/types.ts`).

## Tooling & build scripts
- `scripts/build-server.js` and `scripts/build-extension.js` only bundle the root entry points and never copy the ANTLR runtime artefacts. Because the generated parser is required at runtime, builds executed without a prior `npm run generate:parser && npm run build` produce VSIX bundles that lack the ANTLR output.
- The monorepo `tsconfig.json` maps `@gosu-lsp/shared` to `modules/shared/dist` (`tsconfig.json:18-27`), but no package emits that directory during local development. Editors that rely on the TS server (including VS Code) therefore cannot resolve the shared module until somebody runs a full `tsc` build.

## Testing gaps
- There are unit tests for the keyword-based completion provider, but the server ships the AST-based provider (`modules/server/src/completion.ts` vs. `modules/server/src/ast-completion.ts`). None of the tests exercise the production code path, so regressions in the real completion stack go unnoticed.
- No automated test covers the LSP handshake (initialise/initialized/notification flow). Given the amount of custom logging and caching, an integration test harness would catch the cache-invalidating regressions noted above.
