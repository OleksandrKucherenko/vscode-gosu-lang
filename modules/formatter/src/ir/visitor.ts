import type { GosuParseResult, GosuToken } from "@gosu-lsp/parser"
import { AntlrGosuParser } from "@gosu-lsp/parser"
import { ParserRuleContext, type ParseTree } from "antlr4ng"
import type { FormattingNode, SourceRange } from "./nodes"

export function buildFormattingTree(parseResult: GosuParseResult): FormattingNode[] {
  if (!parseResult.ast || !(parseResult.ast instanceof ParserRuleContext)) {
    return []
  }

  const builder = new FormattingTreeBuilder(parseResult.tokens ?? [])
  return builder.build(parseResult.ast)
}

class FormattingTreeBuilder {
  constructor(tokens: GosuToken[]) {
    this.tokens = tokens
  }

  build(root: ParserRuleContext): FormattingNode[] {
    const nodes: FormattingNode[] = []
    this.visit(root, nodes)
    return nodes
  }

  private visit(node: ParseTree, target: FormattingNode[]): void {
    if (node instanceof ParserRuleContext) {
      const ruleName = this.getRuleName(node)
      switch (ruleName) {
        case "namespaceStatement": {
          const packageNode: FormattingNode = {
            kind: "package",
            name: this.getPackageName(node),
            range: this.getRange(node),
            children: [],
          }
          target.push(packageNode)
          this.visitChildren(node, packageNode.children)
          return
        }
        case "usesStatement": {
          const usesNode: FormattingNode = {
            kind: "uses",
            name: this.getUsesName(node),
            range: this.getRange(node),
            children: [],
          }
          target.push(usesNode)
          this.visitChildren(node, usesNode.children)
          return
        }
        case "gClass": {
          const classNode: FormattingNode = {
            kind: "class",
            name: this.getIdentifierText(node, "id"),
            range: this.getRange(node),
            children: [],
          }
          target.push(classNode)
          this.visitChildren(node, classNode.children)
          return
        }
        case "gInterfaceOrStructure": {
          const interfaceNode: FormattingNode = {
            kind: "interface",
            name: this.getIdentifierText(node, "id"),
            range: this.getRange(node),
            children: [],
          }
          target.push(interfaceNode)
          this.visitChildren(node, interfaceNode.children)
          return
        }
        case "gEnhancement": {
          const enhancementNode: FormattingNode = {
            kind: "enhancement",
            name: this.getIdentifierText(node, "id"),
            range: this.getRange(node),
            children: [],
          }
          target.push(enhancementNode)
          this.visitChildren(node, enhancementNode.children)
          return
        }
        case "functionDefn": {
          const functionNode: FormattingNode = {
            kind: "function",
            name: this.getIdentifierText(node, "id"),
            range: this.getRange(node),
            children: [],
          }
          target.push(functionNode)
          this.visitChildren(node, functionNode.children)
          return
        }
        case "constructorDefn": {
          const constructorNode: FormattingNode = {
            kind: "constructor",
            name: this.getIdentifierText(node, "id"),
            range: this.getRange(node),
            children: [],
          }
          target.push(constructorNode)
          this.visitChildren(node, constructorNode.children)
          return
        }
        case "propertyDefn":
        case "fullPropertyDefn": {
          const propertyNode: FormattingNode = {
            kind: "property",
            name: this.getIdentifierText(node, "id"),
            range: this.getRange(node),
            children: [],
          }
          target.push(propertyNode)
          this.visitChildren(node, propertyNode.children)
          return
        }
        case "statement": {
          const statementNode: FormattingNode = {
            kind: "statement",
            name: null,
            range: this.getRange(node),
            children: [],
          }
          target.push(statementNode)
          this.visitChildren(node, statementNode.children)
          return
        }
        case "ifStatement": {
          const ifNode: FormattingNode = {
            kind: "if",
            name: null,
            range: this.getRange(node),
            children: [],
          }
          target.push(ifNode)
          this.visitChildren(node, ifNode.children)
          return
        }
        case "whileStatement": {
          const whileNode: FormattingNode = {
            kind: "while",
            name: null,
            range: this.getRange(node),
            children: [],
          }
          target.push(whileNode)
          this.visitChildren(node, whileNode.children)
          return
        }
        case "doWhileStatement": {
          const doWhileNode: FormattingNode = {
            kind: "doWhile",
            name: null,
            range: this.getRange(node),
            children: [],
          }
          target.push(doWhileNode)
          this.visitChildren(node, doWhileNode.children)
          return
        }
        case "switchStatement": {
          const switchNode: FormattingNode = {
            kind: "switch",
            name: null,
            range: this.getRange(node),
            children: [],
          }
          target.push(switchNode)
          this.visitChildren(node, switchNode.children)
          return
        }
        case "tryCatchFinallyStatement": {
          const tryNode: FormattingNode = {
            kind: "try",
            name: null,
            range: this.getRange(node),
            children: [],
          }
          target.push(tryNode)
          this.visitChildren(node, tryNode.children)
          return
        }
        default:
          break
      }
    }

    this.visitChildren(node, target)
  }

