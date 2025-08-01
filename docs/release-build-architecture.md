# Release Build Architecture Plan (Simplified)

## Overview

This document outlines the simplified build architecture for the VSCode Gosu Language Extension using ESBuild's native TypeScript support. ESBuild can compile TypeScript directly during bundling, eliminating the need for separate module compilation steps.

## Key Insight: ESBuild + TypeScript

**ESBuild handles TypeScript compilation directly**, so we only need:
- **Type checking**: `tsc --noEmit` for type safety verification
- **Bundling**: ESBuild compiles TypeScript and bundles in one step

This eliminates the complex multi-phase build process originally planned.

## Current Issues Identified

### 1. Incorrect Bundling Strategy
- **Problem**: [`scripts/build-server.js`](../scripts/build-server.js) tries to bundle both extension and server together
- **Impact**: VSCode extensions require separate bundles for client and server
- **Solution**: Create separate ESBuild configurations for extension client and LSP server

### 2. Wrong External Dependencies
- **Problem**: Current build marks monorepo packages as `external` in ESBuild
- **Impact**: External dependencies won't be included in standalone VSX package
- **Solution**: Bundle monorepo dependencies while keeping VS Code APIs external

### 3. TypeScript Path Resolution
- **Problem**: Paths in [`tsconfig.json`](../tsconfig.json) may need adjustment for ESBuild
- **Impact**: ESBuild might not resolve monorepo imports correctly
- **Solution**: Configure ESBuild to handle TypeScript path mapping or adjust tsconfig

## Simplified Build Architecture

### Single-Phase Build Process
```
TypeScript Source Files → ESBuild → Bundled JavaScript
```

**No intermediate compilation needed!**

### Build Flow
1. **Type Check**: `tsc --noEmit` (verify types, no output)
2. **Bundle Extension**: ESBuild bundles `src/extension.ts` → `out/extension.js`
3. **Bundle Server**: ESBuild bundles `src/server.ts` → `out/server.js`
4. **Package**: Create VSX with bundled outputs

## Required Script Changes

### 1. Updated Extension Build: `scripts/build-extension.js`
```javascript
#!/usr/bin/env node
const { build } = require("esbuild")

async function buildExtension() {
    console.log("Building VSCode extension client...")
    
    await build({
        entryPoints: ["src/extension.ts"],
        bundle: true,
        outfile: "out/extension.js",
        platform: "node",
        format: "cjs",
        target: "node16",
        external: [
            // VS Code APIs must remain external
            "vscode",
            "vscode-languageclient"
        ],
        sourcemap: true,
        minify: process.env.NODE_ENV === "production",
        treeShaking: true,
        define: {
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development")
        },
        loader: { 
            ".ts": "ts" 
        },
        // Handle TypeScript path mapping
        tsconfig: "./tsconfig.json",
        logLevel: "info"
    })
    
    console.log("Extension client built successfully!")
}

if (require.main === module) {
    buildExtension().catch((error) => {
        console.error("Extension build failed:", error)
        process.exit(1)
    })
}

module.exports = { buildExtension }
```

### 2. Updated Server Build: `scripts/build-server.js`
```javascript
#!/usr/bin/env node
const { build } = require("esbuild")

async function buildServer() {
    console.log("Building LSP server...")
    
    await build({
        entryPoints: ["src/server.ts"],
        bundle: true,
        outfile: "out/server.js",
        platform: "node",
        format: "cjs",
        target: "node16",
        external: [
            // VS Code LSP APIs must remain external
            "vscode-languageserver",
            "vscode-languageserver-textdocument", 
            "vscode-languageserver-types"
        ],
        sourcemap: true,
        minify: process.env.NODE_ENV === "production",
        treeShaking: true,
        define: {
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development")
        },
        loader: { 
            ".ts": "ts" 
        },
        // Handle TypeScript path mapping
        tsconfig: "./tsconfig.json",
        logLevel: "info"
    })
    
    console.log("LSP server built successfully!")
}

if (require.main === module) {
    buildServer().catch((error) => {
        console.error("Server build failed:", error)
        process.exit(1)
    })
}

module.exports = { buildServer }
```

