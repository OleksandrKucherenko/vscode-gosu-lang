import { promises as fs } from "node:fs"
import os from "node:os"
import path from "node:path"

import { afterEach, describe, expect, it } from "vitest"

import { DEFAULT_FORMATTING_CONFIG, type FormattingConfig, loadFormattingConfig } from "../config"

const TEST_PREFIX = "gosu-formatter-config-test-"

async function createTempDir(): Promise<string> {
  return fs.mkdtemp(path.join(os.tmpdir(), TEST_PREFIX))
}

async function removeDir(dir: string): Promise<void> {
  await fs.rm(dir, { recursive: true, force: true })
}

// Classification: Unit
describe("loadFormattingConfig", () => {
  const tempDirs: string[] = []

  afterEach(async () => {
    while (tempDirs.length > 0) {
      const dir = tempDirs.pop()
      if (dir) {
        await removeDir(dir)
      }
    }
  })

  // Classification: Unit
  it("returns defaults when config file is absent", async () => {
    const dir = await createTempDir()
    tempDirs.push(dir)

    const config = await loadFormattingConfig({ searchDir: dir })

    expect(config).toEqual(DEFAULT_FORMATTING_CONFIG)
  })

  // Classification: Unit
  it("merges values from .gosuformatting.jsonc using JSON5 syntax", async () => {
    const dir = await createTempDir()
    tempDirs.push(dir)

    const configFilePath = path.join(dir, ".gosuformatting.jsonc")
    const fileContents = `{
      // Custom indentation settings
      "indentStyle": "tab",
      "indentSize": 3,
      "continuationIndentSize": 6,
      "maxLineLength": 140,
    }`
    await fs.writeFile(configFilePath, fileContents, "utf8")

    const config = await loadFormattingConfig({ searchDir: dir })

    const expected: FormattingConfig = {
      ...DEFAULT_FORMATTING_CONFIG,
      indentStyle: "tab",
      indentSize: 3,
      continuationIndentSize: 6,
      maxLineLength: 140,
    }

    expect(config).toEqual(expected)
  })

  // Classification: Unit
  it("supports custom config file names when provided", async () => {
    const dir = await createTempDir()
    tempDirs.push(dir)

    const configFileName = "formatter-settings.jsonc"
    await fs.writeFile(
      path.join(dir, configFileName),
      `{
        "indentSize": 4,
      }`,
      "utf8",
    )

    const config = await loadFormattingConfig({
      searchDir: dir,
      configFileName,
    })

    expect(config.indentSize).toBe(4)
    expect(config.maxLineLength).toBe(DEFAULT_FORMATTING_CONFIG.maxLineLength)
  })

  // Classification: Unit
  it("throws a descriptive error for invalid configuration content", async () => {
    const dir = await createTempDir()
    tempDirs.push(dir)

    await fs.writeFile(
      path.join(dir, ".gosuformatting.jsonc"),
      `{
        "indentSize": invalid,
      }`,
      "utf8",
    )

    await expect(loadFormattingConfig({ searchDir: dir })).rejects.toThrow(/invalid jsonc formatting configuration/i)
  })

  // Classification: Unit
  it("loads .gosuformatting.json5 defaults when JSONC file is absent", async () => {
    const dir = await createTempDir()
    tempDirs.push(dir)

    const configFilePath = path.join(dir, ".gosuformatting.json5")
    const fileContents = `{
      indentStyle: 'tab',
      indentSize: 3,
      continuationIndentSize: 6,
      maxLineLength: 140,
    }`
    await fs.writeFile(configFilePath, fileContents, "utf8")

    const config = await loadFormattingConfig({ searchDir: dir })

    const expected: FormattingConfig = {
      ...DEFAULT_FORMATTING_CONFIG,
      indentStyle: "tab",
      indentSize: 3,
      continuationIndentSize: 6,
      maxLineLength: 140,
    }

    expect(config).toEqual(expected)
  })

  // Classification: Unit
  it("rejects JSON5-only syntax when using .jsonc extension", async () => {
    const dir = await createTempDir()
    tempDirs.push(dir)

    await fs.writeFile(
      path.join(dir, ".gosuformatting.jsonc"),
      `{
        indentStyle: 'tab',
      }`,
      "utf8",
    )

    await expect(loadFormattingConfig({ searchDir: dir })).rejects.toThrow(/invalid jsonc formatting configuration/i)
  })
})
