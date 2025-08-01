import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import * as serverModule from "../server"

// Mock the debug module
vi.mock("debug", () => ({
  default: vi.fn(() => vi.fn()),
}))

// Mock the VSCode language server modules
vi.mock("vscode-languageserver/node", () => ({
  createConnection: vi.fn(() => ({
    onInitialize: vi.fn(),
    onInitialized: vi.fn(),
    onCompletion: vi.fn(),
    onCompletionResolve: vi.fn(),
    onDefinition: vi.fn(),
    onHover: vi.fn(),
    onDidChangeConfiguration: vi.fn(),
    onDidChangeWatchedFiles: vi.fn(),
    onRequest: vi.fn(),
    console: {
      log: vi.fn(),
    },
    sendDiagnostics: vi.fn(),
    listen: vi.fn(),
  })),
  TextDocuments: vi.fn(() => ({
    listen: vi.fn(),
    onDidOpen: vi.fn(),
    onDidChangeContent: vi.fn(),
    onDidClose: vi.fn(),
    get: vi.fn(),
  })),
  ProposedFeatures: { all: {} },
  TextDocumentSyncKind: { Full: 2 },
}))

vi.mock("vscode-languageserver-textdocument", () => ({
  TextDocument: vi.fn(),
}))

vi.mock("./diagnostics", () => ({
  createDiagnosticsProvider: vi.fn(() => ({
    validateDocument: vi.fn(() => []),
    clearCache: vi.fn(),
  })),
}))

vi.mock("./completion", () => ({
  GosuCompletionProvider: vi.fn(() => ({
    getCompletions: vi.fn(() => Promise.resolve([])),
  })),
}))

vi.mock("./semantic-highlighting", () => ({
  GosuSemanticHighlightingProvider: vi.fn(() => ({
    getSemanticTokens: vi.fn(() => Promise.resolve({ data: [] })),
    getSemanticTokensRange: vi.fn(() => Promise.resolve({ data: [] })),
    onDocumentChange: vi.fn(),
  })),
}))

vi.mock("./definition-provider", () => ({
  GosuDefinitionProvider: vi.fn(() => ({
    getDefinition: vi.fn(() => Promise.resolve(null)),
    onDocumentChange: vi.fn(),
    clearAllCaches: vi.fn(),
  })),
}))

vi.mock("./hover-provider", () => ({
  GosuHoverProvider: vi.fn(() => ({
    getHover: vi.fn(() => Promise.resolve(null)),
    onDocumentChange: vi.fn(),
    clearAllCaches: vi.fn(),
  })),
}))

describe("Server Core Functions", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe("server creation", () => {
    it("should create server with all required components", () => {
      // When: creating a server
      const server = serverModule.createServer()

      // Then: should have all required components
      expect(server).toBeDefined()
      expect(server.connection).toBeDefined()
      expect(server.documents).toBeDefined()
      expect(server.diagnosticsProvider).toBeDefined()
      expect(server.completionProvider).toBeDefined()
      expect(server.debugLog).toBeDefined()
      expect(typeof server.start).toBe("function")
    })

    it("should configure connection handlers", () => {
      // When: creating a server
      const server = serverModule.createServer()

      // Then: connection should have handlers configured
      expect(server.connection.onInitialize).toHaveBeenCalled()
      expect(server.connection.onInitialized).toHaveBeenCalled()
      expect(server.connection.onCompletion).toHaveBeenCalled()
      expect(server.connection.onCompletionResolve).toHaveBeenCalled()
      expect(server.connection.onDidChangeConfiguration).toHaveBeenCalled()
      expect(server.connection.onDidChangeWatchedFiles).toHaveBeenCalled()
    })

    it("should configure document handlers", () => {
      // When: creating a server
      const server = serverModule.createServer()

      // Then: documents should have handlers configured
      expect(server.documents.onDidOpen).toHaveBeenCalled()
      expect(server.documents.onDidChangeContent).toHaveBeenCalled()
      expect(server.documents.onDidClose).toHaveBeenCalled()
    })
  })

  describe("server start method", () => {
    it("should start connection and documents listening", () => {
      // Given: a server instance
      const server = serverModule.createServer()

      // When: starting the server
      server.start()

      // Then: should start listening
      expect(server.documents.listen).toHaveBeenCalledWith(server.connection)
      expect(server.connection.listen).toHaveBeenCalled()
    })
  })
})