### 3. Simplified Root Package.json Scripts
```json
{
  "scripts": {
    "vscode:prepublish": "npm run build:release",
    "build": "npm run build:dev",
    "build:dev": "npm run typecheck && npm run build:bundles",
    "build:release": "npm run typecheck && cross-env NODE_ENV=production npm run build:bundles",
    "typecheck": "tsc --noEmit",
    "build:bundles": "node scripts/build-extension.js && node scripts/build-server.js",
    "clean": "rimraf out coverage .nyc_output && turbo run clean",
    "package": "npm run build:release && vsce package --no-yarn --tree",
    "test:manual": "node scripts/test-manual.js",
    "test:server": "node scripts/test-server-standalone.js",
    "watch": "npm run typecheck && concurrently \"tsc --noEmit --watch\" \"node scripts/build-extension.js --watch\" \"node scripts/build-server.js --watch\""
  }
}
```

### 4. Simplified Module Package.json Scripts

**No separate compilation needed!** Update all `modules/*/package.json`:
```json
{
  "scripts": {
    "clean": "rimraf coverage",
    "lint": "biome check --write --unsafe --no-errors-on-unmatched",
    "test": "vitest",
    "test:watch": "vitest --watch --ui",
    "test:coverage": "vitest --coverage",
    "typecheck": "tsc --noEmit --project tsconfig.json"
  }
}
```

## Configuration Updates

### 1. Keep Current `tsconfig.json` Paths
```json
{
  "compilerOptions": {
    "paths": {
      "@gosu-lsp/shared": ["./modules/shared/src"],
      "@gosu-lsp/shared/*": ["./modules/shared/src/*"],
      "@gosu-lsp/parser": ["./modules/parser/src"],
      "@gosu-lsp/parser/*": ["./modules/parser/src/*"],
      "@gosu-lsp/server": ["./modules/server/src"],
      "@gosu-lsp/server/*": ["./modules/server/src/*"],
      "@gosu-lsp/client": ["./modules/client/src"],
      "@gosu-lsp/client/*": ["./modules/client/src/*"]
    }
  }
}
```

### 2. Updated `.vscodeignore`
```
# Source files (exclude from package)
src/**
modules/**/src/**
**/*.ts
**/*.map

# Keep bundled outputs only
!out/**

# Development files
node_modules/**
test/**
scripts/**
.turbo/**
coverage/**
**/*.test.*
.vscode/**
.vscode-test/**
```

### 3. Updated `turbo.json`
```json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "typecheck": {
      "outputs": [],
      "cache": true
    },
    "test": {
      "dependsOn": ["typecheck"],
      "outputs": [],
      "cache": true,
      "passThroughEnv": ["CI"]
    },
    "test:coverage": {
      "dependsOn": ["typecheck"],
      "outputs": ["coverage/**"],
      "cache": true
    },
    "lint": {
      "outputs": [],
      "cache": true
    },
    "clean": {
      "cache": false
    }
  }
}
```

## Manual Testing Scripts

### 1. Manual VSCode Testing: `scripts/test-manual.js`
```javascript
#!/usr/bin/env node
const { spawn } = require('child_process')
const path = require('path')

async function testManual() {
    console.log('Building extension for manual testing...')
    
    // Build the extension first
    const { buildExtension } = require('./build-extension')
    const { buildServer } = require('./build-server')
    
    try {
        await buildExtension()
        await buildServer()
    } catch (error) {
        console.error('Build failed:', error)
        process.exit(1)
    }
    
    console.log('Launching VSCode with extension and test fixtures...')
    
    // Launch VSCode with the test fixtures
    const fixturesPath = path.join(process.cwd(), 'test/fixtures')
    const vscodeArgs = [
        '--extensionDevelopmentPath=' + process.cwd(),
        fixturesPath
    ]
    
    console.log(`VSCode command: code ${vscodeArgs.join(' ')}`)
    
    const vscode = spawn('code', vscodeArgs, {
        stdio: 'inherit',
        shell: true
    })
    
    vscode.on('error', (err) => {
        console.error('Failed to launch VSCode:', err)
        console.log('Make sure VSCode is installed and available in PATH')
        process.exit(1)
    })
    
    vscode.on('exit', (code) => {
        console.log(`VSCode exited with code ${code}`)
    })
}

if (require.main === module) {
    testManual().catch(console.error)
}

module.exports = { testManual }
```

