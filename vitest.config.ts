import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // Test environment configuration
    environment: 'node',
    
    // Test file patterns
    include: [
      'src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'
    ],
    
    // Exclude patterns
    exclude: [
      'node_modules/**',
      'out/**',
      'dist/**',
      '**/*.d.ts',
      '**/GosuLexer.ts',
      '**/GosuParser.ts',
      '**/*.g4',
      'coverage/**'
    ],
    
    // Global test configuration
    globals: true,
    
    // Projects configuration for monorepo
    projects: [
      './modules/shared/vitest.config.ts',
      './modules/parser/vitest.config.ts',
      './modules/server/vitest.config.ts',
      './modules/client/vitest.config.ts'
    ],
    
    // Coverage configuration - basic settings
    coverage: {
      provider: 'v8',
      reporter: ['text', 'text-summary', 'html', 'json-summary', 'lcov'],
      exclude: [
        'node_modules/**',
        'out/**',
        'dist/**',
        '**/*.d.ts',
        '**/*.test.{js,ts}',
        '**/*.spec.{js,ts}',
        '**/test/**',
        '**/tests/**',
        '**/__tests__/**',
        '**/GosuLexer.ts',
        '**/GosuParser.ts',
        '**/GosuListener.ts',
        '**/GosuVisitor.ts',
        '**/*.g4',
        '**/vitest.config.ts',
        '**/vite.config.ts',
        '**/coverage/**'
      ],
      all: true,
      clean: true,
      cleanOnRerun: true,
      reportOnFailure: true
    },
    
    // Test execution settings
    testTimeout: 10000,
    hookTimeout: 10000,
    watch: false,
    
    // Reporter settings
    reporters: ['verbose', 'json'],
    
    // Mock settings
    clearMocks: true,
    restoreMocks: true
  },
  
  // TypeScript configuration for tests
  esbuild: {
    target: 'node20'
  },
  
  // Define configuration for different environments
  define: {
    __TEST__: true
  }
})