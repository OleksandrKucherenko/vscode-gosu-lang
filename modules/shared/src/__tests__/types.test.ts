import { describe, expect, it } from "vitest"
import { getGosuFileType, isGosuFile } from "../types"

// Classification: Unit
describe("Gosu file type helpers", () => {
  // Classification: Unit
  it("should resolve lowercase extensions", () => {
    expect(getGosuFileType("Example.gs")).toBe("class")
  })

  // Classification: Unit
  it("should resolve uppercase extensions", () => {
    expect(getGosuFileType("Example.GS")).toBe("class")
    expect(isGosuFile("Example.GSX")).toBe(true)
  })

  // Classification: Unit
  it("should return null when file has no extension", () => {
    expect(getGosuFileType("Example")).toBeNull()
  })
})
