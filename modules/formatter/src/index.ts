import type { GosuParseResult } from "@gosu-lsp/parser"
import { GosuParser } from "@gosu-lsp/parser"
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
  type FormatterDiagnostic,
}

export interface FormatResult {
  formattedText: string
  ignoredLines?: number[]
  ignoredAnchors?: RecoverableAnchor[]
  config: FormattingConfig
  diagnostics?: FormatterDiagnostic[]
}

export interface FormatRequest {
  uri: string
  text: string
  workspaceDir?: string
  config?: FormattingConfig
  filePath?: string
}

export interface RecoverableAnchor {
  name: string | null
  start: number
  end: number
  lines: number[]
  isComplete: boolean
}

export interface FormatterDiagnostic {
  message: string
  line: number
  column: number
  severity: "error" | "warning"
  code?: string
  source?: "parser" | "anchor"
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
  const filePath = resolveFilePath(request)
  const { syntaxDiagnostics } = parseDocument(request.text, filePath)
  const { ignoredLines, ignoredAnchors, diagnostics: anchorDiagnostics } = collectAnchorRecoveryMetadata(request.text)
  const diagnostics = [...syntaxDiagnostics, ...anchorDiagnostics]

  return {
    formattedText: request.text,
    config: cloneConfig(config),
    ignoredLines,
    ignoredAnchors: ignoredAnchors.length > 0 ? ignoredAnchors : undefined,
    diagnostics: diagnostics.length > 0 ? diagnostics : undefined,
  }
}

function collectAnchorRecoveryMetadata(sourceText: string): {
  ignoredLines?: number[]
  ignoredAnchors: RecoverableAnchor[]
  diagnostics: FormatterDiagnostic[]
} {
  const anchors = detectFunctionAnchors(sourceText)
  const recoverable: RecoverableAnchor[] = []
  const ignoredLineSet: Set<number> = new Set()
  const diagnostics: FormatterDiagnostic[] = []

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
    diagnostics.push({
      message: anchor.name
        ? `Skipped formatting for '${anchor.name}' due to unmatched braces`
        : "Skipped formatting for malformed function scope",
      line: lines[0] ?? 1,
      column: 0,
      severity: "warning",
      code: "ANCHOR_RECOVERY",
      source: "anchor",
    })
  }

  return {
    ignoredAnchors: recoverable,
    ignoredLines: recoverable.length > 0 ? Array.from(ignoredLineSet).sort((a, b) => a - b) : undefined,
    diagnostics,
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

const sharedParser = new GosuParser()

function parseDocument(
  sourceText: string,
  filePath: string,
): {
  parseResult: GosuParseResult
  syntaxDiagnostics: FormatterDiagnostic[]
} {
  const parseResult = sharedParser.parseText(sourceText, filePath)
  const syntaxDiagnostics: FormatterDiagnostic[] = (parseResult.syntaxErrors ?? []).map((error) => ({
    message: error.message,
    line: error.line,
    column: error.column,
    severity: error.severity,
    code: error.code,
    source: "parser" as const,
  }))

  return { parseResult, syntaxDiagnostics }
}

function resolveFilePath(request: FormatRequest): string {
  if (request.filePath) return request.filePath

  const uri = request.uri
  const segments = uri.split("/").filter((segment) => segment.length > 0)
  const lastSegment = segments[segments.length - 1]
  if (lastSegment?.includes(".")) {
    return decodeURIComponent(lastSegment)
  }

  return "Document.gs"
}
