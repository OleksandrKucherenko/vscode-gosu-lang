/** biome-ignore-all lint/suspicious/noExplicitAny: simplify code */
import { AntlrGosuParser, type GosuParser } from "@gosu-lsp/parser"
import {
  addSymbolToTable,
  createSymbolTable,
  type GosuASTSymbol,
  type GosuImport,
  type GosuParameter,
  type GosuSymbolTable,
} from "@gosu-lsp/shared"
import { ParserRuleContext, type ParseTree } from "antlr4ng"
import Debug from "debug"

const debug = Debug("gosu:lsp:symbol-extractor")

/**
 * AST Symbol Extractor for Gosu Language
 * Traverses ANTLR parse tree to extract symbols for intelligent completion
 */
export class GosuSymbolExtractor {
  parser: GosuParser

  constructor(parser: GosuParser) {
    this.parser = parser
    debug("Initialized GosuSymbolExtractor")
  }

  /**
   * Extract symbols from parsed AST
   */
  extractSymbols(uri: string, ast: ParseTree): GosuSymbolTable {
    debug("Extracting symbols from AST for %s", uri)

    const symbolTable = createSymbolTable(uri)

    // Start traversal from root
    this.traverse(ast, symbolTable, null)

    debug("Extracted %d symbols from %s", symbolTable.allSymbols.length, uri)
    return symbolTable
  }

  /**
   * Traverse AST node and extract symbols
   */
  private traverse(node: ParseTree, symbolTable: GosuSymbolTable, parentScope: string | null): void {
    if (!node) return

    const ruleName = this.getRuleName(node)
    const nodeText = node.getText()
    const debugLabel = ruleName ?? node.constructor.name

    debug("Traversing node: %s (%s)", debugLabel, nodeText.substring(0, 50))

    if (!ruleName) {
      this.traverseChildren(node, symbolTable, parentScope)
      return
    }

    switch (ruleName) {
      case "start":
      case "header":
        this.extractFromCompilationUnit(node, symbolTable, parentScope)
        break

      case "namespaceStatement":
        this.extractPackageStatement(node, symbolTable)
        break

      case "usesStatement":
        this.extractUsesStatement(node, symbolTable)
        break

      case "gClass":
        this.extractClassDeclaration(node, symbolTable, parentScope)
        break

      case "gInterfaceOrStructure":
        this.extractInterfaceDeclaration(node, symbolTable, parentScope)
        break

      case "gEnhancement":
        this.extractEnhancementDeclaration(node, symbolTable, parentScope)
        break

      case "fieldDefn":
        this.extractFieldDeclaration(node, symbolTable, parentScope)
        break

      case "constructorDefn":
        this.extractConstructorDeclaration(node, symbolTable, parentScope)
        break

      case "functionDefn":
        this.extractMethodDeclaration(node, symbolTable, parentScope)
        break

      case "propertyDefn":
      case "fullPropertyDefn":
        this.extractPropertyDeclaration(node, symbolTable, parentScope)
        break

      case "localVarStatement":
        this.extractVariableDeclaration(node, symbolTable, parentScope)
        break

      default:
        this.traverseChildren(node, symbolTable, parentScope)
        break
    }
  }

  /**
   * Traverse child nodes
   */
  private traverseChildren(node: ParseTree, symbolTable: GosuSymbolTable, parentScope: string | null): void {
    const childCount = node.getChildCount()
    for (let i = 0; i < childCount; i++) {
      const child = node.getChild(i)
      if (child) {
        this.traverse(child, symbolTable, parentScope)
      }
    }
  }

  /**
   * Map a parse tree node to the original grammar rule name
   */
  private getRuleName(node: ParseTree): string | null {
    if (node instanceof ParserRuleContext) {
      const ruleIndex = node.ruleIndex
      if (typeof ruleIndex === "number" && ruleIndex >= 0) {
        return AntlrGosuParser.ruleNames[ruleIndex] ?? null
      }
    }

    return null
  }

  /**
   * Extract from compilation unit (root)
   */
  private extractFromCompilationUnit(node: ParseTree, symbolTable: GosuSymbolTable, parentScope: string | null): void {
    this.traverseChildren(node, symbolTable, parentScope)
  }

