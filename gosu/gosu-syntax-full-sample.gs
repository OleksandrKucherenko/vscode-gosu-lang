/**
 * Comprehensive Gosu syntax sample file
 * Demonstrates all major syntax constructions from the EBNF grammar
 */

package test.sample

uses java.io.Serializable
uses java.util.*
uses java.math.*

/**
 * Sample annotation
 */
@Deprecated("Sample reason")
public class GosuSyntaxSample<T extends Comparable> extends AbstractList<T> implements Serializable, Runnable {
  
  // Field definitions
  private var _intField : int = 42
  public static final var PI : double = 3.14159
  var _stringField : String = "Hello, Gosu!"
  var _arrayField : String[] = {"a", "b", "c"}
  var _mapField : Map<String, Object> = {"key1" -> "value1", "key2" -> 123}
  var _typedField : List<String> = new ArrayList<String>()
  var _nullField : String = null
  
  // Property definition
  property get IntValue() : int {
    return _intField
  }
  
  property set IntValue(value : int) {
    _intField = value
  }
  
  // Constructor
  construct(param1 : String, param2 : int = 0) {
    _stringField = param1
    _intField = param2
    super()
  }
  
  // Function with type variables
  public function <E> genericFunction<E>(param : E) : E {
    return param
  }
  
  // Override function
  override public function run() {
    print("Running...")
    
    // Local variable statements
    var localVar = "local value"
    final var finalVar = "cannot be changed"
    
    // If statement
    if (localVar.length() > 0) {
      print("Local var has content")
    } else {
      print("Local var is empty")
    }
    
    // Try-catch-finally
    try {
      throw new RuntimeException("Sample exception")
    } catch (var e : RuntimeException) {
      print("Caught exception: ${e.Message}")
    } finally {
      print("Finally block")
    }
    
    // Switch statement
    switch (_intField) {
      case 1:
        print("One")
        break
      case 2:
        print("Two")
        break
      default:
        print("Other value")
    }
    
    // Loop statements
    while (_intField > 0) {
      _intField--
      if (_intField == 10) continue
      if (_intField == 5) break
    }
    
    do {
      _intField++
    } while (_intField < 10)
    
    for (var i = 0; i < 5; i++) {
      print("Iteration " + i)
    }
    
    foreach (item in _arrayField index idx) {
      print("Item ${idx}: ${item}")
    }
    
    // Using statement
    using (var stream = new java.io.FileInputStream("test.txt")) {
      // use the stream
    }
    
    // Assert statement
    assert _intField >= 0 : "Field must be non-negative"
    
    // Block expressions
    var block = \ -> print("Block executed")
    block()
    
    var sumBlock = \a : int, b : int -> a + b
    print("Sum: " + sumBlock(5, 3))
    
    // Type expressions
    var obj = "test"
    if (obj typeis String) {
      print("Object is a string")
    }
    
    var asNumber = obj as Number
    var numberObj = obj typeas Number
    
    // Operators
    var a = 10
    var b = 20
    var result = a + b       // Addition
    result = a - b           // Subtraction
    result = a * b           // Multiplication
    result = a / b           // Division
    result = a % b           // Modulus
    result = a++             // Post-increment
    result = --b             // Pre-decrement
    result = a & b           // Bitwise AND
    result = a | b           // Bitwise OR
    result = a ^ b           // Bitwise XOR
    result = ~a              // Bitwise NOT
    result = a << 2          // Left shift
    result = a >> 1          // Right shift
    result = a >>> 1         // Unsigned right shift
    
    var bool1 = true
    var bool2 = false
    var boolResult = bool1 && bool2  // Logical AND
    boolResult = bool1 || bool2      // Logical OR
    boolResult = !bool1              // Logical NOT
    boolResult = a == b              // Equality
    boolResult = a != b              // Inequality
    boolResult = a < b               // Less than
    boolResult = a <= b              // Less than or equal
    boolResult = a > b               // Greater than
    boolResult = a >= b              // Greater than or equal
    
    // Conditional expression
    var max = (a > b) ? a : b
    var nonNull = obj ?: "default"
    
    // Various literals
    var hexLiteral = 0xFF
    var binLiteral = 0b1010
    var longLiteral = 100L
    var shortLiteral = 100S
    var floatLiteral = 1.5f
    var doubleLiteral = 1.5d
    var bigDecimalLiteral = 1.5bd
    var bigIntegerLiteral = 123bi
    var charLiteral = 'c'
    var escapeCharLiteral = '\n'
    var unicodeChar = '\u00A9'  // Copyright symbol
    
    // String with interpolation
    var name = "World"
    var greeting = "Hello, ${name}!"
    
    // Method references
    var methodRef = #toString
    
    // Enhanced for loop with iterator
    var list = new ArrayList<String>()
    for (item in list iterator iter) {
      print(iter.hasNext())
    }
    
    // Interval operators (ADDED)
    var range1 = 1..10            // Inclusive..inclusive
    var range2 = 1|..10           // Exclusive..inclusive
    var range3 = 1..|10           // Inclusive..exclusive
    var range4 = 1|..|10          // Exclusive..exclusive
    
    // Safe navigation and indirect member access operators (ADDED)
    var nullableObject : Object = null
    var length = nullableObject?.toString()?.length  // Safe navigation
    
    // Collection projection (ADDED)
    var stringLengths = _arrayField*.length          // Collection projection
    
    // Object initializer with named arguments (ADDED)
    var point = new java.awt.Point() {:x = 10, :y = 20}
    
    // Anonymous inner class example (ADDED)
    var runnable = new Runnable() {
      override function run() {
        print("Anonymous inner class")
      }
    }
    
    // Standalone data structure initialization (ADDED)
    var anonymousMap = {
      "key1" -> "value1",
      "key2" -> "value2"
    }
    
    var anonymousArray = {
      "item1",
      "item2",
      "item3"
    }
    
    // Advanced array initialization with dimensions (ADDED)
    var multiDimArray = new String[2][3]
    var initializedArray = new int[] {1, 2, 3, 4, 5}
    
    // Return statement
    return
  }
  
  // Delegate definition
  delegate StringProcessor : String represents (String) : String
  
  // Nested class
  public static class NestedClass {
    function doSomething() : void {
      print("Inside nested class")
    }
  }
  
  // Nested interface
  public static interface NestedInterface {
    function interfaceMethod()
  }
  
  // Nested enum
  public enum Color {
    RED,
    GREEN,
    BLUE
  }
}

// Interface definition
interface SampleInterface<T> {
  function interfaceMethod(param : T) : T
  property get Value() : T
}

// Structure definition
structure SampleStructure {
  var field1 : String
  var field2 : int
  function doSomething() : void
}

// Enum definition
enum SampleEnum {
  OPTION1,
  OPTION2("with parameter"),
  OPTION3
}

// Enhancement definition
enhancement StringEnhancement : String {
  function wordCount() : int {
    return this.split(" ").length
  }
}
