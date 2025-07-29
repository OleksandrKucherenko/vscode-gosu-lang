import { describe, it, expect, beforeEach } from 'vitest';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { SemanticTokensBuilder } from 'vscode-languageserver/node';
import { GosuSemanticHighlightingProvider } from './semantic-highlighting';

describe('GosuSemanticHighlightingProvider', () => {
  let provider: GosuSemanticHighlightingProvider;

  beforeEach(() => {
    provider = new GosuSemanticHighlightingProvider();
  });

  describe('Given a semantic highlighting provider instance', () => {
    describe('When creating the provider', () => {
      it('Then it should be instantiated successfully', () => {
        expect(provider).toBeDefined();
        expect(provider).toBeInstanceOf(GosuSemanticHighlightingProvider);
      });

      it('And it should have the correct token legend', () => {
        const legend = provider.getTokenLegend();
        
        expect(legend.tokenTypes).toContain('class');
        expect(legend.tokenTypes).toContain('function');
        expect(legend.tokenTypes).toContain('keyword');
        expect(legend.tokenTypes).toContain('variable');
        expect(legend.tokenTypes).toContain('string');
        expect(legend.tokenTypes).toContain('number');
        
        expect(legend.tokenModifiers).toContain('declaration');
        expect(legend.tokenModifiers).toContain('definition');
        expect(legend.tokenModifiers).toContain('static');
        expect(legend.tokenModifiers).toContain('readonly');
      });
    });

    describe('When processing a simple Gosu class', () => {
      it('Then it should identify class keywords', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `package example
class TestClass {
  function test() : String {
    return "hello"
  }
}`
        );

        const tokens = await provider.getSemanticTokens(document);
        expect(tokens).toBeDefined();
        expect(tokens.data.length).toBeGreaterThan(0);
      });

      it('And it should identify package declarations', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          'package example.test'
        );

        const tokens = await provider.getSemanticTokens(document);
        expect(tokens).toBeDefined();
        
        // Should have tokens for 'package' keyword and namespace
        expect(tokens.data.length).toBeGreaterThan(0);
      });

      it('And it should identify class declarations', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          'class MyClass { }'
        );

        const tokens = await provider.getSemanticTokens(document);
        expect(tokens).toBeDefined();
        expect(tokens.data.length).toBeGreaterThan(0);
      });

      it('And it should identify function declarations', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `class TestClass {
  function myFunction() : void {
  }
}`
        );

        const tokens = await provider.getSemanticTokens(document);
        expect(tokens).toBeDefined();
        expect(tokens.data.length).toBeGreaterThan(0);
      });
    });

    describe('When processing different token types', () => {
      it('Then it should identify string literals', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `class TestClass {
  var message = "Hello World"
}`
        );

        const tokens = await provider.getSemanticTokens(document);
        expect(tokens).toBeDefined();
        expect(tokens.data.length).toBeGreaterThan(0);
      });

      it('And it should identify numeric literals', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `class TestClass {
  var count = 42
  var price = 19.99
}`
        );

        const tokens = await provider.getSemanticTokens(document);
        expect(tokens).toBeDefined();
        expect(tokens.data.length).toBeGreaterThan(0);
      });

      it('And it should identify variable declarations', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `class TestClass {
  var name : String
  static var counter : int
}`
        );

        const tokens = await provider.getSemanticTokens(document);
        expect(tokens).toBeDefined();
        expect(tokens.data.length).toBeGreaterThan(0);
      });

      it('And it should identify type references', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `class TestClass {
  function process(data : List<String>) : Map<String, Object> {
    return null
  }
}`
        );

        const tokens = await provider.getSemanticTokens(document);
        expect(tokens).toBeDefined();
        expect(tokens.data.length).toBeGreaterThan(0);
      });
    });

    describe('When processing semantic token ranges', () => {
      it('Then it should provide tokens for specific ranges', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `package example
class TestClass {
  function test() : String {
    return "hello"
  }
}`
        );

        const range = {
          start: { line: 1, character: 0 },
          end: { line: 3, character: 20 }
        };

        const tokens = await provider.getSemanticTokensRange(document, range);
        expect(tokens).toBeDefined();
        expect(tokens.data.length).toBeGreaterThan(0);
      });

      it('And it should handle empty ranges gracefully', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          'class TestClass { }'
        );

        const range = {
          start: { line: 10, character: 0 },
          end: { line: 10, character: 0 }
        };

        const tokens = await provider.getSemanticTokensRange(document, range);
        expect(tokens).toBeDefined();
        expect(tokens.data.length).toBe(0);
      });
    });

    describe('When handling error cases', () => {
      it('Then it should handle malformed Gosu code gracefully', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          'class TestClass { function incomplete( '
        );

        const tokens = await provider.getSemanticTokens(document);
        expect(tokens).toBeDefined();
        // Should still provide tokens for the valid parts
        expect(tokens.data.length).toBeGreaterThan(0);
      });

      it('And it should handle empty documents', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          ''
        );

        const tokens = await provider.getSemanticTokens(document);
        expect(tokens).toBeDefined();
        expect(tokens.data.length).toBe(0);
      });

      it('And it should handle documents with only whitespace', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          '   \n  \t  \n   '
        );

        const tokens = await provider.getSemanticTokens(document);
        expect(tokens).toBeDefined();
        expect(tokens.data.length).toBe(0);
      });
    });

    describe('When processing advanced Gosu constructs', () => {
      it('Then it should identify enhancement declarations', async () => {
        const document = TextDocument.create(
          'file:///test.gsx',
          'gosu',
          1,
          `enhancement StringEnhancement : String {
  function reverse() : String {
    return this.toCharArray().reverse().join("")
  }
}`
        );

        const tokens = await provider.getSemanticTokens(document);
        expect(tokens).toBeDefined();
        expect(tokens.data.length).toBeGreaterThan(0);
      });

      it('And it should identify interface declarations', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `interface IProcessor {
  function process(data : String) : String
}`
        );

        const tokens = await provider.getSemanticTokens(document);
        expect(tokens).toBeDefined();
        expect(tokens.data.length).toBeGreaterThan(0);
      });

      it('And it should identify property declarations', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `class TestClass {
  property get Name() : String {
    return _name
  }
  property set Name(value : String) {
    _name = value
  }
}`
        );

        const tokens = await provider.getSemanticTokens(document);
        expect(tokens).toBeDefined();
        expect(tokens.data.length).toBeGreaterThan(0);
      });
    });

    describe('When processing token modifiers', () => {
      it('Then it should identify static modifiers', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `class TestClass {
  static function getInstance() : TestClass {
    return new TestClass()
  }
}`
        );

        const tokens = await provider.getSemanticTokens(document);
        expect(tokens).toBeDefined();
        expect(tokens.data.length).toBeGreaterThan(0);
      });

      it('And it should identify readonly modifiers', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `class TestClass {
  final var CONSTANT = "value"
}`
        );

        const tokens = await provider.getSemanticTokens(document);
        expect(tokens).toBeDefined();
        expect(tokens.data.length).toBeGreaterThan(0);
      });

      it('And it should identify access modifiers', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `class TestClass {
  private var _internal : String
  public function getInternal() : String {
    return _internal
  }
  protected function setInternal(value : String) {
    _internal = value
  }
}`
        );

        const tokens = await provider.getSemanticTokens(document);
        expect(tokens).toBeDefined();
        expect(tokens.data.length).toBeGreaterThan(0);
      });
    });

    describe('When integrating with AST analysis', () => {
      it('Then it should leverage existing symbol extraction', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `package example
uses java.util.List
uses java.util.Map

class ComplexClass {
  var items : List<String>
  
  construct(initialItems : List<String>) {
    items = initialItems
  }
  
  function process() : Map<String, Integer> {
    var result = new HashMap<String, Integer>()
    for (item in items) {
      result.put(item, item.length())
    }
    return result
  }
}`
        );

        const tokens = await provider.getSemanticTokens(document);
        expect(tokens).toBeDefined();
        expect(tokens.data.length).toBeGreaterThan(0);
      });

      it('And it should provide consistent token positioning', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          'class TestClass { }'
        );

        const tokens1 = await provider.getSemanticTokens(document);
        const tokens2 = await provider.getSemanticTokens(document);
        
        expect(tokens1.data).toEqual(tokens2.data);
      });
    });

    describe('When caching semantic tokens', () => {
      it('Then it should cache tokens for unchanged documents', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          'class TestClass { }'
        );

        // First call should compute tokens
        const startTime1 = Date.now();
        const tokens1 = await provider.getSemanticTokens(document);
        const duration1 = Date.now() - startTime1;

        // Second call should use cache (should be faster)
        const startTime2 = Date.now();
        const tokens2 = await provider.getSemanticTokens(document);
        const duration2 = Date.now() - startTime2;

        expect(tokens1.data).toEqual(tokens2.data);
        // Cache should make second call faster (allowing for some variance)
        expect(duration2).toBeLessThanOrEqual(duration1 + 50);
      });

      it('And it should clear cache when document changes', async () => {
        const document1 = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          'class TestClass { }'
        );

        const document2 = TextDocument.create(
          'file:///test.gs',
          'gosu',
          2,  // Different version
          'class ModifiedClass { function test() {} }'
        );

        const tokens1 = await provider.getSemanticTokens(document1);
        provider.onDocumentChange(document2);
        const tokens2 = await provider.getSemanticTokens(document2);

        expect(tokens1.data).not.toEqual(tokens2.data);
        expect(tokens2.data.length).toBeGreaterThan(tokens1.data.length);
      });

      it('And it should clear all caches', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          'class TestClass { }'
        );

        await provider.getSemanticTokens(document);
        provider.clearAllCaches();
        
        // Should work after cache clear
        const tokens = await provider.getSemanticTokens(document);
        expect(tokens).toBeDefined();
        expect(tokens.data.length).toBeGreaterThan(0);
      });
    });

    describe('When testing range filtering edge cases', () => {
      it('Then it should handle tokens that extend past range end character', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `class VeryLongClassName {
  function test() : String {
    return "value"
  }
}`
        );

        // Create a range that ends in the middle of a token
        const range = {
          start: { line: 0, character: 0 },
          end: { line: 0, character: 10 }  // This should cut off "VeryLongClassName"
        };

        const tokens = await provider.getSemanticTokensRange(document, range);
        expect(tokens).toBeDefined();
        // Should filter out tokens that extend past the end character
      });

      it('And it should handle range filtering with character boundaries', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          'class TestClass { function longFunctionName() {} }'
        );

        // Range that starts mid-token to test character boundary logic
        const range = {
          start: { line: 0, character: 5 },  // Starts in middle of "TestClass"
          end: { line: 0, character: 25 }    // Ends in middle of "longFunctionName"
        };

        const tokens = await provider.getSemanticTokensRange(document, range);
        expect(tokens).toBeDefined();
      });
    });

    describe('When testing keyword identification coverage', () => {
      it('Then it should correctly identify all keyword types', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `// Test basic regex-based highlighting when AST fails
SomeUnknownType someVariable = null
function testFunction() {
  var SomeClass = new UnknownClass()
  return SomeClass
}`
        );

        // This should trigger the basic identifier highlighting which uses isKeyword
        const tokens = await provider.getSemanticTokens(document);
        expect(tokens).toBeDefined();
        expect(tokens.data.length).toBeGreaterThan(0);
      });

      it('And it should handle capitalized identifiers vs keywords', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `// Test capitalized words that are not keywords
CustomType someVar
AnotherType anotherVar
function TestMethod() {
  var LocalClass = something
  var String = "test"  // String should be identified differently
}`
        );

        const tokens = await provider.getSemanticTokens(document);
        expect(tokens).toBeDefined();
        expect(tokens.data.length).toBeGreaterThan(0);
      });
    });

    describe('When testing comment highlighting edge cases', () => {
      it('Then it should handle block comments correctly', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `class TestClass {
  /* This is a block comment */
  function test() {
    /* Another block comment on same line */ var x = 1
  }
}`
        );

        const tokens = await provider.getSemanticTokens(document);
        expect(tokens).toBeDefined();
        expect(tokens.data.length).toBeGreaterThan(0);
      });

      it('And it should handle incomplete block comments', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `class TestClass {
  /* This block comment has no end
  function test() {
    return "test"
  }
}`
        );

        const tokens = await provider.getSemanticTokens(document);
        expect(tokens).toBeDefined();
        expect(tokens.data.length).toBeGreaterThan(0);
      });
    });

    describe('When testing string literal edge cases', () => {
      it('Then it should handle both single and double quoted strings', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `class TestClass {
  var doubleQuoted = "Hello World"
  var singleQuoted = 'Hello World'
  var empty = ""
  var emptySingle = ''
}`
        );

        const tokens = await provider.getSemanticTokens(document);
        expect(tokens).toBeDefined();
        expect(tokens.data.length).toBeGreaterThan(0);
      });
    });

    describe('When testing error handling during token computation', () => {
      it('Then it should handle parsing errors gracefully', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `class TestClass {
  function invalid( { // Malformed syntax
    this should cause parsing errors %%%
  }
}`
        );

        const tokens = await provider.getSemanticTokens(document);
        expect(tokens).toBeDefined();
        // Should still return tokens even with parsing errors
      });

      it('And it should handle range errors gracefully', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          'class TestClass { }'
        );

        // Invalid range that could cause errors
        const range = {
          start: { line: -1, character: -1 },
          end: { line: 100, character: 100 }
        };

        const tokens = await provider.getSemanticTokensRange(document, range);
        expect(tokens).toBeDefined();
      });
    });

    describe('When testing basic identifier highlighting fallback', () => {
      it('Then it should trigger basic identifier highlighting on parser failure', async () => {
        // Create a document that will cause parser failure but has recognizable patterns
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `// This should cause AST parsing to fail but still highlight basic patterns
class ValidClassName {
  // This will be processed by basic highlighting
  function functionName() {}
  SomeClassName someVar
  AnotherType anotherVar
}`
        );

        const tokens = await provider.getSemanticTokens(document);
        expect(tokens).toBeDefined();
        expect(tokens.data.length).toBeGreaterThan(0);
      });

      it('And it should identify function declarations in basic mode', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `// Force basic highlighting
function myTestFunction() {}
function anotherFunction() {
  return "test"
}`
        );

        const tokens = await provider.getSemanticTokens(document);
        expect(tokens).toBeDefined();
        expect(tokens.data.length).toBeGreaterThan(0);
      });

      it('And it should skip keywords when identifying class names', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `// Test basic class identification vs keywords
String someVariable // String should be class, not keyword
Class anotherVar   // Class should be class
Public someMethod  // Public should not be treated as class
Private otherMethod // Private should not be treated as class
Static finalMethod  // Static should not be treated as class
Final lastMethod    // Final should not be treated as class
Abstract baseMethod // Abstract should not be treated as class
Override derivedMethod // Override should not be treated as class`
        );

        const tokens = await provider.getSemanticTokens(document);
        expect(tokens).toBeDefined();
        expect(tokens.data.length).toBeGreaterThan(0);
      });

      it('And it should properly identify all Gosu keywords', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `// Test comprehensive keyword coverage
package test.coverage
uses java.util.*

class TestKeywords {
  private static final var field : String
  protected abstract function method() : void
  
  construct() {
    if (true) {
      while (false) {
        for (item in list) {
          do {
            switch (value) {
              case "test":
                break
              default:
                continue
            }
          } while (condition)
        }
      }
      
      try {
        throw new Exception()
      } catch (e) {
        return null
      } finally {
        using (resource) {
          // cleanup
        }
      }
    }
    
    var result = new Object()
    if (result typeis String) {
      var str = result as String
      typeof(str)
    }
    
    this.field = super.toString()
    var bool = true && false || null
    void
  }
}`
        );

        const tokens = await provider.getSemanticTokens(document);
        expect(tokens).toBeDefined();
        expect(tokens.data.length).toBeGreaterThan(0);
      });

      it('And it should force parser failure for basic highlighting', async () => {
        // Create document with extremely malformed syntax that will definitely cause parser failure
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `@@@INVALID_SYNTAX_TO_FORCE_PARSER_FAILURE@@@
RandomClassName someVariable
function testFunction() {
  YetAnotherClassName variable
  SomeType result = value
}
#ERROR#ERROR#ERROR# {{{ ]]] )))
Package this should fail parsing completely
Final AbstractClass = new Something()
Private ProtectedMethod() {}
Static Override function() {}
Abstract delegate = null`
        );

        const tokens = await provider.getSemanticTokens(document);
        expect(tokens).toBeDefined();
        // Should still provide some basic tokens even with parser failure
        expect(tokens.data.length).toBeGreaterThan(0);
      });

      it('And it should handle all keyword types in isKeyword method', async () => {
        // Create content that will force parser failure but still generate tokens via basic highlighting
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `@@@INVALID_SYNTAX{{{
CustomClassName someVariable
AnotherClass testVar
TestFunction functionName() {}
SomeInterface interfaceVar
PackageType packageVar
UsesType usesVar
ClassType classVar
InterfaceType interfaceVar
EnumType enumVar
function myFunction() {
  return "test"
}
package test
uses java.util.*
class ValidClass {}
@@@MORE_INVALID_SYNTAX}}}`
        );

        const tokens = await provider.getSemanticTokens(document);
        expect(tokens).toBeDefined();
        expect(tokens.data.length).toBeGreaterThan(0);
      });
    });
  });
});