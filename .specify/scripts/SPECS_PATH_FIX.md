# Specs Path Fix - 2025-09-30

## Problem

Scripts in `.specify/scripts/bash/` were hardcoded to look for specs in `$REPO_ROOT/specs/` but the actual location is `$REPO_ROOT/.specify/specs/`.

### Root Cause

- **Line 84 in common.sh**: `get_feature_dir() { echo "$1/specs/$2"; }`
- **Line 31 in common.sh**: `local specs_dir="$repo_root/specs"`

Both were hardcoded to use `specs/` instead of `.specify/specs/`.

## Solution Applied

Implemented **Option 3: Environment Variable with Fallback**

### Changes Made

1. **Updated `get_feature_dir()` function** (line 84-90):
   ```bash
   get_feature_dir() {
       local repo_root="$1"
       local branch="$2"
       # Use SPECIFY_SPECS_DIR environment variable if set, otherwise default to .specify/specs
       local specs_base="${SPECIFY_SPECS_DIR:-.specify/specs}"
       echo "$repo_root/$specs_base/$branch"
   }
   ```

2. **Updated `get_current_branch()` fallback logic** (line 31-33):
   ```bash
   # Use SPECIFY_SPECS_DIR environment variable if set, otherwise default to .specify/specs
   local specs_base="${SPECIFY_SPECS_DIR:-.specify/specs}"
   local specs_dir="$repo_root/$specs_base"
   ```

## Benefits

✅ **Default Behavior**: Uses `.specify/specs/` by default (correct location)  
✅ **Configurable**: Can override via `SPECIFY_SPECS_DIR` environment variable  
✅ **Backward Compatible**: Set `SPECIFY_SPECS_DIR=specs` or `SPECIFY_SPECS_DIR=docs/specs` for legacy projects  
✅ **Clean Implementation**: Minimal code changes, easy to understand

## Usage

### Default (uses .specify/specs/)
```bash
./check-prerequisites.sh --paths-only
```

### Override to use legacy location
```bash
export SPECIFY_SPECS_DIR=specs
./check-prerequisites.sh --paths-only
```

### Override to use docs/specs/
```bash
export SPECIFY_SPECS_DIR=docs/specs
./check-prerequisites.sh --paths-only
```

## Testing

After the fix, the scripts should correctly find:
- `/mnt/wsl/workspace/vscode-gosu-lang/.specify/specs/001-gosu-formatter-completion/`

Instead of incorrectly looking for:
- `/mnt/wsl/workspace/vscode-gosu-lang/specs/001-gosu-formatter-completion/` ❌

## Notes

- The shellcheck warnings visible in the IDE are pre-existing and not introduced by this fix
- They relate to bash best practices about declaring and assigning variables separately
- Fixing those warnings is a separate task and not required for this path fix to work
