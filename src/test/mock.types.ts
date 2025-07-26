import { vi } from 'vitest';

// Mock vscode module since we're testing outside of VSCode environment
export interface MockWorkspaceState {
  get: (key: string) => unknown;
  update: (key: string, value: unknown) => Promise<void>;
}

export interface MockGlobalState {
  get: (key: string) => unknown;
  update: (key: string, value: unknown) => Promise<void>;
}

export interface MockExtensionContext {
  subscriptions: { dispose(): unknown }[];
  workspaceState: MockWorkspaceState;
  globalState: MockGlobalState;
  extensionPath: string;
  storagePath?: string;
  globalStoragePath: string;
  logPath: string;
}

export const mockVscode = {
  ExtensionContext: class implements MockExtensionContext {
    subscriptions: { dispose(): unknown }[] = [];
    workspaceState: MockWorkspaceState = {
      get: () => undefined,
      update: async () => {}
    };
    globalState: MockGlobalState = {
      get: () => undefined,
      update: async () => {}
    };
    extensionPath = '';
    globalStoragePath = '';
    logPath = '';
  },
  window: {
    showInformationMessage: vi.fn()
  },
  languages: {
    registerCompletionItemProvider: vi.fn(),
    registerHoverProvider: vi.fn()
  }
};