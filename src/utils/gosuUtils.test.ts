import { readFileSync } from "fs"
import path from "path"
import { fileURLToPath } from "url"
import { describe, expect, it } from "vitest"

import { containsGosuKeywords, extractClassNames, extractFunctionNames, isGosuFile } from "./gosuUtils"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function readFixture(testFile: string): string {
  const filePath = path.resolve(__dirname, `../../test/fixtures/${testFile}`)
  return readFileSync(filePath, "utf8")
}

describe("GosuUtils functions", () => {
  describe("containsGosuKeywords", () => {
    it("should detect GOSU keywords in text", () => {
      const text = "class MyClass implements ITest"
      expect(containsGosuKeywords(text)).toBe(true)
    })

    it("should return false for text without GOSU keywords", () => {
      const text = "hello world this is just text"
      expect(containsGosuKeywords(text)).toBe(false)
    })

    it("should detect function keyword", () => {
      const text = "function getName(): String"
      expect(containsGosuKeywords(text)).toBe(true)
    })

    it("should detect multiple keywords", () => {
      const text = "class MyClass extends BaseClass implements ITest"
      expect(containsGosuKeywords(text)).toBe(true)
    })

    it("should be case sensitive", () => {
      const text = "CLASS MyClass" // uppercase
      expect(containsGosuKeywords(text)).toBe(false)
    })
  })

  describe("extractClassNames", () => {
    it("should extract class names from GOSU code", () => {
      const text = readFixture("utils/ClassesForExtraction.gs")
      const classNames = extractClassNames(text)
      expect(classNames).toEqual(["MyClass", "AnotherClass"])
    })

    it("should return empty array when no classes found", () => {
      const text = 'function test() { return "hello" }'
      const classNames = extractClassNames(text)
      expect(classNames).toEqual([])
    })

    it("should handle class names with underscores and numbers", () => {
      const text = "class My_Class123 { }"
      const classNames = extractClassNames(text)
      expect(classNames).toEqual(["My_Class123"])
    })
  })

  describe("extractFunctionNames", () => {
    it("should extract function names from GOSU code", () => {
      const text = readFixture("utils/FunctionsForExtraction.gs")
      const functionNames = extractFunctionNames(text)
      expect(functionNames).toEqual(["getName", "setAge"])
    })

    it("should handle functions with no parameters", () => {
      const text = "function test() { }"
      const functionNames = extractFunctionNames(text)
      expect(functionNames).toEqual(["test"])
    })

    it("should handle functions with complex parameter lists", () => {
      const text = "function complexFunction(param1: String, param2: List<Integer>) { }"
      const functionNames = extractFunctionNames(text)
      expect(functionNames).toEqual(["complexFunction"])
    })
  })

  describe("isGosuFile", () => {
    it("should recognize .gs files", () => {
      expect(isGosuFile("MyClass.gs")).toBe(true)
    })

    it("should recognize .gsx files", () => {
      expect(isGosuFile("Enhancement.gsx")).toBe(true)
    })

    it("should recognize .gst files", () => {
      expect(isGosuFile("Template.gst")).toBe(true)
    })

    it("should recognize .gsp files", () => {
      expect(isGosuFile("Program.gsp")).toBe(true)
    })

    it("should reject non-GOSU files", () => {
      expect(isGosuFile("file.txt")).toBe(false)
      expect(isGosuFile("script.js")).toBe(false)
      expect(isGosuFile("style.css")).toBe(false)
    })

    it("should be case insensitive", () => {
      expect(isGosuFile("MyClass.GS")).toBe(true)
      expect(isGosuFile("Enhancement.GSX")).toBe(true)
      expect(isGosuFile("Template.GST")).toBe(true)
      expect(isGosuFile("Program.GSP")).toBe(true)
    })

    it("should handle files with paths", () => {
      expect(isGosuFile("/path/to/MyClass.gs")).toBe(true)
      expect(isGosuFile("src/main/gosu/MyClass.gs")).toBe(true)
    })
  })
})
