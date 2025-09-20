package com.example.formatting

uses java.util.List
uses java.lang.String

/**
 * A complex class demonstrating various Gosu formatting constructs.
 * This serves as a golden standard for class formatting.
 */
public class ComplexClass<T extends String> {

  // Class-level constants
  private static final var MAX_SIZE: int = 100
  private static final var DEFAULT_NAME: String = "default"

  // Instance fields
  private var _name: String as Name
  private var _items: List<T> as Items
  private var _count: int as Count

  // Static fields
  public static var instanceCount: int = 0

  /**
   * Default constructor with initialization.
   */
  construct() {
    _name = DEFAULT_NAME
    _items = new ArrayList<T>()
    _count = 0
    instanceCount++
  }

  /**
   * Constructor with parameters.
   */
  construct(name: String, items: List<T>) {
    _name = name
    _items = items
    _count = items.size()
    instanceCount++
  }

  /**
   * Gets the name property.
   */
  public function getName(): String {
    return _name
  }

  /**
   * Sets the name property.
   */
  public function setName(name: String): void {
    _name = name
  }

  /**
   * Gets the items list.
   */
  public function getItems(): List<T> {
    return _items
  }

  /**
   * Adds an item to the list.
   */
  public function addItem(item: T): void {
    _items.add(item)
    _count++
  }

  /**
   * Removes an item from the list.
   */
  public function removeItem(item: T): boolean {
    var removed: boolean = _items.remove(item)
    if (removed) {
      _count--
    }
    return removed
  }

  /**
   * Gets the current count.
   */
  public function getCount(): int {
    return _count
  }

  /**
   * Checks if the list is empty.
   */
  public function isEmpty(): boolean {
    return _count == 0
  }

  /**
   * Clears all items.
   */
  public function clear(): void {
    _items.clear()
    _count = 0
  }

  /**
   * Static utility method.
   */
  public static function createDefault(): ComplexClass<String> {
    return new ComplexClass<String>()
  }
}