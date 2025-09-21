package com.example.formatting

uses java.util.List

/**
 * A complex interface demonstrating interface formatting.
 */
public interface ComplexInterface<T> {

  /**
   * Gets an item by index.
   */
  public function getItem(index: int): T

  /**
   * Sets an item at the specified index.
   */
  public function setItem(index: int, item: T): void

  /**
   * Adds an item to the collection.
   */
  public function addItem(item: T): boolean

  /**
   * Removes an item from the collection.
   */
  public function removeItem(item: T): boolean

  /**
   * Gets all items.
   */
  public function getItems(): List<T>

  /**
   * Gets the size of the collection.
   */
  public function size(): int

  /**
   * Checks if the collection is empty.
   */
  public function isEmpty(): boolean

  /**
   * Clears all items.
   */
  public function clear(): void

  /**
   * Default method implementation.
   */
  public function defaultMethod(): String {
    return "default"
  }

  /**
   * Static utility method.
   */
  public static function create(): ComplexInterface<String> {
    return new ArrayList<String>() as ComplexInterface<String>
  }
}