import * as path from "node:path"
import Debug from "debug"
import * as vscode from "vscode"
import type { Message } from "vscode-jsonrpc"
import type { LanguageClientOptions, ServerOptions } from "vscode-languageclient/node"

// Create debug logger for client
const debugClient = Debug("gosu:lsp:client")

type LanguageClientType = import("vscode-languageclient/node").LanguageClient

let client: LanguageClientType | undefined

export enum ClientErrorAction {
  Continue = 1,
  Shutdown = 2,
}

export async function activate(context: vscode.ExtensionContext) {
  debugClient("Activating Gosu Language Server extension...")

  const { LanguageClient, TransportKind, CloseAction, ErrorAction } = await import("vscode-languageclient/node")

  // The server is implemented in node
  const serverModule = context.asAbsolutePath(path.join("out", "server.js"))

  // If the extension is launched in debug mode then the debug server options are used
  // Otherwise the run options are used
  const serverOptions: ServerOptions = {
    run: { module: serverModule, transport: TransportKind.ipc },
    debug: {
      module: serverModule,
      transport: TransportKind.ipc,
      options: { execArgv: ["--nolazy", "--inspect=6009"] },
    },
  }

  // Options to control the language client
  const clientOptions: LanguageClientOptions = {
    // Register the server for Gosu documents, including untitled and remote buffers
    documentSelector: [
      { language: "gosu" },
      { scheme: "untitled", language: "gosu" },
      { scheme: "vscode-remote", language: "gosu" },
      { scheme: "vscode-vfs", language: "gosu" },
      { scheme: "vscode-userdata", language: "gosu" },
      { scheme: "file", pattern: "**/*.gs" },
      { scheme: "file", pattern: "**/*.gsx" },
      { scheme: "file", pattern: "**/*.gst" },
      { scheme: "file", pattern: "**/*.gsp" },
    ],

    // File system watcher to monitor Gosu files
    synchronize: {
      fileEvents: [
        vscode.workspace.createFileSystemWatcher("**/*.gs"),
        vscode.workspace.createFileSystemWatcher("**/*.gsx"),
        vscode.workspace.createFileSystemWatcher("**/*.gst"),
        vscode.workspace.createFileSystemWatcher("**/*.gsp"),
      ],
    },

    // Output channel for server logs
    outputChannelName: "Gosu Language Server",

    // Initialization options
    initializationOptions: {
      enableSemanticHighlighting: true,
      enableJavaInterop: true,
      logLevel: "info",
    },

    errorHandler: {
      error: (error, message, count) => {
        const action = handleClientError(error, message, count)
        return {
          action: action === ClientErrorAction.Continue ? ErrorAction.Continue : ErrorAction.Shutdown,
          handled: action === ClientErrorAction.Shutdown,
        }
      },
      closed: () => {
        debugClient("Gosu Language Server connection closed — scheduling restart")
        vscode.window.showWarningMessage("Gosu Language Server connection closed. Attempting restart...")
        return {
          action: CloseAction.Restart,
          handled: true,
        }
      },
    },
  }

  // Create the language client and start the client
  client = new LanguageClient("gosuLanguageServer", "Gosu Language Server", serverOptions, clientOptions)

  debugClient("Starting Gosu Language Server client...")

  // Start the client. This will also launch the server
  client.start()

  // Register the client as a disposable
  context.subscriptions.push(client)

  // Register additional commands
  registerCommands(context)

  debugClient("Gosu Language Server extension activated")
}

export function registerCommands(context: vscode.ExtensionContext) {
  // Command to restart the language server
  const restartCommand = vscode.commands.registerCommand("gosu.restartLanguageServer", async () => {
    debugClient("Restarting Gosu Language Server...")
    vscode.window.showInformationMessage("Restarting Gosu Language Server...")

    if (client) {
      await client.stop()
      await client.start()
      vscode.window.showInformationMessage("Gosu Language Server restarted")
      return
    }

    vscode.window.showWarningMessage("Gosu Language Server is not initialized; activate a Gosu file to start it.")
  })

  // Command to show server output
  const showOutputCommand = vscode.commands.registerCommand("gosu.showLanguageServerOutput", () => {
    debugClient("Showing Gosu Language Server output...")
    if (client) {
      client.outputChannel.show()
    }
  })

  // Command to show server status
  const showStatusCommand = vscode.commands.registerCommand("gosu.showLanguageServerStatus", () => {
    debugClient("Checking Gosu Language Server status...")
    if (client) {
      const state = client.state
      const stateNames = {
        1: "Stopped",
        2: "Starting",
        3: "Running",
      }
      const stateName = stateNames[state as keyof typeof stateNames] || "Unknown"
      vscode.window.showInformationMessage(`Gosu Language Server status: ${stateName}`)
    } else {
      vscode.window.showWarningMessage("Gosu Language Server is not initialized")
    }
  })

  context.subscriptions.push(restartCommand, showOutputCommand, showStatusCommand)
}

export function deactivate(): Thenable<void> | undefined {
  debugClient("Deactivating Gosu Language Server extension...")

  if (!client) {
    return undefined
  }

  debugClient("Stopping Gosu Language Server client...")
  return client.stop()
}

// Error handling for client
export function handleClientError(error: Error, message: Message | undefined, count: number | undefined): ClientErrorAction {
  const attempt = count ?? 0
  const humanMessage = typeof message === "object" && message ? JSON.stringify(message) : String(message ?? "unknown")
  debugClient(`Client error (${attempt}): ${humanMessage}`, error)

  if (attempt < 5) {
    return ClientErrorAction.Continue
  }

  vscode.window.showErrorMessage(
    `Gosu Language Server failed after ${attempt} attempts. See the Gosu Language Server output for details.`,
  )

  return ClientErrorAction.Shutdown
}
