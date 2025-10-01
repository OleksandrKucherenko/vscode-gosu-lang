export type FormattingOp =
  | { kind: "text"; text: string }
  | { kind: "space" }
  | { kind: "softLine" }
  | { kind: "hardLine" }
  | { kind: "indent"; delta: number }
  | { kind: "groupStart" }
  | { kind: "groupEnd" }

export function text(text: string): FormattingOp {
  return { kind: "text", text }
}

export const space: FormattingOp = { kind: "space" }
export const softLine: FormattingOp = { kind: "softLine" }
export const hardLine: FormattingOp = { kind: "hardLine" }

export function indent(delta: number): FormattingOp {
  return { kind: "indent", delta }
}

export const groupStart: FormattingOp = { kind: "groupStart" }
export const groupEnd: FormattingOp = { kind: "groupEnd" }
