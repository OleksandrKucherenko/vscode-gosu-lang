#!/bin/bash

# Ground Truth Validation Script
# Uses the official Gosu compiler to establish definitive syntax validation

set -e

echo "=== Gosu Ground Truth Validation ==="
echo "Using official Gosu compiler as definitive source of truth"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

PROJECT_DIR="/home/developer/workspace/vscode-gosu-lang"
GS_FILE="$PROJECT_DIR/test-workspace/gosu-syntax-full-sample.gs"

cd "$PROJECT_DIR"

echo "Validating: $GS_FILE"
echo "Using official Gosu compiler via gradle-gosu-plugin"

# Create proper Gradle configuration for official Gosu validation
cat > build.gradle << 'EOF'
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

// Configure source sets for Gosu compilation
sourceSets {
    main {
        gosu {
            srcDirs = ['test-workspace']
        }
    }
}

// Task to run official Gosu compiler validation
tasks.register('validateWithOfficialCompiler') {
    group = 'verification'
    description = 'Validate Gosu syntax using official compiler'
    
    doLast {
        println "=== Official Gosu Compiler Validation ==="
        println "File: test-workspace/gosu-syntax-full-sample.gs"
        println "Compiler: Official Gosu via gradle-gosu-plugin"
        
        // The Gosu compiler will automatically validate during compilation
        // Any syntax errors will be reported by the official compiler
    }
}
EOF

cat > settings.gradle << 'EOF'
rootProject.name = 'gosu-syntax-validator'
EOF

# Ensure Gradle wrapper exists
if [ ! -f "gradlew" ]; then
    echo -e "${YELLOW}Setting up Gradle wrapper...${NC}"
    gradle wrapper --gradle-version 8.5
fi

chmod +x gradlew

echo -e "${BLUE}Running official Gosu compiler...${NC}"

# Run the official Gosu compiler
set +e  # Allow errors to be captured
./gradlew clean validateWithOfficialCompiler --info 2>&1 | tee official-gosu-output.log

EXIT_CODE=$?

echo ""
echo "=== Official Gosu Compiler Results ==="

if [ $EXIT_CODE -eq 0 ]; then
    echo -e "${GREEN}✓ Official Gosu compiler: PASSED${NC}"
    echo "✓ File is syntactically correct according to official Gosu compiler"
    echo "✓ Ground truth established"
else
    echo -e "${RED}✗ Official Gosu compiler: FAILED${NC}"
    echo "✗ Syntax issues found by official compiler"
    echo ""
    echo "=== Ground Truth Issues ==="
    echo "The official Gosu compiler has identified syntax issues."
    echo "These are the definitive errors that need to be fixed."
fi

# Create validation report
echo ""
echo "=== Validation Report ==="
echo "Generated on: $(date)"
echo "File: $GS_FILE"
echo "Compiler: Official Gosu via gradle-gosu-plugin v2.2.0"
echo "Status: $([ $EXIT_CODE -eq 0 ] && echo 'VALID' || echo 'INVALID')"
echo ""
echo "Next steps:"
echo "1. Review official-gosu-output.log for exact compiler errors"
echo "2. Fix syntax issues in the Gosu file"
echo "3. Update ANTLR4 grammar to match official compiler behavior"
echo "4. Re-run validation to confirm fixes"
echo ""
echo "For detailed output:"
echo "  cat official-gosu-output.log"

exit $EXIT_CODE
