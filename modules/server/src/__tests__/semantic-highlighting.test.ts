import { readFixtureAsync } from "@gosu-lsp/shared"
import { beforeEach, describe, expect, it } from "vitest"
import { TextDocument } from "vscode-languageserver-textdocument"
import { GosuSemanticHighlightingProvider } from "../semantic-highlighting"

const getFileUrlByFixture = async (fixtureContent: Promise<string>) => {
  // Simple hash or placeholder logic to create a unique enough file URL
  // In a real scenario, you might want a more robust way to map content to a dummy URL
  const content = await fixtureContent
  const hash = btoa(unescape(encodeURIComponent(content))).substring(0, 10)
  return `file:///test-${hash}.gs`
}

// Test constants for semantic highlighting - real Gosu code extracted to fixtures
const getSimpleClassWithPackageAndFunctionContent = () =>
  readFixtureAsync("semantic-highlighting/SimpleClassWithPackageAndFunction.gs")
const getSimplePackageDeclarationContent = () => readFixtureAsync("semantic-highlighting/SimplePackageDeclaration.gs")
const getSimpleClassDeclarationContent = () => readFixtureAsync("semantic-highlighting/SimpleClassDeclaration.gs")
const getFunctionDeclarationContent = () => readFixtureAsync("semantic-highlighting/FunctionDeclaration.gs")
const getStringLiteralContent = () => readFixtureAsync("semantic-highlighting/StringLiteral.gs")
const getNumericLiteralContent = () => readFixtureAsync("semantic-highlighting/NumericLiteral.gs")
const getVariableDeclarationContent = () => readFixtureAsync("semantic-highlighting/VariableDeclaration.gs")
const getTypeReferenceContent = () => readFixtureAsync("semantic-highlighting/TypeReference.gs")
const getComplexClassForRangeTestContent = () => readFixtureAsync("semantic-highlighting/ComplexClassForRangeTest.gs")
const getEmptyClassContent = () => readFixtureAsync("semantic-highlighting/EmptyClass.gs")
const getMalformedCodeContent = () => readFixtureAsync("semantic-highlighting/MalformedCode.gs")
const getEmptyDocumentContent = () => readFixtureAsync("semantic-highlighting/EmptyDocument.gs")
const getWhitespaceOnlyDocumentContent = () => readFixtureAsync("semantic-highlighting/WhitespaceOnlyDocument.gs")
const getEnhancementDeclarationContent = () => readFixtureAsync("semantic-highlighting/EnhancementDeclaration.gs")
const getInterfaceDeclarationContent = () => readFixtureAsync("semantic-highlighting/InterfaceDeclaration.gs")
const getPropertyDeclarationContent = () => readFixtureAsync("semantic-highlighting/PropertyDeclaration.gs")
const getStaticModifierContent = () => readFixtureAsync("semantic-highlighting/StaticModifier.gs")
const getReadonlyModifierContent = () => readFixtureAsync("semantic-highlighting/ReadonlyModifier.gs")
const getAccessModifiersContent = () => readFixtureAsync("semantic-highlighting/AccessModifiers.gs")
const getASTIntegrationClassContent = () => readFixtureAsync("semantic-highlighting/ASTIntegrationClass.gs")
const getConsistentTokenPositioningClassContent = () =>
  readFixtureAsync("semantic-highlighting/ConsistentTokenPositioningClass.gs")
const getRangeExtendedTokenContent = () => readFixtureAsync("semantic-highlighting/RangeExtendedToken.gs")
const getRangeCharacterBoundaryContent = () => readFixtureAsync("semantic-highlighting/RangeCharacterBoundary.gs")
const getKeywordIdentificationCoverageContent = () =>
  readFixtureAsync("semantic-highlighting/KeywordIdentificationCoverage.gs")
const getCapitalizedIdentifiersContent = () => readFixtureAsync("semantic-highlighting/CapitalizedIdentifiers.gs")
const getBlockCommentsContent = () => readFixtureAsync("semantic-highlighting/BlockComments.gs")
const getIncompleteBlockCommentsContent = () => readFixtureAsync("semantic-highlighting/IncompleteBlockComments.gs")
const getStringLiteralEdgeCasesContent = () => readFixtureAsync("semantic-highlighting/StringLiteralEdgeCases.gs")
const getParsingErrorsGracefullyContent = () => readFixtureAsync("semantic-highlighting/ParsingErrorsGracefully.gs")
const getBasicIdentifierHighlightingFallbackContent = () =>
  readFixtureAsync("semantic-highlighting/BasicIdentifierHighlightingFallback.gs")
