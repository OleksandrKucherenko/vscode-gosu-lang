/**
 * Shared test utilities for the Gosu Language Server
 * Provides consistent fixture reading across all test files
 */
import { existsSync, readFileSync } from "node:fs"
import path from "node:path"

/**
 * Find the monorepo root directory by looking for package.json with workspaces
 */
function findMonorepoRoot(): string {
  let currentDir = process.cwd()

  while (currentDir !== path.dirname(currentDir)) {
    const packageJsonPath = path.join(currentDir, "package.json")
    try {
      const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8"))
      if (packageJson.workspaces) {
        return currentDir
      }
    } catch {
      // Continue searching
    }
    currentDir = path.dirname(currentDir)
  }

  // Fallback to process.cwd() if no monorepo root found
  return process.cwd()
}

const MONOREPO_ROOT = findMonorepoRoot()

/**
 * Read a fixture file from the test/fixtures directory
 * Always resolves paths relative to the monorepo root
 *
 * @param fixturePath - Path to fixture file relative to test/fixtures/
 * @returns File content as string
 */
export function readFixture(fixturePath: string): string {
  const fullPath = path.resolve(MONOREPO_ROOT, "test", "fixtures", fixturePath)

  if (!existsSync(fullPath)) {
    throw new Error(`Fixture file not found: ${fullPath}`)
  }

  return readFileSync(fullPath, "utf8")
}

/**
 * Async version of readFixture for compatibility with existing async test functions
 */
export async function readFixtureAsync(fixturePath: string): Promise<string> {
  return readFixture(fixturePath)
}
