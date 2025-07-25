/**
 * Comprehensive Gosu syntax sample file
 * Demonstrates all major syntax constructions from the EBNF grammar
 */

package test

public abstract class GosuSyntaxSample extends ArrayList<String> implements Runnable {
  // Field definitions
  private var _intField : int = 42
  public static final var PI : double = 3.14159
  var _stringField : String = "Hello, Gosu!"
  var _arrayField : String[] = {"a", "b", "c"}
  var _mapField : Map<String, Object> = {"key1" -> "value1", "key2" -> 123}
  var _typedField : List<String> = new ArrayList<String>()
  var _nullField : String = null
  var _bar : String as readonly Bar = "bar" // Readonly property, cannot be set after initialization
  var _baz = "baz"

  // Property definition
  property get IntValue() : int {
    return _intField
  }

  property set IntValue(value : int) {
    _intField = value
  }

  property get Baz() : String {
    return _baz
  }

  property set Baz(value : String) {
    if (value == "Foo") throw "Cannot set Baz to Foo"
    if (_baz === value) throw "Second time assignment of the same instance is not allowed"

    _baz = value
  }

  // Constructor
  construct(param1 : String, param2 : int = 0) {
    super() // Call to the superclass constructor
    add("d") // Adding an element to the array field

    _stringField = param1
    _intField = param2
  }

  override function run() : void {
    print("Running GosuSyntaxSample with IntValue: " + IntValue)
    print("String Field: " + _stringField)
    print("Array Field: " + _arrayField.join(", "))
    print("Map Field: " + _mapField.toString())
    print("Typed Field: " + _typedField.toString())
    print("Null Field: " + (_nullField == null ? "null" : _nullField))
    print("Bar Field: " + _bar)

    try {
      IntValue = 100
      print("Updated IntValue: " + IntValue)

      print("Pi value: ${GosuSyntaxSample.PI} or ${PI}")

      this.Baz = "New Value"
      print("Baz Field: " + this.Baz)

      this.Baz = "Foo" // This will throw an exception
    } catch (e : Throwable) {
      print("Error setting Baz: " + e.getMessage())
    }

    // Loops
    for (i in 0..5) {   // Range from 0 through 5
      print(i) // Prints 0-5
    }
    print("---")
    // Range from 0 up to 5
    for (i in 0..|5) {
      print(i) // Prints 0-4
    }
    print("---")
    // Range from 1 up to 5
    for (i in 0|..|5) {
      print(i) // Prints 1-4
    }

    var list = {"one", "two", "three"} // Creates a java.lang.List<String>
    for (num in list) {
      print(num)
    }

    for (num in list index i) {
      print("${i} : ${num}") // i is an int, and num is still of type String
    }

    for (num in list iterator iter) {
      iter.remove()
    }
    print(list)

    // Null Safety
    if (list.get(0).isEmpty()) {
      print("The first string is empty")
    }

    if (list?.get(0)?.isEmpty()) {
      print("The first string is empty")
    }

    // Elvis Operator
    var firstElement = list.get(0) ?: "Default Value"
    print("First Element: ${firstElement}")

    // Default Values, named parameters
    print(defaultValueTest(:param1 = "Custom"))

    // Using statement, resources management
    using (var fr = new java.io.FileReader("sample.txt")) {
      using (var cl = new java.util.concurrent.locks.ReentrantLock()) {
        using (var ri = new ReentrantImpl()) {
          using (var dri = new DisposableReentrantImpl()) {
            print("Using disposable resource" + fr.hashCode() + cl.hashCode() + ri.hashCode() + dri.hashCode());
          }
        }
      }
    }

    // Blocks
    var lstOfStrings = {"This", "is", "a", "list"}

    // in scope block
    {
      var longStrings = lstOfStrings.where(\s -> s.length > 2)
      print(longStrings.join(", "))  // prints "This, list"
    }

    var longStrings = lstOfStrings.where(\s -> s.length > 2)
        .map(\s -> s.toUpperCase())  // converts each string to upper case
        .orderBy(\s -> s)            // there is a .order() method that could be used here instead
    print(longStrings.join(", ")) // prints "LIST, THIS"

    var r : Runnable = \-> print("This block was converted to a Runnable")
    r.run()

    // enhancment function use
    "Hello, Gosu!".printWarning() // IDE does not recognize this method, but it is defined in MyStringEnhancement.gsx file

    // Strings & Gosu Templates
    {
      var s1 = "I'm a String"
      var s2 = 'I\'m also a String!'

      print(s1 + " and " + s2) // Concatenation
      print("String interpolation: ${s1} and ${s2}") // String

      var bool = "true".toBoolean()
      var integ = "42".toInt()
      var dubble = "42.2".toDouble()
      var date = "01/25/2012".toDate()

      print("Boolean: ${bool}, Integer: ${integ}, Double: ${dubble}, Date: ${date}")

      AllNames.renderToString({"wow"})

      var map = {"isOverlyVerbose" -> false}
      var listify = {map}
      print("Map: ${map}, List: ${listify}")
    }
  }

  // Default Values
  function defaultValueTest(param1 : String = "default", param2 : int = 10) : String {
    return "Param1: ${param1}, Param2: ${param2}"
  }

  static class ReentrantImpl implements gw.lang.IReentrant {

    override function enter() {
      print("Entering ReentrantImpl")
    }

    override function exit() {
      print("Exiting ReentrantImpl")
    }
  }

  static interface Disposable extends gw.lang.IDisposable {
    override function dispose() : void {
      print("Disposing resources in Disposable interface")
    }
  }

  static class DisposableReentrantImpl extends ReentrantImpl implements Disposable {
    override function dispose() {
      this.exit()
    }
  }
}
