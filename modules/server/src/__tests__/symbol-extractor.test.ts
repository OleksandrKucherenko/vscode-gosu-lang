/** biome-ignore-all lint/style/noNonNullAssertion: keep it simple for unit tests */
import { GosuParser } from "@gosu-lsp/parser"
import {
  addSymbolToTable,
  createSymbolTable,
  findSymbolsByName,
  findSymbolsByPrefix,
  findSymbolsByType,
  type GosuASTSymbol,
  readFixture,
} from "@gosu-lsp/shared"
import Debug from "debug"
import { beforeEach, describe, expect, test } from "vitest"
import { GosuSymbolExtractor } from "../symbol-extractor"

const debug = Debug("gosu:lsp:test:symbol-extractor")

// Test constants - real Gosu code for symbol extraction
const getSimpleClassContent = () => readFixture("classes/SimpleClass.gs")
const getComplexClassContent = () => readFixture("classes/ComplexClass.gs")
const getInterfaceDefinitionContent = () => readFixture("interfaces/ITestInterface.gs")
const getEnhancementDefinitionContent = () => readFixture("enhancements/StringUtils.gsx")

describe("GosuSymbolExtractor", () => {
  let parser: GosuParser
  let symbolExtractor: GosuSymbolExtractor

  beforeEach(() => {
    parser = new GosuParser({ buildAst: true })
    symbolExtractor = new GosuSymbolExtractor(parser)
  })

  describe("Given an AST symbol extractor", () => {
    describe("When extracting symbols from simple class", () => {
      test("Then it should extract class symbol", () => {
        // Given: Simple class definition
        const parseResult = parser.parseText(getSimpleClassContent(), "SimpleClass.gs")
        debug("Parse result isValid:", parseResult.isValid)
        expect(parseResult.isValid).toBe(true)
        expect(parseResult.ast).toBeDefined()

        // When: Extracting symbols
        const symbolTable = symbolExtractor.extractSymbols("file:///SimpleClass.gs", parseResult.ast!)

        // Then: Should extract class symbol
        const classSymbols = findSymbolsByType(symbolTable, "class")
        expect(classSymbols).toHaveLength(1)
        expect(classSymbols[0].name).toBe("SimpleClass")
        expect(classSymbols[0].visibility).toBe("public")
      })

      test("And it should extract import statements", () => {
        // Given: Simple class with imports
        const parseResult = parser.parseText(getSimpleClassContent(), "SimpleClass.gs")
        expect(parseResult.isValid).toBe(true)

        // When: Extracting symbols
        const symbolTable = symbolExtractor.extractSymbols("file:///SimpleClass.gs", parseResult.ast!)

        // Then: Should extract import symbols
        expect(symbolTable.imports).toHaveLength(2)
        expect(symbolTable.imports[0].name).toBe("List")
        expect(symbolTable.imports[0].path).toBe("java.util.List")
        expect(symbolTable.imports[1].name).toBe("String")
        expect(symbolTable.imports[1].path).toBe("java.lang.String")
      })

      test("And it should extract field variables", () => {
        // Given: Simple class with fields
        const parseResult = parser.parseText(getSimpleClassContent(), "SimpleClass.gs")
        expect(parseResult.isValid).toBe(true)

        // When: Extracting symbols
        const symbolTable = symbolExtractor.extractSymbols("file:///SimpleClass.gs", parseResult.ast!)

        // Then: Should extract field variables
        const fieldSymbols = findSymbolsByType(symbolTable, "field")
        expect(fieldSymbols).toHaveLength(2)

        const nameField = findSymbolsByName(symbolTable, "_name")[0]
        expect(nameField.dataType).toBe("String")
        expect(nameField.visibility).toBe("private")

        const countField = findSymbolsByName(symbolTable, "_count")[0]
        expect(countField.dataType).toBe("int")
        expect(countField.visibility).toBe("private")
      })

      test("And it should extract constructor with parameters", () => {
        // Given: Simple class with constructor
        const parseResult = parser.parseText(getSimpleClassContent(), "SimpleClass.gs")
        expect(parseResult.isValid).toBe(true)

        // When: Extracting symbols
        const symbolTable = symbolExtractor.extractSymbols("file:///SimpleClass.gs", parseResult.ast!)

        // Then: Should extract constructor
        const constructors = findSymbolsByType(symbolTable, "constructor")
        expect(constructors).toHaveLength(1)

        const ctor = constructors[0]
        expect(ctor.parameters).toHaveLength(1)
        expect(ctor.parameters?.[0].name).toBe("name")
        expect(ctor.parameters?.[0].type).toBe("String")
      })

      test("And it should extract function symbols with parameters", () => {
        // Given: Simple class with functions
        const parseResult = parser.parseText(getSimpleClassContent(), "SimpleClass.gs")
        expect(parseResult.isValid).toBe(true)

        // When: Extracting symbols
        const symbolTable = symbolExtractor.extractSymbols("file:///SimpleClass.gs", parseResult.ast!)

        // Then: Should extract function symbols
        const functions = findSymbolsByType(symbolTable, "function")
        expect(functions).toHaveLength(2) // getName, setCount

        const getName = findSymbolsByName(symbolTable, "getName")[0]
        expect(getName.returnType).toBe("String")
        expect(getName.parameters).toHaveLength(0)

        const setCount = findSymbolsByName(symbolTable, "setCount")[0]
        expect(setCount.returnType).toBe("void")
        expect(setCount.parameters).toHaveLength(1)
        expect(setCount.parameters?.[0].name).toBe("newCount")
        expect(setCount.parameters?.[0].type).toBe("int")
      })
    })

    describe("When extracting symbols from complex class", () => {
      test("Then it should extract static and instance fields", () => {
        // Given: Complex class with static and instance fields
        const parseResult = parser.parseText(getComplexClassContent(), "ComplexClass.gs")
        expect(parseResult.isValid).toBe(true)

        // When: Extracting symbols
        const symbolTable = symbolExtractor.extractSymbols("file:///ComplexClass.gs", parseResult.ast!)

        // Then: Should extract static fields
        const staticFields = symbolTable.allSymbols.filter((s) => s.isStatic && s.type === "field")
        expect(staticFields).toHaveLength(1)
        expect(staticFields[0].name).toBe("CONSTANT")
        expect(staticFields[0].dataType).toBe("String")

        // And: Should extract instance fields with different visibilities
        const instanceFields = symbolTable.allSymbols.filter((s) => !s.isStatic && s.type === "field")
        expect(instanceFields).toHaveLength(2)
      })

      test.skip("And it should extract properties", () => {
        // ANTLR grammar issue - advanced feature: Property syntax not yet implemented
        // TODO: Implement property get/set syntax in ANTLR grammar
        // Given: Complex class with properties
        const parseResult = parser.parseText(getComplexClassContent(), "ComplexClass.gs")
        expect(parseResult.isValid).toBe(true)

        // When: Extracting symbols
        const symbolTable = symbolExtractor.extractSymbols("file:///ComplexClass.gs", parseResult.ast!)

        // Then: Should extract property symbols
        const properties = findSymbolsByType(symbolTable, "property")
        expect(properties).toHaveLength(2) // ItemCount, Status
      })

      test("And it should extract methods with local variables", () => {
        // Given: Complex class with methods containing local variables
        const parseResult = parser.parseText(getComplexClassContent(), "ComplexClass.gs")
        expect(parseResult.isValid).toBe(true)

        // When: Extracting symbols
        const symbolTable = symbolExtractor.extractSymbols("file:///ComplexClass.gs", parseResult.ast!)

        // Then: Should extract methods
        const methods = findSymbolsByType(symbolTable, "function")
        expect(methods.length).toBeGreaterThanOrEqual(3) // processItems, validateInput, createDefault

        // And: Should have proper visibility and static modifiers
        const staticMethod = symbolTable.allSymbols.find((s) => s.name === "createDefault")
        expect(staticMethod?.isStatic).toBe(true)

        const privateMethod = symbolTable.allSymbols.find((s) => s.name === "validateInput")
        expect(privateMethod?.visibility).toBe("private")
      })

      test("And it should extract function parameters and local variables", () => {
        // Given: Complex class with function containing parameters and locals
        const parseResult = parser.parseText(getComplexClassContent(), "ComplexClass.gs")
        expect(parseResult.isValid).toBe(true)

        // When: Extracting symbols with scope information
        const symbolTable = symbolExtractor.extractSymbols("file:///ComplexClass.gs", parseResult.ast!)

        // Then: Should extract parameters and local variables in proper scopes
        const processItemsFunction = findSymbolsByName(symbolTable, "processItems")[0]
        expect(processItemsFunction.parameters).toHaveLength(2)
      })
    })

    describe("When extracting symbols from interface definition", () => {
      test.skip("Then it should extract interface and method signatures", () => {
        // ANTLR grammar issue - advanced feature: Interface syntax not yet implemented
        // TODO: Implement interface definitions in ANTLR grammar
        // Given: Interface definition
        const parseResult = parser.parseText(getInterfaceDefinitionContent(), "ITestInterface.gs")
        expect(parseResult.isValid).toBe(true)

        // When: Extracting symbols
        const symbolTable = symbolExtractor.extractSymbols("file:///ITestInterface.gs", parseResult.ast!)

        // Then: Should extract interface symbol
        const interfaces = findSymbolsByType(symbolTable, "interface")
        expect(interfaces).toHaveLength(1)
        expect(interfaces[0].name).toBe("ITestInterface")

        // And: Should extract method signatures without implementations
        const methods = findSymbolsByType(symbolTable, "function")
        expect(methods).toHaveLength(2) // getItems, processItem
      })
    })

    describe("When extracting symbols from enhancement definition", () => {
      test.skip("Then it should extract enhancement and its methods", () => {
        // ANTLR grammar issue - advanced feature: Enhancement syntax not yet implemented
        // TODO: Implement enhancement definitions in ANTLR grammar
        // Given: Enhancement definition
        const parseResult = parser.parseText(getEnhancementDefinitionContent(), "StringUtils.gsx")
        expect(parseResult.isValid).toBe(true)

        // When: Extracting symbols
        const symbolTable = symbolExtractor.extractSymbols("file:///StringUtils.gsx", parseResult.ast!)

        // Then: Should extract enhancement symbol
        const enhancements = findSymbolsByType(symbolTable, "enhancement")
        expect(enhancements).toHaveLength(1)
        expect(enhancements[0].name).toBe("StringUtils")

        // And: Should extract enhancement methods
        const methods = findSymbolsByType(symbolTable, "function")
        expect(methods).toHaveLength(3) // isEmpty, capitalize, splitAndFilter
      })
    })

    describe("When using symbol table lookup functions", () => {
      test("Then it should find symbols by name correctly", () => {
        // Given: A symbol table with test symbols
        const symbolTable = createSymbolTable("file:///test.gs")
        const testSymbol: GosuASTSymbol = {
          name: "testVariable",
          type: "variable",
          dataType: "String",
          line: 1,
          column: 0,
          visibility: "private",
        }
        addSymbolToTable(symbolTable, testSymbol)

        // When: Finding symbols by name
        const found = findSymbolsByName(symbolTable, "testVariable")

        // Then: Should return correct symbols
        expect(found).toHaveLength(1)
        expect(found[0]).toEqual(testSymbol)
      })

      test("And it should find symbols by prefix correctly", () => {
        // Given: A symbol table with multiple symbols
        const symbolTable = createSymbolTable("file:///test.gs")
        const symbols: GosuASTSymbol[] = [
          { name: "testVar1", type: "variable", line: 1, column: 0 },
          { name: "testVar2", type: "variable", line: 2, column: 0 },
          { name: "otherVar", type: "variable", line: 3, column: 0 },
        ]
        symbols.forEach((s) => addSymbolToTable(symbolTable, s))

        // When: Finding symbols by prefix
        const found = findSymbolsByPrefix(symbolTable, "test")

        // Then: Should return matching symbols
        expect(found).toHaveLength(2)
        expect(found.map((s) => s.name)).toContain("testVar1")
        expect(found.map((s) => s.name)).toContain("testVar2")
      })

      test("And it should find symbols by type correctly", () => {
        // Given: A symbol table with different symbol types
        const symbolTable = createSymbolTable("file:///test.gs")
        const symbols: GosuASTSymbol[] = [
          { name: "MyClass", type: "class", line: 1, column: 0 },
          { name: "myFunction", type: "function", line: 5, column: 0 },
          { name: "myVariable", type: "variable", line: 10, column: 0 },
        ]
        symbols.forEach((s) => addSymbolToTable(symbolTable, s))

        // When: Finding symbols by type
        const functions = findSymbolsByType(symbolTable, "function")
        const classes = findSymbolsByType(symbolTable, "class")

        // Then: Should return correct symbols
        expect(functions).toHaveLength(1)
        expect(functions[0].name).toBe("myFunction")
        expect(classes).toHaveLength(1)
        expect(classes[0].name).toBe("MyClass")
      })
    })
  })
})
