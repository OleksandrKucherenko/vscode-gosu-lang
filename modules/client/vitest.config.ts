import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig } from 'vitest/config'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const vscodeStubPath = path.resolve(__dirname, 'test/stubs/vscode.ts')

export default defineConfig({
  test: {
    name: 'client',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: [
      'node_modules/**',
      'dist/**',
      '**/*.d.ts'
    ],
    environment: 'jsdom', // Client needs DOM environment for VS Code APIs
    globals: true,
    watch: false,
    reporters: ['verbose', 'json'],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{js,ts}'],
      reporter: ['text', 'text-summary', 'html', 'json-summary', 'lcov'],
      reportOnFailure: true,
      // Client module standard coverage thresholds
      thresholds: {
        global: {
          lines: 85,
          branches: 85,
          functions: 85,
          statements: 85
        },
        perFile: true
      },
      watermarks: {
        statements: [85, 95],
        functions: [85, 95],
        branches: [85, 95],
        lines: [85, 95]
      }
    },
    // Client tests might need DOM setup time
    testTimeout: 8000,
  },
  resolve: {
    alias: {
      vscode: vscodeStubPath,
    },
  },
})
