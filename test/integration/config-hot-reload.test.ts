import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mkdirSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

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

  it('should detect config file changes within 500ms', async () => {
    // Given: Config watcher active
    const configFile = join(testDir, '.gosuformatting.json');
    writeFileSync(configFile, JSON.stringify({ indentSize: 2 }));

    const watcher = await mockConfigWatcher(testDir);
    const reloadPromise = waitForReload(watcher);

    // When: Modify config file
    const startTime = Date.now();
    writeFileSync(configFile, JSON.stringify({ indentSize: 4 }));

    // Then: Reload detected within 500ms
    const reloadEvent = await reloadPromise;
    const elapsed = Date.now() - startTime;

    expect(elapsed).toBeLessThan(500);
    expect(reloadEvent.detected).toBe(true);
    expect(reloadEvent.newConfig.indentSize).toBe(4);
  });

  it('should emit log entry on reload', async () => {
    // Given: Config watcher with logging
    const configFile = join(testDir, '.gosuformatting.json');
    writeFileSync(configFile, JSON.stringify({ indentSize: 2 }));

    const watcher = await mockConfigWatcher(testDir);
    const logPromise = waitForLogEntry(watcher);

    // When: Modify config
    writeFileSync(configFile, JSON.stringify({ indentSize: 4 }));

    // Then: Log entry emitted
    const logEntry = await logPromise;
    expect(logEntry.level).toBe('info');
    expect(logEntry.source).toBe('config-loader');
    expect(logEntry.message).toContain('Configuration reloaded');
  });

  it('should debounce rapid changes (300ms)', async () => {
    // Given: Config watcher active
    const configFile = join(testDir, '.gosuformatting.json');
    writeFileSync(configFile, JSON.stringify({ indentSize: 2 }));

    const watcher = await mockConfigWatcher(testDir);
    let reloadCount = 0;
    watcher.onReload(() => reloadCount++);

    // When: Multiple rapid changes
    writeFileSync(configFile, JSON.stringify({ indentSize: 3 }));
    await sleep(50);
    writeFileSync(configFile, JSON.stringify({ indentSize: 4 }));
    await sleep(50);
    writeFileSync(configFile, JSON.stringify({ indentSize: 5 }));

    // Wait for debounce period
    await sleep(400);

    // Then: Only one reload triggered
    expect(reloadCount).toBe(1);
  });

  it('should handle invalid config gracefully', async () => {
    // Given: Config watcher active
    const configFile = join(testDir, '.gosuformatting.json');
    writeFileSync(configFile, JSON.stringify({ indentSize: 2 }));

    const watcher = await mockConfigWatcher(testDir);
    const errorPromise = waitForError(watcher);

    // When: Write invalid JSON
    writeFileSync(configFile, '{ invalid json }');

    // Then: Error logged, fallback to previous config
    const error = await errorPromise;
    expect(error.severity).toBe('error');
    expect(error.message).toContain('syntax error');
    
    const currentConfig = watcher.getCurrentConfig();
    expect(currentConfig.indentSize).toBe(2); // Previous valid config
  });

  it('should watch both .json and .json5 files', async () => {
    // Given: Config watcher active
    const configFile = join(testDir, '.gosuformatting.json5');
    writeFileSync(configFile, '{ indentSize: 2 }');

    const watcher = await mockConfigWatcher(testDir);
    const reloadPromise = waitForReload(watcher);

    // When: Modify .json5 file
    writeFileSync(configFile, '{ indentSize: 4 }');

    // Then: Reload detected
    const reloadEvent = await reloadPromise;
    expect(reloadEvent.detected).toBe(true);
  });
});

// Mock implementations - will be replaced with actual implementation
async function mockConfigWatcher(directory: string): Promise<any> {
  throw new Error('ConfigWatcher not implemented yet - this test should fail');
}

function waitForReload(watcher: any): Promise<any> {
  throw new Error('ConfigWatcher not implemented yet');
}

function waitForLogEntry(watcher: any): Promise<any> {
  throw new Error('ConfigWatcher not implemented yet');
}

function waitForError(watcher: any): Promise<any> {
  throw new Error('ConfigWatcher not implemented yet');
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
