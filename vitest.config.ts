import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['**/*.test.ts', 'tests/**/*.test.ts'],
    exclude: ['node_modules/', 'out/', 'client/out/', 'server/out/'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'out/',
        'client/out/',
        'server/out/',
        '**/*.d.ts'
      ]
    }
  },
  resolve: {
    alias: {
      '@': __dirname,
      '@server': __dirname + '/server/src',
      '@test-workspace': __dirname + '/test-workspace'
    }
  }
});