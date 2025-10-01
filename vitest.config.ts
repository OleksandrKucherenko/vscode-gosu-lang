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
    
    // Projects configuration for monorepo - coverage handled at module level
    projects: [
      './modules/*',
      {
        extends: true,
        test: {
          name: {label: 'syntax', color: 'magenta' }
        }
      }
    ],

    // Coverage configuration for monorepo
    coverage: {
      provider: 'v8',
      reporter: ['text', 'text-summary', 'html', 'json-summary', 'lcov'],
      reportOnFailure: true,
      exclude: [
        // Auto-generated coverage reports
        '**/coverage/**',
        '**/lcov-report/**',
        
        // Build outputs and dependencies
        'node_modules/**',
        'out/**',
        'dist/**',
        '**/*.d.ts',
        
        // Generated parser files
        '**/GosuLexer.ts',
        '**/GosuParser.ts',
        '**/GosuListener.ts',
        '**/GosuVisitor.ts',
        '**/*.g4',
        
        // Build and tooling scripts
        'scripts/**',
        '**/build-*.js',
        '**/check-coverage.js',
        '**/test-*.js',
        
        // Test files and configuration
        '**/*.{test,spec}.{js,ts}',
        '**/__tests__/**',
        '**/test/**',
        '**/vitest.config.ts',
        '**/vitest.*.config.ts',
        
        // Type definition files
        '**/types.ts',
        '**/nodes.ts',
        
        // Root entry points (thin wrappers)
        'index.js',
        'src/extension.ts',
        'src/server.ts'
      ]
    },
    
    // Test execution settings
    testTimeout: 10000,
    hookTimeout: 10000,
    watch: false,
    
    // Reporter settings
    reporters: ['verbose'],
    
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