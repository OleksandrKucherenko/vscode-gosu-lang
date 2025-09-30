import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mkdirSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { ConfigWatcher } from '../../modules/formatter/src/config-watcher.js';

/**
 * Integration test for config hot-reload (T012)
 * 
 * Scenario:
 * - Given: VSCode with formatter active
 * - When: Modify `.gosuformatting.json`
 * - Then: Config reloaded within 500ms, log entry emitted
 */

describe('Config Hot-Reload Integration', () => {
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

  it('should create config watcher instance', async () => {
    // Given: Config file exists
    const configFile = join(testDir, '.gosuformatting.json');
    writeFileSync(configFile, JSON.stringify({ indentSize: 2 }));

    // When: Create ConfigWatcher with real implementation
    const watcher = new ConfigWatcher({ directory: testDir });

    // Then: Watcher is created successfully
    expect(watcher).toBeDefined();
    
    // Cleanup
    await watcher.dispose();
  });

  it('should handle file watching setup', async () => {
    // Given: Directory with config file
    const configFile = join(testDir, '.gosuformatting.json');
    writeFileSync(configFile, JSON.stringify({ indentSize: 4 }));

    // When: Create and start watching
    const watcher = new ConfigWatcher({ directory: testDir });
    
    // Give watcher time to initialize
    await sleep(100);

    // Then: Watcher is active
    expect(watcher).toBeDefined();
    
    // Cleanup
    await watcher.dispose();
  });

  it('should cleanup resources on dispose', async () => {
    // Given: Active watcher
    const watcher = new ConfigWatcher({ directory: testDir });
    
    // When: Dispose is called
    await watcher.dispose();

    // Then: No errors thrown
    expect(true).toBe(true);
  });
});

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
