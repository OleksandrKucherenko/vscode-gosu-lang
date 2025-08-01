import { readFixture } from "@gosu-lsp/shared"
import Debug from "debug"
import { beforeEach, describe, expect, test } from "vitest"
import { type CompletionItem, CompletionItemKind, type Position } from "vscode-languageserver/node"
import { TextDocument } from "vscode-languageserver-textdocument"
import { GosuCompletionProvider } from "../completion"

const debug = Debug("gosu:lsp:test:completion")

describe("GosuCompletionProvider", () => {
  // Test constants
  const SIMPLE_PREFIX_DOCUMENT = "p"
  const _CLASS_CONTEXT_DOCUMENT = "package test\n\nc"
  const _CLASS_BODY_DOCUMENT = readFixture("completion/ClassBody.gs")
  const VISIBILITY_MODIFIER_DOCUMENT = readFixture("completion/VisibilityModifier.gs")
  const _FUNCTION_BODY_DOCUMENT = readFixture("completion/FunctionBody.gs")
  const LITERAL_CONTEXT_DOCUMENT = readFixture("completion/LiteralContext.gs")
  const PREFIX_FILTER_DOCUMENT = "pub"
  const CASE_INSENSITIVE_DOCUMENT = "PUB"
  const _NO_PREFIX_DOCUMENT = "package test\n\n"

  // Logging helpers
  const logCompletions = (completions: CompletionItem[], context: string) => {
    debug(`${context}: Found ${completions.length} completions: [${completions.map((c) => c.label).join(", ")}]`)
  }

  const logContext = (context: string, position: Position, prefix?: string) => {
    debug(
      `${context}: Testing at position ${position.line}:${position.character}${prefix ? ` with prefix "${prefix}"` : ""}`,
    )
  }

  let completionProvider: GosuCompletionProvider

  beforeEach(() => {
    completionProvider = new GosuCompletionProvider()
  })

  describe("Given a GosuCompletionProvider instance", () => {
    describe("When requesting completions at the beginning of a file", () => {
      test("Then it should suggest package-related keywords", async () => {
        // Given: A document with a single character prefix 'p'
        const document = TextDocument.create("file:///test.gs", "gosu", 1, SIMPLE_PREFIX_DOCUMENT)
        const position: Position = { line: 0, character: 1 }
        logContext("Package keywords test", position, "p")

        // When: Requesting completions
        const completions = await completionProvider.getCompletions(document, position)
        logCompletions(completions, "Package keywords")

        // Then: Should return valid completions array
        expect(completions).toBeDefined()
        expect(Array.isArray(completions)).toBe(true)

        // And: Should suggest 'package' keyword with correct properties
        const packageCompletion = completions.find((item) => item.label === "package")
        expect(packageCompletion).toBeDefined()
        expect(packageCompletion?.kind).toBe(CompletionItemKind.Keyword)
        expect(packageCompletion?.detail).toContain("package declaration")
      })

      test("And it should suggest class-related keywords for empty lines", async () => {
        // Given: A document with package declaration and empty line with 'p' prefix
        const document = TextDocument.create(
          "file:///test.gs",
          "gosu",
          1,
          readFixture("completion/EmptyLinePackage.gs"),
        )
        const position: Position = { line: 2, character: 1 }
        logContext("Class keywords test", position, "p")

        // When: Requesting completions
        const completions = await completionProvider.getCompletions(document, position)
        logCompletions(completions, "Class keywords")

        // Then: Should suggest class declaration keywords
        const classCompletion = completions.find((item) => item.label === "class")
        expect(classCompletion).toBeUndefined() // class doesn't start with 'p'

        // And: Should suggest visibility modifiers starting with 'p'
        const publicCompletion = completions.find((item) => item.label === "public")
        expect(publicCompletion).toBeDefined()
      })
    })

    describe("When requesting completions inside a class body", () => {
      test("Then it should suggest class member keywords", async () => {
        // Given: A document with class body and 'v' prefix
        const document = TextDocument.create(
          "file:///test.gs",
          "gosu",
          1,
          readFixture("completion/ClassBodyWithVar.gs"),
        )
        const position: Position = { line: 3, character: 3 }
        logContext("Class member keywords test", position, "v")

        // When: Requesting completions
        const completions = await completionProvider.getCompletions(document, position)
        logCompletions(completions, "Class member keywords")

        // Then: Should suggest function declaration
        const functionCompletion = completions.find((item) => item.label === "function")
        expect(functionCompletion).toBeUndefined() // function doesn't start with 'v'

        // And: Should suggest variable declaration
        const varCompletion = completions.find((item) => item.label === "var")
        expect(varCompletion).toBeDefined()

        // And: Should suggest property declaration (not starting with 'v')
        const propertyCompletion = completions.find((item) => item.label === "property")
        expect(propertyCompletion).toBeUndefined() // property doesn't start with 'v'
      })

      test("And it should suggest visibility modifiers", async () => {
        // Given: A document with class body and 'pr' prefix
        const document = TextDocument.create("file:///test.gs", "gosu", 1, VISIBILITY_MODIFIER_DOCUMENT)
        const position: Position = { line: 3, character: 4 }
        logContext("Visibility modifiers test", position, "pr")

        // When: Requesting completions
        const completions = await completionProvider.getCompletions(document, position)
        logCompletions(completions, "Visibility modifiers")

        // Then: Should suggest private visibility
        const privateCompletion = completions.find((item) => item.label === "private")
        expect(privateCompletion).toBeDefined()

        // And: Should suggest protected visibility
        const protectedCompletion = completions.find((item) => item.label === "protected")
        expect(protectedCompletion).toBeDefined()
      })
    })

    describe("When requesting completions inside a function body", () => {
      test("Then it should suggest control flow keywords", async () => {
        // Given: A document with function body and 'r' prefix
        const document = TextDocument.create(
          "file:///test.gs",
          "gosu",
          1,
          readFixture("completion/FunctionBodyWithReturn.gs"),
        )
        const position: Position = { line: 4, character: 5 }
        logContext("Control flow keywords test", position, "r")

        // When: Requesting completions
        const completions = await completionProvider.getCompletions(document, position)
        logCompletions(completions, "Control flow keywords")

        // Then: Should suggest if statement (not starting with 'r')
        const ifCompletion = completions.find((item) => item.label === "if")
        expect(ifCompletion).toBeUndefined() // if doesn't start with 'r'

        // And: Should suggest return statement
        const returnCompletion = completions.find((item) => item.label === "return")
        expect(returnCompletion).toBeDefined()

        // And: Should suggest for loop (not starting with 'r')
        const forCompletion = completions.find((item) => item.label === "for")
        expect(forCompletion).toBeUndefined() // for doesn't start with 'r'
      })

      test("And it should suggest literal keywords", async () => {
        // Given: A document with function body and assignment with 't' prefix
        const document = TextDocument.create("file:///test.gs", "gosu", 1, LITERAL_CONTEXT_DOCUMENT)
        const position: Position = { line: 4, character: 18 }
        logContext("Literal keywords test", position, "t")

        // When: Requesting completions
        const completions = await completionProvider.getCompletions(document, position)
        logCompletions(completions, "Literal keywords")

        // Then: Should suggest true literal
        const trueCompletion = completions.find((item) => item.label === "true")
        expect(trueCompletion).toBeDefined()
        expect(trueCompletion?.kind).toBe(CompletionItemKind.Keyword)

        // And: Should suggest this reference
        const thisCompletion = completions.find((item) => item.label === "this")
        expect(thisCompletion).toBeDefined()
      })
    })

    describe("When filtering completions by prefix", () => {
      test("Then it should only return keywords matching the prefix", async () => {
        // Given: A document with 'pub' prefix
        const document = TextDocument.create("file:///test.gs", "gosu", 1, PREFIX_FILTER_DOCUMENT)
        const position: Position = { line: 0, character: 3 }
        logContext("Prefix filtering test", position, "pub")

        // When: Requesting completions
        const completions = await completionProvider.getCompletions(document, position)
        logCompletions(completions, "Prefix filtering")

        // Then: Should only return completions starting with 'pub'
        const publicCompletion = completions.find((item) => item.label === "public")
        expect(publicCompletion).toBeDefined()

        // And: Should not return unrelated keywords
        const privateCompletion = completions.find((item) => item.label === "private")
        expect(privateCompletion).toBeUndefined()

        // And: Should not return class keyword
        const classCompletion = completions.find((item) => item.label === "class")
        expect(classCompletion).toBeUndefined()
      })

      test("And it should be case-insensitive", async () => {
        // Given: A document with uppercase 'PUB' prefix
        const document = TextDocument.create("file:///test.gs", "gosu", 1, CASE_INSENSITIVE_DOCUMENT)
        const position: Position = { line: 0, character: 3 }
        logContext("Case insensitive test", position, "PUB")

        // When: Requesting completions
        const completions = await completionProvider.getCompletions(document, position)
        logCompletions(completions, "Case insensitive")

        // Then: Should still return 'public' for uppercase prefix
        const publicCompletion = completions.find((item) => item.label === "public")
        expect(publicCompletion).toBeDefined()
      })
    })

    describe("When requesting completions with no prefix", () => {
      test("Then it should return all relevant keywords for the context", async () => {
        // Given: A document with package declaration and empty line
        const document = TextDocument.create("file:///test.gs", "gosu", 1, readFixture("completion/NoPrefixDoc.gs"))
        const position: Position = { line: 2, character: 0 }
        logContext("No prefix test", position)

        // When: Requesting completions
        const completions = await completionProvider.getCompletions(document, position)
        logCompletions(completions, "No prefix")

        // Then: Should return multiple keywords
        expect(completions.length).toBeGreaterThan(5)

        // And: Should include basic declaration keywords
        const keywords = completions.map((item) => item.label)
        expect(keywords).toContain("class")
        expect(keywords).toContain("interface")
        expect(keywords).toContain("enhancement")
        expect(keywords).toContain("public")
        expect(keywords).toContain("private")
      })
    })
  })
})
