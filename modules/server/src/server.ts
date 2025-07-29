import {
  createConnection,
  TextDocuments,
  ProposedFeatures,
  InitializeParams,
  InitializeResult,
  TextDocumentSyncKind,
  Connection,
  CompletionItem,
  CompletionParams,
  TextDocumentPositionParams,
  SemanticTokensParams,
  SemanticTokensRangeParams,
  DefinitionParams,
  HoverParams
} from 'vscode-languageserver/node';
import { TextDocument } from 'vscode-languageserver-textdocument';
import Debug from 'debug';
import { createDiagnosticsProvider, GosuDiagnosticsProvider } from './diagnostics';
import { GosuCompletionProvider } from './completion';
import { GosuSemanticHighlightingProvider } from './semantic-highlighting';
import { GosuDefinitionProvider } from './definition-provider';
import { GosuHoverProvider } from './hover-provider';

// Create debug loggers for different namespaces
const debugLog = Debug('gosu:lsp:server');
const debugInit = Debug('gosu:lsp:init');
const debugDocs = Debug('gosu:lsp:docs');
const debugCompletion = Debug('gosu:lsp:server:completion');

export interface GosuLanguageServer {
  connection: Connection;
  documents: TextDocuments<TextDocument>;
  diagnosticsProvider: GosuDiagnosticsProvider;
  completionProvider: GosuCompletionProvider;
  semanticHighlightingProvider: GosuSemanticHighlightingProvider;
  definitionProvider: GosuDefinitionProvider;
  hoverProvider: GosuHoverProvider;
  debugLog: Debug.Debugger;
  start(): void;
}