### 2. Standalone Server Testing: `scripts/test-server-standalone.js`
```javascript
#!/usr/bin/env node
const { spawn } = require('child_process')
const path = require('path')
const fs = require('fs')

async function testServerStandalone() {
    console.log('Building server for standalone testing...')
    
    const { buildServer } = require('./build-server')
    
    try {
        await buildServer()
    } catch (error) {
        console.error('Server build failed:', error)
        process.exit(1)
    }
    
    const serverPath = path.join(process.cwd(), 'out/server.js')
    
    // Verify bundle exists and check size
    if (!fs.existsSync(serverPath)) {
        console.error('Server bundle not found at:', serverPath)
        process.exit(1)
    }
    
    const stats = fs.statSync(serverPath)
    console.log(`Server bundle size: ${(stats.size / 1024).toFixed(2)} KB`)
    
    console.log('Testing server bundle dependencies...')
    
    // Test if bundle is self-contained
    try {
        require(serverPath)
        console.log('✅ Server bundle loads successfully')
    } catch (error) {
        console.error('❌ Server bundle has missing dependencies:', error.message)
        process.exit(1)
    }
    
    console.log('\nStarting LSP server in standalone mode...')
    console.log('The server will accept LSP requests via stdin/stdout')
    console.log('Send an LSP initialize request to test, or press Ctrl+C to stop\n')
    
    const server = spawn('node', [serverPath], {
        stdio: 'inherit'
    })
    
    server.on('error', (err) => {
        console.error('Failed to start server:', err)
        process.exit(1)
    })
    
    server.on('exit', (code) => {
        console.log(`\nServer exited with code ${code}`)
    })
    
    // Handle graceful shutdown
    process.on('SIGINT', () => {
        console.log('\nShutting down server...')
        server.kill('SIGINT')
    })
}

if (require.main === module) {
    testServerStandalone().catch(console.error)
}

module.exports = { testServerStandalone }
```

## Testing Workflow

### 1. Build Verification
```bash
# Clean build
npm run clean
npm run build:release

# Verify outputs exist and check sizes
ls -la out/extension.js out/server.js
```

### 2. Bundle Quality Checks
```bash
# Test server bundle is self-contained
npm run test:server

# Check bundle sizes (should be reasonable)
du -h out/*.js
```

### 3. Package Creation
```bash
# Create VSX package
npm run package

# Verify package contents
unzip -l *.vsix | grep -E "\.(js|json)$"
```

### 4. Manual Testing
```bash
# Test with compiled extension using test fixtures
npm run test:manual
```

### 5. Manual Testing Checklist

Use the comprehensive testing scenarios from [`docs/manual-testing.md`](./manual-testing.md) with the `test/fixtures` directory that contains many Gosu test files.

## Advantages of This Simplified Approach

1. **Faster builds** - Single-step bundling instead of multi-phase compilation
2. **Simpler maintenance** - No intermediate build artifacts to manage
3. **Better tree-shaking** - ESBuild can see the entire dependency graph
4. **Automatic TypeScript handling** - No need to configure separate TypeScript compilation
5. **Real-time type checking** - Can run `tsc --noEmit --watch` alongside bundle watching

## Questions Answered

### Q: Can ESBuild handle the monorepo TypeScript paths?

**Yes**, ESBuild supports TypeScript path mapping via the `tsconfig` option. It will:
- Read the `tsconfig.json` paths configuration
- Resolve `@gosu-lsp/*` imports correctly
- Bundle all local modules into the final output

### Q: Is it possible to run LSP server without VSCode?

**Yes**, using the `scripts/test-server-standalone.js` which:
- Builds and verifies the server bundle
- Tests that all dependencies are included
- Runs the server in standalone mode for manual LSP testing
- Provides bundle size and dependency verification

### Q: How to quickly confirm bundler did the right job?

1. **Bundle size check** - Final bundles should be significantly larger than entry points
2. **Dependency test** - `require()` test ensures all deps are bundled
3. **Runtime test** - Server starts without external `node_modules`
4. **VSCode test** - Extension loads and activates properly

## Implementation Priority

**Ready for immediate implementation** - this simplified approach is much cleaner and more maintainable than the original multi-phase plan.

The build system will be:
- ✅ Self-contained bundles for distribution
- ✅ Proper separation of extension/server
- ✅ Type safety with `tsc --noEmit`
- ✅ Manual testing capability
- ✅ Standalone server testing
- ✅ Efficient development workflow

## Next Steps

Switch to Code mode to implement these simplified build scripts and configurations.