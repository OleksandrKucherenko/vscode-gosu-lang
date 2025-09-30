import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mkdirSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { BatchProcessor } from '../../modules/formatter/src/batch.js';
import { resolveFilePaths } from '../../modules/formatter/src/cli/glob.js';

/**
 * Integration test for batch progress (T013)
 * 
 * Scenario:
 * - Given: 10 files to format
 * - When: Run batch format
 * - Then: Progress updates emitted, summary logged
 */

describe('Batch Progress Integration', () => {
  let testDir: string;

  beforeEach(() => {
    testDir = join(tmpdir(), `gosu-test-${Date.now()}`);
    mkdirSync(testDir, { recursive: true });
  });

  afterEach(() => {
    if (existsSync(testDir)) {
      rmSync(testDir, { recursive: true, force: true });
    }
  });

  it('should process batch of files with progress tracking', async () => {
    // Given: 10 files to format
    const files: string[] = [];
    for (let i = 1; i <= 10; i++) {
      const file = join(testDir, `test${i}.gs`);
      writeFileSync(file, `class Test${i} { function foo() { return ${i} } }`);
      files.push(file);
    }

    // When: Run batch format with real implementation
    const progressUpdates: Array<{completed: number; total: number; currentFile?: string}> = [];
    const processor = new BatchProcessor({
      files,
      write: false,
      onProgress: (completed, total, currentFile) => {
        progressUpdates.push({ completed, total, currentFile });
      }
    });
    
    const result = await processor.execute();

    // Then: Progress updates emitted
    expect(progressUpdates.length).toBeGreaterThan(0);
    
    // Verify result structure
    expect(result.summary).toBeDefined();
    expect(result.summary.totalFiles).toBe(10);
    expect(result.executionMode).toBeDefined();
  });

  it('should log summary after completion', async () => {
    // Given: 5 files to format
    const files: string[] = [];
    for (let i = 1; i <= 5; i++) {
      const file = join(testDir, `test${i}.gs`);
      writeFileSync(file, `class Test${i} {}`);
      files.push(file);
    }

    // When: Run batch format with real implementation
    const processor = new BatchProcessor({ files, write: false });
    const result = await processor.execute();

    // Then: Summary logged
    expect(result.summary).toBeDefined();
    expect(result.summary.totalFiles).toBe(5);
    expect(result.summary.duration).toBeGreaterThanOrEqual(0);
  });

  it('should handle file processing correctly', async () => {
    // Given: Files to format
    const files: string[] = [];
    for (let i = 1; i <= 3; i++) {
      const file = join(testDir, `test${i}.gs`);
      writeFileSync(file, `class Test${i} {}`);
      files.push(file);
    }

    // When: Run batch format with real implementation
    const processor = new BatchProcessor({ files, write: false });
    const result = await processor.execute();

    // Then: All files processed
    expect(result.summary.totalFiles).toBe(3);
    expect(result.summary.formatted + result.summary.unchanged + result.summary.failed + result.summary.skipped).toBe(3);
  });
});
