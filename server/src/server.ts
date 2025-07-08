import {
    createConnection,
    TextDocuments,
    ProposedFeatures,
    InitializeParams,
    DidChangeConfigurationNotification,
    CompletionItem,
    CompletionItemKind,
    TextDocumentPositionParams,
    TextDocumentSyncKind,
    InitializeResult
} from 'vscode-languageserver/node';

import {
    TextDocument
} from 'vscode-languageserver-textdocument';

// Create a connection for the server.
const connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager.
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;

connection.onInitialize((params: InitializeParams) => {
    const capabilities = params.capabilities;

    hasConfigurationCapability = !!(
        capabilities.workspace && !!capabilities.workspace.configuration
    );
    hasWorkspaceFolderCapability = !!(
        capabilities.workspace && !!capabilities.workspace.workspaceFolders
    );

    const result: InitializeResult = {
        capabilities: {
            textDocumentSync: TextDocumentSyncKind.Incremental,
            // Tell the client that the server supports code completion
            completionProvider: {
                resolveProvider: true
            }
        }
    };
    if (hasWorkspaceFolderCapability) {
        result.capabilities.workspace = {
            workspaceFolders: {
                supported: true
            }
        };
    }
    return result;
});

connection.onInitialized(() => {
    if (hasConfigurationCapability) {
        // Register for all configuration changes.
        connection.client.register(DidChangeConfigurationNotification.type, undefined);
    }
});

// This handler provides the initial list of the completion items.
connection.onCompletion(
    (_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
        // The pass parameter contains the position of the text document in
        // which code complete got requested. For the example we ignore this
        // info and always provide the same completion items.
        return [
            { label: 'true', kind: CompletionItemKind.Keyword },
            { label: 'false', kind: CompletionItemKind.Keyword },
            { label: 'null', kind: CompletionItemKind.Keyword },
            { label: 'var', kind: CompletionItemKind.Keyword },
            { label: 'function', kind: CompletionItemKind.Keyword },
            { label: 'return', kind: CompletionItemKind.Keyword },
            { label: 'if', kind: CompletionItemKind.Keyword },
            { label: 'else', kind: CompletionItemKind.Keyword },
            { label: 'for', kind: CompletionItemKind.Keyword },
            { label: 'while', kind: CompletionItemKind.Keyword },
            { label: 'new', kind: CompletionItemKind.Keyword },
            { label: 'class', kind: CompletionItemKind.Keyword },
            { label: 'interface', kind: CompletionItemKind.Keyword },
            { label: 'enum', kind: CompletionItemKind.Keyword },
            { label: 'extends', kind: CompletionItemKind.Keyword },
            { label: 'implements', kind: CompletionItemKind.Keyword },
            { label: 'this', kind: CompletionItemKind.Keyword },
            { label: 'outer', kind: CompletionItemKind.Keyword },
            { label: 'super', kind: CompletionItemKind.Keyword },
            { label: 'construct', kind: CompletionItemKind.Keyword },
            { label: 'property', kind: CompletionItemKind.Keyword },
            { label: 'get', kind: CompletionItemKind.Keyword },
            { label: 'set', kind: CompletionItemKind.Keyword },
            { label: 'private', kind: CompletionItemKind.Keyword },
            { label: 'internal', kind: CompletionItemKind.Keyword },
            { label: 'protected', kind: CompletionItemKind.Keyword },
            { label: 'public', kind: CompletionItemKind.Keyword },
            { label: 'static', kind: CompletionItemKind.Keyword },
            { label: 'abstract', kind: CompletionItemKind.Keyword },
            { label: 'override', kind: CompletionItemKind.Keyword },
            { label: 'final', kind: CompletionItemKind.Keyword },
            { label: 'transient', kind: CompletionItemKind.Keyword },
            { label: 'uses', kind: CompletionItemKind.Keyword },
            { label: 'as', kind: CompletionItemKind.Keyword },
            { label: 'in', kind: CompletionItemKind.Keyword },
            { label: 'and', kind: CompletionItemKind.Keyword },
            { label: 'or', kind: CompletionItemKind.Keyword },
            { label: 'not', kind: CompletionItemKind.Keyword },
            { label: 'delegate', kind: CompletionItemKind.Keyword },
            { label: 'represents', kind: CompletionItemKind.Keyword },
            { label: 'void', kind: CompletionItemKind.Keyword },
            { label: 'block', kind: CompletionItemKind.Keyword },
            { label: 'break', kind: CompletionItemKind.Keyword },
            { label: 'continue', kind: CompletionItemKind.Keyword },
            { label: 'try', kind: CompletionItemKind.Keyword },
            { label: 'catch', kind: CompletionItemKind.Keyword },
            { label: 'finally', kind: CompletionItemKind.Keyword },
            { label: 'throw', kind: CompletionItemKind.Keyword },
            { label: 'throws', kind: CompletionItemKind.Keyword },
            { label: 'assert', kind: CompletionItemKind.Keyword },
            { label: 'typeloader', kind: CompletionItemKind.Keyword },
            { label: 'typeis', kind: CompletionItemKind.Keyword },
            { label: 'typeof', kind: CompletionItemKind.Keyword },
            { label: 'statictypeof', kind: CompletionItemKind.Keyword },
            { label: 'package', kind: CompletionItemKind.Keyword },
            { label: 'import', kind: CompletionItemKind.Keyword }
        ];
    }
);

// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve(
    (item: CompletionItem): CompletionItem => {
        return item;
    }
);

documents.listen(connection);
connection.listen();
