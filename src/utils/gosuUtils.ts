/**
 * Utility functions for GOSU language support
 */

/**
 * Check if a string contains GOSU keywords
 */
export function containsGosuKeywords(text: string): boolean {
  const keywords = [
    "class",
    "interface",
    "function",
    "property",
    "var",
    "construct",
    "implements",
    "extends",
    "enhancement",
    "delegate",
    "uses",
    "package",
  ]

  return keywords.some((keyword) => new RegExp(`\\b${keyword}\\b`).test(text))
}

/**
 * Extract class names from GOSU code
 */
export function extractClassNames(text: string): string[] {
  const classRegex = /\bclass\s+([A-Z][a-zA-Z0-9_]*)/g
  const matches: string[] = []
  let match: RegExpExecArray | null = classRegex.exec(text)

  while (match !== null) {
    matches.push(match[1])
    match = classRegex.exec(text)
  }

  return matches
}

/**
 * Extract function names from GOSU code
 */
export function extractFunctionNames(text: string): string[] {
  const functionRegex = /\bfunction\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g
  const matches: string[] = []
  let match: RegExpExecArray | null = functionRegex.exec(text)

  while (match !== null) {
    matches.push(match[1])
    match = functionRegex.exec(text)
  }

  return matches
}

/**
 * Check if file extension is a GOSU file
 */
export function isGosuFile(fileName: string): boolean {
  const gosuExtensions = [".gs", ".gsx", ".gst", ".gsp"]
  return gosuExtensions.some((ext) => fileName.toLowerCase().endsWith(ext))
}
