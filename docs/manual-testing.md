# Manual Testing Plan - Gosu Language Support Extension

This document provides comprehensive manual testing scenarios for all major features of the VSCode Gosu Language Support extension.

## 📋 **Test Environment Setup**

### **Prerequisites**
- VS Code version 1.74.0 or higher
- Node.js 20.19.3+ installed
- Extension installed and activated
- Sample Gosu files for testing

### **Test Files Setup**
Create the following test files in your workspace:

**`test/main.gs`** - Primary test file:
```gosu
package test

uses java.util.List
uses java.util.ArrayList
uses java.lang.String

class MainClass {
  
  var _name : String
  var _items : List<String>
  
  construct(name : String) {
    _name = name
    _items = new ArrayList<String>()
  }
  
  function getName() : String {
    return _name
  }
  
  function addItem(item : String) : void {
    _items.add(item)
    print("Added: " + item)
  }
  
  function getItemCount() : int {
    return _items.size()
  }
  
  function processItems() {
    for(item in _items) {
      var length = item.length()
      print("Item: ${item}, Length: ${length}")
    }
  }
}
```

**`test/helper.gs`** - Cross-reference test file:
```gosu
package test

class HelperClass {
  
  static function createMain(name : String) : MainClass {
    return new MainClass(name)
  }
  
  static function validateName(name : String) : boolean {
    return name != null && name.length() > 0
  }
}
```

**`test/invalid.gs`** - For error testing:
```gosu
package test

class InvalidSyntax {
  function broken() {
    var x = 
    undefinedFunction()
    return unknownVariable
  }
}
```

## 🧪 **Test Scenarios**

### **Scenario 1: Extension Activation & Basic Functionality**

**Test Steps:**
1. Open VS Code
2. Open a workspace containing `.gs` files
3. Open `test/main.gs`

**Expected Results:**
- ✅ Extension activates automatically (check status bar for "Gosu" indicator)
- ✅ Gosu file is recognized (syntax highlighting visible)
- ✅ No error notifications appear
- ✅ Language mode shows "Gosu" in status bar

**Failure Indicators:**
- ❌ Extension fails to activate
- ❌ File not recognized as Gosu
- ❌ Error notifications about missing dependencies

---

### **Scenario 2: Syntax Highlighting & Semantic Tokens**

**Test Steps:**
1. Open `test/main.gs`
2. Observe syntax highlighting throughout the file
3. Check different token types (keywords, strings, types, etc.)

**Expected Results:**
- ✅ **Keywords** (`class`, `function`, `var`, `uses`, etc.) highlighted in keyword color
- ✅ **Types** (`String`, `List`, `int`) highlighted in type color
- ✅ **Strings** (`"Added: "`, template strings) highlighted in string color
- ✅ **Comments** (if any) highlighted in comment color
- ✅ **Functions** (`getName`, `addItem`) highlighted in function color
- ✅ **Variables** (`_name`, `item`) highlighted in variable color
- ✅ **Numbers** and **operators** properly colored

**Failure Indicators:**
- ❌ No syntax highlighting visible
- ❌ Incorrect token colors
- ❌ Missing highlighting for specific token types

---

### **Scenario 3: Diagnostics & Error Reporting**

**Test Steps:**
1. Open `test/invalid.gs`
2. Observe error indicators in editor
3. Check Problems panel (View → Problems)
4. Hover over error markers

**Expected Results:**
- ✅ **Red squiggly lines** under syntax errors
- ✅ **Problems panel** shows detailed error messages
- ✅ **Error count** in status bar (if any)
- ✅ **Hover tooltips** show error descriptions
- ✅ Line numbers match actual error locations

**Test Error Recovery:**
1. Fix syntax errors in `test/invalid.gs`
2. Save file

**Expected Results:**
- ✅ Error markers disappear
- ✅ Problems panel clears
- ✅ Status bar error count updates

**Failure Indicators:**
- ❌ No error detection for obvious syntax issues
- ❌ Incorrect error positions
- ❌ Missing or unclear error messages

---

### **Scenario 4: Auto-completion**

**Test Steps:**
1. Open `test/main.gs`
2. Position cursor after `_items.` (line with `_items.add(item)`)
3. Trigger completion (Ctrl+Space)
4. Type `s` and observe filtered results
5. Select `size()` from completion list

