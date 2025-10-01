import { describe, expect, it } from "vitest"

import { detectFunctionAnchors } from "../anchors"

// Classification: Unit
describe("detectFunctionAnchors", () => {
  // Classification: Unit
  it("finds function scopes within a class using brace matching", () => {
    const gosuSource = `
class Sample {
  function okOne() {
    var x = 1
  }

  override function okTwo(): String {
    return "value"
  }
}
`

    const anchors = detectFunctionAnchors(gosuSource)

    expect(anchors).toHaveLength(2)
    const [first, second] = anchors

    expect(first.name).toBe("okOne")
    expect(gosuSource.slice(first.start, first.end)).toContain("function okOne")
    expect(first.isComplete).toBe(true)

    expect(second.name).toBe("okTwo")
    expect(second.isComplete).toBe(true)
  })

  // Classification: Unit
  it("marks anchors with unmatched braces as incomplete", () => {
    const gosuSource = `
class Broken {
  function good() {
    return 1
  }

  function bad() {
    if (true) {
      return 2
  // missing closing braces
}
`

    const anchors = detectFunctionAnchors(gosuSource)

    const good = anchors.find((anchor) => anchor.name === "good")
    const bad = anchors.find((anchor) => anchor.name === "bad")

    expect(good?.isComplete).toBe(true)
    expect(bad?.isComplete).toBe(false)
  })
})
