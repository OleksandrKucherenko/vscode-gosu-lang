/** biome-ignore-all lint/suspicious/noExplicitAny: keep it simple for unit tests */
import { describe, expect, it, vi } from "vitest"
import { TextDocument } from "vscode-languageserver-textdocument"
import { GosuCompletionProvider } from "../completion"
import { GosuJavaSymbolResolver } from "../java-symbol-resolver"

// Classification: Unit
describe("GosuCompletionProvider Cache Methods", () => {
  // Classification: Unit
  describe("Document change handling", () => {
    // Classification: Unit
    it("should clear AST cache when document changes", () => {
      // Given: a completion provider
      const resolver = new GosuJavaSymbolResolver({ sourcePaths: [], classpath: [] })
      const provider = new GosuCompletionProvider(resolver)

      // Mock the AST completion provider method
      const clearDocumentCacheSpy = vi.spyOn((provider as any).astCompletionProvider, "clearDocumentCache")

      // Create a test document
      const document = TextDocument.create("file:///test.gs", "gosu", 1, "package test\nclass Test {}")

      // When: document changes
      provider.onDocumentChange(document)

      // Then: should clear AST cache for that document
      expect(clearDocumentCacheSpy).toHaveBeenCalledWith(document.uri)
    })
  })

  // Classification: Unit
  describe("Clear all caches", () => {
    // Classification: Unit
    it("should clear all AST caches", () => {
      // Given: a completion provider
      const resolver = new GosuJavaSymbolResolver({ sourcePaths: [], classpath: [] })
      const provider = new GosuCompletionProvider(resolver)

      // Mock the AST completion provider method
      const clearAllCachesSpy = vi.spyOn((provider as any).astCompletionProvider, "clearAllCaches")

      // When: clearing all caches
      provider.clearAllCaches()

      // Then: should clear all AST caches
      expect(clearAllCachesSpy).toHaveBeenCalledOnce()
    })
  })

  // Classification: Unit
  describe("Trigger characters coverage", () => {
    // Classification: Unit
    it("should return correct trigger characters", () => {
      // Given: a completion provider
      const resolver = new GosuJavaSymbolResolver({ sourcePaths: [], classpath: [] })
      const provider = new GosuCompletionProvider(resolver)

      // When: getting trigger characters
      const triggerChars = provider.getTriggerCharacters()

      // Then: should return expected characters
      expect(triggerChars).toEqual([".", ":", " "])
      expect(triggerChars).toHaveLength(3)
    })
  })
})
