/**
 * Integration tests for the Gosu Language Server
 * Tests the full LSP communication flow with a mock client
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { createConnection, Connection, InitializeParams, InitializeResult } from 'vscode-languageserver/node';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { createServer } from './server.js';
import type { GosuLanguageServer } from './server.js';

// Mock the connection creation
vi.mock('vscode-languageserver/node', async () => {
  const actual = await vi.importActual('vscode-languageserver/node');
  return {
    ...actual,
    createConnection: vi.fn(),
  };
});

describe('Gosu Language Server Integration', () => {
  let mockConnection: Partial<Connection>;
  let server: GosuLanguageServer;
  let initializeHandler: (params: InitializeParams) => InitializeResult;

  beforeEach(() => {
    // Reset all mocks
    vi.clearAllMocks();

    // Create mock disposable
    const mockDisposable = { dispose: vi.fn() };

    // Create mock connection with handlers
    mockConnection = {
      onInitialize: vi.fn((handler) => {
        initializeHandler = handler;
        return mockDisposable;
      }),
      onInitialized: vi.fn(() => mockDisposable),
      onDidChangeConfiguration: vi.fn(() => mockDisposable),
      onDidChangeWatchedFiles: vi.fn(() => mockDisposable),
      // Document handler mocks needed by documents.listen()
      onDidOpenTextDocument: vi.fn(() => mockDisposable),
      onDidChangeTextDocument: vi.fn(() => mockDisposable),
      onDidCloseTextDocument: vi.fn(() => mockDisposable),
      onWillSaveTextDocument: vi.fn(() => mockDisposable),
      onWillSaveTextDocumentWaitUntil: vi.fn(() => mockDisposable),
      onDidSaveTextDocument: vi.fn(() => mockDisposable),
      listen: vi.fn(),
      console: {
        log: vi.fn(),
        error: vi.fn(),
        warn: vi.fn(),
        info: vi.fn(),
        debug: vi.fn(),
        connection: {} as any,
        initialize: vi.fn(),
        fillServerCapabilities: vi.fn(),
      },
    };

    // Mock createConnection to return our mock
    vi.mocked(createConnection).mockReturnValue(mockConnection as Connection);

    // Create server instance
    server = createServer();
    
    // Start the server to trigger listen()
    server.start();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Server Initialization', () => {
    it('should handle initialization request and return capabilities', () => {
      // Arrange
      const initParams: InitializeParams = {
        processId: null,
        rootUri: 'file:///test/workspace',
        capabilities: {
          workspace: {
            workspaceEdit: { documentChanges: true },
            applyEdit: true,
            configuration: true,
          },
          textDocument: {
            completion: { dynamicRegistration: true },
            hover: { dynamicRegistration: true },
            definition: { dynamicRegistration: true },
          },
        },
        workspaceFolders: null,
      };

      // Act
      const result = initializeHandler(initParams);

      // Assert
      expect(result).toBeDefined();
      expect(result.capabilities).toBeDefined();
      expect(result.capabilities.textDocumentSync).toBe(1); // Full sync
      expect(result.capabilities.completionProvider).toEqual({
        resolveProvider: true,
        triggerCharacters: ['.', ':'],
      });
      expect(result.capabilities.hoverProvider).toBe(true);
      expect(result.capabilities.definitionProvider).toBe(true);
      expect(result.capabilities.documentFormattingProvider).toBe(true);
      expect(result.capabilities.documentRangeFormattingProvider).toBe(true);
      expect(result.capabilities.documentHighlightProvider).toBe(true);
      expect(result.capabilities.referencesProvider).toBe(true);
      expect(result.capabilities.renameProvider).toBe(true);
      expect(result.capabilities.documentSymbolProvider).toBe(true);
      expect(result.capabilities.workspaceSymbolProvider).toBe(true);
      expect(result.serverInfo).toEqual({
        name: 'Gosu Language Server',
        version: '1.0.0',
      });
    });

    it('should handle initialization with minimal client capabilities', () => {
      // Arrange
      const initParams: InitializeParams = {
        processId: null,
        rootUri: 'file:///test/workspace',
        capabilities: {},
        workspaceFolders: null,
      };

      // Act
      const result = initializeHandler(initParams);

      // Assert
      expect(result).toBeDefined();
      expect(result.capabilities).toBeDefined();
      // Should still return all capabilities even if client doesn't support them
      expect(result.capabilities.completionProvider).toBeDefined();
      expect(result.capabilities.hoverProvider).toBe(true);
    });
  });


  describe('Server Lifecycle', () => {
    it('should register initialization handlers on creation', () => {
      // Assert that core handlers were registered
      expect(mockConnection.onInitialize).toHaveBeenCalledWith(expect.any(Function));
      expect(mockConnection.onInitialized).toHaveBeenCalled();
      expect(mockConnection.onDidChangeConfiguration).toHaveBeenCalled();
      expect(mockConnection.onDidChangeWatchedFiles).toHaveBeenCalled();
    });

    it('should start listening for connections', () => {
      // Assert that the server starts listening
      expect(mockConnection.listen).toHaveBeenCalled();
    });
  });

  describe('LSP Protocol Compliance', () => {
    it('should return initialize result in correct format', () => {
      const initParams: InitializeParams = {
        processId: null,
        rootUri: 'file:///test/workspace',
        capabilities: {},
        workspaceFolders: null,
      };

      const result = initializeHandler(initParams);

      // Verify LSP specification compliance
      expect(result).toHaveProperty('capabilities');
      expect(result).toHaveProperty('serverInfo');
      expect(result.serverInfo).toHaveProperty('name');
      expect(result.serverInfo).toHaveProperty('version');
      
      // Verify capabilities structure matches LSP spec
      const caps = result.capabilities;
      expect(typeof caps.textDocumentSync).toBe('number');
      expect(typeof caps.hoverProvider).toBe('boolean');
      expect(typeof caps.definitionProvider).toBe('boolean');
      expect(caps.completionProvider).toHaveProperty('resolveProvider');
      expect(caps.completionProvider).toHaveProperty('triggerCharacters');
    });

    it('should support multiple Gosu file types', () => {
      // Test that initialization works for different Gosu file types
      const fileTypes = ['.gs', '.gsx', '.gst', '.gsp'];
      
      fileTypes.forEach(extension => {
        const initParams: InitializeParams = {
          processId: null,
          rootUri: `file:///test/workspace${extension}`,
          capabilities: {},
          workspaceFolders: null,
        };

        const result = initializeHandler(initParams);
        expect(result).toBeDefined();
        expect(result.capabilities).toBeDefined();
      });
    });
  });
});