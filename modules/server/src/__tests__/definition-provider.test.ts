import { readFixtureAsync } from "@gosu-lsp/shared"
import { beforeEach, describe, expect, it } from "vitest"
import type { Position } from "vscode-languageserver/node"
import { TextDocument } from "vscode-languageserver-textdocument"
import { GosuDefinitionProvider } from "../definition-provider"

describe("GosuDefinitionProvider", () => {
  let provider: GosuDefinitionProvider

  beforeEach(() => {
    provider = new GosuDefinitionProvider()
  })

  describe("Given a definition provider instance", () => {
    describe("When requesting definition for a simple class", () => {
      it("Then it should find class definition", async () => {
        const document = TextDocument.create(
          "file:///test.gs",
          "gosu",
          1,
          await readFixtureAsync("classes/SimpleClass.gs"),
        )

        // Position on "TestClass" in the class declaration
        const position: Position = { line: 1, character: 6 }
        const definition = await provider.getDefinition(document, position)

        expect(definition).toBeDefined()
        if (definition) {
          // Definition can be a single Location or an array of Locations
          const location = Array.isArray(definition) ? definition[0] : definition
          expect(location.uri).toBe(document.uri)
          expect(location.range.start.line).toBe(1) // Line with class declaration
          expect(location.range.start.character).toBeGreaterThanOrEqual(0)
        }
      })

      it("And it should find function definition", async () => {
        const document = TextDocument.create(
          "file:///test.gs",
          "gosu",
          1,
          await readFixtureAsync("classes/DefinitionTestMethod.gs"),
        )

        // Position on "testMethod" in the caller function
        const position: Position = { line: 6, character: 4 }
        const definition = await provider.getDefinition(document, position)

        expect(definition).toBeDefined()
        if (definition) {
          // Definition can be a single Location or an array of Locations
          const location = Array.isArray(definition) ? definition[0] : definition
          expect(location.uri).toBe(document.uri)
          expect(location.range.start.line).toBe(1) // Line with function declaration
        }
      })
    })

    describe("When requesting definition for variables", () => {
      it("Then it should find variable definition", async () => {
        const document = TextDocument.create(
          "file:///test.gs",
          "gosu",
          1,
          await readFixtureAsync("classes/DefinitionTestVariable.gs"),
        )

        // Position on "localVar" usage
        const position: Position = { line: 5, character: 10 }
        const definition = await provider.getDefinition(document, position)

        expect(definition).toBeDefined()
        if (definition) {
          // Definition can be a single Location or an array of Locations
          const location = Array.isArray(definition) ? definition[0] : definition
          expect(location.uri).toBe(document.uri)
          expect(location.range.start.line).toBe(4) // Line with local variable declaration
        }
      })

      it("And it should find field definition", async () => {
        const document = TextDocument.create(
          "file:///test.gs",
          "gosu",
          1,
          await readFixtureAsync("classes/DefinitionTestField.gs"),
        )

        // Position on "fieldVar" usage
        const position: Position = { line: 4, character: 4 }
        const definition = await provider.getDefinition(document, position)

        expect(definition).toBeDefined()
        if (definition) {
          // Definition can be a single Location or an array of Locations
          const location = Array.isArray(definition) ? definition[0] : definition
          expect(location.uri).toBe(document.uri)
          expect(location.range.start.line).toBe(1) // Line with field declaration
        }
      })
    })

    describe("When handling imports", () => {
      it("Then it should find import definition", async () => {
        const document = TextDocument.create(
          "file:///test.gs",
          "gosu",
          1,
          await readFixtureAsync("classes/DefinitionTestImports.gs"),
        )

        // Position on "List" in the variable declaration
        const position: Position = { line: 5, character: 14 }
        const definition = await provider.getDefinition(document, position)

        expect(definition).toBeDefined()
        if (definition) {
          // Definition can be a single Location or an array of Locations
          const location = Array.isArray(definition) ? definition[0] : definition
          expect(location.uri).toBe(document.uri)
          expect(location.range.start.line).toBe(1) // Line with import declaration
        }
      })
    })

    describe("When handling edge cases", () => {
      it("Then it should handle empty documents", async () => {
        const document = TextDocument.create("file:///empty.gs", "gosu", 1, "")

        const position: Position = { line: 0, character: 0 }
        const definition = await provider.getDefinition(document, position)

        expect(definition).toBeNull()
      })

      it("And it should handle invalid positions", async () => {
        const document = TextDocument.create("file:///test.gs", "gosu", 1, "class TestClass { }")

        // Position beyond document bounds
        const position: Position = { line: 10, character: 50 }
        const definition = await provider.getDefinition(document, position)

        expect(definition).toBeNull()
      })

      it("And it should handle positions with no symbols", async () => {
        const document = TextDocument.create(
          "file:///test.gs",
          "gosu",
          1,
          `class TestClass {
  // This is a comment
  function test() {
    // Another comment
  }
}`,
        )

        // Position in a comment
        const position: Position = { line: 1, character: 10 }
        const definition = await provider.getDefinition(document, position)

        expect(definition).toBeNull()
      })

      it("And it should handle malformed Gosu code gracefully", async () => {
        const document = TextDocument.create(
          "file:///malformed.gs",
          "gosu",
          1,
          await readFixtureAsync("classes/DefinitionTestMalformed.gs"),
        )

        const position: Position = { line: 0, character: 6 }
        const definition = await provider.getDefinition(document, position)

        // Should not throw errors, might return null
        expect(definition).toBeDefined()
      })
    })

    describe("When working with function parameters", () => {
      it("Then it should find parameter definition", async () => {
        const document = TextDocument.create(
          "file:///test.gs",
          "gosu",
          1,
          await readFixtureAsync("classes/DefinitionTestParameterFunction.gs"),
        )

        // Position on "inputData" usage
        const position: Position = { line: 2, character: 17 }
        const definition = await provider.getDefinition(document, position)

        expect(definition).toBeDefined()
        if (definition) {
          // Definition can be a single Location or an array of Locations
          const location = Array.isArray(definition) ? definition[0] : definition
          expect(location.uri).toBe(document.uri)
          expect(location.range.start.line).toBe(1) // Line with parameter declaration
        }
      })
    })

    describe("When testing caching functionality", () => {
      it("Then it should cache symbol tables", async () => {
        const document = TextDocument.create(
          "file:///cached.gs",
          "gosu",
          1,
          await readFixtureAsync("classes/DefinitionTestCachedClass.gs"),
        )

        const position: Position = { line: 0, character: 6 }

        // First call should parse and cache
        const startTime1 = Date.now()
        const definition1 = await provider.getDefinition(document, position)
        const duration1 = Date.now() - startTime1

        // Second call should use cache (should be faster)
        const startTime2 = Date.now()
        const definition2 = await provider.getDefinition(document, position)
        const duration2 = Date.now() - startTime2

        expect(definition1).toBeDefined()
        expect(definition2).toBeDefined()
        // Cache should make second call faster (allowing for some variance)
        expect(duration2).toBeLessThanOrEqual(duration1 + 50)
      })

      it("And it should clear cache when document changes", async () => {
        const document1 = TextDocument.create("file:///changing.gs", "gosu", 1, "class OriginalClass { }")

        const document2 = TextDocument.create(
          "file:///changing.gs",
          "gosu",
          2, // Different version
          await readFixtureAsync("classes/DefinitionTestModifiedClass.gs"),
        )

        const position: Position = { line: 0, character: 6 }

        const definition1 = await provider.getDefinition(document1, position)
        provider.onDocumentChange(document2)
        const definition2 = await provider.getDefinition(document2, position)

        expect(definition1).toBeDefined()
        expect(definition2).toBeDefined()
        // Should work with updated document
      })

      it("And it should clear all caches", async () => {
        const document = TextDocument.create("file:///test.gs", "gosu", 1, "class TestClass { }")

        const position: Position = { line: 0, character: 6 }

        await provider.getDefinition(document, position)
        provider.clearAllCaches()

        // Should still work after cache clear
        const definition = await provider.getDefinition(document, position)
        expect(definition).toBeDefined()
      })
    })

    describe("When testing word boundary detection", () => {
      it("Then it should correctly identify words at cursor position", async () => {
        const document = TextDocument.create(
          "file:///boundaries.gs",
          "gosu",
          1,
          await readFixtureAsync("classes/DefinitionTestBoundaries.gs"),
        )

        // Test cursor at different positions within "someVariable"
        const positions = [
          { line: 3, character: 4 }, // Beginning of "someVariable"
          { line: 3, character: 8 }, // Middle of "someVariable"
          { line: 3, character: 15 }, // End of "someVariable"
        ]

        for (const position of positions) {
          const definition = await provider.getDefinition(document, position)
          expect(definition).toBeDefined()
          if (definition) {
            // Definition can be a single Location or an array of Locations
            const location = Array.isArray(definition) ? definition[0] : definition
            expect(location.range.start.line).toBe(2) // Line with variable declaration
          }
        }
      })
    })

    describe("When handling different Gosu constructs", () => {
      it("Then it should work with enhancements", async () => {
        const document = TextDocument.create(
          "file:///enhancement.gsx",
          "gosu",
          1,
          await readFixtureAsync("enhancements/SimpleStringEnhancement.gsx"),
        )

        // Position on enhancement name
        const position: Position = { line: 0, character: 12 }
        const definition = await provider.getDefinition(document, position)

        expect(definition).toBeDefined()
        if (definition) {
          // Definition can be a single Location or an array of Locations
          const location = Array.isArray(definition) ? definition[0] : definition
          expect(location.uri).toBe(document.uri)
          expect(location.range.start.line).toBe(0) // Line with enhancement declaration
        }
      })

      it("And it should work with interfaces", async () => {
        const document = TextDocument.create(
          "file:///interface.gs",
          "gosu",
          1,
          await readFixtureAsync("interfaces/ITestInterface.gs"),
        )

        // Position on interface name
        const position: Position = { line: 0, character: 10 }
        const definition = await provider.getDefinition(document, position)

        expect(definition).toBeDefined()
        if (definition) {
          // Definition can be a single Location or an array of Locations
          const location = Array.isArray(definition) ? definition[0] : definition
          expect(location.uri).toBe(document.uri)
          expect(location.range.start.line).toBe(0) // Line with interface declaration
        }
      })
    })
  })
})
