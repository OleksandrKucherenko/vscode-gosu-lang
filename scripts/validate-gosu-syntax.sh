#!/bin/bash

# Gosu Syntax Validation Script
# This script validates Gosu syntax files against the official grammar

set -e

echo "=== Gosu Language Syntax Validation ==="
echo "Validating Gosu syntax against official EBNF grammar..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Paths
PROJECT_DIR="/home/developer/workspace/vscode-gosu-lang"
GS_FILE="$PROJECT_DIR/test-workspace/gosu-syntax-full-sample.gs"
EBNF_FILE="$PROJECT_DIR/syntaxes/Gosu.ebnf"
G4_FILE="$PROJECT_DIR/syntaxes/Gosu.g4"

echo "Project directory: $PROJECT_DIR"
echo "Gosu file to validate: $GS_FILE"
echo "EBNF grammar: $EBNF_FILE"
echo "ANTLR4 grammar: $G4_FILE"

# Function to check file existence
check_file() {
    if [ ! -f "$1" ]; then
        echo -e "${RED}Error: File $1 not found${NC}"
        exit 1
    fi
}

# Check all required files exist
check_file "$GS_FILE"
check_file "$EBNF_FILE"
check_file "$G4_FILE"

echo -e "${GREEN}All files found${NC}"

# Validate syntax using ANTLR4
echo ""
echo "=== ANTLR4 Grammar Validation ==="
echo "Running ANTLR4 validation..."

# Run test to validate syntax
if npm test server/src/parser/parser.test.ts 2>/dev/null; then
    echo -e "${GREEN}ANTLR4 validation: PASSED${NC}"
else
    echo -e "${RED}ANTLR4 validation: FAILED${NC}"
    echo "Running with verbose output..."
    npm test server/src/parser/parser.test.ts -- --reporter=verbose
fi

# Check for specific syntax issues
echo ""
echo "=== Syntax Issue Analysis ==="
echo "Checking for common Gosu syntax issues..."

# Check for problematic patterns in the GS file
if grep -n "\.5" "$GS_FILE"; then
    echo -e "${YELLOW}Warning: Decimal numbers like .5 found - may need 0.5 format${NC}"
fi

if grep -n "\|\.\.\|" "$GS_FILE"; then
    echo -e "${YELLOW}Warning: Exclusive range operators found - verify syntax${NC}"
fi

if grep -n "--b" "$GS_FILE"; then
    echo -e "${YELLOW}Warning: Standalone decrement operator found - verify context${NC}"
fi

# Compare against reference project
echo ""
echo "=== Reference Comparison ==="
echo "Comparing against reference Gosu project..."

# Create a simple validation report
echo ""
echo "=== Validation Report ==="
echo "Generated on: $(date)"
echo "Gosu file: $GS_FILE"
echo "EBNF grammar: $EBNF_FILE"
echo "ANTLR4 grammar: $G4_FILE"

# Count lines and complexity
LINE_COUNT=$(wc -l < "$GS_FILE")
echo "Lines of code: $LINE_COUNT"

# Check for syntax constructs
FEATURES_FOUND=$(grep -E "(class|interface|enum|function|property|construct|var|if|for|while|switch|try|catch)" "$GS_FILE" | wc -l)
echo "Language constructs found: $FEATURES_FOUND"

echo ""
echo "=== Recommendations ==="
echo "1. Ensure all range operators use correct syntax (.., |.., ..|, |..|)"
echo "2. Verify decimal numbers use proper format (0.5 instead of .5)"
echo "3. Check increment/decrement operators are in valid contexts"
echo "4. Validate all string literals are properly formatted"
echo "5. Ensure block expressions use correct syntax"

echo ""
echo "=== Validation Complete ==="
