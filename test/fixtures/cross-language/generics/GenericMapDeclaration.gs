package example
uses java.util.Map
uses java.util.HashMap

class TestClass {
  var data : Map<String, Integer>
  
  function createMap() {
    data = new HashMap<String, Integer>()
  }
}