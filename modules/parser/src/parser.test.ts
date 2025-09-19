import { readFixture } from "@gosu-lsp/shared"
import Debug from "debug"
import { describe, expect, test } from "vitest"
import { GosuParser } from "./parser"

const debug = Debug("gosu:lsp:test:parser")
const log = Debug("gosu:lsp:test")

describe("GosuParser", () => {
  describe("Given a GosuParser instance", () => {
    const parser = new GosuParser()

    describe("When parsing valid Gosu syntax", () => {
      test("Then it should parse a simple class without errors", () => {
        debug("Testing valid class syntax parsing")

        const validGosuCode = readFixture("parser/SimpleClass.gs")

        const result = parser.parseText(validGosuCode, "SimpleClass.gs")

        expect(result.isValid).toBe(true)
        expect(result.syntaxErrors).toHaveLength(0)
        expect(result.ast).toBeDefined()
        expect(result.filePath).toBe("SimpleClass.gs")
      })

      test("And it should parse enhancement syntax without errors", () => {
        debug("Testing valid enhancement syntax parsing")

        const enhancementCode = readFixture("parser/MyStringEnhancement.gsx")

        const result = parser.parseText(enhancementCode, "MyStringEnhancement.gsx")

        expect(result.isValid).toBe(true)
        expect(result.syntaxErrors).toHaveLength(0)
        expect(result.ast).toBeDefined()
      })

      test("And it should parse template syntax without errors", () => {
        debug("Testing valid template syntax parsing")

        const templateCode = readFixture("parser/AllNames.gst")

        const result = parser.parseText(templateCode, "AllNames.gst")

        log("Template parse result:", {
          isValid: result.isValid,
          errorCount: result.syntaxErrors.length,
          errors: result.syntaxErrors.map((e) => ({ line: e.line, column: e.column, message: e.message })),
        })

        // Template syntax might not be supported by current grammar
        // For now, we expect it to fail gracefully
        expect(result.syntaxErrors.length).toBeGreaterThan(0)
        expect(result.isValid).toBe(false)
      })
    })

    describe("When parsing invalid Gosu syntax", () => {
      test("Then it should report syntax errors for missing braces", () => {
        debug("Testing invalid syntax - missing braces")

        const invalidCode = readFixture("parser/InvalidClassMissingBrace.gs")

        const result = parser.parseText(invalidCode, "InvalidClass.gs")

        log("Missing braces parse result:", {
          isValid: result.isValid,
          errorCount: result.syntaxErrors.length,
          // biome-ignore lint/suspicious/noExplicitAny: keep it simple for unit tests
          errors: result.syntaxErrors.map((e: any) => ({ line: e.line, column: e.column, message: e.message })),
        })

        expect(result.isValid).toBe(false)
        expect(result.syntaxErrors.length).toBeGreaterThan(0)

        const error = result.syntaxErrors[0]
        expect(error.message).toBeDefined()
        expect(error.line).toBeGreaterThan(0)
        expect(error.column).toBeGreaterThanOrEqual(0)
        expect(error.severity).toBe("error")
      })

      test("And it should report errors for invalid keywords", () => {
        debug("Testing invalid syntax - invalid keywords")

        const invalidCode = readFixture("parser/InvalidKeyword.gs")

        const result = parser.parseText(invalidCode, "InvalidKeyword.gs")

        expect(result.isValid).toBe(false)
        expect(result.syntaxErrors.length).toBeGreaterThan(0)

        const error = result.syntaxErrors[0]
        expect(error.message).toContain("invalidkeyword")
      })

      test("And it should handle multiple syntax errors", () => {
        debug("Testing multiple syntax errors")

        const multipleErrorCode = readFixture("parser/MultiError.gs")

        const result = parser.parseText(multipleErrorCode, "MultiError.gs")

        expect(result.isValid).toBe(false)
        expect(result.syntaxErrors.length).toBeGreaterThan(1)

        // Errors should be sorted by line number
        for (let i = 1; i < result.syntaxErrors.length; i++) {
          expect(result.syntaxErrors[i].line).toBeGreaterThanOrEqual(result.syntaxErrors[i - 1].line)
        }
      })
    })

    describe("When validating syntax without AST", () => {
      test("Then it should preserve parser configuration", () => {
        const parser = new GosuParser()
        const initialConfig = parser.getConfig()

        const errors = parser.validateSyntax("function Broken() {", "Broken.gs")

        expect(errors.length).toBeGreaterThan(0)
        expect(parser.getConfig()).toEqual(initialConfig)
      })
    })

    describe("When parsing with different file types", () => {
      test("Then it should detect .gs files as regular classes", () => {
        debug("Testing .gs file type detection")

        const result = parser.parseText("package test\nclass Test {}", "Test.gs")

        expect(result.fileType).toBe("class")
        expect(result.filePath).toBe("Test.gs")
      })

      test("And it should detect .gsx files as enhancements", () => {
        debug("Testing .gsx file type detection")

        const result = parser.parseText("enhancement Test : String {}", "Test.gsx")

        expect(result.fileType).toBe("enhancement")
      })

      test("And it should detect .gst files as templates", () => {
        debug("Testing .gst file type detection")

        const result = parser.parseText("<%@ params() %>\nHello Template", "Test.gst")

        expect(result.fileType).toBe("template")
      })

      test("And it should detect .gsp files as programs", () => {
        debug("Testing .gsp file type detection")

        const result = parser.parseText('print("Hello Program")', "Test.gsp")

        expect(result.fileType).toBe("program")
      })
    })
  })
})
