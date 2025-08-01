import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    name: 'shared',
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: [
      'node_modules/**',
      'dist/**',
      '**/*.d.ts'
    ],
    globals: true,
    reporters: ['verbose', 'json'],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{js,ts}'],
      reporter: ['text', 'text-summary', 'html', 'json-summary', 'lcov'],
      reportOnFailure: true,
      // Shared module requires higher coverage (foundation code)
      thresholds: {
        global: {
          lines: 90,
          branches: 90,
          functions: 90,
          statements: 90
        },
        perFile: true
      },
      watermarks: {
        statements: [90, 95],
        functions: [90, 95],
        branches: [90, 95],
        lines: [90, 95]
      }
    }
  }
})