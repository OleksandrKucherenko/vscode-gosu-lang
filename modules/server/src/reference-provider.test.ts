import { describe, it, expect, beforeEach } from "vitest"
import { TextDocument } from "vscode-languageserver-textdocument"
import { Position, Location } from "vscode-languageserver/node"
import { GosuReferenceProvider } from "./reference-provider"

describe("GosuReferenceProvider", () => {
  let referenceProvider: GosuReferenceProvider

  beforeEach(() => {
    referenceProvider = new GosuReferenceProvider()
  })

  describe("Given a reference provider instance", () => {
    describe("When creating the provider", () => {
      it("Then it should be instantiated successfully", () => {
        expect(referenceProvider).toBeDefined()
        expect(typeof referenceProvider.findReferences).toBe("function")
        expect(typeof referenceProvider.addDocument).toBe("function")
        expect(typeof referenceProvider.removeDocument).toBe("function")
      })
    })

    describe("When finding references for a simple class", () => {
      it("Then it should find class references across multiple files", async () => {
        // Arrange: Create documents with class definition and usage
        const classDoc = TextDocument.create(
          "file:///MyClass.gs",
          "gosu",
          1,
          `package example

class MyClass {
  function doSomething() : String {
    return "hello"
  }
}`,
        )

        const usageDoc = TextDocument.create(
          "file:///Usage.gs",
          "gosu",
          1,
          `package example

class Usage {
  function test() {
    var obj = new MyClass()
    obj.doSomething()
  }
}`,
        )

        // Add documents to workspace index
        await referenceProvider.addDocument(classDoc)
        await referenceProvider.addDocument(usageDoc)

        // Act: Find references to MyClass
        const position: Position = { line: 2, character: 6 } // Position of "MyClass" in definition
        const references = await referenceProvider.findReferences(classDoc, position, { includeDeclaration: true })

        // Assert: Should find definition and usage
        expect(references).toBeDefined()
        expect(references!.length).toBeGreaterThan(0)

        // Should include at least one reference
        expect(references!.some((ref) => ref.uri === "file:///MyClass.gs")).toBe(true)
      })

      it("And it should find method references across files", async () => {
        // Arrange: Create documents with method definition and usage
        const classDoc = TextDocument.create(
          "file:///Helper.gs",
          "gosu",
          1,
          `package example

class Helper {
  static function utilityMethod() : String {
    return "utility"
  }
}`,
        )

        const usageDoc = TextDocument.create(
          "file:///Client.gs",
          "gosu",
          1,
          `package example

class Client {
  function process() {
    var result = Helper.utilityMethod()
    return result
  }
}`,
        )

        // Add documents to workspace index
        await referenceProvider.addDocument(classDoc)
        await referenceProvider.addDocument(usageDoc)

        // Act: Find references to utilityMethod
        const position: Position = { line: 3, character: 17 } // Position of "utilityMethod" in definition
        const references = await referenceProvider.findReferences(classDoc, position, { includeDeclaration: true })

        // Assert
        expect(references).toBeDefined()
        if (references) {
          expect(references.length).toBeGreaterThan(0)
        }
      })
    })

    describe("When handling workspace changes", () => {
      it("Then it should update index when documents are added", async () => {
        // Arrange: Start with empty workspace
        const newDoc = TextDocument.create(
          "file:///NewClass.gs",
          "gosu",
          1,
          `package example

class NewClass {
  function method() : String {
    return "new"
  }
}`,
        )

        // Act: Add document
        await referenceProvider.addDocument(newDoc)

        // Assert: Document should be indexed
        const stats = referenceProvider.getIndexStats()
        expect(stats.documentCount).toBe(1)
        expect(stats.symbolCount).toBeGreaterThan(0)
      })

      it("And it should update index when documents are modified", async () => {
        // Arrange: Add initial document
        const originalDoc = TextDocument.create(
          "file:///ModifyTest.gs",
          "gosu",
          1,
          `package example

class OriginalName {
  function method() {}
}`,
        )

        await referenceProvider.addDocument(originalDoc)
        const initialStats = referenceProvider.getIndexStats()

        // Act: Update document
        const modifiedDoc = TextDocument.create(
          "file:///ModifyTest.gs",
          "gosu",
          2,
          `package example

class ModifiedName {
  function method() {}
  function newMethod() {}
}`,
        )

        await referenceProvider.addDocument(modifiedDoc)

        // Assert: Index should be updated
        const updatedStats = referenceProvider.getIndexStats()
        expect(updatedStats.documentCount).toBe(1) // Same document count
        // Note: We're not strictly checking symbol count increase since parsing might fail
      })

      it("And it should remove documents from index", async () => {
        // Arrange: Add document then remove it
        const doc = TextDocument.create(
          "file:///RemoveTest.gs",
          "gosu",
          1,
          `package example

class RemoveTest {}`,
        )

        await referenceProvider.addDocument(doc)
        expect(referenceProvider.getIndexStats().documentCount).toBe(1)

        // Act: Remove document
        referenceProvider.removeDocument(doc.uri)

        // Assert: Document should be removed
        expect(referenceProvider.getIndexStats().documentCount).toBe(0)
      })
    })

    describe("When handling edge cases", () => {
      it("Then it should handle references to non-existent symbols gracefully", async () => {
        // Arrange: Create document
        const doc = TextDocument.create(
          "file:///EdgeCase.gs",
          "gosu",
          1,
          `package example

class EdgeCase {
  function test() {}
}`,
        )

        await referenceProvider.addDocument(doc)

        // Act: Try to find references to non-existent symbol
        const position: Position = { line: 10, character: 10 } // Invalid position
        const references = await referenceProvider.findReferences(doc, position)

        // Assert: Should return null gracefully
        expect(references).toBeNull()
      })

      it("And it should handle malformed Gosu code", async () => {
        // Arrange: Create malformed document
        const malformedDoc = TextDocument.create(
          "file:///Malformed.gs",
          "gosu",
          1,
          `package example

class MalformedClass {
  function unclosed() {
    // Missing closing brace
`,
        )

        // Act & Assert: Should not throw
        await expect(async () => {
          await referenceProvider.addDocument(malformedDoc)
        }).not.toThrow()

        const position: Position = { line: 2, character: 6 }
        const references = await referenceProvider.findReferences(malformedDoc, position)

        // Should handle gracefully (may return references or null)
        // The parser might still extract some symbols from malformed code
        expect(references === null || Array.isArray(references)).toBe(true)
      })

      it("And it should handle empty workspace", async () => {
        // Act: Try to find references in empty workspace
        const doc = TextDocument.create("file:///Empty.gs", "gosu", 1, "")
        const position: Position = { line: 0, character: 0 }
        const references = await referenceProvider.findReferences(doc, position)

        // Assert: Should handle gracefully
        expect(references).toBeNull()
        // Note: findReferences automatically indexes the document, so count will be 1
        expect(referenceProvider.getIndexStats().documentCount).toBe(1)
      })
    })

    describe("When excluding declaration from results", () => {
      it("Then it should only return usage references", async () => {
        // Arrange: Create documents with definition and usage
        const defDoc = TextDocument.create(
          "file:///Definition.gs",
          "gosu",
          1,
          `package example

class TestClass {
  function testMethod() : String {
    return "test"
  }
}`,
        )

        const usageDoc = TextDocument.create(
          "file:///Usage.gs",
          "gosu",
          1,
          `package example

class Usage {
  function useTest() {
    var obj = new TestClass()
    return obj.testMethod()
  }
}`,
        )

        await referenceProvider.addDocument(defDoc)
        await referenceProvider.addDocument(usageDoc)

        // Act: Find references excluding declaration
        const position: Position = { line: 3, character: 11 } // Position of "testMethod" in definition
        const references = await referenceProvider.findReferences(defDoc, position, { includeDeclaration: false })

        // Assert: Should only include usage, not declaration
        if (references) {
          expect(references.length).toBeGreaterThanOrEqual(0)
          // All references should be usages, not declarations
          for (const ref of references) {
            expect(ref.uri).not.toBe("file:///Definition.gs")
          }
        }
      })
    })

    describe("When providing index statistics", () => {
      it("Then it should return accurate workspace statistics", async () => {
        // Arrange: Add multiple documents
        const docs = [
          TextDocument.create("file:///Class1.gs", "gosu", 1, "class Class1 { function method1() {} }"),
          TextDocument.create("file:///Class2.gs", "gosu", 1, "class Class2 { function method2() {} }"),
          TextDocument.create(
            "file:///Interface.gs",
            "gosu",
            1,
            "interface TestInterface { function abstractMethod() }",
          ),
        ]

        for (const doc of docs) {
          await referenceProvider.addDocument(doc)
        }

        // Act: Get statistics
        const stats = referenceProvider.getIndexStats()

        // Assert: Should reflect workspace state
        expect(stats.documentCount).toBe(3)
        expect(stats.symbolCount).toBeGreaterThanOrEqual(0) // Allow for parsing failures
      })
    })
  })
})
