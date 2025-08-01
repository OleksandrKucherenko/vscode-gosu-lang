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