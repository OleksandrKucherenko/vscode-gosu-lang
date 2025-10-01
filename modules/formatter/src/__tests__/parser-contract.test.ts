import { GosuParser } from "@gosu-lsp/parser"
import { readFixture, safeJsonStringify } from "@gosu-lsp/shared/test-utils"
import { describe, expect, it } from "vitest"

// Classification: Snapshot
describe("Parser Contract", () => {
  const parser = new GosuParser()

  // Classification: Snapshot
  it("produces a stable AST for a simple class", () => {
    const source = readFixture("parser/SimpleClass.gs")
    const ast = parser.parseText(source, "SimpleClass.gs")
    expect(safeJsonStringify(ast)).toMatchSnapshot()
  })

  // Classification: Snapshot
  it("produces a stable AST for an interface", () => {
    const source = readFixture("interfaces/ITestInterface.gs")
    const ast = parser.parseText(source, "ITestInterface.gs")
    expect(safeJsonStringify(ast)).toMatchSnapshot()
  })

  // Classification: Snapshot
  it("produces a stable AST for an enhancement", () => {
    const source = readFixture("parser/MyStringEnhancement.gsx")
    const ast = parser.parseText(source, "MyStringEnhancement.gsx")
    expect(safeJsonStringify(ast)).toMatchSnapshot()
  })
})
