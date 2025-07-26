/**
 * Comprehensive Gosu syntax sample file
 * Demonstrates all major syntax constructions from the EBNF grammar
 */

package test.sample

uses java.io.Serializable
uses java.util.*
uses java.math.*
uses java.lang.Runnable
uses java.util.List

/**
 * Sample annotation
 */
@Deprecated("Sample reason")
public class GosuSyntaxSample<T extends Comparable> extends AbstractList<T> implements Serializable, Runnable {
  
  // Field definitions with various syntax patterns
  private var _intField : int = 42
  public static final var PI : double = 3.14159
  var _stringField : String = "Hello, Gosu!"
  var _arrayField : String[] = {"a", "b", "c"}
  var _mapField : Map<String, Object> = {"key1" -> "value1", "key2" -> 123}
  var _typedField : List<String> = new ArrayList<String>()
  var _nullField : String = null
  
  // Property with 'as' syntax for automatic getter/setter
  var _autoProperty : String as AutoProp = "auto property value"
  
  // Readonly property
  var _readonlyProp : String as readonly ReadOnlyProp = "readonly value"
  
  // List and collection literals
  var _listLiteral : List<String> = {"one", "two", "three"}
  var _arrayLiteral = new String[] {"array", "literal", "example"}
  
  // Type inference examples
  var inferredString = "This is inferred as String"
  var inferredNumber = 42  // inferred as int
  var inferredList = {"a", "b", "c"}  // inferred as List<String>
  
  // Must declare type when null (can't be inferred)
  var explicitType : String = null
  
  // Property definitions - various styles
  property get IntValue() : int {
    return _intField
  }
  
  property set IntValue(value : int) {
    _intField = value
  }
  
  // Property with validation logic
  property get ValidatedProp() : String {
    return _stringField
  }
  
  property set ValidatedProp(value : String) {
    if (value == "Foo") {
      throw "That's not a valid value!"
    }
    _stringField = value
  }
  
  // Constructor with default parameters
  construct(param1 : String, param2 : int = 0, param3 : String = "default") {
    _stringField = param1
    _intField = param2
    super()
  }
  
  // Secondary constructor
  construct() {
    this("default string", 100)
  }
  
  // Function with type variables
  public function genericFunction<E>(param : E) : E {
    return param
  }
  
  // Function with named arguments and default parameters
  public function namedArgsFunction(name : String = "default", age : int = 0, active : boolean = true) : String {
    return "Name: ${name}, Age: ${age}, Active: ${active}"
  }
  
  // Function demonstrating blocks/closures
  public function blockExamples() {
    var numbers = {1, 2, 3, 4, 5}
    
    // Block with where() - filtering
    var evenNumbers = numbers.where( \ n -> n % 2 == 0)
    
    // Block with map() - transformation  
    var doubled = numbers.map( \ n -> n * 2)
    
    // Block with orderBy() - sorting
    var sorted = numbers.orderBy( \ n -> -n)  // descending
    
    // Block assigned to Runnable (automatic conversion)
    var blockAsRunnable : Runnable = \ -> print("Block converted to Runnable")
    
    print("Even numbers: ${evenNumbers.join(", ")}")
    print("Doubled: ${doubled.join(", ")}")
  }
  
