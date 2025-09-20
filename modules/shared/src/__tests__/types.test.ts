import { describe, expect, it } from "vitest"
import { getGosuFileType, isGosuFile } from "../types"

describe("Gosu file type helpers", () => {
  it("should resolve lowercase extensions", () => {
    expect(getGosuFileType("Example.gs")).toBe("class")
  })

  it("should resolve uppercase extensions", () => {
    expect(getGosuFileType("Example.GS")).toBe("class")
    expect(isGosuFile("Example.GSX")).toBe(true)
  })

  it("should return null when file has no extension", () => {
    expect(getGosuFileType("Example")).toBeNull()
  })
})
