import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    name: { label: 'formatter', color: 'cyan' },
    environment: 'node',
    include: ['src/**/*.{test,spec}.ts'],
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
      include: ['src/**/*.ts'],
      exclude: ['src/**/*.{test,spec}.ts'],
      reporter: ['text', 'text-summary', 'html', 'json-summary', 'lcov'],
      reportOnFailure: true,
      thresholds: {
        global: {
          lines: 60,
          branches: 50,
          functions: 60,
          statements: 60,
        },
      },
    },
    testTimeout: 8000,
  },
})
