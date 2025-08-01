/** biome-ignore-all lint/suspicious/noExplicitAny: keep it simple for unit tests */
import Debug from "debug"
import { beforeEach, describe, expect, it, vi } from "vitest"
import {
  createConnection,
  type InitializeParams,
  type InitializeResult,
  TextDocuments,
} from "vscode-languageserver/node"
import { createServer, type GosuLanguageServer } from "../server"

// Create debug logger for tests
const debugTest = Debug("gosu:lsp:test:server")

// Mock the connection
vi.mock("vscode-languageserver/node", async () => {
  const actual = await vi.importActual("vscode-languageserver/node")
  return {
    ...actual,
    createConnection: vi.fn(),
    TextDocuments: vi.fn(),
  }
})

vi.mock("vscode-languageserver-textdocument", () => ({
  TextDocument: {
    create: vi.fn(),
  },
}))

describe("GosuLanguageServer", () => {
  let mockConnection: any
  let mockDocuments: any
  let server: GosuLanguageServer

  beforeEach(() => {
    // Given: Clean test environment
    vi.clearAllMocks()
    debugTest("Setting up test environment")

    // Given: Mock LSP connection with all required handlers
    mockConnection = {
      onInitialize: vi.fn(),
      onInitialized: vi.fn(),
      onDidChangeConfiguration: vi.fn(),
      onDidChangeWatchedFiles: vi.fn(),
      onCompletion: vi.fn(),
      onCompletionResolve: vi.fn(),
      onDefinition: vi.fn(),
      onHover: vi.fn(),
      onRequest: vi.fn(),
      sendDiagnostics: vi.fn(),
      listen: vi.fn(),
      console: {
        log: vi.fn(),
        error: vi.fn(),
      },
    }

    // Given: Mock text document manager
    mockDocuments = {
      onDidOpen: vi.fn(),
      onDidChangeContent: vi.fn(),
      onDidClose: vi.fn(),
      listen: vi.fn(),
    }

    // Given: Mocked constructor functions return our test doubles
    ;(createConnection as any).mockReturnValue(mockConnection)
    ;(TextDocuments as any).mockReturnValue(mockDocuments)

    // When: Create server instance for testing
    server = createServer()
    debugTest("Created server instance for testing")
  })

  describe("initialization", () => {
    it("should create server with connection and documents", () => {
      // Given: Server has been created in beforeEach
      debugTest("Testing server creation with proper components")

      // When: Server instance is validated
      // (action already completed in beforeEach)

      // Then: LSP connection and documents should be initialized
      expect(createConnection).toHaveBeenCalled()
      expect(TextDocuments).toHaveBeenCalled()
      // And: Server should be properly constructed
      expect(server).toBeDefined()
      expect(server.connection).toBe(mockConnection)
      expect(server.documents).toBe(mockDocuments)

      debugTest("Server creation validation completed")
    })

    it("should register onInitialize handler", () => {
      // Given: Server has been created
      debugTest("Testing onInitialize handler registration")

      // When: Server registration is checked
      // (registration happened during server creation)

      // Then: onInitialize should be registered with a function
      expect(mockConnection.onInitialize).toHaveBeenCalledWith(expect.any(Function))

      debugTest("onInitialize handler registration verified")
    })

    it("should register onInitialized handler", () => {
      // Given: Server has been created
      debugTest("Testing onInitialized handler registration")

      // When: Server registration is checked
      // (registration happened during server creation)

      // Then: onInitialized should be registered with a function
      expect(mockConnection.onInitialized).toHaveBeenCalledWith(expect.any(Function))

      debugTest("onInitialized handler registration verified")
    })

    it("should register document event handlers", () => {
      // Given: Server has been created
      debugTest("Testing document event handlers registration")

      // When: Document handler registration is checked
      // (registration happened during server creation)

      // Then: All document lifecycle handlers should be registered
      expect(mockDocuments.onDidOpen).toHaveBeenCalledWith(expect.any(Function))
      // And: Change content handler should be registered
      expect(mockDocuments.onDidChangeContent).toHaveBeenCalledWith(expect.any(Function))
      // And: Close handler should be registered
      expect(mockDocuments.onDidClose).toHaveBeenCalledWith(expect.any(Function))

      debugTest("Document event handlers registration verified")
    })
  })

  describe("initialize request", () => {
    it("should return correct capabilities", () => {
      // Given: Initialize handler has been registered
      const initializeHandler = mockConnection.onInitialize.mock.calls[0][0]
      // And: Client initialization parameters
      const params: InitializeParams = {
        processId: 1234,
        capabilities: {},
        rootUri: "file:///test/workspace",
      }
      debugTest("Testing LSP capabilities response")

      // When: Initialize handler is called with client parameters
      const result: InitializeResult = initializeHandler(params)
      debugTest("Initialize handler called with test parameters")

      // Then: Server should return comprehensive LSP capabilities
      expect(result).toEqual({
        capabilities: {
          textDocumentSync: 1, // TextDocumentSyncKind.Full
          completionProvider: {
            resolveProvider: true,
            triggerCharacters: [".", ":"],
          },
          hoverProvider: true,
          definitionProvider: true,
          referencesProvider: true,
          semanticTokensProvider: {
            legend: {
              tokenTypes: [
                "namespace",
                "class",
                "enum",
                "interface",
                "struct",
                "typeParameter",
                "type",
                "parameter",
                "variable",
                "property",
                "enumMember",
                "event",
                "function",
                "method",
                "macro",
                "keyword",
                "modifier",
                "comment",
                "string",
                "number",
                "regexp",
                "operator",
              ],
              tokenModifiers: [
                "declaration",
                "definition",
                "readonly",
                "static",
                "deprecated",
                "abstract",
                "async",
                "modification",
                "documentation",
                "defaultLibrary",
              ],
            },
            range: true,
            full: {
              delta: false,
            },
          },
        },
        serverInfo: {
          name: "Gosu Language Server",
          version: "1.0.0",
        },
      })
      debugTest("LSP capabilities validation completed")
    })

    it("should log initialization with workspace info", () => {
      // Given: Initialize handler has been registered
      const initializeHandler = mockConnection.onInitialize.mock.calls[0][0]
      // And: Client parameters with workspace information
      const params: InitializeParams = {
        processId: 1234,
        capabilities: {},
        rootUri: "file:///test/workspace",
        workspaceFolders: [{ uri: "file:///test/workspace", name: "test-workspace" }],
      }
      debugTest("Testing initialization logging with workspace info")

      // When: Initialize handler is called with workspace parameters
      initializeHandler(params)
      debugTest("Initialize handler called with workspace parameters")

      // Then: Server should log initialization and workspace information
      expect(mockConnection.console.log).toHaveBeenCalledWith(
        expect.stringContaining("Gosu Language Server initialized"),
      )
      // And: Workspace information should be logged
      expect(mockConnection.console.log).toHaveBeenCalledWith(
        expect.stringContaining("Workspace: file:///test/workspace"),
      )

      debugTest("Initialization logging validation completed")
    })
  })

  describe("start method", () => {
    it("should start connection and documents listening", () => {
      // Given: Server has been created
      debugTest("Testing server start method")

      // When: Server start method is called
      server.start()
      debugTest("Server start method invoked")

      // Then: Documents should listen on the connection
      expect(mockDocuments.listen).toHaveBeenCalledWith(mockConnection)
      // And: Connection should start listening
      expect(mockConnection.listen).toHaveBeenCalled()

      debugTest("Server start method validation completed")
    })
  })

  describe("logging", () => {
    it("should have debug logging enabled", () => {
      // Given: Server has been created with debug logging
      debugTest("Testing debug logging functionality")

      // When: Debug logger is validated
      // (logger created during server initialization)

      // Then: Server should have debug logger available
      expect(server.debugLog).toBeDefined()
      // And: Debug logger should be a function
      expect(typeof server.debugLog).toBe("function")

      debugTest("Debug logging validation completed")
    })
  })
})