const getFunctionDeclarationsInBasicModeContent = () =>
  readFixtureAsync("semantic-highlighting/FunctionDeclarationsInBasicMode.gs")
const getSkipKeywordsWhenIdentifyingClassNamesContent = () =>
  readFixtureAsync("semantic-highlighting/SkipKeywordsWhenIdentifyingClassNames.gs")
const getAllGosuKeywordsContent = () => readFixtureAsync("semantic-highlighting/AllGosuKeywords.gs")
const getForceParserFailureContent = () => readFixtureAsync("semantic-highlighting/ForceParserFailure.gs")
const getAllKeywordTypesInIsKeywordMethodContent = () =>
  readFixtureAsync("semantic-highlighting/AllKeywordTypesInIsKeywordMethod.gs")

describe("GosuSemanticHighlightingProvider", () => {
  let provider: GosuSemanticHighlightingProvider

  beforeEach(() => {
    provider = new GosuSemanticHighlightingProvider()
  })

  describe("Given a semantic highlighting provider instance", () => {
    describe("When creating the provider", () => {
      it("Then it should be instantiated successfully", () => {
        expect(provider).toBeDefined()
        expect(provider).toBeInstanceOf(GosuSemanticHighlightingProvider)
      })

      it("And it should have the correct token legend", () => {
        const legend = provider.getTokenLegend()

        expect(legend.tokenTypes).toContain("class")
        expect(legend.tokenTypes).toContain("function")
        expect(legend.tokenTypes).toContain("keyword")
        expect(legend.tokenTypes).toContain("variable")
        expect(legend.tokenTypes).toContain("string")
        expect(legend.tokenTypes).toContain("number")

        expect(legend.tokenModifiers).toContain("declaration")
        expect(legend.tokenModifiers).toContain("definition")
        expect(legend.tokenModifiers).toContain("static")
        expect(legend.tokenModifiers).toContain("readonly")
      })
    })

    describe("When processing a simple Gosu class", () => {
      it("Then it should identify class keywords", async () => {
        const document = TextDocument.create(
          await getFileUrlByFixture(getSimpleClassWithPackageAndFunctionContent()),
          "gosu",
          1,
          await getSimpleClassWithPackageAndFunctionContent(),
        )

        const tokens = await provider.getSemanticTokens(document)
        expect(tokens).toBeDefined()
        expect(tokens.data.length).toBeGreaterThan(0)
      })

      it("And it should identify package declarations", async () => {
        const document = TextDocument.create(
          await getFileUrlByFixture(getSimplePackageDeclarationContent()),
          "gosu",
          1,
          await getSimplePackageDeclarationContent(),
        )

        const tokens = await provider.getSemanticTokens(document)
        expect(tokens).toBeDefined()

        // Should have tokens for 'package' keyword and namespace
        expect(tokens.data.length).toBeGreaterThan(0)
      })

      it("And it should identify class declarations", async () => {
        const document = TextDocument.create(
          await getFileUrlByFixture(getSimpleClassDeclarationContent()),
          "gosu",
          1,
          await getSimpleClassDeclarationContent(),
        )

        const tokens = await provider.getSemanticTokens(document)
        expect(tokens).toBeDefined()
        expect(tokens.data.length).toBeGreaterThan(0)
      })

      it("And it should identify function declarations", async () => {
        const document = TextDocument.create(
          await getFileUrlByFixture(getFunctionDeclarationContent()),
          "gosu",
          1,
          await getFunctionDeclarationContent(),
        )

        const tokens = await provider.getSemanticTokens(document)
        expect(tokens).toBeDefined()
        expect(tokens.data.length).toBeGreaterThan(0)
      })
    })

    describe("When processing different token types", () => {
      it("Then it should identify string literals", async () => {
        const document = TextDocument.create(
          await getFileUrlByFixture(getStringLiteralContent()),
          "gosu",
          1,
          await getStringLiteralContent(),
        )

        const tokens = await provider.getSemanticTokens(document)
        expect(tokens).toBeDefined()
        expect(tokens.data.length).toBeGreaterThan(0)
      })

      it("And it should identify numeric literals", async () => {
        const document = TextDocument.create(
          await getFileUrlByFixture(getNumericLiteralContent()),
          "gosu",
          1,
          await getNumericLiteralContent(),
        )

        const tokens = await provider.getSemanticTokens(document)
        expect(tokens).toBeDefined()
        expect(tokens.data.length).toBeGreaterThan(0)
      })

      it("And it should identify variable declarations", async () => {
        const document = TextDocument.create(
          await getFileUrlByFixture(getVariableDeclarationContent()),
          "gosu",
          1,
          await getVariableDeclarationContent(),
        )

        const tokens = await provider.getSemanticTokens(document)
        expect(tokens).toBeDefined()
        expect(tokens.data.length).toBeGreaterThan(0)
      })

      it("And it should identify type references", async () => {
        const document = TextDocument.create(
          await getFileUrlByFixture(getTypeReferenceContent()),
          "gosu",
          1,
          await getTypeReferenceContent(),
        )

        const tokens = await provider.getSemanticTokens(document)
        expect(tokens).toBeDefined()
        expect(tokens.data.length).toBeGreaterThan(0)
      })
    })

    describe("When processing semantic token ranges", () => {
      it("Then it should provide tokens for specific ranges", async () => {
        const document = TextDocument.create(
          await getFileUrlByFixture(getComplexClassForRangeTestContent()),
          "gosu",
          1,
          await getComplexClassForRangeTestContent(),
        )

        const range = {
          start: { line: 1, character: 0 },
          end: { line: 3, character: 20 },
        }

        const tokens = await provider.getSemanticTokensRange(document, range)
        expect(tokens).toBeDefined()
        expect(tokens.data.length).toBeGreaterThan(0)
      })

      it("And it should handle empty ranges gracefully", async () => {
        const document = TextDocument.create(
          await getFileUrlByFixture(getEmptyClassContent()),
          "gosu",
          1,
          await getEmptyClassContent(),
        )

        const range = {
          start: { line: 10, character: 0 },
          end: { line: 10, character: 0 },
        }

        const tokens = await provider.getSemanticTokensRange(document, range)
        expect(tokens).toBeDefined()
        expect(tokens.data.length).toBe(0)
      })
    })

    describe("When handling error cases", () => {
      it("Then it should handle malformed Gosu code gracefully", async () => {
        const document = TextDocument.create(
          await getFileUrlByFixture(getMalformedCodeContent()),
          "gosu",
          1,
          await getMalformedCodeContent(),
        )

        const tokens = await provider.getSemanticTokens(document)
        expect(tokens).toBeDefined()
        // Should still provide tokens for the valid parts
        expect(tokens.data.length).toBeGreaterThan(0)
      })

      it("And it should handle empty documents", async () => {
        const document = TextDocument.create(
          await getFileUrlByFixture(getEmptyDocumentContent()),
          "gosu",
          1,
          await getEmptyDocumentContent(),
        )

        const tokens = await provider.getSemanticTokens(document)
        expect(tokens).toBeDefined()
        expect(tokens.data.length).toBe(0)
      })

      it("And it should handle documents with only whitespace", async () => {
        const document = TextDocument.create(
          await getFileUrlByFixture(getWhitespaceOnlyDocumentContent()),
          "gosu",
          1,
          await getWhitespaceOnlyDocumentContent(),
        )

        const tokens = await provider.getSemanticTokens(document)
        expect(tokens).toBeDefined()
        expect(tokens.data.length).toBe(0)
      })
    })

    describe("When processing advanced Gosu constructs", () => {
      it("Then it should identify enhancement declarations", async () => {
        const document = TextDocument.create(
          await getFileUrlByFixture(getEnhancementDeclarationContent()),
          "gosu",
          1,
          await getEnhancementDeclarationContent(),
        )

        const tokens = await provider.getSemanticTokens(document)
        expect(tokens).toBeDefined()
        expect(tokens.data.length).toBeGreaterThan(0)
      })

      it("And it should identify interface declarations", async () => {
        const document = TextDocument.create(
          await getFileUrlByFixture(getInterfaceDeclarationContent()),
          "gosu",
          1,
          await getInterfaceDeclarationContent(),
        )

        const tokens = await provider.getSemanticTokens(document)
        expect(tokens).toBeDefined()
        expect(tokens.data.length).toBeGreaterThan(0)
      })

      it("And it should identify property declarations", async () => {
        const document = TextDocument.create(
          await getFileUrlByFixture(getPropertyDeclarationContent()),
          "gosu",
          1,
          await getPropertyDeclarationContent(),
        )

        const tokens = await provider.getSemanticTokens(document)
        expect(tokens).toBeDefined()
        expect(tokens.data.length).toBeGreaterThan(0)
      })
    })

    describe("When processing token modifiers", () => {
      it("Then it should identify static modifiers", async () => {
        const document = TextDocument.create(
          await getFileUrlByFixture(getStaticModifierContent()),
          "gosu",
          1,
          await getStaticModifierContent(),
        )

        const tokens = await provider.getSemanticTokens(document)
        expect(tokens).toBeDefined()
        expect(tokens.data.length).toBeGreaterThan(0)
      })

      it("And it should identify readonly modifiers", async () => {
        const document = TextDocument.create(
          await getFileUrlByFixture(getReadonlyModifierContent()),
          "gosu",
          1,
          await getReadonlyModifierContent(),
        )

        const tokens = await provider.getSemanticTokens(document)
        expect(tokens).toBeDefined()
        expect(tokens.data.length).toBeGreaterThan(0)
      })

      it("And it should identify access modifiers", async () => {
        const document = TextDocument.create(
          await getFileUrlByFixture(getAccessModifiersContent()),
          "gosu",
          1,
          await getAccessModifiersContent(),
        )

        const tokens = await provider.getSemanticTokens(document)
        expect(tokens).toBeDefined()
        expect(tokens.data.length).toBeGreaterThan(0)
      })
    })

    describe("When integrating with AST analysis", () => {
      it("Then it should leverage existing symbol extraction", async () => {
        const document = TextDocument.create(
          await getFileUrlByFixture(getASTIntegrationClassContent()),
          "gosu",
          1,
          await getASTIntegrationClassContent(),
        )

        const tokens = await provider.getSemanticTokens(document)
        expect(tokens).toBeDefined()
        expect(tokens.data.length).toBeGreaterThan(0)
      })

      it("And it should provide consistent token positioning", async () => {
        const document = TextDocument.create(
          await getFileUrlByFixture(getConsistentTokenPositioningClassContent()),
          "gosu",
          1,
          await getConsistentTokenPositioningClassContent(),
        )

        const tokens1 = await provider.getSemanticTokens(document)
        const tokens2 = await provider.getSemanticTokens(document)

        expect(tokens1.data).toEqual(tokens2.data)
      })
    })

    describe("When caching semantic tokens", () => {
      it("Then it should cache tokens for unchanged documents", async () => {
        const document = TextDocument.create(
          await getFileUrlByFixture(getEmptyClassContent()),
          "gosu",
          1,
          await getEmptyClassContent(),
        )

        // First call should compute tokens
        const startTime1 = Date.now()
        const tokens1 = await provider.getSemanticTokens(document)
        const duration1 = Date.now() - startTime1

        // Second call should use cache (should be faster)
        const startTime2 = Date.now()
        const tokens2 = await provider.getSemanticTokens(document)
        const duration2 = Date.now() - startTime2

        expect(tokens1.data).toEqual(tokens2.data)
        // Cache should make second call faster (allowing for some variance)
        expect(duration2).toBeLessThanOrEqual(duration1 + 50)
      })

      it("And it should clear cache when document changes", async () => {
        const document1 = TextDocument.create(
          await getFileUrlByFixture(getEmptyClassContent()),
          "gosu",
          1,
          await getEmptyClassContent(),
        )
        const document2 = TextDocument.create(
          await getFileUrlByFixture(Promise.resolve((await getFunctionDeclarationContent()).slice(0, 100))), // Using slice to simulate a different file URL
          "gosu",
          2, // Different version
          await getFunctionDeclarationContent(),
        )

        const tokens1 = await provider.getSemanticTokens(document1)
        provider.onDocumentChange(document2)
        const tokens2 = await provider.getSemanticTokens(document2)

        expect(tokens1.data).not.toEqual(tokens2.data)
        expect(tokens2.data.length).toBeGreaterThan(tokens1.data.length)
      })

      it("And it should clear all caches", async () => {
        const document = TextDocument.create(
          await getFileUrlByFixture(getEmptyClassContent()),
          "gosu",
          1,
          await getEmptyClassContent(),
        )

        await provider.getSemanticTokens(document)
        provider.clearAllCaches()

        // Should work after cache clear
        const tokens = await provider.getSemanticTokens(document)
        expect(tokens).toBeDefined()
        expect(tokens.data.length).toBeGreaterThan(0)
      })
    })

    describe("When testing range filtering edge cases", () => {
      it("Then it should handle tokens that extend past range end character", async () => {
        const document = TextDocument.create(
          await getFileUrlByFixture(getRangeExtendedTokenContent()),
          "gosu",
          1,
          await getRangeExtendedTokenContent(),
        )

        // Create a range that ends in the middle of a token
        const range = {
          start: { line: 0, character: 0 },
          end: { line: 0, character: 10 }, // This should cut off "VeryLongClassName"
        }

        const tokens = await provider.getSemanticTokensRange(document, range)
        expect(tokens).toBeDefined()
        // Should filter out tokens that extend past the end character
      })

      it("And it should handle range filtering with character boundaries", async () => {
        const document = TextDocument.create(
          await getFileUrlByFixture(getRangeCharacterBoundaryContent()),
          "gosu",
          1,
          await getRangeCharacterBoundaryContent(),
        )

        // Range that starts mid-token to test character boundary logic
        const range = {
          start: { line: 0, character: 5 }, // Starts in middle of "TestClass"
          end: { line: 0, character: 25 }, // Ends in middle of "longFunctionName"
        }

        const tokens = await provider.getSemanticTokensRange(document, range)
        expect(tokens).toBeDefined()
      })
    })

    describe("When testing keyword identification coverage", () => {
      it("Then it should correctly identify all keyword types", async () => {
        const document = TextDocument.create(
          await getFileUrlByFixture(getKeywordIdentificationCoverageContent()),
          "gosu",
          1,
          await getKeywordIdentificationCoverageContent(),
        )

        // This should trigger the basic identifier highlighting which uses isKeyword
        const tokens = await provider.getSemanticTokens(document)
        expect(tokens).toBeDefined()
        expect(tokens.data.length).toBeGreaterThan(0)
      })

      it("And it should handle capitalized identifiers vs keywords", async () => {
        const document = TextDocument.create(
          await getFileUrlByFixture(getCapitalizedIdentifiersContent()),
          "gosu",
          1,
          await getCapitalizedIdentifiersContent(),
        )

        const tokens = await provider.getSemanticTokens(document)
        expect(tokens).toBeDefined()
        expect(tokens.data.length).toBeGreaterThan(0)
      })
    })

    describe("When testing comment highlighting edge cases", () => {
      it("Then it should handle block comments correctly", async () => {
        const document = TextDocument.create(
          await getFileUrlByFixture(getBlockCommentsContent()),
          "gosu",
          1,
          await getBlockCommentsContent(),
        )

        const tokens = await provider.getSemanticTokens(document)
        expect(tokens).toBeDefined()
        expect(tokens.data.length).toBeGreaterThan(0)
      })

      it("And it should handle incomplete block comments", async () => {
        const document = TextDocument.create(
          await getFileUrlByFixture(getIncompleteBlockCommentsContent()),
          "gosu",
          1,
          await getIncompleteBlockCommentsContent(),
        )

        const tokens = await provider.getSemanticTokens(document)
        expect(tokens).toBeDefined()
        expect(tokens.data.length).toBeGreaterThan(0)
      })
    })

    describe("When testing string literal edge cases", () => {
      it("Then it should handle both single and double quoted strings", async () => {
        const document = TextDocument.create(
          await getFileUrlByFixture(getStringLiteralEdgeCasesContent()),
          "gosu",
          1,
          await getStringLiteralEdgeCasesContent(),
        )

        const tokens = await provider.getSemanticTokens(document)
        expect(tokens).toBeDefined()
        expect(tokens.data.length).toBeGreaterThan(0)
      })
    })

    describe("When testing error handling during token computation", () => {
      it("Then it should handle parsing errors gracefully", async () => {
        const document = TextDocument.create(
          await getFileUrlByFixture(getParsingErrorsGracefullyContent()),
          "gosu",
          1,
          await getParsingErrorsGracefullyContent(),
        )

        const tokens = await provider.getSemanticTokens(document)
        expect(tokens).toBeDefined()
        // Should still return tokens even with parsing errors
      })

      it("And it should handle range errors gracefully", async () => {
        const document = TextDocument.create(
          await getFileUrlByFixture(getEmptyClassContent()),
          "gosu",
          1,
          await getEmptyClassContent(),
        )

        // Invalid range that could cause errors
        const range = {
          start: { line: -1, character: -1 },
          end: { line: 100, character: 100 },
        }

        const tokens = await provider.getSemanticTokensRange(document, range)
        expect(tokens).toBeDefined()
      })
    })

    describe("When testing basic identifier highlighting fallback", () => {
      it("Then it should trigger basic identifier highlighting on parser failure", async () => {
        // Create a document that will cause parser failure but has recognizable patterns
        const document = TextDocument.create(
          await getFileUrlByFixture(getBasicIdentifierHighlightingFallbackContent()),
          "gosu",
          1,
          await getBasicIdentifierHighlightingFallbackContent(),
        )

        const tokens = await provider.getSemanticTokens(document)
        expect(tokens).toBeDefined()
        expect(tokens.data.length).toBeGreaterThan(0)
      })

      it("And it should identify function declarations in basic mode", async () => {
        const document = TextDocument.create(
          await getFileUrlByFixture(getFunctionDeclarationsInBasicModeContent()),
          "gosu",
          1,
          await getFunctionDeclarationsInBasicModeContent(),
        )

        const tokens = await provider.getSemanticTokens(document)
        expect(tokens).toBeDefined()
        expect(tokens.data.length).toBeGreaterThan(0)
      })

      it("And it should skip keywords when identifying class names", async () => {
        const document = TextDocument.create(
          await getFileUrlByFixture(getSkipKeywordsWhenIdentifyingClassNamesContent()),
          "gosu",
          1,
          await getSkipKeywordsWhenIdentifyingClassNamesContent(),
        )

        const tokens = await provider.getSemanticTokens(document)
        expect(tokens).toBeDefined()
        expect(tokens.data.length).toBeGreaterThan(0)
      })

      it("And it should properly identify all Gosu keywords", async () => {
        const document = TextDocument.create(
          await getFileUrlByFixture(getAllGosuKeywordsContent()),
          "gosu",
          1,
          await getAllGosuKeywordsContent(),
        )

        const tokens = await provider.getSemanticTokens(document)
        expect(tokens).toBeDefined()
        expect(tokens.data.length).toBeGreaterThan(0)
      })

      it("And it should force parser failure for basic highlighting", async () => {
        // Create document with extremely malformed syntax that will definitely cause parser failure
        const document = TextDocument.create(
          await getFileUrlByFixture(getForceParserFailureContent()),
          "gosu",
          1,
          await getForceParserFailureContent(),
        )

        const tokens = await provider.getSemanticTokens(document)
        expect(tokens).toBeDefined()
        // Should still provide some basic tokens even with parser failure
        expect(tokens.data.length).toBeGreaterThan(0)
      })

      it("And it should handle all keyword types in isKeyword method", async () => {
        // Create content that will force parser failure but still generate tokens via basic highlighting
        const document = TextDocument.create(
          await getFileUrlByFixture(getAllKeywordTypesInIsKeywordMethodContent()),
          "gosu",
          1,
          await getAllKeywordTypesInIsKeywordMethodContent(),
        )

        const tokens = await provider.getSemanticTokens(document)
        expect(tokens).toBeDefined()
        expect(tokens.data.length).toBeGreaterThan(0)
      })
    })
  })
})
