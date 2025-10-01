import { describe, expect, it } from "vitest"

import { renderOps } from "../doc/doc-builder"
import { hardLine, indent, text } from "../ir/ops"

// Classification: Unit
describe("Doc builder", () => {
  // Classification: Unit
  it("applies indentation after line breaks", () => {
    const ops = [
      text("function"),
      text(" "),
      text("greet"),
      text("()"),
      text(" "),
      text("{"),
      hardLine,
      indent(1),
      text("return"),
      text(" "),
      text("0"),
      hardLine,
      indent(-1),
      text("}"),
      hardLine,
    ]

    const output = renderOps(ops, { indentSize: 2 })
    expect(output).toContain("  return 0")
    expect(output.trim().endsWith("}"), "should end with closing brace").toBe(true)
  })
})
