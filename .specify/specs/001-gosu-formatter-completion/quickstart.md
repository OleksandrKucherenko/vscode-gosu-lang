# Quickstart: Complete Gosu Formatter System

**Feature**: Complete Gosu Formatter System  
**Purpose**: Validate end-to-end functionality of CLI enhancements, logging, hot-reload, and batch operations  
**Prerequisites**: Node.js 16+, VSCode with Gosu extension installed

---

## Setup

### 1. Install Dependencies

```bash
cd /mnt/wsl/workspace/vscode-gosu-lang
npm install
```

**Expected**: Dependencies installed including commander, fast-glob, chokidar

### 2. Build Extension

```bash
npm run build
```

**Expected**: TypeScript compiled, formatter module built successfully

---

## CLI Enhancements

### 3. Format Single File

```bash
# Create test file with bad formatting
cat > /tmp/test.gs << 'EOF'
class   BadFormatting{
function    foo(  ){
return   "test"
}
}
EOF

# Format to stdout (preview)
npx gosu-format /tmp/test.gs
```

**Expected**: Formatted code printed to stdout, original file unchanged

### 4. Format File In-Place

```bash
npx gosu-format --write /tmp/test.gs
cat /tmp/test.gs
```

**Expected**: File modified with proper formatting, "Formatted /tmp/test.gs" logged

### 5. Check Mode (CI Verification)

```bash
# Create directory with mixed formatting
mkdir -p /tmp/gosu-test
cp /tmp/test.gs /tmp/gosu-test/formatted.gs
cat > /tmp/gosu-test/unformatted.gs << 'EOF'
class   NeedsFormatting{
property   Foo:String
}
EOF

# Check formatting status
npx gosu-format --check /tmp/gosu-test/
echo "Exit code: $?"
```

**Expected**: 
- Exit code 1 (files need formatting)
- Lists `unformatted.gs` as needing formatting
- Does not modify files

### 6. Show Configuration

```bash
# Create project config
cat > /tmp/gosu-test/.gosuformatting.json << 'EOF'
{
  "indentSize": 4,
  "maxLineLength": 120
}
EOF

cd /tmp/gosu-test
npx gosu-format --show-config
```

**Expected**: JSON output showing:
```json
{
  "config": {
    "indentSize": 4,
    "maxLineLength": 120,
    ...
  },
  "sources": [
    { "path": "/tmp/gosu-test/.gosuformatting.json", "type": "project" },
    { "path": "<defaults>", "type": "default" }
  ],
  "resolution": "cascade"
}
```

### 7. Glob Pattern Support

```bash
# Format all .gs files recursively
npx gosu-format --write /tmp/gosu-test/**/*.gs
```

**Expected**: Both files formatted, summary shows "2 files processed"

### 8. Batch Operation Summary

```bash
# Create multiple files
for i in {1..5}; do
  echo "class Test$i { }" > /tmp/gosu-test/test$i.gs
done

npx gosu-format --write /tmp/gosu-test/*.gs
```

**Expected**: Summary output:
```
Formatted 5 files in 123ms
  Modified: 5
  Unchanged: 0
  Failed: 0
  Skipped: 0
```

---

## Logging & Observability

### 9. VSCode Output Channel Logging

**Steps**:
1. Open VSCode in `/mnt/wsl/workspace/vscode-gosu-lang`
2. Open a Gosu file (e.g., `gosu/sample.gs`)
3. Open Output panel: View → Output
4. Select "Gosu Language Server" from dropdown
5. Trigger format: Ctrl+Shift+F (or Cmd+Shift+F on macOS)

**Expected Output**:
```
[2025-09-30T19:30:00.123Z] [INFO] [formatter] Formatting gosu/sample.gs
[2025-09-30T19:30:00.165Z] [INFO] [formatter] Formatted gosu/sample.gs (42ms)
```

### 10. Performance Monitoring

**Steps**:
1. Create large file (>1000 LOC)
2. Format the file
3. Check output channel

**Expected**: 
- If <200ms: `[INFO] Formatted file.gs (150ms)`
- If 200-500ms: `[WARN] Formatting took longer than expected: file.gs (350ms)`
- If >500ms: `[ERROR] Performance regression: file.gs (600ms)`

### 11. Error Logging with Details

```bash
# Create file with syntax error
cat > /tmp/syntax-error.gs << 'EOF'
class BrokenClass {
  function test( {
    // Missing closing paren
  }
}
EOF

npx gosu-format /tmp/syntax-error.gs 2>&1
```

**Expected stderr**:
```
[2025-09-30T19:30:00.123Z] [ERROR] [formatter] Syntax error in /tmp/syntax-error.gs:2:18 - Expected ')'
Exit code: 2
```

### 12. Configurable Log Levels

**Steps**:
1. Add to VSCode settings.json:
```json
{
  "gosu.logLevel": "debug"
}
```
2. Format a file
3. Check output channel

**Expected**: Debug-level logs visible:
```
[DEBUG] [formatter] Parsing AST for file.gs
[DEBUG] [formatter] Generating operations (42 nodes)
[DEBUG] [formatter] Rendering document
[INFO] [formatter] Formatted file.gs (42ms)
```

