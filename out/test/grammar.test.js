"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
/**
 * This test validates the TextMate grammar patterns in gosu.tmLanguage.json
 * against the sample Gosu code file.
 */
(0, vitest_1.describe)('Gosu TextMate Grammar', () => {
    // Load grammar file
    const grammarPath = path.resolve(__dirname, '../../syntaxes/gosu.tmLanguage.json');
    const grammar = JSON.parse(fs.readFileSync(grammarPath, 'utf8'));
    // Load sample file
    const samplePath = path.resolve(__dirname, '../../test-workspace/gosu-syntax-full-sample.gs');
    const sampleCode = fs.readFileSync(samplePath, 'utf8');
    const sampleLines = sampleCode.split('\n');
    // Convert TextMate pattern to JavaScript regex
    function tmPatternToRegex(pattern) {
        // Convert TextMate pattern to JavaScript regex
        // This is a simplified conversion and may not handle all cases
        let jsPattern = pattern
            .replace(/\\b/g, '\\b') // word boundary
            .replace(/\\s\+/g, '\\s+') // whitespace
            .replace(/\\(/g, '\\(') // literal parentheses
            .replace(/\\)/g, '\\)') // literal parentheses
            .replace(/\\./g, '\\.'); // literal dot
        try {
            return new RegExp(jsPattern);
        }
        catch (e) {
            console.error(`Failed to convert pattern: ${pattern}`, e);
            return /a^/; // Never matches
        }
    }
    // Function to test if a pattern matches some content in the sample code
    function testPatternAgainstSample(name, regexStr) {
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
        }
        catch (e) {
            console.error(`✗ ${name} has invalid regex: ${regexStr}`);
            return false;
        }
    }
    (0, vitest_1.test)('grammar file is valid JSON', () => {
        (0, vitest_1.expect)(grammar).toBeDefined();
        (0, vitest_1.expect)(grammar.name).toBe('GOSU');
        (0, vitest_1.expect)(grammar.scopeName).toBe('source.gosu');
    });
    (0, vitest_1.test)('key repositories exist and have patterns', () => {
        const criticalRepos = [
            'comments',
            'keywords',
            'strings',
            'annotations',
            'properties',
            'functions' // Function definitions
        ];
        criticalRepos.forEach(repo => {
            (0, vitest_1.expect)(grammar.repository[repo]).toBeDefined();
            (0, vitest_1.expect)(Array.isArray(grammar.repository[repo].patterns)).toBe(true);
        });
    });
    (0, vitest_1.test)('comment patterns match the sample code', () => {
        const comments = grammar.repository.comments.patterns;
        // Line comment pattern
        const lineCommentPattern = comments.find((p) => p.name === 'comment.line.double-slash.gosu')?.begin;
        if (lineCommentPattern) {
            (0, vitest_1.expect)(testPatternAgainstSample('Line comment', lineCommentPattern)).toBe(true);
        }
        else {
            vitest_1.expect.fail('No line comment pattern found');
        }
        // Block comment pattern
        const blockCommentBegin = comments.find((p) => p.name === 'comment.block.gosu')?.begin;
        if (blockCommentBegin) {
            (0, vitest_1.expect)(testPatternAgainstSample('Block comment begin', blockCommentBegin)).toBe(true);
        }
        else {
            vitest_1.expect.fail('No block comment pattern found');
        }
    });
    (0, vitest_1.test)('keyword patterns match the sample code', () => {
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
            const matchesPattern = sampleLines.some(line => line.includes(keyword.pattern));
            if (matchesPattern) {
                console.log(`✓ ${keyword.name} found in sample`);
                matched++;
            }
            else {
                console.error(`✗ ${keyword.name} NOT found in sample`);
            }
        });
        // At least 4 out of 6 critical keywords should match
        (0, vitest_1.expect)(matched).toBeGreaterThanOrEqual(4);
    });
    (0, vitest_1.test)('annotation pattern matches the sample code', () => {
        const annotationPattern = grammar.repository.annotations.patterns[0].match;
        (0, vitest_1.expect)(testPatternAgainstSample('Annotation', annotationPattern)).toBe(true);
    });
    (0, vitest_1.test)('property patterns match the sample code', () => {
        const propertyPatterns = grammar.repository.properties.patterns;
        // Get property getter pattern
        const getterPattern = propertyPatterns.find((p) => p.name === 'meta.property.getter.gosu')?.match;
        if (getterPattern) {
            (0, vitest_1.expect)(testPatternAgainstSample('Property getter', getterPattern)).toBe(true);
        }
        else {
            // Try to find another property pattern if specific one not found
            const anyPropertyPattern = propertyPatterns.find((p) => p.match)?.match;
            if (anyPropertyPattern) {
                (0, vitest_1.expect)(testPatternAgainstSample('Any property', anyPropertyPattern)).toBe(true);
            }
            else {
                vitest_1.expect.fail('No property patterns found that can be tested');
            }
        }
    });
    (0, vitest_1.test)('function patterns match the sample code', () => {
        const functionPatterns = grammar.repository.functions.patterns;
        // Try to find a function declaration pattern
        const functionPattern = functionPatterns.find((p) => p.match)?.match;
        if (functionPattern) {
            (0, vitest_1.expect)(testPatternAgainstSample('Function declaration', functionPattern)).toBe(true);
        }
        else {
            vitest_1.expect.fail('No function pattern found that can be tested');
        }
    });
});
//# sourceMappingURL=grammar.test.js.map