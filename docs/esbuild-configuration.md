# Esbuild Configuration for LSP Server

This document explains the esbuild configuration used to bundle the Gosu Language Server Protocol (LSP) server.

## Overview

The LSP server is bundled using [esbuild](https://esbuild.github.io/) to create a single JavaScript file that can be executed by the VS Code extension. This approach provides several benefits:

1. Faster startup times
2. Smaller bundle size
3. Better performance
4. Easier distribution

## Configuration Details

The build configuration is defined in [`scripts/build-server.js`](../scripts/build-server.js).

### Entry Point

The entry point for the bundle is [`modules/server/src/server.ts`](../modules/server/src/server.ts), which contains the main LSP server implementation.

### Output

The bundled output is written to `out/server.js`, which is the location expected by the VS Code client extension.

### External Dependencies

Certain dependencies are marked as external and not bundled:

1. **VS Code LSP dependencies**:
   - `vscode-languageserver`
   - `vscode-languageserver-textdocument`
   - `vscode-languageserver-types`

2. **Runtime dependencies**:
   - `debug`

3. **Monorepo packages**:
   - `@gosu-lsp/parser`
   - `@gosu-lsp/shared`

These dependencies are marked as external because:
- They are provided by the VS Code runtime environment
- They are better handled as separate modules for performance
- They may have native bindings that don't bundle well

### Build Options

The build process uses the following options:

- `bundle: true` - Bundle all dependencies except externals
- `platform: "node"` - Target Node.js environment
- `format: "cjs"` - Use CommonJS module format
- `sourcemap: true` - Generate source maps for debugging
- `minify: false` - Keep code readable for debugging
- `treeShaking: true` - Remove unused code
- `loader: { ".ts": "ts" }` - Handle TypeScript files

## Usage

### Building the Server

To build the LSP server, run:

```bash
npm run build:server
```

This command will:
1. Bundle the server code using esbuild
2. Output the result to `out/server.js`
3. Generate source maps for debugging

### Building Everything

To build the entire extension including the server:

```bash
npm run build
```

This command will:
1. Build all modules using Turbo
2. Build the root TypeScript files
3. Bundle the LSP server using esbuild

## Development

During development, you can use the following commands:

- `npm run dev` in the server module to run the server in development mode
- `npm run watch` to watch for changes and rebuild automatically

## Troubleshooting

If you encounter issues with the build:

1. Ensure all dependencies are installed: `npm install`
2. Check that the entry point file exists: `modules/server/src/server.ts`
3. Verify external dependencies are correctly specified
4. Check the build script for errors: `scripts/build-server.js`