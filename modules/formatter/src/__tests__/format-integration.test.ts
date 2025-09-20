import { readFixture } from "@gosu-lsp/shared"
import { describe, expect, it } from "vitest"

import { DEFAULT_FORMATTING_CONFIG, formatDocument } from "../index"

const CLASS_EXPECTED = `package demo

// Leading class comment
class ClassWithComments {
  var value: String

  /**
   * Documentation comment.
  */
  function greet(): String {
    // This line says hello
    return "Hello, " + value
  }

  function farewell(): String {
    /* Block comment */
    return "Goodbye"
  }
}
`

describe("Formatter integration", () => {
  it("formats class with comments consistently", async () => {
    const text = readFixture("parser/ClassWithComments.gs")
    const result = await formatDocument({
      uri: "file:///ClassWithComments.gs",
      text,
      config: DEFAULT_FORMATTING_CONFIG,
    })

    expect(result.formattedText).toBe(CLASS_EXPECTED)

    const secondPass = await formatDocument({
      uri: "file:///ClassWithComments.gs",
      text: result.formattedText,
      config: DEFAULT_FORMATTING_CONFIG,
    })

    expect(secondPass.formattedText).toBe(result.formattedText)
  })

  it("returns original text when parser fails", async () => {
    const text = "function broken() { if (true) {"
    const result = await formatDocument({ uri: "file:///Broken.gs", text })

    expect(result.formattedText).toBe(text)
    expect(result.diagnostics?.some((diag) => diag.source === "parser")).toBe(true)
  })
})
