package com.example.enhancements

uses java.lang.String

/**
 * String enhancement with utility methods
 */
enhancement StringUtils : String {
  
  /**
   * Check if string is empty or null
   */
  function isEmpty() : boolean {
    return this == null || this.length() == 0
  }
  
  /**
   * Capitalize first letter
   */
  function capitalize() : String {
    if (this.isEmpty()) {
      return this
    }
    return this.substring(0, 1).toUpperCase() + this.substring(1).toLowerCase()
  }
  
  /**
   * Split and filter
   */
  function splitAndFilter(delimiter : String, minLength : int) : List<String> {
    var parts : List<String> = this.split(delimiter)
    var result : List<String> = new ArrayList<String>()
    
    for (part in parts) {
      if (part.length() >= minLength) {
        result.add(part.trim())
      }
    }
    
    return result
  }
}