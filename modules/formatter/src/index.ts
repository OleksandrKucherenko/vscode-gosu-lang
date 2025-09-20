export {
  DEFAULT_FORMATTING_CONFIG,
  FORMATTER_CONFIG_SCHEMA,
  type FormatterOptionSchema,
  type FormattingConfig,
  loadFormattingConfig,
} from "./config"

export interface FormatResult {
  formattedText: string
  // Lines that were ignored due to syntax issues; numbers are 1-based
  ignoredLines?: number[]
}

export interface FormatRequest {
  uri: string
  text: string
}

export function formatDocument(_request: FormatRequest): FormatResult {
  throw new Error("Formatter not implemented yet")
}