  // Override function
  override public function run() {
    print("Running...")
    
    // Local variable statements with type inference
    var localVar = "local value"
    final var finalVar = "cannot be changed"
    var guess : String = null  // Must declare type when can't be inferred
    
    // String interpolation examples
    var name = "Gosu"
    var version = 1.0
    var interpolated = "Hello ${name} v${version}!"
    print(interpolated)
    
    // Null safety examples
    var possiblyNull : String = getPossiblyNullString()
    
    // Null-safe method invocation
    var length = possiblyNull?.length()  // Returns null if possiblyNull is null
    
    // Elvis operator - default value if null
    var safeString = possiblyNull ?: "default value"
    var safeLength = possiblyNull?.length() ?: 0
    
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
    
    // Enhanced loop statements
    while (_intField > 0) {
      _intField--
      if (_intField == 10) continue
      if (_intField == 5) break
    }
    
    do {
      _intField++
    } while (_intField < 10)
    
    // Range operators - various forms
    for (i in 0..5) {      // Range from 0 through 5 (inclusive)
      print(i)  // Prints 0-5
    }
    
    for (i in 0..|5) {     // Range from 0 up to 5 (exclusive)
      print(i)  // Prints 0-4
    }
    
    for (i in 0|..|5) {    // Range from 1 up to 5 (both exclusive)
      print(i)  // Prints 1-4
    }
    
    // Enhanced for loop with index
    var list = {"one", "two", "three"}
    for (item in list index i) {
      print("${i}: ${item}")  // i is int, item is String
    }
    
    // Enhanced for loop with iterator access
    var mutableList = {"a", "b", "c"}.toList()  // Create mutable copy
    for (item in mutableList iterator iter) {
      if (item == "b") {
        iter.remove()  // Remove item during iteration
      }
    }
    
    // For loop over arrays and iterables
    for (str in _arrayField) {
      print("Array item: ${str}")
    }

    // Range from 0 up to 5
    for ( i in 0..|5 ) {
      print ( i ) // Prints 0-4
    }
    
    // Range from 1 up to 5
    for ( i in 0|..|5 ) {
      print ( i ) // Prints 1-4
    }

    var list = { "one", "two", "three" } // Creates a java.lang.List<String>
    for ( num in list ) {
      print( num )
    }

    for ( num in list index i ) {
      print ( "${i} : ${num}" ) // i is an int, and num is still of type String
    }

    for ( num in list iterator iter ) {
      iter.remove()
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
    
    // Interval operators (canonical Gosu syntax)
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
    
    // Anonymous inner class example
    var runnable = new Runnable() {
      override function run() {
        print("Anonymous inner class")
      }
    }
    
    // Using statement examples for resource management
    using (var conn = getConnection()) {
      // Connection will be automatically closed
      conn.execute("SELECT * FROM users")
    }
    
    // Using with multiple resources
    using (var reader = getReader(), var writer = getWriter()) {
      writer.write(reader.readAll())
    }
    
    // Collection manipulation with blocks
    var strings = {"apple", "banana", "cherry", "date"}
    var longStrings = strings.where(\ s -> s.length > 4)
                            .map(\ s -> s.toUpperCase())
                            .orderBy(\ s -> s)
    print("Long strings: ${longStrings.join(", ")}")
    
    // Chained collection operations
    var numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
    var evenSquares = numbers.where(\ n -> n % 2 == 0)
                            .map(\ n -> n * n)
                            .orderBy(\ n -> -n)
    print("Even squares (descending): ${evenSquares.join(", ")}")
    
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
  
  // Delegate definition - interface delegation
  delegate _runnable represents Runnable
  
  // Property to access the delegate
  property get RunnableImpl() : Runnable {
    return _runnable
  }
  
  property set RunnableImpl(r : Runnable) {
    _runnable = r
  }
  
  // Static nested class
  static class NestedClass {
    static function staticNestedMethod() : String {
      return "Static nested method"
    }
  }
  
  // Inner class
  class InnerClass {
    function innerMethod() : String {
      return "Inner method accessing: ${_stringField}"
    }
  }
  
  // Helper functions for examples
  private function getPossiblyNullString() : String {
    return Math.random() > 0.5 ? "Not null" : null
  }
  
  private function getConnection() : MockConnection {
    return new MockConnection()
  }
  
  private function getReader() : MockReader {
    return new MockReader()
  }
  
  private function getWriter() : MockWriter {
    return new MockWriter()
  }
  // Nested enum
  public enum Color {
    RED,
    GREEN,
    BLUE
  }
  
  // Operators - Gosu specific features
  var a = 10
  var b = 3
  var sum = a + b
  var diff = a - b
  var prod = a * b
  var quot = a / b
  var mod = a % b
  var pow = a ** b
  
  // Gosu equality operators
  var str1 = "hello"
  var str2 = "hello"
  var equalityTest = str1 == str2      // Tests for object equality (.equals())
  var identityTest = str1 === str2     // Tests for instance equality
  var notEqualTest = str1 <> str2      // Same as !=
  var notEqualAlt = str1 != str2
  
  // Increment/decrement (cannot be used within expressions)
  var counter = 0
  counter++  // Must be standalone statement
  ++counter  // Must be standalone statement
  counter--
  --counter
  
  // Comparison works with Comparable objects
  var compareResult = "apple" < "banana"  // Uses String.compareTo()
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

// Generics
enhancement MyListEnhancement<T> : List<T> {
  function firstAndLast() : List<T> {
    return {this.first(), this.last()}
  }
}

// Enhancing Parameterized Types
enhancement MyListOfDatesEnhancement : List<Date> {
  function allBetween( start : Date, end : Date ) : List<Date>{
    this.where( \ d -> start <= d and d <= end )
  }
}