export function createServer(): GosuLanguageServer {
  // Create a connection for the server
  const connection = createConnection(ProposedFeatures.all);

  // Create a simple text document manager
  const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

  // Create diagnostics provider
  const diagnosticsProvider = createDiagnosticsProvider();
  
  // Create completion provider
  const completionProvider = new GosuCompletionProvider();
  
  // Create semantic highlighting provider
  const semanticHighlightingProvider = new GosuSemanticHighlightingProvider();
  
  // Create definition provider
  const definitionProvider = new GosuDefinitionProvider();
  
  // Create hover provider
  const hoverProvider = new GosuHoverProvider();

  // Server instance
  const server: GosuLanguageServer = {
    connection,
    documents,
    diagnosticsProvider,
    completionProvider,
    semanticHighlightingProvider,
    definitionProvider,
    hoverProvider,
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

  // Document event handlers with diagnostics
  documents.onDidOpen((event) => {
    debugDocs(`Document opened: ${event.document.uri}`);
    connection.console.log(`Opened ${event.document.uri}`);
    
    // Validate and send diagnostics for opened document
    validateTextDocument(event.document);
  });

  documents.onDidChangeContent((change) => {
    debugDocs(`Document changed: ${change.document.uri}`);
    
    // Invalidate semantic highlighting cache for changed document
    server.semanticHighlightingProvider.onDocumentChange(change.document);
    
    // Invalidate definition provider cache for changed document
    server.definitionProvider.onDocumentChange(change.document);
    
    // Invalidate hover provider cache for changed document
    server.hoverProvider.onDocumentChange(change.document);
    
    // Validate and send diagnostics for changed document
    validateTextDocument(change.document);
  });

  documents.onDidClose((event) => {
    debugDocs(`Document closed: ${event.document.uri}`);
    
    // Clear diagnostics for closed document
    connection.sendDiagnostics({ uri: event.document.uri, diagnostics: [] });
    
    // Clear cache for closed document
    server.diagnosticsProvider.clearCache(event.document.uri);
    
    // Clear semantic highlighting cache for closed document
    server.semanticHighlightingProvider.onDocumentChange(event.document);
    
    // Clear definition provider cache for closed document
    server.definitionProvider.onDocumentChange(event.document);
    
    // Clear hover provider cache for closed document
    server.hoverProvider.onDocumentChange(event.document);
  });

  // Validation function
  async function validateTextDocument(textDocument: TextDocument): Promise<void> {
    debugDocs(`Validating document: ${textDocument.uri}`);
    
    try {
      // Get diagnostics from the diagnostics provider
      const diagnostics = server.diagnosticsProvider.validateDocument(textDocument);
      
      debugDocs(`Found ${diagnostics.length} diagnostics for ${textDocument.uri}`);
      
      // Send the computed diagnostics to VS Code
      connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
    } catch (error) {
      debugDocs(`Error validating document ${textDocument.uri}:`, error);
      
      // Send empty diagnostics on error to clear any previous ones
      connection.sendDiagnostics({ uri: textDocument.uri, diagnostics: [] });
    }
  }


  // Completion handler
  connection.onCompletion(async (params: CompletionParams): Promise<CompletionItem[]> => {
    debugCompletion(`Completion requested at ${params.position.line}:${params.position.character} in ${params.textDocument.uri}`);
    
    try {
      // Get the document
      const document = documents.get(params.textDocument.uri);
      if (!document) {
        debugCompletion(`Document not found: ${params.textDocument.uri}`);
        return [];
      }
      
      // Get completions from the completion provider (now async)
      const completions = await server.completionProvider.getCompletions(document, params.position);
      
      debugCompletion(`Returning ${completions.length} completions`);
      return completions;
      
    } catch (error) {
      debugCompletion('Error getting completions:', error);
      return [];
    }
  });

  // Completion resolve handler (for additional information)
  connection.onCompletionResolve((item: CompletionItem): CompletionItem => {
    debugCompletion(`Resolving completion item: ${item.label}`);
    
    // For now, just return the item as-is
    // Later we can add more detailed documentation, import statements, etc.
    return item;
  });

  // Definition handler
  connection.onDefinition(async (params: DefinitionParams) => {
    debugLog(`Definition requested at ${params.position.line}:${params.position.character} in ${params.textDocument.uri}`);
    
    try {
      const document = documents.get(params.textDocument.uri);
      if (!document) {
        debugLog(`Document not found: ${params.textDocument.uri}`);
        return null;
      }
      
      const definition = await server.definitionProvider.getDefinition(document, params.position);
      debugLog(`Returning definition: ${definition ? 'found' : 'not found'}`);
      return definition;
      
    } catch (error) {
      debugLog('Error getting definition:', error);
      return null;
    }
  });

  // Hover handler
  connection.onHover(async (params: HoverParams) => {
    debugLog(`Hover requested at ${params.position.line}:${params.position.character} in ${params.textDocument.uri}`);
    
    try {
      const document = documents.get(params.textDocument.uri);
      if (!document) {
        debugLog(`Document not found: ${params.textDocument.uri}`);
        return null;
      }
      
      const hover = await server.hoverProvider.getHover(document, params.position);
      debugLog(`Returning hover: ${hover ? 'found' : 'not found'}`);
      return hover;
      
    } catch (error) {
      debugLog('Error getting hover:', error);
      return null;
    }
  });

  // Semantic tokens handlers (only if connection supports them)
  if (typeof connection.onRequest === 'function') {
    // Semantic tokens handler (full document)
    connection.onRequest('textDocument/semanticTokens/full', async (params: SemanticTokensParams) => {
      debugLog(`Semantic tokens requested for ${params.textDocument.uri}`);
      
      try {
        const document = documents.get(params.textDocument.uri);
        if (!document) {
          debugLog(`Document not found: ${params.textDocument.uri}`);
          return { data: [] };
        }
        
        const tokens = await server.semanticHighlightingProvider.getSemanticTokens(document);
        debugLog(`Returning ${tokens.data.length / 5} semantic tokens`);
        return tokens;
        
      } catch (error) {
        debugLog('Error getting semantic tokens:', error);
        return { data: [] };
      }
    });

    // Semantic tokens handler (range)
    connection.onRequest('textDocument/semanticTokens/range', async (params: SemanticTokensRangeParams) => {
      debugLog(`Semantic tokens range requested for ${params.textDocument.uri}`);
      
      try {
        const document = documents.get(params.textDocument.uri);
        if (!document) {
          debugLog(`Document not found: ${params.textDocument.uri}`);
          return { data: [] };
        }
        
        const tokens = await server.semanticHighlightingProvider.getSemanticTokensRange(document, params.range);
        debugLog(`Returning ${tokens.data.length / 5} semantic tokens for range`);
        return tokens;
        
      } catch (error) {
        debugLog('Error getting semantic tokens range:', error);
        return { data: [] };
      }
    });
  } else {
    debugLog('Connection does not support onRequest method - skipping semantic tokens handlers');
  }

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