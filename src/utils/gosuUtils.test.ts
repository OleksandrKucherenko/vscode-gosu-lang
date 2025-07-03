import { describe, it, expect } from 'vitest';
import { GosuUtils } from './gosuUtils';

describe('GosuUtils', () => {
    describe('containsGosuKeywords', () => {
        it('should detect GOSU keywords in text', () => {
            const text = 'class MyClass implements ITest';
            expect(GosuUtils.containsGosuKeywords(text)).toBe(true);
        });

        it('should return false for text without GOSU keywords', () => {
            const text = 'hello world this is just text';
            expect(GosuUtils.containsGosuKeywords(text)).toBe(false);
        });

        it('should detect function keyword', () => {
            const text = 'function getName(): String';
            expect(GosuUtils.containsGosuKeywords(text)).toBe(true);
        });

        it('should detect multiple keywords', () => {
            const text = 'class MyClass extends BaseClass implements ITest';
            expect(GosuUtils.containsGosuKeywords(text)).toBe(true);
        });

        it('should be case sensitive', () => {
            const text = 'CLASS MyClass'; // uppercase
            expect(GosuUtils.containsGosuKeywords(text)).toBe(false);
        });
    });

    describe('extractClassNames', () => {
        it('should extract class names from GOSU code', () => {
            const text = `
                class MyClass {
                }
                class AnotherClass extends BaseClass {
                }
            `;
            const classNames = GosuUtils.extractClassNames(text);
            expect(classNames).toEqual(['MyClass', 'AnotherClass']);
        });

        it('should return empty array when no classes found', () => {
            const text = 'function test() { return "hello" }';
            const classNames = GosuUtils.extractClassNames(text);
            expect(classNames).toEqual([]);
        });

        it('should handle class names with underscores and numbers', () => {
            const text = 'class My_Class123 { }';
            const classNames = GosuUtils.extractClassNames(text);
            expect(classNames).toEqual(['My_Class123']);
        });
    });

    describe('extractFunctionNames', () => {
        it('should extract function names from GOSU code', () => {
            const text = `
                function getName(): String {
                    return _name
                }
                function setAge(age: int) {
                    _age = age
                }
            `;
            const functionNames = GosuUtils.extractFunctionNames(text);
            expect(functionNames).toEqual(['getName', 'setAge']);
        });

        it('should handle functions with no parameters', () => {
            const text = 'function test() { }';
            const functionNames = GosuUtils.extractFunctionNames(text);
            expect(functionNames).toEqual(['test']);
        });

        it('should handle functions with complex parameter lists', () => {
            const text = 'function complexFunction(param1: String, param2: List<Integer>) { }';
            const functionNames = GosuUtils.extractFunctionNames(text);
            expect(functionNames).toEqual(['complexFunction']);
        });
    });

    describe('isGosuFile', () => {
        it('should recognize .gs files', () => {
            expect(GosuUtils.isGosuFile('MyClass.gs')).toBe(true);
        });

        it('should recognize .gsx files', () => {
            expect(GosuUtils.isGosuFile('Enhancement.gsx')).toBe(true);
        });

        it('should recognize .gst files', () => {
            expect(GosuUtils.isGosuFile('Template.gst')).toBe(true);
        });

        it('should recognize .gsp files', () => {
            expect(GosuUtils.isGosuFile('Program.gsp')).toBe(true);
        });

        it('should reject non-GOSU files', () => {
            expect(GosuUtils.isGosuFile('file.txt')).toBe(false);
            expect(GosuUtils.isGosuFile('script.js')).toBe(false);
            expect(GosuUtils.isGosuFile('style.css')).toBe(false);
        });

        it('should be case insensitive', () => {
            expect(GosuUtils.isGosuFile('MyClass.GS')).toBe(true);
            expect(GosuUtils.isGosuFile('Enhancement.GSX')).toBe(true);
            expect(GosuUtils.isGosuFile('Template.GST')).toBe(true);
            expect(GosuUtils.isGosuFile('Program.GSP')).toBe(true);
        });

        it('should handle files with paths', () => {
            expect(GosuUtils.isGosuFile('/path/to/MyClass.gs')).toBe(true);
            expect(GosuUtils.isGosuFile('src/main/gosu/MyClass.gs')).toBe(true);
        });
    });
});