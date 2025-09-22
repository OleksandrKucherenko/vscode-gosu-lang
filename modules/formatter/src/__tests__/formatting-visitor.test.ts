import { GosuParser } from "@gosu-lsp/parser"
import { readFixture } from "@gosu-lsp/shared"
import { beforeEach, describe, expect, it } from "vitest"
import { resetFormatterCache } from "../index"
import { buildFormattingTree } from "../ir/visitor"

const parser = new GosuParser()

describe("GosuFormattingVisitor", () => {
  beforeEach(() => {
    resetFormatterCache()
  })

  it("produces a stable formatting tree for a simple class", () => {
    const source = readFixture("parser/ClassWithComments.gs")
    const result = parser.parseText(source, "ClassWithComments.gs")
    const nodes = buildFormattingTree(result)
    expect(nodes).toMatchSnapshot()
  })

  it("produces a stable formatting tree for the integration fixture", () => {
    const source = readFixture("semantic-highlighting/ASTIntegrationClass.gs")
    const result = parser.parseText(source, "ASTIntegrationClass.gs")
    const nodes = buildFormattingTree(result)
    expect(nodes).toMatchSnapshot()
  })
})
