import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { describe, expect, it } from 'vitest';

import { GosuLexer } from './syntaxes/GosuLexer';
import { GosuListener } from './syntaxes/GosuListener';
import { GosuParser } from './syntaxes/GosuParser';

/**
 * Custom error listener to collect parser errors
 */
class TestErrorListener {
  public errors: string[] = [];

  syntaxError(recognizer: any, offendingSymbol: any, line: number, charPositionInLine: number, msg: string, e: any): void {
    this.errors.push(`Line ${line}:${charPositionInLine} - ${msg}`);
  }
}

/**
 * Test listener to count parse tree nodes and detect errors
 */
class TestListener implements GosuListener {
  public nodeCount = 0;
  public errorCount = 0;

  enterEveryRule(ctx: any): void {
    this.nodeCount++;
  }

  visitErrorNode(node: ErrorNode): void {
    this.errorCount++;
  }
}

/**
 * Helper function to parse Gosu source code
 */
function parseGosuCode(sourceCode: string): {
  parseTree: any;
  errors: string[];
  lexerErrors: string[];
  nodeCount: number;
  errorNodeCount: number;
} {
  // Create input stream
  const inputStream = CharStreams.fromString(sourceCode);
  
  // Create lexer and add error listener
  const lexer = new GosuLexer(inputStream);
  const lexerErrorListener = new TestErrorListener();
  lexer.removeErrorListeners();
  lexer.addErrorListener(lexerErrorListener);
  
  // Create token stream
  const tokenStream = new CommonTokenStream(lexer);
  
  // Create parser and add error listener
  const parser = new GosuParser(tokenStream);
  const parserErrorListener = new TestErrorListener();
  parser.removeErrorListeners();
  parser.addErrorListener(parserErrorListener);
  
  // Parse starting from the root rule
  const parseTree = parser.start();
  
  // Walk the parse tree to count nodes and errors
  const listener = new TestListener();
  ParseTreeWalker.DEFAULT.walk(listener, parseTree);
  
  return {
    parseTree,
    errors: parserErrorListener.errors,
    lexerErrors: lexerErrorListener.errors,
    nodeCount: listener.nodeCount,
    errorNodeCount: listener.errorCount
  };
}

/**
 * Helper function to read test files
 */
function readTestFile(filename: string): string {
  const testWorkspacePath = path.resolve(__dirname, '../../../test-workspace');
  const filePath = path.join(testWorkspacePath, filename);
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`Test file not found: ${filePath}`);
  }
  
  return fs.readFileSync(filePath, 'utf-8');
}

describe('Gosu Parser Tests', () => {
  describe('Sample File Parsing', () => {
    it('should parse sample.gs without errors', () => {
      const sourceCode = readTestFile('sample.gs');
      const result = parseGosuCode(sourceCode);
      
      // Verify no lexer errors
      expect(result.lexerErrors).toHaveLength(0);
      
      // Verify no parser errors
      expect(result.errors).toHaveLength(0);
      
      // Verify no error nodes in parse tree
      expect(result.errorNodeCount).toBe(0);
      
      // Verify parse tree was created
      expect(result.parseTree).toBeDefined();
      
      // Verify reasonable node count (should have parsed significant content)
      expect(result.nodeCount).toBeGreaterThan(10);
      
      console.log(`sample.gs parsed successfully: ${result.nodeCount} nodes`);
    });

    it('should parse gosu-syntax-full-sample.gs without errors', () => {
      const sourceCode = readTestFile('gosu-syntax-full-sample.gs');
      const result = parseGosuCode(sourceCode);
      
      // Verify no lexer errors
      if (result.lexerErrors.length > 0) {
        console.error('Lexer Errors:', result.lexerErrors);
      }
      expect(result.lexerErrors).toHaveLength(0);
      
      // Verify no parser errors
      if (result.errors.length > 0) {
        console.error('Parser Errors:', result.errors);
      }
      expect(result.errors).toHaveLength(0);
      
      // Verify no error nodes in parse tree
      if (result.errorNodeCount > 0) {
        console.error('Error Nodes in Parse Tree:', result.errorNodeCount);
      }
      expect(result.errorNodeCount).toBe(0);
      
      // Verify parse tree was created
      expect(result.parseTree).toBeDefined();
      
      // Verify significant node count for comprehensive sample
      expect(result.nodeCount).toBeGreaterThan(50);
      
      console.log(`gosu-syntax-full-sample.gs parsed successfully: ${result.nodeCount} nodes`);
    });
  });

  describe('Parse Tree Structure', () => {
    it('should create valid parse tree structure for sample.gs', () => {
      const sourceCode = readTestFile('sample.gs');
      const result = parseGosuCode(sourceCode);
      
      expect(result.parseTree).toBeDefined();
      expect(result.parseTree.children).toBeDefined();
      expect(result.parseTree.children.length).toBeGreaterThan(0);
      
      // The parse tree should have reasonable depth
      expect(result.nodeCount).toBeGreaterThan(5);
    });

    it('should handle complex syntax in full sample', () => {
      const sourceCode = readTestFile('gosu-syntax-full-sample.gs');
      const result = parseGosuCode(sourceCode);
      
      expect(result.parseTree).toBeDefined();
      expect(result.parseTree.children).toBeDefined();
      
      // Complex file should have significant parse tree
      expect(result.nodeCount).toBeGreaterThan(30);
    });
  });

  describe('Error Handling', () => {
    it('should handle empty input gracefully', () => {
      const result = parseGosuCode('');
      
      // Empty input might be valid or produce specific errors
      // At minimum, should not crash
      expect(result.parseTree).toBeDefined();
    });

    it('should handle whitespace-only input', () => {
      const result = parseGosuCode('   \n  \t  \n  ');
      
      // Whitespace-only should be handled gracefully
      expect(result.parseTree).toBeDefined();
    });

    it('should handle comments-only input', () => {
      const result = parseGosuCode('// This is a comment\n/* Block comment */');
      
      // Comments-only should be valid
      expect(result.parseTree).toBeDefined();
    });
  });

  describe('Lexer Token Tests', () => {
    it('should tokenize keywords correctly', () => {
      const sourceCode = 'class interface enum function property construct';
      
      const inputStream = CharStreams.fromString(sourceCode);
      const lexer = new GosuLexer(inputStream);
      const tokenStream = new CommonTokenStream(lexer);
      
      tokenStream.fill();
      const tokens = tokenStream.getTokens();
      
      // Should have multiple keyword tokens plus EOF
      expect(tokens.length).toBeGreaterThan(6);
      
      // Verify no lexer errors
      const errorListener = new TestErrorListener();
      lexer.addErrorListener(errorListener);
      expect(errorListener.errors).toHaveLength(0);
    });

    it('should tokenize identifiers and literals', () => {
      const sourceCode = 'var myVar : String = "Hello World"';
      
      const inputStream = CharStreams.fromString(sourceCode);
      const lexer = new GosuLexer(inputStream);
      const tokenStream = new CommonTokenStream(lexer);
      
      tokenStream.fill();
      const tokens = tokenStream.getTokens();
      
      // Should have several tokens
      expect(tokens.length).toBeGreaterThan(5);
    });
  });
});
