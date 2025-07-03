"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
// Mock vscode module since we're testing outside of VSCode environment
const mockVscode = {
    ExtensionContext: class {
    },
    window: {
        showInformationMessage: vitest_1.vi.fn()
    },
    languages: {
        registerCompletionItemProvider: vitest_1.vi.fn(),
        registerHoverProvider: vitest_1.vi.fn()
    }
};
vitest_1.vi.mock('vscode', () => mockVscode);
// Import after mocking
const extension_1 = require("./extension");
(0, vitest_1.describe)('Extension', () => {
    (0, vitest_1.it)('should activate without errors', () => {
        const mockContext = new mockVscode.ExtensionContext();
        (0, vitest_1.expect)(() => {
            (0, extension_1.activate)(mockContext);
        }).not.toThrow();
    });
    (0, vitest_1.it)('should deactivate without errors', () => {
        (0, vitest_1.expect)(() => {
            (0, extension_1.deactivate)();
        }).not.toThrow();
    });
    (0, vitest_1.it)('should log activation message', () => {
        const consoleSpy = vitest_1.vi.spyOn(console, 'log');
        const mockContext = new mockVscode.ExtensionContext();
        (0, extension_1.activate)(mockContext);
        (0, vitest_1.expect)(consoleSpy).toHaveBeenCalledWith('GOSU Language Support extension is now active!');
        consoleSpy.mockRestore();
    });
});
//# sourceMappingURL=extension.test.js.map