**Expected Results:**
- ✅ **Completion popup** appears automatically or on Ctrl+Space
- ✅ **Java List methods** shown (`add`, `size`, `get`, `isEmpty`, etc.)
- ✅ **Filtering works** - typing "s" shows `size()` prominently
- ✅ **Method signatures** visible in completion details
- ✅ **Auto-insertion** works when selecting item

**Test Context-Aware Completion:**
1. Position cursor in empty line within a function
2. Type `var n` and trigger completion
3. Type `_name.` and trigger completion

**Expected Results:**
- ✅ **Variable suggestions** appear for `var n`
- ✅ **String methods** appear after `_name.`
- ✅ **Context-appropriate** suggestions only

**Failure Indicators:**
- ❌ No completion popup appears
- ❌ Empty or irrelevant suggestions
- ❌ Completion doesn't filter properly
- ❌ Auto-insertion doesn't work

---

### **Scenario 5: Hover Information**

**Test Steps:**
1. Open `test/main.gs`
2. Hover over different symbols:
   - `MainClass` (class name)
   - `getName` (function name)
   - `_name` (property)
   - `String` (type)
   - `List<String>` (generic type)
   - `item.length()` (method call)

**Expected Results:**
- ✅ **Rich hover cards** appear for all symbols
- ✅ **Symbol type information** displayed
- ✅ **Function signatures** with parameter details
- ✅ **Markdown formatting** for better readability
- ✅ **Import source** shown for external types
- ✅ **Documentation** (if available) included

**Expected Hover Content Examples:**
- `MainClass`: "class MainClass" with construction info
- `getName`: "function getName(): String" with description
- `String`: "java.lang.String" with source information
- `List<String>`: Generic type information

**Failure Indicators:**
- ❌ No hover information appears
- ❌ Incomplete or incorrect symbol information
- ❌ Poor formatting or missing details

---

### **Scenario 6: Go to Definition (Within Gosu Files)**

**Test Steps:**
1. Open `test/main.gs`
2. Right-click on `MainClass` (in constructor or other usage)
3. Select "Go to Definition" or press F12
4. Test with other symbols:
   - `_name` usage → property declaration
   - `getName` call → function definition
   - `addItem` call → function definition

**Expected Results:**
- ✅ **Cursor jumps** to definition location
- ✅ **Correct symbol** highlighted at destination
- ✅ **Works for all symbol types** (classes, functions, variables)
- ✅ **Breadcrumb navigation** updates

**Test Cross-File Navigation:**
1. Open `test/helper.gs`
2. Right-click on `MainClass` in `createMain` function
3. Select "Go to Definition"

**Expected Results:**
- ✅ **Opens** `test/main.gs`
- ✅ **Cursor positioned** at `MainClass` definition

**Failure Indicators:**
- ❌ No navigation occurs
- ❌ Wrong destination or symbol
- ❌ Navigation fails for cross-file references

---

### **Scenario 7: Cross-Language Navigation (Gosu ↔ Java)**

**Test Steps:**
1. Open `test/main.gs`
2. Right-click on `String` in imports or type declaration
3. Select "Go to Definition"
4. Test with other Java types:
   - `List` → java.util.List
   - `ArrayList` → java.util.ArrayList
5. Test method navigation:
   - Right-click on `length()` in `item.length()`
   - Right-click on `add` in `_items.add(item)`

