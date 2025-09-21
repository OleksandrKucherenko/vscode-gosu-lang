import { beforeEach, describe, expect, it } from "vitest"

import { DEFAULT_FORMATTING_CONFIG, formatDocument, resetFormatterCache } from "../index"

describe("Comment & Annotation Handling", () => {
  beforeEach(() => {
    resetFormatterCache()
  })

  describe("Comment Placement", () => {
    it("preserves leading comments before class declarations", async () => {
      const input = `// Leading comment
class TestClass {
  // Method comment
  function test() {
    // Inline comment
    var x = 1 // Trailing comment
    return x
  }
}`

      const result = await formatDocument({
        uri: "file:///TestClass.gs",
        text: input,
        config: DEFAULT_FORMATTING_CONFIG,
      })

      expect(result.formattedText).toBe(`// Leading comment
class TestClass {
  // Method comment
  function test() {
    // Inline comment
    var x = 1 // Trailing comment
    return x
  }
}
`)
    })

    it("handles block comments correctly", async () => {
      const input = `class TestClass {
  /* Block comment
     with multiple lines */
  function test() {
    /* Single line block */ var x = 1
    return x
  }
}`

      const result = await formatDocument({
        uri: "file:///TestClass.gs",
        text: input,
        config: DEFAULT_FORMATTING_CONFIG,
      })

      expect(result.formattedText).toBe(`class TestClass {
  /* Block comment
  with multiple lines */
  function test() {
    /* Single line block */
    var x = 1
    return x
  }
}
`)
    })

    it("preserves documentation comments", async () => {
      const input = `/**
 * Documentation comment
 * with multiple lines
 */
class TestClass {
  /**
   * Method documentation
   */
  function test(): String {
    return "test"
  }
}`

      const result = await formatDocument({
        uri: "file:///TestClass.gs",
        text: input,
        config: DEFAULT_FORMATTING_CONFIG,
      })

      expect(result.formattedText).toBe(`
/**
 * Documentation comment
 * with multiple lines
 */
class TestClass {

  /**
   * Method documentation
   */
  function test(): String {
    return "test"
  }
}
`)
    })
  })

  describe("Annotation Alignment", () => {
    it("aligns multiple annotations in rectangle rule", async () => {
      const input = `@Deprecated
@Since("1.0")
class TestClass {
  @Override
  @SuppressWarnings("unchecked")
  function test() {
    return "test"
  }
}`

      const result = await formatDocument({
        uri: "file:///TestClass.gs",
        text: input,
        config: DEFAULT_FORMATTING_CONFIG,
      })

      expect(result.formattedText).toBe(`@Deprecated
@Since("1.0")
class TestClass {
  @Override
  @SuppressWarnings("unchecked")
  function test() {
    return "test"
  }
}
`)
    })

    it("handles annotations with parameters", async () => {
      const input = `@RequestMapping(path = "/test", method = RequestMethod.GET)
class TestController {
  @Autowired
  var service: TestService
}`

      const result = await formatDocument({
        uri: "file:///TestController.gs",
        text: input,
        config: DEFAULT_FORMATTING_CONFIG,
      })

      expect(result.formattedText).toBe(`@RequestMapping(path = "/test", method = RequestMethod.GET)
class TestController {
  @Autowired
  var service: TestService
}`)
    })
  })

  describe("Modifier Alignment", () => {
    it("aligns modifiers in rectangle rule", async () => {
      const input = `public static final class Constants {
  public static final var MAX_SIZE: int = 100
  private static final var MIN_SIZE: int = 0
  protected final var DEFAULT_VALUE: String = "default"
}`

      const result = await formatDocument({
        uri: "file:///Constants.gs",
        text: input,
        config: DEFAULT_FORMATTING_CONFIG,
      })

      expect(result.formattedText).toBe(`public static final class Constants {
  public static final var MAX_SIZE: int = 100
  private static final var MIN_SIZE: int = 0
  protected final var DEFAULT_VALUE: String = "default"
}
`)
    })
  })
})
