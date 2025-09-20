import { detectFunctionAnchors } from "./anchors"
import {
  DEFAULT_FORMATTING_CONFIG,
  FORMATTER_CONFIG_SCHEMA,
  type FormatterOptionSchema,
  type FormattingConfig,
  loadFormattingConfig,
} from "./config"

export {
  DEFAULT_FORMATTING_CONFIG,
  FORMATTER_CONFIG_SCHEMA,
  type FormatterOptionSchema,
  type FormattingConfig,
  loadFormattingConfig,
}

export interface FormatResult {
  formattedText: string
  ignoredLines?: number[]
  ignoredAnchors?: RecoverableAnchor[]
  config: FormattingConfig
}

export interface FormatRequest {
  uri: string
  text: string
  workspaceDir?: string
  config?: FormattingConfig
}

export interface RecoverableAnchor {
  name: string | null
  start: number
  end: number
  lines: number[]
  isComplete: boolean
}

function cloneConfig(config: FormattingConfig): FormattingConfig {
  return { ...config }
}

async function resolveConfig(request: FormatRequest): Promise<FormattingConfig> {
  if (request.config) {
    return request.config
  }

  if (request.workspaceDir) {
    return loadFormattingConfig({ searchDir: request.workspaceDir })
  }

  return DEFAULT_FORMATTING_CONFIG
}

export async function formatDocument(request: FormatRequest): Promise<FormatResult> {
  const config = await resolveConfig(request)
  const { ignoredLines, ignoredAnchors } = collectAnchorRecoveryMetadata(request.text)

  return {
    formattedText: request.text,
    config: cloneConfig(config),
    ignoredLines,
    ignoredAnchors: ignoredAnchors.length > 0 ? ignoredAnchors : undefined,
  }
}

function collectAnchorRecoveryMetadata(sourceText: string): {
  ignoredLines?: number[]
  ignoredAnchors: RecoverableAnchor[]
} {
  const anchors = detectFunctionAnchors(sourceText)
  const recoverable: RecoverableAnchor[] = []
  const ignoredLineSet: Set<number> = new Set()

  for (const anchor of anchors) {
    if (anchor.isComplete) continue
    const lines = calculateLinesForRange(sourceText, anchor.start, anchor.end)
    for (const line of lines) {
      ignoredLineSet.add(line)
    }
    recoverable.push({
      name: anchor.name,
      start: anchor.start,
      end: anchor.end,
      lines,
      isComplete: anchor.isComplete,
    })
  }

  return {
    ignoredAnchors: recoverable,
    ignoredLines: recoverable.length > 0 ? Array.from(ignoredLineSet).sort((a, b) => a - b) : undefined,
  }
}

function calculateLinesForRange(sourceText: string, startIndex: number, endIndex: number): number[] {
  if (sourceText.length === 0) return []

  const cappedStart = clampIndex(startIndex, sourceText.length)
  const cappedEnd = clampIndex(endIndex === startIndex ? endIndex : endIndex - 1, sourceText.length)

  const startLine = getLineNumberForIndex(sourceText, cappedStart)
  const endLine = getLineNumberForIndex(sourceText, cappedEnd)
  const lines: number[] = []
  for (let line = startLine; line <= endLine; line++) {
    lines.push(line)
  }
  return lines
}

function clampIndex(index: number, length: number): number {
  if (length === 0) return 0
  if (index < 0) return 0
  if (index >= length) return length - 1
  return index
}

function getLineNumberForIndex(sourceText: string, index: number): number {
  let line = 1
  for (let i = 0; i < index && i < sourceText.length; i++) {
    if (sourceText[i] === "\n") {
      line += 1
    }
  }
  return line
}
