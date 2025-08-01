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