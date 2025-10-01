import { describe, it, expect } from 'vitest';

/**
 * Contract test for ConfigResolution
 * Schema: contracts/config-resolution.schema.json
 * 
 * Tests validate configuration cascade resolution:
 * - Valid resolution with multiple sources
 * - Explicit config file handling
 * - Default fallback behavior
 * - Source tracking and precedence
 */

interface ConfigSource {
  path: string;
  type: 'default' | 'user' | 'workspace' | 'project';
  loadedAt: string;
  values: Record<string, any>;
}

interface FormattingConfiguration {
  indentSize?: number;
  indentStyle?: 'spaces' | 'tabs';
  maxLineLength?: number;
  braceStyle?: 'attached' | 'broken' | 'same-line';
  strictMode?: boolean;
}

interface ValidationError {
  message: string;
  severity: 'error' | 'warning';
  line?: number;
  column?: number;
}

interface ConfigResolution {
  config: FormattingConfiguration;
  sources: ConfigSource[];
  resolution: 'cascade' | 'explicit' | 'default';
  errors?: ValidationError[];
}

// Mock validator function - will be replaced with actual implementation
function validateConfigResolution(resolution: ConfigResolution): { valid: boolean; error?: string } {
  // Required fields
  if (!resolution.config || !resolution.sources || !resolution.resolution) {
    return { valid: false, error: 'missing required fields' };
  }

  // Sources must not be empty
  if (resolution.sources.length === 0) {
    return { valid: false, error: 'sources array cannot be empty' };
  }

  // Validate each source
  for (const source of resolution.sources) {
    if (!source.path || !source.type || !source.loadedAt || !source.values) {
      return { valid: false, error: 'invalid source structure' };
    }
  }

  // Validate config values
  if (resolution.config.indentSize !== undefined) {
    if (resolution.config.indentSize < 1 || resolution.config.indentSize > 8) {
      return { valid: false, error: 'indentSize out of range' };
    }
  }

  if (resolution.config.maxLineLength !== undefined) {
    if (resolution.config.maxLineLength < 40 || resolution.config.maxLineLength > 200) {
      return { valid: false, error: 'maxLineLength out of range' };
    }
  }

  return { valid: true };
}

