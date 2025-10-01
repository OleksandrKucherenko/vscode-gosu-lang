import { readFixture } from "@gosu-lsp/shared"
import { beforeEach, describe, expect, it } from "vitest"

import { DEFAULT_FORMATTING_CONFIG, formatDocument, resetFormatterCache } from "../index"

const GOLDEN_FIXTURES = [
  "ComplexClass.gs",
  "ComplexInterface.gs",
  "ControlFlowStatements.gs",
  "ComplexTemplate.gst",
  "ComplexEnhancement.gsx",
]

describe("Language Feature Coverage - Golden Format Tests", () => {
  beforeEach(() => {
    resetFormatterCache()
  })

  // Golden Tests (Snapshot)
  it.each(GOLDEN_FIXTURES)("formats %s according to snapshot", async (fixture) => {
    const inputText = readFixture(`formatter/${fixture}`)
    const result = await formatDocument({
      uri: `file:///${fixture}`,
      text: inputText,
      config: DEFAULT_FORMATTING_CONFIG,
    })
    expect(result.formattedText).toMatchSnapshot()
  })

  // Business Value (Idempotency)
  it("formats all constructs consistently across multiple passes", async () => {
    // Test that formatting is idempotent
    for (const fixture of GOLDEN_FIXTURES) {
      const inputText = readFixture(`formatter/${fixture}`)

      const firstPass = await formatDocument({
        uri: `file:///${fixture}`,
        text: inputText,
        config: DEFAULT_FORMATTING_CONFIG,
      })

      const secondPass = await formatDocument({
        uri: `file:///${fixture}`,
        text: firstPass.formattedText,
        config: DEFAULT_FORMATTING_CONFIG,
      })

      expect(secondPass.formattedText).toBe(firstPass.formattedText)
    }
  })

  // Business Value (Error Handling)
  it("handles malformed input gracefully", async () => {
    const malformedInput = `package test

    class BadClass { function broken() { if (true) {`

    const result = await formatDocument({
      uri: "file:///BadClass.gs",
      text: malformedInput,
      config: { ...DEFAULT_FORMATTING_CONFIG, strictMode: true },
    })

    // Should return original text when parsing fails in strict mode
    expect(result.formattedText).toBe(malformedInput)
    expect(result.diagnostics?.length).toBeGreaterThan(0)
  })
})
