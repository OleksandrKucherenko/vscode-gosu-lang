package test

public class ValidClass {
  var _field : String = "hello"
  
  construct() {
    // empty constructor
  }
  
  function getField() : String {
    return _field
  }
  
  function setField(value : String) {
    _field = value
  }
}