package example
uses java.util.List
uses java.util.ArrayList

class TestClass {
  function createList() : List<String> {
    var list = new ArrayList<String>()
    list.add("item")
    return list
  }
}