import type { FormattingOp } from "../ir/ops"

export interface RenderOptions {
  indentSize?: number
}

const DEFAULT_INDENT_SIZE = 2

export function renderOps(ops: FormattingOp[], options: RenderOptions = {}): string {
  const indentSize = options.indentSize ?? DEFAULT_INDENT_SIZE
  let indentLevel = 0
  let atLineStart = true
  let output = ""

  for (const op of ops) {
    switch (op.kind) {
      case "indent": {
        indentLevel = Math.max(0, indentLevel + op.delta)
        break
      }
      case "text": {
        if (atLineStart && op.text.length > 0) {
          output += " ".repeat(indentLevel * indentSize)
        }
        output += op.text
        atLineStart = false
        break
      }
      case "space": {
        if (!atLineStart && !output.endsWith(" ")) {
          output += " "
        }
        break
      }
      case "softLine": {
        if (!atLineStart) {
          output += " "
        }
        break
      }
      case "hardLine": {
        output = output.replace(/[ \t]+$/, "")
        output += "\n"
        atLineStart = true
        break
      }
      case "groupStart":
      case "groupEnd": {
        // no-op for now
        break
      }
    }
  }

  // Ensure exactly one trailing newline
  return `${output.replace(/\n+$/, "")}\n`
}
