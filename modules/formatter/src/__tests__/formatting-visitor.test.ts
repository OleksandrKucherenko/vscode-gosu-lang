import { GosuParser } from "@gosu-lsp/parser"
import { readFixture } from "@gosu-lsp/shared"
import { describe, expect, it } from "vitest"

import { buildFormattingTree } from "../ir/visitor"

const parser = new GosuParser()

describe("GosuFormattingVisitor", () => {
  it("produces class and function nodes for simple class", () => {
    const source = readFixture("parser/ClassWithComments.gs")
    const result = parser.parseText(source, "ClassWithComments.gs")

    const nodes = buildFormattingTree(result)

    expect(nodes.length).toBeGreaterThan(0)
    const classNode = nodes.find((node) => node.kind === "class" && node.name === "ClassWithComments")
    expect(classNode).toBeDefined()
    expect(classNode?.children.map((child) => child.name)).toEqual(["greet", "farewell"])
    expect(classNode?.range.start.line).toBe(4)
    expect(classNode?.range.end.line).toBeGreaterThan(classNode?.range.start.line ?? 0)
  })

  it("captures functions from integration fixture", () => {
    const source = readFixture("semantic-highlighting/ASTIntegrationClass.gs")
    const result = parser.parseText(source, "ASTIntegrationClass.gs")

    const nodes = buildFormattingTree(result)
    const classNode = nodes.find((node) => node.kind === "class" && node.name === "ASTClass")

    expect(classNode).toBeDefined()
    expect(classNode?.children.filter((child) => child.kind === "function").length ?? 0).toBeGreaterThan(0)
  })
})
