# Gosu Language Validation Framework

## Overview
This project now includes a comprehensive validation framework using the official Gosu compiler as the definitive source of truth for syntax correctness.

## Official Gosu Compiler Setup

### Using gradle-gosu-plugin
The official Gosu compiler is provided via the `gradle-gosu-plugin` which automatically handles:
- Gosu source compilation
- Syntax validation
- Error reporting
- Dependency management

### Configuration
The plugin is configured in `build.gradle`:
```groovy
plugins {
    id 'org.gosu-lang.gosu' version '2.2.0'
    id 'java'
}

repositories {
    mavenCentral()
}

dependencies {
    implementation 'org.gosu-lang.gosu:gosu-core-api:2.2.0'
    implementation 'org.gosu-lang.gosu:gosu-core:2.2.0'
    implementation 'systems.manifold:manifold:2025.1.22'
}

sourceSets {
    main {
        gosu {
            srcDirs = ['test-workspace']
        }
    }
}
```

## Validation Process

### 1. Ground Truth Establishment
The official Gosu compiler serves as the ground truth for syntax correctness. Any syntax issues identified by the compiler are definitive.

### 2. File Placement
Gosu files must be placed in the appropriate source set directory:
- `src/main/gosu/` for production code
- `src/test/gosu/` for test code
- Currently using `test-workspace/` for validation

### 3. Compilation Commands
```bash
# Validate Gosu syntax using official compiler
./gradlew compileGosu

# Run with detailed output
./gradlew compileGosu --info

# Check specific file
./gradlew compileGosu --debug
```

## Validation Scripts

### Available Scripts
- `scripts/ground-truth-validation.sh` - Uses official Gosu compiler
- `scripts/official-gosu-compiler.sh` - Comprehensive validation setup
- `validation/build.gradle` - Isolated validation environment

### Running Validation
```bash
# Run official validation
./scripts/ground-truth-validation.sh

# Or use the validation directory
cd validation
../gradlew compileGosu --info
```

## Results Interpretation

### Success
- Official Gosu compiler reports no syntax errors
- File is syntactically correct according to Gosu language specification
- Ground truth established

### Failure
- Official Gosu compiler identifies specific syntax issues
- These issues must be fixed in the source file
- ANTLR4 grammar should be updated to match official behavior

## Next Steps

1. **Run Official Validation**: Execute the validation scripts to get definitive compiler feedback
2. **Fix Syntax Issues**: Address any issues identified by the official compiler
3. **Update Grammar**: Ensure ANTLR4 grammar matches official compiler behavior
4. **Re-validate**: Confirm fixes with official compiler

## Key Files
- `test-workspace/gosu-syntax-full-sample.gs` - The file being validated
- `build.gradle` - Official Gosu plugin configuration
- `syntaxes/Gosu.ebnf` - Official EBNF grammar reference
- `syntaxes/Gosu.g4` - ANTLR4 grammar to be aligned with official compiler

## Official Resources
- [gradle-gosu-plugin](https://github.com/gosu-lang/gradle-gosu-plugin)
- [Gosu Language Documentation](https://gosu-lang.github.io/)
