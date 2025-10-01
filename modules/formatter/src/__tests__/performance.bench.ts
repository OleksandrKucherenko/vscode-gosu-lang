import { readFixture } from "@gosu-lsp/shared/test-utils"
import { bench, describe } from "vitest"
import { formatDocument } from "../index"

describe("Formatter Performance", () => {
  const source = readFixture("formatter/ComplexClass.gs")
  const request = {
    text: source,
    uri: "file:///test/fixtures/formatter/ComplexClass.gs",
  }

  bench("formats a large, complex file", async () => {
    await formatDocument(request)
  })
})
