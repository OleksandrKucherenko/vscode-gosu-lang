package com.example.interfaces

uses java.util.List

/**
 * Sample interface definition
 */
public interface ITestInterface {
  
  /**
   * Get items method
   */
  function getItems() : List<String>
  
  /**
   * Process item method
   */
  function processItem(item : String, options : Map<String, Object>) : boolean
  
  /**
   * Status property
   */
  property get Status() : String
  property set Status(value : String)
}