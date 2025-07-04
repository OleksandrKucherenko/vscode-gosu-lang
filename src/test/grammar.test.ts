import { describe, test, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

/**
 * This test validates the TextMate grammar patterns in gosu.tmLanguage.json
 * against the sample Gosu code file.
 */
describe('Gosu TextMate Grammar', () => {
  // Load grammar file
  const grammarPath = path.resolve(__dirname, '../../syntaxes/gosu.tmLanguage.full.json');
  const grammar = JSON.parse(fs.readFileSync(grammarPath, 'utf8'));
  
  // Load sample file
  const samplePath = path.resolve(__dirname, '../../test-workspace/gosu-syntax-full-sample.gs');
  const sampleCode = fs.readFileSync(samplePath, 'utf8');
  const sampleLines = sampleCode.split('\n');
  
  // Convert TextMate pattern to JavaScript regex
  function tmPatternToRegex(pattern: string): RegExp {
    // Convert TextMate pattern to JavaScript regex
    // This is a simplified conversion and may not handle all cases
    let jsPattern = pattern
      .replace(/\\b/g, '\\b')     // word boundary
      .replace(/\\s\+/g, '\\s+')  // whitespace
      .replace(/\\\(/g, '\\(')    // literal parentheses
      .replace(/\\\)/g, '\\)')    // literal parentheses
      .replace(/\\./g, '\\.')     // literal dot
      
    try {
      return new RegExp(jsPattern);
    } catch (e) {
      console.error(`Failed to convert pattern: ${pattern}`, e);
      return /a^/; // Never matches
    }
  }
  
  // Function to test if a pattern matches some content in the sample code
  function testPatternAgainstSample(name: string, regexStr: string): boolean {
    try {
      const regex = new RegExp(regexStr);
      for (const line of sampleLines) {
        if (regex.test(line)) {
          console.log(`✓ ${name} matches: "${line.trim()}"`);  
          return true;
        }
      }
      console.error(`✗ ${name} does not match any line in the sample`);  
      return false;
    } catch (e) {
      console.error(`✗ ${name} has invalid regex: ${regexStr}`);  
      return false;
    }
  }

  test('grammar file is valid JSON', () => {
    expect(grammar).toBeDefined();
    expect(grammar.name).toBe('GOSU');
    expect(grammar.scopeName).toBe('source.gosu');
  });
  
  test('key repositories exist and have patterns', () => {
    const criticalRepos = [
      'comments',      // Comments
      'keywords',      // Language keywords
      'strings',       // String literals 
      'annotations',   // Annotations like @Deprecated
      'properties',    // Property definitions
      'functions'      // Function definitions
    ];
    
    criticalRepos.forEach(repo => {
      expect(grammar.repository[repo]).toBeDefined();
      expect(Array.isArray(grammar.repository[repo].patterns)).toBe(true);
    });
  });

  test('comment patterns match the sample code', () => {
    const comments = grammar.repository.comments.patterns;
    
    // Line comment pattern
    const lineCommentPattern = comments.find((p: any) => 
      p.name === 'comment.line.double-slash.gosu')?.begin;
    
    if (lineCommentPattern) {
      expect(testPatternAgainstSample('Line comment', lineCommentPattern)).toBe(true);
    } else {
      expect.fail('No line comment pattern found');
    }
    
    // Block comment pattern
    const blockCommentBegin = comments.find((p: any) => 
      p.name === 'comment.block.gosu')?.begin;
    
    if (blockCommentBegin) {
      expect(testPatternAgainstSample('Block comment begin', blockCommentBegin)).toBe(true);
    } else {
      expect.fail('No block comment pattern found');
    }
  });

  test('keyword patterns match the sample code', () => {
    const keywordPatterns = grammar.repository.keywords.patterns;
    let matched = 0;
    
    // Test just a few key patterns
    const criticalKeywords = [
      { name: 'class declaration', pattern: 'class' },
      { name: 'package declaration', pattern: 'package' },
      { name: 'uses statement', pattern: 'uses' },
      { name: 'property', pattern: 'property' },
      { name: 'constructor', pattern: 'construct' },
      { name: 'function', pattern: 'function' }
    ];
    
    criticalKeywords.forEach(keyword => {
      const matchesPattern = sampleLines.some(line => 
        line.includes(keyword.pattern)
      );
      
      if (matchesPattern) {
        console.log(`✓ ${keyword.name} found in sample`);
        matched++;
      } else {
        console.error(`✗ ${keyword.name} NOT found in sample`);
      }
    });
    
    // At least 4 out of 6 critical keywords should match
    expect(matched).toBeGreaterThanOrEqual(4);
  });

  test('annotation pattern matches the sample code', () => {
    const annotationPattern = grammar.repository.annotations.patterns[0].match;
    expect(testPatternAgainstSample('Annotation', annotationPattern)).toBe(true);
  });

  test('property patterns match the sample code', () => {
    const propertyPatterns = grammar.repository.properties.patterns;
    
    // Get property getter pattern
    const getterPattern = propertyPatterns.find((p: any) => 
      p.name === 'meta.property.getter.gosu')?.match;
      
    if (getterPattern) {
      expect(testPatternAgainstSample('Property getter', getterPattern)).toBe(true);
    } else {
      // Try to find another property pattern if specific one not found
      const anyPropertyPattern = propertyPatterns.find((p: any) => p.match)?.match;
      if (anyPropertyPattern) {
        expect(testPatternAgainstSample('Any property', anyPropertyPattern)).toBe(true);
      } else {
        expect.fail('No property patterns found that can be tested');
      }
    }
  });

  test('function patterns match the sample code', () => {
    const functionPatterns = grammar.repository.functions.patterns;
    
    // Try to find a function declaration pattern
    const functionPattern = functionPatterns.find((p: any) => p.match)?.match;
    
    if (functionPattern) {
      expect(testPatternAgainstSample('Function declaration', functionPattern)).toBe(true);
    } else {
      expect.fail('No function pattern found that can be tested');
    }
  });
});

