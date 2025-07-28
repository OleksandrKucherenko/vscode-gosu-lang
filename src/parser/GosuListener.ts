import type { ErrorNode, ParserRuleContext, ParseTreeListener, TerminalNode } from "antlr4ng"

import type {
  AdditiveExprContext,
  AdditiveOpContext,
  AndOpContext,
  AnnotationArgumentsContext,
  AnnotationContext,
  AnonymousInnerClassContext,
  ArgExpressionContext,
  ArgumentsContext,
  ArrayInitializerContext,
  ArrayValueListContext,
  AssertStatementContext,
  AssignmentOpContext,
  AssignmentOrMethodCallContext,
  BitshiftExprContext,
  BitshiftOpContext,
  BitwiseAndExprContext,
  BitwiseOrExprContext,
  BitwiseXorExprContext,
  BlockExprContext,
  BlockLiteralArgContext,
  BlockLiteralContext,
  BlockTypeLiteralContext,
  CatchClauseContext,
  ClassBodyContext,
  ClassMembersContext,
  ClassOrInterfaceTypeContext,
  ConditionalAndExprContext,
  ConditionalExprContext,
  ConditionalOrExprContext,
  ConstructorDefnContext,
  DeclarationContext,
  DelegateDefnContext,
  DelegateStatementContext,
  DotPathWordContext,
  DoWhileStatementContext,
  EnhancementBodyContext,
  EnhancementMembersContext,
  EnumBodyContext,
  EnumConstantContext,
  EnumConstantsContext,
  EqualityExprContext,
  EqualityOpContext,
  EvalExprContext,
  ExpressionContext,
  FeatureLiteralContext,
  FieldDefnContext,
  FinallyClauseContext,
  ForEachStatementContext,
  FunctionBodyContext,
  FunctionDefnContext,
  GClassContext,
  GEnhancementContext,
  GEnumContext,
  GInterfaceOrStructureContext,
  HeaderContext,
  IdAllContext,
  IdContext,
  IdclassOrInterfaceTypeContext,
  IfStatementContext,
  IncrementOpContext,
  IndexRestContext,
  IndexVarContext,
  IndirectMemberAccessContext,
  InitializerAssignmentContext,
  InitializerContext,
  InitializerExpressionContext,
  InterfaceBodyContext,
  InterfaceMembersContext,
  IntervalExprContext,
  IntervalOpContext,
  IteratorVarContext,
  LiteralContext,
  LocalVarStatementContext,
  MapInitializerListContext,
  ModifiersContext,
  MultiplicativeExprContext,
  MultiplicativeOpContext,
  NamedArgumentExpressionContext,
  NamespaceStatementContext,
  NewExprContext,
  NumberLiteralContext,
  ObjectInitializerContext,
  OptionalArgumentsContext,
  OptionalTypeContext,
  OrOpContext,
  ParameterDeclarationContext,
  ParameterDeclarationListContext,
  ParametersContext,
  ParenthExprContext,
  PrimaryExprContext,
  PropertyDefnContext,
  RelationalExprContext,
  RelOpContext,
  ReturnStatementContext,
  StandAloneDataStructureInitializationContext,
  StartContext,
  StatementBlockBodyContext,
  StatementBlockContext,
  StatementContext,
  SwitchBlockStatementGroupContext,
  SwitchStatementContext,
  ThisSuperExprContext,
  ThrowStatementContext,
  TryCatchFinallyStatementContext,
  TypeArgumentContext,
  TypeArgumentsContext,
  TypeAsExprContext,
  TypeAsOpContext,
  TypeContext,
  TypeLiteralContext,
  TypeLiteralExprContext,
  TypeLiteralListContext,
  TypeLiteralTypeContext,
  TypeVariableDefinitionContext,
  TypeVariableDefsContext,
  UnaryExprContext,
  UnaryExprNotPlusMinusContext,
  UnaryOpContext,
  UsesStatementContext,
  UsesStatementListContext,
  UsingStatementContext,
  WhileStatementContext,
} from "./GosuParser.js"

/**
 * This interface defines a complete listener for a parse tree produced by
 * `GosuParser`.
 */
