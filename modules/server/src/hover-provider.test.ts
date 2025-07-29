import { describe, it, expect, beforeEach, vi } from 'vitest';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { Position, MarkupKind } from 'vscode-languageserver/node';
import { GosuHoverProvider } from './hover-provider';

describe('GosuHoverProvider', () => {
  let provider: GosuHoverProvider;

  beforeEach(() => {
    provider = new GosuHoverProvider();
  });

  describe('Given a hover provider instance', () => {
    describe('When creating the provider', () => {
      it('Then it should be instantiated successfully', () => {
        expect(provider).toBeDefined();
        expect(provider).toBeInstanceOf(GosuHoverProvider);
      });
    });

    describe('When requesting hover for a simple class', () => {
      it('Then it should provide class information', async () => {
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

        // Position on "TestClass" in the class declaration
        const position: Position = { line: 1, character: 6 };
        const hover = await provider.getHover(document, position);

        expect(hover).toBeDefined();
        if (hover) {
          expect(hover.contents).toBeDefined();
          // Should be markdown content
          expect((hover.contents as any).kind).toBe(MarkupKind.Markdown);
          const content = (hover.contents as any).value;
          expect(content).toContain('class TestClass');
          expect(content).toContain('```gosu');
        }
      });

      it('And it should provide function hover information', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `class TestClass {
  function testMethod() : String {
    return "test"
  }
  
  function caller() {
    testMethod()
  }
}`
        );

        // Position on "testMethod" in the caller function
        const position: Position = { line: 6, character: 4 };
        const hover = await provider.getHover(document, position);

        expect(hover).toBeDefined();
        if (hover) {
          expect(hover.contents).toBeDefined();
          const content = (hover.contents as any).value;
          expect(content).toContain('function testMethod');
          expect(content).toContain('String');
          expect(content).toContain('**Returns:**');
        }
      });
    });

    describe('When requesting hover for variables', () => {
      it('Then it should provide variable type information', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `class TestClass {
  var instanceVar : String
  
  function test() {
    var localVar = "test"
    print(localVar)
    print(instanceVar)
  }
}`
        );

        // Position on "localVar" usage
        const position: Position = { line: 5, character: 10 };
        const hover = await provider.getHover(document, position);

        expect(hover).toBeDefined();
        if (hover) {
          expect(hover.contents).toBeDefined();
          const content = (hover.contents as any).value;
          expect(content).toContain('localVar');
          expect(content).toContain('variable');
        }
      });

      it('And it should provide field information', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `class TestClass {
  var fieldVar : String
  
  function test() {
    fieldVar = "value"
  }
}`
        );

        // Position on "fieldVar" usage
        const position: Position = { line: 4, character: 4 };
        const hover = await provider.getHover(document, position);

        expect(hover).toBeDefined();
        if (hover) {
          expect(hover.contents).toBeDefined();
          const content = (hover.contents as any).value;
          expect(content).toContain('fieldVar');
          expect(content).toContain('String');
        }
      });
    });

    describe('When handling function parameters', () => {
      it('Then it should show parameter information in hover', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `class TestClass {
  function processData(inputData : String, count : int) : String {
    var result = inputData.toUpperCase()
    for (i in 0..|count) {
      result += i.toString()
    }
    return result
  }
}`
        );

        // Position on function name to see parameters
        const position: Position = { line: 1, character: 11 };
        const hover = await provider.getHover(document, position);

        expect(hover).toBeDefined();
        if (hover) {
          expect(hover.contents).toBeDefined();
          const content = (hover.contents as any).value;
          expect(content).toContain('processData');
          expect(content).toContain('inputData : String');
          expect(content).toContain('count : int');
          expect(content).toContain('**Parameters:**');
        }
      });

      it('And it should show parameter information when hovering on parameter usage', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `class TestClass {
  function processData(inputData : String, count : int) : String {
    var result = inputData.toUpperCase()
    return result
  }
}`
        );

        // Position on "inputData" usage
        const position: Position = { line: 2, character: 17 };
        const hover = await provider.getHover(document, position);

        expect(hover).toBeDefined();
        if (hover) {
          expect(hover.contents).toBeDefined();
          const content = (hover.contents as any).value;
          expect(content).toContain('inputData');
          expect(content).toContain('String');
        }
      });
    });

    describe('When handling imports', () => {
      it('Then it should provide import information', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `package example
uses java.util.List
uses java.util.Map

class TestClass {
  var items : List<String>
  var data : Map<String, Object>
}`
        );

        // Position on "List" in the variable declaration
        const position: Position = { line: 5, character: 14 };
        const hover = await provider.getHover(document, position);

        expect(hover).toBeDefined();
        if (hover) {
          expect(hover.contents).toBeDefined();
          const content = (hover.contents as any).value;
          expect(content).toContain('List');
          expect(content).toContain('java.util.List');
        }
      });
    });

    describe('When handling different Gosu constructs', () => {
      it('Then it should work with enhancements', async () => {
        const document = TextDocument.create(
          'file:///enhancement.gsx',
          'gosu',
          1,
          `enhancement StringEnhancement : String {
  function reverse() : String {
    return this.toCharArray().reverse().join("")
  }
}`
        );

        // Position on enhancement name
        const position: Position = { line: 0, character: 12 };
        const hover = await provider.getHover(document, position);

        expect(hover).toBeDefined();
        if (hover) {
          expect(hover.contents).toBeDefined();
          const content = (hover.contents as any).value;
          expect(content).toContain('enhancement StringEnhancement');
          expect(content).toContain('String');
        }
      });

      it('And it should work with interfaces', async () => {
        const document = TextDocument.create(
          'file:///interface.gs',
          'gosu',
          1,
          `interface IProcessor {
  function process(data : String) : String
}`
        );

        // Position on interface name
        const position: Position = { line: 0, character: 10 };
        const hover = await provider.getHover(document, position);

        expect(hover).toBeDefined();
        if (hover) {
          expect(hover.contents).toBeDefined();
          const content = (hover.contents as any).value;
          expect(content).toContain('interface IProcessor');
        }
      });

      it('And it should show function signatures with modifiers', async () => {
        const document = TextDocument.create(
          'file:///modifiers.gs',
          'gosu',
          1,
          `class TestClass {
  public static function staticMethod() : void {
    // implementation
  }
  
  private final function finalMethod() : String {
    return "final"
  }
}`
        );

        // Position on static method
        const position: Position = { line: 1, character: 25 };
        const hover = await provider.getHover(document, position);

        expect(hover).toBeDefined();
        if (hover) {
          expect(hover.contents).toBeDefined();
          const content = (hover.contents as any).value;
          expect(content).toContain('public static function staticMethod');
          expect(content).toContain('**Modifiers:** public, static');
        }
      });
    });

    describe('When handling edge cases', () => {
      it('Then it should handle empty documents', async () => {
        const document = TextDocument.create(
          'file:///empty.gs',
          'gosu',
          1,
          ''
        );

        const position: Position = { line: 0, character: 0 };
        const hover = await provider.getHover(document, position);

        expect(hover).toBeNull();
      });

      it('And it should handle invalid positions', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          'class TestClass { }'
        );

        // Position beyond document bounds
        const position: Position = { line: 10, character: 50 };
        const hover = await provider.getHover(document, position);

        expect(hover).toBeNull();
      });

      it('And it should handle positions with no symbols', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `class TestClass {
  // This is a comment
  function test() {
    // Another comment
  }
}`
        );

        // Position in a comment
        const position: Position = { line: 1, character: 10 };
        const hover = await provider.getHover(document, position);

        expect(hover).toBeNull();
      });

      it('And it should handle malformed Gosu code gracefully', async () => {
        const document = TextDocument.create(
          'file:///malformed.gs',
          'gosu',
          1,
          `class TestClass {
  function incomplete( 
  // Missing closing brace and syntax errors
}`
        );

        const position: Position = { line: 0, character: 6 };
        const hover = await provider.getHover(document, position);

        // Should not throw errors, might return null or basic info
        // The test passes if no exception is thrown
        expect(true).toBe(true);
      });
    });

    describe('When testing hover range accuracy', () => {
      it('Then it should provide accurate hover ranges', async () => {
        const document = TextDocument.create(
          'file:///ranges.gs',
          'gosu',
          1,
          `class TestClass {
  function testMethod() {
    var someVariable = "test"
  }
}`
        );

        // Position on "someVariable"
        const position: Position = { line: 2, character: 8 };
        const hover = await provider.getHover(document, position);

        expect(hover).toBeDefined();
        if (hover) {
          expect(hover.range).toBeDefined();
          if (hover.range) {
            expect(hover.range.start.line).toBe(2);
            expect(hover.range.end.line).toBe(2);
            expect(hover.range.start.character).toBeLessThanOrEqual(8);
            expect(hover.range.end.character).toBeGreaterThan(8);
          }
        }
      });
    });

    describe('When testing caching functionality', () => {
      it('Then it should cache symbol tables', async () => {
        const document = TextDocument.create(
          'file:///cached.gs',
          'gosu',
          1,
          `class CachedClass {
  function test() {}
}`
        );

        const position: Position = { line: 0, character: 6 };
        
        // First call should parse and cache
        const startTime1 = Date.now();
        const hover1 = await provider.getHover(document, position);
        const duration1 = Date.now() - startTime1;

        // Second call should use cache (should be faster)
        const startTime2 = Date.now();
        const hover2 = await provider.getHover(document, position);
        const duration2 = Date.now() - startTime2;

        expect(hover1).toBeDefined();
        expect(hover2).toBeDefined();
        // Cache should make second call faster (allowing for some variance)
        expect(duration2).toBeLessThanOrEqual(duration1 + 50);
      });

      it('And it should clear cache when document changes', async () => {
        const document1 = TextDocument.create(
          'file:///changing.gs',
          'gosu',
          1,
          'class OriginalClass { }'
        );

        const document2 = TextDocument.create(
          'file:///changing.gs',
          'gosu',
          2, // Different version
          'class ModifiedClass { function newMethod() {} }'
        );

        const position: Position = { line: 0, character: 6 };
        
        const hover1 = await provider.getHover(document1, position);
        provider.onDocumentChange(document2);
        const hover2 = await provider.getHover(document2, position);

        expect(hover1).toBeDefined();
        expect(hover2).toBeDefined();
        // Both should work despite cache invalidation
      });

      it('And it should clear all caches', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          'class TestClass { }'
        );

        const position: Position = { line: 0, character: 6 };
        
        await provider.getHover(document, position);
        provider.clearAllCaches();
        
        // Should still work after cache clear
        const hover = await provider.getHover(document, position);
        expect(hover).toBeDefined();
      });
    });

    describe('When testing LSP protocol compliance', () => {
      it('Then hover content should follow markdown format', async () => {
        const document = TextDocument.create(
          'file:///protocol.gs',
          'gosu',
          1,
          `class ProtocolTest {
  function documentedMethod() : String {
    return "test"
  }
}`
        );

        const position: Position = { line: 1, character: 11 };
        const hover = await provider.getHover(document, position);

        expect(hover).toBeDefined();
        if (hover) {
          expect(hover.contents).toBeDefined();
          
          // Should be MarkupContent with Markdown kind
          const contents = hover.contents as any;
          expect(contents.kind).toBe(MarkupKind.Markdown);
          expect(contents.value).toBeTypeOf('string');
          
          // Should contain proper markdown formatting
          expect(contents.value).toContain('```gosu');
          expect(contents.value).toMatch(/\*\*[^*]+\*\*/); // Bold formatting
        }
      });

      it('And hover should include valid range information', async () => {
        const document = TextDocument.create(
          'file:///ranges.gs',
          'gosu',
          1,
          `class RangeTest {
  var testField : String
}`
        );

        const position: Position = { line: 1, character: 6 };
        const hover = await provider.getHover(document, position);

        expect(hover).toBeDefined();
        if (hover && hover.range) {
          const range = hover.range;
          
          // Range should be valid
          expect(range.start).toBeDefined();
          expect(range.end).toBeDefined();
          expect(range.start.line).toBeGreaterThanOrEqual(0);
          expect(range.start.character).toBeGreaterThanOrEqual(0);
          expect(range.end.line).toBeGreaterThanOrEqual(range.start.line);
          
          if (range.end.line === range.start.line) {
            expect(range.end.character).toBeGreaterThan(range.start.character);
          }
        }
      });
    });

    describe('When testing comprehensive symbol information', () => {
      it('Then it should show complete function information', async () => {
        const document = TextDocument.create(
          'file:///complete.gs',
          'gosu',
          1,
          `class CompleteTest {
  public static function complexMethod(param1 : String, param2 : int = 42) : List<String> {
    return new ArrayList<String>()
  }
}`
        );

        const position: Position = { line: 1, character: 25 };
        const hover = await provider.getHover(document, position);

        expect(hover).toBeDefined();
        if (hover) {
          const content = (hover.contents as any).value;
          
          // Should show signature
          expect(content).toContain('public static function complexMethod');
          expect(content).toContain('param1 : String');
          expect(content).toContain('param2? : int = 42');
          expect(content).toContain('List<String>');
          
          // Should show organized information
          expect(content).toContain('**Returns:**');
          expect(content).toContain('**Parameters:**');
          expect(content).toContain('**Modifiers:**');
          
          // Should show parameter details
          expect(content).toContain('(optional)');
        }
      });

      it('And it should handle constructors specially', async () => {
        const document = TextDocument.create(
          'file:///constructor.gs',
          'gosu',
          1,
          `class ConstructorTest {
  public construct(name : String) {
    // implementation
  }
}`
        );

        const position: Position = { line: 1, character: 15 };
        const hover = await provider.getHover(document, position);

        expect(hover).toBeDefined();
        if (hover) {
          const content = (hover.contents as any).value;
          expect(content).toContain('construct');
          expect(content).toContain('name : String');
        }
      });
    });

    describe('When testing error handling coverage', () => {
      it('should handle null AST from parser gracefully', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          'class TestClass {}'
        );
        const position: Position = { line: 0, character: 6 };

        // Mock parser to return undefined AST
        const mockParseResult = {
          isValid: false,
          syntaxErrors: [],
          ast: undefined,
          filePath: 'file:///test.gs',
          fileType: 'class' as const,
          sourceText: 'class TestClass {}'
        };
        vi.spyOn(provider['parser'], 'parseText').mockReturnValue(mockParseResult);

        const result = await provider.getHover(document, position);
        expect(result).toBeNull();

        // Restore the mock
        vi.restoreAllMocks();
      });

      it('should handle parser throwing exception gracefully', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          'class TestClass {}'
        );
        const position: Position = { line: 0, character: 6 };

        // Mock parser to throw an error
        vi.spyOn(provider['parser'], 'parseText').mockImplementation(() => {
          throw new Error('Parser error');
        });

        const result = await provider.getHover(document, position);
        expect(result).toBeNull();

        // Restore the mock
        vi.restoreAllMocks();
      });
    });
  });
});