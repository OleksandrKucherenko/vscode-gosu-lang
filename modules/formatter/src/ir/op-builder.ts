import type { GosuParseResult, GosuToken } from "@gosu-lsp/parser"

import type { FormattingOp } from "./ops"
import { hardLine, indent, space, text } from "./ops"

export interface BuildOpsOptions {
  maxEmptyLines?: number
}

const DEFAULT_OPTIONS: Required<BuildOpsOptions> = {
  maxEmptyLines: 1,
}

const NO_SPACE_BEFORE = new Set([",", ".", ")", ";", "]", "}", "++", "--", "<", ">", "("])
const NO_SPACE_AFTER = new Set(["(", ".", "{", "[", "++", "--"])
const BRACE_OPEN = "{"
const BRACE_CLOSE = "}"
const STATEMENT_TERMINATORS = new Set([";", BRACE_CLOSE])

// Control flow keywords that should have spaces before parentheses
const CONTROL_FLOW_KEYWORDS = new Set([
  "if", "while", "for", "foreach", "switch", "catch", "when", "try"
])

export function buildFormattingOps(parseResult: GosuParseResult, options: BuildOpsOptions = {}): FormattingOp[] {
  const opts = { ...DEFAULT_OPTIONS, ...options }
  const ops: FormattingOp[] = []
  const tokens = parseResult.tokens ?? []

  let prevText: string | null = null
  let atLineStart = true
  let pendingEmptyLines = 0

  const flushPendingEmptyLines = () => {
    if (pendingEmptyLines > 0) {
      while (pendingEmptyLines > 0) {
        ops.push(hardLine)
        pendingEmptyLines--
      }
      atLineStart = true
    }
  }

  for (const token of tokens) {
    if (!token || !token.text || token.text === "<EOF>") {
      continue
    }


    if (token.channel !== 0) {
      // Hidden channel – whitespace or comments
      if (token.text.includes("\n")) {
        const newlineCount = (token.text.match(/\n/g) ?? []).length
        const additionalBlankLines = Math.max(0, newlineCount - 1)
        if (!atLineStart) {
          ops.push(hardLine)
        }
        atLineStart = true
        // Don't add extra blank lines at the end of file
        if (token.text !== "\n" && token.text !== "\r\n") {
          pendingEmptyLines = Math.min(opts.maxEmptyLines, additionalBlankLines)
        }
        prevText = null
      }

      if (isCommentToken(token)) {
        flushPendingEmptyLines()
        if (!atLineStart) {
          ops.push(hardLine)
          atLineStart = true
        }
        const commentLines = token.text.split(/\r?\n/)
        commentLines.forEach((line, index) => {
          let trimmedLine = line.trim()
          if (trimmedLine.startsWith("*")) {
            if (trimmedLine.startsWith("*/")) {
              // Handle closing comment marker - add space before */
              trimmedLine = ` ${trimmedLine}`
            } else {
              // Handle regular comment lines - add space before *
              trimmedLine = ` ${trimmedLine}`
            }
          }
          if (trimmedLine.length > 0) {
            ops.push(text(trimmedLine))
            atLineStart = false
          }
          if (index < commentLines.length - 1) {
            ops.push(hardLine)
            atLineStart = true
          }
        })
        ops.push(hardLine)
        atLineStart = true
        prevText = null
      }

      continue
    }

    flushPendingEmptyLines()

    const currentText = token.text

    if (currentText === BRACE_CLOSE) {
      if (!atLineStart) {
        ops.push(hardLine)
      }
      ops.push(indent(-1))
      ops.push(text(currentText))
      atLineStart = false
      prevText = currentText
      continue
    }

    if (!atLineStart && shouldInsertSpace(prevText, currentText)) {
      ops.push(space)
    }

    ops.push(text(currentText))
    atLineStart = false

    if (currentText === BRACE_OPEN) {
      ops.push(hardLine)
      ops.push(indent(1))
      atLineStart = true
    } else if (STATEMENT_TERMINATORS.has(currentText)) {
      ops.push(hardLine)
      atLineStart = true
    }

    prevText = currentText
  }

  // Ensure file ends with exactly one newline
  while (ops.length > 0 && ops[ops.length - 1].kind === "hardLine") {
    ops.pop()
  }
  // Add exactly one newline at the end
  ops.push(hardLine)

  return ops
}

function shouldInsertSpace(prevText: string | null, currentText: string): boolean {
  if (!prevText) return false
  if (NO_SPACE_AFTER.has(prevText)) return false
  if (NO_SPACE_BEFORE.has(currentText)) {
    // Special case: allow space before ( for control flow keywords
    if (currentText === "(" && CONTROL_FLOW_KEYWORDS.has(prevText)) {
      return true
    }
    return false
  }
  if (currentText === BRACE_OPEN) return true
  if (currentText === ":") return false
  if (prevText === ":") return true
  if (prevText === BRACE_OPEN) return false
  if (currentText === BRACE_CLOSE) return false
  if (prevText === "") return false

  // Handle generic type parameters - no space after < or before >
  if (prevText === "<" || currentText === ">") return false

  // Handle spacing around parentheses
  if (currentText === "(") {
    // Add space before ( for control flow keywords
    if (CONTROL_FLOW_KEYWORDS.has(prevText)) return true
    // No space before ( in method calls
    return false
  }

  // Handle template syntax - preserve spacing for template expressions
  if (prevText === "<" && (currentText === "%" || currentText === "=")) return false
  if (prevText === "%" && currentText === ">") return false

  const prevIdentifier = isIdentifierLike(prevText)
  const currentIdentifier = isIdentifierLike(currentText)
  if (prevIdentifier && currentIdentifier) return true
  if (prevIdentifier && currentText === "(") {
    // Add space before ( for method calls with identifiers
    return true
  }
  if (prevText === ")" && currentIdentifier) return true
  return true
}

function isIdentifierLike(text: string): boolean {
  return /[A-Za-z0-9_"']/.test(text[0] ?? "")
}

function isCommentToken(token: GosuToken): boolean {
  return token.commentType !== undefined
}
