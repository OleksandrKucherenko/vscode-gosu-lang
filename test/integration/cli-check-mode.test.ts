import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mkdirSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

/**
 * Integration test for CLI check mode (T010)
 * 
 * Scenario:
 * - Given: Directory with 3 files (1 formatted, 2 unformatted)
 * - When: Run `gosu-format --check src/`
 * - Then: Exit code 1, lists 2 files needing formatting, no files modified
 */

describe('CLI Check Mode Integration', () => {
  let testDir: string;

  beforeEach(() => {
    // Create temporary test directory
    testDir = join(tmpdir(), `gosu-test-${Date.now()}`);
    mkdirSync(testDir, { recursive: true });
  });

  afterEach(() => {
    // Cleanup
    if (existsSync(testDir)) {
      rmSync(testDir, { recursive: true, force: true });
    }
  });

  it('should detect unformatted files without modifying them', async () => {
    // Given: Directory with 3 files (1 formatted, 2 unformatted)
    const formattedFile = join(testDir, 'formatted.gs');
    const unformatted1 = join(testDir, 'unformatted1.gs');
    const unformatted2 = join(testDir, 'unformatted2.gs');

    writeFileSync(formattedFile, 'class FormattedClass {\n  function foo() {\n    return "test"\n  }\n}\n');
    writeFileSync(unformatted1, 'class   BadFormatting{function    foo(  ){return   "test"}}');
    writeFileSync(unformatted2, 'class   AnotherBad{property   Foo:String}');

    // When: Run check mode (mock implementation)
    const result = await mockCheckMode(testDir);

    // Then: Exit code 1, lists 2 files needing formatting
    expect(result.exitCode).toBe(1);
    expect(result.unformattedFiles).toHaveLength(2);
    expect(result.unformattedFiles).toContain(unformatted1);
    expect(result.unformattedFiles).toContain(unformatted2);

    // Verify files were not modified
    const unformatted1Content = require('fs').readFileSync(unformatted1, 'utf-8');
    expect(unformatted1Content).toContain('BadFormatting{function');
  });

  it('should return exit code 0 when all files are formatted', async () => {
    // Given: Directory with all formatted files
    const file1 = join(testDir, 'test1.gs');
    const file2 = join(testDir, 'test2.gs');

    writeFileSync(file1, 'class Test1 {\n  function foo() {\n    return "test"\n  }\n}\n');
    writeFileSync(file2, 'class Test2 {\n  function bar() {\n    return "test"\n  }\n}\n');

    // When: Run check mode
    const result = await mockCheckMode(testDir);

    // Then: Exit code 0, no unformatted files
    expect(result.exitCode).toBe(0);
    expect(result.unformattedFiles).toHaveLength(0);
  });

  it('should output unformatted files to stderr', async () => {
    // Given: Directory with unformatted file
    const unformatted = join(testDir, 'unformatted.gs');
    writeFileSync(unformatted, 'class   Bad{function   foo(){}}');

    // When: Run check mode
    const result = await mockCheckMode(testDir);

    // Then: Unformatted files listed in stderr
    expect(result.stderr).toContain('unformatted.gs');
    expect(result.stderr).toContain('need formatting');
  });
});

// Mock implementation - will be replaced with actual CLI execution
async function mockCheckMode(directory: string): Promise<{
  exitCode: number;
  unformattedFiles: string[];
  stderr: string;
}> {
  // This is a placeholder that will fail until the actual implementation exists
  // The test should FAIL initially (TDD red phase)
  throw new Error('CheckCommand not implemented yet - this test should fail');
}
