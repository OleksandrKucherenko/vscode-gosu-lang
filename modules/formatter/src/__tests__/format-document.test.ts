import { promises as fs } from "node:fs"
import os from "node:os"
import path from "node:path"

import { describe, expect, it } from "vitest"

import { DEFAULT_FORMATTING_CONFIG, type FormatRequest, formatDocument } from "../index"

async function createTempWorkspace(): Promise<string> {
  return fs.mkdtemp(path.join(os.tmpdir(), "gosu-formatter-format-test-"))
}

// Classification: Unit
describe("formatDocument", () => {
  // Classification: Unit
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

    expect(result.formattedText).toBe("class Example {\n}\n")
    expect(result.config).toEqual({
      indentStyle: "tab",
      indentSize: 3,
      continuationIndentSize: 6,
      maxLineLength: 140,
      strictMode: false,
    })
  })

  // Classification: Unit
  it("falls back to defaults when no configuration file is present", async () => {
    const workspaceDir = await createTempWorkspace()

    const request: FormatRequest = {
      uri: "file:///Example.gs",
      text: "class Example {}",
      workspaceDir,
    }

    const result = await formatDocument(request)

    expect(result.config).toEqual(DEFAULT_FORMATTING_CONFIG)
    expect(result.ignoredAnchors?.length ?? 0).toBe(0)
    expect(result.ignoredLines?.length ?? 0).toBe(0)
    expect(result.diagnostics ?? []).toHaveLength(0)
  })

  // Classification: Unit
  it("allows explicit config override in the request", async () => {
    const customConfig = {
      indentStyle: "space" as const,
      indentSize: 4,
      continuationIndentSize: 8,
      maxLineLength: 120,
      strictMode: false,
    }

    const request: FormatRequest = {
      uri: "file:///Example.gs",
      text: "class Example {}",
      config: customConfig,
    }

    const result = await formatDocument(request)

    expect(result.config).toEqual(customConfig)
    expect(result.ignoredAnchors?.length ?? 0).toBe(0)
    expect(result.ignoredLines?.length ?? 0).toBe(0)
    expect(result.diagnostics ?? []).toHaveLength(0)
  })

  // Classification: Unit
  it("marks broken function anchors as ignored ranges", async () => {
    const gosuSource = `
class Sample {
  function ok() {
    return 1
  }

  function broken() {
    if (true) {
      return 2
  // missing braces
}
`

    const result = await formatDocument({
      uri: "file:///Broken.gs",
      text: gosuSource,
    })

    expect(result.ignoredAnchors).toBeDefined()
    const brokenAnchor = result.ignoredAnchors?.find((anchor) => anchor.name === "broken")
    expect(brokenAnchor).toBeDefined()
    expect(brokenAnchor?.isComplete).toBe(false)
    expect(brokenAnchor?.lines.length).toBeGreaterThan(0)
    expect(result.ignoredLines).toEqual(brokenAnchor?.lines)

    expect(result.diagnostics).toBeDefined()
    const anchorDiagnostic = result.diagnostics?.find((diag) => diag.code === "ANCHOR_RECOVERY")
    expect(anchorDiagnostic).toBeDefined()
    expect(anchorDiagnostic?.line).toBe(brokenAnchor?.lines[0])
    expect(anchorDiagnostic?.severity).toBe("warning")
    const parserDiagnostic = result.diagnostics?.find((diag) => diag.source === "parser")
    expect(parserDiagnostic).toBeDefined()
  })
})
