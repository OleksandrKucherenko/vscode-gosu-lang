import { describe, it, expect } from 'vitest';

/**
 * Contract test for LogEntry
 * Schema: contracts/log-entry.schema.json
 * 
 * Tests validate structured logging format:
 * - Required fields present
 * - Timestamp in ISO 8601 format
 * - Valid log levels
 * - Formatted string pattern
 * - Optional metadata handling
 */

interface LogEntry {
  timestamp: string;
  level: 'error' | 'warning' | 'info' | 'debug';
  source: string;
  message: string;
  metadata?: {
    file?: string;
    duration?: number;
    error?: string;
    line?: number;
    column?: number;
  };
  formatted: string;
}

// Mock validator function - will be replaced with actual implementation
function validateLogEntry(entry: LogEntry): { valid: boolean; error?: string } {
  // Required fields
  if (!entry.timestamp || !entry.level || !entry.source || !entry.message || !entry.formatted) {
    return { valid: false, error: 'missing required fields' };
  }

  // Validate level enum
  if (!['error', 'warning', 'info', 'debug'].includes(entry.level)) {
    return { valid: false, error: 'invalid log level' };
  }

  // Validate source is not empty
  if (entry.source.length === 0) {
    return { valid: false, error: 'source cannot be empty' };
  }

  // Validate message is not empty
  if (entry.message.length === 0) {
    return { valid: false, error: 'message cannot be empty' };
  }

  // Validate formatted string pattern
  const pattern = /^\[.+\] \[(error|warning|info|debug)\] \[.+\] .+$/;
  if (!pattern.test(entry.formatted)) {
    return { valid: false, error: 'formatted string does not match pattern' };
  }

  // Validate metadata if present
  if (entry.metadata) {
    if (entry.metadata.duration !== undefined && entry.metadata.duration < 0) {
      return { valid: false, error: 'duration cannot be negative' };
    }
  }

  // Validate ISO 8601 timestamp
  const isoPattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/;
  if (!isoPattern.test(entry.timestamp)) {
    return { valid: false, error: 'timestamp not in ISO 8601 format' };
  }

  return { valid: true };
}

