import { describe, expect, it } from "vitest"

import { DEFAULT_FORMATTING_CONFIG, FORMATTER_CONFIG_SCHEMA } from "../config"

describe("FORMATTER_CONFIG_SCHEMA", () => {
  it("describes all supported configuration options", () => {
    const schemaKeys = FORMATTER_CONFIG_SCHEMA.map((option) => option.key)

    expect(schemaKeys).toEqual(["indentStyle", "indentSize", "continuationIndentSize", "maxLineLength", "strictMode"])
  })

  it("links schema defaults to DEFAULT_FORMATTING_CONFIG", () => {
    const defaultsFromSchema = FORMATTER_CONFIG_SCHEMA.reduce<Partial<Record<string, unknown>>>((acc, option) => {
      acc[option.key] = option.default
      return acc
    }, {})

    expect(defaultsFromSchema).toEqual(DEFAULT_FORMATTING_CONFIG)
  })

  it("provides validation metadata for each option", () => {
    FORMATTER_CONFIG_SCHEMA.forEach((option) => {
      expect(option.description).toMatch(/\w+/)
      expect(option.type).toMatch(/^(string|number|boolean)$/)

      if (option.type === "string") {
        expect(Array.isArray(option.enum)).toBe(true)
        expect(option.enum?.length).toBeGreaterThan(0)
      }

      if (option.type === "number") {
        expect(option.minimum).toBeGreaterThan(0)
      }

      if (option.type === "boolean") {
        expect(typeof option.default).toBe("boolean")
      }
    })
  })
})
