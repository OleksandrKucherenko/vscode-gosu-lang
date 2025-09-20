export interface FunctionAnchor {
  name: string | null
  start: number
  end: number
  bodyStart: number
  isComplete: boolean
}

const FUNCTION_REGEX = /\bfunction\s+([A-Za-z_][A-Za-z0-9_]*)?/g

/**
 * Detect top-level function/method anchors using regex heuristics and brace matching.
 * Stage 1 implementation: reliable enough to isolate malformed function bodies.
 */
export function detectFunctionAnchors(sourceText: string): FunctionAnchor[] {
  const anchors: FunctionAnchor[] = []

  for (const match of sourceText.matchAll(FUNCTION_REGEX)) {
    const name = match[1] ?? null
    const functionKeywordIndex = match.index ?? 0

    const bodyStart = findFirstBrace(sourceText, functionKeywordIndex + match[0].length)

    if (bodyStart === -1) {
      anchors.push({
        name,
        start: functionKeywordIndex,
        end: sourceText.length,
        bodyStart: -1,
        isComplete: false,
      })
      continue
    }

    const bodyEnd = findMatchingBrace(sourceText, bodyStart)

    anchors.push({
      name,
      start: functionKeywordIndex,
      end: bodyEnd === -1 ? sourceText.length : bodyEnd + 1,
      bodyStart,
      isComplete: bodyEnd !== -1,
    })
  }

  return anchors
}

function findFirstBrace(source: string, startIndex: number): number {
  return source.indexOf("{", startIndex)
}

function findMatchingBrace(source: string, openIndex: number): number {
  let depth = 0
  let i = openIndex

  while (i < source.length) {
    const char = source[i]
    if (char === "{") {
      depth += 1
    } else if (char === "}") {
      depth -= 1
      if (depth === 0) {
        return i
      }
    }
    i += 1
  }

  return -1
}
