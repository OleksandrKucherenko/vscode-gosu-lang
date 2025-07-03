"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const gosuUtils_1 = require("./gosuUtils");
(0, vitest_1.describe)('GosuUtils', () => {
    (0, vitest_1.describe)('containsGosuKeywords', () => {
        (0, vitest_1.it)('should detect GOSU keywords in text', () => {
            const text = 'class MyClass implements ITest';
            (0, vitest_1.expect)(gosuUtils_1.GosuUtils.containsGosuKeywords(text)).toBe(true);
        });
        (0, vitest_1.it)('should return false for text without GOSU keywords', () => {
            const text = 'hello world this is just text';
            (0, vitest_1.expect)(gosuUtils_1.GosuUtils.containsGosuKeywords(text)).toBe(false);
        });
        (0, vitest_1.it)('should detect function keyword', () => {
            const text = 'function getName(): String';
            (0, vitest_1.expect)(gosuUtils_1.GosuUtils.containsGosuKeywords(text)).toBe(true);
        });
        (0, vitest_1.it)('should detect multiple keywords', () => {
            const text = 'class MyClass extends BaseClass implements ITest';
            (0, vitest_1.expect)(gosuUtils_1.GosuUtils.containsGosuKeywords(text)).toBe(true);
        });
        (0, vitest_1.it)('should be case sensitive', () => {
            const text = 'CLASS MyClass'; // uppercase
            (0, vitest_1.expect)(gosuUtils_1.GosuUtils.containsGosuKeywords(text)).toBe(false);
        });
    });
    (0, vitest_1.describe)('extractClassNames', () => {
        (0, vitest_1.it)('should extract class names from GOSU code', () => {
            const text = `
                class MyClass {
                }
                class AnotherClass extends BaseClass {
                }
            `;
            const classNames = gosuUtils_1.GosuUtils.extractClassNames(text);
            (0, vitest_1.expect)(classNames).toEqual(['MyClass', 'AnotherClass']);
        });
        (0, vitest_1.it)('should return empty array when no classes found', () => {
            const text = 'function test() { return "hello" }';
            const classNames = gosuUtils_1.GosuUtils.extractClassNames(text);
            (0, vitest_1.expect)(classNames).toEqual([]);
        });
        (0, vitest_1.it)('should handle class names with underscores and numbers', () => {
            const text = 'class My_Class123 { }';
            const classNames = gosuUtils_1.GosuUtils.extractClassNames(text);
            (0, vitest_1.expect)(classNames).toEqual(['My_Class123']);
        });
    });
    (0, vitest_1.describe)('extractFunctionNames', () => {
        (0, vitest_1.it)('should extract function names from GOSU code', () => {
            const text = `
                function getName(): String {
                    return _name
                }
                function setAge(age: int) {
                    _age = age
                }
            `;
            const functionNames = gosuUtils_1.GosuUtils.extractFunctionNames(text);
            (0, vitest_1.expect)(functionNames).toEqual(['getName', 'setAge']);
        });
        (0, vitest_1.it)('should handle functions with no parameters', () => {
            const text = 'function test() { }';
            const functionNames = gosuUtils_1.GosuUtils.extractFunctionNames(text);
            (0, vitest_1.expect)(functionNames).toEqual(['test']);
        });
        (0, vitest_1.it)('should handle functions with complex parameter lists', () => {
            const text = 'function complexFunction(param1: String, param2: List<Integer>) { }';
            const functionNames = gosuUtils_1.GosuUtils.extractFunctionNames(text);
            (0, vitest_1.expect)(functionNames).toEqual(['complexFunction']);
        });
    });
    (0, vitest_1.describe)('isGosuFile', () => {
        (0, vitest_1.it)('should recognize .gs files', () => {
            (0, vitest_1.expect)(gosuUtils_1.GosuUtils.isGosuFile('MyClass.gs')).toBe(true);
        });
        (0, vitest_1.it)('should recognize .gsx files', () => {
            (0, vitest_1.expect)(gosuUtils_1.GosuUtils.isGosuFile('Enhancement.gsx')).toBe(true);
        });
        (0, vitest_1.it)('should recognize .gst files', () => {
            (0, vitest_1.expect)(gosuUtils_1.GosuUtils.isGosuFile('Template.gst')).toBe(true);
        });
        (0, vitest_1.it)('should recognize .gsp files', () => {
            (0, vitest_1.expect)(gosuUtils_1.GosuUtils.isGosuFile('Program.gsp')).toBe(true);
        });
        (0, vitest_1.it)('should reject non-GOSU files', () => {
            (0, vitest_1.expect)(gosuUtils_1.GosuUtils.isGosuFile('file.txt')).toBe(false);
            (0, vitest_1.expect)(gosuUtils_1.GosuUtils.isGosuFile('script.js')).toBe(false);
            (0, vitest_1.expect)(gosuUtils_1.GosuUtils.isGosuFile('style.css')).toBe(false);
        });
        (0, vitest_1.it)('should be case insensitive', () => {
            (0, vitest_1.expect)(gosuUtils_1.GosuUtils.isGosuFile('MyClass.GS')).toBe(true);
            (0, vitest_1.expect)(gosuUtils_1.GosuUtils.isGosuFile('Enhancement.GSX')).toBe(true);
            (0, vitest_1.expect)(gosuUtils_1.GosuUtils.isGosuFile('Template.GST')).toBe(true);
            (0, vitest_1.expect)(gosuUtils_1.GosuUtils.isGosuFile('Program.GSP')).toBe(true);
        });
        (0, vitest_1.it)('should handle files with paths', () => {
            (0, vitest_1.expect)(gosuUtils_1.GosuUtils.isGosuFile('/path/to/MyClass.gs')).toBe(true);
            (0, vitest_1.expect)(gosuUtils_1.GosuUtils.isGosuFile('src/main/gosu/MyClass.gs')).toBe(true);
        });
    });
});
//# sourceMappingURL=gosuUtils.test.js.map