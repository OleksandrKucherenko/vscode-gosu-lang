import { describe, it, expect, vi } from 'vitest';

// Mock vscode module since we're testing outside of VSCode environment
const mockVscode = {
  ExtensionContext: class {},
  window: {
    showInformationMessage: vi.fn()
  },
  languages: {
    registerCompletionItemProvider: vi.fn(),
    registerHoverProvider: vi.fn()
  }
};

vi.mock('vscode', () => mockVscode);

// Import after mocking
import { activate, deactivate } from './extension';

describe('Extension', () => {
  it('should activate without errors', () => {
    const mockContext = new mockVscode.ExtensionContext();
    
    expect(() => {
      activate(mockContext as any);
    }).not.toThrow();
  });

  it('should deactivate without errors', () => {
    expect(() => {
      deactivate();
    }).not.toThrow();
  });

  it('should log activation message', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    const mockContext = new mockVscode.ExtensionContext();
    
    activate(mockContext as any);
    
    expect(consoleSpy).toHaveBeenCalledWith('GOSU Language Support extension is now active!');
    
    consoleSpy.mockRestore();
  });
});