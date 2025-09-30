import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mkdirSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { executeShowConfigCommand, type ShowConfigResult } from '../../modules/formatter/src/cli/show-config.js';

/**
 * Integration test for CLI show-config (T011)
 * 
 * Scenario:
 * - Given: Project with `.gosuformatting.json`
 * - When: Run `gosu-format --show-config`
 * - Then: JSON output with config and sources array
 */

describe('CLI Show Config Integration', () => {
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

  it('should display resolved configuration with sources', async () => {
    // Given: Project with .gosuformatting.json
    const configFile = join(testDir, '.gosuformatting.json');
    writeFileSync(configFile, JSON.stringify({
      indentSize: 4,
      maxLineLength: 120
    }, null, 2));

    // When: Run show-config with real implementation
    const result = await executeShowConfigCommand({ cwd: testDir });

    // Then: JSON output with config and sources
    expect(result.exitCode).toBe(0);
    expect(result.output).toBeDefined();
    
    const config = JSON.parse(result.output);
    expect(config.config).toBeDefined();
    expect(config.config.indentSize).toBe(4);
    expect(config.config.maxLineLength).toBe(120);
    
    expect(config.sources).toBeDefined();
    expect(Array.isArray(config.sources)).toBe(true);
    expect(config.sources.length).toBeGreaterThan(0);
    
    expect(config.resolution).toBeDefined();
    expect(['cascade', 'explicit', 'default']).toContain(config.resolution);
  });

  it('should show default configuration when no config file exists', async () => {
    // Given: Directory with no config file
    // When: Run show-config with real implementation
    const result = await executeShowConfigCommand({ cwd: testDir });

    // Then: Default configuration displayed
    expect(result.exitCode).toBe(0);
    const config = JSON.parse(result.output);
    expect(config.resolution).toBe('default');
    expect(config.sources).toHaveLength(1);
    expect(config.sources[0].type).toBe('default');
  });

  it('should include source metadata (path, type, loadedAt)', async () => {
    // Given: Project with config
    const configFile = join(testDir, '.gosuformatting.json');
    writeFileSync(configFile, JSON.stringify({ indentSize: 2 }));

    // When: Run show-config with real implementation
    const result = await executeShowConfigCommand({ cwd: testDir });

    // Then: Sources include metadata
    const config = JSON.parse(result.output);
    for (const source of config.sources) {
      expect(source.path).toBeDefined();
      expect(source.type).toBeDefined();
      expect(source.loadedAt).toBeDefined();
      expect(source.values).toBeDefined();
    }
  });

  it('should support JSON5 and JSONC config files', async () => {
    // Given: Project with .gosuformatting.json5
    const configFile = join(testDir, '.gosuformatting.json5');
    writeFileSync(configFile, `{
      // Comment
      indentSize: 4,
      maxLineLength: 120,
    }`);

    // When: Run show-config with real implementation
    const result = await executeShowConfigCommand({ cwd: testDir });

    // Then: Config parsed correctly
    expect(result.exitCode).toBe(0);
    const config = JSON.parse(result.output);
    expect(config.config.indentSize).toBe(4);
  });
});

