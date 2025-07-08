#!/bin/bash

# This script will replace all getter definitions of ruleIndex with direct property assignments
# in all TypeScript files under the server/src/parser/syntaxes directory

find /home/developer/workspace/vscode-gosu-lang/server/src/parser/syntaxes -name "*.ts" -type f -exec sed -i.bak -E 's/public get ruleIndex\(\): number \{ return ([A-Za-z0-9_]*\.RULE_[a-zA-Z0-9_]*); \}/public ruleIndex: number = \1;/g' {} \;

# Remove backup files
find /home/developer/workspace/vscode-gosu-lang/server/src/parser/syntaxes -name "*.bak" -type f -delete

echo "All ruleIndex getters have been converted to direct property assignments."
