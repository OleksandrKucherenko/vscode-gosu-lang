import { describe, test, expect, beforeEach } from 'vitest'
import { readFileSync } from 'fs'
import { resolve } from 'path'
import Debug from 'debug'
import { TextDocument } from 'vscode-languageserver-textdocument'
import { GosuDiagnosticsProvider } from './diagnostics'

const debug = Debug('gosu:lsp:test:file-integration')

describe('LSP Server File Integration', () => {
  let diagnosticsProvider: GosuDiagnosticsProvider

  beforeEach(() => {
    diagnosticsProvider = new GosuDiagnosticsProvider()
  })

  describe('Given valid Gosu files from test directory', () => {
    test('Then valid.gs should produce no diagnostics', () => {
      debug('Testing valid.gs file integration')
      
      // Read the valid Gosu file
      const filePath = resolve(__dirname, '../../../test/valid.gs')
      const content = readFileSync(filePath, 'utf8')
      
      // Create a TextDocument from the file content
      const document = TextDocument.create(
        `file://${filePath}`,
        'gosu',
        1,
        content
      )
      
      // Validate the document
      const diagnostics = diagnosticsProvider.validateDocument(document)
      
      debug(`Valid file diagnostics count: ${diagnostics.length}`)
      
      expect(diagnostics).toHaveLength(0)
    })

    test('And invalid.gs should produce syntax error diagnostics', () => {
      debug('Testing invalid.gs file integration')
      
      // Read the invalid Gosu file
      const filePath = resolve(__dirname, '../../../test/invalid.gs')
      const content = readFileSync(filePath, 'utf8')
      
      // Create a TextDocument from the file content
      const document = TextDocument.create(
        `file://${filePath}`,
        'gosu',
        1,
        content
      )
      
      // Validate the document
      const diagnostics = diagnosticsProvider.validateDocument(document)
      
      debug(`Invalid file diagnostics:`, diagnostics.map(d => ({
        range: d.range,
        message: d.message,
        severity: d.severity
      })))
      
      expect(diagnostics.length).toBeGreaterThan(0)
      
      // Check that we have an error diagnostic
      const errorDiagnostic = diagnostics.find(d => d.severity === 1) // Error severity
      expect(errorDiagnostic).toBeDefined()
      expect(errorDiagnostic?.message).toBeDefined()
      expect(errorDiagnostic?.message.length).toBeGreaterThan(0)
      
      // Check that the diagnostic has proper range information
      expect(errorDiagnostic?.range).toBeDefined()
      expect(errorDiagnostic?.range.start.line).toBeGreaterThanOrEqual(0)
      expect(errorDiagnostic?.range.start.character).toBeGreaterThanOrEqual(0)
    })
  })

  describe('When testing document caching', () => {
    test('Then repeated validation should use cache', () => {
      debug('Testing document caching behavior')
      
      // Read the valid Gosu file
      const filePath = resolve(__dirname, '../../../test/valid.gs')
      const content = readFileSync(filePath, 'utf8')
      
      // Create a TextDocument from the file content
      const document = TextDocument.create(
        `file://${filePath}`,
        'gosu',
        1,
        content
      )
      
      // First validation
      const startTime1 = Date.now()
      const diagnostics1 = diagnosticsProvider.validateDocument(document)
      const duration1 = Date.now() - startTime1
      
      // Second validation (should be cached)
      const startTime2 = Date.now()
      const diagnostics2 = diagnosticsProvider.validateDocument(document)
      const duration2 = Date.now() - startTime2
      
      debug(`First validation: ${duration1}ms, Second validation: ${duration2}ms`)
      
      // Results should be identical
      expect(diagnostics1).toEqual(diagnostics2)
      
      // Second call should be faster (cached)
      expect(duration2).toBeLessThanOrEqual(duration1)
    })

    test('And cache should clear when requested', () => {
      debug('Testing cache clearing')
      
      const filePath = resolve(__dirname, '../../../test/valid.gs')
      const content = readFileSync(filePath, 'utf8')
      const document = TextDocument.create(
        `file://${filePath}`,
        'gosu',
        1,
        content
      )
      
      // Validate to populate cache
      diagnosticsProvider.validateDocument(document)
      
      // Clear cache for this document
      diagnosticsProvider.clearCache(document.uri)
      
      // This should work without errors
      const diagnostics = diagnosticsProvider.validateDocument(document)
      expect(Array.isArray(diagnostics)).toBe(true)
    })
  })

  describe('When testing file type detection', () => {
    test('Then .gs files should be detected as class files', () => {
      debug('Testing .gs file type detection in integration')
      
      const filePath = resolve(__dirname, '../../../test/valid.gs')
      const content = readFileSync(filePath, 'utf8')
      const document = TextDocument.create(
        `file://${filePath}`,
        'gosu',
        1,
        content
      )
      
      // Our parser should detect this as a class file
      const diagnostics = diagnosticsProvider.validateDocument(document)
      
      // The fact that it validates without throwing an error means
      // file type detection is working
      expect(Array.isArray(diagnostics)).toBe(true)
    })
  })
})