package com.example.complex

uses java.util.*
uses java.io.File

/**
 * A complex class demonstrating various symbol types
 */
public class ComplexClass {
  // Static field
  public static var CONSTANT : String = "TEST"
  
  // Instance fields
  private var _items : List<String>
  protected var _status : boolean = false
  
  // Properties
  public property get ItemCount() : int {
    return _items.size()
  }
  
  public property set Status(value : boolean) {
    _status = value
  }
  
  // Constructor with parameters
  public construct(initialItems : List<String>, initialStatus : boolean) {
    _items = initialItems
    _status = initialStatus
  }
  
  // Public method with parameters and local variables
  public function processItems(filter : String, limit : int) : List<String> {
    var result : List<String> = new ArrayList<String>()
    var counter : int = 0
    
    for (item in _items) {
      if (item.contains(filter) && counter < limit) {
        result.add(item)
        counter++
      }
    }
    
    return result
  }
  
  // Private method
  private function validateInput(input : String) : boolean {
    return input != null && input.length() > 0
  }
  
  // Static method
  public static function createDefault() : ComplexClass {
    return new ComplexClass(new ArrayList<String>(), false)
  }
}