describe('LogEntry Contract', () => {
  describe('Valid Log Entries', () => {
    it('should accept complete log entry with metadata', () => {
      const entry: LogEntry = {
        timestamp: '2025-09-30T19:30:00.123Z',
        level: 'info',
        source: 'formatter',
        message: 'Formatted file successfully',
        metadata: {
          file: '/path/to/test.gs',
          duration: 42
        },
        formatted: '[2025-09-30T19:30:00.123Z] [info] [formatter] Formatted file successfully'
      };

      const result = validateLogEntry(entry);
      expect(result.valid).toBe(true);
    });

    it('should accept minimal log entry without metadata', () => {
      const entry: LogEntry = {
        timestamp: '2025-09-30T19:30:00.123Z',
        level: 'debug',
        source: 'cli',
        message: 'Starting format operation',
        formatted: '[2025-09-30T19:30:00.123Z] [debug] [cli] Starting format operation'
      };

      const result = validateLogEntry(entry);
      expect(result.valid).toBe(true);
    });

    it('should accept all valid log levels', () => {
      const levels: Array<'error' | 'warning' | 'info' | 'debug'> = ['error', 'warning', 'info', 'debug'];

      for (const level of levels) {
        const entry: LogEntry = {
          timestamp: '2025-09-30T19:30:00.123Z',
          level,
          source: 'test',
          message: `Test ${level} message`,
          formatted: `[2025-09-30T19:30:00.123Z] [${level}] [test] Test ${level} message`
        };

        const result = validateLogEntry(entry);
        expect(result.valid).toBe(true);
      }
    });

    it('should accept entry with error metadata', () => {
      const entry: LogEntry = {
        timestamp: '2025-09-30T19:30:00.123Z',
        level: 'error',
        source: 'formatter',
        message: 'Syntax error in file',
        metadata: {
          file: '/path/to/broken.gs',
          error: 'Expected ")" at line 10',
          line: 10,
          column: 15
        },
        formatted: '[2025-09-30T19:30:00.123Z] [error] [formatter] Syntax error in file'
      };

      const result = validateLogEntry(entry);
      expect(result.valid).toBe(true);
    });

    it('should accept entry with performance metadata', () => {
      const entry: LogEntry = {
        timestamp: '2025-09-30T19:30:00.123Z',
        level: 'warning',
        source: 'formatter',
        message: 'Formatting took longer than expected',
        metadata: {
          file: '/path/to/large.gs',
          duration: 350
        },
        formatted: '[2025-09-30T19:30:00.123Z] [warning] [formatter] Formatting took longer than expected'
      };

      const result = validateLogEntry(entry);
      expect(result.valid).toBe(true);
    });

    it('should accept different source components', () => {
      const sources = ['formatter', 'cli', 'config-loader', 'batch', 'watcher'];

      for (const source of sources) {
        const entry: LogEntry = {
          timestamp: '2025-09-30T19:30:00.123Z',
          level: 'info',
          source,
          message: 'Test message',
          formatted: `[2025-09-30T19:30:00.123Z] [info] [${source}] Test message`
        };

        const result = validateLogEntry(entry);
        expect(result.valid).toBe(true);
      }
    });
  });

  describe('Invalid Log Entries', () => {
    it('should reject entry with missing timestamp', () => {
      const entry: Partial<LogEntry> = {
        level: 'info',
        source: 'formatter',
        message: 'Test',
        formatted: '[2025-09-30T19:30:00.123Z] [info] [formatter] Test'
      };

      const result = validateLogEntry(entry as LogEntry);
      expect(result.valid).toBe(false);
      expect(result.error).toContain('missing required fields');
    });

    it('should reject entry with invalid log level', () => {
      const entry: LogEntry = {
        timestamp: '2025-09-30T19:30:00.123Z',
        level: 'trace' as any,
        source: 'formatter',
        message: 'Test',
        formatted: '[2025-09-30T19:30:00.123Z] [trace] [formatter] Test'
      };

      const result = validateLogEntry(entry);
      expect(result.valid).toBe(false);
      expect(result.error).toContain('invalid log level');
    });

    it('should reject entry with empty message', () => {
      const entry: LogEntry = {
        timestamp: '2025-09-30T19:30:00.123Z',
        level: 'info',
        source: 'formatter',
        message: '',
        formatted: '[2025-09-30T19:30:00.123Z] [info] [formatter] '
      };

      const result = validateLogEntry(entry);
      expect(result.valid).toBe(false);
      expect(result.error).toContain('message cannot be empty');
    });

    it('should reject entry with empty source', () => {
      const entry: LogEntry = {
        timestamp: '2025-09-30T19:30:00.123Z',
        level: 'info',
        source: '',
        message: 'Test',
        formatted: '[2025-09-30T19:30:00.123Z] [info] [] Test'
      };

      const result = validateLogEntry(entry);
      expect(result.valid).toBe(false);
      expect(result.error).toContain('source cannot be empty');
    });

    it('should reject entry with invalid formatted pattern', () => {
      const entry: LogEntry = {
        timestamp: '2025-09-30T19:30:00.123Z',
        level: 'info',
        source: 'formatter',
        message: 'Test',
        formatted: 'Invalid format'
      };

      const result = validateLogEntry(entry);
      expect(result.valid).toBe(false);
      expect(result.error).toContain('formatted string does not match pattern');
    });

    it('should reject entry with negative duration', () => {
      const entry: LogEntry = {
        timestamp: '2025-09-30T19:30:00.123Z',
        level: 'info',
        source: 'formatter',
        message: 'Test',
        metadata: {
          duration: -10
        },
        formatted: '[2025-09-30T19:30:00.123Z] [info] [formatter] Test'
      };

      const result = validateLogEntry(entry);
      expect(result.valid).toBe(false);
      expect(result.error).toContain('duration cannot be negative');
    });

    it('should reject entry with invalid timestamp format', () => {
      const entry: LogEntry = {
        timestamp: '2025/09/30 19:30:00',
        level: 'info',
        source: 'formatter',
        message: 'Test',
        formatted: '[2025/09/30 19:30:00] [info] [formatter] Test'
      };

      const result = validateLogEntry(entry);
      expect(result.valid).toBe(false);
      expect(result.error).toContain('timestamp not in ISO 8601 format');
    });
  });

  describe('Formatted String Pattern', () => {
    it('should verify formatted string includes all components', () => {
      const entry: LogEntry = {
        timestamp: '2025-09-30T19:30:00.123Z',
        level: 'info',
        source: 'formatter',
        message: 'Formatted test.gs (42ms)',
        formatted: '[2025-09-30T19:30:00.123Z] [info] [formatter] Formatted test.gs (42ms)'
      };

      const result = validateLogEntry(entry);
      expect(result.valid).toBe(true);
      expect(entry.formatted).toContain(entry.timestamp);
      expect(entry.formatted).toContain(entry.level);
      expect(entry.formatted).toContain(entry.source);
      expect(entry.formatted).toContain(entry.message);
    });

    it('should accept formatted string with metadata in message', () => {
      const entry: LogEntry = {
        timestamp: '2025-09-30T19:30:00.123Z',
        level: 'error',
        source: 'formatter',
        message: 'Syntax error in /path/to/file.gs:10:15',
        metadata: {
          file: '/path/to/file.gs',
          line: 10,
          column: 15
        },
        formatted: '[2025-09-30T19:30:00.123Z] [error] [formatter] Syntax error in /path/to/file.gs:10:15'
      };

      const result = validateLogEntry(entry);
      expect(result.valid).toBe(true);
    });
  });
});
