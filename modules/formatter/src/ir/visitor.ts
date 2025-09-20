import type { GosuParseResult, GosuToken } from "@gosu-lsp/parser"
import { GosuParser as AntlrGosuParser } from "@gosu-lsp/parser"
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
        case "gClass":
        case "GClassContext": {
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
        case "gEnhancement":
        case "GEnhancementContext": {
          const enhancementNode: FormattingNode = {
            kind: "class",
            name: this.getIdentifierText(node, "id"),
            range: this.getRange(node),
            children: [],
          }
          target.push(enhancementNode)
          this.visitChildren(node, enhancementNode.children)
          return
        }
        case "functionDefn":
        case "FunctionDefnContext": {
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
        case "constructorDefn":
        case "ConstructorDefnContext": {
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
        case "fullPropertyDefn":
        case "PropertyDefnContext":
        case "FullPropertyDefnContext": {
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
          const context = result as ParserRuleContext & { getText?: () => string; text?: string }
          if (typeof context.getText === "function") {
            const text = context.getText()
            if (text) return text
          }

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
        column: this.computeEndColumn(stop),
      },
    }
  }

  private computeEndColumn(stopToken: GosuToken | null | undefined): number {
    if (!stopToken) return 0

    if (typeof stopToken.stopIndex === "number" && typeof stopToken.startIndex === "number") {
      const length = stopToken.stopIndex - stopToken.startIndex + 1
      if (length >= 0) {
        return stopToken.column + length
      }
    }

    return stopToken.column ?? 0
  }
}
