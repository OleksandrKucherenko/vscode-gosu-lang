import * as vscode from 'vscode';
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind
} from 'vscode-languageclient/node';
import * as path from 'path';
import Debug from 'debug';

// Create debug logger for client
const debugClient = Debug('gosu:lsp:client');

let client: LanguageClient;

export function activate(context: vscode.ExtensionContext) {
  debugClient('Activating Gosu Language Server extension...');

  // The server is implemented in node
  const serverModule = context.asAbsolutePath(
    path.join('out', 'server.js')
  );

  // If the extension is launched in debug mode then the debug server options are used
  // Otherwise the run options are used
  const serverOptions: ServerOptions = {
    run: { module: serverModule, transport: TransportKind.ipc },
    debug: {
      module: serverModule,
      transport: TransportKind.ipc,
      options: { execArgv: ['--nolazy', '--inspect=6009'] }
    }
  };

  // Options to control the language client
  const clientOptions: LanguageClientOptions = {
    // Register the server for Gosu documents
    documentSelector: [
      { scheme: 'file', language: 'gosu' },
      { scheme: 'file', pattern: '**/*.gs' },
      { scheme: 'file', pattern: '**/*.gsx' },
      { scheme: 'file', pattern: '**/*.gst' },
      { scheme: 'file', pattern: '**/*.gsp' }
    ],

    // File system watcher to monitor Gosu files
    synchronize: {
      fileEvents: [
        vscode.workspace.createFileSystemWatcher('**/*.gs'),
        vscode.workspace.createFileSystemWatcher('**/*.gsx'),
        vscode.workspace.createFileSystemWatcher('**/*.gst'),
        vscode.workspace.createFileSystemWatcher('**/*.gsp')
      ]
    },

    // Output channel for server logs
    outputChannelName: 'Gosu Language Server',

    // Initialization options
    initializationOptions: {
      enableSemanticHighlighting: true,
      enableJavaInterop: true,
      logLevel: 'info'
    }
  };

  // Create the language client and start the client
  client = new LanguageClient(
    'gosuLanguageServer',
    'Gosu Language Server',
    serverOptions,
    clientOptions
  );

  debugClient('Starting Gosu Language Server client...');

  // Start the client. This will also launch the server
  client.start();

  // Register the client as a disposable
  context.subscriptions.push(client);

  // Register additional commands
  registerCommands(context);

  debugClient('Gosu Language Server extension activated');
}

function registerCommands(context: vscode.ExtensionContext) {
  // Command to restart the language server
  const restartCommand = vscode.commands.registerCommand(
    'gosu.restartLanguageServer',
    async () => {
      debugClient('Restarting Gosu Language Server...');
      vscode.window.showInformationMessage('Restarting Gosu Language Server...');
      
      if (client) {
        await client.stop();
        await client.start();
      }
      
      vscode.window.showInformationMessage('Gosu Language Server restarted');
    }
  );

  // Command to show server output
  const showOutputCommand = vscode.commands.registerCommand(
    'gosu.showLanguageServerOutput',
    () => {
      debugClient('Showing Gosu Language Server output...');
      if (client) {
        client.outputChannel.show();
      }
    }
  );

  // Command to show server status
  const showStatusCommand = vscode.commands.registerCommand(
    'gosu.showLanguageServerStatus',
    () => {
      debugClient('Checking Gosu Language Server status...');
      if (client) {
        const state = client.state;
        const stateNames = {
          1: 'Stopped',
          2: 'Starting', 
          3: 'Running'
        };
        const stateName = stateNames[state as keyof typeof stateNames] || 'Unknown';
        vscode.window.showInformationMessage(`Gosu Language Server status: ${stateName}`);
      } else {
        vscode.window.showWarningMessage('Gosu Language Server is not initialized');
      }
    }
  );

  context.subscriptions.push(restartCommand, showOutputCommand, showStatusCommand);
}

export function deactivate(): Thenable<void> | undefined {
  debugClient('Deactivating Gosu Language Server extension...');
  
  if (!client) {
    return undefined;
  }
  
  debugClient('Stopping Gosu Language Server client...');
  return client.stop();
}

// Error handling for client
export function handleClientError(error: Error, message: string, count: number): boolean {
  debugClient(`Client error (${count}): ${message}`, error);
  
  if (count < 5) {
    return true; // Continue trying
  }
  
  vscode.window.showErrorMessage(
    `Gosu Language Server failed to start after ${count} attempts. Please check the logs.`
  );
  
  return false; // Stop trying
}