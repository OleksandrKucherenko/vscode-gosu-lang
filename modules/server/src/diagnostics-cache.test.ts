import { describe, it, expect } from 'vitest';
import { createDiagnosticsProvider } from './diagnostics';
import { TextDocument } from 'vscode-languageserver-textdocument';

describe('GosuDiagnosticsProvider LRU Cache Coverage', () => {
  describe('LRU cache behavior', () => {
    it('should evict oldest entry when cache size exceeds limit', () => {
      // Given: a diagnostics provider with small cache size
      const provider = createDiagnosticsProvider({ cacheSize: 2 });
      
      // Create test documents
      const doc1 = TextDocument.create('file:///test1.gs', 'gosu', 1, 'package test\nclass Test1 {}');
      const doc2 = TextDocument.create('file:///test2.gs', 'gosu', 1, 'package test\nclass Test2 {}');
      const doc3 = TextDocument.create('file:///test3.gs', 'gosu', 1, 'package test\nclass Test3 {}');
      
      // When: validating documents to fill cache beyond limit
      provider.validateDocument(doc1);
      provider.validateDocument(doc2);
      
      // Cache should be at capacity (2)
      let stats = provider.getCacheStats();
      expect(stats.size).toBe(2);
      
      // Adding third document should trigger LRU eviction (lines 159-163)
      provider.validateDocument(doc3);
      
      // Then: cache size should remain at limit
      stats = provider.getCacheStats();
      expect(stats.size).toBe(2);
      expect(stats.maxSize).toBe(2);
    });

    it('should handle multiple cache evictions', () => {
      // Given: a diagnostics provider with cache size of 1
      const provider = createDiagnosticsProvider({ cacheSize: 1 });
      
      // Create multiple test documents
      const docs = Array.from({ length: 5 }, (_, i) => 
        TextDocument.create(`file:///test${i}.gs`, 'gosu', 1, `package test\nclass Test${i} {}`)
      );
      
      // When: validating multiple documents to trigger multiple evictions
      docs.forEach(doc => provider.validateDocument(doc));
      
      // Then: cache should only contain the last document
      const stats = provider.getCacheStats();
      expect(stats.size).toBe(1);
      expect(stats.maxSize).toBe(1);
    });
  });

  describe('Clear entire cache coverage', () => {
    it('should clear entire cache when no URI specified', () => {
      // Given: a diagnostics provider with cached documents
      const provider = createDiagnosticsProvider();
      
      // Create and validate test documents
      const doc1 = TextDocument.create('file:///test1.gs', 'gosu', 1, 'package test\nclass Test1 {}');
      const doc2 = TextDocument.create('file:///test2.gs', 'gosu', 1, 'package test\nclass Test2 {}');
      
      provider.validateDocument(doc1);
      provider.validateDocument(doc2);
      
      // Verify cache has content
      let stats = provider.getCacheStats();
      expect(stats.size).toBe(2);
      
      // When: clearing entire cache (no URI parameter - line 177-179)
      provider.clearCache();
      
      // Then: cache should be empty
      stats = provider.getCacheStats();
      expect(stats.size).toBe(0);
    });

    it('should clear entire cache with undefined parameter', () => {
      // Given: a diagnostics provider with cached documents  
      const provider = createDiagnosticsProvider();
      
      const doc = TextDocument.create('file:///test.gs', 'gosu', 1, 'package test\nclass Test {}');
      provider.validateDocument(doc);
      
      expect(provider.getCacheStats().size).toBe(1);
      
      // When: calling clearCache with undefined (covers else branch)
      provider.clearCache(undefined);
      
      // Then: entire cache should be cleared
      expect(provider.getCacheStats().size).toBe(0);
    });
  });
});