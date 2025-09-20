export type FormattingNodeKind =
  | "class"
  | "interface"
  | "enhancement"
  | "function"
  | "constructor"
  | "property"
  | "statement"
  | "expression"
  | "block"
  | "parameter"
  | "type"
  | "uses"
  | "package"

export interface SourcePosition {
  line: number
  column: number
}

export interface SourceRange {
  start: SourcePosition
  end: SourcePosition
}

export interface FormattingNode {
  kind: FormattingNodeKind
  name: string | null
  range: SourceRange
  children: FormattingNode[]
  metadata?: Record<string, unknown>
}
