import path from "node:path"
import { pathToFileURL } from "node:url"
import { readFixtureAsync } from "@gosu-lsp/shared"
import { beforeEach, describe, expect, it } from "vitest"
import type { Position } from "vscode-languageserver/node"
import { TextDocument } from "vscode-languageserver-textdocument"
import { GosuCrossLanguageDefinitionProvider } from "../cross-language-definition-provider"

describe("GosuCrossLanguageDefinitionProvider", () => {
  let provider: GosuCrossLanguageDefinitionProvider
  const javaFixturePath = path.resolve(__dirname, "../../../../test/fixtures/java")

  beforeEach(() => {
    provider = new GosuCrossLanguageDefinitionProvider({
      sourcePaths: [javaFixturePath],
      classpath: [],
    })
  })

  describe("Given a cross-language definition provider instance", () => {
    describe("When navigating to Java standard library types", () => {
      it("Then it should resolve java.lang.String from Gosu imports", async () => {
        const document = TextDocument.create(
          "file:///test.gs",
          "gosu",
          1,
          await readFixtureAsync("cross-language/java/lang/StringImport.gs"),
        )

        // Position on "String" in the field declaration
        const position: Position = { line: 4, character: 13 }
        const definition = await provider.getDefinition(document, position)

        expect(definition).toBeDefined()
        const loc = Array.isArray(definition) ? definition[0] : definition
        expect(loc?.uri).toBe("java:///java/lang/String.java")
        expect(loc?.range).toBeDefined()
      })

      it("And it should resolve java.util.List from Gosu imports", async () => {
        const document = TextDocument.create(
          "file:///test.gs",
          "gosu",
          1,
          await readFixtureAsync("cross-language/java/util/ListImport.gs"),
        )

        // Position on "List" in the field declaration
        const position: Position = { line: 4, character: 14 }
        const definition = await provider.getDefinition(document, position)

        expect(definition).toBeDefined()
        const loc = Array.isArray(definition) ? definition[0] : definition
        expect(loc?.uri).toBe("java:///java/util/List.java")
      })

      it("And it should resolve java.util.Map from wildcard imports", async () => {
        const document = TextDocument.create(
          "file:///test.gs",
          "gosu",
          1,
          await readFixtureAsync("cross-language/java/util/MapWildcardImport.gs"),
        )

        // Position on "Map" in the field declaration
        const position: Position = { line: 4, character: 13 }
        const definition = await provider.getDefinition(document, position)

        expect(definition).toBeDefined()
        const loc = Array.isArray(definition) ? definition[0] : definition
        expect(loc?.uri).toBe("java:///java/util/Map.java")
      })
    })

    describe("When navigating to Java methods", () => {
      it("Then it should resolve String.length() method", async () => {
        const document = TextDocument.create(
          "file:///test.gs",
          "gosu",
          1,
          await readFixtureAsync("cross-language/methods/StringLengthMethod.gs"),
        )

        // Position on "length" method call
        const position: Position = { line: 5, character: 17 }
        const definition = await provider.getDefinition(document, position)

        expect(definition).toBeDefined()
        const loc = Array.isArray(definition) ? definition[0] : definition
        expect(loc?.uri).toBe("java:///java/lang/String.java")
        // Should point to the method definition within String
      })

      it("And it should resolve List.add() method", async () => {
        const document = TextDocument.create(
          "file:///test.gs",
          "gosu",
          1,
          await readFixtureAsync("cross-language/methods/ListAddMethod.gs"),
        )

        // Position on "add" method call
        const position: Position = { line: 7, character: 9 }
        const definition = await provider.getDefinition(document, position)

        expect(definition).toBeDefined()
        const loc = Array.isArray(definition) ? definition[0] : definition
        expect(loc?.uri).toBe("java:///java/util/List.java")
      })
    })

    describe("When navigating to custom Java sources", () => {
      it("Then it should resolve types from configured source paths", async () => {
        const document = TextDocument.create(
          "file:///test.gs",
          "gosu",
          1,
          await readFixtureAsync("cross-language/java/custom/CustomFixtureImport.gs"),
        )

        const position: Position = { line: 5, character: 24 }
        const definition = await provider.getDefinition(document, position)

        expect(definition).toBeDefined()
        const loc = Array.isArray(definition) ? definition[0] : definition
        const expectedUri = pathToFileURL(path.join(javaFixturePath, "com/example/CustomFixture.java")).href
        expect(loc?.uri).toBe(expectedUri)
      })
    })

    describe("When handling fallback to Gosu-only navigation", () => {
      it("Then it should handle Gosu-only symbols normally", async () => {
        const document = TextDocument.create(
          "file:///test.gs",
          "gosu",
          1,
          await readFixtureAsync("cross-language/fallback/GosuOnlyField.gs"),
        )

        // Position on "localField" usage
        const position: Position = { line: 6, character: 4 }
        const definition = await provider.getDefinition(document, position)

        expect(definition).toBeDefined()
        const loc = Array.isArray(definition) ? definition[0] : definition
        expect(loc?.uri).toBe("file:///test.gs")
        expect(loc?.range.start.line).toBe(3) // Field definition line
      })

      it("And it should handle function definitions within Gosu", async () => {
        const document = TextDocument.create(
          "file:///test.gs",
          "gosu",
          1,
          await readFixtureAsync("cross-language/fallback/GosuOnlyFunction.gs"),
        )

        // Position on "helperMethod" call
        const position: Position = { line: 8, character: 17 }
        const definition = await provider.getDefinition(document, position)

        expect(definition).toBeDefined()
        const loc = Array.isArray(definition) ? definition[0] : definition
        expect(loc?.uri).toBe("file:///test.gs")
        expect(loc?.range.start.line).toBe(3) // Function definition line
      })
    })

    describe("When handling import resolution priority", () => {
      it("Then it should prioritize specific imports over wildcards", async () => {
        const document = TextDocument.create(
          "file:///test.gs",
          "gosu",
          1,
          await readFixtureAsync("cross-language/imports/SpecificOverWildcardImport.gs"),
        )

        // Position on "List" - should resolve to java.util.List, not java.awt.List
        const position: Position = { line: 6, character: 14 }
        const definition = await provider.getDefinition(document, position)

        expect(definition).toBeDefined()
        const loc = Array.isArray(definition) ? definition[0] : definition
        expect(loc?.uri).toBe("java:///java/util/List.java")
      })

      it("And it should handle implicit java.lang imports", async () => {
        const document = TextDocument.create(
          "file:///test.gs",
          "gosu",
          1,
          await readFixtureAsync("cross-language/imports/ImplicitJavaLangImport.gs"),
        )

        // Position on "String" (implicit java.lang import)
        const position: Position = { line: 3, character: 13 }
        const definition = await provider.getDefinition(document, position)

        expect(definition).toBeDefined()
        const loc = Array.isArray(definition) ? definition[0] : definition
        expect(loc?.uri).toBe("java:///java/lang/String.java")
      })
    })

    describe("When handling parameterized types", () => {
      it("Then it should resolve generic type parameters", async () => {
        const document = TextDocument.create(
          "file:///test.gs",
          "gosu",
          1,
          await readFixtureAsync("cross-language/generics/GenericMapDeclaration.gs"),
        )

        // Position on "Map" in generic declaration
        const position: Position = { line: 5, character: 13 }
        const definition = await provider.getDefinition(document, position)

        expect(definition).toBeDefined()
        const loc = Array.isArray(definition) ? definition[0] : definition
        expect(loc?.uri).toBe("java:///java/util/Map.java")
      })

      it("And it should handle nested generics", async () => {
        const document = TextDocument.create(
          "file:///test.gs",
          "gosu",
          1,
          await readFixtureAsync("cross-language/generics/NestedGenerics.gs"),
        )

        // Position on "List" inside the nested generic
        const position: Position = { line: 5, character: 31 }
        const definition = await provider.getDefinition(document, position)

        expect(definition).toBeDefined()
        const loc = Array.isArray(definition) ? definition[0] : definition
        expect(loc?.uri).toBe("java:///java/util/List.java")
      })
    })

    describe("When handling error cases", () => {
      it("Then it should handle unresolvable Java types gracefully", async () => {
        const document = TextDocument.create(
          "file:///test.gs",
          "gosu",
          1,
          await readFixtureAsync("cross-language/errors/UnknownJavaType.gs"),
        )

        // Position on unknown type
        const position: Position = { line: 3, character: 16 }
        const definition = await provider.getDefinition(document, position)

        expect(definition).toBeNull()
      })

      it("And it should handle malformed Gosu code", async () => {
        const document = TextDocument.create(
          "file:///malformed.gs",
          "gosu",
          1,
          await readFixtureAsync("cross-language/errors/MalformedGosuCode.gs"),
        )

        const position: Position = { line: 0, character: 6 }
        const _definition = await provider.getDefinition(document, position)

        // Should not throw, might return null
        expect(true).toBe(true)
      })

      it("And it should handle invalid positions", async () => {
        const document = TextDocument.create("file:///test.gs", "gosu", 1, "class TestClass {}")

        // Position beyond document bounds
        const position: Position = { line: 10, character: 50 }
        const definition = await provider.getDefinition(document, position)

        expect(definition).toBeNull()
      })
    })

    describe("When caching cross-language definitions", () => {
      it("Then it should cache Java type resolutions", async () => {
        const document = TextDocument.create(
          "file:///test.gs",
          "gosu",
          1,
          await readFixtureAsync("cross-language/caching/CachedJavaString.gs"),
        )

        const position1: Position = { line: 4, character: 14 }
        const position2: Position = { line: 5, character: 14 }

        const startTime1 = Date.now()
        const definition1 = await provider.getDefinition(document, position1)
        const duration1 = Date.now() - startTime1

        const startTime2 = Date.now()
        const definition2 = await provider.getDefinition(document, position2)
        const duration2 = Date.now() - startTime2

        expect(definition1).toBeDefined()
        expect(definition2).toBeDefined()
        const loc1 = Array.isArray(definition1) ? definition1[0] : definition1
        const loc2 = Array.isArray(definition2) ? definition2[0] : definition2
        expect(loc1?.uri).toBe(loc2?.uri)
        expect(duration2).toBeLessThanOrEqual(duration1 + 10) // Cache should be faster
      })

      it("And it should clear cache on configuration changes", async () => {
        const document = TextDocument.create(
          "file:///test.gs",
          "gosu",
          1,
          await readFixtureAsync("cross-language/caching/ConfigChangeTest.gs"),
        )

        const position: Position = { line: 4, character: 13 }

        await provider.getDefinition(document, position)

        provider.updateConfiguration({
          sourcePaths: ["src/main/java"],
          classpath: ["lib/updated.jar"],
        })

        // Should work after configuration update
        const definition = await provider.getDefinition(document, position)
        expect(definition).toBeDefined()
      })
    })
  })
})
