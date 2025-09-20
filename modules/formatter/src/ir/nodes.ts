export type FormattingNodeKind = "class" | "function" | "constructor" | "property"

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
}
