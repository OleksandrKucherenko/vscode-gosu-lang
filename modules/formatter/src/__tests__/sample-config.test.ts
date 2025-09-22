import path from "node:path"

import { describe, expect, it } from "vitest"

import { loadFormattingConfig } from "../config"

// Classification: Unit
describe("sample formatter configuration", () => {
  // Classification: Unit
  it("matches documented expectations", async () => {
    const samplesDir = path.resolve(__dirname, "..", "..", "samples")

    const config = await loadFormattingConfig({ searchDir: samplesDir })

    expect(config).toEqual({
      indentStyle: "space",
      indentSize: 4,
      continuationIndentSize: 8,
      maxLineLength: 120,
      strictMode: false,
    })
  })
})
