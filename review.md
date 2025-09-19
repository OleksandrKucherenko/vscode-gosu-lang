# Gosu VS Code Extension Review

## Client (`modules/client`)
- **High** – The commands registered by the client (`gosu.restartLanguageServer`, `gosu.showLanguageServerOutput`, `gosu.showLanguageServerStatus`) are not contributed in `package.json`, so they never appear in the command palette or keybinding UI (`package.json:39-82`, `modules/client/src/extension.ts:78`). This makes the only recovery mechanism (restart) effectively undiscoverable.
- **Medium** – `handleClientError` is defined but never wired into the language client error handler (`modules/client/src/extension.ts:131`). Crash loops therefore surface as raw notifications without the intended retry/back-off behaviour.
- **Medium** – The document selector only watches `scheme: "file"` URIs (`modules/client/src/extension.ts:32-47`), so untitled buffers, remote workspaces, and virtual documents will not activate the LSP. That is atypical for language extensions.
- **Low** – `initializationOptions` advertise toggles such as `enableSemanticHighlighting` and `enableJavaInterop` (`modules/client/src/extension.ts:54-58`), but the server never reads them. This creates configuration dead weight and confuses adopters about what is actually supported.

## Parser (handwritten wrapper)
- **High** – `parseByFileType` ignores the detected file type and always calls `parser.start()` (`modules/parser/src/parser.ts:99-115`). The grammar defines specialised entry points for enhancements, programs, templates, etc., so enhancement/template files will be parsed under class assumptions – exactly the class of parse bugs you reported.
- **Medium** – `validateSyntax` instantiates a brand new `GosuParser` which immediately calls back into `parseText` (`modules/parser/src/parser.ts:122-127`). Besides the obvious performance hit, this duplicates listener registrations and can introduce inconsistent error caps vs. the existing instance.
- **Low** – Exceptions falling through the `parseText` catch block are normalised to a single `PARSE_EXCEPTION` at line 1 column 0 (`modules/parser/src/parser.ts:75-92`), erasing the actual failure position. That makes parser diagnostics extremely hard to action.

## Parser (ANTLR-generated artefacts)
- The generated lexer/parser (`modules/parser/src/GosuLexer.ts`, `modules/parser/src/GosuParser.ts`, etc.) still point at `.js` extensions (`import { GosuListener } from "./GosuListener.js"`, `modules/parser/src/GosuParser.ts:5`). TypeScript only resolves that correctly when the build pipeline emits JS siblings first; running tests against the TypeScript sources without a prior `tsc` pass fails.
- Token/production names in the generated output no longer match the symbol extractor expectations (see server findings). Regenerating the parser after each grammar change and committing both the `.ts` and `.d.ts` outputs would avoid the current drift.

## Server (`modules/server`)
- **Critical** – The symbol extractor looks for context classes that do not exist in the generated parser (`InterfaceDeclarationContext`, `EnhancementDeclarationContext`, `PropertyDeclarationContext`, `VariableDeclarationContext`, etc.) – see `modules/server/src/symbol-extractor.ts:91-116`. Because the grammar names are `gInterfaceOrStructure`, `gEnhancement`, `propertyDefn`, etc., those branches never fire, leaving the symbol table almost empty. Every higher-level service (completion, definition, references, hover, semantic highlighting) silently fails, which explains the broken navigation you observed.
- **High** – Document change events never invalidate the AST-completion cache (`modules/server/src/server.ts:209-225`). `GosuASTCompletionProvider` exposes `clearDocumentCache`, but it is never called, so completions are permanently stale after the first parse.
- **High** – Cross-language navigation emits fake `java:///...` URIs instead of resolving to actual source locations (`modules/server/src/cross-language-definition-provider.ts:284-295`). VS Code cannot open those targets, so "Go to Definition" for Java types always fails.
- **High** – Updating Java resolver settings is a no-op (`modules/server/src/java-symbol-resolver.ts:220-227`). The resolver discards the supplied `classpath`/`sourcePaths` and only ever serves the hard-coded stdlib map (plus a mocked `com.example.MyCustomClass` in `resolveCustomJavaType`, `modules/server/src/java-symbol-resolver.ts:508-533`). Cross-language features therefore cannot be configured for real projects.
- **Medium** – `getImportCompletions` logs entire symbol tables and writes directly to `console.log` (`modules/server/src/ast-completion.ts:294-304`), flooding the shared output channel and slowing completion.
- **Medium** – Reference indexing performs naive string matching (`modules/server/src/reference-provider.ts:186-235`). Without AST context, it happily reports matches inside comments, other identifiers, and unrelated scopes. Combined with the broken symbol extractor, this makes reference results unreliable.
- **Low** – The server declares support for capabilities such as completion resolve, semantic tokens range, and Java interop (`modules/server/src/server.ts:166-210`) but never enriches the responses. Advertising unsupported features misleads clients during capability negotiation.

## Shared module (`modules/shared`)
- **Medium** – `DEFAULT_CONFIG` turns on features (formatting, code actions) that the server does not implement (`modules/shared/src/types.ts:55-72`). Anyone reading shared defaults will assume functionality that simply is not there.
- **Low** – `getGosuFileType` performs a case-sensitive match and returns `null` for uppercase extensions (`modules/shared/src/types.ts:146-155`). Windows users frequently encounter uppercase `.GS` files, so parser and language features silently switch off.

## Tooling & build scripts
- `scripts/build-server.js` and `scripts/build-extension.js` only bundle the root entry points and never copy the ANTLR runtime artefacts. Because the generated parser is required at runtime, builds executed without a prior `npm run generate:parser && npm run build` produce VSIX bundles that lack the ANTLR output.
- The monorepo `tsconfig.json` maps `@gosu-lsp/shared` to `modules/shared/dist` (`tsconfig.json:18-27`), but no package emits that directory during local development. Editors that rely on the TS server (including VS Code) therefore cannot resolve the shared module until somebody runs a full `tsc` build.

## Testing gaps
- There are unit tests for the keyword-based completion provider, but the server ships the AST-based provider (`modules/server/src/completion.ts` vs. `modules/server/src/ast-completion.ts`). None of the tests exercise the production code path, so regressions in the real completion stack go unnoticed.
- No automated test covers the LSP handshake (initialise/initialized/notification flow). Given the amount of custom logging and caching, an integration test harness would catch the cache-invalidating regressions noted above.

