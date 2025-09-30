import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mkdirSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { resolveFilePaths } from '../../modules/formatter/src/cli/glob.js';

/**
 * Integration test for glob patterns (T015)
 * 
 * Scenario:
 * - Given: Directory with nested .gs files
 * - When: Run `gosu-format src/**\/*.gs`
 * - Then: All matching files found and formatted
 */

describe('CLI Glob Patterns Integration', () => {
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

  it('should expand ** glob pattern recursively', async () => {
    // Given: Nested directory structure
    const srcDir = join(testDir, 'src');
    const subDir = join(srcDir, 'subdir');
    const deepDir = join(subDir, 'deep');
    
    mkdirSync(deepDir, { recursive: true });
    
    writeFileSync(join(srcDir, 'test1.gs'), 'class Test1 {}');
    writeFileSync(join(subDir, 'test2.gs'), 'class Test2 {}');
    writeFileSync(join(deepDir, 'test3.gs'), 'class Test3 {}');

    // When: Run with ** pattern
    const pattern = join(srcDir, '**/*.gs');
    const result = await runGlobExpansion(pattern);

    // Then: All files found
    expect(result.filesFound).toBe(3);
    expect(result.files).toContain(join(srcDir, 'test1.gs'));
    expect(result.files).toContain(join(subDir, 'test2.gs'));
    expect(result.files).toContain(join(deepDir, 'test3.gs'));
  });

  it('should support * wildcard pattern', async () => {
    // Given: Files in directory
    mkdirSync(join(testDir, 'src'), { recursive: true });
    writeFileSync(join(testDir, 'src', 'test1.gs'), 'class Test1 {}');
    writeFileSync(join(testDir, 'src', 'test2.gs'), 'class Test2 {}');
    writeFileSync(join(testDir, 'src', 'test.txt'), 'not a gosu file');

    // When: Run with * pattern
    const pattern = join(testDir, 'src/*.gs');
    const result = await runGlobExpansion(pattern);

    // Then: Only .gs files matched
    expect(result.filesFound).toBe(2);
    expect(result.files.every((f: string) => f.endsWith('.gs'))).toBe(true);
  });

  it('should support ? wildcard pattern', async () => {
    // Given: Files with similar names
    mkdirSync(join(testDir, 'src'), { recursive: true });
    writeFileSync(join(testDir, 'src', 'test1.gs'), 'class Test1 {}');
    writeFileSync(join(testDir, 'src', 'test2.gs'), 'class Test2 {}');
    writeFileSync(join(testDir, 'src', 'test10.gs'), 'class Test10 {}');

    // When: Run with ? pattern
    const pattern = join(testDir, 'src/test?.gs');
    const result = await runGlobExpansion(pattern);

    // Then: Only single-digit matches
    expect(result.filesFound).toBe(2);
    expect(result.files).toContain(join(testDir, 'src', 'test1.gs'));
    expect(result.files).toContain(join(testDir, 'src', 'test2.gs'));
    expect(result.files).not.toContain(join(testDir, 'src', 'test10.gs'));
  });

  it('should support [abc] character class pattern', async () => {
    // Given: Files with different prefixes
    mkdirSync(join(testDir, 'src'), { recursive: true });
    writeFileSync(join(testDir, 'src', 'atest.gs'), 'class ATest {}');
    writeFileSync(join(testDir, 'src', 'btest.gs'), 'class BTest {}');
    writeFileSync(join(testDir, 'src', 'ctest.gs'), 'class CTest {}');
    writeFileSync(join(testDir, 'src', 'dtest.gs'), 'class DTest {}');

    // When: Run with [abc] pattern
    const pattern = join(testDir, 'src/[abc]test.gs');
    const result = await runGlobExpansion(pattern);

    // Then: Only a, b, c matched
    expect(result.filesFound).toBe(3);
    expect(result.files).not.toContain(join(testDir, 'src', 'dtest.gs'));
  });

  it('should respect .gitignore patterns', async () => {
    // Given: Files including ignored directories
    const srcDir = join(testDir, 'src');
    const nodeModules = join(testDir, 'node_modules');
    
    mkdirSync(srcDir, { recursive: true });
    mkdirSync(nodeModules, { recursive: true });
    
    writeFileSync(join(srcDir, 'test.gs'), 'class Test {}');
    writeFileSync(join(nodeModules, 'lib.gs'), 'class Lib {}');
    writeFileSync(join(testDir, '.gitignore'), 'node_modules/');

    // When: Run with ** pattern
    const pattern = join(testDir, '**/*.gs');
    const result = await runGlobExpansion(pattern);

    // Then: node_modules excluded
    expect(result.files).toContain(join(srcDir, 'test.gs'));
    expect(result.files).not.toContain(join(nodeModules, 'lib.gs'));
  });

  it('should filter for Gosu file extensions (.gs, .gsx, .gst, .gsp)', async () => {
    // Given: Mixed file types
    mkdirSync(join(testDir, 'src'), { recursive: true });
    writeFileSync(join(testDir, 'src', 'class.gs'), 'class Test {}');
    writeFileSync(join(testDir, 'src', 'enhancement.gsx'), 'enhancement Test {}');
    writeFileSync(join(testDir, 'src', 'template.gst'), 'template Test {}');
    writeFileSync(join(testDir, 'src', 'program.gsp'), 'program Test {}');
    writeFileSync(join(testDir, 'src', 'other.java'), 'class Other {}');

    // When: Run with * pattern
    const pattern = join(testDir, 'src/*');
    const result = await runGlobExpansion(pattern);

    // Then: Only Gosu files included
    expect(result.filesFound).toBe(4);
    expect(result.files.every((f: string) => 
      f.endsWith('.gs') || f.endsWith('.gsx') || f.endsWith('.gst') || f.endsWith('.gsp')
    )).toBe(true);
  });

  it('should return absolute paths', async () => {
    // Given: Files in directory
    mkdirSync(join(testDir, 'src'), { recursive: true });
    writeFileSync(join(testDir, 'src', 'test.gs'), 'class Test {}');

    // When: Run with pattern
    const pattern = join(testDir, 'src/*.gs');
    const result = await runGlobExpansion(pattern);

    // Then: Absolute paths returned
    for (const file of result.files) {
      expect(file.startsWith('/')).toBe(true);
    }
  });

  it('should handle empty expansion (no matches)', async () => {
    // Given: Directory with no matching files
    mkdirSync(join(testDir, 'src'), { recursive: true });
    writeFileSync(join(testDir, 'src', 'test.txt'), 'not a gosu file');

    // When: Run with pattern
    const pattern = join(testDir, 'src/*.gs');
    const result = await runGlobExpansion(pattern);

    // Then: Empty result
    expect(result.filesFound).toBe(0);
    expect(result.files).toHaveLength(0);
  });

  it('should support multiple patterns', async () => {
    // Given: Files in different directories
    mkdirSync(join(testDir, 'src'), { recursive: true });
    mkdirSync(join(testDir, 'test'), { recursive: true });
    
    writeFileSync(join(testDir, 'src', 'main.gs'), 'class Main {}');
    writeFileSync(join(testDir, 'test', 'test.gs'), 'class Test {}');

    // When: Run with multiple patterns
    const patterns = [
      join(testDir, 'src/*.gs'),
      join(testDir, 'test/*.gs')
    ];
    const result = await runGlobExpansion(patterns);

    // Then: All files from both patterns found
    expect(result.filesFound).toBe(2);
    expect(result.files).toContain(join(testDir, 'src', 'main.gs'));
    expect(result.files).toContain(join(testDir, 'test', 'test.gs'));
  });
});

// Helper function using real glob implementation
async function runGlobExpansion(pattern: string | string[]): Promise<{
  filesFound: number;
  files: string[];
}> {
  const patterns = Array.isArray(pattern) ? pattern : [pattern];
  const files = await resolveFilePaths(patterns, { cwd: process.cwd() });
  return {
    filesFound: files.length,
    files
  };
}
