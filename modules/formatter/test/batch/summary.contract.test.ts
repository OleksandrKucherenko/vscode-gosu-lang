import { describe, it, expect } from 'vitest';

/**
 * Contract test for FormatSummary
 * Schema: contracts/format-summary.schema.json
 * 
 * Tests validate batch formatting summary:
 * - All required fields present
 * - Counts are non-negative
 * - totalFiles equals sum of categories
 * - Individual file results are valid
 */

interface FormatFileResult {
  file: string;
  status: 'formatted' | 'unchanged' | 'failed' | 'skipped';
  duration: number;
  error?: string;
}

interface FormatSummary {
  totalFiles: number;
  formatted: number;
  unchanged: number;
  failed: number;
  skipped: number;
  duration: number;
  fileResults: FormatFileResult[];
}

// Mock validator function - will be replaced with actual implementation
function validateFormatSummary(summary: FormatSummary): { valid: boolean; error?: string } {
  // Required fields
  if (
    summary.totalFiles === undefined ||
    summary.formatted === undefined ||
    summary.unchanged === undefined ||
    summary.failed === undefined ||
    summary.skipped === undefined ||
    summary.duration === undefined ||
    !summary.fileResults
  ) {
    return { valid: false, error: 'missing required fields' };
  }

  // Non-negative counts
  if (
    summary.totalFiles < 0 ||
    summary.formatted < 0 ||
    summary.unchanged < 0 ||
    summary.failed < 0 ||
    summary.skipped < 0 ||
    summary.duration < 0
  ) {
    return { valid: false, error: 'counts cannot be negative' };
  }

  // totalFiles must equal sum of categories
  const sum = summary.formatted + summary.unchanged + summary.failed + summary.skipped;
  if (summary.totalFiles !== sum) {
    return { valid: false, error: 'totalFiles must equal sum of categories' };
  }

  // Validate file results
  for (const result of summary.fileResults) {
    if (!result.file || !result.status || result.duration === undefined) {
      return { valid: false, error: 'invalid file result structure' };
    }

    if (!['formatted', 'unchanged', 'failed', 'skipped'].includes(result.status)) {
      return { valid: false, error: 'invalid file result status' };
    }

    if (result.duration < 0) {
      return { valid: false, error: 'file result duration cannot be negative' };
    }

    if (result.status === 'failed' && !result.error) {
      return { valid: false, error: 'failed status requires error message' };
    }
  }

  return { valid: true };
}