  private visitChildren(node: ParseTree, target: FormattingNode[]): void {
    if (!(node instanceof ParserRuleContext)) {
      return
    }

    const childCount = node.getChildCount()
    for (let i = 0; i < childCount; i++) {
      const child = node.getChild(i)
      if (child) {
        this.visit(child, target)
      }
    }
  }

  private getRuleName(node: ParserRuleContext): string | null {
    const index = node.ruleIndex
    if (
      typeof index === "number" &&
      Array.isArray(AntlrGosuParser.ruleNames) &&
      index < AntlrGosuParser.ruleNames.length
    ) {
      const name = AntlrGosuParser.ruleNames[index]
      if (name) return name
    }

    return node.constructor?.name ?? null
  }

  private getIdentifierText(node: ParserRuleContext, methodName: string): string | null {
    const anyNode = node as unknown as Record<string, unknown>
    const method = anyNode[methodName]

    if (typeof method === "function") {
      try {
        let result = (method as () => unknown).call(node)
        if (Array.isArray(result)) {
          result = result[0] ?? null
        }

        if (result && typeof result === "object") {
          const context = result as ParserRuleContext & {
            getText?: () => string
            text?: string
            IDENT?: () => { getText?: () => string; text?: string } | null
          }

          // Try IDENT() method first (for IdContext)
          if (typeof context.IDENT === "function") {
            const identNode = context.IDENT()
            if (identNode && typeof identNode.getText === "function") {
              const text = identNode.getText()
              if (text) return text
            }
            if (identNode && typeof identNode.text === "string") {
              return identNode.text
            }
          }

          // Fallback to getText()
          if (typeof context.getText === "function") {
            const text = context.getText()
            if (text) return text
          }

          // Fallback to text property
          if (typeof context.text === "string") {
            return context.text
          }
        }
      } catch {
        // Ignore and fall back to null
      }
    }

    return null
  }

  private getPackageName(node: ParserRuleContext): string | null {
    // Try to extract package name from the node using dotPathWord method
    const anyNode = node as unknown as { dotPathWord?: () => { getText?: () => string } }
    if (typeof anyNode.dotPathWord === "function") {
      try {
        const dotPathWord = anyNode.dotPathWord()
        if (dotPathWord && typeof dotPathWord.getText === "function") {
          return dotPathWord.getText()
        }
      } catch {
        // Ignore
      }
    }

    // Fallback to getText
    try {
      const text = node.getText()
      if (text?.startsWith("package ")) {
        return text.replace("package ", "").trim()
      }
    } catch {
      // Ignore
    }
    return null
  }

  private getUsesName(node: ParserRuleContext): string | null {
    // Try to extract uses name from the node using dotPathWord method
    const anyNode = node as unknown as { dotPathWord?: () => { getText?: () => string } }
    if (typeof anyNode.dotPathWord === "function") {
      try {
        const dotPathWord = anyNode.dotPathWord()
        if (dotPathWord && typeof dotPathWord.getText === "function") {
          return dotPathWord.getText()
        }
      } catch {
        // Ignore
      }
    }

    // Fallback to getText
    try {
      const text = node.getText()
      if (text?.startsWith("uses ")) {
        return text.replace("uses ", "").trim()
      }
    } catch {
      // Ignore
    }
    return null
  }

  private getRange(node: ParserRuleContext): SourceRange {
    const start = node.start
    const stop = node.stop ?? node.start

    return {
      start: {
        line: start?.line ?? 1,
        column: start?.charPositionInLine ?? 0,
      },
      end: {
        line: stop?.line ?? start?.line ?? 1,
        column: this.computeEndColumn(stop as GosuToken | null),
      },
    }
  }

  private computeEndColumn(stopToken: any): number {
    if (!stopToken) return 0

    // Try GosuToken properties first
    if (typeof stopToken.stopIndex === "number" && typeof stopToken.startIndex === "number") {
      const length = stopToken.stopIndex - stopToken.startIndex + 1
      if (length >= 0) {
        return stopToken.column + length
      }
    }

    // Fallback to antlr Token properties
    if (stopToken.text && typeof stopToken.charPositionInLine === "number") {
      return stopToken.charPositionInLine + stopToken.text.length
    }

    return stopToken.charPositionInLine ?? stopToken.column ?? 0
  }
}
