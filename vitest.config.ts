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

    // No coverage at root level to avoid duplicates - modules handle their own coverage
    
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