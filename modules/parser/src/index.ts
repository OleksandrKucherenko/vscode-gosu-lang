/**
 * Parser module exports for the Gosu Language Server
 * This module will wrap the existing ANTLR-generated parser
 */

// For now, just export a placeholder
// In Step 2, we'll move the existing ANTLR parser here
export interface GosuParseResult {
  success: boolean;
  errors: string[];
}

export function parseGosuFile(content: string): GosuParseResult {
  // Placeholder implementation - will be replaced with ANTLR parser
  return {
    success: true,
    errors: [],
  };
}