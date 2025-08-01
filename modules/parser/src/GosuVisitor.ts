import { AbstractParseTreeVisitor } from "antlr4ng"
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
  FullPropertyDefnContext,
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
  PropertyAccessorContext,
  PropertyBodyContext,
  PropertyDefnContext,
  PropertyTypeSuffixContext,
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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `GosuParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class GosuVisitor<Result> extends AbstractParseTreeVisitor<Result> {
  /**
   * Visit a parse tree produced by `GosuParser.start`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStart?: (ctx: StartContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.header`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitHeader?: (ctx: HeaderContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.annotation`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAnnotation?: (ctx: AnnotationContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.gClass`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitGClass?: (ctx: GClassContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.gInterfaceOrStructure`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitGInterfaceOrStructure?: (ctx: GInterfaceOrStructureContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.gEnum`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitGEnum?: (ctx: GEnumContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.gEnhancement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitGEnhancement?: (ctx: GEnhancementContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.classBody`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitClassBody?: (ctx: ClassBodyContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.enhancementBody`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEnhancementBody?: (ctx: EnhancementBodyContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.interfaceBody`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInterfaceBody?: (ctx: InterfaceBodyContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.enumBody`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEnumBody?: (ctx: EnumBodyContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.enumConstants`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEnumConstants?: (ctx: EnumConstantsContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.enumConstant`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEnumConstant?: (ctx: EnumConstantContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.interfaceMembers`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInterfaceMembers?: (ctx: InterfaceMembersContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.classMembers`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitClassMembers?: (ctx: ClassMembersContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.declaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDeclaration?: (ctx: DeclarationContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.enhancementMembers`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEnhancementMembers?: (ctx: EnhancementMembersContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.delegateDefn`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDelegateDefn?: (ctx: DelegateDefnContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.delegateStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDelegateStatement?: (ctx: DelegateStatementContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.optionalType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitOptionalType?: (ctx: OptionalTypeContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.fieldDefn`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFieldDefn?: (ctx: FieldDefnContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.propertyDefn`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPropertyDefn?: (ctx: PropertyDefnContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.dotPathWord`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDotPathWord?: (ctx: DotPathWordContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.namespaceStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNamespaceStatement?: (ctx: NamespaceStatementContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.usesStatementList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUsesStatementList?: (ctx: UsesStatementListContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.usesStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUsesStatement?: (ctx: UsesStatementContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.typeVariableDefs`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeVariableDefs?: (ctx: TypeVariableDefsContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.typeVariableDefinition`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeVariableDefinition?: (ctx: TypeVariableDefinitionContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.functionBody`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFunctionBody?: (ctx: FunctionBodyContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.parameters`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParameters?: (ctx: ParametersContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.functionDefn`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFunctionDefn?: (ctx: FunctionDefnContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.constructorDefn`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConstructorDefn?: (ctx: ConstructorDefnContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.fullPropertyDefn`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFullPropertyDefn?: (ctx: FullPropertyDefnContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.propertyTypeSuffix`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPropertyTypeSuffix?: (ctx: PropertyTypeSuffixContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.propertyBody`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPropertyBody?: (ctx: PropertyBodyContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.propertyAccessor`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPropertyAccessor?: (ctx: PropertyAccessorContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.modifiers`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitModifiers?: (ctx: ModifiersContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStatement?: (ctx: StatementContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.ifStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIfStatement?: (ctx: IfStatementContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.tryCatchFinallyStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTryCatchFinallyStatement?: (ctx: TryCatchFinallyStatementContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.finallyClause`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFinallyClause?: (ctx: FinallyClauseContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.catchClause`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCatchClause?: (ctx: CatchClauseContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.assertStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAssertStatement?: (ctx: AssertStatementContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.usingStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUsingStatement?: (ctx: UsingStatementContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.returnStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitReturnStatement?: (ctx: ReturnStatementContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.whileStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitWhileStatement?: (ctx: WhileStatementContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.doWhileStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDoWhileStatement?: (ctx: DoWhileStatementContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.switchStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSwitchStatement?: (ctx: SwitchStatementContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.switchBlockStatementGroup`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.throwStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitThrowStatement?: (ctx: ThrowStatementContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.localVarStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLocalVarStatement?: (ctx: LocalVarStatementContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.forEachStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitForEachStatement?: (ctx: ForEachStatementContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.indexRest`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIndexRest?: (ctx: IndexRestContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.indexVar`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIndexVar?: (ctx: IndexVarContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.iteratorVar`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIteratorVar?: (ctx: IteratorVarContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.thisSuperExpr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitThisSuperExpr?: (ctx: ThisSuperExprContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.assignmentOrMethodCall`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAssignmentOrMethodCall?: (ctx: AssignmentOrMethodCallContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.statementBlock`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStatementBlock?: (ctx: StatementBlockContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.statementBlockBody`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStatementBlockBody?: (ctx: StatementBlockBodyContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.blockTypeLiteral`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBlockTypeLiteral?: (ctx: BlockTypeLiteralContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.blockLiteral`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBlockLiteral?: (ctx: BlockLiteralContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.blockLiteralArg`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBlockLiteralArg?: (ctx: BlockLiteralArgContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.typeLiteral`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeLiteral?: (ctx: TypeLiteralContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.typeLiteralType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeLiteralType?: (ctx: TypeLiteralTypeContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.typeLiteralExpr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeLiteralExpr?: (ctx: TypeLiteralExprContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.typeLiteralList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeLiteralList?: (ctx: TypeLiteralListContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.type`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitType?: (ctx: TypeContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.classOrInterfaceType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.typeArguments`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeArguments?: (ctx: TypeArgumentsContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.typeArgument`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeArgument?: (ctx: TypeArgumentContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpression?: (ctx: ExpressionContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.conditionalExpr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConditionalExpr?: (ctx: ConditionalExprContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.conditionalOrExpr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConditionalOrExpr?: (ctx: ConditionalOrExprContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.conditionalAndExpr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConditionalAndExpr?: (ctx: ConditionalAndExprContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.bitwiseOrExpr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBitwiseOrExpr?: (ctx: BitwiseOrExprContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.bitwiseXorExpr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBitwiseXorExpr?: (ctx: BitwiseXorExprContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.bitwiseAndExpr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBitwiseAndExpr?: (ctx: BitwiseAndExprContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.equalityExpr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEqualityExpr?: (ctx: EqualityExprContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.relationalExpr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRelationalExpr?: (ctx: RelationalExprContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.intervalExpr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIntervalExpr?: (ctx: IntervalExprContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.bitshiftExpr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBitshiftExpr?: (ctx: BitshiftExprContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.additiveExpr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAdditiveExpr?: (ctx: AdditiveExprContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.multiplicativeExpr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMultiplicativeExpr?: (ctx: MultiplicativeExprContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.typeAsExpr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeAsExpr?: (ctx: TypeAsExprContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.unaryExpr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnaryExpr?: (ctx: UnaryExprContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.unaryExprNotPlusMinus`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnaryExprNotPlusMinus?: (ctx: UnaryExprNotPlusMinusContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.blockExpr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBlockExpr?: (ctx: BlockExprContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.parameterDeclarationList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParameterDeclarationList?: (ctx: ParameterDeclarationListContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.parameterDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParameterDeclaration?: (ctx: ParameterDeclarationContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.annotationArguments`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAnnotationArguments?: (ctx: AnnotationArgumentsContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.arguments`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArguments?: (ctx: ArgumentsContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.optionalArguments`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitOptionalArguments?: (ctx: OptionalArgumentsContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.argExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArgExpression?: (ctx: ArgExpressionContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.namedArgumentExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNamedArgumentExpression?: (ctx: NamedArgumentExpressionContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.evalExpr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEvalExpr?: (ctx: EvalExprContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.featureLiteral`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFeatureLiteral?: (ctx: FeatureLiteralContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.standAloneDataStructureInitialization`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStandAloneDataStructureInitialization?: (ctx: StandAloneDataStructureInitializationContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.primaryExpr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrimaryExpr?: (ctx: PrimaryExprContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.parenthExpr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParenthExpr?: (ctx: ParenthExprContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.newExpr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNewExpr?: (ctx: NewExprContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.anonymousInnerClass`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAnonymousInnerClass?: (ctx: AnonymousInnerClassContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.arrayInitializer`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArrayInitializer?: (ctx: ArrayInitializerContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.initializer`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInitializer?: (ctx: InitializerContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.initializerExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInitializerExpression?: (ctx: InitializerExpressionContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.arrayValueList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArrayValueList?: (ctx: ArrayValueListContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.mapInitializerList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMapInitializerList?: (ctx: MapInitializerListContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.objectInitializer`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitObjectInitializer?: (ctx: ObjectInitializerContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.initializerAssignment`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInitializerAssignment?: (ctx: InitializerAssignmentContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.indirectMemberAccess`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIndirectMemberAccess?: (ctx: IndirectMemberAccessContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.literal`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLiteral?: (ctx: LiteralContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.numberLiteral`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNumberLiteral?: (ctx: NumberLiteralContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.orOp`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitOrOp?: (ctx: OrOpContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.andOp`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAndOp?: (ctx: AndOpContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.assignmentOp`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAssignmentOp?: (ctx: AssignmentOpContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.incrementOp`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIncrementOp?: (ctx: IncrementOpContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.equalityOp`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEqualityOp?: (ctx: EqualityOpContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.intervalOp`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIntervalOp?: (ctx: IntervalOpContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.relOp`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRelOp?: (ctx: RelOpContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.bitshiftOp`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBitshiftOp?: (ctx: BitshiftOpContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.additiveOp`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAdditiveOp?: (ctx: AdditiveOpContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.multiplicativeOp`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMultiplicativeOp?: (ctx: MultiplicativeOpContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.typeAsOp`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeAsOp?: (ctx: TypeAsOpContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.unaryOp`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnaryOp?: (ctx: UnaryOpContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.id`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitId?: (ctx: IdContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.idclassOrInterfaceType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIdclassOrInterfaceType?: (ctx: IdclassOrInterfaceTypeContext) => Result
  /**
   * Visit a parse tree produced by `GosuParser.idAll`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIdAll?: (ctx: IdAllContext) => Result
}
