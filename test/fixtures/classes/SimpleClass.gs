package com.example.test

uses java.util.List
uses java.lang.String

public class SimpleClass {
  private var _name : String
  private var _count : int = 0
  
  public construct(name : String) {
    _name = name
  }
  
  public function getName() : String {
    return _name
  }
  
  public function setCount(newCount : int) : void {
    _count = newCount
  }
}