  /**
   * Extract package statement
   */
  private extractPackageStatement(node: ParseTree, _symbolTable: GosuSymbolTable): void {
    // Package statements don't add symbols but could be used for context
    debug("Found package statement: %s", node.getText())
  }

  /**
   * Extract uses/import statements
   */
  private extractUsesStatement(node: ParseTree, symbolTable: GosuSymbolTable): void {
    const text = node.getText()
    debug("Found uses statement: %s", text)

    // For UsesStatementContext, extract the full import path
    // The text will be something like "java.util.List" without the "uses" keyword
    const fullPath = text.trim()
    const isWildcard = fullPath.endsWith(".*")
    const importName = isWildcard ? fullPath.replace(".*", "") : fullPath.split(".").pop() || fullPath

    const importSymbol: GosuImport = {
      name: importName,
      path: fullPath,
      isWildcard,
      line: this.getLineNumber(node),
      column: this.getColumnNumber(node),
    }

    symbolTable.imports.push(importSymbol)
    debug("Added import symbol: %s -> %s", importName, fullPath)
  }

  /**
   * Extract class declaration
   */
  private extractClassDeclaration(node: ParseTree, symbolTable: GosuSymbolTable, parentScope: string | null): void {
    const text = node.getText()
    debug("Found class declaration: %s", text.substring(0, 100))

    // For GClassContext, we need to find the class name from child nodes
    let className = ""
    let visibility = "internal"

    // Look for the class name in child nodes
    const childCount = node.getChildCount()
    for (let i = 0; i < childCount; i++) {
      const child = node.getChild(i)
      if (child) {
        const childType = child.constructor.name
        if (childType === "IdContext") {
          className = child.getText()
          break
        }
      }
    }

    // Look for visibility in parent node (ModifiersContext)
    const parent = (node as any).parent
    if (parent) {
      const parentSiblings = parent.getChildCount()
      for (let i = 0; i < parentSiblings; i++) {
        const sibling = parent.getChild(i)
        if (sibling && this.getRuleName(sibling) === "modifiers") {
          const modifierText = sibling.getText().toLowerCase()
          if (["public", "private", "protected", "internal"].includes(modifierText)) {
            visibility = modifierText as any
          }
          break
        }
      }
    }

    if (className) {
      const classSymbol: GosuASTSymbol = {
        name: className,
        type: "class",
        line: this.getLineNumber(node),
        column: this.getColumnNumber(node),
        visibility: visibility as any,
        scope: parentScope || "file",
      }

      addSymbolToTable(symbolTable, classSymbol)
      debug("Added class symbol: %s (%s)", className, visibility)

      // Continue traversing with class as parent scope
      this.traverseChildren(node, symbolTable, className)
    } else {
      debug("Could not extract class name from node")
      this.traverseChildren(node, symbolTable, parentScope)
    }
  }

  /**
   * Extract interface declaration
   */
  private extractInterfaceDeclaration(node: ParseTree, symbolTable: GosuSymbolTable, parentScope: string | null): void {
    debug("Found interface declaration: %s", node.getText().substring(0, 100))

    let interfaceName = ""
    const childCount = node.getChildCount()
    for (let i = 0; i < childCount; i++) {
      const child = node.getChild(i)
      if (this.getRuleName(child) === "id") {
        interfaceName = child.getText()
        break
      }
    }

    if (!interfaceName) {
      debug("Could not extract interface name from node")
      this.traverseChildren(node, symbolTable, parentScope)
      return
    }

    const visibility = this.resolveVisibility(node, "public")

    const interfaceSymbol: GosuASTSymbol = {
      name: interfaceName,
      type: "interface",
      line: this.getLineNumber(node),
      column: this.getColumnNumber(node),
      visibility: visibility as any,
      scope: parentScope || "file",
    }

    addSymbolToTable(symbolTable, interfaceSymbol)
    debug("Added interface symbol: %s (%s)", interfaceName, visibility)

    this.traverseChildren(node, symbolTable, interfaceName)
  }

