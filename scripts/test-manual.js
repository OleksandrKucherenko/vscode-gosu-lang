#!/usr/bin/env node

const { spawn } = require('child_process')
const path = require('path')

async function testManual() {
    console.log('Building extension for manual testing...')

    // Build the extension first
    const { buildExtension } = require('./build-extension')
    const { buildServer } = require('./build-server')

    try {
        await buildExtension()
        await buildServer()
    } catch (error) {
        console.error('Build failed:', error)
        process.exit(1)
    }

    console.log('Launching VSCode with extension and test fixtures...')

    // Launch VSCode with the test fixtures
    const fixturesPath = path.join(process.cwd(), 'test/fixtures')
    const vscodeArgs = [
        '--extensionDevelopmentPath=' + process.cwd(),
        fixturesPath
    ]

    console.log(`VSCode command: code ${vscodeArgs.join(' ')}`)

    const vscode = spawn('code', vscodeArgs, {
        stdio: 'inherit',
        shell: true
    })

    vscode.on('error', (err) => {
        console.error('Failed to launch VSCode:', err)
        console.log('Make sure VSCode is installed and available in PATH')
        process.exit(1)
    })

    vscode.on('exit', (code) => {
        console.log(`VSCode exited with code ${code}`)
    })
}

if (require.main === module) {
    testManual().catch(console.error)
}

module.exports = { testManual }