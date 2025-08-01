import { readFixture } from "@gosu-lsp/shared"
import Debug from "debug"
import { beforeEach, describe, expect, test } from "vitest"
import { DiagnosticSeverity } from "vscode-languageserver"
import { TextDocument } from "vscode-languageserver-textdocument"
import { createDiagnosticsProvider } from "../diagnostics"

const debug = Debug("gosu:lsp:test:diagnostics")

describe("GosuDiagnosticsProvider", () => {
  let diagnosticsProvider: ReturnType<typeof createDiagnosticsProvider>

  beforeEach(() => {
    debug("Setting up diagnostics provider")
    diagnosticsProvider = createDiagnosticsProvider()
  })

  describe("Given a diagnostics provider", () => {
    describe("When analyzing valid Gosu code", () => {
      test("Then it should return no diagnostics for valid class", () => {
        debug("Testing valid Gosu class")

        const validCode = readFixture("diagnostics/ValidClass.gs")

        const document = TextDocument.create("file:///test/ValidClass.gs", "gosu", 1, validCode)
        const diagnostics = diagnosticsProvider.validateDocument(document)

        expect(diagnostics).toHaveLength(0)
      })

      test("And it should return no diagnostics for valid enhancement", () => {
        debug("Testing valid Gosu enhancement")

        const validCode = readFixture("diagnostics/StringEnhancement.gsx")

        const document = TextDocument.create("file:///test/StringEnhancement.gsx", "gosu", 1, validCode)
        const diagnostics = diagnosticsProvider.validateDocument(document)

        expect(diagnostics).toHaveLength(0)
      })
    })

    describe("When analyzing invalid Gosu code", () => {
      test("Then it should return syntax error diagnostics for missing braces", () => {
        debug("Testing invalid Gosu syntax - missing braces")

        const invalidCode = readFixture("diagnostics/InvalidClassMissingBrace.gs")

        const document = TextDocument.create("file:///test/InvalidClass.gs", "gosu", 1, invalidCode)
        const diagnostics = diagnosticsProvider.validateDocument(document)

        expect(diagnostics.length).toBeGreaterThan(0)

        const diagnostic = diagnostics[0]
        expect(diagnostic.severity).toBe(DiagnosticSeverity.Error)
        expect(diagnostic.message).toBeDefined()
        expect(diagnostic.message.length).toBeGreaterThan(0)
        expect(diagnostic.range.start.line).toBeGreaterThanOrEqual(0)
        expect(diagnostic.range.start.character).toBeGreaterThanOrEqual(0)
        expect(diagnostic.source).toBe("gosu")
      })

      test("And it should return diagnostics for invalid keywords", () => {
        debug("Testing invalid Gosu syntax - invalid keywords")

        const invalidCode = readFixture("diagnostics/InvalidKeyword.gs")

        const document = TextDocument.create("file:///test/InvalidKeyword.gs", "gosu", 1, invalidCode)
        const diagnostics = diagnosticsProvider.validateDocument(document)

        expect(diagnostics.length).toBeGreaterThan(0)

        const diagnostic = diagnostics[0]
        expect(diagnostic.severity).toBe(DiagnosticSeverity.Error)
        expect(diagnostic.message).toContain("invalidkeyword")
        expect(diagnostic.source).toBe("gosu")
      })

      test("And it should handle multiple syntax errors", () => {
        debug("Testing multiple syntax errors")

        const multipleErrorCode = readFixture("diagnostics/MultiError.gs")

        const document = TextDocument.create("file:///test/MultiError.gs", "gosu", 1, multipleErrorCode)
        const diagnostics = diagnosticsProvider.validateDocument(document)

        expect(diagnostics.length).toBeGreaterThan(1)

        // All diagnostics should be errors with valid ranges
        diagnostics.forEach((diagnostic) => {
          expect(diagnostic.severity).toBe(DiagnosticSeverity.Error)
          expect(diagnostic.message).toBeDefined()
          expect(diagnostic.range.start.line).toBeGreaterThanOrEqual(0)
          expect(diagnostic.range.start.character).toBeGreaterThanOrEqual(0)
          expect(diagnostic.source).toBe("gosu")
        })

        // Diagnostics should be sorted by line number
        for (let i = 1; i < diagnostics.length; i++) {
          expect(diagnostics[i].range.start.line).toBeGreaterThanOrEqual(diagnostics[i - 1].range.start.line)
        }
      })
    })

    describe("When analyzing different file types", () => {
      test("Then it should handle .gs files correctly", () => {
        debug("Testing .gs file diagnostics")

        const document = TextDocument.create("file:///test/Test.gs", "gosu", 1, "invalid syntax")
        const diagnostics = diagnosticsProvider.validateDocument(document)

        expect(diagnostics.length).toBeGreaterThan(0)
        expect(diagnostics[0].source).toBe("gosu")
      })

      test("And it should handle .gsx files correctly", () => {
        debug("Testing .gsx file diagnostics")

        const document = TextDocument.create("file:///test/Test.gsx", "gosu", 1, "invalid syntax")
        const diagnostics = diagnosticsProvider.validateDocument(document)

        expect(diagnostics.length).toBeGreaterThan(0)
        expect(diagnostics[0].source).toBe("gosu")
      })

      test("And it should handle .gst files correctly", () => {
        debug("Testing .gst file diagnostics")

        const document = TextDocument.create("file:///test/Test.gst", "gosu", 1, "invalid syntax")
        const diagnostics = diagnosticsProvider.validateDocument(document)

        expect(diagnostics.length).toBeGreaterThan(0)
        expect(diagnostics[0].source).toBe("gosu")
      })

      test("And it should handle .gsp files correctly", () => {
        debug("Testing .gsp file diagnostics")

        const document = TextDocument.create("file:///test/Test.gsp", "gosu", 1, "invalid syntax")
        const diagnostics = diagnosticsProvider.validateDocument(document)

        expect(diagnostics.length).toBeGreaterThan(0)
        expect(diagnostics[0].source).toBe("gosu")
      })
    })

    describe("When caching is enabled", () => {
      test("Then it should cache results for unchanged documents", () => {
        debug("Testing diagnostics caching")

        const code = "invalid syntax"
        const document = TextDocument.create("file:///test/Cached.gs", "gosu", 1, code)

        // First call
        const firstResult = diagnosticsProvider.validateDocument(document)

        // Second call with same document
        const secondResult = diagnosticsProvider.validateDocument(document)

        expect(firstResult).toEqual(secondResult)
        expect(firstResult.length).toBeGreaterThan(0)
      })

      test("And it should invalidate cache when document changes", () => {
        debug("Testing cache invalidation")

        const invalidCode = "invalid syntax"
        const validCode = "package test\nclass Valid {}"

        const document1 = TextDocument.create("file:///test/Cache.gs", "gosu", 1, invalidCode)
        const document2 = TextDocument.create("file:///test/Cache.gs", "gosu", 2, validCode)

        const firstResult = diagnosticsProvider.validateDocument(document1)
        const secondResult = diagnosticsProvider.validateDocument(document2)

        expect(firstResult.length).toBeGreaterThan(0)
        expect(secondResult.length).toBe(0)
      })
    })
  })
})
