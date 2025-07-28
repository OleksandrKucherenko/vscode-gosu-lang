import {
  createConnection,
  TextDocuments,
  ProposedFeatures,
  InitializeParams,
  InitializeResult,
  TextDocumentSyncKind,
  Connection
} from 'vscode-languageserver/node';
import { TextDocument } from 'vscode-languageserver-textdocument';
import Debug from 'debug';

// Create debug loggers for different namespaces
const debugLog = Debug('gosu:lsp:server');
const debugInit = Debug('gosu:lsp:init');
const debugDocs = Debug('gosu:lsp:docs');

export interface GosuLanguageServer {
  connection: Connection;
  documents: TextDocuments<TextDocument>;
  debugLog: Debug.Debugger;
  start(): void;
}

export function createServer(): GosuLanguageServer {
  // Create a connection for the server
  const connection = createConnection(ProposedFeatures.all);

  // Create a simple text document manager
  const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

  // Server instance
  const server: GosuLanguageServer = {
    connection,
    documents,
    debugLog,
    start() {
      // Listen on the connection
      documents.listen(connection);
      connection.listen();
    }
  };

  // Initialize handler
  connection.onInitialize((params: InitializeParams): InitializeResult => {
    debugInit('Gosu Language Server initializing...');
    
    if (params.rootUri) {
      debugInit(`Workspace: ${params.rootUri}`);
      connection.console.log(`Gosu Language Server initialized for workspace: ${params.rootUri}`);
    }

    if (params.workspaceFolders && params.workspaceFolders.length > 0) {
      debugInit(`Workspace folders: ${params.workspaceFolders.map(f => f.name).join(', ')}`);
      connection.console.log(`Gosu Language Server initialized`);
      connection.console.log(`Workspace: ${params.rootUri}`);
    }

    return {
      capabilities: {
        textDocumentSync: TextDocumentSyncKind.Full,
        // Completion provider
        completionProvider: {
          resolveProvider: true,
          triggerCharacters: ['.', ':']
        },
        // Hover provider
        hoverProvider: true,
        // Definition provider  
        definitionProvider: true,
        // References provider
        referencesProvider: true,
        // Document highlight provider
        documentHighlightProvider: true,
        // Document symbol provider
        documentSymbolProvider: true,
        // Workspace symbol provider
        workspaceSymbolProvider: true,
        // Code action provider
        codeActionProvider: true,
        // Code lens provider
        codeLensProvider: {
          resolveProvider: false
        },
        // Document formatting provider
        documentFormattingProvider: true,
        // Document range formatting provider
        documentRangeFormattingProvider: true,
        // Document on type formatting provider
        documentOnTypeFormattingProvider: {
          firstTriggerCharacter: ';',
          moreTriggerCharacter: ['}', '\n']
        },
        // Rename provider
        renameProvider: true,
        // Folding range provider
        foldingRangeProvider: true,
        // Semantic tokens provider
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
    };
  });

  // After initialization
  connection.onInitialized(() => {
    debugInit('Gosu Language Server initialized');
    connection.console.log('Gosu Language Server ready');
  });

  // Document event handlers (using both documents and connection for compatibility)
  documents.onDidOpen((event) => {
    debugDocs(`Document opened: ${event.document.uri}`);
    connection.console.log(`Opened ${event.document.uri}`);
  });

  documents.onDidChangeContent((change) => {
    debugDocs(`Document changed: ${change.document.uri}`);
  });

  documents.onDidClose((event) => {
    debugDocs(`Document closed: ${event.document.uri}`);
  });


  // Configuration change handler
  connection.onDidChangeConfiguration((change) => {
    debugLog('Configuration changed', change);
  });

  // Watched files change handler
  connection.onDidChangeWatchedFiles((_change) => {
    debugLog('Watched file changed');
  });

  return server;
}

// Export main function for CLI usage
export function main() {
  const server = createServer();
  server.start();
  debugLog('Gosu Language Server started');
}

// If this module is the main module, start the server
if (require.main === module) {
  main();
}