---

## Configuration Hot-Reload

### 13. Modify Config Without Restart

**Steps**:
1. Open VSCode with Gosu project
2. Open `.gosuformatting.json` in editor
3. Change `indentSize` from 2 to 4
4. Save file
5. Check output channel

**Expected**:
```
[2025-09-30T19:30:00.123Z] [INFO] [config-loader] Configuration file changed: .gosuformatting.json
[2025-09-30T19:30:00.456Z] [INFO] [config-loader] Configuration reloaded from /path/to/.gosuformatting.json
```

### 14. Verify Config Applied Immediately

**Steps**:
1. After config reload (step 13)
2. Format a file
3. Verify indentation is now 4 spaces

**Expected**: File formatted with new indentSize, no VSCode restart required

### 15. Invalid Config Handling

**Steps**:
1. Edit `.gosuformatting.json` with syntax error:
```json
{
  "indentSize": 2,
  "invalid": // comment not allowed
}
```
2. Save file
3. Check output channel

**Expected**:
```
[2025-09-30T19:30:00.123Z] [ERROR] [config-loader] Configuration syntax error in .gosuformatting.json:3:15 - Unexpected token
[2025-09-30T19:30:00.124Z] [WARN] [config-loader] Falling back to default configuration
```

---

## Batch Operation Progress

### 16. Progress Feedback in CLI

```bash
# Create 20 files
mkdir -p /tmp/large-batch
for i in {1..20}; do
  echo "class Test$i { function foo() { return $i } }" > /tmp/large-batch/test$i.gs
done

npx gosu-format --write /tmp/large-batch/*.gs
```

**Expected stderr** (real-time updates):
```
Formatting files... [1/20] test1.gs
Formatting files... [5/20] test5.gs
Formatting files... [10/20] test10.gs
Formatting files... [15/20] test15.gs
Formatting files... [20/20] test20.gs

Summary:
  Total: 20 files
  Modified: 20
  Unchanged: 0
  Failed: 0
  Skipped: 0
  Duration: 456ms
```

### 17. Parallel Execution for Large Batches

```bash
# Time sequential vs parallel (batch size threshold is 5)
time npx gosu-format --write /tmp/large-batch/test{1..4}.gs  # Sequential
time npx gosu-format --write /tmp/large-batch/test{1..10}.gs # Parallel
```

**Expected**: 
- 4 files: Sequential execution
- 10 files: Parallel execution (faster, ~2-3x speedup on multi-core)

### 18. VSCode Progress Notification

**Steps**:
1. Open VSCode
2. Select 10+ Gosu files in explorer
3. Right-click → Format Document
4. Observe progress notification

**Expected**: VSCode shows progress notification:
```
Formatting Gosu files... 50% (5/10)
```

---

## Error Handling & Edge Cases

### 19. Read-Only File Handling

```bash
# Create read-only file
echo "class ReadOnly { }" > /tmp/readonly.gs
chmod 444 /tmp/readonly.gs

npx gosu-format --write /tmp/readonly.gs /tmp/test.gs
```

**Expected**:
```
[WARN] Skipped /tmp/readonly.gs (read-only)
Formatted /tmp/test.gs

Summary:
  Total: 2 files
  Modified: 1
  Unchanged: 0
  Failed: 0
  Skipped: 1 (see warnings above)
```

### 20. File Size Limit

```bash
# Create file >10k LOC
seq 1 15000 | awk '{print "var x" $1 " = " $1}' > /tmp/huge.gs

npx gosu-format /tmp/huge.gs
echo "Exit code: $?"
```

**Expected**:
```
[ERROR] File too large: /tmp/huge.gs (15000 LOC, max 10000)
Exit code: 2
```

---

## Validation Checklist

**CLI Enhancements**:
- [x] Single file formatting works
- [x] `--write` modifies files in-place
- [x] `--check` mode verifies without modifying
- [x] `--show-config` displays resolved configuration
- [x] Glob patterns expand correctly
- [x] Batch operations show summary
- [x] Exit codes correct (0, 1, 2, 3)

**Logging & Observability**:
- [x] Logs appear in VSCode output channel
- [x] Timestamps in ISO 8601 format
- [x] Execution times logged
- [x] Error details include file/line/column
- [x] Log levels configurable
- [x] Performance warnings for slow operations

**Configuration Hot-Reload**:
- [x] Config changes detected within 500ms
- [x] Reload logged to output channel
- [x] New config applied immediately
- [x] Invalid config handled gracefully

**Batch Operation Progress**:
- [x] Progress updates in CLI
- [x] Parallel execution for ≥5 files
- [x] VSCode progress notifications
- [x] Summary statistics accurate

**Error Handling**:
- [x] Read-only files skipped with warning
- [x] Large files rejected with clear message
- [x] Syntax errors reported with location

---

## Cleanup

```bash
rm -rf /tmp/test.gs /tmp/gosu-test /tmp/syntax-error.gs /tmp/large-batch /tmp/readonly.gs /tmp/huge.gs
```

---

**Quickstart Complete**: All features validated end-to-end. Ready for production use.
