import { GosuParser } from "@gosu-lsp/parser"
import { readFixture } from "@gosu-lsp/shared/test-utils"
import { describe, expect, it, vi } from "vitest"
import { formatDocument, resetFormatterCache } from "../index"

describe("Formatter Caching", () => {
  it("re-parses the document after the cache is reset", async () => {
    const source = readFixture("formatter/ComplexClass.gs")
    const request = {
      text: source,
      uri: "file:///test/fixtures/formatter/ComplexClass.gs",
    }

    const parseSpy = vi.spyOn(GosuParser.prototype, "parseText")

    await formatDocument(request)
    expect(parseSpy).toHaveBeenCalledTimes(1)

    await formatDocument(request)
    expect(parseSpy).toHaveBeenCalledTimes(1) // Should be a cache hit

    resetFormatterCache()

    await formatDocument(request)
    expect(parseSpy).toHaveBeenCalledTimes(2) // Should be a cache miss

    parseSpy.mockRestore()
  })
})
