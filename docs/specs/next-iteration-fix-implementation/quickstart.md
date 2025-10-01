# Quickstart: Gosu Formatter Tooling & Observability

**Feature**: Complete Gosu Language Formatter System  
**Purpose**: Manual validation scenarios for implemented features  
**Estimated Time**: 15 minutes

## Prerequisites

- VSCode installed with Gosu extension
- Node.js 18+ installed
- Gosu project with `.gs` files
- `@gosu-lsp/formatter` package built

## Test Scenarios

### 1. CLI Check Mode (FR-013)

**Objective**: Verify `--check` flag detects unformatted files without modification

```bash
# Navigate to test workspace
cd test-workspace

# Create an unformatted test file
cat > test-unformatted.gs << 'EOF'
class   Unformatted{
function test()  {
var x=1+2
}
}
EOF

# Run check mode
npx @gosu-lsp/formatter --check test-unformatted.gs

# Expected Results:
# - Exit code: 1 (changes needed)
# - Stderr shows: "File needs formatting: test-unformatted.gs"
# - File NOT modified on disk
# - Summary: "1 file needs formatting"

# Verify file unchanged
cat test-unformatted.gs
# Should still show original unformatted code
```

**Success Criteria**:
- ✅ Exit code is 1
- ✅ File unchanged after check
- ✅ Clear message about which files need formatting

### 2. CLI Show-Config Flag (FR-017)

**Objective**: Verify `--show-config` displays resolved configuration with sources

```bash
# Create a custom config file
cat > .gosuformatting.json << 'EOF'
{
  "indentSize": 4,
  "maxLineLength": 120
}
EOF

# Run show-config
npx @gosu-lsp/formatter --show-config

# Expected Results:
# - Exit code: 0
# - JSON output to stdout showing:
#   * config.indentSize: 4
#   * config.maxLineLength: 120
#   * sources array with .gosuformatting.json path
#   * sources array with <defaults> for other settings

# Expected JSON structure:
# {
#   "config": {
#     "indentSize": 4,
#     "maxLineLength": 120,
#     ...
#   },
#   "sources": [
#     { "path": "/path/.gosuformatting.json", "type": "project" },
#     { "path": "<defaults>", "type": "default" }
#   ]
# }
```

**Success Criteria**:
- ✅ Valid JSON output
- ✅ Shows custom indentSize (4) from project config
- ✅ Shows source paths clearly
- ✅ Exit code 0

### 3. Glob Pattern Support (FR-011)

**Objective**: Verify CLI accepts glob patterns for batch formatting

```bash
# Create multiple test files
mkdir -p src/utils
echo "class Test1{}" > src/Test1.gs
echo "class Test2{}" > src/Test2.gs
echo "class Utils{}" > src/utils/Utils.gs

# Format all .gs files recursively
npx @gosu-lsp/formatter --write 'src/**/*.gs'

# Expected Results:
# - Exit code: 0
# - Summary showing 3 files formatted
# - All files modified with proper formatting
```

**Success Criteria**:
- ✅ Glob pattern expands correctly
- ✅ All matching files formatted
- ✅ Summary shows correct file count

### 4. VSCode Logging Integration (FR-018, FR-019)

**Objective**: Verify formatting operations log to VSCode output channel

**Steps**:
1. Open VSCode
2. Open test workspace
3. Open "Output" panel (View → Output)
4. Select "Gosu Language Server" from dropdown
5. Open a `.gs` file with formatting issues
6. Press `Ctrl+Shift+F` (Format Document)

**Expected Output in Channel**:
```
[2025-09-30 16:38:45.123] [INFO] [formatter] Formatting started for example.gs
[2025-09-30 16:38:45.165] [INFO] [formatter] Formatted example.gs (42ms)
```

**With Syntax Error**:
1. Create file with syntax error:
```gosu
class Broken {
  function test( {  // Missing closing paren
    var x = 1
  }
}
```
2. Try to format
3. Check output channel

**Expected**:
```
[2025-09-30 16:38:45.200] [ERROR] [formatter] Syntax error in Broken.gs:2:17 - Expected ')'
```

**Success Criteria**:
- ✅ Timestamps present
- ✅ Log level shown [INFO]/[ERROR]
- ✅ Duration logged for successful format
- ✅ Specific error location logged for failures

### 5. Configuration Hot-Reload (FR-029)

**Objective**: Verify configuration changes apply without VSCode restart

