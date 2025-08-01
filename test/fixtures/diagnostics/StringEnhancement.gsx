package test

enhancement StringEnhancement : String {
  function isLong() : boolean {
    return this.length > 10
  }
}