**Expected Results:**
- ✅ **Virtual Java files** open (java:// URI scheme)
- ✅ **Correct Java class** definitions shown
- ✅ **Method signatures** properly displayed
- ✅ **Standard library** classes accessible
- ✅ **Generic types** handled correctly

**Test Java Standard Library Coverage:**
- `String.length()` → method signature
- `List.add()` → generic method info
- `ArrayList.size()` → concrete implementation

**Failure Indicators:**
- ❌ Java navigation doesn't work
- ❌ Missing standard library definitions
- ❌ Incorrect or empty Java class information

---

### **Scenario 8: Find References**

**Test Steps:**
1. Open `test/main.gs`
2. Right-click on `_name` property declaration
3. Select "Find All References" or press Shift+F12
4. Observe References panel results
5. Test with other symbols:
   - `MainClass` → should find constructor and usage
   - `addItem` → should find definition and calls
   - `getName` → should find definition

**Expected Results:**
- ✅ **References panel** opens with results
- ✅ **All usages** found across files
- ✅ **File grouping** in results
- ✅ **Click navigation** to each reference
- ✅ **Accurate line numbers** and previews

**Test Cross-File References:**
1. Open `test/helper.gs`
2. Right-click on `MainClass` in `createMain`
3. Find All References

**Expected Results:**
- ✅ **References in both files** shown
- ✅ **Definition and usage** both listed
- ✅ **File paths** correctly displayed

**Failure Indicators:**
- ❌ No references found
- ❌ Missing references in other files
- ❌ Incorrect reference locations

---

### **Scenario 9: Document Synchronization & Live Updates**

**Test Steps:**
1. Open `test/main.gs`
2. Make changes to the file (add/modify/delete code)
3. Observe real-time updates:
   - Syntax highlighting updates
   - Error markers appear/disappear
   - Hover information reflects changes
4. Save file and observe changes persist

**Expected Results:**
- ✅ **Immediate visual updates** as you type
- ✅ **Error detection** responds to changes
- ✅ **Symbol information** updates dynamically
- ✅ **No lag** or performance issues

**Test Multiple Files:**
1. Open both `test/main.gs` and `test/helper.gs`
2. Modify `MainClass` in `main.gs`
3. Check if references in `helper.gs` update

**Expected Results:**
- ✅ **Cross-file updates** work correctly
- ✅ **Reference highlighting** updates

**Failure Indicators:**
- ❌ Updates don't appear in real-time
- ❌ Stale information persists
- ❌ Performance degradation with changes

---

### **Scenario 10: Performance & Large Files**

**Test Steps:**
1. Create or open a large Gosu file (500+ lines)
2. Test all language features on the large file:
   - Syntax highlighting loading time
   - Completion response time
   - Hover information speed
   - Go to definition performance
3. Monitor VS Code performance (CPU, memory)

**Expected Results:**
- ✅ **Sub-100ms response times** for most operations
- ✅ **Smooth scrolling** and editing
- ✅ **No noticeable lag** in completions or hover
- ✅ **Stable memory usage**

**Performance Benchmarks:**
- Completion: < 100ms
- Hover: < 50ms
- Go to Definition: < 100ms
- Syntax Highlighting: < 200ms for initial load

**Failure Indicators:**
- ❌ Slow or unresponsive features
- ❌ High CPU/memory usage
- ❌ UI freezing or lag

---

### **Scenario 11: Edge Cases & Error Handling**

**Test Steps:**
1. **Empty Files**: Open empty `.gs` file - should not crash
2. **Malformed Syntax**: Test with various syntax errors
3. **Missing Imports**: Reference undefined types
4. **Large Symbols**: Test with very long identifiers
5. **Special Characters**: Test with Unicode in strings/comments
6. **File Operations**: Rename, delete, create new files

**Expected Results:**
- ✅ **Graceful error handling** - no crashes
- ✅ **Helpful error messages** for issues
- ✅ **Robust parsing** of malformed code
- ✅ **File operations** work smoothly

**Failure Indicators:**
- ❌ Extension crashes or becomes unresponsive
- ❌ Unhelpful or missing error messages
- ❌ Features break with edge cases

---

## 🎯 **Success Criteria Summary**

### **Critical Features (Must Work)**
- ✅ Extension activation and file recognition
- ✅ Basic syntax highlighting
- ✅ Error detection and reporting
- ✅ Auto-completion with Java interop
- ✅ Go to definition (Gosu and Java)

### **Important Features (Should Work)**
- ✅ Rich hover information
- ✅ Find references across files
- ✅ Real-time document synchronization
- ✅ Cross-language navigation

### **Quality Metrics**
- ✅ Response times under 100ms
- ✅ No crashes or errors during normal use
- ✅ Memory usage remains stable
- ✅ Works with files up to 1000+ lines

## 📊 **Test Completion Checklist**

- [ ] **Scenario 1**: Extension Activation
- [ ] **Scenario 2**: Syntax Highlighting
- [ ] **Scenario 3**: Diagnostics
- [ ] **Scenario 4**: Auto-completion
- [ ] **Scenario 5**: Hover Information
- [ ] **Scenario 6**: Go to Definition
- [ ] **Scenario 7**: Cross-Language Navigation
- [ ] **Scenario 8**: Find References
- [ ] **Scenario 9**: Document Synchronization
- [ ] **Scenario 10**: Performance Testing
- [ ] **Scenario 11**: Edge Cases

**Overall Test Result**: ✅ PASS / ❌ FAIL

---

*Testing Date: ____________*
*Tester: ________________*
*Extension Version: _______*
*VS Code Version: ________*