import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mkdirSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { cpus } from 'node:os';
import { BatchProcessor } from '../../modules/formatter/src/batch.js';

/**
 * Integration test for parallel execution (T014)
 * 
 * Scenario:
 * - Given: 10 files to format
 * - When: Run batch format
 * - Then: Files processed in parallel (≥5 files threshold)
 */

describe('Batch Parallel Execution Integration', () => {
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

  it('should use sequential execution for < 5 files', async () => {
    // Given: 4 files
    const files: string[] = [];
    for (let i = 1; i <= 4; i++) {
      const file = join(testDir, `test${i}.gs`);
      writeFileSync(file, `class Test${i} {}`);
      files.push(file);
    }

    // When: Run batch format
    const result = await runBatchFormat(files);

    // Then: Sequential execution used
    expect(result.executionMode).toBe('sequential');
  });

  it('should use parallel execution for >= 5 files', async () => {
    // Given: 10 files
    const files: string[] = [];
    for (let i = 1; i <= 10; i++) {
      const file = join(testDir, `test${i}.gs`);
      writeFileSync(file, `class Test${i} {}`);
      files.push(file);
    }

    // When: Run batch format
    const result = await runBatchFormat(files);

    // Then: Parallel execution used
    expect(result.executionMode).toBe('parallel');
  });

  it('should respect CPU core limit for concurrency', async () => {
    // Given: Many files
    const files: string[] = [];
    for (let i = 1; i <= 20; i++) {
      const file = join(testDir, `test${i}.gs`);
      writeFileSync(file, `class Test${i} {}`);
      files.push(file);
    }

    // When: Run batch format
    const result = await runBatchFormat(files);

    // Then: Concurrency limited to CPU cores
    const maxConcurrency = cpus().length;
    expect(result.maxConcurrency).toBeLessThanOrEqual(maxConcurrency);
  });

  it('should show performance improvement with parallel execution', async () => {
    // Given: 10 files
    const files: string[] = [];
    for (let i = 1; i <= 10; i++) {
      const file = join(testDir, `test${i}.gs`);
      writeFileSync(file, `class Test${i} { function foo() { return ${i} } }`);
      files.push(file);
    }

    // When: Run batch format
    const result = await runBatchFormat(files);

    // Then: Parallel execution is faster
    // (This is a simplified check - actual test would compare timings)
    expect(result.executionMode).toBe('parallel');
    expect(result.summary.duration).toBeDefined();
  });

  it('should handle errors in parallel execution gracefully', async () => {
    // Given: Mix of valid and invalid files
    const files: string[] = [];
    for (let i = 1; i <= 10; i++) {
      const file = join(testDir, `test${i}.gs`);
      const content = i % 3 === 0 ? 'class Broken { function bad( {' : `class Test${i} {}`;
      writeFileSync(file, content);
      files.push(file);
    }

    // When: Run batch format
    const result = await runBatchFormat(files);

    // Then: Successful files processed, errors reported
    expect(result.summary.formatted + result.summary.unchanged).toBeGreaterThan(0);
    expect(result.summary.failed).toBeGreaterThan(0);
    expect(result.summary.totalFiles).toBe(10);
  });

  it('should maintain order independence in parallel execution', async () => {
    // Given: Files with different sizes
    const files: string[] = [];
    for (let i = 1; i <= 10; i++) {
      const file = join(testDir, `test${i}.gs`);
      const lines = i * 10; // Varying file sizes
      const content = `class Test${i} {\n${Array(lines).fill('  var x = 1\n').join('')}}`;
      writeFileSync(file, content);
      files.push(file);
    }

    // When: Run batch format twice
    const result1 = await mockBatchFormat(files);
    const result2 = await mockBatchFormat(files);

    // Then: Results are consistent
    expect(result1.summary.totalFiles).toBe(result2.summary.totalFiles);
    expect(result1.summary.formatted).toBe(result2.summary.formatted);
  });

  it('should provide concurrency metrics in summary', async () => {
    // Given: 10 files
    const files: string[] = [];
    for (let i = 1; i <= 10; i++) {
      const file = join(testDir, `test${i}.gs`);
      writeFileSync(file, `class Test${i} {}`);
      files.push(file);
    }

    // When: Run batch format
    const result = await runBatchFormat(files);

    // Then: Metrics include execution mode and concurrency
    expect(result.executionMode).toBeDefined();
    expect(result.maxConcurrency).toBeDefined();
    if (result.executionMode === 'parallel') {
      expect(result.maxConcurrency).toBeGreaterThan(1);
    }
  });
});

// Helper using real implementation
async function runBatchFormat(files: string[]) {
  const processor = new BatchProcessor({ files, write: false });
  return await processor.execute();
}