  /**
   * Extract enhancement declaration
   */
  private extractEnhancementDeclaration(
    node: ParseTree,
    symbolTable: GosuSymbolTable,
    parentScope: string | null,
  ): void {
    const text = node.getText()
    debug("Found enhancement declaration: %s", text.substring(0, 100))

    let enhancementName = ""
    const childCount = node.getChildCount()
    for (let i = 0; i < childCount; i++) {
      const child = node.getChild(i)
      if (this.getRuleName(child) === "id") {
        enhancementName = child.getText()
        break
      }
    }

    if (!enhancementName) {
      debug("Could not extract enhancement name from node")
      this.traverseChildren(node, symbolTable, parentScope)
      return
    }

    const visibility = this.resolveVisibility(node, "public")

    const enhancementSymbol: GosuASTSymbol = {
      name: enhancementName,
      type: "enhancement",
      line: this.getLineNumber(node),
      column: this.getColumnNumber(node),
      visibility: visibility as any,
      scope: parentScope || "file",
    }

    addSymbolToTable(symbolTable, enhancementSymbol)
    debug("Added enhancement symbol: %s (%s)", enhancementName, visibility)

    this.traverseChildren(node, symbolTable, enhancementName)
  }

  /**
   * Extract field declaration
   */
  private extractFieldDeclaration(node: ParseTree, symbolTable: GosuSymbolTable, parentScope: string | null): void {
    const text = node.getText()
    debug("Found field declaration: %s", text.substring(0, 100))

    // For FieldDefnContext, extract field name and type from child nodes
    let fieldName = ""
    let dataType = ""
    let visibility = "internal"
    let isStatic = false

    // Look for field name and type in child nodes
    const childCount = node.getChildCount()
    for (let i = 0; i < childCount; i++) {
      const child = node.getChild(i)
      if (child) {
        const childType = child.constructor.name
        if (childType === "IdContext") {
          fieldName = child.getText()
        } else if (childType === "OptionalTypeContext") {
          // Extract type from OptionalTypeContext
          const typeText = child.getText()
          const typeMatch = typeText.match(/:(.+)/)
          if (typeMatch) {
            dataType = typeMatch[1].trim()
          }
        }
      }
    }

    // Look for visibility and static modifiers in parent declaration
    const parent = (node as any).parent
    if (parent) {
      const parentSiblings = parent.getChildCount()
      for (let i = 0; i < parentSiblings; i++) {
        const sibling = parent.getChild(i)
        if (sibling && sibling.constructor.name === "ModifiersContext") {
          const modifierText = sibling.getText().toLowerCase()
          if (["public", "private", "protected", "internal"].includes(modifierText)) {
            visibility = modifierText as any
          }
          if (modifierText.includes("static")) {
            isStatic = true
          }
        }
      }
    }

    if (fieldName && dataType) {
      const fieldSymbol: GosuASTSymbol = {
        name: fieldName,
        type: "field",
        dataType,
        line: this.getLineNumber(node),
        column: this.getColumnNumber(node),
        visibility: visibility as any,
        isStatic,
        scope: parentScope || "file",
      }

      addSymbolToTable(symbolTable, fieldSymbol)
      debug("Added field symbol: %s : %s (%s%s)", fieldName, dataType, visibility, isStatic ? " static" : "")
    } else {
      debug("Could not extract field info: name=%s, type=%s", fieldName, dataType)
    }

    // Continue traversing for nested content
    this.traverseChildren(node, symbolTable, parentScope)
  }

  /**
   * Extract constructor declaration
   */
  private extractConstructorDeclaration(
    node: ParseTree,
    symbolTable: GosuSymbolTable,
    parentScope: string | null,
  ): void {
    const text = node.getText()
    debug("Found constructor declaration: %s", text.substring(0, 100))

    // For ConstructorDefnContext, extract parameters from child nodes
    let visibility = "public"
    let parameters: GosuParameter[] = []

    // Look for parameters in child nodes
    const childCount = node.getChildCount()
    for (let i = 0; i < childCount; i++) {
      const child = node.getChild(i)
      if (child && child.constructor.name === "ParametersContext") {
        const paramText = child.getText()
        const paramString = paramText.replace(/[()]/g, "") // Remove parentheses
        parameters = this.parseParameters(paramString)
        break
      }
    }

    // Look for visibility in parent declaration
    const parent = (node as any).parent
    if (parent) {
      const parentSiblings = parent.getChildCount()
      for (let i = 0; i < parentSiblings; i++) {
        const sibling = parent.getChild(i)
        if (sibling && sibling.constructor.name === "ModifiersContext") {
          const modifierText = sibling.getText().toLowerCase()
          if (["public", "private", "protected", "internal"].includes(modifierText)) {
            visibility = modifierText as any
          }
        }
      }
    }

    const constructorSymbol: GosuASTSymbol = {
      name: "construct",
      type: "constructor",
      line: this.getLineNumber(node),
      column: this.getColumnNumber(node),
      visibility: visibility as any,
      parameters,
      scope: parentScope || "file",
    }

    addSymbolToTable(symbolTable, constructorSymbol)
    debug("Added constructor symbol with %d parameters (%s)", parameters.length, visibility)

    // Continue traversing for function body
    this.traverseChildren(node, symbolTable, parentScope)
  }

