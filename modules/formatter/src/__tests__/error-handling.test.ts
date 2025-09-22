import { readFixture } from "@gosu-lsp/shared/test-utils"
import { describe, expect, it } from "vitest"
import { DEFAULT_FORMATTING_CONFIG } from "../config"
import { formatDocument } from "../index"

describe("Error Handling", () => {
  // Business Value: Ensures the formatter provides clear feedback on syntax errors
  describe("Syntax Error Diagnostics", () => {
    it("emits structured diagnostics for syntax errors", async () => {
      const malformedCode = readFixture("cleanup/malformed.gs")
      const result = await formatDocument({
        text: malformedCode,
        uri: "file:///test.gs",
      })
      expect(result.diagnostics).toBeDefined()
      expect(result.diagnostics).toHaveLength(2)
      expect(result.diagnostics?.[0].message).toContain("mismatched input")
    })
  })

  // Business Value: Ensures the formatter can recover from errors and format the rest of the file
  describe("Anchor Recovery", () => {
    it("emits ignored lines for unrecoverable function scopes", async () => {
      const malformedCode = readFixture("cleanup/malformed.gs")
      const result = await formatDocument({
        text: malformedCode,
        uri: "file:///test.gs",
      })
      expect(result.ignoredLines).toBeDefined()
      expect(result.ignoredLines).toEqual([2])
    })

    // Line Coverage: Ensures that well-formed code does not trigger recovery logic
    it("does not emit ignored lines for well-formed code", async () => {
      const wellFormedCode = readFixture("cleanup/well-formed.gs")
      const result = await formatDocument({
        text: wellFormedCode,
        uri: "file:///test.gs",
      })
      expect(result.ignoredLines).toBeUndefined()
    })
  })

  // Business Value: Allows users to choose between strict and tolerant formatting
  describe("Strict vs Tolerant Mode", () => {
    it.each([
      { mode: "tolerant", strict: false, shouldFormat: true },
      { mode: "strict", strict: true, shouldFormat: false },
    ])("$mode mode behavior with syntax errors", async ({ strict, shouldFormat }) => {
      const codeWithSyntaxError = readFixture("cleanup/malformed.gs")
      const result = await formatDocument({
        text: codeWithSyntaxError,
        uri: "file:///test.gs",
        config: { ...DEFAULT_FORMATTING_CONFIG, strictMode: strict },
      })

      if (shouldFormat) {
        expect(result.formattedText).not.toBe(codeWithSyntaxError)
        expect(result.formattedText).toContain("class TestClass")
      } else {
        expect(result.formattedText).toBe(codeWithSyntaxError)
      }
    })
  })
})
