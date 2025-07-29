/**
 * Integration tests for the Gosu Language Server
 * Tests the full LSP communication flow with a mock client
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { createConnection, Connection, InitializeParams, InitializeResult } from 'vscode-languageserver/node';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { createServer } from './server.js';
import type { GosuLanguageServer } from './server.js';
import Debug from 'debug';

// Create debug logger for integration tests
const debugIntegration = Debug('gosu:lsp:test:integration');

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
    // Given: Clean test environment
    vi.clearAllMocks();
    debugIntegration('Setting up integration test environment');

    // Given: Mock disposable for handler registrations
    const mockDisposable = { dispose: vi.fn() };

    // Given: Mock LSP connection with complete handler interface
    mockConnection = {
      onInitialize: vi.fn((handler) => {
        initializeHandler = handler;
        return mockDisposable;
      }),
      onInitialized: vi.fn(() => mockDisposable),
      onDidChangeConfiguration: vi.fn(() => mockDisposable),
      onDidChangeWatchedFiles: vi.fn(() => mockDisposable),
      onCompletion: vi.fn(() => mockDisposable),
      onCompletionResolve: vi.fn(() => mockDisposable),
      onDefinition: vi.fn(() => mockDisposable),
      sendDiagnostics: vi.fn(),
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

    // Given: Mocked connection factory returns our test double
    vi.mocked(createConnection).mockReturnValue(mockConnection as Connection);

    // When: Create and start server instance for testing
    server = createServer();
    server.start();
    debugIntegration('Created and started server instance for integration testing');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Server Initialization', () => {
    it('should handle initialization request and return capabilities', () => {
      // Given: Full client capabilities for LSP features
      debugIntegration('Testing initialization with full client capabilities');
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

      // When: Initialize handler is called with client capabilities
      const result = initializeHandler(initParams);
      debugIntegration('Initialize handler called with full client capabilities');

      // Then: Server should return complete LSP capabilities
      expect(result).toBeDefined();
      expect(result.capabilities).toBeDefined();
      expect(result.capabilities.textDocumentSync).toBe(1); // Full sync
      
      // And: Completion provider should be configured properly
      expect(result.capabilities.completionProvider).toEqual({
        resolveProvider: true,
        triggerCharacters: ['.', ':'],
      });
      
      // And: All core LSP features should be enabled
      expect(result.capabilities.hoverProvider).toBe(true);
      expect(result.capabilities.definitionProvider).toBe(true);
      expect(result.capabilities.documentFormattingProvider).toBe(true);
      expect(result.capabilities.documentRangeFormattingProvider).toBe(true);
      expect(result.capabilities.documentHighlightProvider).toBe(true);
      expect(result.capabilities.referencesProvider).toBe(true);
      expect(result.capabilities.renameProvider).toBe(true);
      expect(result.capabilities.documentSymbolProvider).toBe(true);
      expect(result.capabilities.workspaceSymbolProvider).toBe(true);
      
      // And: Server info should be correctly set
      expect(result.serverInfo).toEqual({
        name: 'Gosu Language Server',
        version: '1.0.0',
      });
      
      debugIntegration('Full capabilities initialization test completed');
    });

    it('should handle initialization with minimal client capabilities', () => {
      // Given: Minimal client capabilities
      debugIntegration('Testing initialization with minimal client capabilities');
      const initParams: InitializeParams = {
        processId: null,
        rootUri: 'file:///test/workspace',
        capabilities: {},
        workspaceFolders: null,
      };

      // When: Initialize handler is called with minimal capabilities
      const result = initializeHandler(initParams);
      debugIntegration('Initialize handler called with minimal client capabilities');

      // Then: Server should still return all capabilities
      expect(result).toBeDefined();
      expect(result.capabilities).toBeDefined();
      
      // And: Should return all capabilities even if client doesn't support them
      expect(result.capabilities.completionProvider).toBeDefined();
      expect(result.capabilities.hoverProvider).toBe(true);
      
      debugIntegration('Minimal capabilities initialization test completed');
    });
  });


  describe('Server Lifecycle', () => {
    it('should register initialization handlers on creation', () => {
      // Given: Server has been created and started
      debugIntegration('Testing server lifecycle handler registration');
      
      // Then: Core LSP handlers should be registered
      expect(mockConnection.onInitialize).toHaveBeenCalledWith(expect.any(Function));
      expect(mockConnection.onInitialized).toHaveBeenCalled();
      expect(mockConnection.onDidChangeConfiguration).toHaveBeenCalled();
      expect(mockConnection.onDidChangeWatchedFiles).toHaveBeenCalled();
      
      debugIntegration('Server lifecycle handler registration verified');
    });

    it('should start listening for connections', () => {
      // Given: Server has been started in beforeEach
      debugIntegration('Testing server connection listening');
      
      // Then: Server should start listening for connections
      expect(mockConnection.listen).toHaveBeenCalled();
      
      debugIntegration('Server connection listening verified');
    });
  });

  describe('LSP Protocol Compliance', () => {
    it('should return initialize result in correct format', () => {
      // Given: Standard LSP initialization parameters
      debugIntegration('Testing LSP protocol compliance');
      const initParams: InitializeParams = {
        processId: null,
        rootUri: 'file:///test/workspace',
        capabilities: {},
        workspaceFolders: null,
      };

      // When: Initialize handler is called
      const result = initializeHandler(initParams);
      debugIntegration('Initialize handler called for protocol compliance test');

      // Then: Result should have required LSP properties
      expect(result).toHaveProperty('capabilities');
      expect(result).toHaveProperty('serverInfo');
      expect(result.serverInfo).toHaveProperty('name');
      expect(result.serverInfo).toHaveProperty('version');
      
      // And: capabilities structure should match LSP spec
      const caps = result.capabilities;
      expect(typeof caps.textDocumentSync).toBe('number');
      expect(typeof caps.hoverProvider).toBe('boolean');
      expect(typeof caps.definitionProvider).toBe('boolean');
      expect(caps.completionProvider).toHaveProperty('resolveProvider');
      expect(caps.completionProvider).toHaveProperty('triggerCharacters');
      
      debugIntegration('LSP protocol compliance verification completed');
    });

    it('should support multiple Gosu file types', () => {
      // Given: Different Gosu file type extensions
      debugIntegration('Testing support for multiple Gosu file types');
      const fileTypes = ['.gs', '.gsx', '.gst', '.gsp'];
      
      // When: Initialize handler is called for each file type
      fileTypes.forEach(extension => {
        debugIntegration(`Testing initialization for file type: ${extension}`);
        const initParams: InitializeParams = {
          processId: null,
          rootUri: `file:///test/workspace${extension}`,
          capabilities: {},
          workspaceFolders: null,
        };

        // Then: Initialization should work for all Gosu file types
        const result = initializeHandler(initParams);
        expect(result).toBeDefined();
        expect(result.capabilities).toBeDefined();
      });
      
      debugIntegration('Multiple Gosu file types support verified');
    });
  });
});