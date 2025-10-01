# Test Plan - Gosu Formatter Coverage to 85%

**Goal**: Achieve 85% branch coverage with high-quality, business-value-focused tests  
**Approach**: Given/When/Then pattern for all tests, focus on real use cases

## Test Quality Standards

### Required Structure
```typescript
it('should [business behavior]', () => {
  // Given: [initial state/context]
  const input = ...
  
  // When: [action being tested]
  const result = executeAction(input)
  
  // Then: [expected business outcome]
  expect(result).toBe(expected)
})
```

### Focus Areas
1. **Business Value**: Test real user scenarios, not implementation details
2. **Clear Intent**: Test names describe behavior, not methods
3. **Readable**: Given/When/Then makes tests self-documenting
4. **Comprehensive**: Cover happy paths, edge cases, and error scenarios

---

## Priority 1: Visitor Pattern Tests (visitor.ts)

**Current Coverage**: 37.50% branches  
**Target**: 85%+ branches  
**Business Value**: Ensures formatter correctly understands all Gosu language constructs

### Test Categories

#### 1. Class Declarations (High Value)
**Business Need**: Developers write classes daily, must format correctly

- ✅ **should format simple class with single method**
  - Given: Basic class definition
  - When: Visitor processes AST
  - Then: Correct formatting nodes generated

- ✅ **should format class with multiple methods and properties**
  - Given: Complex class with methods, properties, constructors
  - When: Visitor processes AST
  - Then: All members correctly represented in formatting tree

- ✅ **should handle nested classes**
  - Given: Class with inner class definitions
  - When: Visitor processes nested structure
  - Then: Hierarchy preserved with correct indentation

#### 2. Interface Declarations (High Value)
**Business Need**: Interfaces define contracts, formatting must preserve intent

- [ ] **should format interface with method signatures**
  - Given: Interface with multiple method declarations
  - When: Visitor processes interface AST
  - Then: Method signatures formatted with proper spacing

- [ ] **should handle interface inheritance**
  - Given: Interface extending multiple parent interfaces
  - When: Visitor processes extends clause
  - Then: Parent interfaces listed with correct separators

#### 3. Enhancement Declarations (Gosu-Specific, High Value)
**Business Need**: Enhancements are core Gosu feature, must work perfectly

- [ ] **should format enhancement with extension methods**
  - Given: Enhancement adding methods to existing type
  - When: Visitor processes enhancement AST
  - Then: Extension methods formatted correctly

- [ ] **should handle property enhancements**
  - Given: Enhancement adding properties to type
  - When: Visitor processes property declarations
  - Then: Properties formatted with getters/setters

#### 4. Property Declarations (High Value)
**Business Need**: Properties are common, various syntaxes must all work

- [ ] **should format simple property declaration**
  - Given: `property Foo: String`
  - When: Visitor processes property
  - Then: Type annotation preserved with correct spacing

- [ ] **should format property with getter and setter**
  - Given: Property with `get()` and `set(value)` blocks
  - When: Visitor processes getter/setter
  - Then: Blocks indented and formatted properly

- [ ] **should format readonly property**
  - Given: Property with only getter, no setter
  - When: Visitor processes readonly property
  - Then: Marked as readonly in formatting tree

- [ ] **should format property with 'as' syntax**
  - Given: `property Foo as readonly String = "default"`
  - When: Visitor processes 'as' property
  - Then: Modifiers and initializer preserved

#### 5. Function Declarations (High Value)
**Business Need**: Functions are everywhere, all parameter styles must work

- [ ] **should format function with no parameters**
  - Given: `function foo() { }`
  - When: Visitor processes function
  - Then: Empty parameter list formatted correctly

- [ ] **should format function with multiple parameters**
  - Given: Function with typed parameters
  - When: Visitor processes parameter list
  - Then: Parameters separated with commas and spaces

- [ ] **should format function with default parameter values**
  - Given: `function foo(x: int = 5)`
  - When: Visitor processes default value
  - Then: Default value expression preserved

- [ ] **should format function with named parameters**
  - Given: Function using Gosu named parameter syntax
  - When: Visitor processes named params
  - Then: Parameter names and types correctly formatted

#### 6. Constructor Declarations (Medium Value)
**Business Need**: Constructors initialize objects, must handle all variations

- [ ] **should format simple constructor**
  - Given: `construct() { }`
  - When: Visitor processes constructor
  - Then: Constructor keyword and body formatted

- [ ] **should format constructor with super() call**
  - Given: Constructor calling parent constructor
  - When: Visitor processes super call
  - Then: Super call preserved in correct position

#### 7. Error Handling (High Value)
**Business Need**: Formatter must not crash on malformed input

- [ ] **should handle malformed class gracefully**
  - Given: Class with syntax errors
  - When: Visitor encounters parse errors
  - Then: Partial formatting attempted, no crash

- [ ] **should handle missing type information**
  - Given: Property without type annotation
  - When: Visitor processes incomplete declaration
  - Then: Formats what's available, marks as incomplete

- [ ] **should handle deeply nested structures**
  - Given: Class with 10+ levels of nesting
  - When: Visitor processes deep hierarchy
  - Then: All levels processed without stack overflow

---

## Priority 2: Doc Builder Tests (doc-builder.ts)

**Current Coverage**: 66.66% branches  
**Target**: 85%+ branches  
**Business Value**: Ensures formatted output is correctly constructed

