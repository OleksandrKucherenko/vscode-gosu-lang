package reference

class CountExample {
  var count : int = 0

  function increment() {
    count += 1
  }

  function describe() : String {
    return "count: " + count
  }

  function noise() {
    // count shouldn't match here
    var message = "count inside string"
    var label = 'single count inside string'
    var discountValue = 5
    /* block comment
       count inside block
    */
  }
}
