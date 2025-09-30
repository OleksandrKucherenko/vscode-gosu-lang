import { describe, it, expect } from 'vitest';

/**
 * Contract test for CLIOptions
 * Schema: contracts/cli-options.schema.json
 * 
 * Tests validate that CLI option parsing and validation follows the contract:
 * - Valid combinations are accepted
 * - Invalid combinations are rejected
 * - Mutual exclusions are enforced
 */

interface CLIOptions {
  files?: string[];
  write?: boolean;
  check?: boolean;
  showConfig?: boolean;
  config?: string;
  help?: boolean;
  version?: boolean;
  logLevel?: 'error' | 'warning' | 'info' | 'debug';
}

// Mock validator function - will be replaced with actual implementation
function validateCLIOptions(options: CLIOptions): { valid: boolean; error?: string } {
  // Check mutual exclusion: check and write
  if (options.check && options.write) {
    return { valid: false, error: 'check and write are mutually exclusive' };
  }

  // Check that files are provided unless showConfig/help/version
  if (!options.showConfig && !options.help && !options.version) {
    if (!options.files || options.files.length === 0) {
      return { valid: false, error: 'files required when not in showConfig/help/version mode' };
    }
  }

  // Validate logLevel enum
  if (options.logLevel && !['error', 'warning', 'info', 'debug'].includes(options.logLevel)) {
    return { valid: false, error: 'invalid log level' };
  }

  return { valid: true };
}

describe('CLIOptions Contract', () => {
  describe('Valid Options', () => {
    it('should accept files with write flag', () => {
      const options: CLIOptions = {
        files: ['test.gs'],
        write: true
      };
      const result = validateCLIOptions(options);
      expect(result.valid).toBe(true);
    });

    it('should accept files with check flag', () => {
      const options: CLIOptions = {
        files: ['test.gs'],
        check: true
      };
      const result = validateCLIOptions(options);
      expect(result.valid).toBe(true);
    });

    it('should accept showConfig without files', () => {
      const options: CLIOptions = {
        showConfig: true
      };
      const result = validateCLIOptions(options);
      expect(result.valid).toBe(true);
    });

    it('should accept help flag', () => {
      const options: CLIOptions = {
        help: true
      };
      const result = validateCLIOptions(options);
      expect(result.valid).toBe(true);
    });

    it('should accept version flag', () => {
      const options: CLIOptions = {
        version: true
      };
      const result = validateCLIOptions(options);
      expect(result.valid).toBe(true);
    });

    it('should accept custom config path', () => {
      const options: CLIOptions = {
        files: ['test.gs'],
        config: '/path/to/.gosuformatting.json'
      };
      const result = validateCLIOptions(options);
      expect(result.valid).toBe(true);
    });

    it('should accept valid log levels', () => {
      const levels: Array<'error' | 'warning' | 'info' | 'debug'> = ['error', 'warning', 'info', 'debug'];
      
      for (const level of levels) {
        const options: CLIOptions = {
          files: ['test.gs'],
          logLevel: level
        };
        const result = validateCLIOptions(options);
        expect(result.valid).toBe(true);
      }
    });
  });

  describe('Invalid Options', () => {
    it('should reject check and write together (mutually exclusive)', () => {
      const options: CLIOptions = {
        files: ['test.gs'],
        check: true,
        write: true
      };
      const result = validateCLIOptions(options);
      expect(result.valid).toBe(false);
      expect(result.error).toContain('mutually exclusive');
    });

    it('should reject empty files array without showConfig', () => {
      const options: CLIOptions = {
        files: []
      };
      const result = validateCLIOptions(options);
      expect(result.valid).toBe(false);
      expect(result.error).toContain('files required');
    });

    it('should reject missing files without showConfig/help/version', () => {
      const options: CLIOptions = {};
      const result = validateCLIOptions(options);
      expect(result.valid).toBe(false);
      expect(result.error).toContain('files required');
    });

    it('should reject invalid log level', () => {
      const options: CLIOptions = {
        files: ['test.gs'],
        logLevel: 'trace' as any
      };
      const result = validateCLIOptions(options);
      expect(result.valid).toBe(false);
      expect(result.error).toContain('invalid log level');
    });
  });

  describe('Edge Cases', () => {
    it('should accept multiple files', () => {
      const options: CLIOptions = {
        files: ['test1.gs', 'test2.gs', 'test3.gs'],
        write: true
      };
      const result = validateCLIOptions(options);
      expect(result.valid).toBe(true);
    });

    it('should accept files with glob patterns', () => {
      const options: CLIOptions = {
        files: ['src/**/*.gs'],
        check: true
      };
      const result = validateCLIOptions(options);
      expect(result.valid).toBe(true);
    });
  });
});
