import { readFixture } from "@gosu-lsp/shared/test-utils"
import { describe, expect, it } from "vitest"
import { formatDocument } from "../index"

describe("Formatter Determinism", () => {
  it("produces the same output when formatting a file multiple times", async () => {
    const source = readFixture("formatter/ComplexClass.gs")
    const request = {
      text: source,
      uri: "file:///test/fixtures/formatter/ComplexClass.gs",
    }
    const firstPass = await formatDocument(request)
    const secondPass = await formatDocument(request)

    expect(firstPass.formattedText).toEqual(secondPass.formattedText)
  })
})
