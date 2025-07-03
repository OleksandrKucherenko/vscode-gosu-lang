# GOSU Language Support for VSCode

This extension provides syntax highlighting and language support for the GOSU programming language in Visual Studio Code.

## Features

- **Syntax Highlighting**: Full syntax highlighting for GOSU language constructs including:
  - Keywords (class, interface, function, property, etc.)
  - Data types and primitives
  - Comments (single-line and multi-line)
  - Strings with interpolation support
  - Numbers (decimal, hex, octal)
  - Operators and punctuation
  - Annotations
  - Enhancements and delegates

- **Language Configuration**: 
  - Auto-closing brackets and quotes
  - Comment toggling
  - Indentation rules
  - Code folding

## Supported File Extensions

- `.gs` - GOSU class files
- `.gsx` - GOSU enhancement files
- `.gst` - GOSU template files
- `.gsp` - GOSU program files

## Development Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)

### Building the Extension

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd gosu-language-support
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Compile the TypeScript source**:
   ```bash
   npm run compile
   ```

4. **Run tests** (optional):
   ```bash
   npm test
   ```

### Installing Locally in VSCode

#### Method 1: Using VSCode Extension Development Host

1. **Open the project in VSCode**:
   ```bash
   code .
   ```

2. **Press F5** or go to **Run > Start Debugging**
   - This will open a new VSCode window with the extension loaded
   - The extension will be active in this development window
   - Any changes you make will require reloading the window

#### Method 2: Package and Install as VSIX

1. **Install the VSCode Extension Manager** (if not already installed):
   ```bash
   npm install -g @vscode/vsce
   ```

2. **Package the extension**:
   ```bash
   vsce package
   ```
   This creates a `.vsix` file (e.g., `gosu-language-support-1.0.0.vsix`)

3. **Install the packaged extension**:
   ```bash
   code --install-extension gosu-language-support-1.0.0.vsix
   ```

   Or manually in VSCode:
   - Open VSCode
   - Go to **Extensions** view (`Ctrl+Shift+X`)
   - Click the **...** menu in the Extensions view
   - Select **Install from VSIX...**
   - Choose the generated `.vsix` file

4. **Reload VSCode** to activate the extension

#### Method 3: Symlink to Extensions Directory

1. **Find your VSCode extensions directory**:
   - **Windows**: `%USERPROFILE%\.vscode\extensions`
   - **macOS**: `~/.vscode/extensions`
   - **Linux**: `~/.vscode/extensions`

2. **Create a symlink** (after building):
   ```bash
   # Windows (run as Administrator)
   mklink /D "%USERPROFILE%\.vscode\extensions\gosu-language-support" "C:\path\to\your\project"
   
   # macOS/Linux
   ln -s /path/to/your/project ~/.vscode/extensions/gosu-language-support
   ```

3. **Reload VSCode**

## Development Commands

- **Compile**: `npm run compile` - Compile TypeScript to JavaScript
- **Watch**: `npm run watch` - Compile in watch mode for development
- **Test**: `npm test` - Run all tests with Vitest
- **Test Watch**: `npm run test:watch` - Run tests in watch mode
- **Test Coverage**: `npm run test:coverage` - Run tests with coverage report
- **Lint**: `npm run lint` - Run ESLint on source files
- **Package**: `vsce package` - Create a .vsix package file

## Project Structure

```
gosu-language-support/
├── src/                          # TypeScript source files
│   ├── extension.ts             # Main extension entry point
│   ├── extension.test.ts        # Extension tests
│   └── utils/
│       ├── gosuUtils.ts         # GOSU utility functions
│       └── gosuUtils.test.ts    # Utility tests
├── syntaxes/
│   └── gosu.tmLanguage.json     # TextMate grammar for syntax highlighting
├── examples/                     # Example GOSU files
│   ├── HelloWorld.gs
│   ├── Enhancement.gsx
│   └── Interface.gs
├── out/                         # Compiled JavaScript (generated)
├── language-configuration.json  # Language configuration
├── package.json                 # Extension manifest
└── README.md
```

## Testing

The extension uses [Vitest](https://vitest.dev/) for testing:

- **Unit tests**: Test utility functions and core logic
- **Extension tests**: Test extension activation and VSCode integration
- **Mocked VSCode APIs**: Tests run without requiring VSCode environment

Run tests:
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Debugging

1. **Open the project in VSCode**
2. **Set breakpoints** in your TypeScript source files
3. **Press F5** to start debugging
4. **Use the Extension Development Host** window to test your extension
5. **Debug output** appears in the original VSCode window's Debug Console

## Publishing

To publish to the VSCode Marketplace:

1. **Create a publisher account** at [Visual Studio Marketplace](https://marketplace.visualstudio.com/manage)

2. **Update package.json** with your publisher name:
   ```json
   {
     "publisher": "your-publisher-name"
   }
   ```

3. **Create a Personal Access Token** in Azure DevOps

4. **Login with vsce**:
   ```bash
   vsce login your-publisher-name
   ```

5. **Publish**:
   ```bash
   vsce publish
   ```

## Troubleshooting

### Extension Not Loading
- Ensure you've compiled the TypeScript: `npm run compile`
- Check the Developer Console for errors: **Help > Toggle Developer Tools**
- Verify the extension is installed: **Extensions > Installed**

### Syntax Highlighting Not Working
- Check that GOSU files have the correct extensions (`.gs`, `.gsx`, `.gst`, `.gsp`)
- Verify the language is detected: Check the language indicator in the status bar
- Reload VSCode window: **Developer > Reload Window**

### Build Errors
- Ensure Node.js version 16 or higher is installed
- Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Check TypeScript compilation: `npm run compile`

## Examples

The extension includes example GOSU files in the `examples/` directory:
- `HelloWorld.gs` - Basic class and property examples
- `Enhancement.gsx` - GOSU enhancement features
- `Interface.gs` - Interface and inheritance examples

## GOSU Language Resources

- [GOSU Language Grammar](https://gosu-lang.github.io/grammar.html)
- [GOSU Documentation](https://gosu-lang.github.io/docs.html)
- [GOSU Language Website](https://gosu-lang.github.io/)

## Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/your-feature`
3. **Make your changes**
4. **Add tests** for new functionality
5. **Run tests**: `npm test`
6. **Commit your changes**: `git commit -am 'Add some feature'`
7. **Push to the branch**: `git push origin feature/your-feature`
8. **Submit a pull request**

## License

This extension is licensed under the MIT License. See the LICENSE file for details.