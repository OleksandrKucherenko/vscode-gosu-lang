import { readFileSync } from "node:fs"
import { join } from "node:path"
import { readFixture } from "@gosu-lsp/shared"
import { beforeEach, describe, expect, it } from "vitest"

import { DEFAULT_FORMATTING_CONFIG, formatDocument, resetFormatterCache } from "../index"

// Golden format fixtures representing the expected formatted output
const GOLDEN_FIXTURES = [
  {
    name: "Complex Class",
    input: "ComplexClass.gs",
    expectedFile: "ComplexClass.expected",
  },
  {
    name: "Complex Interface",
    input: "ComplexInterface.gs",
    expectedFile: "ComplexInterface.expected",
  },
  {
    name: "Control Flow Statements",
    input: "ControlFlowStatements.gs",
    expectedFile: "ControlFlowStatements.expected",
  },
  {
    name: "Complex Template",
    input: "ComplexTemplate.gst",
    expectedFile: "ComplexTemplate.expected",
  },
  {
    name: "Complex Enhancement",
    input: "ComplexEnhancement.gsx",
    expectedFile: "ComplexEnhancement.expected",
  },
]

describe("Language Feature Coverage - Golden Format Tests", () => {
  beforeEach(() => {
    resetFormatterCache()
  })

  it.each(GOLDEN_FIXTURES)("formats $name according to golden standard", async ({ name, input, expectedFile }) => {
    const inputText = readFixture(`formatter/${input}`)
    const expectedPath = join(__dirname, "../../../../test/expects", expectedFile)
    const expected = readFileSync(expectedPath, "utf-8")

    const result = await formatDocument({
      uri: `file:///${input}`,
      text: inputText,
      config: DEFAULT_FORMATTING_CONFIG,
    })

    expect(result.formattedText).toBe(expected)
  })

  it("formats all constructs consistently across multiple passes", async () => {
    // Test that formatting is idempotent
    for (const { name, input } of GOLDEN_FIXTURES) {
      const inputText = readFixture(`formatter/${input}`)

      const firstPass = await formatDocument({
        uri: `file:///${input}`,
        text: inputText,
        config: DEFAULT_FORMATTING_CONFIG,
      })

      const secondPass = await formatDocument({
        uri: `file:///${input}`,
        text: firstPass.formattedText,
        config: DEFAULT_FORMATTING_CONFIG,
      })

      expect(secondPass.formattedText).toBe(firstPass.formattedText)
    }
  })

  it("handles malformed input gracefully", async () => {
    const malformedInput = `package test

    class BadClass { function broken() { if (true) {`

    const result = await formatDocument({
      uri: "file:///BadClass.gs",
      text: malformedInput,
      config: DEFAULT_FORMATTING_CONFIG,
    })

    // Should return original text when parsing fails
    expect(result.formattedText).toBe(malformedInput)
    expect(result.diagnostics?.length).toBeGreaterThan(0)
  })
})
