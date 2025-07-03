"use strict";
/**
 * Utility functions for GOSU language support
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GosuUtils = void 0;
class GosuUtils {
    /**
     * Check if a string contains GOSU keywords
     */
    static containsGosuKeywords(text) {
        const keywords = [
            'class', 'interface', 'function', 'property', 'var', 'construct',
            'implements', 'extends', 'enhancement', 'delegate', 'uses', 'package'
        ];
        return keywords.some(keyword => new RegExp(`\\b${keyword}\\b`).test(text));
    }
    /**
     * Extract class names from GOSU code
     */
    static extractClassNames(text) {
        const classRegex = /\bclass\s+([A-Z][a-zA-Z0-9_]*)/g;
        const matches = [];
        let match;
        while ((match = classRegex.exec(text)) !== null) {
            matches.push(match[1]);
        }
        return matches;
    }
    /**
     * Extract function names from GOSU code
     */
    static extractFunctionNames(text) {
        const functionRegex = /\bfunction\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g;
        const matches = [];
        let match;
        while ((match = functionRegex.exec(text)) !== null) {
            matches.push(match[1]);
        }
        return matches;
    }
    /**
     * Check if file extension is a GOSU file
     */
    static isGosuFile(fileName) {
        const gosuExtensions = ['.gs', '.gsx', '.gst', '.gsp'];
        return gosuExtensions.some(ext => fileName.toLowerCase().endsWith(ext));
    }
}
exports.GosuUtils = GosuUtils;
//# sourceMappingURL=gosuUtils.js.map