describe('ConfigResolution Contract', () => {
  describe('Valid Resolutions', () => {
    it('should accept cascade with project + defaults', () => {
      const resolution: ConfigResolution = {
        config: {
          indentSize: 2,
          indentStyle: 'spaces',
          maxLineLength: 100
        },
        sources: [
          {
            path: '/project/.gosuformatting.json',
            type: 'project',
            loadedAt: new Date().toISOString(),
            values: { indentSize: 2 }
          },
          {
            path: '<defaults>',
            type: 'default',
            loadedAt: new Date().toISOString(),
            values: { indentStyle: 'spaces', maxLineLength: 100 }
          }
        ],
        resolution: 'cascade'
      };
      
      const result = validateConfigResolution(resolution);
      expect(result.valid).toBe(true);
    });

    it('should accept explicit config file', () => {
      const resolution: ConfigResolution = {
        config: {
          indentSize: 4,
          maxLineLength: 120
        },
        sources: [
          {
            path: '/custom/.gosuformatting.json',
            type: 'project',
            loadedAt: new Date().toISOString(),
            values: { indentSize: 4, maxLineLength: 120 }
          }
        ],
        resolution: 'explicit'
      };
      
      const result = validateConfigResolution(resolution);
      expect(result.valid).toBe(true);
    });

    it('should accept default-only resolution', () => {
      const resolution: ConfigResolution = {
        config: {
          indentSize: 2,
          indentStyle: 'spaces',
          maxLineLength: 100,
          braceStyle: 'attached',
          strictMode: false
        },
        sources: [
          {
            path: '<defaults>',
            type: 'default',
            loadedAt: new Date().toISOString(),
            values: {
              indentSize: 2,
              indentStyle: 'spaces',
              maxLineLength: 100,
              braceStyle: 'attached',
              strictMode: false
            }
          }
        ],
        resolution: 'default'
      };
      
      const result = validateConfigResolution(resolution);
      expect(result.valid).toBe(true);
    });

    it('should accept resolution with validation warnings', () => {
      const resolution: ConfigResolution = {
        config: {
          indentSize: 2
        },
        sources: [
          {
            path: '/project/.gosuformatting.json',
            type: 'project',
            loadedAt: new Date().toISOString(),
            values: { indentSize: 2, unknownKey: 'value' }
          }
        ],
        resolution: 'explicit',
        errors: [
          {
            message: 'Unknown configuration key: unknownKey',
            severity: 'warning'
          }
        ]
      };
      
      const result = validateConfigResolution(resolution);
      expect(result.valid).toBe(true);
    });

    it('should accept multi-layer cascade (workspace + user + defaults)', () => {
      const resolution: ConfigResolution = {
        config: {
          indentSize: 4,
          indentStyle: 'tabs',
          maxLineLength: 120
        },
        sources: [
          {
            path: '/workspace/.gosuformatting.json',
            type: 'workspace',
            loadedAt: new Date().toISOString(),
            values: { indentSize: 4 }
          },
          {
            path: '<user-settings>',
            type: 'user',
            loadedAt: new Date().toISOString(),
            values: { indentStyle: 'tabs' }
          },
          {
            path: '<defaults>',
            type: 'default',
            loadedAt: new Date().toISOString(),
            values: { maxLineLength: 120 }
          }
        ],
        resolution: 'cascade'
      };
      
      const result = validateConfigResolution(resolution);
      expect(result.valid).toBe(true);
    });
  });

  describe('Invalid Resolutions', () => {
    it('should reject empty sources array', () => {
      const resolution: ConfigResolution = {
        config: { indentSize: 2 },
        sources: [],
        resolution: 'default'
      };
      
      const result = validateConfigResolution(resolution);
      expect(result.valid).toBe(false);
      expect(result.error).toContain('sources array cannot be empty');
    });

    it('should reject missing required fields', () => {
      const resolution: Partial<ConfigResolution> = {
        config: { indentSize: 2 }
        // Missing sources and resolution
      };
      
      const result = validateConfigResolution(resolution as ConfigResolution);
      expect(result.valid).toBe(false);
      expect(result.error).toContain('missing required fields');
    });

    it('should reject invalid indentSize', () => {
      const resolution: ConfigResolution = {
        config: {
          indentSize: 10 // Out of range (max 8)
        },
        sources: [
          {
            path: '<defaults>',
            type: 'default',
            loadedAt: new Date().toISOString(),
            values: { indentSize: 10 }
          }
        ],
        resolution: 'default'
      };
      
      const result = validateConfigResolution(resolution);
      expect(result.valid).toBe(false);
      expect(result.error).toContain('indentSize out of range');
    });

    it('should reject invalid maxLineLength', () => {
      const resolution: ConfigResolution = {
        config: {
          maxLineLength: 300 // Out of range (max 200)
        },
        sources: [
          {
            path: '<defaults>',
            type: 'default',
            loadedAt: new Date().toISOString(),
            values: { maxLineLength: 300 }
          }
        ],
        resolution: 'default'
      };
      
      const result = validateConfigResolution(resolution);
      expect(result.valid).toBe(false);
      expect(result.error).toContain('maxLineLength out of range');
    });

    it('should reject source with missing fields', () => {
      const resolution: ConfigResolution = {
        config: { indentSize: 2 },
        sources: [
          {
            path: '/project/.gosuformatting.json',
            type: 'project',
            loadedAt: new Date().toISOString()
            // Missing values field
          } as any
        ],
        resolution: 'explicit'
      };
      
      const result = validateConfigResolution(resolution);
      expect(result.valid).toBe(false);
      expect(result.error).toContain('invalid source structure');
    });
  });

  describe('Edge Cases', () => {
    it('should validate ISO 8601 timestamp format', () => {
      const resolution: ConfigResolution = {
        config: { indentSize: 2 },
        sources: [
          {
            path: '<defaults>',
            type: 'default',
            loadedAt: '2025-09-30T19:30:00.123Z',
            values: { indentSize: 2 }
          }
        ],
        resolution: 'default'
      };
      
      const result = validateConfigResolution(resolution);
      expect(result.valid).toBe(true);
      expect(resolution.sources[0].loadedAt).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/);
    });

    it('should handle all braceStyle options', () => {
      const styles: Array<'attached' | 'broken' | 'same-line'> = ['attached', 'broken', 'same-line'];
      
      for (const style of styles) {
        const resolution: ConfigResolution = {
          config: { braceStyle: style },
          sources: [
            {
              path: '<defaults>',
              type: 'default',
              loadedAt: new Date().toISOString(),
              values: { braceStyle: style }
            }
          ],
          resolution: 'default'
        };
        
        const result = validateConfigResolution(resolution);
        expect(result.valid).toBe(true);
      }
    });
  });
});
