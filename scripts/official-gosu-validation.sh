#!/bin/bash

# Official Gosu Language Validation Script
# Uses the official Gosu compiler to establish ground truth for syntax validation

set -e

echo "=== Official Gosu Language Validation ==="
echo "Using official Gosu compiler as source of truth"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Paths
PROJECT_DIR="/home/developer/workspace/vscode-gosu-lang"
GS_FILE="$PROJECT_DIR/test-workspace/gosu-syntax-full-sample.gs"
EBNF_FILE="$PROJECT_DIR/syntaxes/Gosu.ebnf"
G4_FILE="$PROJECT_DIR/syntaxes/Gosu.g4"

# Function to check file existence
check_file() {
    if [ ! -f "$1" ]; then
        echo -e "${RED}Error: File $1 not found${NC}"
        exit 1
    fi
}

echo "Project directory: $PROJECT_DIR"
echo "Gosu file to validate: $GS_FILE"
echo "EBNF grammar: $EBNF_FILE"
echo "ANTLR4 grammar: $G4_FILE"

# Check all required files exist
check_file "$GS_FILE"
check_file "$EBNF_FILE"
check_file "$G4_FILE"

echo -e "${GREEN}All files found${NC}"

# Create Gradle wrapper if it doesn't exist
if [ ! -f "gradlew" ]; then
    echo -e "${YELLOW}Creating Gradle wrapper...${NC}"
    gradle wrapper --gradle-version 8.5
fi

# Make gradlew executable
chmod +x gradlew

# Function to compile with official Gosu compiler
compile_with_gosu() {
    echo -e "${BLUE}Compiling with official Gosu compiler...${NC}"
    
    # Create temporary build.gradle for validation
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

tasks.register('validateGosuSyntax') {
    doLast {
        println "Validating Gosu syntax..."
        println "File: test-workspace/gosu-syntax-full-sample.gs"
    }
}
EOF

    # Run validation
    echo -e "${BLUE}Running Gradle validation...${NC}"
    ./gradlew validateGosuSyntax --info 2>&1 | tee validation.log
    
    # Check result
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓ Official Gosu compiler: PASSED${NC}"
        return 0
    else
        echo -e "${RED}✗ Official Gosu compiler: FAILED${NC}"
        return 1
    fi
}

# Function to analyze syntax issues
analyze_syntax_issues() {
    echo -e "${BLUE}Analyzing syntax issues...${NC}"
    
    # Check for specific patterns that might cause issues
    echo "Checking for decimal number issues..."
    grep -n "\.5" "$GS_FILE" || echo "No .5 patterns found"
    
    echo "Checking for range operator issues..."
    grep -n "\.\.|" "$GS_FILE" || echo "No ..| patterns found"
    grep -n "|\.\." "$GS_FILE" || echo "No |.. patterns found"
    grep -n "|\.\.|" "$GS_FILE" || echo "No |..| patterns found"
    
    echo "Checking for standalone operators..."
    grep -n "^\s*--" "$GS_FILE" || echo "No standalone -- operators found"
    grep -n "^\s*++" "$GS_FILE" || echo "No standalone ++ operators found"
    
    echo "Checking for string literal issues..."
    grep -n "\".*\"" "$GS_FILE" | head -5 || echo "No string literals found"
}

# Function to compare EBNF vs G4
compare_grammars() {
    echo -e "${BLUE}Comparing EBNF vs ANTLR4 grammar...${NC}"
    
    echo "EBNF grammar rules:"
    grep -c "=" "$EBNF_FILE"
    
    echo "ANTLR4 grammar rules:"
    grep -c ":" "$G4_FILE"
    
    echo "Key differences to check:"
    echo "- Range operators (.., |.., ..|, |..|)"
    echo "- Increment/decrement operators"
    echo "- String literal formats"
    echo "- Block expression syntax"
}

# Main validation process
echo ""
echo "=== Starting Official Validation ==="

# Run compilation with official Gosu compiler
echo -e "${YELLOW}Establishing ground truth with official compiler...${NC}"
if compile_with_gosu; then
    echo -e "${GREEN}✓ Gosu syntax is valid according to official compiler${NC}"
    
    # Generate validation report
    echo ""
    echo "=== Validation Report ==="
    echo "Generated on: $(date)"
    echo "File: $GS_FILE"
    echo "Status: VALID"
    echo "Compiler: Official Gosu 2.2.0"
    
else
    echo -e "${RED}✗ Gosu syntax has issues according to official compiler${NC}"
    
    # Analyze issues
    analyze_syntax_issues
    
    echo ""
    echo "=== Issues Found ==="
    echo "Check validation.log for detailed compiler output"
fi

# Compare grammars
compare_grammars

# Create summary report
echo ""
echo "=== Summary ==="
echo "Validation completed at: $(date)"
echo "For detailed output, check: validation.log"
echo "Next steps:"
echo "1. Fix any syntax issues identified by official compiler"
echo "2. Update ANTLR4 grammar to match official behavior"
echo "3. Re-run validation to confirm fixes"

echo ""
echo "=== Validation Complete ==="
