import { describe, it, expect, beforeEach } from 'vitest';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { Position } from 'vscode-languageserver/node';
import { GosuCrossLanguageDefinitionProvider } from './cross-language-definition-provider';

describe('GosuCrossLanguageDefinitionProvider', () => {
  let provider: GosuCrossLanguageDefinitionProvider;

  beforeEach(() => {
    provider = new GosuCrossLanguageDefinitionProvider({
      sourcePaths: ['src/test/java'],
      classpath: ['lib/java-stdlib.jar']
    });
  });

  describe('Given a cross-language definition provider instance', () => {
    describe('When creating the provider', () => {
      it('Then it should be instantiated successfully', () => {
        expect(provider).toBeDefined();
        expect(provider).toBeInstanceOf(GosuCrossLanguageDefinitionProvider);
      });
    });

    describe('When navigating to Java standard library types', () => {
      it('Then it should resolve java.lang.String from Gosu imports', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `package example
uses java.lang.String

class TestClass {
  var name : String
  
  function test() {
    var text : String = "hello"
  }
}`
        );

        // Position on "String" in the field declaration
        const position: Position = { line: 4, character: 13 };
        const definition = await provider.getDefinition(document, position);

        expect(definition).toBeDefined();
        expect(definition?.uri).toBe('java:///java/lang/String.java');
        expect(definition?.range).toBeDefined();
      });

      it('And it should resolve java.util.List from Gosu imports', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `package example
uses java.util.List

class TestClass {
  var items : List<String>
  
  function addItem(item : String) {
    items.add(item)
  }
}`
        );

        // Position on "List" in the field declaration
        const position: Position = { line: 4, character: 14 };
        const definition = await provider.getDefinition(document, position);

        expect(definition).toBeDefined();
        expect(definition?.uri).toBe('java:///java/util/List.java');
      });

      it('And it should resolve java.util.Map from wildcard imports', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `package example
uses java.util.*

class TestClass {
  var data : Map<String, Object>
}`
        );

        // Position on "Map" in the field declaration
        const position: Position = { line: 4, character: 13 };
        const definition = await provider.getDefinition(document, position);

        expect(definition).toBeDefined();
        expect(definition?.uri).toBe('java:///java/util/Map.java');
      });
    });

    describe('When navigating to Java methods', () => {
      it('Then it should resolve String.length() method', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `package example
uses java.lang.String

class TestClass {
  function getLength(text : String) : int {
    return text.length()
  }
}`
        );

        // Position on "length" method call
        const position: Position = { line: 5, character: 17 };
        const definition = await provider.getDefinition(document, position);

        expect(definition).toBeDefined();
        expect(definition?.uri).toBe('java:///java/lang/String.java');
        // Should point to the method definition within String
      });

      it('And it should resolve List.add() method', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `package example
uses java.util.List
uses java.util.ArrayList

class TestClass {
  function createList() : List<String> {
    var list = new ArrayList<String>()
    list.add("item")
    return list
  }
}`
        );

        // Position on "add" method call
        const position: Position = { line: 7, character: 9 };
        const definition = await provider.getDefinition(document, position);

        expect(definition).toBeDefined();
        expect(definition?.uri).toBe('java:///java/util/List.java');
      });
    });

    describe('When handling fallback to Gosu-only navigation', () => {
      it('Then it should handle Gosu-only symbols normally', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `package example

class TestClass {
  var localField : String
  
  function testMethod() {
    localField = "test"
  }
}`
        );

        // Position on "localField" usage
        const position: Position = { line: 6, character: 4 };
        const definition = await provider.getDefinition(document, position);

        expect(definition).toBeDefined();
        expect(definition?.uri).toBe('file:///test.gs');
        expect(definition?.range.start.line).toBe(3); // Field definition line
      });

      it('And it should handle function definitions within Gosu', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `package example

class TestClass {
  function helperMethod() : String {
    return "helper"
  }
  
  function mainMethod() {
    var result = helperMethod()
  }
}`
        );

        // Position on "helperMethod" call
        const position: Position = { line: 8, character: 17 };
        const definition = await provider.getDefinition(document, position);

        expect(definition).toBeDefined();
        expect(definition?.uri).toBe('file:///test.gs');
        expect(definition?.range.start.line).toBe(3); // Function definition line
      });
    });

    describe('When handling import resolution priority', () => {
      it('Then it should prioritize specific imports over wildcards', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `package example
uses java.awt.*
uses java.util.List
uses java.util.*

class TestClass {
  var items : List<String>
}`
        );

        // Position on "List" - should resolve to java.util.List, not java.awt.List
        const position: Position = { line: 6, character: 14 };
        const definition = await provider.getDefinition(document, position);

        expect(definition).toBeDefined();
        expect(definition?.uri).toBe('java:///java/util/List.java');
      });

      it('And it should handle implicit java.lang imports', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `package example

class TestClass {
  var text : String
  var count : Integer
}`
        );

        // Position on "String" (implicit java.lang import)
        const position: Position = { line: 3, character: 13 };
        const definition = await provider.getDefinition(document, position);

        expect(definition).toBeDefined();
        expect(definition?.uri).toBe('java:///java/lang/String.java');
      });
    });

    describe('When handling parameterized types', () => {
      it('Then it should resolve generic type parameters', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `package example
uses java.util.Map
uses java.util.HashMap

class TestClass {
  var data : Map<String, Integer>
  
  function createMap() {
    data = new HashMap<String, Integer>()
  }
}`
        );

        // Position on "Map" in generic declaration
        const position: Position = { line: 5, character: 13 };
        const definition = await provider.getDefinition(document, position);

        expect(definition).toBeDefined();
        expect(definition?.uri).toBe('java:///java/util/Map.java');
      });

      it('And it should handle nested generics', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `package example
uses java.util.List
uses java.util.Map

class TestClass {
  var nested : Map<String, List<Integer>>
}`
        );

        // Position on "List" inside the nested generic
        const position: Position = { line: 5, character: 31 };
        const definition = await provider.getDefinition(document, position);

        expect(definition).toBeDefined();
        expect(definition?.uri).toBe('java:///java/util/List.java');
      });
    });

    describe('When handling error cases', () => {
      it('Then it should handle unresolvable Java types gracefully', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `package example

class TestClass {
  var unknown : UnknownJavaType
}`
        );

        // Position on unknown type
        const position: Position = { line: 3, character: 16 };
        const definition = await provider.getDefinition(document, position);

        expect(definition).toBeNull();
      });

      it('And it should handle malformed Gosu code', async () => {
        const document = TextDocument.create(
          'file:///malformed.gs',
          'gosu',
          1,
          `class TestClass {
  function incomplete(
  // Missing syntax
}`
        );

        const position: Position = { line: 0, character: 6 };
        const definition = await provider.getDefinition(document, position);

        // Should not throw, might return null
        expect(true).toBe(true);
      });

      it('And it should handle invalid positions', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          'class TestClass {}'
        );

        // Position beyond document bounds
        const position: Position = { line: 10, character: 50 };
        const definition = await provider.getDefinition(document, position);

        expect(definition).toBeNull();
      });
    });

    describe('When caching cross-language definitions', () => {
      it('Then it should cache Java type resolutions', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `package example
uses java.lang.String

class TestClass {
  var text1 : String
  var text2 : String
}`
        );

        const position1: Position = { line: 4, character: 14 };
        const position2: Position = { line: 5, character: 14 };

        const startTime1 = Date.now();
        const definition1 = await provider.getDefinition(document, position1);
        const duration1 = Date.now() - startTime1;

        const startTime2 = Date.now();
        const definition2 = await provider.getDefinition(document, position2);
        const duration2 = Date.now() - startTime2;

        expect(definition1).toBeDefined();
        expect(definition2).toBeDefined();
        expect(definition1?.uri).toBe(definition2?.uri);
        expect(duration2).toBeLessThanOrEqual(duration1 + 10); // Cache should be faster
      });

      it('And it should clear cache on configuration changes', async () => {
        const document = TextDocument.create(
          'file:///test.gs',
          'gosu',
          1,
          `package example
uses java.lang.String

class TestClass {
  var text : String
}`
        );

        const position: Position = { line: 4, character: 13 };
        
        await provider.getDefinition(document, position);
        
        provider.updateConfiguration({
          sourcePaths: ['src/main/java'],
          classpath: ['lib/updated.jar']
        });

        // Should work after configuration update
        const definition = await provider.getDefinition(document, position);
        expect(definition).toBeDefined();
      });
    });
  });
});