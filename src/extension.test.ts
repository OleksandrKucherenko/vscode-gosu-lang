import { describe, expect, it, vi } from "vitest"

// Mock vscode module since we're testing outside of VSCode environment
interface MockWorkspaceState {
  get: (key: string) => unknown
  update: (key: string, value: unknown) => Promise<void>
}

interface MockGlobalState {
  get: (key: string) => unknown
  update: (key: string, value: unknown) => Promise<void>
}

interface MockExtensionContext {
  subscriptions: { dispose(): unknown }[]
  workspaceState: MockWorkspaceState
  globalState: MockGlobalState
  extensionPath: string
  storagePath?: string
  globalStoragePath: string
  logPath: string
}

const mockVscode = {
  ExtensionContext: class implements MockExtensionContext {
    subscriptions: { dispose(): unknown }[] = []
    workspaceState: MockWorkspaceState = {
      get: () => undefined,
      update: async () => {},
    }
    globalState: MockGlobalState = {
      get: () => undefined,
      update: async () => {},
    }
    extensionPath = ""
    globalStoragePath = ""
    logPath = ""
  },
  window: {
    showInformationMessage: vi.fn(),
  },
  languages: {
    registerCompletionItemProvider: vi.fn(),
    registerHoverProvider: vi.fn(),
  },
}

vi.mock("vscode", () => mockVscode)

// Import after mocking
import { activate, deactivate } from "./extension"

describe("Extension", () => {
  it("should activate without errors", () => {
    const mockContext = new mockVscode.ExtensionContext()

    expect(() => {
      activate(mockContext as unknown as import("vscode").ExtensionContext)
    }).not.toThrow()
  })

  it("should deactivate without errors", () => {
    expect(() => {
      deactivate()
    }).not.toThrow()
  })

  it("should log activation message", () => {
    const consoleSpy = vi.spyOn(console, "log")
    const mockContext = new mockVscode.ExtensionContext()

    activate(mockContext as unknown as import("vscode").ExtensionContext)

    expect(consoleSpy).toHaveBeenCalledWith("GOSU Language Support extension is now active!")

    consoleSpy.mockRestore()
  })
})
