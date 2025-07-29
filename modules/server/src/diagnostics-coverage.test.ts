import { describe, it, expect } from 'vitest';
import { GosuDiagnosticsProvider, createDiagnosticsProvider } from './diagnostics';

describe('GosuDiagnosticsProvider Coverage Tests', () => {
  describe('Cache statistics method', () => {
    it('should return cache statistics', () => {
      // Given: a diagnostics provider
      const provider = createDiagnosticsProvider();
      
      // When: getting cache stats
      const stats = provider.getCacheStats();
      
      // Then: should return valid statistics
      expect(stats).toBeDefined();
      expect(stats.size).toBe(0); // Empty cache initially
      expect(stats.maxSize).toBe(100); // Default cache size
      expect(typeof stats.size).toBe('number');
      expect(typeof stats.maxSize).toBe('number');
    });

    it('should return correct cache statistics with custom config', () => {
      // Given: a diagnostics provider with custom cache size
      const provider = createDiagnosticsProvider({ cacheSize: 50 });
      
      // When: getting cache stats
      const stats = provider.getCacheStats();
      
      // Then: should return custom cache size
      expect(stats.maxSize).toBe(50);
      expect(stats.size).toBe(0);
    });
  });

  describe('Configuration update method', () => {
    it('should update configuration', () => {
      // Given: a diagnostics provider with default config
      const provider = createDiagnosticsProvider();
      
      // When: updating configuration
      provider.updateConfig({
        maxDiagnostics: 50,
        enableCaching: false,
        cacheSize: 25
      });
      
      // Then: cache stats should reflect new cache size
      const stats = provider.getCacheStats();
      expect(stats.maxSize).toBe(25);
    });

    it('should partially update configuration', () => {
      // Given: a diagnostics provider
      const provider = createDiagnosticsProvider({ cacheSize: 200 });
      
      // When: partially updating config (only maxDiagnostics)
      provider.updateConfig({
        maxDiagnostics: 75
      });
      
      // Then: cache size should remain unchanged
      const stats = provider.getCacheStats();
      expect(stats.maxSize).toBe(200); // Original value preserved
    });

    it('should handle empty configuration update', () => {
      // Given: a diagnostics provider
      const provider = createDiagnosticsProvider();
      const originalStats = provider.getCacheStats();
      
      // When: updating with empty config
      provider.updateConfig({});
      
      // Then: configuration should remain unchanged
      const newStats = provider.getCacheStats();
      expect(newStats.maxSize).toBe(originalStats.maxSize);
    });
  });
});