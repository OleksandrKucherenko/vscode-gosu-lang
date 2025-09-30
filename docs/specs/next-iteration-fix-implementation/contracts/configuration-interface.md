# Configuration Interface Contract

**Feature**: Complete Gosu Language Formatter System  
**Module**: `modules/formatter/src/config-loader.ts`

## Interface Definition

```typescript
export interface ConfigurationManager {
  /**
   * Load and resolve configuration using cascade strategy
   * @param workspaceRoot - Root directory of workspace/project
   * @param explicitPath - Optional path to specific config file
   * @returns Resolved configuration with source attribution
   * @throws ConfigError if configuration is invalid
   */
  loadConfig(workspaceRoot: string, explicitPath?: string): Promise<ConfigResolution>;
  
  /**
   * Watch configuration files for changes and trigger callback
   * @param workspaceRoot - Root directory to watch
   * @param callback - Function called when config changes
   * @returns Disposable to stop watching
   */
  watchConfig(
    workspaceRoot: string, 
    callback: (config: ConfigResolution) => void
  ): Disposable;
  
  /**
   * Stop all file watchers
   */
  unwatchConfig(): void;
  
  /**
   * Validate configuration object against schema
   * @param config - Configuration to validate
   * @returns Validation result with errors/warnings
   */
  validateConfig(config: unknown): ValidationResult;
  
  /**
   * Display resolved configuration in human-readable format
   * @param resolution - Configuration resolution to display
   * @param format - Output format ('json' or 'table')
   * @returns Formatted string
   */
  displayConfig(resolution: ConfigResolution, format?: 'json' | 'table'): string;
  
  /**
   * Get default configuration
   * @returns Default FormattingConfiguration
   */
  getDefaults(): FormattingConfiguration;
}
```

## Supporting Types

```typescript
export interface ConfigResolution {
  config: FormattingConfiguration;
  sources: ConfigSource[];
  resolution: 'cascade' | 'explicit' | 'default';
  errors: ValidationError[];
}

export interface ConfigSource {
  path: string;
  type: 'default' | 'user' | 'workspace' | 'project';
  loadedAt: Date;
  values: Partial<FormattingConfiguration>;
}

export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
  warnings: ValidationWarning[];
}

export interface ValidationError {
  path: string;
  message: string;
  value?: unknown;
}

export interface ValidationWarning {
  path: string;
  message: string;
  recommendation?: string;
}

export interface Disposable {
  dispose(): void;
}
```

## Contract Tests

### Test: Cascade resolution order

**Given**: Default config + workspace config + project config  
**When**: `loadConfig()` is called  
**Then**: 
- Project config values override workspace
- Workspace values override defaults
- `sources` array ordered by precedence

### Test: Explicit config path

**Given**: Explicit path to custom config file  
**When**: `loadConfig(root, customPath)` is called  
**Then**:
- Only custom config loaded (no cascade)
- `resolution` is 'explicit'
- `sources` contains only custom config

### Test: Missing config files

**Given**: No config files exist  
**When**: `loadConfig()` is called  
**Then**:
- Returns default configuration
- `resolution` is 'default'
- `sources` contains only "<defaults>"

### Test: Invalid configuration

**Given**: Config file with invalid JSON  
**When**: `loadConfig()` is called  
**Then**:
- Throws `ConfigError` with specific line/column
- Error message indicates which file is invalid

### Test: Validation warnings

