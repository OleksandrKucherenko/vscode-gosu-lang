import type { GosuParseResult, GosuToken } from "@gosu-lsp/parser"

import type { FormattingOp } from "./ops"
import { hardLine, indent, space, text } from "./ops"

export interface BuildOpsOptions {
  maxEmptyLines?: number
}

const DEFAULT_OPTIONS: Required<BuildOpsOptions> = {
  maxEmptyLines: 1,
}

const NO_SPACE_BEFORE = new Set([",", ".", ")", ";", "]", "}"])
const NO_SPACE_AFTER = new Set(["(", ".", "{", "["])
const BRACE_OPEN = "{"
const BRACE_CLOSE = "}"
const STATEMENT_TERMINATORS = new Set([";", BRACE_CLOSE])

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
        pendingEmptyLines = Math.min(opts.maxEmptyLines, additionalBlankLines)
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
          if (trimmedLine.startsWith("*") && !trimmedLine.startsWith("*/")) {
            trimmedLine = ` ${trimmedLine}`
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

  return ops
}

function shouldInsertSpace(prevText: string | null, currentText: string): boolean {
  if (!prevText) return false
  if (NO_SPACE_AFTER.has(prevText)) return false
  if (NO_SPACE_BEFORE.has(currentText)) return false
  if (currentText === BRACE_OPEN) return true
  if (currentText === ":") return false
  if (prevText === ":") return true
  if (prevText === BRACE_OPEN) return false
  if (currentText === BRACE_CLOSE) return false
  if (prevText === "") return false
  const prevIdentifier = isIdentifierLike(prevText)
  const currentIdentifier = isIdentifierLike(currentText)
  if (prevIdentifier && currentIdentifier) return true
  if (prevIdentifier && currentText === "(") return false
  if (prevText === ")" && currentIdentifier) return true
  return true
}

function isIdentifierLike(text: string): boolean {
  return /[A-Za-z0-9_"']/.test(text[0] ?? "")
}

function isCommentToken(token: GosuToken): boolean {
  return token.commentType !== undefined
}
