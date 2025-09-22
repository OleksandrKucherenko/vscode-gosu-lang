import { GosuParser } from "@gosu-lsp/parser"
import { readFixture } from "@gosu-lsp/shared"
import { describe, expect, it } from "vitest"

import { buildFormattingOps } from "../ir/op-builder"

const parser = new GosuParser()

// Classification: Unit
describe("Formatting Ops Builder", () => {
  // Classification: Unit
  it("emits indentation ops for braces", () => {
    const source = readFixture("parser/SimpleClass.gs")
    const result = parser.parseText(source, "SimpleClass.gs")

    const ops = buildFormattingOps(result)
    const kinds = ops.map((op) => op.kind)

    expect(kinds).toContain("indent")
    expect(kinds.filter((kind) => kind === "hardLine").length).toBeGreaterThan(0)
  })

  // Classification: Unit
  it("includes comment text as hard-lined sequences", () => {
    const source = readFixture("parser/ClassWithComments.gs")
    const result = parser.parseText(source, "ClassWithComments.gs")

    const ops = buildFormattingOps(result)
    const commentOps = ops.filter((op) => op.kind === "text" && op.text.startsWith("//"))
    expect(commentOps.length).toBeGreaterThan(0)
  })
})
