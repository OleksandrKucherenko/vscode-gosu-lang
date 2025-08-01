package example
uses java.util.List

class TestClass {
  var items : List<String>
  
  function addItem(item : String) {
    items.add(item)
  }
}