export class GosuListener implements ParseTreeListener {
  /**
   * Enter a parse tree produced by `GosuParser.start`.
   * @param ctx the parse tree
   */
  enterStart?: (ctx: StartContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.start`.
   * @param ctx the parse tree
   */
  exitStart?: (ctx: StartContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.header`.
   * @param ctx the parse tree
   */
  enterHeader?: (ctx: HeaderContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.header`.
   * @param ctx the parse tree
   */
  exitHeader?: (ctx: HeaderContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.annotation`.
   * @param ctx the parse tree
   */
  enterAnnotation?: (ctx: AnnotationContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.annotation`.
   * @param ctx the parse tree
   */
  exitAnnotation?: (ctx: AnnotationContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.gClass`.
   * @param ctx the parse tree
   */
  enterGClass?: (ctx: GClassContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.gClass`.
   * @param ctx the parse tree
   */
  exitGClass?: (ctx: GClassContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.gInterfaceOrStructure`.
   * @param ctx the parse tree
   */
  enterGInterfaceOrStructure?: (ctx: GInterfaceOrStructureContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.gInterfaceOrStructure`.
   * @param ctx the parse tree
   */
  exitGInterfaceOrStructure?: (ctx: GInterfaceOrStructureContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.gEnum`.
   * @param ctx the parse tree
   */
  enterGEnum?: (ctx: GEnumContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.gEnum`.
   * @param ctx the parse tree
   */
  exitGEnum?: (ctx: GEnumContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.gEnhancement`.
   * @param ctx the parse tree
   */
  enterGEnhancement?: (ctx: GEnhancementContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.gEnhancement`.
   * @param ctx the parse tree
   */
  exitGEnhancement?: (ctx: GEnhancementContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.classBody`.
   * @param ctx the parse tree
   */
  enterClassBody?: (ctx: ClassBodyContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.classBody`.
   * @param ctx the parse tree
   */
  exitClassBody?: (ctx: ClassBodyContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.enhancementBody`.
   * @param ctx the parse tree
   */
  enterEnhancementBody?: (ctx: EnhancementBodyContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.enhancementBody`.
   * @param ctx the parse tree
   */
  exitEnhancementBody?: (ctx: EnhancementBodyContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.interfaceBody`.
   * @param ctx the parse tree
   */
  enterInterfaceBody?: (ctx: InterfaceBodyContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.interfaceBody`.
   * @param ctx the parse tree
   */
  exitInterfaceBody?: (ctx: InterfaceBodyContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.enumBody`.
   * @param ctx the parse tree
   */
  enterEnumBody?: (ctx: EnumBodyContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.enumBody`.
   * @param ctx the parse tree
   */
  exitEnumBody?: (ctx: EnumBodyContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.enumConstants`.
   * @param ctx the parse tree
   */
  enterEnumConstants?: (ctx: EnumConstantsContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.enumConstants`.
   * @param ctx the parse tree
   */
  exitEnumConstants?: (ctx: EnumConstantsContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.enumConstant`.
   * @param ctx the parse tree
   */
  enterEnumConstant?: (ctx: EnumConstantContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.enumConstant`.
   * @param ctx the parse tree
   */
  exitEnumConstant?: (ctx: EnumConstantContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.interfaceMembers`.
   * @param ctx the parse tree
   */
  enterInterfaceMembers?: (ctx: InterfaceMembersContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.interfaceMembers`.
   * @param ctx the parse tree
   */
  exitInterfaceMembers?: (ctx: InterfaceMembersContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.classMembers`.
   * @param ctx the parse tree
   */
  enterClassMembers?: (ctx: ClassMembersContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.classMembers`.
   * @param ctx the parse tree
   */
  exitClassMembers?: (ctx: ClassMembersContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.declaration`.
   * @param ctx the parse tree
   */
  enterDeclaration?: (ctx: DeclarationContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.declaration`.
   * @param ctx the parse tree
   */
  exitDeclaration?: (ctx: DeclarationContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.enhancementMembers`.
   * @param ctx the parse tree
   */
  enterEnhancementMembers?: (ctx: EnhancementMembersContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.enhancementMembers`.
   * @param ctx the parse tree
   */
  exitEnhancementMembers?: (ctx: EnhancementMembersContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.delegateDefn`.
   * @param ctx the parse tree
   */
  enterDelegateDefn?: (ctx: DelegateDefnContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.delegateDefn`.
   * @param ctx the parse tree
   */
  exitDelegateDefn?: (ctx: DelegateDefnContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.delegateStatement`.
   * @param ctx the parse tree
   */
  enterDelegateStatement?: (ctx: DelegateStatementContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.delegateStatement`.
   * @param ctx the parse tree
   */
  exitDelegateStatement?: (ctx: DelegateStatementContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.optionalType`.
   * @param ctx the parse tree
   */
  enterOptionalType?: (ctx: OptionalTypeContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.optionalType`.
   * @param ctx the parse tree
   */
  exitOptionalType?: (ctx: OptionalTypeContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.fieldDefn`.
   * @param ctx the parse tree
   */
  enterFieldDefn?: (ctx: FieldDefnContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.fieldDefn`.
   * @param ctx the parse tree
   */
  exitFieldDefn?: (ctx: FieldDefnContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.propertyDefn`.
   * @param ctx the parse tree
   */
  enterPropertyDefn?: (ctx: PropertyDefnContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.propertyDefn`.
   * @param ctx the parse tree
   */
  exitPropertyDefn?: (ctx: PropertyDefnContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.dotPathWord`.
   * @param ctx the parse tree
   */
  enterDotPathWord?: (ctx: DotPathWordContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.dotPathWord`.
   * @param ctx the parse tree
   */
  exitDotPathWord?: (ctx: DotPathWordContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.namespaceStatement`.
   * @param ctx the parse tree
   */
  enterNamespaceStatement?: (ctx: NamespaceStatementContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.namespaceStatement`.
   * @param ctx the parse tree
   */
  exitNamespaceStatement?: (ctx: NamespaceStatementContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.usesStatementList`.
   * @param ctx the parse tree
   */
  enterUsesStatementList?: (ctx: UsesStatementListContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.usesStatementList`.
   * @param ctx the parse tree
   */
  exitUsesStatementList?: (ctx: UsesStatementListContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.usesStatement`.
   * @param ctx the parse tree
   */
  enterUsesStatement?: (ctx: UsesStatementContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.usesStatement`.
   * @param ctx the parse tree
   */
  exitUsesStatement?: (ctx: UsesStatementContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.typeVariableDefs`.
   * @param ctx the parse tree
   */
  enterTypeVariableDefs?: (ctx: TypeVariableDefsContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.typeVariableDefs`.
   * @param ctx the parse tree
   */
  exitTypeVariableDefs?: (ctx: TypeVariableDefsContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.typeVariableDefinition`.
   * @param ctx the parse tree
   */
  enterTypeVariableDefinition?: (ctx: TypeVariableDefinitionContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.typeVariableDefinition`.
   * @param ctx the parse tree
   */
  exitTypeVariableDefinition?: (ctx: TypeVariableDefinitionContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.functionBody`.
   * @param ctx the parse tree
   */
  enterFunctionBody?: (ctx: FunctionBodyContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.functionBody`.
   * @param ctx the parse tree
   */
  exitFunctionBody?: (ctx: FunctionBodyContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.parameters`.
   * @param ctx the parse tree
   */
  enterParameters?: (ctx: ParametersContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.parameters`.
   * @param ctx the parse tree
   */
  exitParameters?: (ctx: ParametersContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.functionDefn`.
   * @param ctx the parse tree
   */
  enterFunctionDefn?: (ctx: FunctionDefnContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.functionDefn`.
   * @param ctx the parse tree
   */
  exitFunctionDefn?: (ctx: FunctionDefnContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.constructorDefn`.
   * @param ctx the parse tree
   */
  enterConstructorDefn?: (ctx: ConstructorDefnContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.constructorDefn`.
   * @param ctx the parse tree
   */
  exitConstructorDefn?: (ctx: ConstructorDefnContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.modifiers`.
   * @param ctx the parse tree
   */
  enterModifiers?: (ctx: ModifiersContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.modifiers`.
   * @param ctx the parse tree
   */
  exitModifiers?: (ctx: ModifiersContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.statement`.
   * @param ctx the parse tree
   */
  enterStatement?: (ctx: StatementContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.statement`.
   * @param ctx the parse tree
   */
  exitStatement?: (ctx: StatementContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.ifStatement`.
   * @param ctx the parse tree
   */
  enterIfStatement?: (ctx: IfStatementContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.ifStatement`.
   * @param ctx the parse tree
   */
  exitIfStatement?: (ctx: IfStatementContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.tryCatchFinallyStatement`.
   * @param ctx the parse tree
   */
  enterTryCatchFinallyStatement?: (ctx: TryCatchFinallyStatementContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.tryCatchFinallyStatement`.
   * @param ctx the parse tree
   */
  exitTryCatchFinallyStatement?: (ctx: TryCatchFinallyStatementContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.finallyClause`.
   * @param ctx the parse tree
   */
  enterFinallyClause?: (ctx: FinallyClauseContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.finallyClause`.
   * @param ctx the parse tree
   */
  exitFinallyClause?: (ctx: FinallyClauseContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.catchClause`.
   * @param ctx the parse tree
   */
  enterCatchClause?: (ctx: CatchClauseContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.catchClause`.
   * @param ctx the parse tree
   */
  exitCatchClause?: (ctx: CatchClauseContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.assertStatement`.
   * @param ctx the parse tree
   */
  enterAssertStatement?: (ctx: AssertStatementContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.assertStatement`.
   * @param ctx the parse tree
   */
  exitAssertStatement?: (ctx: AssertStatementContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.usingStatement`.
   * @param ctx the parse tree
   */
  enterUsingStatement?: (ctx: UsingStatementContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.usingStatement`.
   * @param ctx the parse tree
   */
  exitUsingStatement?: (ctx: UsingStatementContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.returnStatement`.
   * @param ctx the parse tree
   */
  enterReturnStatement?: (ctx: ReturnStatementContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.returnStatement`.
   * @param ctx the parse tree
   */
  exitReturnStatement?: (ctx: ReturnStatementContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.whileStatement`.
   * @param ctx the parse tree
   */
  enterWhileStatement?: (ctx: WhileStatementContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.whileStatement`.
   * @param ctx the parse tree
   */
  exitWhileStatement?: (ctx: WhileStatementContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.doWhileStatement`.
   * @param ctx the parse tree
   */
  enterDoWhileStatement?: (ctx: DoWhileStatementContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.doWhileStatement`.
   * @param ctx the parse tree
   */
  exitDoWhileStatement?: (ctx: DoWhileStatementContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.switchStatement`.
   * @param ctx the parse tree
   */
  enterSwitchStatement?: (ctx: SwitchStatementContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.switchStatement`.
   * @param ctx the parse tree
   */
  exitSwitchStatement?: (ctx: SwitchStatementContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.switchBlockStatementGroup`.
   * @param ctx the parse tree
   */
  enterSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.switchBlockStatementGroup`.
   * @param ctx the parse tree
   */
  exitSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.throwStatement`.
   * @param ctx the parse tree
   */
  enterThrowStatement?: (ctx: ThrowStatementContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.throwStatement`.
   * @param ctx the parse tree
   */
  exitThrowStatement?: (ctx: ThrowStatementContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.localVarStatement`.
   * @param ctx the parse tree
   */
  enterLocalVarStatement?: (ctx: LocalVarStatementContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.localVarStatement`.
   * @param ctx the parse tree
   */
  exitLocalVarStatement?: (ctx: LocalVarStatementContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.forEachStatement`.
   * @param ctx the parse tree
   */
  enterForEachStatement?: (ctx: ForEachStatementContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.forEachStatement`.
   * @param ctx the parse tree
   */
  exitForEachStatement?: (ctx: ForEachStatementContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.indexRest`.
   * @param ctx the parse tree
   */
  enterIndexRest?: (ctx: IndexRestContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.indexRest`.
   * @param ctx the parse tree
   */
  exitIndexRest?: (ctx: IndexRestContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.indexVar`.
   * @param ctx the parse tree
   */
  enterIndexVar?: (ctx: IndexVarContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.indexVar`.
   * @param ctx the parse tree
   */
  exitIndexVar?: (ctx: IndexVarContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.iteratorVar`.
   * @param ctx the parse tree
   */
  enterIteratorVar?: (ctx: IteratorVarContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.iteratorVar`.
   * @param ctx the parse tree
   */
  exitIteratorVar?: (ctx: IteratorVarContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.thisSuperExpr`.
   * @param ctx the parse tree
   */
  enterThisSuperExpr?: (ctx: ThisSuperExprContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.thisSuperExpr`.
   * @param ctx the parse tree
   */
  exitThisSuperExpr?: (ctx: ThisSuperExprContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.assignmentOrMethodCall`.
   * @param ctx the parse tree
   */
  enterAssignmentOrMethodCall?: (ctx: AssignmentOrMethodCallContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.assignmentOrMethodCall`.
   * @param ctx the parse tree
   */
  exitAssignmentOrMethodCall?: (ctx: AssignmentOrMethodCallContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.statementBlock`.
   * @param ctx the parse tree
   */
  enterStatementBlock?: (ctx: StatementBlockContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.statementBlock`.
   * @param ctx the parse tree
   */
  exitStatementBlock?: (ctx: StatementBlockContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.statementBlockBody`.
   * @param ctx the parse tree
   */
  enterStatementBlockBody?: (ctx: StatementBlockBodyContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.statementBlockBody`.
   * @param ctx the parse tree
   */
  exitStatementBlockBody?: (ctx: StatementBlockBodyContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.blockTypeLiteral`.
   * @param ctx the parse tree
   */
  enterBlockTypeLiteral?: (ctx: BlockTypeLiteralContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.blockTypeLiteral`.
   * @param ctx the parse tree
   */
  exitBlockTypeLiteral?: (ctx: BlockTypeLiteralContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.blockLiteral`.
   * @param ctx the parse tree
   */
  enterBlockLiteral?: (ctx: BlockLiteralContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.blockLiteral`.
   * @param ctx the parse tree
   */
  exitBlockLiteral?: (ctx: BlockLiteralContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.blockLiteralArg`.
   * @param ctx the parse tree
   */
  enterBlockLiteralArg?: (ctx: BlockLiteralArgContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.blockLiteralArg`.
   * @param ctx the parse tree
   */
  exitBlockLiteralArg?: (ctx: BlockLiteralArgContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.typeLiteral`.
   * @param ctx the parse tree
   */
  enterTypeLiteral?: (ctx: TypeLiteralContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.typeLiteral`.
   * @param ctx the parse tree
   */
  exitTypeLiteral?: (ctx: TypeLiteralContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.typeLiteralType`.
   * @param ctx the parse tree
   */
  enterTypeLiteralType?: (ctx: TypeLiteralTypeContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.typeLiteralType`.
   * @param ctx the parse tree
   */
  exitTypeLiteralType?: (ctx: TypeLiteralTypeContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.typeLiteralExpr`.
   * @param ctx the parse tree
   */
  enterTypeLiteralExpr?: (ctx: TypeLiteralExprContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.typeLiteralExpr`.
   * @param ctx the parse tree
   */
  exitTypeLiteralExpr?: (ctx: TypeLiteralExprContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.typeLiteralList`.
   * @param ctx the parse tree
   */
  enterTypeLiteralList?: (ctx: TypeLiteralListContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.typeLiteralList`.
   * @param ctx the parse tree
   */
  exitTypeLiteralList?: (ctx: TypeLiteralListContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.type`.
   * @param ctx the parse tree
   */
  enterType?: (ctx: TypeContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.type`.
   * @param ctx the parse tree
   */
  exitType?: (ctx: TypeContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.classOrInterfaceType`.
   * @param ctx the parse tree
   */
  enterClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.classOrInterfaceType`.
   * @param ctx the parse tree
   */
  exitClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.typeArguments`.
   * @param ctx the parse tree
   */
  enterTypeArguments?: (ctx: TypeArgumentsContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.typeArguments`.
   * @param ctx the parse tree
   */
  exitTypeArguments?: (ctx: TypeArgumentsContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.typeArgument`.
   * @param ctx the parse tree
   */
  enterTypeArgument?: (ctx: TypeArgumentContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.typeArgument`.
   * @param ctx the parse tree
   */
  exitTypeArgument?: (ctx: TypeArgumentContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.expression`.
   * @param ctx the parse tree
   */
  enterExpression?: (ctx: ExpressionContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.expression`.
   * @param ctx the parse tree
   */
  exitExpression?: (ctx: ExpressionContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.conditionalExpr`.
   * @param ctx the parse tree
   */
  enterConditionalExpr?: (ctx: ConditionalExprContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.conditionalExpr`.
   * @param ctx the parse tree
   */
  exitConditionalExpr?: (ctx: ConditionalExprContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.conditionalOrExpr`.
   * @param ctx the parse tree
   */
  enterConditionalOrExpr?: (ctx: ConditionalOrExprContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.conditionalOrExpr`.
   * @param ctx the parse tree
   */
  exitConditionalOrExpr?: (ctx: ConditionalOrExprContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.conditionalAndExpr`.
   * @param ctx the parse tree
   */
  enterConditionalAndExpr?: (ctx: ConditionalAndExprContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.conditionalAndExpr`.
   * @param ctx the parse tree
   */
  exitConditionalAndExpr?: (ctx: ConditionalAndExprContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.bitwiseOrExpr`.
   * @param ctx the parse tree
   */
  enterBitwiseOrExpr?: (ctx: BitwiseOrExprContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.bitwiseOrExpr`.
   * @param ctx the parse tree
   */
  exitBitwiseOrExpr?: (ctx: BitwiseOrExprContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.bitwiseXorExpr`.
   * @param ctx the parse tree
   */
  enterBitwiseXorExpr?: (ctx: BitwiseXorExprContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.bitwiseXorExpr`.
   * @param ctx the parse tree
   */
  exitBitwiseXorExpr?: (ctx: BitwiseXorExprContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.bitwiseAndExpr`.
   * @param ctx the parse tree
   */
  enterBitwiseAndExpr?: (ctx: BitwiseAndExprContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.bitwiseAndExpr`.
   * @param ctx the parse tree
   */
  exitBitwiseAndExpr?: (ctx: BitwiseAndExprContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.equalityExpr`.
   * @param ctx the parse tree
   */
  enterEqualityExpr?: (ctx: EqualityExprContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.equalityExpr`.
   * @param ctx the parse tree
   */
  exitEqualityExpr?: (ctx: EqualityExprContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.relationalExpr`.
   * @param ctx the parse tree
   */
  enterRelationalExpr?: (ctx: RelationalExprContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.relationalExpr`.
   * @param ctx the parse tree
   */
  exitRelationalExpr?: (ctx: RelationalExprContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.intervalExpr`.
   * @param ctx the parse tree
   */
  enterIntervalExpr?: (ctx: IntervalExprContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.intervalExpr`.
   * @param ctx the parse tree
   */
  exitIntervalExpr?: (ctx: IntervalExprContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.bitshiftExpr`.
   * @param ctx the parse tree
   */
  enterBitshiftExpr?: (ctx: BitshiftExprContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.bitshiftExpr`.
   * @param ctx the parse tree
   */
  exitBitshiftExpr?: (ctx: BitshiftExprContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.additiveExpr`.
   * @param ctx the parse tree
   */
  enterAdditiveExpr?: (ctx: AdditiveExprContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.additiveExpr`.
   * @param ctx the parse tree
   */
  exitAdditiveExpr?: (ctx: AdditiveExprContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.multiplicativeExpr`.
   * @param ctx the parse tree
   */
  enterMultiplicativeExpr?: (ctx: MultiplicativeExprContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.multiplicativeExpr`.
   * @param ctx the parse tree
   */
  exitMultiplicativeExpr?: (ctx: MultiplicativeExprContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.typeAsExpr`.
   * @param ctx the parse tree
   */
  enterTypeAsExpr?: (ctx: TypeAsExprContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.typeAsExpr`.
   * @param ctx the parse tree
   */
  exitTypeAsExpr?: (ctx: TypeAsExprContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.unaryExpr`.
   * @param ctx the parse tree
   */
  enterUnaryExpr?: (ctx: UnaryExprContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.unaryExpr`.
   * @param ctx the parse tree
   */
  exitUnaryExpr?: (ctx: UnaryExprContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.unaryExprNotPlusMinus`.
   * @param ctx the parse tree
   */
  enterUnaryExprNotPlusMinus?: (ctx: UnaryExprNotPlusMinusContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.unaryExprNotPlusMinus`.
   * @param ctx the parse tree
   */
  exitUnaryExprNotPlusMinus?: (ctx: UnaryExprNotPlusMinusContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.blockExpr`.
   * @param ctx the parse tree
   */
  enterBlockExpr?: (ctx: BlockExprContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.blockExpr`.
   * @param ctx the parse tree
   */
  exitBlockExpr?: (ctx: BlockExprContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.parameterDeclarationList`.
   * @param ctx the parse tree
   */
  enterParameterDeclarationList?: (ctx: ParameterDeclarationListContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.parameterDeclarationList`.
   * @param ctx the parse tree
   */
  exitParameterDeclarationList?: (ctx: ParameterDeclarationListContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.parameterDeclaration`.
   * @param ctx the parse tree
   */
  enterParameterDeclaration?: (ctx: ParameterDeclarationContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.parameterDeclaration`.
   * @param ctx the parse tree
   */
  exitParameterDeclaration?: (ctx: ParameterDeclarationContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.annotationArguments`.
   * @param ctx the parse tree
   */
  enterAnnotationArguments?: (ctx: AnnotationArgumentsContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.annotationArguments`.
   * @param ctx the parse tree
   */
  exitAnnotationArguments?: (ctx: AnnotationArgumentsContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.arguments`.
   * @param ctx the parse tree
   */
  enterArguments?: (ctx: ArgumentsContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.arguments`.
   * @param ctx the parse tree
   */
  exitArguments?: (ctx: ArgumentsContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.optionalArguments`.
   * @param ctx the parse tree
   */
  enterOptionalArguments?: (ctx: OptionalArgumentsContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.optionalArguments`.
   * @param ctx the parse tree
   */
  exitOptionalArguments?: (ctx: OptionalArgumentsContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.argExpression`.
   * @param ctx the parse tree
   */
  enterArgExpression?: (ctx: ArgExpressionContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.argExpression`.
   * @param ctx the parse tree
   */
  exitArgExpression?: (ctx: ArgExpressionContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.namedArgumentExpression`.
   * @param ctx the parse tree
   */
  enterNamedArgumentExpression?: (ctx: NamedArgumentExpressionContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.namedArgumentExpression`.
   * @param ctx the parse tree
   */
  exitNamedArgumentExpression?: (ctx: NamedArgumentExpressionContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.evalExpr`.
   * @param ctx the parse tree
   */
  enterEvalExpr?: (ctx: EvalExprContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.evalExpr`.
   * @param ctx the parse tree
   */
  exitEvalExpr?: (ctx: EvalExprContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.featureLiteral`.
   * @param ctx the parse tree
   */
  enterFeatureLiteral?: (ctx: FeatureLiteralContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.featureLiteral`.
   * @param ctx the parse tree
   */
  exitFeatureLiteral?: (ctx: FeatureLiteralContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.standAloneDataStructureInitialization`.
   * @param ctx the parse tree
   */
  enterStandAloneDataStructureInitialization?: (ctx: StandAloneDataStructureInitializationContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.standAloneDataStructureInitialization`.
   * @param ctx the parse tree
   */
  exitStandAloneDataStructureInitialization?: (ctx: StandAloneDataStructureInitializationContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.primaryExpr`.
   * @param ctx the parse tree
   */
  enterPrimaryExpr?: (ctx: PrimaryExprContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.primaryExpr`.
   * @param ctx the parse tree
   */
  exitPrimaryExpr?: (ctx: PrimaryExprContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.parenthExpr`.
   * @param ctx the parse tree
   */
  enterParenthExpr?: (ctx: ParenthExprContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.parenthExpr`.
   * @param ctx the parse tree
   */
  exitParenthExpr?: (ctx: ParenthExprContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.newExpr`.
   * @param ctx the parse tree
   */
  enterNewExpr?: (ctx: NewExprContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.newExpr`.
   * @param ctx the parse tree
   */
  exitNewExpr?: (ctx: NewExprContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.anonymousInnerClass`.
   * @param ctx the parse tree
   */
  enterAnonymousInnerClass?: (ctx: AnonymousInnerClassContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.anonymousInnerClass`.
   * @param ctx the parse tree
   */
  exitAnonymousInnerClass?: (ctx: AnonymousInnerClassContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.arrayInitializer`.
   * @param ctx the parse tree
   */
  enterArrayInitializer?: (ctx: ArrayInitializerContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.arrayInitializer`.
   * @param ctx the parse tree
   */
  exitArrayInitializer?: (ctx: ArrayInitializerContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.initializer`.
   * @param ctx the parse tree
   */
  enterInitializer?: (ctx: InitializerContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.initializer`.
   * @param ctx the parse tree
   */
  exitInitializer?: (ctx: InitializerContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.initializerExpression`.
   * @param ctx the parse tree
   */
  enterInitializerExpression?: (ctx: InitializerExpressionContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.initializerExpression`.
   * @param ctx the parse tree
   */
  exitInitializerExpression?: (ctx: InitializerExpressionContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.arrayValueList`.
   * @param ctx the parse tree
   */
  enterArrayValueList?: (ctx: ArrayValueListContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.arrayValueList`.
   * @param ctx the parse tree
   */
  exitArrayValueList?: (ctx: ArrayValueListContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.mapInitializerList`.
   * @param ctx the parse tree
   */
  enterMapInitializerList?: (ctx: MapInitializerListContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.mapInitializerList`.
   * @param ctx the parse tree
   */
  exitMapInitializerList?: (ctx: MapInitializerListContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.objectInitializer`.
   * @param ctx the parse tree
   */
  enterObjectInitializer?: (ctx: ObjectInitializerContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.objectInitializer`.
   * @param ctx the parse tree
   */
  exitObjectInitializer?: (ctx: ObjectInitializerContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.initializerAssignment`.
   * @param ctx the parse tree
   */
  enterInitializerAssignment?: (ctx: InitializerAssignmentContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.initializerAssignment`.
   * @param ctx the parse tree
   */
  exitInitializerAssignment?: (ctx: InitializerAssignmentContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.indirectMemberAccess`.
   * @param ctx the parse tree
   */
  enterIndirectMemberAccess?: (ctx: IndirectMemberAccessContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.indirectMemberAccess`.
   * @param ctx the parse tree
   */
  exitIndirectMemberAccess?: (ctx: IndirectMemberAccessContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.literal`.
   * @param ctx the parse tree
   */
  enterLiteral?: (ctx: LiteralContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.literal`.
   * @param ctx the parse tree
   */
  exitLiteral?: (ctx: LiteralContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.numberLiteral`.
   * @param ctx the parse tree
   */
  enterNumberLiteral?: (ctx: NumberLiteralContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.numberLiteral`.
   * @param ctx the parse tree
   */
  exitNumberLiteral?: (ctx: NumberLiteralContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.orOp`.
   * @param ctx the parse tree
   */
  enterOrOp?: (ctx: OrOpContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.orOp`.
   * @param ctx the parse tree
   */
  exitOrOp?: (ctx: OrOpContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.andOp`.
   * @param ctx the parse tree
   */
  enterAndOp?: (ctx: AndOpContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.andOp`.
   * @param ctx the parse tree
   */
  exitAndOp?: (ctx: AndOpContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.assignmentOp`.
   * @param ctx the parse tree
   */
  enterAssignmentOp?: (ctx: AssignmentOpContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.assignmentOp`.
   * @param ctx the parse tree
   */
  exitAssignmentOp?: (ctx: AssignmentOpContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.incrementOp`.
   * @param ctx the parse tree
   */
  enterIncrementOp?: (ctx: IncrementOpContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.incrementOp`.
   * @param ctx the parse tree
   */
  exitIncrementOp?: (ctx: IncrementOpContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.equalityOp`.
   * @param ctx the parse tree
   */
  enterEqualityOp?: (ctx: EqualityOpContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.equalityOp`.
   * @param ctx the parse tree
   */
  exitEqualityOp?: (ctx: EqualityOpContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.intervalOp`.
   * @param ctx the parse tree
   */
  enterIntervalOp?: (ctx: IntervalOpContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.intervalOp`.
   * @param ctx the parse tree
   */
  exitIntervalOp?: (ctx: IntervalOpContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.relOp`.
   * @param ctx the parse tree
   */
  enterRelOp?: (ctx: RelOpContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.relOp`.
   * @param ctx the parse tree
   */
  exitRelOp?: (ctx: RelOpContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.bitshiftOp`.
   * @param ctx the parse tree
   */
  enterBitshiftOp?: (ctx: BitshiftOpContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.bitshiftOp`.
   * @param ctx the parse tree
   */
  exitBitshiftOp?: (ctx: BitshiftOpContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.additiveOp`.
   * @param ctx the parse tree
   */
  enterAdditiveOp?: (ctx: AdditiveOpContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.additiveOp`.
   * @param ctx the parse tree
   */
  exitAdditiveOp?: (ctx: AdditiveOpContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.multiplicativeOp`.
   * @param ctx the parse tree
   */
  enterMultiplicativeOp?: (ctx: MultiplicativeOpContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.multiplicativeOp`.
   * @param ctx the parse tree
   */
  exitMultiplicativeOp?: (ctx: MultiplicativeOpContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.typeAsOp`.
   * @param ctx the parse tree
   */
  enterTypeAsOp?: (ctx: TypeAsOpContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.typeAsOp`.
   * @param ctx the parse tree
   */
  exitTypeAsOp?: (ctx: TypeAsOpContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.unaryOp`.
   * @param ctx the parse tree
   */
  enterUnaryOp?: (ctx: UnaryOpContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.unaryOp`.
   * @param ctx the parse tree
   */
  exitUnaryOp?: (ctx: UnaryOpContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.id`.
   * @param ctx the parse tree
   */
  enterId?: (ctx: IdContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.id`.
   * @param ctx the parse tree
   */
  exitId?: (ctx: IdContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.idclassOrInterfaceType`.
   * @param ctx the parse tree
   */
  enterIdclassOrInterfaceType?: (ctx: IdclassOrInterfaceTypeContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.idclassOrInterfaceType`.
   * @param ctx the parse tree
   */
  exitIdclassOrInterfaceType?: (ctx: IdclassOrInterfaceTypeContext) => void
  /**
   * Enter a parse tree produced by `GosuParser.idAll`.
   * @param ctx the parse tree
   */
  enterIdAll?: (ctx: IdAllContext) => void
  /**
   * Exit a parse tree produced by `GosuParser.idAll`.
   * @param ctx the parse tree
   */
  exitIdAll?: (ctx: IdAllContext) => void

  visitTerminal(_node: TerminalNode): void {}
  visitErrorNode(_node: ErrorNode): void {}
  enterEveryRule(_node: ParserRuleContext): void {}
  exitEveryRule(_node: ParserRuleContext): void {}
}
