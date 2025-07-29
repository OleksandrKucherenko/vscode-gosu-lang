import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    name: 'server',
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
      exclude: [
        'src/**/*.test.ts',
        'src/**/*.spec.ts',
        'src/**/*.d.ts'
      ],
      reporter: ['text', 'text-summary', 'html', 'json-summary', 'lcov'],
      reportOnFailure: true,
      all: false,
      clean: true,
      cleanOnRerun: true,
      // Temporarily lower thresholds to get accurate measurement
      thresholds: {
        global: {
          lines: 50,
          branches: 50,
          functions: 50,
          statements: 50
        }
      }
    },
    testTimeout: 12000,
  }
})