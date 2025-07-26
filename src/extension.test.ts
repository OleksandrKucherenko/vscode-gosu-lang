import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mockVscode } from './test/mock.types';


vi.mock('vscode', () => mockVscode);

// Import after mocking
import { activate, deactivate } from './extension';

describe('Extension', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.resetModules();
    vi.restoreAllMocks();
  });

  it('should activate without errors', () => {
    const mockContext = new mockVscode.ExtensionContext();
    
    expect(() => {
      activate(mockContext as unknown as import('vscode').ExtensionContext);
    }).not.toThrow();
  });

  it('should deactivate without errors', () => {
    expect(() => {
      deactivate();
    }).not.toThrow();
  });

  it('should log activation message', async () => {
    // Mock the debug module
    const loggerSpy = vi.fn();
    vi.doMock('debug', () => ({
      default: () => loggerSpy
    }));
    
    // Re-import the module with mocked debug
    const { activate } = await import('./extension');
    
    const mockContext = new mockVscode.ExtensionContext();
    
    activate(mockContext as unknown as import('vscode').ExtensionContext);
    
    expect(loggerSpy).toHaveBeenCalledWith('GOSU Language Support extension is now active!');
  });
});