describe('FormatSummary Contract', () => {
  describe('Valid Summaries', () => {
    it('should accept summary with all fields', () => {
      const summary: FormatSummary = {
        totalFiles: 3,
        formatted: 2,
        unchanged: 1,
        failed: 0,
        skipped: 0,
        duration: 150,
        fileResults: [
          { file: '/path/to/test1.gs', status: 'formatted', duration: 50 },
          { file: '/path/to/test2.gs', status: 'formatted', duration: 60 },
          { file: '/path/to/test3.gs', status: 'unchanged', duration: 40 }
        ]
      };

      const result = validateFormatSummary(summary);
      expect(result.valid).toBe(true);
    });

    it('should accept summary where totalFiles equals sum of categories', () => {
      const summary: FormatSummary = {
        totalFiles: 10,
        formatted: 5,
        unchanged: 3,
        failed: 1,
        skipped: 1,
        duration: 500,
        fileResults: []
      };

      const result = validateFormatSummary(summary);
      expect(result.valid).toBe(true);
      expect(summary.totalFiles).toBe(
        summary.formatted + summary.unchanged + summary.failed + summary.skipped
      );
    });

    it('should accept summary with failed files', () => {
      const summary: FormatSummary = {
        totalFiles: 2,
        formatted: 1,
        unchanged: 0,
        failed: 1,
        skipped: 0,
        duration: 100,
        fileResults: [
          { file: '/path/to/good.gs', status: 'formatted', duration: 50 },
          {
            file: '/path/to/broken.gs',
            status: 'failed',
            duration: 50,
            error: 'Syntax error at line 10'
          }
        ]
      };

      const result = validateFormatSummary(summary);
      expect(result.valid).toBe(true);
    });

    it('should accept summary with skipped files', () => {
      const summary: FormatSummary = {
        totalFiles: 2,
        formatted: 1,
        unchanged: 0,
        failed: 0,
        skipped: 1,
        duration: 80,
        fileResults: [
          { file: '/path/to/test.gs', status: 'formatted', duration: 50 },
          { file: '/path/to/readonly.gs', status: 'skipped', duration: 30 }
        ]
      };

      const result = validateFormatSummary(summary);
      expect(result.valid).toBe(true);
    });

    it('should accept summary with all unchanged files', () => {
      const summary: FormatSummary = {
        totalFiles: 3,
        formatted: 0,
        unchanged: 3,
        failed: 0,
        skipped: 0,
        duration: 120,
        fileResults: [
          { file: '/path/to/test1.gs', status: 'unchanged', duration: 40 },
          { file: '/path/to/test2.gs', status: 'unchanged', duration: 40 },
          { file: '/path/to/test3.gs', status: 'unchanged', duration: 40 }
        ]
      };

      const result = validateFormatSummary(summary);
      expect(result.valid).toBe(true);
    });

    it('should accept empty summary (no files)', () => {
      const summary: FormatSummary = {
        totalFiles: 0,
        formatted: 0,
        unchanged: 0,
        failed: 0,
        skipped: 0,
        duration: 0,
        fileResults: []
      };

      const result = validateFormatSummary(summary);
      expect(result.valid).toBe(true);
    });
  });

  describe('Invalid Summaries', () => {
    it('should reject negative counts', () => {
      const summary: FormatSummary = {
        totalFiles: -1,
        formatted: 0,
        unchanged: 0,
        failed: 0,
        skipped: 0,
        duration: 100,
        fileResults: []
      };

      const result = validateFormatSummary(summary);
      expect(result.valid).toBe(false);
      expect(result.error).toContain('counts cannot be negative');
    });

    it('should reject totalFiles mismatch', () => {
      const summary: FormatSummary = {
        totalFiles: 5,
        formatted: 2,
        unchanged: 1,
        failed: 0,
        skipped: 0,
        duration: 100,
        fileResults: []
      };

      const result = validateFormatSummary(summary);
      expect(result.valid).toBe(false);
      expect(result.error).toContain('totalFiles must equal sum of categories');
    });

    it('should reject missing required fields', () => {
      const summary: Partial<FormatSummary> = {
        totalFiles: 1,
        formatted: 1
        // Missing other fields
      };

      const result = validateFormatSummary(summary as FormatSummary);
      expect(result.valid).toBe(false);
      expect(result.error).toContain('missing required fields');
    });

    it('should reject invalid file result status', () => {
      const summary: FormatSummary = {
        totalFiles: 1,
        formatted: 1,
        unchanged: 0,
        failed: 0,
        skipped: 0,
        duration: 50,
        fileResults: [
          { file: '/path/to/test.gs', status: 'invalid' as any, duration: 50 }
        ]
      };

      const result = validateFormatSummary(summary);
      expect(result.valid).toBe(false);
      expect(result.error).toContain('invalid file result status');
    });

    it('should reject negative file result duration', () => {
      const summary: FormatSummary = {
        totalFiles: 1,
        formatted: 1,
        unchanged: 0,
        failed: 0,
        skipped: 0,
        duration: 50,
        fileResults: [
          { file: '/path/to/test.gs', status: 'formatted', duration: -10 }
        ]
      };

      const result = validateFormatSummary(summary);
      expect(result.valid).toBe(false);
      expect(result.error).toContain('file result duration cannot be negative');
    });

    it('should reject failed status without error message', () => {
      const summary: FormatSummary = {
        totalFiles: 1,
        formatted: 0,
        unchanged: 0,
        failed: 1,
        skipped: 0,
        duration: 50,
        fileResults: [
          { file: '/path/to/broken.gs', status: 'failed', duration: 50 }
          // Missing error field
        ]
      };

      const result = validateFormatSummary(summary);
      expect(result.valid).toBe(false);
      expect(result.error).toContain('failed status requires error message');
    });

    it('should reject incomplete file result', () => {
      const summary: FormatSummary = {
        totalFiles: 1,
        formatted: 1,
        unchanged: 0,
        failed: 0,
        skipped: 0,
        duration: 50,
        fileResults: [
          { file: '/path/to/test.gs', duration: 50 } as any
          // Missing status
        ]
      };

      const result = validateFormatSummary(summary);
      expect(result.valid).toBe(false);
      expect(result.error).toContain('invalid file result structure');
    });
  });

  describe('Edge Cases', () => {
    it('should validate large batch summary', () => {
      const fileResults: FormatFileResult[] = [];
      for (let i = 1; i <= 100; i++) {
        fileResults.push({
          file: `/path/to/test${i}.gs`,
          status: i % 2 === 0 ? 'formatted' : 'unchanged',
          duration: 50
        });
      }

      const summary: FormatSummary = {
        totalFiles: 100,
        formatted: 50,
        unchanged: 50,
        failed: 0,
        skipped: 0,
        duration: 5000,
        fileResults
      };

      const result = validateFormatSummary(summary);
      expect(result.valid).toBe(true);
    });

    it('should validate mixed status summary', () => {
      const summary: FormatSummary = {
        totalFiles: 10,
        formatted: 5,
        unchanged: 2,
        failed: 2,
        skipped: 1,
        duration: 500,
        fileResults: [
          { file: '/path/to/test1.gs', status: 'formatted', duration: 50 },
          { file: '/path/to/test2.gs', status: 'formatted', duration: 50 },
          { file: '/path/to/test3.gs', status: 'formatted', duration: 50 },
          { file: '/path/to/test4.gs', status: 'formatted', duration: 50 },
          { file: '/path/to/test5.gs', status: 'formatted', duration: 50 },
          { file: '/path/to/test6.gs', status: 'unchanged', duration: 30 },
          { file: '/path/to/test7.gs', status: 'unchanged', duration: 30 },
          { file: '/path/to/test8.gs', status: 'failed', duration: 40, error: 'Syntax error' },
          { file: '/path/to/test9.gs', status: 'failed', duration: 40, error: 'Parse error' },
          { file: '/path/to/test10.gs', status: 'skipped', duration: 10 }
        ]
      };

      const result = validateFormatSummary(summary);
      expect(result.valid).toBe(true);
    });

    it('should verify duration is sum of file durations', () => {
      const summary: FormatSummary = {
        totalFiles: 3,
        formatted: 3,
        unchanged: 0,
        failed: 0,
        skipped: 0,
        duration: 150,
        fileResults: [
          { file: '/path/to/test1.gs', status: 'formatted', duration: 50 },
          { file: '/path/to/test2.gs', status: 'formatted', duration: 60 },
          { file: '/path/to/test3.gs', status: 'formatted', duration: 40 }
        ]
      };

      const result = validateFormatSummary(summary);
      expect(result.valid).toBe(true);

      const fileDurationSum = summary.fileResults.reduce((sum, r) => sum + r.duration, 0);
      expect(summary.duration).toBe(fileDurationSum);
    });
  });
});