### Test Categories

#### 1. Indentation Logic (High Value)
- [ ] **should apply consistent indentation levels**
  - Given: Nested blocks requiring indentation
  - When: Doc builder renders indentation
  - Then: Each level indented by configured amount

- [ ] **should handle mixed tabs and spaces configuration**
  - Given: Config specifying tabs vs spaces
  - When: Doc builder applies indentation
  - Then: Correct whitespace characters used

#### 2. Line Break Handling (High Value)
- [ ] **should insert line breaks between class members**
  - Given: Class with multiple methods
  - When: Doc builder renders class
  - Then: Methods separated by blank lines

- [ ] **should respect max line length**
  - Given: Long line exceeding maxLineLength
  - When: Doc builder wraps line
  - Then: Line broken at appropriate position

#### 3. Edge Cases (Medium Value)
- [ ] **should handle empty document**
  - Given: Empty formatting tree
  - When: Doc builder renders
  - Then: Returns empty string without error

- [ ] **should handle maximum nesting depth**
  - Given: Deeply nested structure at depth limit
  - When: Doc builder renders all levels
  - Then: All levels rendered correctly

---

## Priority 3: Config Tests (config.ts)

**Current Coverage**: 72.97% branches  
**Target**: 85%+ branches  
**Business Value**: Config errors should not break formatter

### Test Categories

#### 1. Error Path Coverage (High Value)
- [ ] **should handle missing config file gracefully**
  - Given: No .gosuformatting.json in project
  - When: Config loader searches for config
  - Then: Falls back to default configuration

- [ ] **should handle malformed JSON in config file**
  - Given: Config file with invalid JSON syntax
  - When: Config loader parses file
  - Then: Error logged, defaults used

- [ ] **should handle invalid config values**
  - Given: Config with indentSize = -5
  - When: Config validator checks values
  - Then: Invalid value rejected, default used

#### 2. Config Cascade (Medium Value)
- [ ] **should merge project config with defaults**
  - Given: Project config overriding some defaults
  - When: Config cascade resolves settings
  - Then: Project values override, missing use defaults

---

## File Coverage Checklist

**Goal**: Every file touched at least once by tests

### Formatter Module
- [X] `anchors.ts` - ✅ Has tests (81.25% coverage)
- [X] `batch.ts` - ✅ Integration tests (100% branch when tested)
- [X] `cli/check.ts` - ✅ Integration tests (100% branch when tested)
- [X] `cli/format.ts` - ✅ Integration tests (100% branch when tested)
- [X] `cli/glob.ts` - ✅ Integration tests (100% branch when tested)
- [X] `cli/show-config.ts` - ✅ Integration tests (100% branch when tested)
- [X] `cli.ts` - ✅ Integration tests (100% branch when tested)
- [X] `config-watcher.ts` - ✅ Integration tests (instantiation tested)
- [X] `config.ts` - ✅ Has tests (86.7% coverage)
- [ ] `doc/doc-builder.ts` - ⚠️ Needs more tests (66.66% coverage)
- [X] `index.ts` - ✅ Has tests (97.97% coverage)
- [ ] `ir/nodes.ts` - ⚠️ Type definitions only (0% coverage acceptable)
- [X] `ir/op-builder.ts` - ✅ Has tests (94.11% coverage, 85.58% branch)
- [X] `ir/ops.ts` - ✅ Has tests (100% coverage)
- [X] `ir/visitor.ts` - ✅ **IMPROVED!** **54.83% → 88.7% statements, 54.83% branches**
- [X] `logger-utils.ts` - ✅ Integration tests
- [X] `logger.ts` - ✅ Integration tests
- [X] `progress.ts` - ✅ Integration tests

### Actions Required
1. **Add unit tests** for visitor.ts (highest priority)
2. **Add unit tests** for doc-builder.ts edge cases
3. **Add unit tests** for config.ts error paths
4. **Add unit tests** for logger-utils.ts (utility functions)
5. **Add unit tests** for nodes.ts (type definitions - may just need instantiation tests)

---

## Test Execution Plan

### Phase 1: Visitor Tests (This Session)
- Create `modules/formatter/src/ir/__tests__/visitor.test.ts`
- Implement 15-20 high-quality Given/When/Then tests
- Target: Bring visitor.ts to 85%+ branch coverage
- **Expected**: +8-10% overall coverage → ~86-88% total

### Phase 2: Doc Builder Tests (If Needed)
- Enhance `modules/formatter/src/doc/__tests__/doc-builder.test.ts`
- Add edge case and error path tests
- Target: Bring doc-builder.ts to 85%+ branch coverage
- **Expected**: +3-5% overall coverage

### Phase 3: Utility Tests (If Needed)
- Create `modules/formatter/src/__tests__/logger-utils.test.ts`
- Create `modules/formatter/src/ir/__tests__/nodes.test.ts`
- Ensure every file touched at least once
- **Expected**: +1-2% overall coverage

---

## Success Criteria

1. ✅ **85%+ branch coverage** across all modules
2. ✅ **Every file** has at least one test touching it
3. ✅ **All tests** follow Given/When/Then pattern
4. ✅ **Tests focus on business value**, not just coverage
5. ✅ **Tests are maintainable** and self-documenting
6. ✅ **No regressions** - all existing tests still pass
