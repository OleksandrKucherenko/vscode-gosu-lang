import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    name: 'server',
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: [
      'node_modules/**',
      'dist/**',
      '**/*.d.ts'
    ],
    globals: true,
    watch: false,
    reporters: ['verbose'],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{js,ts}'],
      reporter: ['text', 'text-summary', 'html', 'json-summary', 'lcov'],
      reportOnFailure: true,
      // Server module standard coverage thresholds
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
    // Server might need integration tests with longer timeouts
    testTimeout: 12000,
  }
})