**Given**: Config with deprecated option  
**When**: `validateConfig()` is called  
**Then**:
- `valid` is true (warnings don't fail validation)
- `warnings` array contains deprecation notice
- Recommendation provided

### Test: File watcher triggers reload

**Given**: Watcher established on project config  
**When**: Config file modified and saved  
**Then**:
- Callback invoked after 300ms debounce
- New `ConfigResolution` passed to callback
- Log entry emitted: "Configuration reloaded from {path}"

### Test: Multiple rapid changes debounced

**Given**: Watcher established  
**When**: Config file modified 3 times within 200ms  
**Then**: Callback invoked only once (300ms after last change)

### Test: Watch cleanup on dispose

**Given**: Active watcher  
**When**: `dispose()` called  
**Then**: 
- File system watcher closed
- No further callbacks triggered
- Resources cleaned up

## Configuration Cascade Strategy

### Precedence Order (highest to lowest)

1. **Explicit** (`--config` flag) - Complete override
2. **Project** (`.gosuformatting.json{c,5}` in workspace root)
3. **Workspace** (VSCode workspace settings)
4. **User** (VSCode user settings)
5. **Default** (hardcoded defaults)

### Merge Strategy

```typescript
// Pseudo-code for cascade
function cascade(sources: ConfigSource[]): FormattingConfiguration {
  let config = getDefaults();
  for (const source of sources.reverse()) { // lowest to highest precedence
    config = { ...config, ...source.values };
  }
  return config;
}
```

## Configuration File Discovery

### Search Paths (in order)

1. `${workspaceRoot}/.gosuformatting.json5`
2. `${workspaceRoot}/.gosuformatting.jsonc`
3. `${workspaceRoot}/.gosuformatting.json`
4. VSCode settings: `gosu.format.*`

### File Format Support

| Format | Parser | Comments Allowed | Trailing Commas |
|--------|--------|------------------|-----------------|
| `.json` | JSON.parse | ❌ | ❌ |
| `.jsonc` | json5 | ✅ | ✅ |
| `.json5` | json5 | ✅ | ✅ |

## Validation Rules

### Required Fields
None (all fields have defaults)

### Field Constraints

| Field | Type | Constraint | Default |
|-------|------|------------|---------|
| `indentSize` | number | 1 ≤ value ≤ 8 | 2 |
| `indentStyle` | enum | 'spaces' or 'tabs' | 'spaces' |
| `maxLineLength` | number | 40 ≤ value ≤ 200 | 100 |
| `braceStyle` | enum | 'attached', 'detached', 'stroustrup' | 'attached' |
| `strictMode` | boolean | - | false |

### Common Validation Errors

```
ERROR: indentSize must be between 1 and 8 (got 0)
ERROR: braceStyle must be one of: attached, detached, stroustrup (got 'allman')
ERROR: maxLineLength must be between 40 and 200 (got 20)
```

## Display Format Contract

### JSON Format (--show-config)

```json
{
  "config": {
    "indentSize": 2,
    "indentStyle": "spaces",
    "maxLineLength": 100,
    "braceStyle": "attached",
    "strictMode": false
  },
  "sources": [
    {
      "path": "/workspace/.gosuformatting.json",
      "type": "project",
      "loadedAt": "2025-09-30T14:38:45.123Z",
      "values": {
        "indentSize": 2,
        "maxLineLength": 100
      }
    },
    {
      "path": "<defaults>",
      "type": "default",
      "loadedAt": "2025-09-30T14:38:45.100Z",
      "values": {
        "indentStyle": "spaces",
        "braceStyle": "attached",
        "strictMode": false
      }
    }
  ],
  "resolution": "cascade"
}
```

### Table Format (human-readable)

```
Gosu Formatter Configuration
=============================

Setting          Value      Source
---------------- ---------- -----------------------------------------
indentSize       2          /workspace/.gosuformatting.json
indentStyle      spaces     <defaults>
maxLineLength    100        /workspace/.gosuformatting.json
braceStyle       attached   <defaults>
strictMode       false      <defaults>

Configuration Sources (in order of precedence):
  1. /workspace/.gosuformatting.json (project)
  2. <defaults> (default)

Resolution Strategy: cascade
```

## Hot-Reload Behavior

### Debounce Strategy

- **Delay**: 300ms after last file change
- **Reason**: Prevents multiple reloads during editor save (some editors write twice)
- **Cancellation**: If new change detected within 300ms, reset timer

### Reload Flow

```
File Change Detected
  ↓
Start/Reset Debounce Timer (300ms)
  ↓
Timer Expires
  ↓
Load Configuration (with validation)
  ↓
If Valid:
  - Update cached config
  - Invoke callback with new ConfigResolution
  - Log: "Configuration reloaded from {path}"
If Invalid:
  - Keep existing config
  - Log ERROR with validation details
  - Do NOT invoke callback
```

### Error Handling

- **Parse Error**: Log error, keep previous config, emit warning notification
- **Validation Error**: Log error, keep previous config, show which field is invalid
- **File Deleted**: Revert to cascade without project config, log INFO

## Performance Requirements

- Configuration loading: <50ms
- Validation: <10ms
- File watcher setup: <20ms
- Debounce overhead: 300ms (by design)

## Thread Safety

- Configuration cache protected by mutex (async operations)
- File watchers use event-driven callbacks (no polling)
- Callback invocation serialized (no concurrent reloads)

---

**Contract Status**: Ready for implementation and testing