  /**
   * Extract method declaration
   */
  private extractMethodDeclaration(node: ParseTree, symbolTable: GosuSymbolTable, parentScope: string | null): void {
    const text = node.getText()
    debug("Found method declaration: %s", text.substring(0, 100))

    // For FunctionDefnContext, extract method name, parameters, and return type from child nodes
    let methodName = ""
    let visibility = "public"
    let isStatic = false
    let returnType = "void"
    let parameters: GosuParameter[] = []

    // Look for method info in child nodes
    const childCount = node.getChildCount()
    for (let i = 0; i < childCount; i++) {
      const child = node.getChild(i)
      if (child) {
        const childType = child.constructor.name
        if (childType === "IdContext") {
          methodName = child.getText()
        } else if (childType === "ParametersContext") {
          const paramText = child.getText()
          const paramString = paramText.replace(/[()]/g, "") // Remove parentheses
          parameters = this.parseParameters(paramString)
        } else if (childType === "TypeLiteralContext") {
          // This is the return type
          returnType = child.getText()
        }
      }
    }

    // Look for visibility and static modifiers in parent declaration
    const parent = (node as any).parent
    if (parent) {
      const parentSiblings = parent.getChildCount()
      for (let i = 0; i < parentSiblings; i++) {
        const sibling = parent.getChild(i)
        if (sibling && sibling.constructor.name === "ModifiersContext") {
          const modifierText = sibling.getText().toLowerCase()
          if (["public", "private", "protected", "internal"].includes(modifierText)) {
            visibility = modifierText as any
          }
          if (modifierText.includes("static")) {
            isStatic = true
          }
        }
      }
    }

    if (methodName) {
      const methodSymbol: GosuASTSymbol = {
        name: methodName,
        type: "function",
        returnType,
        line: this.getLineNumber(node),
        column: this.getColumnNumber(node),
        visibility: visibility as any,
        isStatic,
        parameters,
        scope: parentScope || "file",
      }

      addSymbolToTable(symbolTable, methodSymbol)
      debug(
        "Added method symbol: %s(%s) : %s (%s%s)",
        methodName,
        parameters.map((p) => p.name).join(", "),
        returnType,
        visibility,
        isStatic ? " static" : "",
      )
    } else {
      debug("Could not extract method name from node")
    }

    // Continue traversing for function body and local variables
    this.traverseChildren(node, symbolTable, parentScope)
  }

  /**
   * Extract property declaration
   */
  private extractPropertyDeclaration(node: ParseTree, symbolTable: GosuSymbolTable, parentScope: string | null): void {
    const text = node.getText()
    debug("Found property declaration: %s", text.substring(0, 100))

    // Match property getter/setter patterns
    const propertyMatch = text.match(
      /(public|private|protected|internal)?\s*property\s+(get|set)\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*(?:\(([^)]*)\))?\s*(?::\s*([a-zA-Z0-9_<>[\],.\s]+))?/i,
    )
    if (propertyMatch) {
      const visibility = (propertyMatch[1] as any) || "public"
      const accessorType = propertyMatch[2].toLowerCase()
      const propertyName = propertyMatch[3]
      const paramString = propertyMatch[4] || ""
      const returnType = propertyMatch[5]?.trim() || (accessorType === "get" ? "Object" : "void")
      const parameters = accessorType === "set" ? this.parseParameters(paramString) : []

      const propertySymbol: GosuASTSymbol = {
        name: propertyName,
        type: "property",
        returnType,
        line: this.getLineNumber(node),
        column: this.getColumnNumber(node),
        visibility,
        parameters,
        scope: parentScope || "file",
      }

      addSymbolToTable(symbolTable, propertySymbol)
      debug("Added property symbol: %s %s : %s (%s)", accessorType, propertyName, returnType, visibility)
    }

