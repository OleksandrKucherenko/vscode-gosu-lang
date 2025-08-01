import * as fs from "node:fs"
import * as path from "node:path"
import debug from "debug"
import { describe, expect, it } from "vitest"

// Type definitions for TextMate grammar patterns
interface GrammarPattern {
  name?: string
  match?: string
  begin?: string
  end?: string
  patterns?: GrammarPattern[]
}

interface Grammar {
  name: string
  scopeName: string
  fileTypes: string[]
  repository: {
    [key: string]: {
      patterns: GrammarPattern[]
    }
  }
}

const logger = debug("gosu:test")

const VSCODE_GRAMMAR_PATH = path.resolve(__dirname, "../../syntaxes/gosu.tmLanguage.full.json")
const GOSU_SAMPLE_FILE_PATH = path.resolve(__dirname, "../../gosu/gosu-syntax-full-sample.gs")

describe("Gosu Grammar Validation", () => {
  // GIVEN: Grammar file and sample code are loaded
  const grammar: Grammar = JSON.parse(fs.readFileSync(VSCODE_GRAMMAR_PATH, "utf8"))
  const sampleCode = fs.readFileSync(GOSU_SAMPLE_FILE_PATH, "utf8")
  const sampleLines = sampleCode.split("\n")

  // Function to test a regex pattern against the sample
  function testPattern(name: string, pattern: string): boolean {
    // GIVEN: A regex pattern to test
    // WHEN: Creating RegExp and testing against sample lines
    try {
      const regex = new RegExp(pattern)
      // THEN: Should find at least one match
      for (const line of sampleLines) {
        if (regex.test(line)) {
          logger(`✓ ${name} matches: "${line.trim()}"`)
          return true
        }
      }
      logger(`✗ ${name} does not match any line in the sample`)
      return false
    } catch (e) {
      logger(`✗ ${name} has invalid regex: ${pattern}`, e)
      return false
    }
  }

  // Function to extract keywords from a regex pattern string
  function extractKeywords(pattern: string): string[] {
    // GIVEN: A pattern string
    // WHEN: Matching alternation group
    const match = pattern.match(/\\b\(([^)]+)\)\\b/)
    // THEN: Return split keywords if matched
    if (!match) return []
    return match[1].split("|")
  }

  // Function to detect duplicate keywords across different pattern categories
  function detectDuplicateKeywords(): { keyword: string; categories: string[] }[] {
    // GIVEN: Empty maps for keywords and duplicates
    const keywordsByCategory: { [category: string]: string[] } = {}
    const duplicates: { [keyword: string]: string[] } = {}

    // WHEN: Finding all match patterns recursively
    const patterns: { category: string; pattern: string }[] = []
    function findMatchPatterns(obj: any): void {
      if (!obj) return

      if (obj.match && typeof obj.match === "string" && obj.name) {
        patterns.push({
          category: obj.name,
          pattern: obj.match,
        })
      }

      if (typeof obj === "object") {
        for (const key in obj) {
          if (key === "patterns" && Array.isArray(obj[key])) {
            for (const pattern of obj[key]) {
              findMatchPatterns(pattern)
            }
          } else if (typeof obj[key] === "object") {
            findMatchPatterns(obj[key])
          }
        }
      }
    }

    findMatchPatterns(grammar)

    // AND: Extracting keywords and checking for duplicates
    for (const { category, pattern } of patterns) {
      const keywords = extractKeywords(pattern)

      if (keywords.length > 0) {
        keywordsByCategory[category] = keywords

        for (const keyword of keywords) {
          if (!duplicates[keyword]) {
            duplicates[keyword] = []
          }
          duplicates[keyword].push(category)
        }
      }
    }

    // THEN: Return duplicates with multiple categories
    return Object.entries(duplicates)
      .filter(([_, categories]) => categories.length > 1)
      .map(([keyword, categories]) => ({ keyword, categories }))
  }

  it("validates basic grammar structure", () => {
    // GIVEN: Loaded grammar
    // WHEN: Checking name, scope, and file types
    const fileTypes = grammar.fileTypes.join(", ")
    // THEN: Properties match expected values
    expect(grammar.name).toBe("GOSU")
    expect(grammar.scopeName).toBe("source.gosu")
    expect(fileTypes).toBe("gs, gsx, gst, gsp")
  })

  it("checks required repositories are present", () => {
    // GIVEN: List of required repositories
    const requiredRepos = ["comments", "keywords", "strings", "annotations", "properties", "functions"]
    let allPresent = true

    // WHEN: Verifying each repository exists
    for (const repo of requiredRepos) {
      if (!grammar.repository?.[repo]) {
        allPresent = false
      }
    }

    // THEN: All critical repositories should be present
    expect(allPresent).toBe(true)
  })

  it("tests line comment pattern", () => {
    // GIVEN: Line comment pattern
    // WHEN: Testing against sample
    // THEN: Should match at least one line
    expect(testPattern("Line comment", "//.*")).toBe(true)
  })

  it("tests block comment begin pattern", () => {
    // GIVEN: Block comment begin pattern
    // WHEN: Testing against sample
    // THEN: Should match at least one line
    expect(testPattern("Block comment begin", "/\\*")).toBe(true)
  })

  it("tests annotation pattern", () => {
    // GIVEN: Annotation pattern
    // WHEN: Testing against sample
    // THEN: Should match at least one line
    expect(testPattern("Annotation", "@[a-zA-Z_][a-zA-Z0-9_]*(\\.[a-zA-Z_][a-zA-Z0-9_]*)*")).toBe(true)
  })

  it("tests any property pattern", () => {
    // GIVEN: Property keyword pattern
    // WHEN: Testing against sample
    // THEN: Should match at least one line
    expect(testPattern("Any property", "property")).toBe(true)
  })

  it("tests class keyword", () => {
    // GIVEN: Class keyword pattern
    // WHEN: Testing against sample
    // THEN: Should match at least one line
    expect(testPattern("class keyword", "\\bclass\\b")).toBe(true)
  })

  it("tests construct keyword", () => {
    // GIVEN: Construct keyword pattern
    // WHEN: Testing against sample
    // THEN: Should match at least one line
    expect(testPattern("construct keyword", "\\bconstruct\\b")).toBe(true)
  })

  it("tests function keyword", () => {
    // GIVEN: Function keyword pattern
    // WHEN: Testing against sample
    // THEN: Should match at least one line
    expect(testPattern("function keyword", "\\bfunction\\b")).toBe(true)
  })

  it("tests property keyword", () => {
    // GIVEN: Property keyword pattern
    // WHEN: Testing against sample
    // THEN: Should match at least one line
    expect(testPattern("property keyword", "\\bproperty\\b")).toBe(true)
  })

  it("tests property get pattern", () => {
    // GIVEN: Property get compound pattern
    // WHEN: Testing against sample
    // THEN: Should match at least one line
    expect(testPattern("property get pattern", "property\\s+get")).toBe(true)
  })

  it("tests property set pattern", () => {
    // GIVEN: Property set compound pattern
    // WHEN: Testing against sample
    // THEN: Should match at least one line
    expect(testPattern("property set pattern", "property\\s+set")).toBe(true)
  })

  it("verifies no duplicate keywords across categories", () => {
    // GIVEN: Grammar patterns
    // WHEN: Detecting duplicate keywords
    const duplicateKeywords = detectDuplicateKeywords()
    // THEN: No duplicates should be found
    expect(duplicateKeywords.length).toBe(0)
  })

  it("validates keyword patterns existence", () => {
    // GIVEN: Keywords repository
    // WHEN: Checking if patterns exist
    const keywordPatterns = grammar.repository?.keywords?.patterns
    // THEN: Patterns should be defined and non-empty
    expect(keywordPatterns).toBeDefined()
    expect(keywordPatterns?.length).toBeGreaterThan(0)
  })
})
