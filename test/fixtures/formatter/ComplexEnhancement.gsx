package com.example.enhancements

uses java.util.List
uses java.util.Map
uses java.util.ArrayList
uses java.util.HashMap

/**
 * Complex enhancement demonstrating various enhancement patterns.
 */
enhancement ComplexEnhancement: String {

  /**
   * Checks if the string is blank (null, empty, or whitespace only).
   */
  public function isBlank(): boolean {
    return this == null || this.trim().length() == 0
  }

  /**
   * Checks if the string is not blank.
   */
  public function isNotBlank(): boolean {
    return !this.isBlank()
  }

  /**
   * Converts the string to title case.
   */
  public function toTitleCase(): String {
    if (this.isBlank()) {
      return this
    }

    var words: List<String> = this.split(" ")
    var result: String = ""

    for (word in words index i) {
      if (i > 0) {
        result += " "
      }
      result += word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
    }

    return result
  }

  /**
   * Pads the string to the specified length.
   */
  public function padLeft(length: int, padChar: String = " "): String {
    if (this.length() >= length) {
      return this
    }

    var padding: String = ""
    var padLength: int = length - this.length()

    while (padding.length() < padLength) {
      padding += padChar
    }

    return padding + this
  }

  /**
   * Pads the string to the specified length on the right.
   */
  public function padRight(length: int, padChar: String = " "): String {
    if (this.length() >= length) {
      return this
    }

    var padding: String = ""
    var padLength: int = length - this.length()

    while (padding.length() < padLength) {
      padding += padChar
    }

    return this + padding
  }

  /**
   * Truncates the string to the specified length.
   */
  public function truncate(maxLength: int): String {
    if (this.length() <= maxLength) {
      return this
    }
    return this.substring(0, maxLength) + "..."
  }

  /**
   * Converts the string to a slug format.
   */
  public function toSlug(): String {
    return this.toLowerCase()
               .replaceAll("[^a-z0-9\\s-]", "")
               .replaceAll("\\s+", "-")
               .replaceAll("-+", "-")
               .replaceAll("^-|-$", "")
  }

  /**
   * Extracts initials from the string.
   */
  public function toInitials(): String {
    if (this.isBlank()) {
      return ""
    }

    var words: List<String> = this.split(" ")
    var initials: String = ""

    for (word in words) {
      if (word.isNotBlank()) {
        initials += word.substring(0, 1).toUpperCase()
      }
    }

    return initials
  }

  /**
   * Formats the string as currency.
   */
  public function toCurrency(currencySymbol: String = "$"): String {
    try {
      var value: double = Double.parseDouble(this)
      return currencySymbol + String.format("%.2f", {value})
    } catch (e: Exception) {
      return this
    }
  }

  /**
   * Converts the string to a map of character frequencies.
   */
  public function toCharacterFrequencyMap(): Map<String, int> {
    var map: Map<String, int> = new HashMap<String, int>()

    for (i in 0..|this.length()) {
      var char: String = this.substring(i, i + 1)
      var count: int = map.get(char) ?: 0
      map.put(char, count + 1)
    }

    return map
  }
}