**Steps**:
1. Open VSCode with Gosu project
2. Note current indentSize (check formatted file or --show-config)
3. Modify `.gosuformatting.json`:
```json
{
  "indentSize": 4
}
```
4. Save config file
5. Wait 1 second (debounce)
6. Check output channel for reload message
7. Format a file
8. Verify indentSize=4 applied

**Expected Output Channel**:
```
[2025-09-30 16:38:46.100] [INFO] [config-loader] Configuration reloaded from /workspace/.gosuformatting.json
```

**Success Criteria**:
- ✅ Reload message logged within 1 second
- ✅ New configuration applied immediately
- ✅ No VSCode restart needed
- ✅ Formatting uses new indentSize

### 6. Exit Code Conventions (FR-015)

**Objective**: Verify CLI returns correct exit codes for each scenario

```bash
# Test 1: Success (all formatted)
npx @gosu-lsp/formatter --write formatted-file.gs
echo "Exit code: $?"
# Expected: 0

# Test 2: Check mode, changes needed
npx @gosu-lsp/formatter --check unformatted-file.gs
echo "Exit code: $?"
# Expected: 1

# Test 3: Syntax error
npx @gosu-lsp/formatter --write file-with-syntax-error.gs
echo "Exit code: $?"
# Expected: 2

# Test 4: Config error
npx @gosu-lsp/formatter --config nonexistent.json file.gs
echo "Exit code: $?"
# Expected: 3
```

**Success Criteria**:
- ✅ Exit code 0 for success
- ✅ Exit code 1 for format needed/applied
- ✅ Exit code 2 for syntax errors
- ✅ Exit code 3 for config errors

### 7. Performance Logging (FR-022)

**Objective**: Verify performance metrics logged for slow operations

**Steps**:
1. Create a large file (>5000 LOC) or artificially slow formatter
2. Format the file
3. Check output channel

**Expected with Normal Performance**:
```
[2025-09-30 16:38:45] [INFO] [formatter] Formatted large-file.gs (180ms)
```

**Expected with Slow Performance** (>200ms threshold):
```
[2025-09-30 16:38:45] [WARN] [formatter] Formatting took 450ms (threshold: 200ms) - large-file.gs
```

**Success Criteria**:
- ✅ Duration always logged
- ✅ WARN emitted if >200ms
- ✅ File path included in warning

### 8. Progress Reporting (FR-038)

**Objective**: Verify progress shown for batch operations

**Steps**:
1. Create 20+ test files
2. Run batch format in CLI:
```bash
npx @gosu-lsp/formatter --write 'test-files/**/*.gs'
```

**Expected Stderr Output**:
```
Formatting 20 files...
Formatting test1.gs (1/20)
Formatting test2.gs (2/20)
...
Formatting test20.gs (20/20)
Summary: 18 formatted, 2 unchanged, 0 failed (2.4s)
```

**Success Criteria**:
- ✅ Progress counter shown (n/total)
- ✅ Summary statistics at end
- ✅ Total duration displayed

## Validation Checklist

After completing all scenarios, verify:

- [ ] CLI check mode works correctly (FR-013)
- [ ] CLI show-config displays resolution (FR-017)
- [ ] Glob patterns supported (FR-011)
- [ ] Exit codes match specification (FR-015)
- [ ] VSCode output channel receives logs (FR-018)
- [ ] Syntax errors logged with location (FR-019)
- [ ] Configuration hot-reload works (FR-029)
- [ ] Performance warnings logged (FR-022)
- [ ] Progress reported for batch ops (FR-038)

## Troubleshooting

### Output channel not showing logs

**Solution**: 
- Verify "Gosu Language Server" selected in dropdown
- Check VSCode settings: `gosu.logLevel` should be 'info' or lower
- Restart language server: `Ctrl+Shift+P` → "Restart Language Server"

### Config hot-reload not triggering

**Solution**:
- Wait full 300ms debounce period
- Check file watcher is active (log on startup)
- Verify config file has valid JSON syntax
- Check output channel for watcher errors

### Glob patterns not matching files

**Solution**:
- Use single quotes to prevent shell expansion: `'src/**/*.gs'`
- Check working directory is correct
- Test glob with: `ls src/**/*.gs` first

## Performance Expectations

- Format single file (<1000 LOC): <200ms
- Format batch (20 files): <5 seconds
- Config reload: <100ms
- Show-config: <50ms

---

**Quickstart Status**: Ready for manual validation  
**Estimated Completion Time**: 15 minutes  
**Prerequisites Check**: ✅ All scenarios documented
