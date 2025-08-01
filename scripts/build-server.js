#!/usr/bin/env node

// Script to build the LSP server using esbuild
const { build } = require("esbuild")
const { dependencies } = require("../modules/server/package.json")

// External dependencies that should not be bundled
const externalDependencies = [
    // VS Code dependencies should be external
    "vscode",
    "vscode-languageserver",
    "vscode-languageserver-textdocument",
    "vscode-languageserver-types",

    // Other dependencies that should remain external
    "debug",

    // Monorepo packages should be external since they're bundled separately
    "@gosu-lsp/parser",
    "@gosu-lsp/shared"
]

async function buildServer() {
    try {
        console.log("Building LSP server...")

        await build({
            entryPoints: ["src/server.ts", "src/extension.ts"],
            bundle: true,
            outdir: "out",
            platform: "node",
            format: "cjs",
            external: externalDependencies,
            sourcemap: true,
            minify: false, // Keep readable for debugging
            treeShaking: true,
            define: {
                "process.env.NODE_ENV": JSON.stringify("production")
            },
            logLevel: "info",
            // Handle TypeScript
            loader: {
                ".ts": "ts"
            }
        })

        console.log("LSP server built successfully!")
    } catch (error) {
        console.error("Build failed:", error)
        process.exit(1)
    }
}

// Run the build if this script is executed directly
if (require.main === module) {
    buildServer()
}

module.exports = { buildServer }