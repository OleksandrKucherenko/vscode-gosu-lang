"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
function activate(context) {
    console.log('GOSU Language Support extension is now active!');
    // Register any additional language features here
    // For example, you could add IntelliSense, hover providers, etc.
    // Note: registerDocumentSelector doesn't exist, but the language is already registered
    // via package.json contributes.languages section, so no additional registration needed
    // If you want to add language features, you would use specific providers like:
    // vscode.languages.registerCompletionItemProvider, registerHoverProvider, etc.
}
exports.activate = activate;
function deactivate() {
    // Clean up any resources when the extension is deactivated
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map