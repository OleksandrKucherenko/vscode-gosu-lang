# Clarifications: Complete Gosu Formatter System

**Date**: 2025-09-30  
**Status**: Resolved

## Clarification Session Summary

During the `/clarify` workflow execution, the following design decisions were made to resolve ambiguities in the logging and observability requirements.

---

## Question 1: Logging Library Selection

**Category**: Observability & Architecture  
**Issue**: The specification required structured logging but didn't specify which logging libraries to use for different contexts (VSCode extension vs CLI).

### Decision

Use **industry-standard logging libraries** with context-appropriate selection:

1. **VSCode Extension Logging**: `@vscode-logging/logger` ^2.0.0
   - User-visible logs in VSCode output channel
   - Automatic log rotation and file persistence
   - Configurable log levels via VSCode settings
   - Built-in support for VSCode integration

2. **CLI and Non-VSCode Logging**: `debug` ^4.4.3
   - Lightweight, namespace-based logging
   - Enable via `DEBUG=gosu:*` environment variable
   - Namespaces: `gosu:formatter`, `gosu:cli`, `gosu:config`, `gosu:batch`
   - Already in project dependencies

### Rationale

- **@vscode-logging/logger**: Purpose-built for VSCode extensions, handles log rotation, file persistence, and output channel integration automatically
- **debug**: Industry standard for Node.js CLI tools, minimal overhead, developer-friendly namespace filtering
- **Separation of Concerns**: Different contexts have different logging needs (user-visible vs developer debugging)
- **No Custom Implementation**: Avoids reinventing the wheel, leverages battle-tested libraries

### Impact on Specification

**Updated Requirements**:
- FR-007: Added "@vscode-logging/logger" specification
- FR-011: Added "trace" log level (supported by @vscode-logging/logger)
- FR-013: Added "debug package" specification
- FR-015a: NEW - VSCode extension MUST use @vscode-logging/logger
- FR-015b: NEW - CLI and non-VSCode components MUST use debug package

**Updated Dependencies**:
- Added `@vscode-logging/logger` ^2.0.0 to `modules/server/package.json`
- Verified `debug` ^4.4.3 exists in dependencies

---

## Question 2: Parallel Execution CPU Binding

**Category**: Performance & Resource Management  
**Issue**: FR-020 specified "bounded by CPU cores" but didn't specify the exact limit.

### Decision

Use **`os.cpus().length`** (all available CPU cores) for parallel execution.

### Rationale

- **Maximize Throughput**: Formatting is CPU-bound, using all cores optimizes performance
- **Node.js Best Practice**: Standard approach in Node.js parallel processing
- **Automatic Scaling**: Adapts to different hardware configurations
- **No Contention**: Formatting operations are independent, no shared state

### Impact on Specification

**Updated Requirements**:
- FR-021: Changed from "bounded by CPU cores" to "bounded by os.cpus().length"

---

## Question 3: Log Retention & Rotation

**Category**: Observability  
**Issue**: Specification didn't address log retention or rotation strategy.

### Decision

**Automatic handling by @vscode-logging/logger**:
- Built-in log rotation
- File persistence with configurable location
- No manual implementation needed

**For debug package**:
- Ephemeral (stderr only)
- No persistence required
- Developer controls via DEBUG environment variable

### Rationale

- **@vscode-logging/logger handles it**: Library provides automatic rotation out of the box
- **CLI logs are transient**: Debug logs are for development, not production monitoring
- **Simplicity**: No custom retention logic needed

### Impact on Specification

**Updated Requirements**:
- FR-015a: Explicitly mentions "automatic log rotation and file persistence"
- T032: Added `gosu.logFile` setting for log file location (optional)

---

## Question 4: Sensitive Data in Logs

**Category**: Security & Privacy  
**Issue**: Logs include file paths and potentially code snippets.

### Decision

**Log everything as-is** (file paths, code snippets) with no redaction.

### Rationale

- **Local Development Tool**: Formatter runs locally, not in cloud/shared environment
- **Debugging Necessity**: Full context needed for troubleshooting syntax errors
- **User Control**: Users control what files they format
- **No PII**: Gosu code files don't typically contain PII
- **Future Enhancement**: Can add redaction later if needed

### Impact on Specification

No specification changes required. Documented as design decision.

---

## Implementation Impact Summary

### Specification Changes
- ✅ Updated FR-007, FR-011, FR-013 with library specifications
- ✅ Added FR-015a and FR-015b for logging library requirements
- ✅ Updated FR-021 with explicit CPU core limit
- ✅ Renumbered subsequent FRs to maintain sequence

### Plan Changes
- ✅ Added `@vscode-logging/logger` ^2.0.0 to dependencies
- ✅ Verified `debug` ^4.4.3 in dependencies
- ✅ Updated Technical Context with new dependencies

### Task Changes
- ✅ Added T002: Install @vscode-logging/logger
- ✅ Added T003: Verify debug package
- ✅ Updated T016-T018: Logging infrastructure tasks
- ✅ Updated T031-T034: Integration tasks
- ✅ Updated all task descriptions with logger specifications
- ✅ Total tasks: 40 (increased from 38)

---

## Validation

All clarifications:
- ✅ Resolve ambiguities without changing core requirements
- ✅ Use industry-standard solutions
- ✅ Maintain constitutional compliance
- ✅ Enable immediate implementation
- ✅ Document rationale for future reference

---

**Clarification Complete**: Specification ready for implementation with all ambiguities resolved using industry-standard logging libraries.
