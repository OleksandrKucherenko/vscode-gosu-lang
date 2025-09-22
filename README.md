# Gosu Language Support for VSCode

This extension provides language support for the [Gosu programming language](https://gosu-lang.github.io/) in Visual Studio Code.

## Features

- **Code Completion**: Basic auto-completion for Gosu keywords, types, and members.
- **Code Formatting**: Format your Gosu code to maintain a consistent style.
- **Syntax Highlighting**: Full-featured syntax highlighting for `.gs`, `.gsx`, `.gst`, and `.gsp` files.
- **Diagnostics**: Real-time parsing and diagnostics to catch errors as you type.
- **Go to Definition**: Navigate to the definition of a symbol.
- **Hover Information**: Display information about symbols on hover.
- **Find References**: Find all references to a symbol.

## Formatting

This extension provides formatting for Gosu files. You can format a file by right-clicking on it and selecting "Format Document", or by using the `editor.formatOnSave` setting in VS Code.

### Configuration

The formatter can be configured in your VS Code settings. The following options are available:

- `gosu.format.indentSize`: The number of spaces to use for indentation.
- `gosu.format.strictMode`: If `true`, the formatter will fail on syntax errors. If `false`, it will attempt to format around them.

The formatter can also be configured using a `.gosuformatting.json` or `.gosuformatting.jsonc` file in the root of your project.

### CLI

A command-line interface is available for formatting files outside of VS Code. To use it, run the following command:

```bash
npx @gosu-lsp/formatter [options] [files...]
```

**Options:**

- `--write`: Write the formatted output back to the file.

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