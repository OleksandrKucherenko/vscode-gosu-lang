import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from "vitest"
import type { Message } from "vscode-jsonrpc"

vi.mock("vscode", async () => import("../test/stubs/vscode"))

import * as vscode from "vscode"

let handleClientError: typeof import("./extension")["handleClientError"]
let registerCommands: typeof import("./extension")["registerCommands"]
let ClientErrorAction: typeof import("./extension")["ClientErrorAction"]

beforeAll(async () => {
  ;({ handleClientError, registerCommands, ClientErrorAction } = await import("./extension"))
})

// Classification: Unit
describe("registerCommands", () => {
  const handlers: Record<string, () => unknown> = {}

  beforeEach(() => {
    vi.restoreAllMocks()
    Object.keys(handlers).forEach((key) => {
      delete handlers[key]
    })
    vi.spyOn(vscode.commands, "registerCommand").mockImplementation((command, callback) => {
      handlers[command] = callback
      return { dispose: vi.fn() }
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
    Object.keys(handlers).forEach((key) => {
      delete handlers[key]
    })
  })

  // Classification: Unit
  it("registers Gosu client management commands", () => {
    const context = { subscriptions: [] as Array<{ dispose(): void }> }

    registerCommands(context as unknown as vscode.ExtensionContext)

    const registered = Object.keys(handlers)

    expect(registered).toContain("gosu.restartLanguageServer")
    expect(registered).toContain("gosu.showLanguageServerOutput")
    expect(registered).toContain("gosu.showLanguageServerStatus")
    expect(context.subscriptions).toHaveLength(3)
  })
})

// Classification: Unit
describe("handleClientError", () => {
  const sampleMessage: Message = {
    jsonrpc: "2.0",
  }

  beforeEach(() => {
    vi.restoreAllMocks()
    vi.spyOn(vscode.window, "showErrorMessage").mockResolvedValue(undefined)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  // Classification: Unit
  it("continues retries for the first four failures", () => {
    const action = handleClientError(new Error("failure"), sampleMessage, 3)

    expect(action).toBe(ClientErrorAction.Continue)
    expect(vscode.window.showErrorMessage).not.toHaveBeenCalled()
  })

  // Classification: Unit
  it("halts after repeated failures and notifies the user", () => {
    const action = handleClientError(new Error("failure"), sampleMessage, 6)

    expect(action).toBe(ClientErrorAction.Shutdown)
    expect(vscode.window.showErrorMessage).toHaveBeenCalled()
  })
})