    // Continue traversing for property body
    this.traverseChildren(node, symbolTable, parentScope)
  }

  /**
   * Extract variable declaration
   */
  private extractVariableDeclaration(node: ParseTree, symbolTable: GosuSymbolTable, parentScope: string | null): void {
    const text = node.getText()
    debug("Found variable declaration: %s", text.substring(0, 100))

    // Match variable patterns: "var result : List<String> = new ArrayList<String>()"
    const varMatch = text.match(/var\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*:\s*([a-zA-Z0-9_<>[\],.\s]+)/i)
    if (varMatch) {
      const varName = varMatch[1]
      const dataType = varMatch[2].trim()

      const variableSymbol: GosuASTSymbol = {
        name: varName,
        type: "variable",
        dataType,
        line: this.getLineNumber(node),
        column: this.getColumnNumber(node),
        scope: parentScope || "file",
      }

      addSymbolToTable(symbolTable, variableSymbol)
      debug("Added variable symbol: %s : %s", varName, dataType)
    }

    // Continue traversing
    this.traverseChildren(node, symbolTable, parentScope)
  }

  /**
   * Determine visibility modifier from the surrounding context
   */
  private resolveVisibility(node: ParseTree, defaultVisibility: string): string {
    const parent = node instanceof ParserRuleContext ? (node as ParserRuleContext).parent : undefined
    if (!parent) {
      return defaultVisibility
    }

    const childCount = parent.getChildCount()
    for (let i = 0; i < childCount; i++) {
      const sibling = parent.getChild(i)
      if (this.getRuleName(sibling) === "modifiers") {
        const modifierText = sibling.getText().toLowerCase()
        if (["public", "private", "protected", "internal"].includes(modifierText)) {
          return modifierText
        }
      }
    }

    return defaultVisibility
  }

  /**
   * Parse parameter string into parameter objects
   */
  private parseParameters(paramString: string): GosuParameter[] {
    if (!paramString || paramString.trim() === "") {
      return []
    }

    const parameters: GosuParameter[] = []
    const paramParts = paramString.split(",")

    for (const part of paramParts) {
      const trimmed = part.trim()
      if (trimmed) {
        // Match parameter pattern: "name : Type" or "name : Type = defaultValue"
        const paramMatch = trimmed.match(/([a-zA-Z_][a-zA-Z0-9_]*)\s*:\s*([a-zA-Z0-9_<>[\],.\s]+)(?:\s*=\s*(.+))?/)
        if (paramMatch) {
          const parameter: GosuParameter = {
            name: paramMatch[1],
            type: paramMatch[2].trim(),
            isOptional: !!paramMatch[3],
            defaultValue: paramMatch[3]?.trim(),
          }
          parameters.push(parameter)
          debug(
            "Parsed parameter: %s : %s%s",
            parameter.name,
            parameter.type,
            parameter.isOptional ? " (optional)" : "",
          )
        }
      }
    }

    return parameters
  }

  /**
   * Get line number from parse tree node
   */
  private getLineNumber(node: ParseTree): number {
    // Try to get line from token if available
    try {
      const context = node as any
      if (context.start && context.start.line !== undefined) {
        return context.start.line
      }
      if (context.getStart && context.getStart().line !== undefined) {
        return context.getStart().line
      }
    } catch (error) {
      debug("Could not get line number from node: %O", error)
    }
    return 1 // Default fallback
  }

  /**
   * Get column number from parse tree node
   */
  private getColumnNumber(node: ParseTree): number {
    // Try to get column from token if available
    try {
      const context = node as any
      if (context.start && context.start.column !== undefined) {
        return context.start.column
      }
      if (context.getStart && context.getStart().column !== undefined) {
        return context.getStart().column
      }
    } catch (error) {
      debug("Could not get column number from node: %O", error)
    }
    return 0 // Default fallback
  }
}
