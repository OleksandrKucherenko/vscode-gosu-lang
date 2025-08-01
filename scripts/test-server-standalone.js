#!/usr/bin/env node

const { spawn } = require('child_process')
const path = require('path')
const fs = require('fs')

async function testServerStandalone() {
    console.log('Building server for standalone testing...')

    const { buildServer } = require('./build-server')

    try {
        await buildServer()
    } catch (error) {
        console.error('Server build failed:', error)
        process.exit(1)
    }

    const serverPath = path.join(process.cwd(), 'out/server.js')

    // Verify bundle exists and check size
    if (!fs.existsSync(serverPath)) {
        console.error('Server bundle not found at:', serverPath)
        process.exit(1)
    }

    const stats = fs.statSync(serverPath)
    console.log(`Server bundle size: ${(stats.size / 1024).toFixed(2)} KB`)

    console.log('Testing server bundle dependencies...')

    // Test if bundle is self-contained by checking if it can be loaded
    try {
        // Clear the require cache first
        delete require.cache[require.resolve(serverPath)]

        // Try to load the bundle - this will test dependency resolution
        // We expect it to load but potentially fail on LSP connection setup
        require(serverPath)
        console.log('✅ Server bundle loads successfully')
    } catch (error) {
        // Check if it's a dependency error or expected LSP connection error
        if (error.message.includes('Connection input stream is not set') ||
            error.message.includes('--node-ipc') ||
            error.message.includes('--stdio') ||
            error.message.includes('--socket')) {
            console.log('✅ Server bundle loads successfully (LSP connection setup expected)')
        } else {
            console.error('❌ Server bundle has missing dependencies:', error.message)
            process.exit(1)
        }
    }

    console.log('\nStarting LSP server in standalone mode...')
    console.log('The server will accept LSP requests via stdin/stdout')
    console.log('Send an LSP initialize request to test, or press Ctrl+C to stop\n')

    const server = spawn('node', [serverPath], {
        stdio: 'inherit'
    })

    server.on('error', (err) => {
        console.error('Failed to start server:', err)
        process.exit(1)
    })

    server.on('exit', (code) => {
        console.log(`\nServer exited with code ${code}`)
    })

    // Handle graceful shutdown
    process.on('SIGINT', () => {
        console.log('\nShutting down server...')
        server.kill('SIGINT')
    })
}

if (require.main === module) {
    testServerStandalone().catch(console.error)
}

module.exports = { testServerStandalone }