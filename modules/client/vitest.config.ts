import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    name: 'client',
    include: ['src/**/*.{test,spec}.{js,ts}'],
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
  }
})