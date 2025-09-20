import { promises as fs } from "node:fs"
import os from "node:os"
import path from "node:path"

import { describe, expect, it } from "vitest"

import { DEFAULT_FORMATTING_CONFIG, type FormatRequest, formatDocument } from "../index"

async function createTempWorkspace(): Promise<string> {
  return fs.mkdtemp(path.join(os.tmpdir(), "gosu-formatter-format-test-"))
}

describe("formatDocument", () => {
  it("loads workspace configuration before formatting", async () => {
    const workspaceDir = await createTempWorkspace()

    const configPath = path.join(workspaceDir, ".gosuformatting.json5")
    await fs.writeFile(
      configPath,
      `{
        indentStyle: "tab",
        indentSize: 3,
        continuationIndentSize: 6,
        maxLineLength: 140,
      }`,
      "utf8",
    )

    const request: FormatRequest = {
      uri: "file:///Example.gs",
      text: "class Example {}",
      workspaceDir,
    }

    const result = await formatDocument(request)

    expect(result.formattedText).toBe(request.text)
    expect(result.config).toEqual({
      indentStyle: "tab",
      indentSize: 3,
      continuationIndentSize: 6,
      maxLineLength: 140,
    })
  })

  it("falls back to defaults when no configuration file is present", async () => {
    const workspaceDir = await createTempWorkspace()

    const request: FormatRequest = {
      uri: "file:///Example.gs",
      text: "class Example {}",
      workspaceDir,
    }

    const result = await formatDocument(request)

    expect(result.config).toEqual(DEFAULT_FORMATTING_CONFIG)
  })

  it("allows explicit config override in the request", async () => {
    const customConfig = {
      indentStyle: "space" as const,
      indentSize: 4,
      continuationIndentSize: 8,
      maxLineLength: 120,
    }

    const request: FormatRequest = {
      uri: "file:///Example.gs",
      text: "class Example {}",
      config: customConfig,
    }

    const result = await formatDocument(request)

    expect(result.config).toEqual(customConfig)
  })
})
