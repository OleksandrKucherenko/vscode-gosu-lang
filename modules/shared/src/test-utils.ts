import * as fs from "node:fs"
import { promises as fsp } from "node:fs"
import * as path from "node:path"

export const readFixture = (name: string): string => {
  const filePath = path.join(__dirname, "../../../test/fixtures", name)
  return fs.readFileSync(filePath, "utf-8")
}

export const readFixtureAsync = async (name: string): Promise<string> => {
  const filePath = path.join(__dirname, "../../../test/fixtures", name)
  return fsp.readFile(filePath, "utf-8")
}

export const safeJsonStringify = (obj: unknown): string => {
  const cache = new Set()
  return JSON.stringify(
    obj,
    (_key, value) => {
      if (typeof value === "object" && value !== null) {
        if (cache.has(value)) {
          return "[Circular]"
        }
        cache.add(value)
      }
      return value
    },
    2,
  )
}
