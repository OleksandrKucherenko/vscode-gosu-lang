class TestClass {
  function processData(inputData : String, count : int) : String {
    var result = inputData.toUpperCase()
    for (i in 0..|count) {
      result += i.toString()
    }
    return result
  }
}