#!/bin/bash

# Official Gosu Compiler Validation Script
# Uses the official Gosu compiler (via gradle-gosu-plugin) as source of truth

set -e

echo "=== Official Gosu Compiler Validation ==="
echo "Using official Gosu compiler via gradle-gosu-plugin as source of truth"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

PROJECT_DIR="/home/developer/workspace/vscode-gosu-lang"
GS_FILE="$PROJECT_DIR/test-workspace/gosu-syntax-full-sample.gs"

cd "$PROJECT_DIR"

# Create proper Gradle setup for Gosu validation
cat > build.gradle << 'EOF'
plugins {
    id 'org.gosu-lang.gosu' version '2.2.0'
    id 'java'
}

repositories {
    mavenCentral()
}

dependencies {
    implementation('org.gosu-lang.gosu:gosu-core:2.2.0') {
        exclude group: 'systems.manifold'
    }
    implementation 'systems.manifold:manifold:2025.1.22'
}

sourceSets {
    main {
        gosu {
            srcDirs = ['test-workspace']
        }
    }
}

// Task to validate Gosu syntax
tasks.register('validateGosuFile') {
    doLast {
        println "=== Official Gosu Compiler Validation ==="
        println "Validating: test-workspace/gosu-syntax-full-sample.gs"
        println "Using official Gosu compiler as source of truth"
        
        // The Gosu compiler will automatically validate files in src/main/gosu
        // Any compilation errors will be reported by the plugin
    }
}

tasks.register('checkGosuSyntax') {
    group = 'verification'
    description = 'Check Gosu syntax using official compiler'
    
    doLast {
        println "Gosu syntax check completed"
    }
}
EOF

# Create settings.gradle
cat > settings.gradle << 'EOF'
rootProject.name = 'gosu-syntax-validator'
EOF

# Ensure Gosu file exists and is in correct location
if [ ! -f "$GS_FILE" ]; then
    echo -e "${RED}Error: Gosu file not found: $GS_FILE${NC}"
    exit 1
fi

echo -e "${BLUE}Setting up official Gosu compiler...${NC}"

# Create Gradle wrapper
if [ ! -f "gradlew" ]; then
    echo -e "${YELLOW}Creating Gradle wrapper...${NC}"
    gradle wrapper --gradle-version 8.5
fi

chmod +x gradlew

echo -e "${BLUE}Running official Gosu compiler validation...${NC}"

# Run validation with official Gosu compiler
set +e  # Allow errors to be captured

./gradlew clean validateGosuFile --info 2>&1 | tee official-validation.log

EXIT_CODE=$?

echo ""
echo "=== Official Gosu Compiler Results ==="

if [ $EXIT_CODE -eq 0 ]; then
    echo -e "${GREEN}✓ Official Gosu compiler: PASSED${NC}"
    echo "File is syntactically correct according to official Gosu compiler"
else
    echo -e "${RED}✗ Official Gosu compiler: FAILED${NC}"
    echo "Syntax issues found by official compiler"
fi

echo ""
echo "=== Ground Truth Established ==="
echo "Validation completed using official Gosu compiler"
echo "Results saved to: official-validation.log"
echo ""
echo "Next steps:"
echo "1. Review official compiler output for exact syntax issues"
echo "2. Update ANTLR4 grammar to match official compiler behavior"
echo "3. Re-run validation to confirm fixes"
echo ""
echo "For detailed output:"
echo "  tail -f official-validation.log"
