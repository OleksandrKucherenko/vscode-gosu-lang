const fs = require('fs');
const path = require('path');

function fixRuleIndex(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        // Replace getter with direct property assignment
        const fixedContent = content.replace(
            /public\s+get\s+ruleIndex\(\)\s*:\s*number\s*\{\s*return\s+([A-Za-z0-9_]+\.RULE_[a-zA-Z0-9_]+);\s*\}/g,
            'public ruleIndex: number = $1;'
        );
        
        if (content !== fixedContent) {
            fs.writeFileSync(filePath, fixedContent, 'utf8');
            console.log(`Fixed: ${filePath}`);
            return true;
        }
        return false;
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error);
        return false;
    }
}

function processDirectory(directory) {
    const files = fs.readdirSync(directory);
    let fixedCount = 0;

    files.forEach(file => {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            fixedCount += processDirectory(fullPath);
        } else if (file.endsWith('.ts')) {
            if (fixRuleIndex(fullPath)) {
                fixedCount++;
            }
        }
    });

    return fixedCount;
}

const targetDir = path.join(__dirname, 'server', 'src', 'parser', 'syntaxes');
console.log(`Fixing ruleIndex in ${targetDir}...`);
const fixedCount = processDirectory(targetDir);
console.log(`Fixed ${fixedCount} files.`);
