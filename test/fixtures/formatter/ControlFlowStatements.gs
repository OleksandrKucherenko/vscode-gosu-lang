package com.example.formatting

uses java.util.List
uses java.util.ArrayList

/**
 * Class demonstrating control flow statement formatting.
 */
public class ControlFlowStatements {

  /**
   * Demonstrates if-else statement formatting.
   */
  public function demonstrateIfElse(value: int): String {
    if (value > 10) {
      return "large"
    } else if (value > 5) {
      return "medium"
    } else {
      return "small"
    }
  }

  /**
   * Demonstrates complex conditional logic.
   */
  public function complexConditionals(items: List<String>): String {
    if (items == null) {
      return "null"
    } else if (items.isEmpty()) {
      return "empty"
    } else if (items.size() == 1) {
      return "single: " + items.get(0)
    } else {
      var result: String = "multiple: "
      for (item in items index i) {
        if (i > 0) {
          result += ", "
        }
        result += item
      }
      return result
    }
  }

  /**
   * Demonstrates various loop constructs.
   */
  public function demonstrateLoops(): void {
    // For loop with index
    for (i in 0..10) {
      print("Index: " + i)
    }

    // For loop with collection
    var items: List<String> = new ArrayList<String>()
    items.add("a")
    items.add("b")
    items.add("c")

    for (item in items index i) {
      print("Item " + i + ": " + item)
    }

    // While loop
    var count: int = 0
    while (count < 5) {
      print("Count: " + count)
      count++
    }

    // Do-while loop
    var x: int = 0
    do {
      print("X: " + x)
      x++
    } while (x < 3)
  }

  /**
   * Demonstrates try-catch-finally blocks.
   */
  public function demonstrateExceptionHandling(): String {
    try {
      var result: String = riskyOperation()
      return "Success: " + result
    } catch (e: Exception) {
      print("Error occurred: " + e.Message)
      return "Error handled"
    } finally {
      print("Cleanup performed")
    }
  }

  /**
   * Demonstrates switch statement.
   */
  public function demonstrateSwitch(value: String): String {
    switch (value) {
      case "a":
        return "First letter"
      case "b":
        return "Second letter"
      case "c":
        return "Third letter"
      default:
        return "Other letter"
    }
  }

  /**
   * Demonstrates lambda expressions.
   */
  public function demonstrateLambdas(): void {
    var numbers: List<int> = new ArrayList<int>()
    numbers.add(1)
    numbers.add(2)
    numbers.add(3)

    // Lambda with explicit parameter types
    numbers.each(\item: int -> print("Item: " + item))

    // Lambda with implicit parameter types
    numbers.each(\item -> print("Item: " + item))

    // Lambda with multiple statements
    numbers.each(\item -> {
      var doubled: int = item * 2
      print("Doubled: " + doubled)
    })

    // Lambda in method call
    var sum: int = numbers.reduce(0, \acc: int, item: int -> acc + item)
    print("Sum: " + sum)
  }

  /**
   * Simulates a risky operation.
   */
  private function riskyOperation(): String {
    return "operation result"
  }
}