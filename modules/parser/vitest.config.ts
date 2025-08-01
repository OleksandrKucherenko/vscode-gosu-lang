import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    name: 'parser',
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: [
      'node_modules/**',
      'dist/**',
      '**/*.d.ts',
      '**/GosuLexer.ts',
      '**/GosuParser.ts',
      '**/GosuListener.ts',
      '**/GosuVisitor.ts',
      '**/*.g4'
    ],
    globals: true,
    watch: false,
    reporters: ['verbose', 'json'],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{js,ts}'],
      reporter: ['text', 'text-summary', 'html', 'json-summary', 'lcov'],
      reportOnFailure: true,
      exclude: [
        '**/GosuLexer.ts',
        '**/GosuParser.ts',
        '**/GosuListener.ts',
        '**/GosuVisitor.ts',
        '**/*.g4'
      ],
      // Parser-specific coverage settings (lower thresholds due to generated code)
      thresholds: {
        global: {
          lines: 80,
          branches: 80,
          functions: 80,
          statements: 80
        },
        perFile: true
      },
      watermarks: {
        statements: [80, 90],
        functions: [80, 90],
        branches: [80, 90],
        lines: [80, 90]
      }
    },
    // Parser may need more time for complex parsing tests
    testTimeout: 15000,
  }
})