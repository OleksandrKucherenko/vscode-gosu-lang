#!/usr/bin/env node
/**
 * Coverage Enforcement Script
 * 
 * This script enforces minimum coverage thresholds of 85% for:
 * - Line Coverage
 * - Branch Coverage  
 * - Function Coverage
 * - Statement Coverage
 * 
 * Usage: npm run coverage:check
 * 
 * Exit codes:
 * - 0: Coverage meets all thresholds
 * - 1: Coverage below minimum thresholds (blocking)
 * - 2: Coverage report not found
 */

import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

const MINIMUM_COVERAGE = 85; // 85% minimum threshold
const COVERAGE_FILE = resolve(process.cwd(), 'coverage/coverage-summary.json');

/**
 * Color codes for terminal output
 */
const colors = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    bold: '\x1b[1m'
};

/**
 * Format percentage with color coding
 */
function formatPercentage(value, threshold = MINIMUM_COVERAGE) {
    const percentage = `${value.toFixed(2)}%`;
    if (value >= 95) {
        return `${colors.green}${colors.bold}${percentage}${colors.reset}`;
    } else if (value >= threshold) {
        return `${colors.yellow}${percentage}${colors.reset}`;
    } else {
        return `${colors.red}${colors.bold}${percentage}${colors.reset}`;
    }
}

/**
 * Check if coverage meets minimum thresholds
 */
function checkCoverage() {
    console.log(`${colors.blue}${colors.bold}🔍 Coverage Threshold Enforcement${colors.reset}`);
    console.log(`${colors.blue}Minimum required coverage: ${MINIMUM_COVERAGE}%${colors.reset}\n`);

    // Check if coverage report exists
    if (!existsSync(COVERAGE_FILE)) {
        console.error(`${colors.red}❌ Coverage report not found: ${COVERAGE_FILE}${colors.reset}`);
        console.error(`${colors.red}Please run 'npm run test:coverage' first.${colors.reset}`);
        process.exit(2);
    }

    try {
        // Read coverage summary
        const coverageData = JSON.parse(readFileSync(COVERAGE_FILE, 'utf8'));
        const total = coverageData.total;

        if (!total) {
            console.error(`${colors.red}❌ Invalid coverage report format${colors.reset}`);
            process.exit(2);
        }

        // Extract coverage metrics
        const metrics = {
            lines: total.lines?.pct || 0,
            statements: total.statements?.pct || 0,
            functions: total.functions?.pct || 0,
            branches: total.branches?.pct || 0
        };

        // Display coverage report
        console.log(`${colors.bold}📊 Coverage Report Summary:${colors.reset}`);
        console.log(`┌─────────────┬──────────────┬─────────────┬─────────────┐`);
        console.log(`│ Metric      │ Current      │ Threshold   │ Status      │`);
        console.log(`├─────────────┼──────────────┼─────────────┼─────────────┤`);

        const results = [];

        // Check each metric
        for (const [metric, value] of Object.entries(metrics)) {
            const passes = value >= MINIMUM_COVERAGE;
            const status = passes
                ? `${colors.green}✅ PASS${colors.reset}`
                : `${colors.red}❌ FAIL${colors.reset}`;

            console.log(`│ ${metric.padEnd(11)} │ ${formatPercentage(value).padEnd(20)} │ ${MINIMUM_COVERAGE}%        │ ${status.padEnd(17)} │`);

            results.push({
                metric: metric.charAt(0).toUpperCase() + metric.slice(1),
                value,
                passes,
                threshold: MINIMUM_COVERAGE
            });
        }

        console.log(`└─────────────┴──────────────┴─────────────┴─────────────┘\n`);

        // Count failures
        const failures = results.filter(r => !r.passes);
        const totalTests = Object.keys(metrics).length;
        const passedTests = totalTests - failures.length;

        // Display overall result
        if (failures.length === 0) {
            console.log(`${colors.green}${colors.bold}🎉 COVERAGE CHECK PASSED${colors.reset}`);
            console.log(`${colors.green}All ${totalTests} coverage metrics meet the ${MINIMUM_COVERAGE}% minimum threshold.${colors.reset}\n`);

            // Display detailed counts
            const lineCoverage = total.lines;
            const branchCoverage = total.branches;

            console.log(`${colors.blue}📈 Detailed Coverage Statistics:${colors.reset}`);
            console.log(`• Lines: ${lineCoverage.covered}/${lineCoverage.total} covered`);
            console.log(`• Statements: ${total.statements.covered}/${total.statements.total} covered`);
            console.log(`• Functions: ${total.functions.covered}/${total.functions.total} covered`);
            console.log(`• Branches: ${branchCoverage.covered}/${branchCoverage.total} covered\n`);

            console.log(`${colors.green}✨ Ready to proceed with development!${colors.reset}`);
            process.exit(0);

        } else {
            console.log(`${colors.red}${colors.bold}💥 COVERAGE CHECK FAILED${colors.reset}`);
            console.log(`${colors.red}${failures.length} out of ${totalTests} coverage metrics are below the ${MINIMUM_COVERAGE}% threshold.${colors.reset}\n`);

            console.log(`${colors.red}${colors.bold}❌ Failed Metrics:${colors.reset}`);
            failures.forEach(failure => {
                const gap = (failure.threshold - failure.value).toFixed(2);
                console.log(`${colors.red}• ${failure.metric}: ${failure.value.toFixed(2)}% (need ${gap}% more to reach ${failure.threshold}%)${colors.reset}`);
            });

            console.log(`\n${colors.yellow}🔧 Remediation Required:${colors.reset}`);
            console.log(`${colors.yellow}1. Add more comprehensive tests to increase coverage${colors.reset}`);
            console.log(`${colors.yellow}2. Focus on uncovered lines, branches, and functions${colors.reset}`);
            console.log(`${colors.yellow}3. Run 'npm run test:coverage:ui' for detailed analysis${colors.reset}`);
            console.log(`${colors.yellow}4. Re-run 'npm run coverage:check' after improvements${colors.reset}\n`);

            console.log(`${colors.red}🚫 Development blocked until coverage thresholds are met.${colors.reset}`);
            process.exit(1);
        }

    } catch (error) {
        console.error(`${colors.red}❌ Error reading coverage report: ${error.message}${colors.reset}`);
        process.exit(2);
    }
}

/**
 * Main execution
 */
if (import.meta.url === `file://${process.argv[1]}`) {
    checkCoverage();
}

export { checkCoverage };