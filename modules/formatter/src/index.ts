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
  config: FormattingConfig
}

export interface FormatRequest {
  uri: string
  text: string
  workspaceDir?: string
  config?: FormattingConfig
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

  return {
    formattedText: request.text,
    config: cloneConfig(config),
  }
}
