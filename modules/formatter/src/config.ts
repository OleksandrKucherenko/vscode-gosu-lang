import { promises as fs } from "node:fs"
import path from "node:path"

import JSON5 from "json5"
import { type ParseError, parse as parseJsonc, printParseErrorCode } from "jsonc-parser"

export type IndentStyle = "space" | "tab"

export interface FormattingConfig {
  indentStyle: IndentStyle
  indentSize: number
  continuationIndentSize: number
  maxLineLength: number
}

export const DEFAULT_FORMATTING_CONFIG: FormattingConfig = Object.freeze({
  indentStyle: "space" as IndentStyle,
  indentSize: 2,
  continuationIndentSize: 4,
  maxLineLength: 100,
})

export interface LoadFormattingConfigOptions {
  searchDir: string
  configFileName?: string
}

function cloneDefaults(): FormattingConfig {
  return { ...DEFAULT_FORMATTING_CONFIG }
}

function normalizeConfigValue(partial: Record<string, unknown>): FormattingConfig {
  const result = cloneDefaults()

  if (partial.indentStyle !== undefined) {
    if (partial.indentStyle === "space" || partial.indentStyle === "tab") {
      result.indentStyle = partial.indentStyle
    } else {
      throw new Error("Invalid indentStyle in formatter configuration. Expected 'space' or 'tab'.")
    }
  }

  if (partial.indentSize !== undefined) {
    if (typeof partial.indentSize === "number" && Number.isFinite(partial.indentSize) && partial.indentSize > 0) {
      result.indentSize = Math.floor(partial.indentSize)
    } else {
      throw new Error("Invalid indentSize in formatter configuration. Expected a positive number.")
    }
  }

  if (partial.continuationIndentSize !== undefined) {
    if (
      typeof partial.continuationIndentSize === "number" &&
      Number.isFinite(partial.continuationIndentSize) &&
      partial.continuationIndentSize > 0
    ) {
      result.continuationIndentSize = Math.floor(partial.continuationIndentSize)
    } else {
      throw new Error("Invalid continuationIndentSize in formatter configuration. Expected a positive number.")
    }
  }

  if (partial.maxLineLength !== undefined) {
    if (
      typeof partial.maxLineLength === "number" &&
      Number.isFinite(partial.maxLineLength) &&
      partial.maxLineLength > 0
    ) {
      result.maxLineLength = Math.floor(partial.maxLineLength)
    } else {
      throw new Error("Invalid maxLineLength in formatter configuration. Expected a positive number.")
    }
  }

  return result
}

function getLineAndColumn(text: string, offset: number): { line: number; column: number } {
  let line = 1
  let lastLineStart = 0

  for (let i = 0; i < offset; i++) {
    const char = text[i]
    if (char === "\n") {
      line += 1
      lastLineStart = i + 1
    }
  }

  const column = offset - lastLineStart + 1

  return { line, column }
}

function parseJsoncContent(fileContent: string, configPath: string): unknown {
  const errors: ParseError[] = []
  const result = parseJsonc(fileContent, errors, {
    allowTrailingComma: true,
    disallowComments: false,
  })

  if (errors.length > 0) {
    const [{ error, offset }] = errors
    const { line, column } = getLineAndColumn(fileContent, offset)
    const errorCode = printParseErrorCode(error)
    throw new Error(
      `Invalid JSONC formatting configuration at ${configPath}: ${errorCode} (line ${line}, column ${column})`,
    )
  }

  return result
}

async function readConfigFile(configPath: string): Promise<unknown> {
  const fileContent = await fs.readFile(configPath, "utf8")
  const extension = path.extname(configPath).toLowerCase()

  if (extension === ".jsonc") {
    return parseJsoncContent(fileContent, configPath)
  }

  try {
    switch (extension) {
      case ".json5":
        return JSON5.parse(fileContent)

      case ".json":
        return JSON.parse(fileContent)

      default:
        return JSON5.parse(fileContent)
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    throw new Error(`Failed to parse formatter configuration at ${configPath}: ${message}`)
  }
}

export async function loadFormattingConfig(options: LoadFormattingConfigOptions): Promise<FormattingConfig> {
  const { searchDir, configFileName } = options

  const candidateFileNames = configFileName ? [configFileName] : [".gosuformatting.jsonc", ".gosuformatting.json5"]

  let configPath: string | null = null

  for (const candidate of candidateFileNames) {
    const fullPath = path.join(searchDir, candidate)
    try {
      await fs.access(fullPath)
      configPath = fullPath
      break
    } catch (error) {
      const code = (error as NodeJS.ErrnoException).code
      if (code && code !== "ENOENT") {
        throw error
      }
    }
  }

  if (!configPath) {
    return cloneDefaults()
  }

  const parsed = await readConfigFile(configPath)

  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error("Formatter configuration must be a JSON object.")
  }

  return normalizeConfigValue(parsed as Record<string, unknown>)
}
