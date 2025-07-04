const fs = require('node:fs');
const path = require('node:path');

// Load the grammar file
const grammarPath = path.resolve(__dirname, '../syntaxes/gosu.tmLanguage.json');
const grammar = JSON.parse(fs.readFileSync(grammarPath, 'utf8'));

// Load the sample file
const samplePath = path.resolve(__dirname, '../test-workspace/gosu-syntax-full-sample.gs');
const sampleCode = fs.readFileSync(samplePath, 'utf8');
const sampleLines = sampleCode.split('\n');

// Function to test a regex pattern against the sample
function testPattern(name, pattern) {
  try {
    const regex = new RegExp(pattern);
    for (const line of sampleLines) {
      if (regex.test(line)) {
        console.log(`✓ ${name} matches: "${line.trim()}"`);  
        return true;
      }
    }
    console.error(`✗ ${name} does not match any line in the sample`);
    return false;
  } catch (e) {
    console.error(`✗ ${name} has invalid regex: ${pattern}`, e);
    return false;
  }
}

// Function to extract keywords from a regex pattern string
function extractKeywords(pattern) {
  // Match words inside a regex alternation group: \b(word1|word2|...)\b
  const match = pattern.match(/\\b\(([^)]+)\)\\b/);
  if (!match) return [];
  
  // Split the alternation and return the keywords
  return match[1].split('|');
}

// Function to detect duplicate keywords across different pattern categories
function detectDuplicateKeywords() {
  const keywordsByCategory = {};
  const duplicates = {};
  
  // Find all patterns with match property that might contain keywords
  const patterns = [];
  function findMatchPatterns(obj, _category) {
    if (!obj) return;
    
    if (obj.match && typeof obj.match === 'string' && obj.name) {
      patterns.push({
        category: obj.name,
        pattern: obj.match
      });
    }
    
    if (typeof obj === 'object') {
      for (const key in obj) {
        if (key === 'patterns' && Array.isArray(obj[key])) {
          for (const pattern of obj[key]) {
            findMatchPatterns(pattern);
          }
        } else if (typeof obj[key] === 'object') {
          findMatchPatterns(obj[key]);
        }
      }
    }
  }
  
  // Start the recursive search
  findMatchPatterns(grammar);
  
  // Extract keywords from each pattern and track by category
  for (const { category, pattern } of patterns) {
    const keywords = extractKeywords(pattern);
    
    if (keywords.length > 0) {
      keywordsByCategory[category] = keywords;
      
      // Check for duplicates
      for (const keyword of keywords) {
        if (!duplicates[keyword]) {
          duplicates[keyword] = [];
        }
        duplicates[keyword].push(category);
      }
    }
  }
  
  // Report duplicates
  console.log('\n=== Checking for Duplicate Keywords ===\n');
  const duplicateKeywords = Object.entries(duplicates)
    .filter(([_, categories]) => categories.length > 1);
  
  if (duplicateKeywords.length === 0) {
    console.log('✓ No duplicate keywords found across pattern categories');
  } else {
    console.log(`⚠️ Found ${duplicateKeywords.length} keywords defined in multiple pattern categories:\n`);
    
    for (const [keyword, categories] of duplicateKeywords) {
      console.log(`'${keyword}' appears in: ${categories.join(', ')}`);
    }
  }
}

// Start the validation process
console.log('\n=== Testing Gosu Grammar Patterns ===\n');

// Validate basic grammar structure
console.log(`Grammar name: ${grammar.name}`);
console.log(`Grammar scope: ${grammar.scopeName}`);
const fileTypes = grammar.fileTypes.join(', ');
console.log(`File types: ${fileTypes}`);

// Check critical repositories
console.log('\n=== Checking Required Repositories ===\n');
const requiredRepos = ['comments', 'keywords', 'strings', 'annotations', 'properties', 'functions'];
let allReposPresent = true;

for (const repo of requiredRepos) {
  if (grammar.repository?.[repo]) {
    console.log(`✓ Found repository: ${repo}`);
  } else {
    console.log(`✗ Missing repository: ${repo}`);
    allReposPresent = false;
  }
}

if (allReposPresent) {
  console.log('\n✓ All critical repositories present.');
} else {
  console.log('\n✗ Some critical repositories are missing.');
}

// Test critical patterns
console.log('\n=== Testing Critical Patterns ===\n');

// Line comment
testPattern("Line comment", "//.*");

// Block comment
testPattern("Block comment begin", "/\\*");

// Annotation
testPattern("Annotation", "@[a-zA-Z_][a-zA-Z0-9_]*(\\.[a-zA-Z_][a-zA-Z0-9_]*)*");

// Any property
testPattern("Any property", "property");

// Other important keywords
testPattern("class keyword", "\\bclass\\b");
testPattern("construct keyword", "\\bconstruct\\b");
testPattern("function keyword", "\\bfunction\\b");
testPattern("property keyword", "\\bproperty\\b");

// Test specific compound patterns we're interested in
testPattern("property get pattern", "property\\s+get");
testPattern("property set pattern", "property\\s+set");

// Print all keyword patterns from the grammar
console.log('\n=== Keyword Patterns in Grammar ===\n');

if (grammar.repository?.keywords?.patterns) {
  for (const pattern of grammar.repository.keywords.patterns) {
    console.log(`Pattern: ${pattern.name || 'unnamed'}`);
    console.log(`  Match: ${pattern.match || 'N/A'}`);
  }
}

// Run the duplicate keyword detector
detectDuplicateKeywords();

console.log('\n=== Grammar Validation Complete ===');
