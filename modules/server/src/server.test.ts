import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createConnection, TextDocuments, InitializeParams, InitializeResult } from 'vscode-languageserver/node';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { createServer, GosuLanguageServer } from './server';

// Mock the connection
vi.mock('vscode-languageserver/node', async () => {
  const actual = await vi.importActual('vscode-languageserver/node');
  return {
    ...actual,
    createConnection: vi.fn(),
    TextDocuments: vi.fn(),
  };
});

vi.mock('vscode-languageserver-textdocument', () => ({
  TextDocument: {
    create: vi.fn()
  }
}));

describe('GosuLanguageServer', () => {
  let mockConnection: any;
  let mockDocuments: any;
  let server: GosuLanguageServer;

  beforeEach(() => {
    // Reset mocks
    vi.clearAllMocks();

    // Setup mock connection
    mockConnection = {
      onInitialize: vi.fn(),
      onInitialized: vi.fn(),
      onDidChangeConfiguration: vi.fn(),
      onDidChangeWatchedFiles: vi.fn(),
      listen: vi.fn(),
      console: {
        log: vi.fn(),
        error: vi.fn()
      }
    };

    // Setup mock documents
    mockDocuments = {
      onDidOpen: vi.fn(),
      onDidChangeContent: vi.fn(),
      onDidClose: vi.fn(),
      listen: vi.fn()
    };

    // Mock implementations
    (createConnection as any).mockReturnValue(mockConnection);
    (TextDocuments as any).mockReturnValue(mockDocuments);

    server = createServer();
  });

  describe('initialization', () => {
    it('should create server with connection and documents', () => {
      expect(createConnection).toHaveBeenCalled();
      expect(TextDocuments).toHaveBeenCalled();
      expect(server).toBeDefined();
      expect(server.connection).toBe(mockConnection);
      expect(server.documents).toBe(mockDocuments);
    });

    it('should register onInitialize handler', () => {
      expect(mockConnection.onInitialize).toHaveBeenCalledWith(expect.any(Function));
    });

    it('should register onInitialized handler', () => {
      expect(mockConnection.onInitialized).toHaveBeenCalledWith(expect.any(Function));
    });

    it('should register document event handlers', () => {
      expect(mockDocuments.onDidOpen).toHaveBeenCalledWith(expect.any(Function));
      expect(mockDocuments.onDidChangeContent).toHaveBeenCalledWith(expect.any(Function));
      expect(mockDocuments.onDidClose).toHaveBeenCalledWith(expect.any(Function));
    });
  });

  describe('initialize request', () => {
    it('should return correct capabilities', () => {
      const initializeHandler = mockConnection.onInitialize.mock.calls[0][0];
      
      const params: InitializeParams = {
        processId: 1234,
        capabilities: {},
        rootUri: 'file:///test/workspace'
      };

      const result: InitializeResult = initializeHandler(params);

      expect(result).toEqual({
        capabilities: {
          textDocumentSync: 1, // TextDocumentSyncKind.Full
          completionProvider: {
            resolveProvider: true,
            triggerCharacters: ['.', ':']
          },
          hoverProvider: true,
          definitionProvider: true,
          referencesProvider: true,
          documentHighlightProvider: true,
          documentSymbolProvider: true,
          workspaceSymbolProvider: true,
          codeActionProvider: true,
          codeLensProvider: {
            resolveProvider: false
          },
          documentFormattingProvider: true,
          documentRangeFormattingProvider: true,
          documentOnTypeFormattingProvider: {
            firstTriggerCharacter: ';',
            moreTriggerCharacter: ['}', '\n']
          },
          renameProvider: true,
          foldingRangeProvider: true,
          semanticTokensProvider: {
            legend: {
              tokenTypes: [
                'namespace', 'class', 'enum', 'interface', 'struct',
                'typeParameter', 'type', 'parameter', 'variable',
                'property', 'enumMember', 'event', 'function',
                'method', 'macro', 'keyword', 'modifier',
                'comment', 'string', 'number', 'regexp', 'operator'
              ],
              tokenModifiers: [
                'declaration', 'definition', 'readonly', 'static',
                'deprecated', 'abstract', 'async', 'modification',
                'documentation', 'defaultLibrary'
              ]
            },
            range: true,
            full: {
              delta: false
            }
          }
        },
        serverInfo: {
          name: 'Gosu Language Server',
          version: '1.0.0'
        }
      });
    });

    it('should log initialization with workspace info', () => {
      const initializeHandler = mockConnection.onInitialize.mock.calls[0][0];
      
      const params: InitializeParams = {
        processId: 1234,
        capabilities: {},
        rootUri: 'file:///test/workspace',
        workspaceFolders: [
          { uri: 'file:///test/workspace', name: 'test-workspace' }
        ]
      };

      initializeHandler(params);

      expect(mockConnection.console.log).toHaveBeenCalledWith(
        expect.stringContaining('Gosu Language Server initialized')
      );
      expect(mockConnection.console.log).toHaveBeenCalledWith(
        expect.stringContaining('Workspace: file:///test/workspace')
      );
    });
  });

  describe('start method', () => {
    it('should start connection and documents listening', () => {
      server.start();

      expect(mockDocuments.listen).toHaveBeenCalledWith(mockConnection);
      expect(mockConnection.listen).toHaveBeenCalled();
    });
  });

  describe('logging', () => {
    it('should have debug logging enabled', () => {
      // The server should create debug loggers for different namespaces
      expect(server.debugLog).toBeDefined();
      expect(typeof server.debugLog).toBe('function');
    });
  });
});