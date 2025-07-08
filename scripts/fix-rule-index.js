const fs = require('fs');
const path = require('path');

const FILES_TO_PROCESS = [
  'server/src/parser/syntaxes/GosuParser.ts',
  'server/src/parser/syntaxes/GosuLexer.ts'
];

function fixRuleIndex(filePath) {
  const fullPath = path.join(process.cwd(), filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.warn(`File not found: ${fullPath}`);
    return;
  }

  console.log(`Processing ${filePath}...`);
  
  let content = fs.readFileSync(fullPath, 'utf8');
  const originalContent = content;
  
  // Replace getter pattern: public get ruleIndex(): number { return RULE_...; }
  content = content.replace(
    /public\s+get\s+ruleIndex\(\s*\)\s*:\s*number\s*\{\s*return\s+(RULE_\w+);?\s*\}/g,
    'public ruleIndex: number = $1;'
  );
  
  if (content !== originalContent) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`  ✓ Fixed ruleIndex getters in ${filePath}`);
  } else {
    console.log(`  ✓ No changes needed for ${filePath}`);
  }
}

// Process each file
FILES_TO_PROCESS.forEach(fixRuleIndex);

console.log('Done!');
