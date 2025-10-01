package demo

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
