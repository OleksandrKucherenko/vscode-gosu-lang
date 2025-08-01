/** biome-ignore-all lint/suspicious/noExplicitAny: keep it simple for unit tests */
import { describe, expect, it } from "vitest"
import { DiagnosticSeverity } from "vscode-languageserver"
import { TextDocument } from "vscode-languageserver-textdocument"
import { GosuDiagnosticsProvider } from "../diagnostics"

describe("GosuDiagnosticsProvider Edge Cases", () => {
  describe("Severity mapping edge cases", () => {
    it("should handle unknown severity types by defaulting to error", () => {
      // Given: a diagnostics provider
      const provider = new GosuDiagnosticsProvider()

      // Create a document with mock content that will trigger the parser
      const document = TextDocument.create("file:///test.gs", "gosu", 1, "invalid gosu syntax here to trigger error")

      // Mock the parser to return an error with unknown severity
      // We'll access the private method via reflection for testing
      const convertMethod = (provider as any).convertSyntaxErrorToDiagnostic.bind(provider)

      // Create a mock syntax error with unknown severity
      const mockError = {
        line: 1,
        column: 0,
        length: 5,
        message: "Test error",
        severity: "unknown" as any, // This will trigger the default case (lines 147,149)
        code: "TEST_ERROR",
      }

      // When: converting the error to diagnostic
      const diagnostic = convertMethod(mockError, document)

      // Then: severity should default to Error (line 149)
      expect(diagnostic.severity).toBe(DiagnosticSeverity.Error)
      expect(diagnostic.message).toBe("Test error")
      expect(diagnostic.code).toBe("TEST_ERROR")
      expect(diagnostic.source).toBe("gosu")
    })

    it("should handle error severity correctly", () => {
      // Given: a diagnostics provider
      const provider = new GosuDiagnosticsProvider()

      const document = TextDocument.create("file:///test.gs", "gosu", 1, "test")
      const convertMethod = (provider as any).convertSyntaxErrorToDiagnostic.bind(provider)

      // Mock error with 'error' severity
      const mockError = {
        line: 1,
        column: 0,
        length: 5,
        message: "Error message",
        severity: "error" as const,
        code: "ERR_001",
      }

      // When: converting the error
      const diagnostic = convertMethod(mockError, document)

      // Then: should map to Error severity
      expect(diagnostic.severity).toBe(DiagnosticSeverity.Error)
    })

    it("should handle warning severity correctly", () => {
      // Given: a diagnostics provider
      const provider = new GosuDiagnosticsProvider()

      const document = TextDocument.create("file:///test.gs", "gosu", 1, "test")
      const convertMethod = (provider as any).convertSyntaxErrorToDiagnostic.bind(provider)

      // Mock error with 'warning' severity (line 147)
      const mockError = {
        line: 1,
        column: 0,
        length: 5,
        message: "Warning message",
        severity: "warning" as const,
        code: "WARN_001",
      }

      // When: converting the error
      const diagnostic = convertMethod(mockError, document)

      // Then: should map to Warning severity
      expect(diagnostic.severity).toBe(DiagnosticSeverity.Warning)
    })
  })
})
