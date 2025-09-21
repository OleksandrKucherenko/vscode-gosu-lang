import type { GosuParseResult, GosuToken } from "@gosu-lsp/parser"

import type { FormattingOp } from "./ops"
import { hardLine, indent, space, text } from "./ops"

export interface BuildOpsOptions {
  maxEmptyLines?: number
}

const DEFAULT_OPTIONS: Required<BuildOpsOptions> = {
  maxEmptyLines: 1,
}

const NO_SPACE_BEFORE = new Set([",", ".", ")", ";", "]", "}", "++", "--", ">", "("])
const NO_SPACE_AFTER = new Set(["(", ".", "{", "[", "++", "--", "<"])
const BRACE_OPEN = "{"
const BRACE_CLOSE = "}"
const STATEMENT_TERMINATORS = new Set([";", BRACE_CLOSE])

// Control flow keywords that should have spaces before parentheses
const CONTROL_FLOW_KEYWORDS = new Set(["if", "while", "for", "foreach", "switch", "catch", "when", "try"])

export function buildFormattingOps(parseResult: GosuParseResult, options: BuildOpsOptions = {}): FormattingOp[] {
  const opts = { ...DEFAULT_OPTIONS, ...options }
  const ops: FormattingOp[] = []
  const tokens = parseResult.tokens ?? []

  // Pre-process tokens to handle lambda syntax - remove all \
  const processedTokens = tokens.map((token) => {
    if (token?.text) {
      return { ...token, text: token.text.replace(/\\/g, "") }
    }
    return token
  })

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

  for (let i = 0; i < processedTokens.length; i++) {
    const token = processedTokens[i]
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

        // Handle different comment types
        if (token.commentType === "line") {
          // Line comments - preserve on same line if not at line start
          if (!atLineStart) {
            ops.push(space)
          }
          ops.push(text(token.text))
          atLineStart = false
        } else if (token.commentType === "block" || token.commentType === "doc") {
          // Block/doc comments - format with proper indentation
          if (!atLineStart) {
            ops.push(hardLine)
            atLineStart = true
          }

          const commentLines = token.text.split(/\r?\n/)
          commentLines.forEach((line, index) => {
            let trimmedLine = line.trim()
            if (trimmedLine.startsWith("*")) {
              if (trimmedLine.startsWith("*/")) {
                // Handle closing comment marker
                trimmedLine = ` ${trimmedLine}`
              } else {
                // Handle regular comment lines
                trimmedLine = ` ${trimmedLine}`
              }
            } else if (trimmedLine.startsWith("/**") || trimmedLine.startsWith("/*")) {
              // Opening comment markers stay as-is
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
        }

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
      // Don't add newline after closing brace - let it be handled by next token or end of file
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

  // No space before @ for annotations, and no space after @
  if (currentText === "@") return false
  if (prevText === "@") return false

  const prevIdentifier = isIdentifierLike(prevText)
  const currentIdentifier = isIdentifierLike(currentText)
  if (prevIdentifier && currentIdentifier) return true
  if (prevIdentifier && currentText === "(") {
    // No space before ( for method calls
    return false
  }
  if (prevText === ")" && currentIdentifier) return true

  // Special handling for generics: no space before < after identifiers
  if (prevIdentifier && currentText === "<") return false

  return true
}

function isIdentifierLike(text: string): boolean {
  return /[A-Za-z0-9_"']/.test(text[0] ?? "")
}

function isCommentToken(token: GosuToken): boolean {
  return token.commentType !== undefined
}
