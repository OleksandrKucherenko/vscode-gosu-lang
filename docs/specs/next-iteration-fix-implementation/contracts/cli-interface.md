# CLI Interface Contract

**Feature**: Complete Gosu Language Formatter System  
**Module**: `modules/formatter/src/cli.ts`

## Interface Definition

```typescript
export interface CLIFormatter {
  /**
   * Parse and validate command-line arguments
   * @param args - Raw command-line arguments (from process.argv.slice(2))
   * @returns Parsed and validated CLI options
   * @throws CLIError if arguments are invalid or mutually exclusive
   */
  parseArgs(args: string[]): CLIOptions;
  
  /**
   * Format files according to CLI options
   * @param options - Validated CLI options
   * @returns Array of format results, one per file
   * @throws FormatterError if formatting fails critically
   */
  formatFiles(options: CLIOptions): Promise<FormatResult[]>;
  
  /**
   * Display resolved configuration and source attribution
   * @param configPath - Optional custom config file path
   * @returns Configuration resolution with source information
   * @throws ConfigError if configuration is invalid
   */
  showConfig(configPath?: string): Promise<ConfigResolution>;
  
  /**
   * Check files for formatting without modifying them
   * @param files - File paths or glob patterns
   * @returns Check results indicating which files need formatting
   */
  checkFiles(files: string[]): Promise<CheckResult>;
  
  /**
   * Determine appropriate exit code based on operation results
   * @param results - Format or check results
   * @returns Exit code (0, 1, 2, or 3)
   */
  getExitCode(results: FormatResult[] | CheckResult): number;
  
  /**
   * Display help message and exit
   */
  showHelp(): void;
  
  /**
   * Display version and exit
   */
  showVersion(): void;
}
```

## Supporting Types

```typescript
export interface CLIOptions {
  files: string[];
  write: boolean;
  check: boolean;
  showConfig: boolean;
  config?: string;
  help: boolean;
  version: boolean;
  logLevel?: LogLevel;
}

export interface CheckResult {
  files: string[];
  needsFormatting: string[];
  alreadyFormatted: string[];
  failed: string[];
  summary: FormatSummary;
}

export class CLIError extends Error {
  constructor(message: string, public exitCode: number) {
    super(message);
    this.name = 'CLIError';
  }
}
```

## Contract Tests

### Test: parseArgs with valid flags

**Given**: CLI arguments `["--write", "src/**/*.gs"]`  
**When**: `parseArgs()` is called  
**Then**: Returns `CLIOptions` with `write: true`, `files: ["src/**/*.gs"]`

### Test: parseArgs with mutually exclusive flags

**Given**: CLI arguments `["--write", "--check", "file.gs"]`  
**When**: `parseArgs()` is called  
**Then**: Throws `CLIError` with message about mutual exclusion

### Test: formatFiles writes to disk

**Given**: `CLIOptions` with `write: true`, one file needs formatting  
**When**: `formatFiles()` is called  
**Then**: 
- File is modified on disk
- Returns `FormatResult[]` with `status: 'formatted'`
- Logs INFO entry with file path and duration

### Test: formatFiles outputs to stdout

**Given**: `CLIOptions` with `write: false`, one file needs formatting  
**When**: `formatFiles()` is called  
**Then**:
- File is NOT modified on disk
- Formatted content written to stdout
- Logs to stderr only

### Test: checkFiles returns correct status

**Given**: Mix of formatted, unformatted, and invalid files  
**When**: `checkFiles()` is called  
**Then**:
- `needsFormatting` contains unformatted files
- `alreadyFormatted` contains formatted files
- `failed` contains files with syntax errors
- No files modified

### Test: showConfig displays resolution

**Given**: Project with `.gosuformatting.json`  
**When**: `showConfig()` is called  
**Then**:
- Returns `ConfigResolution` with project config
- `sources` array includes project file path
- Output is valid JSON

### Test: getExitCode returns correct codes

**Given**: Various format result scenarios  
**When**: `getExitCode()` is called  
**Then**:
- All formatted → exit code 0
- Check mode, needs formatting → exit code 1
- Syntax errors present → exit code 2
- Config error → exit code 3

## Exit Code Contract

| Exit Code | Meaning | Scenario |
|-----------|---------|----------|
| 0 | Success | All files formatted OR all files already formatted (--check) |
| 1 | Format needed | --check found unformatted files OR --write succeeded |
| 2 | Syntax error | One or more files have parse errors |
| 3 | Config error | Configuration invalid or missing |
| 130 | Interrupted | User pressed Ctrl+C |

## CLI Flag Combinations

### Valid Combinations

| Flags | Behavior |
|-------|----------|
| `--write file.gs` | Format file in-place |
| `--check file.gs` | Verify formatting, exit 1 if changes needed |
| `file.gs` | Output formatted code to stdout |
| `--show-config` | Display config and exit |
| `--config custom.json file.gs` | Use custom config |
| `--help` | Show help and exit |
| `--version` | Show version and exit |

### Invalid Combinations (Must Error)

| Flags | Error |
|-------|-------|
| `--write --check` | Mutually exclusive |
| `--show-config file.gs` | showConfig takes no files |
| `--write` (no files) | No files specified |

## Output Format Contract

### Stdout (formatted code or --show-config JSON)
```
// Formatted code when no --write flag
class Example {
  function test() {
    // ...
  }
}
```

or

```json
{
  "config": {
    "indentSize": 2,
    "maxLineLength": 100
  },
  "sources": [
    { "path": "/project/.gosuformatting.json", "type": "project" }
  ]
}
```

### Stderr (progress and logs)
```
[2025-09-30 16:38:45] [INFO] Formatting 10 files...
[2025-09-30 16:38:45] [INFO] Formatted file1.gs (42ms)
[2025-09-30 16:38:46] [ERROR] Syntax error in file2.gs:15:4
[2025-09-30 16:38:46] [INFO] Summary: 8 formatted, 1 unchanged, 1 failed
```

## Performance Requirements

- Argument parsing: <1ms
- Glob expansion: <50ms for typical project (1000 files)
- Help/version display: <10ms
- showConfig: <100ms

## Error Messages

All error messages MUST:
- Be actionable (tell user how to fix)
- Include relevant context (file path, line number)
- Use consistent format: `ERROR: {message}`

**Examples:**
```
ERROR: Files not found matching pattern: 'src/**/*.gs'
ERROR: Flags --write and --check are mutually exclusive
ERROR: Configuration file not found: custom.json
ERROR: Invalid configuration: indentSize must be positive integer
```

---

**Contract Status**: Ready for implementation and testing
