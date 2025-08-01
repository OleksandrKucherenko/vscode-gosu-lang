/** biome-ignore-all lint/style/noNonNullAssertion: auto-generated code */
import * as antlr from "antlr4ng"

import type { GosuListener } from "./GosuListener.js"
import type { GosuVisitor } from "./GosuVisitor.js"

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
// biome-ignore lint/correctness/noUnusedVariables: auto-generated code
type int = number

export class GosuParser extends antlr.Parser {
  public static readonly T__0 = 1
  public static readonly T__1 = 2
  public static readonly T__2 = 3
  public static readonly T__3 = 4
  public static readonly T__4 = 5
  public static readonly T__5 = 6
  public static readonly T__6 = 7
  public static readonly T__7 = 8
  public static readonly T__8 = 9
  public static readonly T__9 = 10
  public static readonly T__10 = 11
  public static readonly T__11 = 12
  public static readonly T__12 = 13
  public static readonly T__13 = 14
  public static readonly T__14 = 15
  public static readonly T__15 = 16
  public static readonly T__16 = 17
  public static readonly T__17 = 18
  public static readonly T__18 = 19
  public static readonly T__19 = 20
  public static readonly T__20 = 21
  public static readonly T__21 = 22
  public static readonly T__22 = 23
  public static readonly T__23 = 24
  public static readonly T__24 = 25
  public static readonly T__25 = 26
  public static readonly T__26 = 27
  public static readonly T__27 = 28
  public static readonly T__28 = 29
  public static readonly T__29 = 30
  public static readonly T__30 = 31
  public static readonly T__31 = 32
  public static readonly T__32 = 33
  public static readonly T__33 = 34
  public static readonly T__34 = 35
  public static readonly T__35 = 36
  public static readonly T__36 = 37
  public static readonly T__37 = 38
  public static readonly T__38 = 39
  public static readonly T__39 = 40
  public static readonly T__40 = 41
  public static readonly T__41 = 42
  public static readonly T__42 = 43
  public static readonly T__43 = 44
  public static readonly T__44 = 45
  public static readonly T__45 = 46
  public static readonly T__46 = 47
  public static readonly T__47 = 48
  public static readonly T__48 = 49
  public static readonly T__49 = 50
  public static readonly T__50 = 51
  public static readonly T__51 = 52
  public static readonly T__52 = 53
  public static readonly T__53 = 54
  public static readonly T__54 = 55
  public static readonly T__55 = 56
  public static readonly T__56 = 57
  public static readonly T__57 = 58
  public static readonly T__58 = 59
  public static readonly T__59 = 60
  public static readonly T__60 = 61
  public static readonly T__61 = 62
  public static readonly T__62 = 63
  public static readonly T__63 = 64
  public static readonly T__64 = 65
  public static readonly T__65 = 66
  public static readonly T__66 = 67
  public static readonly T__67 = 68
  public static readonly T__68 = 69
  public static readonly T__69 = 70
  public static readonly AND = 71
  public static readonly OR = 72
  public static readonly NOT = 73
  public static readonly IN = 74
  public static readonly VAR = 75
  public static readonly DELEGATE = 76
  public static readonly REPRESENTS = 77
  public static readonly TYPEOF = 78
  public static readonly STATICTYPEOF = 79
  public static readonly TYPEIS = 80
  public static readonly TYPEAS = 81
  public static readonly PACKAGE = 82
  public static readonly USES = 83
  public static readonly IF = 84
  public static readonly ELSE = 85
  public static readonly UNLESS = 86
  public static readonly FOREACH = 87
  public static readonly FOR = 88
  public static readonly WHILE = 89
  public static readonly DO = 90
  public static readonly CONTINUE = 91
  public static readonly BREAK = 92
  public static readonly RETURN = 93
  public static readonly CONSTRUCT = 94
  public static readonly FUNCTION = 95
  public static readonly PROPERTY = 96
  public static readonly TRY = 97
  public static readonly CATCH = 98
  public static readonly FINALLY = 99
  public static readonly THROW = 100
  public static readonly NEW = 101
  public static readonly SWITCH = 102
  public static readonly CASE = 103
  public static readonly DEFAULT = 104
  public static readonly EVAL = 105
  public static readonly OVERRIDE = 106
  public static readonly EXTENDS = 107
  public static readonly TRANSIENT = 108
  public static readonly IMPLEMENTS = 109
  public static readonly CLASS = 110
  public static readonly INTERFACE = 111
  public static readonly STRUCTURE = 112
  public static readonly ENUM = 113
  public static readonly USING = 114
  public static readonly TRUE = 115
  public static readonly FALSE = 116
  public static readonly NAN = 117
  public static readonly INFINITY = 118
  public static readonly NULL = 119
  public static readonly LENGTH = 120
  public static readonly EXISTS = 121
  public static readonly STARTSWITH = 122
  public static readonly CONTAINS = 123
  public static readonly WHERE = 124
  public static readonly FIND = 125
  public static readonly AS = 126
  public static readonly EXCEPT = 127
  public static readonly INDEX = 128
  public static readonly ITERATOR = 129
  public static readonly GET = 130
  public static readonly SET = 131
  public static readonly ASSERT = 132
  public static readonly PRIVATE = 133
  public static readonly INTERNAL = 134
  public static readonly PROTECTED = 135
  public static readonly PUBLIC = 136
  public static readonly ABSTRACT = 137
  public static readonly HIDE = 138
  public static readonly FINAL = 139
  public static readonly STATIC = 140
  public static readonly READONLY = 141
  public static readonly OUTER = 142
  public static readonly EXECUTION = 143
  public static readonly REQUEST = 144
  public static readonly SESSION = 145
  public static readonly APPLICATION = 146
  public static readonly VOID = 147
  public static readonly BLOCK = 148
  public static readonly ENHANCEMENT = 149
  public static readonly CLASSPATH = 150
  public static readonly TYPELOADER = 151
  public static readonly THIS = 152
  public static readonly SUPER = 153
  public static readonly IDENT = 154
  public static readonly CHAR_LITERAL = 155
  public static readonly STRING_LITERAL = 156
  public static readonly HEX_LITERAL = 157
  public static readonly BIN_LITERAL = 158
  public static readonly DECIMAL_LITERAL = 159
  public static readonly WS = 160
  public static readonly COMMENT = 161
  public static readonly LINE_COMMENT = 162
  public static readonly RULE_start = 0
  public static readonly RULE_header = 1
  public static readonly RULE_annotation = 2
  public static readonly RULE_gClass = 3
  public static readonly RULE_gInterfaceOrStructure = 4
  public static readonly RULE_gEnum = 5
  public static readonly RULE_gEnhancement = 6
  public static readonly RULE_classBody = 7
  public static readonly RULE_enhancementBody = 8
  public static readonly RULE_interfaceBody = 9
  public static readonly RULE_enumBody = 10
  public static readonly RULE_enumConstants = 11
  public static readonly RULE_enumConstant = 12
  public static readonly RULE_interfaceMembers = 13
  public static readonly RULE_classMembers = 14
  public static readonly RULE_declaration = 15
  public static readonly RULE_enhancementMembers = 16
  public static readonly RULE_delegateDefn = 17
  public static readonly RULE_delegateStatement = 18
  public static readonly RULE_optionalType = 19
  public static readonly RULE_fieldDefn = 20
  public static readonly RULE_propertyDefn = 21
  public static readonly RULE_dotPathWord = 22
  public static readonly RULE_namespaceStatement = 23
  public static readonly RULE_usesStatementList = 24
  public static readonly RULE_usesStatement = 25
  public static readonly RULE_typeVariableDefs = 26
  public static readonly RULE_typeVariableDefinition = 27
  public static readonly RULE_functionBody = 28
  public static readonly RULE_parameters = 29
  public static readonly RULE_functionDefn = 30
  public static readonly RULE_constructorDefn = 31
  public static readonly RULE_fullPropertyDefn = 32
  public static readonly RULE_propertyTypeSuffix = 33
  public static readonly RULE_propertyBody = 34
  public static readonly RULE_propertyAccessor = 35
  public static readonly RULE_modifiers = 36
  public static readonly RULE_statement = 37
  public static readonly RULE_ifStatement = 38
  public static readonly RULE_tryCatchFinallyStatement = 39
  public static readonly RULE_finallyClause = 40
  public static readonly RULE_catchClause = 41
  public static readonly RULE_assertStatement = 42
  public static readonly RULE_usingStatement = 43
  public static readonly RULE_returnStatement = 44
  public static readonly RULE_whileStatement = 45
  public static readonly RULE_doWhileStatement = 46
  public static readonly RULE_switchStatement = 47
  public static readonly RULE_switchBlockStatementGroup = 48
  public static readonly RULE_throwStatement = 49
  public static readonly RULE_localVarStatement = 50
  public static readonly RULE_forEachStatement = 51
  public static readonly RULE_indexRest = 52
  public static readonly RULE_indexVar = 53
  public static readonly RULE_iteratorVar = 54
  public static readonly RULE_thisSuperExpr = 55
  public static readonly RULE_assignmentOrMethodCall = 56
  public static readonly RULE_statementBlock = 57
  public static readonly RULE_statementBlockBody = 58
  public static readonly RULE_blockTypeLiteral = 59
  public static readonly RULE_blockLiteral = 60
  public static readonly RULE_blockLiteralArg = 61
  public static readonly RULE_typeLiteral = 62
  public static readonly RULE_typeLiteralType = 63
  public static readonly RULE_typeLiteralExpr = 64
  public static readonly RULE_typeLiteralList = 65
  public static readonly RULE_type = 66
  public static readonly RULE_classOrInterfaceType = 67
  public static readonly RULE_typeArguments = 68
  public static readonly RULE_typeArgument = 69
  public static readonly RULE_expression = 70
  public static readonly RULE_conditionalExpr = 71
  public static readonly RULE_conditionalOrExpr = 72
  public static readonly RULE_conditionalAndExpr = 73
  public static readonly RULE_bitwiseOrExpr = 74
  public static readonly RULE_bitwiseXorExpr = 75
  public static readonly RULE_bitwiseAndExpr = 76
  public static readonly RULE_equalityExpr = 77
  public static readonly RULE_relationalExpr = 78
  public static readonly RULE_intervalExpr = 79
  public static readonly RULE_bitshiftExpr = 80
  public static readonly RULE_additiveExpr = 81
  public static readonly RULE_multiplicativeExpr = 82
  public static readonly RULE_typeAsExpr = 83
  public static readonly RULE_unaryExpr = 84
  public static readonly RULE_unaryExprNotPlusMinus = 85
  public static readonly RULE_blockExpr = 86
  public static readonly RULE_parameterDeclarationList = 87
  public static readonly RULE_parameterDeclaration = 88
  public static readonly RULE_annotationArguments = 89
  public static readonly RULE_arguments = 90
  public static readonly RULE_optionalArguments = 91
  public static readonly RULE_argExpression = 92
  public static readonly RULE_namedArgumentExpression = 93
  public static readonly RULE_evalExpr = 94
  public static readonly RULE_featureLiteral = 95
  public static readonly RULE_standAloneDataStructureInitialization = 96
  public static readonly RULE_primaryExpr = 97
  public static readonly RULE_parenthExpr = 98
  public static readonly RULE_newExpr = 99
  public static readonly RULE_anonymousInnerClass = 100
  public static readonly RULE_arrayInitializer = 101
  public static readonly RULE_initializer = 102
  public static readonly RULE_initializerExpression = 103
  public static readonly RULE_arrayValueList = 104
  public static readonly RULE_mapInitializerList = 105
  public static readonly RULE_objectInitializer = 106
  public static readonly RULE_initializerAssignment = 107
  public static readonly RULE_indirectMemberAccess = 108
  public static readonly RULE_literal = 109
  public static readonly RULE_numberLiteral = 110
  public static readonly RULE_orOp = 111
  public static readonly RULE_andOp = 112
  public static readonly RULE_assignmentOp = 113
  public static readonly RULE_incrementOp = 114
  public static readonly RULE_equalityOp = 115
  public static readonly RULE_intervalOp = 116
  public static readonly RULE_relOp = 117
  public static readonly RULE_bitshiftOp = 118
  public static readonly RULE_additiveOp = 119
  public static readonly RULE_multiplicativeOp = 120
  public static readonly RULE_typeAsOp = 121
  public static readonly RULE_unaryOp = 122
  public static readonly RULE_id = 123
  public static readonly RULE_idclassOrInterfaceType = 124
  public static readonly RULE_idAll = 125

  public static readonly literalNames = [
    null,
    "'@'",
    "'.'",
    "','",
    "':'",
    "'['",
    "']'",
    "'{'",
    "'}'",
    "';'",
    "'='",
    "'*'",
    "'<'",
    "'>'",
    "'('",
    "')'",
    "'&'",
    "'?'",
    "'?:'",
    "'|'",
    "'^'",
    "'+'",
    "'-'",
    "'!-'",
    "'\\'",
    "'->'",
    "'#'",
    "'?.'",
    "'*.'",
    "'?['",
    "'||'",
    "'&&'",
    "'+='",
    "'-='",
    "'*='",
    "'/='",
    "'&='",
    "'&&='",
    "'|='",
    "'||='",
    "'^='",
    "'%='",
    "'<<='",
    "'>>>='",
    "'>>='",
    "'++'",
    "'--'",
    "'==='",
    "'!=='",
    "'=='",
    "'!='",
    "'..'",
    "'|..'",
    "'..|'",
    "'|..|'",
    "'<='",
    "'>='",
    "'<<'",
    "'>>>'",
    "'>>'",
    "'?+'",
    "'?-'",
    "'!+'",
    "'/'",
    "'%'",
    "'?*'",
    "'!*'",
    "'?/'",
    "'?%'",
    "'~'",
    "'!'",
    "'and'",
    "'or'",
    "'not'",
    "'in'",
    "'var'",
    "'delegate'",
    "'represents'",
    "'typeof'",
    "'statictypeof'",
    "'typeis'",
    "'typeas'",
    "'package'",
    "'uses'",
    "'if'",
    "'else'",
    "'unless'",
    "'foreach'",
    "'for'",
    "'while'",
    "'do'",
    "'continue'",
    "'break'",
    "'return'",
    "'construct'",
    "'function'",
    "'property'",
    "'try'",
    "'catch'",
    "'finally'",
    "'throw'",
    "'new'",
    "'switch'",
    "'case'",
    "'default'",
    "'eval'",
    "'override'",
    "'extends'",
    "'transient'",
    "'implements'",
    "'class'",
    "'interface'",
    "'structure'",
    "'enum'",
    "'using'",
    "'true'",
    "'false'",
    "'NaN'",
    "'Infinity'",
    "'null'",
    "'length'",
    "'exists'",
    "'startswith'",
    "'contains'",
    "'where'",
    "'find'",
    "'as'",
    "'except'",
    "'index'",
    "'iterator'",
    "'get'",
    "'set'",
    "'assert'",
    "'private'",
    "'internal'",
    "'protected'",
    "'public'",
    "'abstract'",
    "'hide'",
    "'final'",
    "'static'",
    "'readonly'",
    "'outer'",
    "'execution'",
    "'request'",
    "'session'",
    "'application'",
    "'void'",
    "'block'",
    "'enhancement'",
    "'classpath'",
    "'typeloader'",
    "'this'",
    "'super'",
  ]

  public static readonly symbolicNames = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "AND",
    "OR",
    "NOT",
    "IN",
    "VAR",
    "DELEGATE",
    "REPRESENTS",
    "TYPEOF",
    "STATICTYPEOF",
    "TYPEIS",
    "TYPEAS",
    "PACKAGE",
    "USES",
    "IF",
    "ELSE",
    "UNLESS",
    "FOREACH",
    "FOR",
    "WHILE",
    "DO",
    "CONTINUE",
    "BREAK",
    "RETURN",
    "CONSTRUCT",
    "FUNCTION",
    "PROPERTY",
    "TRY",
    "CATCH",
    "FINALLY",
    "THROW",
    "NEW",
    "SWITCH",
    "CASE",
    "DEFAULT",
    "EVAL",
    "OVERRIDE",
    "EXTENDS",
    "TRANSIENT",
    "IMPLEMENTS",
    "CLASS",
    "INTERFACE",
    "STRUCTURE",
    "ENUM",
    "USING",
    "TRUE",
    "FALSE",
    "NAN",
    "INFINITY",
    "NULL",
    "LENGTH",
    "EXISTS",
    "STARTSWITH",
    "CONTAINS",
    "WHERE",
    "FIND",
    "AS",
    "EXCEPT",
    "INDEX",
    "ITERATOR",
    "GET",
    "SET",
    "ASSERT",
    "PRIVATE",
    "INTERNAL",
    "PROTECTED",
    "PUBLIC",
    "ABSTRACT",
    "HIDE",
    "FINAL",
    "STATIC",
    "READONLY",
    "OUTER",
    "EXECUTION",
    "REQUEST",
    "SESSION",
    "APPLICATION",
    "VOID",
    "BLOCK",
    "ENHANCEMENT",
    "CLASSPATH",
    "TYPELOADER",
    "THIS",
    "SUPER",
    "IDENT",
    "CHAR_LITERAL",
    "STRING_LITERAL",
    "HEX_LITERAL",
    "BIN_LITERAL",
    "DECIMAL_LITERAL",
    "WS",
    "COMMENT",
    "LINE_COMMENT",
  ]
  public static readonly ruleNames = [
    "start",
    "header",
    "annotation",
    "gClass",
    "gInterfaceOrStructure",
    "gEnum",
    "gEnhancement",
    "classBody",
    "enhancementBody",
    "interfaceBody",
    "enumBody",
    "enumConstants",
    "enumConstant",
    "interfaceMembers",
    "classMembers",
    "declaration",
    "enhancementMembers",
    "delegateDefn",
    "delegateStatement",
    "optionalType",
    "fieldDefn",
    "propertyDefn",
    "dotPathWord",
    "namespaceStatement",
    "usesStatementList",
    "usesStatement",
    "typeVariableDefs",
    "typeVariableDefinition",
    "functionBody",
    "parameters",
    "functionDefn",
    "constructorDefn",
    "fullPropertyDefn",
    "propertyTypeSuffix",
    "propertyBody",
    "propertyAccessor",
    "modifiers",
    "statement",
    "ifStatement",
    "tryCatchFinallyStatement",
    "finallyClause",
    "catchClause",
    "assertStatement",
    "usingStatement",
    "returnStatement",
    "whileStatement",
    "doWhileStatement",
    "switchStatement",
    "switchBlockStatementGroup",
    "throwStatement",
    "localVarStatement",
    "forEachStatement",
    "indexRest",
    "indexVar",
    "iteratorVar",
    "thisSuperExpr",
    "assignmentOrMethodCall",
    "statementBlock",
    "statementBlockBody",
    "blockTypeLiteral",
    "blockLiteral",
    "blockLiteralArg",
    "typeLiteral",
    "typeLiteralType",
    "typeLiteralExpr",
    "typeLiteralList",
    "type",
    "classOrInterfaceType",
    "typeArguments",
    "typeArgument",
    "expression",
    "conditionalExpr",
    "conditionalOrExpr",
    "conditionalAndExpr",
    "bitwiseOrExpr",
    "bitwiseXorExpr",
    "bitwiseAndExpr",
    "equalityExpr",
    "relationalExpr",
    "intervalExpr",
    "bitshiftExpr",
    "additiveExpr",
    "multiplicativeExpr",
    "typeAsExpr",
    "unaryExpr",
    "unaryExprNotPlusMinus",
    "blockExpr",
    "parameterDeclarationList",
    "parameterDeclaration",
    "annotationArguments",
    "arguments",
    "optionalArguments",
    "argExpression",
    "namedArgumentExpression",
    "evalExpr",
    "featureLiteral",
    "standAloneDataStructureInitialization",
    "primaryExpr",
    "parenthExpr",
    "newExpr",
    "anonymousInnerClass",
    "arrayInitializer",
    "initializer",
    "initializerExpression",
    "arrayValueList",
    "mapInitializerList",
    "objectInitializer",
    "initializerAssignment",
    "indirectMemberAccess",
    "literal",
    "numberLiteral",
    "orOp",
    "andOp",
    "assignmentOp",
    "incrementOp",
    "equalityOp",
    "intervalOp",
    "relOp",
    "bitshiftOp",
    "additiveOp",
    "multiplicativeOp",
    "typeAsOp",
    "unaryOp",
    "id",
    "idclassOrInterfaceType",
    "idAll",
  ]

  public get grammarFileName(): string {
    return "Gosu.g4"
  }
  public get literalNames(): (string | null)[] {
    return GosuParser.literalNames
  }
  public get symbolicNames(): (string | null)[] {
    return GosuParser.symbolicNames
  }
  public get ruleNames(): string[] {
    return GosuParser.ruleNames
  }
  public get serializedATN(): number[] {
    return GosuParser._serializedATN
  }

  protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
    return new antlr.FailedPredicateException(this, predicate, message)
  }

  public constructor(input: antlr.TokenStream) {
    super(input)
    this.interpreter = new antlr.ParserATNSimulator(
      this,
      GosuParser._ATN,
      GosuParser.decisionsToDFA,
      new antlr.PredictionContextCache(),
    )
  }
  public start(): StartContext {
    const localContext = new StartContext(this.context, this.state)
    this.enterRule(localContext, 0, GosuParser.RULE_start)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 252
      this.header()
      this.state = 253
      this.modifiers()
      this.state = 258
      this.errorHandler.sync(this)
      switch (this.tokenStream.LA(1)) {
        case GosuParser.CLASS:
          {
            this.state = 254
            this.gClass()
          }
          break
        case GosuParser.INTERFACE:
        case GosuParser.STRUCTURE:
          {
            this.state = 255
            this.gInterfaceOrStructure()
          }
          break
        case GosuParser.ENUM:
          {
            this.state = 256
            this.gEnum()
          }
          break
        case GosuParser.ENHANCEMENT:
          {
            this.state = 257
            this.gEnhancement()
          }
          break
        default:
          throw new antlr.NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public header(): HeaderContext {
    const localContext = new HeaderContext(this.context, this.state)
    this.enterRule(localContext, 2, GosuParser.RULE_header)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 262
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 82) {
        this.state = 260
        this.match(GosuParser.PACKAGE)
        this.state = 261
        this.namespaceStatement()
      }

      this.state = 265
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 83) {
        this.state = 264
        this.usesStatementList()
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public annotation(): AnnotationContext {
    const localContext = new AnnotationContext(this.context, this.state)
    this.enterRule(localContext, 4, GosuParser.RULE_annotation)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 267
      this.match(GosuParser.T__0)
      this.state = 268
      this.idAll()
      this.state = 273
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      while (_la === 2) {
        this.state = 269
        this.match(GosuParser.T__1)
        this.state = 270
        this.idAll()
        this.state = 275
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
      }
      this.state = 277
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 14) {
        this.state = 276
        this.annotationArguments()
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public gClass(): GClassContext {
    const localContext = new GClassContext(this.context, this.state)
    this.enterRule(localContext, 6, GosuParser.RULE_gClass)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 279
      this.match(GosuParser.CLASS)
      this.state = 280
      this.id()
      this.state = 281
      this.typeVariableDefs()
      this.state = 284
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 107) {
        this.state = 282
        this.match(GosuParser.EXTENDS)
        this.state = 283
        this.classOrInterfaceType()
      }

      this.state = 295
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 109) {
        this.state = 286
        this.match(GosuParser.IMPLEMENTS)
        this.state = 287
        this.classOrInterfaceType()
        this.state = 292
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
        while (_la === 3) {
          this.state = 288
          this.match(GosuParser.T__2)
          this.state = 289
          this.classOrInterfaceType()
          this.state = 294
          this.errorHandler.sync(this)
          _la = this.tokenStream.LA(1)
        }
      }

      this.state = 297
      this.classBody()
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public gInterfaceOrStructure(): GInterfaceOrStructureContext {
    const localContext = new GInterfaceOrStructureContext(this.context, this.state)
    this.enterRule(localContext, 8, GosuParser.RULE_gInterfaceOrStructure)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 299
      _la = this.tokenStream.LA(1)
      if (!(_la === 111 || _la === 112)) {
        this.errorHandler.recoverInline(this)
      } else {
        this.errorHandler.reportMatch(this)
        this.consume()
      }
      this.state = 300
      this.id()
      this.state = 301
      this.typeVariableDefs()
      this.state = 311
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 107) {
        this.state = 302
        this.match(GosuParser.EXTENDS)
        this.state = 303
        this.classOrInterfaceType()
        this.state = 308
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
        while (_la === 3) {
          this.state = 304
          this.match(GosuParser.T__2)
          this.state = 305
          this.classOrInterfaceType()
          this.state = 310
          this.errorHandler.sync(this)
          _la = this.tokenStream.LA(1)
        }
      }

      this.state = 313
      this.interfaceBody()
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public gEnum(): GEnumContext {
    const localContext = new GEnumContext(this.context, this.state)
    this.enterRule(localContext, 10, GosuParser.RULE_gEnum)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 315
      this.match(GosuParser.ENUM)
      this.state = 316
      this.id()
      this.state = 317
      this.typeVariableDefs()
      this.state = 327
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 109) {
        this.state = 318
        this.match(GosuParser.IMPLEMENTS)
        this.state = 319
        this.classOrInterfaceType()
        this.state = 324
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
        while (_la === 3) {
          this.state = 320
          this.match(GosuParser.T__2)
          this.state = 321
          this.classOrInterfaceType()
          this.state = 326
          this.errorHandler.sync(this)
          _la = this.tokenStream.LA(1)
        }
      }

      this.state = 329
      this.enumBody()
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public gEnhancement(): GEnhancementContext {
    const localContext = new GEnhancementContext(this.context, this.state)
    this.enterRule(localContext, 12, GosuParser.RULE_gEnhancement)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 331
      this.match(GosuParser.ENHANCEMENT)
      this.state = 332
      this.id()
      this.state = 333
      this.typeVariableDefs()
      this.state = 334
      this.match(GosuParser.T__3)
      this.state = 335
      this.classOrInterfaceType()
      this.state = 340
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      while (_la === 5) {
        this.state = 336
        this.match(GosuParser.T__4)
        this.state = 337
        this.match(GosuParser.T__5)
        this.state = 342
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
      }
      this.state = 343
      this.enhancementBody()
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public classBody(): ClassBodyContext {
    const localContext = new ClassBodyContext(this.context, this.state)
    this.enterRule(localContext, 14, GosuParser.RULE_classBody)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 345
      this.match(GosuParser.T__6)
      this.state = 346
      this.classMembers()
      this.state = 347
      this.match(GosuParser.T__7)
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public enhancementBody(): EnhancementBodyContext {
    const localContext = new EnhancementBodyContext(this.context, this.state)
    this.enterRule(localContext, 16, GosuParser.RULE_enhancementBody)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 349
      this.match(GosuParser.T__6)
      this.state = 350
      this.enhancementMembers()
      this.state = 351
      this.match(GosuParser.T__7)
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public interfaceBody(): InterfaceBodyContext {
    const localContext = new InterfaceBodyContext(this.context, this.state)
    this.enterRule(localContext, 18, GosuParser.RULE_interfaceBody)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 353
      this.match(GosuParser.T__6)
      this.state = 354
      this.interfaceMembers()
      this.state = 355
      this.match(GosuParser.T__7)
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public enumBody(): EnumBodyContext {
    const localContext = new EnumBodyContext(this.context, this.state)
    this.enterRule(localContext, 20, GosuParser.RULE_enumBody)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 357
      this.match(GosuParser.T__6)
      this.state = 359
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 13, this.context)) {
        case 1:
          {
            this.state = 358
            this.enumConstants()
          }
          break
      }
      this.state = 361
      this.classMembers()
      this.state = 362
      this.match(GosuParser.T__7)
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public enumConstants(): EnumConstantsContext {
    const localContext = new EnumConstantsContext(this.context, this.state)
    this.enterRule(localContext, 22, GosuParser.RULE_enumConstants)
    let _la: number
    try {
      let alternative: number
      this.enterOuterAlt(localContext, 1)
      this.state = 364
      this.enumConstant()
      this.state = 369
      this.errorHandler.sync(this)
      alternative = this.interpreter.adaptivePredict(this.tokenStream, 14, this.context)
      while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
        if (alternative === 1) {
          this.state = 365
          this.match(GosuParser.T__2)
          this.state = 366
          this.enumConstant()
        }
        this.state = 371
        this.errorHandler.sync(this)
        alternative = this.interpreter.adaptivePredict(this.tokenStream, 14, this.context)
      }
      this.state = 373
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 3) {
        this.state = 372
        this.match(GosuParser.T__2)
      }

      this.state = 376
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 9) {
        this.state = 375
        this.match(GosuParser.T__8)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public enumConstant(): EnumConstantContext {
    const localContext = new EnumConstantContext(this.context, this.state)
    this.enterRule(localContext, 24, GosuParser.RULE_enumConstant)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 378
      this.id()
      this.state = 379
      this.optionalArguments()
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public interfaceMembers(): InterfaceMembersContext {
    const localContext = new InterfaceMembersContext(this.context, this.state)
    this.enterRule(localContext, 26, GosuParser.RULE_interfaceMembers)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 395
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      while (
        _la === 1 ||
        (((_la - 75) & ~0x1f) === 0 && ((1 << (_la - 75)) & 2150629377) !== 0) ||
        (((_la - 108) & ~0x1f) === 0 && ((1 << (_la - 108)) & 3187671101) !== 0) ||
        _la === 140
      ) {
        this.state = 381
        this.modifiers()
        this.state = 388
        this.errorHandler.sync(this)
        switch (this.tokenStream.LA(1)) {
          case GosuParser.FUNCTION:
            {
              this.state = 382
              this.functionDefn()
            }
            break
          case GosuParser.PROPERTY:
            {
              this.state = 383
              this.propertyDefn()
            }
            break
          case GosuParser.VAR:
            {
              this.state = 384
              this.fieldDefn()
            }
            break
          case GosuParser.CLASS:
            {
              this.state = 385
              this.gClass()
            }
            break
          case GosuParser.INTERFACE:
          case GosuParser.STRUCTURE:
            {
              this.state = 386
              this.gInterfaceOrStructure()
            }
            break
          case GosuParser.ENUM:
            {
              this.state = 387
              this.gEnum()
            }
            break
          default:
            throw new antlr.NoViableAltException(this)
        }
        this.state = 391
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
        if (_la === 9) {
          this.state = 390
          this.match(GosuParser.T__8)
        }
        this.state = 397
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public classMembers(): ClassMembersContext {
    const localContext = new ClassMembersContext(this.context, this.state)
    this.enterRule(localContext, 28, GosuParser.RULE_classMembers)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 401
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      while (
        _la === 1 ||
        (((_la - 75) & ~0x1f) === 0 && ((1 << (_la - 75)) & 2151153667) !== 0) ||
        (((_la - 108) & ~0x1f) === 0 && ((1 << (_la - 108)) & 3187671101) !== 0) ||
        _la === 140
      ) {
        this.state = 398
        this.declaration()
        this.state = 403
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public declaration(): DeclarationContext {
    const localContext = new DeclarationContext(this.context, this.state)
    this.enterRule(localContext, 30, GosuParser.RULE_declaration)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 404
      this.modifiers()
      this.state = 421
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 22, this.context)) {
        case 1:
          {
            this.state = 405
            this.functionDefn()
            this.state = 407
            this.errorHandler.sync(this)
            _la = this.tokenStream.LA(1)
            if (_la === 7) {
              this.state = 406
              this.functionBody()
            }
          }
          break
        case 2:
          {
            this.state = 409
            this.constructorDefn()
            this.state = 410
            this.functionBody()
          }
          break
        case 3:
          {
            this.state = 412
            this.fullPropertyDefn()
          }
          break
        case 4:
          {
            this.state = 413
            this.propertyDefn()
            this.state = 414
            this.functionBody()
          }
          break
        case 5:
          {
            this.state = 416
            this.fieldDefn()
          }
          break
        case 6:
          {
            this.state = 417
            this.delegateDefn()
          }
          break
        case 7:
          {
            this.state = 418
            this.gClass()
          }
          break
        case 8:
          {
            this.state = 419
            this.gInterfaceOrStructure()
          }
          break
        case 9:
          {
            this.state = 420
            this.gEnum()
          }
          break
      }
      this.state = 424
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 9) {
        this.state = 423
        this.match(GosuParser.T__8)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public enhancementMembers(): EnhancementMembersContext {
    const localContext = new EnhancementMembersContext(this.context, this.state)
    this.enterRule(localContext, 32, GosuParser.RULE_enhancementMembers)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 441
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      while (
        _la === 1 ||
        (((_la - 95) & ~0x1f) === 0 && ((1 << (_la - 95)) & 10243) !== 0) ||
        (((_la - 133) & ~0x1f) === 0 && ((1 << (_la - 133)) & 223) !== 0)
      ) {
        this.state = 426
        this.modifiers()
        this.state = 434
        this.errorHandler.sync(this)
        switch (this.interpreter.adaptivePredict(this.tokenStream, 24, this.context)) {
          case 1:
            {
              this.state = 427
              this.functionDefn()
              this.state = 428
              this.functionBody()
            }
            break
          case 2:
            {
              this.state = 430
              this.fullPropertyDefn()
            }
            break
          case 3:
            {
              this.state = 431
              this.propertyDefn()
              this.state = 432
              this.functionBody()
            }
            break
        }
        this.state = 437
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
        if (_la === 9) {
          this.state = 436
          this.match(GosuParser.T__8)
        }
        this.state = 443
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public delegateDefn(): DelegateDefnContext {
    const localContext = new DelegateDefnContext(this.context, this.state)
    this.enterRule(localContext, 34, GosuParser.RULE_delegateDefn)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 444
      this.match(GosuParser.DELEGATE)
      this.state = 445
      this.id()
      this.state = 446
      this.delegateStatement()
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public delegateStatement(): DelegateStatementContext {
    const localContext = new DelegateStatementContext(this.context, this.state)
    this.enterRule(localContext, 36, GosuParser.RULE_delegateStatement)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 450
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 4) {
        this.state = 448
        this.match(GosuParser.T__3)
        this.state = 449
        this.typeLiteral()
      }

      this.state = 452
      this.match(GosuParser.REPRESENTS)
      this.state = 453
      this.typeLiteral()
      this.state = 458
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      while (_la === 3) {
        this.state = 454
        this.match(GosuParser.T__2)
        this.state = 455
        this.typeLiteral()
        this.state = 460
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
      }
      this.state = 463
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 10) {
        this.state = 461
        this.match(GosuParser.T__9)
        this.state = 462
        this.expression()
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public optionalType(): OptionalTypeContext {
    const localContext = new OptionalTypeContext(this.context, this.state)
    this.enterRule(localContext, 38, GosuParser.RULE_optionalType)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 468
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 30, this.context)) {
        case 1:
          {
            this.state = 465
            this.match(GosuParser.T__3)
            this.state = 466
            this.typeLiteral()
          }
          break
        case 2:
          {
            this.state = 467
            this.blockTypeLiteral()
          }
          break
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public fieldDefn(): FieldDefnContext {
    const localContext = new FieldDefnContext(this.context, this.state)
    this.enterRule(localContext, 40, GosuParser.RULE_fieldDefn)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 470
      this.match(GosuParser.VAR)
      this.state = 471
      this.id()
      this.state = 472
      this.optionalType()
      this.state = 478
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 126) {
        this.state = 473
        this.match(GosuParser.AS)
        this.state = 475
        this.errorHandler.sync(this)
        switch (this.interpreter.adaptivePredict(this.tokenStream, 31, this.context)) {
          case 1:
            {
              this.state = 474
              this.match(GosuParser.READONLY)
            }
            break
        }
        this.state = 477
        this.id()
      }

      this.state = 482
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 10) {
        this.state = 480
        this.match(GosuParser.T__9)
        this.state = 481
        this.expression()
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public propertyDefn(): PropertyDefnContext {
    const localContext = new PropertyDefnContext(this.context, this.state)
    this.enterRule(localContext, 42, GosuParser.RULE_propertyDefn)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 484
      this.match(GosuParser.PROPERTY)
      this.state = 485
      _la = this.tokenStream.LA(1)
      if (!(_la === 130 || _la === 131)) {
        this.errorHandler.recoverInline(this)
      } else {
        this.errorHandler.reportMatch(this)
        this.consume()
      }
      this.state = 486
      this.id()
      this.state = 487
      this.parameters()
      this.state = 490
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 4) {
        this.state = 488
        this.match(GosuParser.T__3)
        this.state = 489
        this.typeLiteral()
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public dotPathWord(): DotPathWordContext {
    const localContext = new DotPathWordContext(this.context, this.state)
    this.enterRule(localContext, 44, GosuParser.RULE_dotPathWord)
    try {
      let alternative: number
      this.enterOuterAlt(localContext, 1)
      this.state = 492
      this.idAll()
      this.state = 497
      this.errorHandler.sync(this)
      alternative = this.interpreter.adaptivePredict(this.tokenStream, 35, this.context)
      while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
        if (alternative === 1) {
          this.state = 493
          this.match(GosuParser.T__1)
          this.state = 494
          this.idAll()
        }
        this.state = 499
        this.errorHandler.sync(this)
        alternative = this.interpreter.adaptivePredict(this.tokenStream, 35, this.context)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public namespaceStatement(): NamespaceStatementContext {
    const localContext = new NamespaceStatementContext(this.context, this.state)
    this.enterRule(localContext, 46, GosuParser.RULE_namespaceStatement)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 500
      this.dotPathWord()
      this.state = 504
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      while (_la === 9) {
        this.state = 501
        this.match(GosuParser.T__8)
        this.state = 506
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public usesStatementList(): UsesStatementListContext {
    const localContext = new UsesStatementListContext(this.context, this.state)
    this.enterRule(localContext, 48, GosuParser.RULE_usesStatementList)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 509
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      do {
        this.state = 507
        this.match(GosuParser.USES)
        this.state = 508
        this.usesStatement()
        this.state = 511
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
      } while (_la === 83)
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public usesStatement(): UsesStatementContext {
    const localContext = new UsesStatementContext(this.context, this.state)
    this.enterRule(localContext, 50, GosuParser.RULE_usesStatement)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 513
      this.dotPathWord()
      this.state = 516
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 2) {
        this.state = 514
        this.match(GosuParser.T__1)
        this.state = 515
        this.match(GosuParser.T__10)
      }

      this.state = 521
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      while (_la === 9) {
        this.state = 518
        this.match(GosuParser.T__8)
        this.state = 523
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public typeVariableDefs(): TypeVariableDefsContext {
    const localContext = new TypeVariableDefsContext(this.context, this.state)
    this.enterRule(localContext, 52, GosuParser.RULE_typeVariableDefs)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 535
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 12) {
        this.state = 524
        this.match(GosuParser.T__11)
        this.state = 525
        this.typeVariableDefinition()
        this.state = 530
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
        while (_la === 3) {
          this.state = 526
          this.match(GosuParser.T__2)
          this.state = 527
          this.typeVariableDefinition()
          this.state = 532
          this.errorHandler.sync(this)
          _la = this.tokenStream.LA(1)
        }
        this.state = 533
        this.match(GosuParser.T__12)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public typeVariableDefinition(): TypeVariableDefinitionContext {
    const localContext = new TypeVariableDefinitionContext(this.context, this.state)
    this.enterRule(localContext, 54, GosuParser.RULE_typeVariableDefinition)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 537
      this.id()
      this.state = 540
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 107) {
        this.state = 538
        this.match(GosuParser.EXTENDS)
        this.state = 539
        this.typeLiteralList()
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public functionBody(): FunctionBodyContext {
    const localContext = new FunctionBodyContext(this.context, this.state)
    this.enterRule(localContext, 56, GosuParser.RULE_functionBody)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 542
      this.statementBlock()
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public parameters(): ParametersContext {
    const localContext = new ParametersContext(this.context, this.state)
    this.enterRule(localContext, 58, GosuParser.RULE_parameters)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 544
      this.match(GosuParser.T__13)
      this.state = 546
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (
        _la === 1 ||
        (((_la - 115) & ~0x1f) === 0 && ((1 << (_la - 115)) & 4294967295) !== 0) ||
        (((_la - 147) & ~0x1f) === 0 && ((1 << (_la - 147)) & 159) !== 0)
      ) {
        this.state = 545
        this.parameterDeclarationList()
      }

      this.state = 548
      this.match(GosuParser.T__14)
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public functionDefn(): FunctionDefnContext {
    const localContext = new FunctionDefnContext(this.context, this.state)
    this.enterRule(localContext, 60, GosuParser.RULE_functionDefn)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 550
      this.match(GosuParser.FUNCTION)
      this.state = 551
      this.id()
      this.state = 552
      this.typeVariableDefs()
      this.state = 553
      this.parameters()
      this.state = 556
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 4) {
        this.state = 554
        this.match(GosuParser.T__3)
        this.state = 555
        this.typeLiteral()
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public constructorDefn(): ConstructorDefnContext {
    const localContext = new ConstructorDefnContext(this.context, this.state)
    this.enterRule(localContext, 62, GosuParser.RULE_constructorDefn)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 558
      this.match(GosuParser.CONSTRUCT)
      this.state = 559
      this.parameters()
      this.state = 562
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 4) {
        this.state = 560
        this.match(GosuParser.T__3)
        this.state = 561
        this.typeLiteral()
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public fullPropertyDefn(): FullPropertyDefnContext {
    const localContext = new FullPropertyDefnContext(this.context, this.state)
    this.enterRule(localContext, 64, GosuParser.RULE_fullPropertyDefn)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 564
      this.match(GosuParser.PROPERTY)
      this.state = 565
      this.id()
      this.state = 567
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 46, this.context)) {
        case 1:
          {
            this.state = 566
            this.typeVariableDefs()
          }
          break
      }
      this.state = 574
      this.errorHandler.sync(this)
      switch (this.tokenStream.LA(1)) {
        case GosuParser.T__3:
          {
            this.state = 569
            this.propertyTypeSuffix()
            this.state = 571
            this.errorHandler.sync(this)
            _la = this.tokenStream.LA(1)
            if (_la === 7) {
              this.state = 570
              this.propertyBody()
            }
          }
          break
        case GosuParser.T__6:
          {
            this.state = 573
            this.propertyBody()
          }
          break
        default:
          throw new antlr.NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public propertyTypeSuffix(): PropertyTypeSuffixContext {
    const localContext = new PropertyTypeSuffixContext(this.context, this.state)
    this.enterRule(localContext, 66, GosuParser.RULE_propertyTypeSuffix)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 576
      this.match(GosuParser.T__3)
      this.state = 577
      this.typeLiteral()
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public propertyBody(): PropertyBodyContext {
    const localContext = new PropertyBodyContext(this.context, this.state)
    this.enterRule(localContext, 68, GosuParser.RULE_propertyBody)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 579
      this.match(GosuParser.T__6)
      this.state = 583
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      while (
        _la === 1 ||
        (((_la - 106) & ~0x1f) === 0 && ((1 << (_la - 106)) & 4211081221) !== 0) ||
        _la === 139 ||
        _la === 140
      ) {
        this.state = 580
        this.propertyAccessor()
        this.state = 585
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
      }
      this.state = 586
      this.match(GosuParser.T__7)
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public propertyAccessor(): PropertyAccessorContext {
    const localContext = new PropertyAccessorContext(this.context, this.state)
    this.enterRule(localContext, 70, GosuParser.RULE_propertyAccessor)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 588
      this.modifiers()
      this.state = 589
      _la = this.tokenStream.LA(1)
      if (!(_la === 130 || _la === 131)) {
        this.errorHandler.recoverInline(this)
      } else {
        this.errorHandler.reportMatch(this)
        this.consume()
      }
      this.state = 590
      this.parameters()
      this.state = 593
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 4) {
        this.state = 591
        this.match(GosuParser.T__3)
        this.state = 592
        this.typeLiteral()
      }

      this.state = 595
      this.functionBody()
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public modifiers(): ModifiersContext {
    const localContext = new ModifiersContext(this.context, this.state)
    this.enterRule(localContext, 72, GosuParser.RULE_modifiers)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 609
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      while (
        _la === 1 ||
        (((_la - 106) & ~0x1f) === 0 && ((1 << (_la - 106)) & 4160749573) !== 0) ||
        _la === 139 ||
        _la === 140
      ) {
        this.state = 607
        this.errorHandler.sync(this)
        switch (this.tokenStream.LA(1)) {
          case GosuParser.T__0:
            {
              this.state = 597
              this.annotation()
            }
            break
          case GosuParser.PRIVATE:
            {
              this.state = 598
              this.match(GosuParser.PRIVATE)
            }
            break
          case GosuParser.INTERNAL:
            {
              this.state = 599
              this.match(GosuParser.INTERNAL)
            }
            break
          case GosuParser.PROTECTED:
            {
              this.state = 600
              this.match(GosuParser.PROTECTED)
            }
            break
          case GosuParser.PUBLIC:
            {
              this.state = 601
              this.match(GosuParser.PUBLIC)
            }
            break
          case GosuParser.STATIC:
            {
              this.state = 602
              this.match(GosuParser.STATIC)
            }
            break
          case GosuParser.ABSTRACT:
            {
              this.state = 603
              this.match(GosuParser.ABSTRACT)
            }
            break
          case GosuParser.OVERRIDE:
            {
              this.state = 604
              this.match(GosuParser.OVERRIDE)
            }
            break
          case GosuParser.FINAL:
            {
              this.state = 605
              this.match(GosuParser.FINAL)
            }
            break
          case GosuParser.TRANSIENT:
            {
              this.state = 606
              this.match(GosuParser.TRANSIENT)
            }
            break
          default:
            throw new antlr.NoViableAltException(this)
        }
        this.state = 611
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public statement(): StatementContext {
    const localContext = new StatementContext(this.context, this.state)
    this.enterRule(localContext, 74, GosuParser.RULE_statement)
    try {
      this.state = 636
      this.errorHandler.sync(this)
      switch (this.tokenStream.LA(1)) {
        case GosuParser.T__6:
        case GosuParser.T__13:
        case GosuParser.VAR:
        case GosuParser.IF:
        case GosuParser.FOREACH:
        case GosuParser.FOR:
        case GosuParser.WHILE:
        case GosuParser.DO:
        case GosuParser.CONTINUE:
        case GosuParser.BREAK:
        case GosuParser.RETURN:
        case GosuParser.TRY:
        case GosuParser.THROW:
        case GosuParser.NEW:
        case GosuParser.SWITCH:
        case GosuParser.EVAL:
        case GosuParser.USING:
        case GosuParser.TRUE:
        case GosuParser.FALSE:
        case GosuParser.NAN:
        case GosuParser.INFINITY:
        case GosuParser.NULL:
        case GosuParser.LENGTH:
        case GosuParser.EXISTS:
        case GosuParser.STARTSWITH:
        case GosuParser.CONTAINS:
        case GosuParser.WHERE:
        case GosuParser.FIND:
        case GosuParser.AS:
        case GosuParser.EXCEPT:
        case GosuParser.INDEX:
        case GosuParser.ITERATOR:
        case GosuParser.GET:
        case GosuParser.SET:
        case GosuParser.ASSERT:
        case GosuParser.PRIVATE:
        case GosuParser.INTERNAL:
        case GosuParser.PROTECTED:
        case GosuParser.PUBLIC:
        case GosuParser.ABSTRACT:
        case GosuParser.HIDE:
        case GosuParser.FINAL:
        case GosuParser.STATIC:
        case GosuParser.READONLY:
        case GosuParser.OUTER:
        case GosuParser.EXECUTION:
        case GosuParser.REQUEST:
        case GosuParser.SESSION:
        case GosuParser.APPLICATION:
        case GosuParser.VOID:
        case GosuParser.BLOCK:
        case GosuParser.ENHANCEMENT:
        case GosuParser.CLASSPATH:
        case GosuParser.TYPELOADER:
        case GosuParser.THIS:
        case GosuParser.SUPER:
        case GosuParser.IDENT:
        case GosuParser.STRING_LITERAL:
          this.enterOuterAlt(localContext, 1)
          {
            this.state = 630
            this.errorHandler.sync(this)
            switch (this.interpreter.adaptivePredict(this.tokenStream, 53, this.context)) {
              case 1:
                {
                  this.state = 612
                  this.ifStatement()
                }
                break
              case 2:
                {
                  this.state = 613
                  this.tryCatchFinallyStatement()
                }
                break
              case 3:
                {
                  this.state = 614
                  this.throwStatement()
                }
                break
              case 4:
                {
                  this.state = 615
                  this.match(GosuParser.CONTINUE)
                }
                break
              case 5:
                {
                  this.state = 616
                  this.match(GosuParser.BREAK)
                }
                break
              case 6:
                {
                  this.state = 617
                  this.returnStatement()
                }
                break
              case 7:
                {
                  this.state = 618
                  this.forEachStatement()
                }
                break
              case 8:
                {
                  this.state = 619
                  this.whileStatement()
                }
                break
              case 9:
                {
                  this.state = 620
                  this.doWhileStatement()
                }
                break
              case 10:
                {
                  this.state = 621
                  this.switchStatement()
                }
                break
              case 11:
                {
                  this.state = 622
                  this.usingStatement()
                }
                break
              case 12:
                {
                  this.state = 623
                  this.assertStatement()
                }
                break
              case 13:
                {
                  this.state = 624
                  this.match(GosuParser.FINAL)
                  this.state = 625
                  this.localVarStatement()
                }
                break
              case 14:
                {
                  this.state = 626
                  this.localVarStatement()
                }
                break
              case 15:
                {
                  this.state = 627
                  this.evalExpr()
                }
                break
              case 16:
                {
                  this.state = 628
                  this.assignmentOrMethodCall()
                }
                break
              case 17:
                {
                  this.state = 629
                  this.statementBlock()
                }
                break
            }
            this.state = 633
            this.errorHandler.sync(this)
            switch (this.interpreter.adaptivePredict(this.tokenStream, 54, this.context)) {
              case 1:
                {
                  this.state = 632
                  this.match(GosuParser.T__8)
                }
                break
            }
          }
          break
        case GosuParser.T__8:
          this.enterOuterAlt(localContext, 2)
          {
            this.state = 635
            this.match(GosuParser.T__8)
          }
          break
        default:
          throw new antlr.NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public ifStatement(): IfStatementContext {
    const localContext = new IfStatementContext(this.context, this.state)
    this.enterRule(localContext, 76, GosuParser.RULE_ifStatement)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 638
      this.match(GosuParser.IF)
      this.state = 639
      this.match(GosuParser.T__13)
      this.state = 640
      this.expression()
      this.state = 641
      this.match(GosuParser.T__14)
      this.state = 642
      this.statement()
      this.state = 644
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 56, this.context)) {
        case 1:
          {
            this.state = 643
            this.match(GosuParser.T__8)
          }
          break
      }
      this.state = 648
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 57, this.context)) {
        case 1:
          {
            this.state = 646
            this.match(GosuParser.ELSE)
            this.state = 647
            this.statement()
          }
          break
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public tryCatchFinallyStatement(): TryCatchFinallyStatementContext {
    const localContext = new TryCatchFinallyStatementContext(this.context, this.state)
    this.enterRule(localContext, 78, GosuParser.RULE_tryCatchFinallyStatement)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 650
      this.match(GosuParser.TRY)
      this.state = 651
      this.statementBlock()
      this.state = 661
      this.errorHandler.sync(this)
      switch (this.tokenStream.LA(1)) {
        case GosuParser.CATCH:
          {
            this.state = 653
            this.errorHandler.sync(this)
            _la = this.tokenStream.LA(1)
            do {
              this.state = 652
              this.catchClause()
              this.state = 655
              this.errorHandler.sync(this)
              _la = this.tokenStream.LA(1)
            } while (_la === 98)
            this.state = 658
            this.errorHandler.sync(this)
            _la = this.tokenStream.LA(1)
            if (_la === 99) {
              this.state = 657
              this.finallyClause()
            }
          }
          break
        case GosuParser.FINALLY:
          {
            this.state = 660
            this.finallyClause()
          }
          break
        default:
          throw new antlr.NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public finallyClause(): FinallyClauseContext {
    const localContext = new FinallyClauseContext(this.context, this.state)
    this.enterRule(localContext, 80, GosuParser.RULE_finallyClause)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 663
      this.match(GosuParser.FINALLY)
      this.state = 664
      this.statementBlock()
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public catchClause(): CatchClauseContext {
    const localContext = new CatchClauseContext(this.context, this.state)
    this.enterRule(localContext, 82, GosuParser.RULE_catchClause)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 666
      this.match(GosuParser.CATCH)
      this.state = 667
      this.match(GosuParser.T__13)
      this.state = 669
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 75) {
        this.state = 668
        this.match(GosuParser.VAR)
      }

      this.state = 671
      this.id()
      this.state = 674
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 4) {
        this.state = 672
        this.match(GosuParser.T__3)
        this.state = 673
        this.typeLiteral()
      }

      this.state = 676
      this.match(GosuParser.T__14)
      this.state = 677
      this.statementBlock()
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public assertStatement(): AssertStatementContext {
    const localContext = new AssertStatementContext(this.context, this.state)
    this.enterRule(localContext, 84, GosuParser.RULE_assertStatement)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 679
      this.match(GosuParser.ASSERT)
      this.state = 680
      this.expression()
      this.state = 683
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 4) {
        this.state = 681
        this.match(GosuParser.T__3)
        this.state = 682
        this.expression()
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public usingStatement(): UsingStatementContext {
    const localContext = new UsingStatementContext(this.context, this.state)
    this.enterRule(localContext, 86, GosuParser.RULE_usingStatement)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 685
      this.match(GosuParser.USING)
      this.state = 686
      this.match(GosuParser.T__13)
      this.state = 696
      this.errorHandler.sync(this)
      switch (this.tokenStream.LA(1)) {
        case GosuParser.VAR:
          {
            this.state = 687
            this.localVarStatement()
            this.state = 692
            this.errorHandler.sync(this)
            _la = this.tokenStream.LA(1)
            while (_la === 3) {
              this.state = 688
              this.match(GosuParser.T__2)
              this.state = 689
              this.localVarStatement()
              this.state = 694
              this.errorHandler.sync(this)
              _la = this.tokenStream.LA(1)
            }
          }
          break
        case GosuParser.T__6:
        case GosuParser.T__13:
        case GosuParser.T__20:
        case GosuParser.T__21:
        case GosuParser.T__22:
        case GosuParser.T__23:
        case GosuParser.T__25:
        case GosuParser.T__68:
        case GosuParser.T__69:
        case GosuParser.NOT:
        case GosuParser.TYPEOF:
        case GosuParser.STATICTYPEOF:
        case GosuParser.NEW:
        case GosuParser.EVAL:
        case GosuParser.TRUE:
        case GosuParser.FALSE:
        case GosuParser.NAN:
        case GosuParser.INFINITY:
        case GosuParser.NULL:
        case GosuParser.LENGTH:
        case GosuParser.EXISTS:
        case GosuParser.STARTSWITH:
        case GosuParser.CONTAINS:
        case GosuParser.WHERE:
        case GosuParser.FIND:
        case GosuParser.AS:
        case GosuParser.EXCEPT:
        case GosuParser.INDEX:
        case GosuParser.ITERATOR:
        case GosuParser.GET:
        case GosuParser.SET:
        case GosuParser.ASSERT:
        case GosuParser.PRIVATE:
        case GosuParser.INTERNAL:
        case GosuParser.PROTECTED:
        case GosuParser.PUBLIC:
        case GosuParser.ABSTRACT:
        case GosuParser.HIDE:
        case GosuParser.FINAL:
        case GosuParser.STATIC:
        case GosuParser.READONLY:
        case GosuParser.OUTER:
        case GosuParser.EXECUTION:
        case GosuParser.REQUEST:
        case GosuParser.SESSION:
        case GosuParser.APPLICATION:
        case GosuParser.VOID:
        case GosuParser.BLOCK:
        case GosuParser.ENHANCEMENT:
        case GosuParser.CLASSPATH:
        case GosuParser.TYPELOADER:
        case GosuParser.THIS:
        case GosuParser.SUPER:
        case GosuParser.IDENT:
        case GosuParser.CHAR_LITERAL:
        case GosuParser.STRING_LITERAL:
        case GosuParser.HEX_LITERAL:
        case GosuParser.BIN_LITERAL:
        case GosuParser.DECIMAL_LITERAL:
          {
            this.state = 695
            this.expression()
          }
          break
        default:
          throw new antlr.NoViableAltException(this)
      }
      this.state = 698
      this.match(GosuParser.T__14)
      this.state = 699
      this.statementBlock()
      this.state = 702
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 99) {
        this.state = 700
        this.match(GosuParser.FINALLY)
        this.state = 701
        this.statementBlock()
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public returnStatement(): ReturnStatementContext {
    const localContext = new ReturnStatementContext(this.context, this.state)
    this.enterRule(localContext, 88, GosuParser.RULE_returnStatement)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 704
      this.match(GosuParser.RETURN)
      this.state = 706
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 67, this.context)) {
        case 1:
          {
            this.state = 705
            this.expression()
          }
          break
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public whileStatement(): WhileStatementContext {
    const localContext = new WhileStatementContext(this.context, this.state)
    this.enterRule(localContext, 90, GosuParser.RULE_whileStatement)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 708
      this.match(GosuParser.WHILE)
      this.state = 709
      this.match(GosuParser.T__13)
      this.state = 710
      this.expression()
      this.state = 711
      this.match(GosuParser.T__14)
      this.state = 712
      this.statement()
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public doWhileStatement(): DoWhileStatementContext {
    const localContext = new DoWhileStatementContext(this.context, this.state)
    this.enterRule(localContext, 92, GosuParser.RULE_doWhileStatement)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 714
      this.match(GosuParser.DO)
      this.state = 715
      this.statement()
      this.state = 716
      this.match(GosuParser.WHILE)
      this.state = 717
      this.match(GosuParser.T__13)
      this.state = 718
      this.expression()
      this.state = 719
      this.match(GosuParser.T__14)
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public switchStatement(): SwitchStatementContext {
    const localContext = new SwitchStatementContext(this.context, this.state)
    this.enterRule(localContext, 94, GosuParser.RULE_switchStatement)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 721
      this.match(GosuParser.SWITCH)
      this.state = 722
      this.match(GosuParser.T__13)
      this.state = 723
      this.expression()
      this.state = 724
      this.match(GosuParser.T__14)
      this.state = 725
      this.match(GosuParser.T__6)
      this.state = 729
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      while (_la === 103 || _la === 104) {
        this.state = 726
        this.switchBlockStatementGroup()
        this.state = 731
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
      }
      this.state = 732
      this.match(GosuParser.T__7)
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public switchBlockStatementGroup(): SwitchBlockStatementGroupContext {
    const localContext = new SwitchBlockStatementGroupContext(this.context, this.state)
    this.enterRule(localContext, 96, GosuParser.RULE_switchBlockStatementGroup)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 740
      this.errorHandler.sync(this)
      switch (this.tokenStream.LA(1)) {
        case GosuParser.CASE:
          {
            this.state = 734
            this.match(GosuParser.CASE)
            this.state = 735
            this.expression()
            this.state = 736
            this.match(GosuParser.T__3)
          }
          break
        case GosuParser.DEFAULT:
          {
            this.state = 738
            this.match(GosuParser.DEFAULT)
            this.state = 739
            this.match(GosuParser.T__3)
          }
          break
        default:
          throw new antlr.NoViableAltException(this)
      }
      this.state = 745
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      while (
        ((_la & ~0x1f) === 0 && ((1 << _la) & 17024) !== 0) ||
        (((_la - 75) & ~0x1f) === 0 && ((1 << (_la - 75)) & 1313337857) !== 0) ||
        (((_la - 114) & ~0x1f) === 0 && ((1 << (_la - 114)) & 4294967295) !== 0) ||
        (((_la - 146) & ~0x1f) === 0 && ((1 << (_la - 146)) & 1535) !== 0)
      ) {
        this.state = 742
        this.statement()
        this.state = 747
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public throwStatement(): ThrowStatementContext {
    const localContext = new ThrowStatementContext(this.context, this.state)
    this.enterRule(localContext, 98, GosuParser.RULE_throwStatement)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 748
      this.match(GosuParser.THROW)
      this.state = 749
      this.expression()
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public localVarStatement(): LocalVarStatementContext {
    const localContext = new LocalVarStatementContext(this.context, this.state)
    this.enterRule(localContext, 100, GosuParser.RULE_localVarStatement)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 751
      this.match(GosuParser.VAR)
      this.state = 752
      this.id()
      this.state = 753
      this.optionalType()
      this.state = 756
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 10) {
        this.state = 754
        this.match(GosuParser.T__9)
        this.state = 755
        this.expression()
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public forEachStatement(): ForEachStatementContext {
    const localContext = new ForEachStatementContext(this.context, this.state)
    this.enterRule(localContext, 102, GosuParser.RULE_forEachStatement)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 758
      _la = this.tokenStream.LA(1)
      if (!(_la === 87 || _la === 88)) {
        this.errorHandler.recoverInline(this)
      } else {
        this.errorHandler.reportMatch(this)
        this.consume()
      }
      this.state = 759
      this.match(GosuParser.T__13)
      this.state = 773
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 75, this.context)) {
        case 1:
          {
            this.state = 760
            this.expression()
            this.state = 762
            this.errorHandler.sync(this)
            _la = this.tokenStream.LA(1)
            if (_la === 128) {
              this.state = 761
              this.indexVar()
            }
          }
          break
        case 2:
          {
            this.state = 765
            this.errorHandler.sync(this)
            _la = this.tokenStream.LA(1)
            if (_la === 75) {
              this.state = 764
              this.match(GosuParser.VAR)
            }

            this.state = 767
            this.id()
            this.state = 768
            this.match(GosuParser.IN)
            this.state = 769
            this.expression()
            this.state = 771
            this.errorHandler.sync(this)
            _la = this.tokenStream.LA(1)
            if (_la === 128 || _la === 129) {
              this.state = 770
              this.indexRest()
            }
          }
          break
      }
      this.state = 775
      this.match(GosuParser.T__14)
      this.state = 776
      this.statement()
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public indexRest(): IndexRestContext {
    const localContext = new IndexRestContext(this.context, this.state)
    this.enterRule(localContext, 104, GosuParser.RULE_indexRest)
    try {
      this.state = 786
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 76, this.context)) {
        case 1:
          this.enterOuterAlt(localContext, 1)
          {
            this.state = 778
            this.indexVar()
            this.state = 779
            this.iteratorVar()
          }
          break
        case 2:
          this.enterOuterAlt(localContext, 2)
          {
            this.state = 781
            this.iteratorVar()
            this.state = 782
            this.indexVar()
          }
          break
        case 3:
          this.enterOuterAlt(localContext, 3)
          {
            this.state = 784
            this.indexVar()
          }
          break
        case 4:
          this.enterOuterAlt(localContext, 4)
          {
            this.state = 785
            this.iteratorVar()
          }
          break
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public indexVar(): IndexVarContext {
    const localContext = new IndexVarContext(this.context, this.state)
    this.enterRule(localContext, 106, GosuParser.RULE_indexVar)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 788
      this.match(GosuParser.INDEX)
      this.state = 789
      this.id()
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public iteratorVar(): IteratorVarContext {
    const localContext = new IteratorVarContext(this.context, this.state)
    this.enterRule(localContext, 108, GosuParser.RULE_iteratorVar)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 791
      this.match(GosuParser.ITERATOR)
      this.state = 792
      this.id()
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public thisSuperExpr(): ThisSuperExprContext {
    const localContext = new ThisSuperExprContext(this.context, this.state)
    this.enterRule(localContext, 110, GosuParser.RULE_thisSuperExpr)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 794
      _la = this.tokenStream.LA(1)
      if (!(_la === 152 || _la === 153)) {
        this.errorHandler.recoverInline(this)
      } else {
        this.errorHandler.reportMatch(this)
        this.consume()
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public assignmentOrMethodCall(): AssignmentOrMethodCallContext {
    const localContext = new AssignmentOrMethodCallContext(this.context, this.state)
    this.enterRule(localContext, 112, GosuParser.RULE_assignmentOrMethodCall)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 801
      this.errorHandler.sync(this)
      switch (this.tokenStream.LA(1)) {
        case GosuParser.NEW:
          {
            this.state = 796
            this.newExpr()
          }
          break
        case GosuParser.THIS:
        case GosuParser.SUPER:
          {
            this.state = 797
            this.thisSuperExpr()
          }
          break
        case GosuParser.TRUE:
        case GosuParser.FALSE:
        case GosuParser.NAN:
        case GosuParser.INFINITY:
        case GosuParser.NULL:
        case GosuParser.LENGTH:
        case GosuParser.EXISTS:
        case GosuParser.STARTSWITH:
        case GosuParser.CONTAINS:
        case GosuParser.WHERE:
        case GosuParser.FIND:
        case GosuParser.AS:
        case GosuParser.EXCEPT:
        case GosuParser.INDEX:
        case GosuParser.ITERATOR:
        case GosuParser.GET:
        case GosuParser.SET:
        case GosuParser.ASSERT:
        case GosuParser.PRIVATE:
        case GosuParser.INTERNAL:
        case GosuParser.PROTECTED:
        case GosuParser.PUBLIC:
        case GosuParser.ABSTRACT:
        case GosuParser.HIDE:
        case GosuParser.FINAL:
        case GosuParser.STATIC:
        case GosuParser.READONLY:
        case GosuParser.OUTER:
        case GosuParser.EXECUTION:
        case GosuParser.REQUEST:
        case GosuParser.SESSION:
        case GosuParser.APPLICATION:
        case GosuParser.VOID:
        case GosuParser.BLOCK:
        case GosuParser.ENHANCEMENT:
        case GosuParser.CLASSPATH:
        case GosuParser.TYPELOADER:
        case GosuParser.IDENT:
          {
            this.state = 798
            this.typeLiteralExpr()
          }
          break
        case GosuParser.T__13:
          {
            this.state = 799
            this.parenthExpr()
          }
          break
        case GosuParser.STRING_LITERAL:
          {
            this.state = 800
            this.match(GosuParser.STRING_LITERAL)
          }
          break
        default:
          throw new antlr.NoViableAltException(this)
      }
      this.state = 803
      this.indirectMemberAccess()
      this.state = 809
      this.errorHandler.sync(this)
      switch (this.tokenStream.LA(1)) {
        case GosuParser.T__44:
        case GosuParser.T__45:
          {
            this.state = 805
            this.incrementOp()
          }
          break
        case GosuParser.T__9:
        case GosuParser.T__31:
        case GosuParser.T__32:
        case GosuParser.T__33:
        case GosuParser.T__34:
        case GosuParser.T__35:
        case GosuParser.T__36:
        case GosuParser.T__37:
        case GosuParser.T__38:
        case GosuParser.T__39:
        case GosuParser.T__40:
        case GosuParser.T__41:
        case GosuParser.T__42:
        case GosuParser.T__43:
          {
            this.state = 806
            this.assignmentOp()
            this.state = 807
            this.expression()
          }
          break
        case GosuParser.T__6:
        case GosuParser.T__7:
        case GosuParser.T__8:
        case GosuParser.T__13:
        case GosuParser.VAR:
        case GosuParser.IF:
        case GosuParser.ELSE:
        case GosuParser.FOREACH:
        case GosuParser.FOR:
        case GosuParser.WHILE:
        case GosuParser.DO:
        case GosuParser.CONTINUE:
        case GosuParser.BREAK:
        case GosuParser.RETURN:
        case GosuParser.TRY:
        case GosuParser.THROW:
        case GosuParser.NEW:
        case GosuParser.SWITCH:
        case GosuParser.CASE:
        case GosuParser.DEFAULT:
        case GosuParser.EVAL:
        case GosuParser.USING:
        case GosuParser.TRUE:
        case GosuParser.FALSE:
        case GosuParser.NAN:
        case GosuParser.INFINITY:
        case GosuParser.NULL:
        case GosuParser.LENGTH:
        case GosuParser.EXISTS:
        case GosuParser.STARTSWITH:
        case GosuParser.CONTAINS:
        case GosuParser.WHERE:
        case GosuParser.FIND:
        case GosuParser.AS:
        case GosuParser.EXCEPT:
        case GosuParser.INDEX:
        case GosuParser.ITERATOR:
        case GosuParser.GET:
        case GosuParser.SET:
        case GosuParser.ASSERT:
        case GosuParser.PRIVATE:
        case GosuParser.INTERNAL:
        case GosuParser.PROTECTED:
        case GosuParser.PUBLIC:
        case GosuParser.ABSTRACT:
        case GosuParser.HIDE:
        case GosuParser.FINAL:
        case GosuParser.STATIC:
        case GosuParser.READONLY:
        case GosuParser.OUTER:
        case GosuParser.EXECUTION:
        case GosuParser.REQUEST:
        case GosuParser.SESSION:
        case GosuParser.APPLICATION:
        case GosuParser.VOID:
        case GosuParser.BLOCK:
        case GosuParser.ENHANCEMENT:
        case GosuParser.CLASSPATH:
        case GosuParser.TYPELOADER:
        case GosuParser.THIS:
        case GosuParser.SUPER:
        case GosuParser.IDENT:
        case GosuParser.STRING_LITERAL:
          break
        default:
          break
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public statementBlock(): StatementBlockContext {
    const localContext = new StatementBlockContext(this.context, this.state)
    this.enterRule(localContext, 114, GosuParser.RULE_statementBlock)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 811
      this.statementBlockBody()
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public statementBlockBody(): StatementBlockBodyContext {
    const localContext = new StatementBlockBodyContext(this.context, this.state)
    this.enterRule(localContext, 116, GosuParser.RULE_statementBlockBody)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 813
      this.match(GosuParser.T__6)
      this.state = 817
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      while (
        ((_la & ~0x1f) === 0 && ((1 << _la) & 17024) !== 0) ||
        (((_la - 75) & ~0x1f) === 0 && ((1 << (_la - 75)) & 1313337857) !== 0) ||
        (((_la - 114) & ~0x1f) === 0 && ((1 << (_la - 114)) & 4294967295) !== 0) ||
        (((_la - 146) & ~0x1f) === 0 && ((1 << (_la - 146)) & 1535) !== 0)
      ) {
        this.state = 814
        this.statement()
        this.state = 819
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
      }
      this.state = 820
      this.match(GosuParser.T__7)
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public blockTypeLiteral(): BlockTypeLiteralContext {
    const localContext = new BlockTypeLiteralContext(this.context, this.state)
    this.enterRule(localContext, 118, GosuParser.RULE_blockTypeLiteral)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 822
      this.blockLiteral()
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public blockLiteral(): BlockLiteralContext {
    const localContext = new BlockLiteralContext(this.context, this.state)
    this.enterRule(localContext, 120, GosuParser.RULE_blockLiteral)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 824
      this.match(GosuParser.T__13)
      this.state = 833
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (
        (((_la - 115) & ~0x1f) === 0 && ((1 << (_la - 115)) & 4294967295) !== 0) ||
        (((_la - 147) & ~0x1f) === 0 && ((1 << (_la - 147)) & 159) !== 0)
      ) {
        this.state = 825
        this.blockLiteralArg()
        this.state = 830
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
        while (_la === 3) {
          this.state = 826
          this.match(GosuParser.T__2)
          this.state = 827
          this.blockLiteralArg()
          this.state = 832
          this.errorHandler.sync(this)
          _la = this.tokenStream.LA(1)
        }
      }

      this.state = 835
      this.match(GosuParser.T__14)
      this.state = 838
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 82, this.context)) {
        case 1:
          {
            this.state = 836
            this.match(GosuParser.T__3)
            this.state = 837
            this.typeLiteral()
          }
          break
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public blockLiteralArg(): BlockLiteralArgContext {
    const localContext = new BlockLiteralArgContext(this.context, this.state)
    this.enterRule(localContext, 122, GosuParser.RULE_blockLiteralArg)
    let _la: number
    try {
      this.state = 856
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 86, this.context)) {
        case 1:
          this.enterOuterAlt(localContext, 1)
          {
            this.state = 840
            this.id()
            this.state = 844
            this.errorHandler.sync(this)
            switch (this.tokenStream.LA(1)) {
              case GosuParser.T__9:
                {
                  this.state = 841
                  this.match(GosuParser.T__9)
                  this.state = 842
                  this.expression()
                }
                break
              case GosuParser.T__13:
                {
                  this.state = 843
                  this.blockTypeLiteral()
                }
                break
              default:
                throw new antlr.NoViableAltException(this)
            }
          }
          break
        case 2:
          this.enterOuterAlt(localContext, 2)
          {
            this.state = 849
            this.errorHandler.sync(this)
            switch (this.interpreter.adaptivePredict(this.tokenStream, 84, this.context)) {
              case 1:
                {
                  this.state = 846
                  this.id()
                  this.state = 847
                  this.match(GosuParser.T__3)
                }
                break
            }
            this.state = 851
            this.typeLiteral()
            this.state = 854
            this.errorHandler.sync(this)
            _la = this.tokenStream.LA(1)
            if (_la === 10) {
              this.state = 852
              this.match(GosuParser.T__9)
              this.state = 853
              this.expression()
            }
          }
          break
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public typeLiteral(): TypeLiteralContext {
    const localContext = new TypeLiteralContext(this.context, this.state)
    this.enterRule(localContext, 124, GosuParser.RULE_typeLiteral)
    try {
      let alternative: number
      this.enterOuterAlt(localContext, 1)
      this.state = 858
      this.type_()
      this.state = 863
      this.errorHandler.sync(this)
      alternative = this.interpreter.adaptivePredict(this.tokenStream, 87, this.context)
      while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
        if (alternative === 1) {
          this.state = 859
          this.match(GosuParser.T__15)
          this.state = 860
          this.type_()
        }
        this.state = 865
        this.errorHandler.sync(this)
        alternative = this.interpreter.adaptivePredict(this.tokenStream, 87, this.context)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public typeLiteralType(): TypeLiteralTypeContext {
    const localContext = new TypeLiteralTypeContext(this.context, this.state)
    this.enterRule(localContext, 126, GosuParser.RULE_typeLiteralType)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 866
      this.typeLiteral()
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public typeLiteralExpr(): TypeLiteralExprContext {
    const localContext = new TypeLiteralExprContext(this.context, this.state)
    this.enterRule(localContext, 128, GosuParser.RULE_typeLiteralExpr)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 868
      this.typeLiteral()
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public typeLiteralList(): TypeLiteralListContext {
    const localContext = new TypeLiteralListContext(this.context, this.state)
    this.enterRule(localContext, 130, GosuParser.RULE_typeLiteralList)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 870
      this.typeLiteral()
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public type_(): TypeContext {
    const localContext = new TypeContext(this.context, this.state)
    this.enterRule(localContext, 132, GosuParser.RULE_type)
    try {
      let alternative: number
      this.state = 882
      this.errorHandler.sync(this)
      switch (this.tokenStream.LA(1)) {
        case GosuParser.TRUE:
        case GosuParser.FALSE:
        case GosuParser.NAN:
        case GosuParser.INFINITY:
        case GosuParser.NULL:
        case GosuParser.LENGTH:
        case GosuParser.EXISTS:
        case GosuParser.STARTSWITH:
        case GosuParser.CONTAINS:
        case GosuParser.WHERE:
        case GosuParser.FIND:
        case GosuParser.AS:
        case GosuParser.EXCEPT:
        case GosuParser.INDEX:
        case GosuParser.ITERATOR:
        case GosuParser.GET:
        case GosuParser.SET:
        case GosuParser.ASSERT:
        case GosuParser.PRIVATE:
        case GosuParser.INTERNAL:
        case GosuParser.PROTECTED:
        case GosuParser.PUBLIC:
        case GosuParser.ABSTRACT:
        case GosuParser.HIDE:
        case GosuParser.FINAL:
        case GosuParser.STATIC:
        case GosuParser.READONLY:
        case GosuParser.OUTER:
        case GosuParser.EXECUTION:
        case GosuParser.REQUEST:
        case GosuParser.SESSION:
        case GosuParser.APPLICATION:
        case GosuParser.VOID:
        case GosuParser.ENHANCEMENT:
        case GosuParser.CLASSPATH:
        case GosuParser.TYPELOADER:
        case GosuParser.IDENT:
          this.enterOuterAlt(localContext, 1)
          {
            this.state = 872
            this.classOrInterfaceType()
            this.state = 877
            this.errorHandler.sync(this)
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 88, this.context)
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
              if (alternative === 1) {
                this.state = 873
                this.match(GosuParser.T__4)
                this.state = 874
                this.match(GosuParser.T__5)
              }
              this.state = 879
              this.errorHandler.sync(this)
              alternative = this.interpreter.adaptivePredict(this.tokenStream, 88, this.context)
            }
          }
          break
        case GosuParser.BLOCK:
          this.enterOuterAlt(localContext, 2)
          {
            this.state = 880
            this.match(GosuParser.BLOCK)
            this.state = 881
            this.blockLiteral()
          }
          break
        default:
          throw new antlr.NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public classOrInterfaceType(): ClassOrInterfaceTypeContext {
    const localContext = new ClassOrInterfaceTypeContext(this.context, this.state)
    this.enterRule(localContext, 134, GosuParser.RULE_classOrInterfaceType)
    try {
      let alternative: number
      this.enterOuterAlt(localContext, 1)
      this.state = 884
      this.idclassOrInterfaceType()
      this.state = 885
      this.typeArguments()
      this.state = 892
      this.errorHandler.sync(this)
      alternative = this.interpreter.adaptivePredict(this.tokenStream, 90, this.context)
      while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
        if (alternative === 1) {
          this.state = 886
          this.match(GosuParser.T__1)
          this.state = 887
          this.id()
          this.state = 888
          this.typeArguments()
        }
        this.state = 894
        this.errorHandler.sync(this)
        alternative = this.interpreter.adaptivePredict(this.tokenStream, 90, this.context)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public typeArguments(): TypeArgumentsContext {
    const localContext = new TypeArgumentsContext(this.context, this.state)
    this.enterRule(localContext, 136, GosuParser.RULE_typeArguments)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 906
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 92, this.context)) {
        case 1:
          {
            this.state = 895
            this.match(GosuParser.T__11)
            this.state = 896
            this.typeArgument()
            this.state = 901
            this.errorHandler.sync(this)
            _la = this.tokenStream.LA(1)
            while (_la === 3) {
              this.state = 897
              this.match(GosuParser.T__2)
              this.state = 898
              this.typeArgument()
              this.state = 903
              this.errorHandler.sync(this)
              _la = this.tokenStream.LA(1)
            }
            this.state = 904
            this.match(GosuParser.T__12)
          }
          break
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public typeArgument(): TypeArgumentContext {
    const localContext = new TypeArgumentContext(this.context, this.state)
    this.enterRule(localContext, 138, GosuParser.RULE_typeArgument)
    let _la: number
    try {
      this.state = 914
      this.errorHandler.sync(this)
      switch (this.tokenStream.LA(1)) {
        case GosuParser.TRUE:
        case GosuParser.FALSE:
        case GosuParser.NAN:
        case GosuParser.INFINITY:
        case GosuParser.NULL:
        case GosuParser.LENGTH:
        case GosuParser.EXISTS:
        case GosuParser.STARTSWITH:
        case GosuParser.CONTAINS:
        case GosuParser.WHERE:
        case GosuParser.FIND:
        case GosuParser.AS:
        case GosuParser.EXCEPT:
        case GosuParser.INDEX:
        case GosuParser.ITERATOR:
        case GosuParser.GET:
        case GosuParser.SET:
        case GosuParser.ASSERT:
        case GosuParser.PRIVATE:
        case GosuParser.INTERNAL:
        case GosuParser.PROTECTED:
        case GosuParser.PUBLIC:
        case GosuParser.ABSTRACT:
        case GosuParser.HIDE:
        case GosuParser.FINAL:
        case GosuParser.STATIC:
        case GosuParser.READONLY:
        case GosuParser.OUTER:
        case GosuParser.EXECUTION:
        case GosuParser.REQUEST:
        case GosuParser.SESSION:
        case GosuParser.APPLICATION:
        case GosuParser.VOID:
        case GosuParser.BLOCK:
        case GosuParser.ENHANCEMENT:
        case GosuParser.CLASSPATH:
        case GosuParser.TYPELOADER:
        case GosuParser.IDENT:
          this.enterOuterAlt(localContext, 1)
          {
            this.state = 908
            this.typeLiteralType()
          }
          break
        case GosuParser.T__16:
          this.enterOuterAlt(localContext, 2)
          {
            this.state = 909
            this.match(GosuParser.T__16)
            this.state = 912
            this.errorHandler.sync(this)
            _la = this.tokenStream.LA(1)
            if (_la === 107 || _la === 153) {
              this.state = 910
              _la = this.tokenStream.LA(1)
              if (!(_la === 107 || _la === 153)) {
                this.errorHandler.recoverInline(this)
              } else {
                this.errorHandler.reportMatch(this)
                this.consume()
              }
              this.state = 911
              this.typeLiteralType()
            }
          }
          break
        default:
          throw new antlr.NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public expression(): ExpressionContext {
    const localContext = new ExpressionContext(this.context, this.state)
    this.enterRule(localContext, 140, GosuParser.RULE_expression)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 916
      this.conditionalExpr()
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public conditionalExpr(): ConditionalExprContext {
    const localContext = new ConditionalExprContext(this.context, this.state)
    this.enterRule(localContext, 142, GosuParser.RULE_conditionalExpr)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 918
      this.conditionalOrExpr()
      this.state = 926
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 95, this.context)) {
        case 1:
          {
            this.state = 919
            this.match(GosuParser.T__16)
            this.state = 920
            this.conditionalExpr()
            this.state = 921
            this.match(GosuParser.T__3)
            this.state = 922
            this.conditionalExpr()
          }
          break
        case 2:
          {
            this.state = 924
            this.match(GosuParser.T__17)
            this.state = 925
            this.conditionalExpr()
          }
          break
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public conditionalOrExpr(): ConditionalOrExprContext {
    const localContext = new ConditionalOrExprContext(this.context, this.state)
    this.enterRule(localContext, 144, GosuParser.RULE_conditionalOrExpr)
    try {
      let alternative: number
      this.enterOuterAlt(localContext, 1)
      this.state = 928
      this.conditionalAndExpr()
      this.state = 934
      this.errorHandler.sync(this)
      alternative = this.interpreter.adaptivePredict(this.tokenStream, 96, this.context)
      while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
        if (alternative === 1) {
          this.state = 929
          this.orOp()
          this.state = 930
          this.conditionalAndExpr()
        }
        this.state = 936
        this.errorHandler.sync(this)
        alternative = this.interpreter.adaptivePredict(this.tokenStream, 96, this.context)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public conditionalAndExpr(): ConditionalAndExprContext {
    const localContext = new ConditionalAndExprContext(this.context, this.state)
    this.enterRule(localContext, 146, GosuParser.RULE_conditionalAndExpr)
    try {
      let alternative: number
      this.enterOuterAlt(localContext, 1)
      this.state = 937
      this.bitwiseOrExpr()
      this.state = 943
      this.errorHandler.sync(this)
      alternative = this.interpreter.adaptivePredict(this.tokenStream, 97, this.context)
      while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
        if (alternative === 1) {
          this.state = 938
          this.andOp()
          this.state = 939
          this.bitwiseOrExpr()
        }
        this.state = 945
        this.errorHandler.sync(this)
        alternative = this.interpreter.adaptivePredict(this.tokenStream, 97, this.context)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public bitwiseOrExpr(): BitwiseOrExprContext {
    const localContext = new BitwiseOrExprContext(this.context, this.state)
    this.enterRule(localContext, 148, GosuParser.RULE_bitwiseOrExpr)
    try {
      let alternative: number
      this.enterOuterAlt(localContext, 1)
      this.state = 946
      this.bitwiseXorExpr()
      this.state = 951
      this.errorHandler.sync(this)
      alternative = this.interpreter.adaptivePredict(this.tokenStream, 98, this.context)
      while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
        if (alternative === 1) {
          this.state = 947
          this.match(GosuParser.T__18)
          this.state = 948
          this.bitwiseXorExpr()
        }
        this.state = 953
        this.errorHandler.sync(this)
        alternative = this.interpreter.adaptivePredict(this.tokenStream, 98, this.context)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public bitwiseXorExpr(): BitwiseXorExprContext {
    const localContext = new BitwiseXorExprContext(this.context, this.state)
    this.enterRule(localContext, 150, GosuParser.RULE_bitwiseXorExpr)
    try {
      let alternative: number
      this.enterOuterAlt(localContext, 1)
      this.state = 954
      this.bitwiseAndExpr()
      this.state = 959
      this.errorHandler.sync(this)
      alternative = this.interpreter.adaptivePredict(this.tokenStream, 99, this.context)
      while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
        if (alternative === 1) {
          this.state = 955
          this.match(GosuParser.T__19)
          this.state = 956
          this.bitwiseAndExpr()
        }
        this.state = 961
        this.errorHandler.sync(this)
        alternative = this.interpreter.adaptivePredict(this.tokenStream, 99, this.context)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public bitwiseAndExpr(): BitwiseAndExprContext {
    const localContext = new BitwiseAndExprContext(this.context, this.state)
    this.enterRule(localContext, 152, GosuParser.RULE_bitwiseAndExpr)
    try {
      let alternative: number
      this.enterOuterAlt(localContext, 1)
      this.state = 962
      this.equalityExpr()
      this.state = 967
      this.errorHandler.sync(this)
      alternative = this.interpreter.adaptivePredict(this.tokenStream, 100, this.context)
      while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
        if (alternative === 1) {
          this.state = 963
          this.match(GosuParser.T__15)
          this.state = 964
          this.equalityExpr()
        }
        this.state = 969
        this.errorHandler.sync(this)
        alternative = this.interpreter.adaptivePredict(this.tokenStream, 100, this.context)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public equalityExpr(): EqualityExprContext {
    const localContext = new EqualityExprContext(this.context, this.state)
    this.enterRule(localContext, 154, GosuParser.RULE_equalityExpr)
    try {
      let alternative: number
      this.enterOuterAlt(localContext, 1)
      this.state = 970
      this.relationalExpr()
      this.state = 976
      this.errorHandler.sync(this)
      alternative = this.interpreter.adaptivePredict(this.tokenStream, 101, this.context)
      while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
        if (alternative === 1) {
          this.state = 971
          this.equalityOp()
          this.state = 972
          this.relationalExpr()
        }
        this.state = 978
        this.errorHandler.sync(this)
        alternative = this.interpreter.adaptivePredict(this.tokenStream, 101, this.context)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public relationalExpr(): RelationalExprContext {
    const localContext = new RelationalExprContext(this.context, this.state)
    this.enterRule(localContext, 156, GosuParser.RULE_relationalExpr)
    try {
      let alternative: number
      this.enterOuterAlt(localContext, 1)
      this.state = 979
      this.intervalExpr()
      this.state = 987
      this.errorHandler.sync(this)
      alternative = this.interpreter.adaptivePredict(this.tokenStream, 103, this.context)
      while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
        if (alternative === 1) {
          this.state = 985
          this.errorHandler.sync(this)
          switch (this.tokenStream.LA(1)) {
            case GosuParser.T__11:
            case GosuParser.T__12:
            case GosuParser.T__54:
            case GosuParser.T__55:
              {
                this.state = 980
                this.relOp()
                this.state = 981
                this.intervalExpr()
              }
              break
            case GosuParser.TYPEIS:
              {
                this.state = 983
                this.match(GosuParser.TYPEIS)
                this.state = 984
                this.typeLiteralType()
              }
              break
            default:
              throw new antlr.NoViableAltException(this)
          }
        }
        this.state = 989
        this.errorHandler.sync(this)
        alternative = this.interpreter.adaptivePredict(this.tokenStream, 103, this.context)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public intervalExpr(): IntervalExprContext {
    const localContext = new IntervalExprContext(this.context, this.state)
    this.enterRule(localContext, 158, GosuParser.RULE_intervalExpr)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 990
      this.bitshiftExpr()
      this.state = 994
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 104, this.context)) {
        case 1:
          {
            this.state = 991
            this.intervalOp()
            this.state = 992
            this.bitshiftExpr()
          }
          break
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public bitshiftExpr(): BitshiftExprContext {
    const localContext = new BitshiftExprContext(this.context, this.state)
    this.enterRule(localContext, 160, GosuParser.RULE_bitshiftExpr)
    try {
      let alternative: number
      this.enterOuterAlt(localContext, 1)
      this.state = 996
      this.additiveExpr()
      this.state = 1002
      this.errorHandler.sync(this)
      alternative = this.interpreter.adaptivePredict(this.tokenStream, 105, this.context)
      while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
        if (alternative === 1) {
          this.state = 997
          this.bitshiftOp()
          this.state = 998
          this.additiveExpr()
        }
        this.state = 1004
        this.errorHandler.sync(this)
        alternative = this.interpreter.adaptivePredict(this.tokenStream, 105, this.context)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public additiveExpr(): AdditiveExprContext {
    const localContext = new AdditiveExprContext(this.context, this.state)
    this.enterRule(localContext, 162, GosuParser.RULE_additiveExpr)
    try {
      let alternative: number
      this.enterOuterAlt(localContext, 1)
      this.state = 1005
      this.multiplicativeExpr()
      this.state = 1011
      this.errorHandler.sync(this)
      alternative = this.interpreter.adaptivePredict(this.tokenStream, 106, this.context)
      while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
        if (alternative === 1) {
          this.state = 1006
          this.additiveOp()
          this.state = 1007
          this.multiplicativeExpr()
        }
        this.state = 1013
        this.errorHandler.sync(this)
        alternative = this.interpreter.adaptivePredict(this.tokenStream, 106, this.context)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public multiplicativeExpr(): MultiplicativeExprContext {
    const localContext = new MultiplicativeExprContext(this.context, this.state)
    this.enterRule(localContext, 164, GosuParser.RULE_multiplicativeExpr)
    try {
      let alternative: number
      this.enterOuterAlt(localContext, 1)
      this.state = 1014
      this.typeAsExpr()
      this.state = 1020
      this.errorHandler.sync(this)
      alternative = this.interpreter.adaptivePredict(this.tokenStream, 107, this.context)
      while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
        if (alternative === 1) {
          this.state = 1015
          this.multiplicativeOp()
          this.state = 1016
          this.typeAsExpr()
        }
        this.state = 1022
        this.errorHandler.sync(this)
        alternative = this.interpreter.adaptivePredict(this.tokenStream, 107, this.context)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public typeAsExpr(): TypeAsExprContext {
    const localContext = new TypeAsExprContext(this.context, this.state)
    this.enterRule(localContext, 166, GosuParser.RULE_typeAsExpr)
    try {
      let alternative: number
      this.enterOuterAlt(localContext, 1)
      this.state = 1023
      this.unaryExpr()
      this.state = 1029
      this.errorHandler.sync(this)
      alternative = this.interpreter.adaptivePredict(this.tokenStream, 108, this.context)
      while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
        if (alternative === 1) {
          this.state = 1024
          this.typeAsOp()
          this.state = 1025
          this.typeLiteral()
        }
        this.state = 1031
        this.errorHandler.sync(this)
        alternative = this.interpreter.adaptivePredict(this.tokenStream, 108, this.context)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public unaryExpr(): UnaryExprContext {
    const localContext = new UnaryExprContext(this.context, this.state)
    this.enterRule(localContext, 168, GosuParser.RULE_unaryExpr)
    let _la: number
    try {
      this.state = 1035
      this.errorHandler.sync(this)
      switch (this.tokenStream.LA(1)) {
        case GosuParser.T__20:
        case GosuParser.T__21:
        case GosuParser.T__22:
          this.enterOuterAlt(localContext, 1)
          {
            this.state = 1032
            _la = this.tokenStream.LA(1)
            if (!((_la & ~0x1f) === 0 && ((1 << _la) & 14680064) !== 0)) {
              this.errorHandler.recoverInline(this)
            } else {
              this.errorHandler.reportMatch(this)
              this.consume()
            }
            this.state = 1033
            this.unaryExprNotPlusMinus()
          }
          break
        case GosuParser.T__6:
        case GosuParser.T__13:
        case GosuParser.T__23:
        case GosuParser.T__25:
        case GosuParser.T__68:
        case GosuParser.T__69:
        case GosuParser.NOT:
        case GosuParser.TYPEOF:
        case GosuParser.STATICTYPEOF:
        case GosuParser.NEW:
        case GosuParser.EVAL:
        case GosuParser.TRUE:
        case GosuParser.FALSE:
        case GosuParser.NAN:
        case GosuParser.INFINITY:
        case GosuParser.NULL:
        case GosuParser.LENGTH:
        case GosuParser.EXISTS:
        case GosuParser.STARTSWITH:
        case GosuParser.CONTAINS:
        case GosuParser.WHERE:
        case GosuParser.FIND:
        case GosuParser.AS:
        case GosuParser.EXCEPT:
        case GosuParser.INDEX:
        case GosuParser.ITERATOR:
        case GosuParser.GET:
        case GosuParser.SET:
        case GosuParser.ASSERT:
        case GosuParser.PRIVATE:
        case GosuParser.INTERNAL:
        case GosuParser.PROTECTED:
        case GosuParser.PUBLIC:
        case GosuParser.ABSTRACT:
        case GosuParser.HIDE:
        case GosuParser.FINAL:
        case GosuParser.STATIC:
        case GosuParser.READONLY:
        case GosuParser.OUTER:
        case GosuParser.EXECUTION:
        case GosuParser.REQUEST:
        case GosuParser.SESSION:
        case GosuParser.APPLICATION:
        case GosuParser.VOID:
        case GosuParser.BLOCK:
        case GosuParser.ENHANCEMENT:
        case GosuParser.CLASSPATH:
        case GosuParser.TYPELOADER:
        case GosuParser.THIS:
        case GosuParser.SUPER:
        case GosuParser.IDENT:
        case GosuParser.CHAR_LITERAL:
        case GosuParser.STRING_LITERAL:
        case GosuParser.HEX_LITERAL:
        case GosuParser.BIN_LITERAL:
        case GosuParser.DECIMAL_LITERAL:
          this.enterOuterAlt(localContext, 2)
          {
            this.state = 1034
            this.unaryExprNotPlusMinus()
          }
          break
        default:
          throw new antlr.NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public unaryExprNotPlusMinus(): UnaryExprNotPlusMinusContext {
    const localContext = new UnaryExprNotPlusMinusContext(this.context, this.state)
    this.enterRule(localContext, 170, GosuParser.RULE_unaryExprNotPlusMinus)
    try {
      this.state = 1044
      this.errorHandler.sync(this)
      switch (this.tokenStream.LA(1)) {
        case GosuParser.T__68:
        case GosuParser.T__69:
        case GosuParser.NOT:
        case GosuParser.TYPEOF:
        case GosuParser.STATICTYPEOF:
          this.enterOuterAlt(localContext, 1)
          {
            this.state = 1037
            this.unaryOp()
            this.state = 1038
            this.unaryExpr()
          }
          break
        case GosuParser.T__23:
          this.enterOuterAlt(localContext, 2)
          {
            this.state = 1040
            this.match(GosuParser.T__23)
            this.state = 1041
            this.blockExpr()
          }
          break
        case GosuParser.EVAL:
          this.enterOuterAlt(localContext, 3)
          {
            this.state = 1042
            this.evalExpr()
          }
          break
        case GosuParser.T__6:
        case GosuParser.T__13:
        case GosuParser.T__25:
        case GosuParser.NEW:
        case GosuParser.TRUE:
        case GosuParser.FALSE:
        case GosuParser.NAN:
        case GosuParser.INFINITY:
        case GosuParser.NULL:
        case GosuParser.LENGTH:
        case GosuParser.EXISTS:
        case GosuParser.STARTSWITH:
        case GosuParser.CONTAINS:
        case GosuParser.WHERE:
        case GosuParser.FIND:
        case GosuParser.AS:
        case GosuParser.EXCEPT:
        case GosuParser.INDEX:
        case GosuParser.ITERATOR:
        case GosuParser.GET:
        case GosuParser.SET:
        case GosuParser.ASSERT:
        case GosuParser.PRIVATE:
        case GosuParser.INTERNAL:
        case GosuParser.PROTECTED:
        case GosuParser.PUBLIC:
        case GosuParser.ABSTRACT:
        case GosuParser.HIDE:
        case GosuParser.FINAL:
        case GosuParser.STATIC:
        case GosuParser.READONLY:
        case GosuParser.OUTER:
        case GosuParser.EXECUTION:
        case GosuParser.REQUEST:
        case GosuParser.SESSION:
        case GosuParser.APPLICATION:
        case GosuParser.VOID:
        case GosuParser.BLOCK:
        case GosuParser.ENHANCEMENT:
        case GosuParser.CLASSPATH:
        case GosuParser.TYPELOADER:
        case GosuParser.THIS:
        case GosuParser.SUPER:
        case GosuParser.IDENT:
        case GosuParser.CHAR_LITERAL:
        case GosuParser.STRING_LITERAL:
        case GosuParser.HEX_LITERAL:
        case GosuParser.BIN_LITERAL:
        case GosuParser.DECIMAL_LITERAL:
          this.enterOuterAlt(localContext, 4)
          {
            this.state = 1043
            this.primaryExpr()
          }
          break
        default:
          throw new antlr.NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public blockExpr(): BlockExprContext {
    const localContext = new BlockExprContext(this.context, this.state)
    this.enterRule(localContext, 172, GosuParser.RULE_blockExpr)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1047
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (
        _la === 1 ||
        (((_la - 115) & ~0x1f) === 0 && ((1 << (_la - 115)) & 4294967295) !== 0) ||
        (((_la - 147) & ~0x1f) === 0 && ((1 << (_la - 147)) & 159) !== 0)
      ) {
        this.state = 1046
        this.parameterDeclarationList()
      }

      this.state = 1049
      this.match(GosuParser.T__24)
      this.state = 1052
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 112, this.context)) {
        case 1:
          {
            this.state = 1050
            this.expression()
          }
          break
        case 2:
          {
            this.state = 1051
            this.statementBlock()
          }
          break
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public parameterDeclarationList(): ParameterDeclarationListContext {
    const localContext = new ParameterDeclarationListContext(this.context, this.state)
    this.enterRule(localContext, 174, GosuParser.RULE_parameterDeclarationList)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1054
      this.parameterDeclaration()
      this.state = 1059
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      while (_la === 3) {
        this.state = 1055
        this.match(GosuParser.T__2)
        this.state = 1056
        this.parameterDeclaration()
        this.state = 1061
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public parameterDeclaration(): ParameterDeclarationContext {
    const localContext = new ParameterDeclarationContext(this.context, this.state)
    this.enterRule(localContext, 176, GosuParser.RULE_parameterDeclaration)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1065
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      while (_la === 1) {
        this.state = 1062
        this.annotation()
        this.state = 1067
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
      }
      this.state = 1069
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 115, this.context)) {
        case 1:
          {
            this.state = 1068
            this.match(GosuParser.FINAL)
          }
          break
      }
      this.state = 1071
      this.id()
      this.state = 1081
      this.errorHandler.sync(this)
      switch (this.tokenStream.LA(1)) {
        case GosuParser.T__3:
          {
            this.state = 1072
            this.match(GosuParser.T__3)
            this.state = 1073
            this.typeLiteral()
            this.state = 1076
            this.errorHandler.sync(this)
            _la = this.tokenStream.LA(1)
            if (_la === 10) {
              this.state = 1074
              this.match(GosuParser.T__9)
              this.state = 1075
              this.expression()
            }
          }
          break
        case GosuParser.T__13:
          {
            this.state = 1078
            this.blockTypeLiteral()
          }
          break
        case GosuParser.T__9:
          {
            this.state = 1079
            this.match(GosuParser.T__9)
            this.state = 1080
            this.expression()
          }
          break
        case GosuParser.T__2:
        case GosuParser.T__14:
        case GosuParser.T__24:
          break
        default:
          break
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public annotationArguments(): AnnotationArgumentsContext {
    const localContext = new AnnotationArgumentsContext(this.context, this.state)
    this.enterRule(localContext, 178, GosuParser.RULE_annotationArguments)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1083
      this.arguments()
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public arguments(): ArgumentsContext {
    const localContext = new ArgumentsContext(this.context, this.state)
    this.enterRule(localContext, 180, GosuParser.RULE_arguments)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1085
      this.match(GosuParser.T__13)
      this.state = 1094
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (
        ((_la & ~0x1f) === 0 && ((1 << _la) & 98582672) !== 0) ||
        (((_la - 69) & ~0x1f) === 0 && ((1 << (_la - 69)) & 1555) !== 0) ||
        (((_la - 101) & ~0x1f) === 0 && ((1 << (_la - 101)) & 4294950929) !== 0) ||
        (((_la - 133) & ~0x1f) === 0 && ((1 << (_la - 133)) & 134217727) !== 0)
      ) {
        this.state = 1086
        this.argExpression()
        this.state = 1091
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
        while (_la === 3) {
          this.state = 1087
          this.match(GosuParser.T__2)
          this.state = 1088
          this.argExpression()
          this.state = 1093
          this.errorHandler.sync(this)
          _la = this.tokenStream.LA(1)
        }
      }

      this.state = 1096
      this.match(GosuParser.T__14)
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public optionalArguments(): OptionalArgumentsContext {
    const localContext = new OptionalArgumentsContext(this.context, this.state)
    this.enterRule(localContext, 182, GosuParser.RULE_optionalArguments)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1099
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 120, this.context)) {
        case 1:
          {
            this.state = 1098
            this.arguments()
          }
          break
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public argExpression(): ArgExpressionContext {
    const localContext = new ArgExpressionContext(this.context, this.state)
    this.enterRule(localContext, 184, GosuParser.RULE_argExpression)
    try {
      this.state = 1103
      this.errorHandler.sync(this)
      switch (this.tokenStream.LA(1)) {
        case GosuParser.T__3:
          this.enterOuterAlt(localContext, 1)
          {
            this.state = 1101
            this.namedArgumentExpression()
          }
          break
        case GosuParser.T__6:
        case GosuParser.T__13:
        case GosuParser.T__20:
        case GosuParser.T__21:
        case GosuParser.T__22:
        case GosuParser.T__23:
        case GosuParser.T__25:
        case GosuParser.T__68:
        case GosuParser.T__69:
        case GosuParser.NOT:
        case GosuParser.TYPEOF:
        case GosuParser.STATICTYPEOF:
        case GosuParser.NEW:
        case GosuParser.EVAL:
        case GosuParser.TRUE:
        case GosuParser.FALSE:
        case GosuParser.NAN:
        case GosuParser.INFINITY:
        case GosuParser.NULL:
        case GosuParser.LENGTH:
        case GosuParser.EXISTS:
        case GosuParser.STARTSWITH:
        case GosuParser.CONTAINS:
        case GosuParser.WHERE:
        case GosuParser.FIND:
        case GosuParser.AS:
        case GosuParser.EXCEPT:
        case GosuParser.INDEX:
        case GosuParser.ITERATOR:
        case GosuParser.GET:
        case GosuParser.SET:
        case GosuParser.ASSERT:
        case GosuParser.PRIVATE:
        case GosuParser.INTERNAL:
        case GosuParser.PROTECTED:
        case GosuParser.PUBLIC:
        case GosuParser.ABSTRACT:
        case GosuParser.HIDE:
        case GosuParser.FINAL:
        case GosuParser.STATIC:
        case GosuParser.READONLY:
        case GosuParser.OUTER:
        case GosuParser.EXECUTION:
        case GosuParser.REQUEST:
        case GosuParser.SESSION:
        case GosuParser.APPLICATION:
        case GosuParser.VOID:
        case GosuParser.BLOCK:
        case GosuParser.ENHANCEMENT:
        case GosuParser.CLASSPATH:
        case GosuParser.TYPELOADER:
        case GosuParser.THIS:
        case GosuParser.SUPER:
        case GosuParser.IDENT:
        case GosuParser.CHAR_LITERAL:
        case GosuParser.STRING_LITERAL:
        case GosuParser.HEX_LITERAL:
        case GosuParser.BIN_LITERAL:
        case GosuParser.DECIMAL_LITERAL:
          this.enterOuterAlt(localContext, 2)
          {
            this.state = 1102
            this.expression()
          }
          break
        default:
          throw new antlr.NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public namedArgumentExpression(): NamedArgumentExpressionContext {
    const localContext = new NamedArgumentExpressionContext(this.context, this.state)
    this.enterRule(localContext, 186, GosuParser.RULE_namedArgumentExpression)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1105
      this.match(GosuParser.T__3)
      this.state = 1106
      this.id()
      this.state = 1107
      this.match(GosuParser.T__9)
      this.state = 1108
      this.expression()
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public evalExpr(): EvalExprContext {
    const localContext = new EvalExprContext(this.context, this.state)
    this.enterRule(localContext, 188, GosuParser.RULE_evalExpr)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1110
      this.match(GosuParser.EVAL)
      this.state = 1111
      this.match(GosuParser.T__13)
      this.state = 1112
      this.expression()
      this.state = 1113
      this.match(GosuParser.T__14)
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public featureLiteral(): FeatureLiteralContext {
    const localContext = new FeatureLiteralContext(this.context, this.state)
    this.enterRule(localContext, 190, GosuParser.RULE_featureLiteral)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1115
      this.match(GosuParser.T__25)
      this.state = 1118
      this.errorHandler.sync(this)
      switch (this.tokenStream.LA(1)) {
        case GosuParser.TRUE:
        case GosuParser.FALSE:
        case GosuParser.NAN:
        case GosuParser.INFINITY:
        case GosuParser.NULL:
        case GosuParser.LENGTH:
        case GosuParser.EXISTS:
        case GosuParser.STARTSWITH:
        case GosuParser.CONTAINS:
        case GosuParser.WHERE:
        case GosuParser.FIND:
        case GosuParser.AS:
        case GosuParser.EXCEPT:
        case GosuParser.INDEX:
        case GosuParser.ITERATOR:
        case GosuParser.GET:
        case GosuParser.SET:
        case GosuParser.ASSERT:
        case GosuParser.PRIVATE:
        case GosuParser.INTERNAL:
        case GosuParser.PROTECTED:
        case GosuParser.PUBLIC:
        case GosuParser.ABSTRACT:
        case GosuParser.HIDE:
        case GosuParser.FINAL:
        case GosuParser.STATIC:
        case GosuParser.READONLY:
        case GosuParser.OUTER:
        case GosuParser.EXECUTION:
        case GosuParser.REQUEST:
        case GosuParser.SESSION:
        case GosuParser.APPLICATION:
        case GosuParser.VOID:
        case GosuParser.BLOCK:
        case GosuParser.ENHANCEMENT:
        case GosuParser.CLASSPATH:
        case GosuParser.TYPELOADER:
        case GosuParser.IDENT:
          {
            this.state = 1116
            this.id()
          }
          break
        case GosuParser.CONSTRUCT:
          {
            this.state = 1117
            this.match(GosuParser.CONSTRUCT)
          }
          break
        default:
          throw new antlr.NoViableAltException(this)
      }
      this.state = 1120
      this.typeArguments()
      this.state = 1121
      this.optionalArguments()
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public standAloneDataStructureInitialization(): StandAloneDataStructureInitializationContext {
    const localContext = new StandAloneDataStructureInitializationContext(this.context, this.state)
    this.enterRule(localContext, 192, GosuParser.RULE_standAloneDataStructureInitialization)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1123
      this.match(GosuParser.T__6)
      this.state = 1125
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (
        ((_la & ~0x1f) === 0 && ((1 << _la) & 98582656) !== 0) ||
        (((_la - 69) & ~0x1f) === 0 && ((1 << (_la - 69)) & 1555) !== 0) ||
        (((_la - 101) & ~0x1f) === 0 && ((1 << (_la - 101)) & 4294950929) !== 0) ||
        (((_la - 133) & ~0x1f) === 0 && ((1 << (_la - 133)) & 134217727) !== 0)
      ) {
        this.state = 1124
        this.initializerExpression()
      }

      this.state = 1127
      this.match(GosuParser.T__7)
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public primaryExpr(): PrimaryExprContext {
    const localContext = new PrimaryExprContext(this.context, this.state)
    this.enterRule(localContext, 194, GosuParser.RULE_primaryExpr)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1135
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 124, this.context)) {
        case 1:
          {
            this.state = 1129
            this.newExpr()
          }
          break
        case 2:
          {
            this.state = 1130
            this.thisSuperExpr()
          }
          break
        case 3:
          {
            this.state = 1131
            this.literal()
          }
          break
        case 4:
          {
            this.state = 1132
            this.typeLiteralExpr()
          }
          break
        case 5:
          {
            this.state = 1133
            this.parenthExpr()
          }
          break
        case 6:
          {
            this.state = 1134
            this.standAloneDataStructureInitialization()
          }
          break
      }
      this.state = 1137
      this.indirectMemberAccess()
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public parenthExpr(): ParenthExprContext {
    const localContext = new ParenthExprContext(this.context, this.state)
    this.enterRule(localContext, 196, GosuParser.RULE_parenthExpr)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1139
      this.match(GosuParser.T__13)
      this.state = 1140
      this.expression()
      this.state = 1141
      this.match(GosuParser.T__14)
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public newExpr(): NewExprContext {
    const localContext = new NewExprContext(this.context, this.state)
    this.enterRule(localContext, 198, GosuParser.RULE_newExpr)
    let _la: number
    try {
      let alternative: number
      this.enterOuterAlt(localContext, 1)
      this.state = 1143
      this.match(GosuParser.NEW)
      this.state = 1145
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (
        (((_la - 115) & ~0x1f) === 0 && ((1 << (_la - 115)) & 4294967295) !== 0) ||
        (((_la - 147) & ~0x1f) === 0 && ((1 << (_la - 147)) & 157) !== 0)
      ) {
        this.state = 1144
        this.classOrInterfaceType()
      }

      this.state = 1187
      this.errorHandler.sync(this)
      switch (this.tokenStream.LA(1)) {
        case GosuParser.T__13:
          {
            this.state = 1147
            this.arguments()
            this.state = 1155
            this.errorHandler.sync(this)
            switch (this.interpreter.adaptivePredict(this.tokenStream, 127, this.context)) {
              case 1:
                {
                  this.state = 1148
                  this.match(GosuParser.T__6)
                  this.state = 1151
                  this.errorHandler.sync(this)
                  switch (this.interpreter.adaptivePredict(this.tokenStream, 126, this.context)) {
                    case 1:
                      {
                        this.state = 1149
                        this.initializer()
                      }
                      break
                    case 2:
                      {
                        this.state = 1150
                        this.anonymousInnerClass()
                      }
                      break
                  }
                  this.state = 1153
                  this.match(GosuParser.T__7)
                }
                break
            }
          }
          break
        case GosuParser.T__4:
          {
            this.state = 1157
            this.match(GosuParser.T__4)
            this.state = 1185
            this.errorHandler.sync(this)
            switch (this.tokenStream.LA(1)) {
              case GosuParser.T__5:
                {
                  this.state = 1158
                  this.match(GosuParser.T__5)
                  this.state = 1163
                  this.errorHandler.sync(this)
                  _la = this.tokenStream.LA(1)
                  while (_la === 5) {
                    this.state = 1159
                    this.match(GosuParser.T__4)
                    this.state = 1160
                    this.match(GosuParser.T__5)
                    this.state = 1165
                    this.errorHandler.sync(this)
                    _la = this.tokenStream.LA(1)
                  }
                  this.state = 1166
                  this.arrayInitializer()
                }
                break
              case GosuParser.T__6:
              case GosuParser.T__13:
              case GosuParser.T__20:
              case GosuParser.T__21:
              case GosuParser.T__22:
              case GosuParser.T__23:
              case GosuParser.T__25:
              case GosuParser.T__68:
              case GosuParser.T__69:
              case GosuParser.NOT:
              case GosuParser.TYPEOF:
              case GosuParser.STATICTYPEOF:
              case GosuParser.NEW:
              case GosuParser.EVAL:
              case GosuParser.TRUE:
              case GosuParser.FALSE:
              case GosuParser.NAN:
              case GosuParser.INFINITY:
              case GosuParser.NULL:
              case GosuParser.LENGTH:
              case GosuParser.EXISTS:
              case GosuParser.STARTSWITH:
              case GosuParser.CONTAINS:
              case GosuParser.WHERE:
              case GosuParser.FIND:
              case GosuParser.AS:
              case GosuParser.EXCEPT:
              case GosuParser.INDEX:
              case GosuParser.ITERATOR:
              case GosuParser.GET:
              case GosuParser.SET:
              case GosuParser.ASSERT:
              case GosuParser.PRIVATE:
              case GosuParser.INTERNAL:
              case GosuParser.PROTECTED:
              case GosuParser.PUBLIC:
              case GosuParser.ABSTRACT:
              case GosuParser.HIDE:
              case GosuParser.FINAL:
              case GosuParser.STATIC:
              case GosuParser.READONLY:
              case GosuParser.OUTER:
              case GosuParser.EXECUTION:
              case GosuParser.REQUEST:
              case GosuParser.SESSION:
              case GosuParser.APPLICATION:
              case GosuParser.VOID:
              case GosuParser.BLOCK:
              case GosuParser.ENHANCEMENT:
              case GosuParser.CLASSPATH:
              case GosuParser.TYPELOADER:
              case GosuParser.THIS:
              case GosuParser.SUPER:
              case GosuParser.IDENT:
              case GosuParser.CHAR_LITERAL:
              case GosuParser.STRING_LITERAL:
              case GosuParser.HEX_LITERAL:
              case GosuParser.BIN_LITERAL:
              case GosuParser.DECIMAL_LITERAL:
                {
                  this.state = 1167
                  this.expression()
                  this.state = 1168
                  this.match(GosuParser.T__5)
                  this.state = 1175
                  this.errorHandler.sync(this)
                  alternative = this.interpreter.adaptivePredict(this.tokenStream, 129, this.context)
                  while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                      this.state = 1169
                      this.match(GosuParser.T__4)
                      this.state = 1170
                      this.expression()
                      this.state = 1171
                      this.match(GosuParser.T__5)
                    }
                    this.state = 1177
                    this.errorHandler.sync(this)
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 129, this.context)
                  }
                  this.state = 1182
                  this.errorHandler.sync(this)
                  alternative = this.interpreter.adaptivePredict(this.tokenStream, 130, this.context)
                  while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                      this.state = 1178
                      this.match(GosuParser.T__4)
                      this.state = 1179
                      this.match(GosuParser.T__5)
                    }
                    this.state = 1184
                    this.errorHandler.sync(this)
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 130, this.context)
                  }
                }
                break
              default:
                throw new antlr.NoViableAltException(this)
            }
          }
          break
        default:
          throw new antlr.NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public anonymousInnerClass(): AnonymousInnerClassContext {
    const localContext = new AnonymousInnerClassContext(this.context, this.state)
    this.enterRule(localContext, 200, GosuParser.RULE_anonymousInnerClass)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1189
      this.classMembers()
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public arrayInitializer(): ArrayInitializerContext {
    const localContext = new ArrayInitializerContext(this.context, this.state)
    this.enterRule(localContext, 202, GosuParser.RULE_arrayInitializer)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1191
      this.match(GosuParser.T__6)
      this.state = 1200
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (
        ((_la & ~0x1f) === 0 && ((1 << _la) & 98582656) !== 0) ||
        (((_la - 69) & ~0x1f) === 0 && ((1 << (_la - 69)) & 1555) !== 0) ||
        (((_la - 101) & ~0x1f) === 0 && ((1 << (_la - 101)) & 4294950929) !== 0) ||
        (((_la - 133) & ~0x1f) === 0 && ((1 << (_la - 133)) & 134217727) !== 0)
      ) {
        this.state = 1192
        this.expression()
        this.state = 1197
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
        while (_la === 3) {
          this.state = 1193
          this.match(GosuParser.T__2)
          this.state = 1194
          this.expression()
          this.state = 1199
          this.errorHandler.sync(this)
          _la = this.tokenStream.LA(1)
        }
      }

      this.state = 1202
      this.match(GosuParser.T__7)
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public initializer(): InitializerContext {
    const localContext = new InitializerContext(this.context, this.state)
    this.enterRule(localContext, 204, GosuParser.RULE_initializer)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1206
      this.errorHandler.sync(this)
      switch (this.tokenStream.LA(1)) {
        case GosuParser.T__6:
        case GosuParser.T__13:
        case GosuParser.T__20:
        case GosuParser.T__21:
        case GosuParser.T__22:
        case GosuParser.T__23:
        case GosuParser.T__25:
        case GosuParser.T__68:
        case GosuParser.T__69:
        case GosuParser.NOT:
        case GosuParser.TYPEOF:
        case GosuParser.STATICTYPEOF:
        case GosuParser.NEW:
        case GosuParser.EVAL:
        case GosuParser.TRUE:
        case GosuParser.FALSE:
        case GosuParser.NAN:
        case GosuParser.INFINITY:
        case GosuParser.NULL:
        case GosuParser.LENGTH:
        case GosuParser.EXISTS:
        case GosuParser.STARTSWITH:
        case GosuParser.CONTAINS:
        case GosuParser.WHERE:
        case GosuParser.FIND:
        case GosuParser.AS:
        case GosuParser.EXCEPT:
        case GosuParser.INDEX:
        case GosuParser.ITERATOR:
        case GosuParser.GET:
        case GosuParser.SET:
        case GosuParser.ASSERT:
        case GosuParser.PRIVATE:
        case GosuParser.INTERNAL:
        case GosuParser.PROTECTED:
        case GosuParser.PUBLIC:
        case GosuParser.ABSTRACT:
        case GosuParser.HIDE:
        case GosuParser.FINAL:
        case GosuParser.STATIC:
        case GosuParser.READONLY:
        case GosuParser.OUTER:
        case GosuParser.EXECUTION:
        case GosuParser.REQUEST:
        case GosuParser.SESSION:
        case GosuParser.APPLICATION:
        case GosuParser.VOID:
        case GosuParser.BLOCK:
        case GosuParser.ENHANCEMENT:
        case GosuParser.CLASSPATH:
        case GosuParser.TYPELOADER:
        case GosuParser.THIS:
        case GosuParser.SUPER:
        case GosuParser.IDENT:
        case GosuParser.CHAR_LITERAL:
        case GosuParser.STRING_LITERAL:
        case GosuParser.HEX_LITERAL:
        case GosuParser.BIN_LITERAL:
        case GosuParser.DECIMAL_LITERAL:
          {
            this.state = 1204
            this.initializerExpression()
          }
          break
        case GosuParser.T__3:
          {
            this.state = 1205
            this.objectInitializer()
          }
          break
        case GosuParser.T__7:
          break
        default:
          break
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public initializerExpression(): InitializerExpressionContext {
    const localContext = new InitializerExpressionContext(this.context, this.state)
    this.enterRule(localContext, 206, GosuParser.RULE_initializerExpression)
    try {
      this.state = 1210
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 136, this.context)) {
        case 1:
          this.enterOuterAlt(localContext, 1)
          {
            this.state = 1208
            this.mapInitializerList()
          }
          break
        case 2:
          this.enterOuterAlt(localContext, 2)
          {
            this.state = 1209
            this.arrayValueList()
          }
          break
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public arrayValueList(): ArrayValueListContext {
    const localContext = new ArrayValueListContext(this.context, this.state)
    this.enterRule(localContext, 208, GosuParser.RULE_arrayValueList)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1212
      this.expression()
      this.state = 1217
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      while (_la === 3) {
        this.state = 1213
        this.match(GosuParser.T__2)
        this.state = 1214
        this.expression()
        this.state = 1219
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public mapInitializerList(): MapInitializerListContext {
    const localContext = new MapInitializerListContext(this.context, this.state)
    this.enterRule(localContext, 210, GosuParser.RULE_mapInitializerList)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1220
      this.expression()
      this.state = 1221
      this.match(GosuParser.T__24)
      this.state = 1222
      this.expression()
      this.state = 1230
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      while (_la === 3) {
        this.state = 1223
        this.match(GosuParser.T__2)
        this.state = 1224
        this.expression()
        this.state = 1225
        this.match(GosuParser.T__24)
        this.state = 1226
        this.expression()
        this.state = 1232
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public objectInitializer(): ObjectInitializerContext {
    const localContext = new ObjectInitializerContext(this.context, this.state)
    this.enterRule(localContext, 212, GosuParser.RULE_objectInitializer)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1233
      this.initializerAssignment()
      this.state = 1238
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      while (_la === 3) {
        this.state = 1234
        this.match(GosuParser.T__2)
        this.state = 1235
        this.initializerAssignment()
        this.state = 1240
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public initializerAssignment(): InitializerAssignmentContext {
    const localContext = new InitializerAssignmentContext(this.context, this.state)
    this.enterRule(localContext, 214, GosuParser.RULE_initializerAssignment)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1241
      this.match(GosuParser.T__3)
      this.state = 1242
      this.id()
      this.state = 1243
      this.match(GosuParser.T__9)
      this.state = 1244
      this.expression()
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public indirectMemberAccess(): IndirectMemberAccessContext {
    const localContext = new IndirectMemberAccessContext(this.context, this.state)
    this.enterRule(localContext, 216, GosuParser.RULE_indirectMemberAccess)
    let _la: number
    try {
      let alternative: number
      this.enterOuterAlt(localContext, 1)
      this.state = 1258
      this.errorHandler.sync(this)
      alternative = this.interpreter.adaptivePredict(this.tokenStream, 141, this.context)
      while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
        if (alternative === 1) {
          this.state = 1256
          this.errorHandler.sync(this)
          switch (this.tokenStream.LA(1)) {
            case GosuParser.T__1:
            case GosuParser.T__26:
            case GosuParser.T__27:
              {
                this.state = 1246
                _la = this.tokenStream.LA(1)
                if (!((_la & ~0x1f) === 0 && ((1 << _la) & 402653188) !== 0)) {
                  this.errorHandler.recoverInline(this)
                } else {
                  this.errorHandler.reportMatch(this)
                  this.consume()
                }
                this.state = 1247
                this.idAll()
                this.state = 1248
                this.typeArguments()
              }
              break
            case GosuParser.T__25:
              {
                this.state = 1250
                this.featureLiteral()
              }
              break
            case GosuParser.T__4:
            case GosuParser.T__28:
              {
                this.state = 1251
                _la = this.tokenStream.LA(1)
                if (!(_la === 5 || _la === 29)) {
                  this.errorHandler.recoverInline(this)
                } else {
                  this.errorHandler.reportMatch(this)
                  this.consume()
                }
                this.state = 1252
                this.expression()
                this.state = 1253
                this.match(GosuParser.T__5)
              }
              break
            case GosuParser.T__13:
              {
                this.state = 1255
                this.arguments()
              }
              break
            default:
              throw new antlr.NoViableAltException(this)
          }
        }
        this.state = 1260
        this.errorHandler.sync(this)
        alternative = this.interpreter.adaptivePredict(this.tokenStream, 141, this.context)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public literal(): LiteralContext {
    const localContext = new LiteralContext(this.context, this.state)
    this.enterRule(localContext, 218, GosuParser.RULE_literal)
    try {
      this.state = 1268
      this.errorHandler.sync(this)
      switch (this.tokenStream.LA(1)) {
        case GosuParser.NAN:
        case GosuParser.INFINITY:
        case GosuParser.HEX_LITERAL:
        case GosuParser.BIN_LITERAL:
        case GosuParser.DECIMAL_LITERAL:
          this.enterOuterAlt(localContext, 1)
          {
            this.state = 1261
            this.numberLiteral()
          }
          break
        case GosuParser.T__25:
          this.enterOuterAlt(localContext, 2)
          {
            this.state = 1262
            this.featureLiteral()
          }
          break
        case GosuParser.STRING_LITERAL:
          this.enterOuterAlt(localContext, 3)
          {
            this.state = 1263
            this.match(GosuParser.STRING_LITERAL)
          }
          break
        case GosuParser.CHAR_LITERAL:
          this.enterOuterAlt(localContext, 4)
          {
            this.state = 1264
            this.match(GosuParser.CHAR_LITERAL)
          }
          break
        case GosuParser.TRUE:
          this.enterOuterAlt(localContext, 5)
          {
            this.state = 1265
            this.match(GosuParser.TRUE)
          }
          break
        case GosuParser.FALSE:
          this.enterOuterAlt(localContext, 6)
          {
            this.state = 1266
            this.match(GosuParser.FALSE)
          }
          break
        case GosuParser.NULL:
          this.enterOuterAlt(localContext, 7)
          {
            this.state = 1267
            this.match(GosuParser.NULL)
          }
          break
        default:
          throw new antlr.NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public numberLiteral(): NumberLiteralContext {
    const localContext = new NumberLiteralContext(this.context, this.state)
    this.enterRule(localContext, 220, GosuParser.RULE_numberLiteral)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1270
      _la = this.tokenStream.LA(1)
      if (!(_la === 117 || _la === 118 || (((_la - 157) & ~0x1f) === 0 && ((1 << (_la - 157)) & 7) !== 0))) {
        this.errorHandler.recoverInline(this)
      } else {
        this.errorHandler.reportMatch(this)
        this.consume()
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public orOp(): OrOpContext {
    const localContext = new OrOpContext(this.context, this.state)
    this.enterRule(localContext, 222, GosuParser.RULE_orOp)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1272
      _la = this.tokenStream.LA(1)
      if (!(_la === 30 || _la === 72)) {
        this.errorHandler.recoverInline(this)
      } else {
        this.errorHandler.reportMatch(this)
        this.consume()
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public andOp(): AndOpContext {
    const localContext = new AndOpContext(this.context, this.state)
    this.enterRule(localContext, 224, GosuParser.RULE_andOp)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1274
      _la = this.tokenStream.LA(1)
      if (!(_la === 31 || _la === 71)) {
        this.errorHandler.recoverInline(this)
      } else {
        this.errorHandler.reportMatch(this)
        this.consume()
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public assignmentOp(): AssignmentOpContext {
    const localContext = new AssignmentOpContext(this.context, this.state)
    this.enterRule(localContext, 226, GosuParser.RULE_assignmentOp)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1276
      _la = this.tokenStream.LA(1)
      if (!(_la === 10 || (((_la - 32) & ~0x1f) === 0 && ((1 << (_la - 32)) & 8191) !== 0))) {
        this.errorHandler.recoverInline(this)
      } else {
        this.errorHandler.reportMatch(this)
        this.consume()
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public incrementOp(): IncrementOpContext {
    const localContext = new IncrementOpContext(this.context, this.state)
    this.enterRule(localContext, 228, GosuParser.RULE_incrementOp)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1278
      _la = this.tokenStream.LA(1)
      if (!(_la === 45 || _la === 46)) {
        this.errorHandler.recoverInline(this)
      } else {
        this.errorHandler.reportMatch(this)
        this.consume()
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public equalityOp(): EqualityOpContext {
    const localContext = new EqualityOpContext(this.context, this.state)
    this.enterRule(localContext, 230, GosuParser.RULE_equalityOp)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1280
      _la = this.tokenStream.LA(1)
      if (!(((_la - 47) & ~0x1f) === 0 && ((1 << (_la - 47)) & 15) !== 0)) {
        this.errorHandler.recoverInline(this)
      } else {
        this.errorHandler.reportMatch(this)
        this.consume()
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public intervalOp(): IntervalOpContext {
    const localContext = new IntervalOpContext(this.context, this.state)
    this.enterRule(localContext, 232, GosuParser.RULE_intervalOp)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1282
      _la = this.tokenStream.LA(1)
      if (!(((_la - 51) & ~0x1f) === 0 && ((1 << (_la - 51)) & 15) !== 0)) {
        this.errorHandler.recoverInline(this)
      } else {
        this.errorHandler.reportMatch(this)
        this.consume()
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public relOp(): RelOpContext {
    const localContext = new RelOpContext(this.context, this.state)
    this.enterRule(localContext, 234, GosuParser.RULE_relOp)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1284
      _la = this.tokenStream.LA(1)
      if (!(_la === 12 || _la === 13 || _la === 55 || _la === 56)) {
        this.errorHandler.recoverInline(this)
      } else {
        this.errorHandler.reportMatch(this)
        this.consume()
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public bitshiftOp(): BitshiftOpContext {
    const localContext = new BitshiftOpContext(this.context, this.state)
    this.enterRule(localContext, 236, GosuParser.RULE_bitshiftOp)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1286
      _la = this.tokenStream.LA(1)
      if (!(((_la - 57) & ~0x1f) === 0 && ((1 << (_la - 57)) & 7) !== 0)) {
        this.errorHandler.recoverInline(this)
      } else {
        this.errorHandler.reportMatch(this)
        this.consume()
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public additiveOp(): AdditiveOpContext {
    const localContext = new AdditiveOpContext(this.context, this.state)
    this.enterRule(localContext, 238, GosuParser.RULE_additiveOp)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1288
      _la = this.tokenStream.LA(1)
      if (
        !(
          ((_la & ~0x1f) === 0 && ((1 << _la) & 14680064) !== 0) ||
          (((_la - 60) & ~0x1f) === 0 && ((1 << (_la - 60)) & 7) !== 0)
        )
      ) {
        this.errorHandler.recoverInline(this)
      } else {
        this.errorHandler.reportMatch(this)
        this.consume()
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public multiplicativeOp(): MultiplicativeOpContext {
    const localContext = new MultiplicativeOpContext(this.context, this.state)
    this.enterRule(localContext, 240, GosuParser.RULE_multiplicativeOp)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1290
      _la = this.tokenStream.LA(1)
      if (!(_la === 11 || (((_la - 63) & ~0x1f) === 0 && ((1 << (_la - 63)) & 63) !== 0))) {
        this.errorHandler.recoverInline(this)
      } else {
        this.errorHandler.reportMatch(this)
        this.consume()
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public typeAsOp(): TypeAsOpContext {
    const localContext = new TypeAsOpContext(this.context, this.state)
    this.enterRule(localContext, 242, GosuParser.RULE_typeAsOp)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1292
      _la = this.tokenStream.LA(1)
      if (!(_la === 81 || _la === 126)) {
        this.errorHandler.recoverInline(this)
      } else {
        this.errorHandler.reportMatch(this)
        this.consume()
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public unaryOp(): UnaryOpContext {
    const localContext = new UnaryOpContext(this.context, this.state)
    this.enterRule(localContext, 244, GosuParser.RULE_unaryOp)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1294
      _la = this.tokenStream.LA(1)
      if (!(((_la - 69) & ~0x1f) === 0 && ((1 << (_la - 69)) & 1555) !== 0)) {
        this.errorHandler.recoverInline(this)
      } else {
        this.errorHandler.reportMatch(this)
        this.consume()
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public id(): IdContext {
    const localContext = new IdContext(this.context, this.state)
    this.enterRule(localContext, 246, GosuParser.RULE_id)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1296
      _la = this.tokenStream.LA(1)
      if (
        !(
          (((_la - 115) & ~0x1f) === 0 && ((1 << (_la - 115)) & 4294967295) !== 0) ||
          (((_la - 147) & ~0x1f) === 0 && ((1 << (_la - 147)) & 159) !== 0)
        )
      ) {
        this.errorHandler.recoverInline(this)
      } else {
        this.errorHandler.reportMatch(this)
        this.consume()
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public idclassOrInterfaceType(): IdclassOrInterfaceTypeContext {
    const localContext = new IdclassOrInterfaceTypeContext(this.context, this.state)
    this.enterRule(localContext, 248, GosuParser.RULE_idclassOrInterfaceType)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1298
      _la = this.tokenStream.LA(1)
      if (
        !(
          (((_la - 115) & ~0x1f) === 0 && ((1 << (_la - 115)) & 4294967295) !== 0) ||
          (((_la - 147) & ~0x1f) === 0 && ((1 << (_la - 147)) & 157) !== 0)
        )
      ) {
        this.errorHandler.recoverInline(this)
      } else {
        this.errorHandler.reportMatch(this)
        this.consume()
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }
  public idAll(): IdAllContext {
    const localContext = new IdAllContext(this.context, this.state)
    this.enterRule(localContext, 250, GosuParser.RULE_idAll)
    try {
      this.state = 1345
      this.errorHandler.sync(this)
      switch (this.tokenStream.LA(1)) {
        case GosuParser.TRUE:
        case GosuParser.FALSE:
        case GosuParser.NAN:
        case GosuParser.INFINITY:
        case GosuParser.NULL:
        case GosuParser.LENGTH:
        case GosuParser.EXISTS:
        case GosuParser.STARTSWITH:
        case GosuParser.CONTAINS:
        case GosuParser.WHERE:
        case GosuParser.FIND:
        case GosuParser.AS:
        case GosuParser.EXCEPT:
        case GosuParser.INDEX:
        case GosuParser.ITERATOR:
        case GosuParser.GET:
        case GosuParser.SET:
        case GosuParser.ASSERT:
        case GosuParser.PRIVATE:
        case GosuParser.INTERNAL:
        case GosuParser.PROTECTED:
        case GosuParser.PUBLIC:
        case GosuParser.ABSTRACT:
        case GosuParser.HIDE:
        case GosuParser.FINAL:
        case GosuParser.STATIC:
        case GosuParser.READONLY:
        case GosuParser.OUTER:
        case GosuParser.EXECUTION:
        case GosuParser.REQUEST:
        case GosuParser.SESSION:
        case GosuParser.APPLICATION:
        case GosuParser.VOID:
        case GosuParser.BLOCK:
        case GosuParser.ENHANCEMENT:
        case GosuParser.CLASSPATH:
        case GosuParser.TYPELOADER:
        case GosuParser.IDENT:
          this.enterOuterAlt(localContext, 1)
          {
            this.state = 1300
            this.id()
          }
          break
        case GosuParser.AND:
          this.enterOuterAlt(localContext, 2)
          {
            this.state = 1301
            this.match(GosuParser.AND)
          }
          break
        case GosuParser.OR:
          this.enterOuterAlt(localContext, 3)
          {
            this.state = 1302
            this.match(GosuParser.OR)
          }
          break
        case GosuParser.NOT:
          this.enterOuterAlt(localContext, 4)
          {
            this.state = 1303
            this.match(GosuParser.NOT)
          }
          break
        case GosuParser.IN:
          this.enterOuterAlt(localContext, 5)
          {
            this.state = 1304
            this.match(GosuParser.IN)
          }
          break
        case GosuParser.VAR:
          this.enterOuterAlt(localContext, 6)
          {
            this.state = 1305
            this.match(GosuParser.VAR)
          }
          break
        case GosuParser.DELEGATE:
          this.enterOuterAlt(localContext, 7)
          {
            this.state = 1306
            this.match(GosuParser.DELEGATE)
          }
          break
        case GosuParser.REPRESENTS:
          this.enterOuterAlt(localContext, 8)
          {
            this.state = 1307
            this.match(GosuParser.REPRESENTS)
          }
          break
        case GosuParser.TYPEOF:
          this.enterOuterAlt(localContext, 9)
          {
            this.state = 1308
            this.match(GosuParser.TYPEOF)
          }
          break
        case GosuParser.STATICTYPEOF:
          this.enterOuterAlt(localContext, 10)
          {
            this.state = 1309
            this.match(GosuParser.STATICTYPEOF)
          }
          break
        case GosuParser.TYPEIS:
          this.enterOuterAlt(localContext, 11)
          {
            this.state = 1310
            this.match(GosuParser.TYPEIS)
          }
          break
        case GosuParser.TYPEAS:
          this.enterOuterAlt(localContext, 12)
          {
            this.state = 1311
            this.match(GosuParser.TYPEAS)
          }
          break
        case GosuParser.PACKAGE:
          this.enterOuterAlt(localContext, 13)
          {
            this.state = 1312
            this.match(GosuParser.PACKAGE)
          }
          break
        case GosuParser.USES:
          this.enterOuterAlt(localContext, 14)
          {
            this.state = 1313
            this.match(GosuParser.USES)
          }
          break
        case GosuParser.IF:
          this.enterOuterAlt(localContext, 15)
          {
            this.state = 1314
            this.match(GosuParser.IF)
          }
          break
        case GosuParser.ELSE:
          this.enterOuterAlt(localContext, 16)
          {
            this.state = 1315
            this.match(GosuParser.ELSE)
          }
          break
        case GosuParser.UNLESS:
          this.enterOuterAlt(localContext, 17)
          {
            this.state = 1316
            this.match(GosuParser.UNLESS)
          }
          break
        case GosuParser.FOREACH:
          this.enterOuterAlt(localContext, 18)
          {
            this.state = 1317
            this.match(GosuParser.FOREACH)
          }
          break
        case GosuParser.FOR:
          this.enterOuterAlt(localContext, 19)
          {
            this.state = 1318
            this.match(GosuParser.FOR)
          }
          break
        case GosuParser.WHILE:
          this.enterOuterAlt(localContext, 20)
          {
            this.state = 1319
            this.match(GosuParser.WHILE)
          }
          break
        case GosuParser.DO:
          this.enterOuterAlt(localContext, 21)
          {
            this.state = 1320
            this.match(GosuParser.DO)
          }
          break
        case GosuParser.CONTINUE:
          this.enterOuterAlt(localContext, 22)
          {
            this.state = 1321
            this.match(GosuParser.CONTINUE)
          }
          break
        case GosuParser.BREAK:
          this.enterOuterAlt(localContext, 23)
          {
            this.state = 1322
            this.match(GosuParser.BREAK)
          }
          break
        case GosuParser.RETURN:
          this.enterOuterAlt(localContext, 24)
          {
            this.state = 1323
            this.match(GosuParser.RETURN)
          }
          break
        case GosuParser.CONSTRUCT:
          this.enterOuterAlt(localContext, 25)
          {
            this.state = 1324
            this.match(GosuParser.CONSTRUCT)
          }
          break
        case GosuParser.FUNCTION:
          this.enterOuterAlt(localContext, 26)
          {
            this.state = 1325
            this.match(GosuParser.FUNCTION)
          }
          break
        case GosuParser.PROPERTY:
          this.enterOuterAlt(localContext, 27)
          {
            this.state = 1326
            this.match(GosuParser.PROPERTY)
          }
          break
        case GosuParser.TRY:
          this.enterOuterAlt(localContext, 28)
          {
            this.state = 1327
            this.match(GosuParser.TRY)
          }
          break
        case GosuParser.CATCH:
          this.enterOuterAlt(localContext, 29)
          {
            this.state = 1328
            this.match(GosuParser.CATCH)
          }
          break
        case GosuParser.FINALLY:
          this.enterOuterAlt(localContext, 30)
          {
            this.state = 1329
            this.match(GosuParser.FINALLY)
          }
          break
        case GosuParser.THROW:
          this.enterOuterAlt(localContext, 31)
          {
            this.state = 1330
            this.match(GosuParser.THROW)
          }
          break
        case GosuParser.NEW:
          this.enterOuterAlt(localContext, 32)
          {
            this.state = 1331
            this.match(GosuParser.NEW)
          }
          break
        case GosuParser.SWITCH:
          this.enterOuterAlt(localContext, 33)
          {
            this.state = 1332
            this.match(GosuParser.SWITCH)
          }
          break
        case GosuParser.CASE:
          this.enterOuterAlt(localContext, 34)
          {
            this.state = 1333
            this.match(GosuParser.CASE)
          }
          break
        case GosuParser.DEFAULT:
          this.enterOuterAlt(localContext, 35)
          {
            this.state = 1334
            this.match(GosuParser.DEFAULT)
          }
          break
        case GosuParser.EVAL:
          this.enterOuterAlt(localContext, 36)
          {
            this.state = 1335
            this.match(GosuParser.EVAL)
          }
          break
        case GosuParser.OVERRIDE:
          this.enterOuterAlt(localContext, 37)
          {
            this.state = 1336
            this.match(GosuParser.OVERRIDE)
          }
          break
        case GosuParser.EXTENDS:
          this.enterOuterAlt(localContext, 38)
          {
            this.state = 1337
            this.match(GosuParser.EXTENDS)
          }
          break
        case GosuParser.TRANSIENT:
          this.enterOuterAlt(localContext, 39)
          {
            this.state = 1338
            this.match(GosuParser.TRANSIENT)
          }
          break
        case GosuParser.IMPLEMENTS:
          this.enterOuterAlt(localContext, 40)
          {
            this.state = 1339
            this.match(GosuParser.IMPLEMENTS)
          }
          break
        case GosuParser.CLASS:
          this.enterOuterAlt(localContext, 41)
          {
            this.state = 1340
            this.match(GosuParser.CLASS)
          }
          break
        case GosuParser.INTERFACE:
          this.enterOuterAlt(localContext, 42)
          {
            this.state = 1341
            this.match(GosuParser.INTERFACE)
          }
          break
        case GosuParser.STRUCTURE:
          this.enterOuterAlt(localContext, 43)
          {
            this.state = 1342
            this.match(GosuParser.STRUCTURE)
          }
          break
        case GosuParser.ENUM:
          this.enterOuterAlt(localContext, 44)
          {
            this.state = 1343
            this.match(GosuParser.ENUM)
          }
          break
        case GosuParser.USING:
          this.enterOuterAlt(localContext, 45)
          {
            this.state = 1344
            this.match(GosuParser.USING)
          }
          break
        default:
          throw new antlr.NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re)
        this.errorHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localContext
  }

  public static readonly _serializedATN: number[] = [
    4, 1, 162, 1348, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2,
    8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7,
    16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24,
    2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2, 32, 7, 32, 2,
    33, 7, 33, 2, 34, 7, 34, 2, 35, 7, 35, 2, 36, 7, 36, 2, 37, 7, 37, 2, 38, 7, 38, 2, 39, 7, 39, 2, 40, 7, 40, 2, 41,
    7, 41, 2, 42, 7, 42, 2, 43, 7, 43, 2, 44, 7, 44, 2, 45, 7, 45, 2, 46, 7, 46, 2, 47, 7, 47, 2, 48, 7, 48, 2, 49, 7,
    49, 2, 50, 7, 50, 2, 51, 7, 51, 2, 52, 7, 52, 2, 53, 7, 53, 2, 54, 7, 54, 2, 55, 7, 55, 2, 56, 7, 56, 2, 57, 7, 57,
    2, 58, 7, 58, 2, 59, 7, 59, 2, 60, 7, 60, 2, 61, 7, 61, 2, 62, 7, 62, 2, 63, 7, 63, 2, 64, 7, 64, 2, 65, 7, 65, 2,
    66, 7, 66, 2, 67, 7, 67, 2, 68, 7, 68, 2, 69, 7, 69, 2, 70, 7, 70, 2, 71, 7, 71, 2, 72, 7, 72, 2, 73, 7, 73, 2, 74,
    7, 74, 2, 75, 7, 75, 2, 76, 7, 76, 2, 77, 7, 77, 2, 78, 7, 78, 2, 79, 7, 79, 2, 80, 7, 80, 2, 81, 7, 81, 2, 82, 7,
    82, 2, 83, 7, 83, 2, 84, 7, 84, 2, 85, 7, 85, 2, 86, 7, 86, 2, 87, 7, 87, 2, 88, 7, 88, 2, 89, 7, 89, 2, 90, 7, 90,
    2, 91, 7, 91, 2, 92, 7, 92, 2, 93, 7, 93, 2, 94, 7, 94, 2, 95, 7, 95, 2, 96, 7, 96, 2, 97, 7, 97, 2, 98, 7, 98, 2,
    99, 7, 99, 2, 100, 7, 100, 2, 101, 7, 101, 2, 102, 7, 102, 2, 103, 7, 103, 2, 104, 7, 104, 2, 105, 7, 105, 2, 106,
    7, 106, 2, 107, 7, 107, 2, 108, 7, 108, 2, 109, 7, 109, 2, 110, 7, 110, 2, 111, 7, 111, 2, 112, 7, 112, 2, 113, 7,
    113, 2, 114, 7, 114, 2, 115, 7, 115, 2, 116, 7, 116, 2, 117, 7, 117, 2, 118, 7, 118, 2, 119, 7, 119, 2, 120, 7, 120,
    2, 121, 7, 121, 2, 122, 7, 122, 2, 123, 7, 123, 2, 124, 7, 124, 2, 125, 7, 125, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    3, 0, 259, 8, 0, 1, 1, 1, 1, 3, 1, 263, 8, 1, 1, 1, 3, 1, 266, 8, 1, 1, 2, 1, 2, 1, 2, 1, 2, 5, 2, 272, 8, 2, 10, 2,
    12, 2, 275, 9, 2, 1, 2, 3, 2, 278, 8, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 285, 8, 3, 1, 3, 1, 3, 1, 3, 1, 3, 5,
    3, 291, 8, 3, 10, 3, 12, 3, 294, 9, 3, 3, 3, 296, 8, 3, 1, 3, 1, 3, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 5, 4,
    307, 8, 4, 10, 4, 12, 4, 310, 9, 4, 3, 4, 312, 8, 4, 1, 4, 1, 4, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 5, 5,
    323, 8, 5, 10, 5, 12, 5, 326, 9, 5, 3, 5, 328, 8, 5, 1, 5, 1, 5, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 5, 6,
    339, 8, 6, 10, 6, 12, 6, 342, 9, 6, 1, 6, 1, 6, 1, 7, 1, 7, 1, 7, 1, 7, 1, 8, 1, 8, 1, 8, 1, 8, 1, 9, 1, 9, 1, 9, 1,
    9, 1, 10, 1, 10, 3, 10, 360, 8, 10, 1, 10, 1, 10, 1, 10, 1, 11, 1, 11, 1, 11, 5, 11, 368, 8, 11, 10, 11, 12, 11,
    371, 9, 11, 1, 11, 3, 11, 374, 8, 11, 1, 11, 3, 11, 377, 8, 11, 1, 12, 1, 12, 1, 12, 1, 13, 1, 13, 1, 13, 1, 13, 1,
    13, 1, 13, 1, 13, 3, 13, 389, 8, 13, 1, 13, 3, 13, 392, 8, 13, 5, 13, 394, 8, 13, 10, 13, 12, 13, 397, 9, 13, 1, 14,
    5, 14, 400, 8, 14, 10, 14, 12, 14, 403, 9, 14, 1, 15, 1, 15, 1, 15, 3, 15, 408, 8, 15, 1, 15, 1, 15, 1, 15, 1, 15,
    1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 3, 15, 422, 8, 15, 1, 15, 3, 15, 425, 8, 15, 1, 16, 1, 16,
    1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 3, 16, 435, 8, 16, 1, 16, 3, 16, 438, 8, 16, 5, 16, 440, 8, 16, 10, 16,
    12, 16, 443, 9, 16, 1, 17, 1, 17, 1, 17, 1, 17, 1, 18, 1, 18, 3, 18, 451, 8, 18, 1, 18, 1, 18, 1, 18, 1, 18, 5, 18,
    457, 8, 18, 10, 18, 12, 18, 460, 9, 18, 1, 18, 1, 18, 3, 18, 464, 8, 18, 1, 19, 1, 19, 1, 19, 3, 19, 469, 8, 19, 1,
    20, 1, 20, 1, 20, 1, 20, 1, 20, 3, 20, 476, 8, 20, 1, 20, 3, 20, 479, 8, 20, 1, 20, 1, 20, 3, 20, 483, 8, 20, 1, 21,
    1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 3, 21, 491, 8, 21, 1, 22, 1, 22, 1, 22, 5, 22, 496, 8, 22, 10, 22, 12, 22, 499,
    9, 22, 1, 23, 1, 23, 5, 23, 503, 8, 23, 10, 23, 12, 23, 506, 9, 23, 1, 24, 1, 24, 4, 24, 510, 8, 24, 11, 24, 12, 24,
    511, 1, 25, 1, 25, 1, 25, 3, 25, 517, 8, 25, 1, 25, 5, 25, 520, 8, 25, 10, 25, 12, 25, 523, 9, 25, 1, 26, 1, 26, 1,
    26, 1, 26, 5, 26, 529, 8, 26, 10, 26, 12, 26, 532, 9, 26, 1, 26, 1, 26, 3, 26, 536, 8, 26, 1, 27, 1, 27, 1, 27, 3,
    27, 541, 8, 27, 1, 28, 1, 28, 1, 29, 1, 29, 3, 29, 547, 8, 29, 1, 29, 1, 29, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1,
    30, 3, 30, 557, 8, 30, 1, 31, 1, 31, 1, 31, 1, 31, 3, 31, 563, 8, 31, 1, 32, 1, 32, 1, 32, 3, 32, 568, 8, 32, 1, 32,
    1, 32, 3, 32, 572, 8, 32, 1, 32, 3, 32, 575, 8, 32, 1, 33, 1, 33, 1, 33, 1, 34, 1, 34, 5, 34, 582, 8, 34, 10, 34,
    12, 34, 585, 9, 34, 1, 34, 1, 34, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 3, 35, 594, 8, 35, 1, 35, 1, 35, 1, 36, 1, 36,
    1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 5, 36, 608, 8, 36, 10, 36, 12, 36, 611, 9, 36, 1, 37, 1, 37,
    1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 3,
    37, 631, 8, 37, 1, 37, 3, 37, 634, 8, 37, 1, 37, 3, 37, 637, 8, 37, 1, 38, 1, 38, 1, 38, 1, 38, 1, 38, 1, 38, 3, 38,
    645, 8, 38, 1, 38, 1, 38, 3, 38, 649, 8, 38, 1, 39, 1, 39, 1, 39, 4, 39, 654, 8, 39, 11, 39, 12, 39, 655, 1, 39, 3,
    39, 659, 8, 39, 1, 39, 3, 39, 662, 8, 39, 1, 40, 1, 40, 1, 40, 1, 41, 1, 41, 1, 41, 3, 41, 670, 8, 41, 1, 41, 1, 41,
    1, 41, 3, 41, 675, 8, 41, 1, 41, 1, 41, 1, 41, 1, 42, 1, 42, 1, 42, 1, 42, 3, 42, 684, 8, 42, 1, 43, 1, 43, 1, 43,
    1, 43, 1, 43, 5, 43, 691, 8, 43, 10, 43, 12, 43, 694, 9, 43, 1, 43, 3, 43, 697, 8, 43, 1, 43, 1, 43, 1, 43, 1, 43,
    3, 43, 703, 8, 43, 1, 44, 1, 44, 3, 44, 707, 8, 44, 1, 45, 1, 45, 1, 45, 1, 45, 1, 45, 1, 45, 1, 46, 1, 46, 1, 46,
    1, 46, 1, 46, 1, 46, 1, 46, 1, 47, 1, 47, 1, 47, 1, 47, 1, 47, 1, 47, 5, 47, 728, 8, 47, 10, 47, 12, 47, 731, 9, 47,
    1, 47, 1, 47, 1, 48, 1, 48, 1, 48, 1, 48, 1, 48, 1, 48, 3, 48, 741, 8, 48, 1, 48, 5, 48, 744, 8, 48, 10, 48, 12, 48,
    747, 9, 48, 1, 49, 1, 49, 1, 49, 1, 50, 1, 50, 1, 50, 1, 50, 1, 50, 3, 50, 757, 8, 50, 1, 51, 1, 51, 1, 51, 1, 51,
    3, 51, 763, 8, 51, 1, 51, 3, 51, 766, 8, 51, 1, 51, 1, 51, 1, 51, 1, 51, 3, 51, 772, 8, 51, 3, 51, 774, 8, 51, 1,
    51, 1, 51, 1, 51, 1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 3, 52, 787, 8, 52, 1, 53, 1, 53, 1, 53, 1,
    54, 1, 54, 1, 54, 1, 55, 1, 55, 1, 56, 1, 56, 1, 56, 1, 56, 1, 56, 3, 56, 802, 8, 56, 1, 56, 1, 56, 1, 56, 1, 56, 1,
    56, 1, 56, 3, 56, 810, 8, 56, 1, 57, 1, 57, 1, 58, 1, 58, 5, 58, 816, 8, 58, 10, 58, 12, 58, 819, 9, 58, 1, 58, 1,
    58, 1, 59, 1, 59, 1, 60, 1, 60, 1, 60, 1, 60, 5, 60, 829, 8, 60, 10, 60, 12, 60, 832, 9, 60, 3, 60, 834, 8, 60, 1,
    60, 1, 60, 1, 60, 3, 60, 839, 8, 60, 1, 61, 1, 61, 1, 61, 1, 61, 3, 61, 845, 8, 61, 1, 61, 1, 61, 1, 61, 3, 61, 850,
    8, 61, 1, 61, 1, 61, 1, 61, 3, 61, 855, 8, 61, 3, 61, 857, 8, 61, 1, 62, 1, 62, 1, 62, 5, 62, 862, 8, 62, 10, 62,
    12, 62, 865, 9, 62, 1, 63, 1, 63, 1, 64, 1, 64, 1, 65, 1, 65, 1, 66, 1, 66, 1, 66, 5, 66, 876, 8, 66, 10, 66, 12,
    66, 879, 9, 66, 1, 66, 1, 66, 3, 66, 883, 8, 66, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 5, 67, 891, 8, 67, 10,
    67, 12, 67, 894, 9, 67, 1, 68, 1, 68, 1, 68, 1, 68, 5, 68, 900, 8, 68, 10, 68, 12, 68, 903, 9, 68, 1, 68, 1, 68, 3,
    68, 907, 8, 68, 1, 69, 1, 69, 1, 69, 1, 69, 3, 69, 913, 8, 69, 3, 69, 915, 8, 69, 1, 70, 1, 70, 1, 71, 1, 71, 1, 71,
    1, 71, 1, 71, 1, 71, 1, 71, 1, 71, 3, 71, 927, 8, 71, 1, 72, 1, 72, 1, 72, 1, 72, 5, 72, 933, 8, 72, 10, 72, 12, 72,
    936, 9, 72, 1, 73, 1, 73, 1, 73, 1, 73, 5, 73, 942, 8, 73, 10, 73, 12, 73, 945, 9, 73, 1, 74, 1, 74, 1, 74, 5, 74,
    950, 8, 74, 10, 74, 12, 74, 953, 9, 74, 1, 75, 1, 75, 1, 75, 5, 75, 958, 8, 75, 10, 75, 12, 75, 961, 9, 75, 1, 76,
    1, 76, 1, 76, 5, 76, 966, 8, 76, 10, 76, 12, 76, 969, 9, 76, 1, 77, 1, 77, 1, 77, 1, 77, 5, 77, 975, 8, 77, 10, 77,
    12, 77, 978, 9, 77, 1, 78, 1, 78, 1, 78, 1, 78, 1, 78, 1, 78, 5, 78, 986, 8, 78, 10, 78, 12, 78, 989, 9, 78, 1, 79,
    1, 79, 1, 79, 1, 79, 3, 79, 995, 8, 79, 1, 80, 1, 80, 1, 80, 1, 80, 5, 80, 1001, 8, 80, 10, 80, 12, 80, 1004, 9, 80,
    1, 81, 1, 81, 1, 81, 1, 81, 5, 81, 1010, 8, 81, 10, 81, 12, 81, 1013, 9, 81, 1, 82, 1, 82, 1, 82, 1, 82, 5, 82,
    1019, 8, 82, 10, 82, 12, 82, 1022, 9, 82, 1, 83, 1, 83, 1, 83, 1, 83, 5, 83, 1028, 8, 83, 10, 83, 12, 83, 1031, 9,
    83, 1, 84, 1, 84, 1, 84, 3, 84, 1036, 8, 84, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 3, 85, 1045, 8, 85, 1,
    86, 3, 86, 1048, 8, 86, 1, 86, 1, 86, 1, 86, 3, 86, 1053, 8, 86, 1, 87, 1, 87, 1, 87, 5, 87, 1058, 8, 87, 10, 87,
    12, 87, 1061, 9, 87, 1, 88, 5, 88, 1064, 8, 88, 10, 88, 12, 88, 1067, 9, 88, 1, 88, 3, 88, 1070, 8, 88, 1, 88, 1,
    88, 1, 88, 1, 88, 1, 88, 3, 88, 1077, 8, 88, 1, 88, 1, 88, 1, 88, 3, 88, 1082, 8, 88, 1, 89, 1, 89, 1, 90, 1, 90, 1,
    90, 1, 90, 5, 90, 1090, 8, 90, 10, 90, 12, 90, 1093, 9, 90, 3, 90, 1095, 8, 90, 1, 90, 1, 90, 1, 91, 3, 91, 1100, 8,
    91, 1, 92, 1, 92, 3, 92, 1104, 8, 92, 1, 93, 1, 93, 1, 93, 1, 93, 1, 93, 1, 94, 1, 94, 1, 94, 1, 94, 1, 94, 1, 95,
    1, 95, 1, 95, 3, 95, 1119, 8, 95, 1, 95, 1, 95, 1, 95, 1, 96, 1, 96, 3, 96, 1126, 8, 96, 1, 96, 1, 96, 1, 97, 1, 97,
    1, 97, 1, 97, 1, 97, 1, 97, 3, 97, 1136, 8, 97, 1, 97, 1, 97, 1, 98, 1, 98, 1, 98, 1, 98, 1, 99, 1, 99, 3, 99, 1146,
    8, 99, 1, 99, 1, 99, 1, 99, 1, 99, 3, 99, 1152, 8, 99, 1, 99, 1, 99, 3, 99, 1156, 8, 99, 1, 99, 1, 99, 1, 99, 1, 99,
    5, 99, 1162, 8, 99, 10, 99, 12, 99, 1165, 9, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 5, 99, 1174, 8,
    99, 10, 99, 12, 99, 1177, 9, 99, 1, 99, 1, 99, 5, 99, 1181, 8, 99, 10, 99, 12, 99, 1184, 9, 99, 3, 99, 1186, 8, 99,
    3, 99, 1188, 8, 99, 1, 100, 1, 100, 1, 101, 1, 101, 1, 101, 1, 101, 5, 101, 1196, 8, 101, 10, 101, 12, 101, 1199, 9,
    101, 3, 101, 1201, 8, 101, 1, 101, 1, 101, 1, 102, 1, 102, 3, 102, 1207, 8, 102, 1, 103, 1, 103, 3, 103, 1211, 8,
    103, 1, 104, 1, 104, 1, 104, 5, 104, 1216, 8, 104, 10, 104, 12, 104, 1219, 9, 104, 1, 105, 1, 105, 1, 105, 1, 105,
    1, 105, 1, 105, 1, 105, 1, 105, 5, 105, 1229, 8, 105, 10, 105, 12, 105, 1232, 9, 105, 1, 106, 1, 106, 1, 106, 5,
    106, 1237, 8, 106, 10, 106, 12, 106, 1240, 9, 106, 1, 107, 1, 107, 1, 107, 1, 107, 1, 107, 1, 108, 1, 108, 1, 108,
    1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 5, 108, 1257, 8, 108, 10, 108, 12, 108, 1260, 9, 108, 1,
    109, 1, 109, 1, 109, 1, 109, 1, 109, 1, 109, 1, 109, 3, 109, 1269, 8, 109, 1, 110, 1, 110, 1, 111, 1, 111, 1, 112,
    1, 112, 1, 113, 1, 113, 1, 114, 1, 114, 1, 115, 1, 115, 1, 116, 1, 116, 1, 117, 1, 117, 1, 118, 1, 118, 1, 119, 1,
    119, 1, 120, 1, 120, 1, 121, 1, 121, 1, 122, 1, 122, 1, 123, 1, 123, 1, 124, 1, 124, 1, 125, 1, 125, 1, 125, 1, 125,
    1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1,
    125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125,
    1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 3, 125, 1346, 8,
    125, 1, 125, 0, 0, 126, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46,
    48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102,
    104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 148,
    150, 152, 154, 156, 158, 160, 162, 164, 166, 168, 170, 172, 174, 176, 178, 180, 182, 184, 186, 188, 190, 192, 194,
    196, 198, 200, 202, 204, 206, 208, 210, 212, 214, 216, 218, 220, 222, 224, 226, 228, 230, 232, 234, 236, 238, 240,
    242, 244, 246, 248, 250, 0, 23, 1, 0, 111, 112, 1, 0, 130, 131, 1, 0, 87, 88, 1, 0, 152, 153, 2, 0, 107, 107, 153,
    153, 1, 0, 21, 23, 2, 0, 2, 2, 27, 28, 2, 0, 5, 5, 29, 29, 2, 0, 117, 118, 157, 159, 2, 0, 30, 30, 72, 72, 2, 0, 31,
    31, 71, 71, 2, 0, 10, 10, 32, 44, 1, 0, 45, 46, 1, 0, 47, 50, 1, 0, 51, 54, 2, 0, 12, 13, 55, 56, 1, 0, 57, 59, 2,
    0, 21, 23, 60, 62, 2, 0, 11, 11, 63, 68, 2, 0, 81, 81, 126, 126, 3, 0, 69, 70, 73, 73, 78, 79, 2, 0, 115, 151, 154,
    154, 3, 0, 115, 147, 149, 151, 154, 154, 1469, 0, 252, 1, 0, 0, 0, 2, 262, 1, 0, 0, 0, 4, 267, 1, 0, 0, 0, 6, 279,
    1, 0, 0, 0, 8, 299, 1, 0, 0, 0, 10, 315, 1, 0, 0, 0, 12, 331, 1, 0, 0, 0, 14, 345, 1, 0, 0, 0, 16, 349, 1, 0, 0, 0,
    18, 353, 1, 0, 0, 0, 20, 357, 1, 0, 0, 0, 22, 364, 1, 0, 0, 0, 24, 378, 1, 0, 0, 0, 26, 395, 1, 0, 0, 0, 28, 401, 1,
    0, 0, 0, 30, 404, 1, 0, 0, 0, 32, 441, 1, 0, 0, 0, 34, 444, 1, 0, 0, 0, 36, 450, 1, 0, 0, 0, 38, 468, 1, 0, 0, 0,
    40, 470, 1, 0, 0, 0, 42, 484, 1, 0, 0, 0, 44, 492, 1, 0, 0, 0, 46, 500, 1, 0, 0, 0, 48, 509, 1, 0, 0, 0, 50, 513, 1,
    0, 0, 0, 52, 535, 1, 0, 0, 0, 54, 537, 1, 0, 0, 0, 56, 542, 1, 0, 0, 0, 58, 544, 1, 0, 0, 0, 60, 550, 1, 0, 0, 0,
    62, 558, 1, 0, 0, 0, 64, 564, 1, 0, 0, 0, 66, 576, 1, 0, 0, 0, 68, 579, 1, 0, 0, 0, 70, 588, 1, 0, 0, 0, 72, 609, 1,
    0, 0, 0, 74, 636, 1, 0, 0, 0, 76, 638, 1, 0, 0, 0, 78, 650, 1, 0, 0, 0, 80, 663, 1, 0, 0, 0, 82, 666, 1, 0, 0, 0,
    84, 679, 1, 0, 0, 0, 86, 685, 1, 0, 0, 0, 88, 704, 1, 0, 0, 0, 90, 708, 1, 0, 0, 0, 92, 714, 1, 0, 0, 0, 94, 721, 1,
    0, 0, 0, 96, 740, 1, 0, 0, 0, 98, 748, 1, 0, 0, 0, 100, 751, 1, 0, 0, 0, 102, 758, 1, 0, 0, 0, 104, 786, 1, 0, 0, 0,
    106, 788, 1, 0, 0, 0, 108, 791, 1, 0, 0, 0, 110, 794, 1, 0, 0, 0, 112, 801, 1, 0, 0, 0, 114, 811, 1, 0, 0, 0, 116,
    813, 1, 0, 0, 0, 118, 822, 1, 0, 0, 0, 120, 824, 1, 0, 0, 0, 122, 856, 1, 0, 0, 0, 124, 858, 1, 0, 0, 0, 126, 866,
    1, 0, 0, 0, 128, 868, 1, 0, 0, 0, 130, 870, 1, 0, 0, 0, 132, 882, 1, 0, 0, 0, 134, 884, 1, 0, 0, 0, 136, 906, 1, 0,
    0, 0, 138, 914, 1, 0, 0, 0, 140, 916, 1, 0, 0, 0, 142, 918, 1, 0, 0, 0, 144, 928, 1, 0, 0, 0, 146, 937, 1, 0, 0, 0,
    148, 946, 1, 0, 0, 0, 150, 954, 1, 0, 0, 0, 152, 962, 1, 0, 0, 0, 154, 970, 1, 0, 0, 0, 156, 979, 1, 0, 0, 0, 158,
    990, 1, 0, 0, 0, 160, 996, 1, 0, 0, 0, 162, 1005, 1, 0, 0, 0, 164, 1014, 1, 0, 0, 0, 166, 1023, 1, 0, 0, 0, 168,
    1035, 1, 0, 0, 0, 170, 1044, 1, 0, 0, 0, 172, 1047, 1, 0, 0, 0, 174, 1054, 1, 0, 0, 0, 176, 1065, 1, 0, 0, 0, 178,
    1083, 1, 0, 0, 0, 180, 1085, 1, 0, 0, 0, 182, 1099, 1, 0, 0, 0, 184, 1103, 1, 0, 0, 0, 186, 1105, 1, 0, 0, 0, 188,
    1110, 1, 0, 0, 0, 190, 1115, 1, 0, 0, 0, 192, 1123, 1, 0, 0, 0, 194, 1135, 1, 0, 0, 0, 196, 1139, 1, 0, 0, 0, 198,
    1143, 1, 0, 0, 0, 200, 1189, 1, 0, 0, 0, 202, 1191, 1, 0, 0, 0, 204, 1206, 1, 0, 0, 0, 206, 1210, 1, 0, 0, 0, 208,
    1212, 1, 0, 0, 0, 210, 1220, 1, 0, 0, 0, 212, 1233, 1, 0, 0, 0, 214, 1241, 1, 0, 0, 0, 216, 1258, 1, 0, 0, 0, 218,
    1268, 1, 0, 0, 0, 220, 1270, 1, 0, 0, 0, 222, 1272, 1, 0, 0, 0, 224, 1274, 1, 0, 0, 0, 226, 1276, 1, 0, 0, 0, 228,
    1278, 1, 0, 0, 0, 230, 1280, 1, 0, 0, 0, 232, 1282, 1, 0, 0, 0, 234, 1284, 1, 0, 0, 0, 236, 1286, 1, 0, 0, 0, 238,
    1288, 1, 0, 0, 0, 240, 1290, 1, 0, 0, 0, 242, 1292, 1, 0, 0, 0, 244, 1294, 1, 0, 0, 0, 246, 1296, 1, 0, 0, 0, 248,
    1298, 1, 0, 0, 0, 250, 1345, 1, 0, 0, 0, 252, 253, 3, 2, 1, 0, 253, 258, 3, 72, 36, 0, 254, 259, 3, 6, 3, 0, 255,
    259, 3, 8, 4, 0, 256, 259, 3, 10, 5, 0, 257, 259, 3, 12, 6, 0, 258, 254, 1, 0, 0, 0, 258, 255, 1, 0, 0, 0, 258, 256,
    1, 0, 0, 0, 258, 257, 1, 0, 0, 0, 259, 1, 1, 0, 0, 0, 260, 261, 5, 82, 0, 0, 261, 263, 3, 46, 23, 0, 262, 260, 1, 0,
    0, 0, 262, 263, 1, 0, 0, 0, 263, 265, 1, 0, 0, 0, 264, 266, 3, 48, 24, 0, 265, 264, 1, 0, 0, 0, 265, 266, 1, 0, 0,
    0, 266, 3, 1, 0, 0, 0, 267, 268, 5, 1, 0, 0, 268, 273, 3, 250, 125, 0, 269, 270, 5, 2, 0, 0, 270, 272, 3, 250, 125,
    0, 271, 269, 1, 0, 0, 0, 272, 275, 1, 0, 0, 0, 273, 271, 1, 0, 0, 0, 273, 274, 1, 0, 0, 0, 274, 277, 1, 0, 0, 0,
    275, 273, 1, 0, 0, 0, 276, 278, 3, 178, 89, 0, 277, 276, 1, 0, 0, 0, 277, 278, 1, 0, 0, 0, 278, 5, 1, 0, 0, 0, 279,
    280, 5, 110, 0, 0, 280, 281, 3, 246, 123, 0, 281, 284, 3, 52, 26, 0, 282, 283, 5, 107, 0, 0, 283, 285, 3, 134, 67,
    0, 284, 282, 1, 0, 0, 0, 284, 285, 1, 0, 0, 0, 285, 295, 1, 0, 0, 0, 286, 287, 5, 109, 0, 0, 287, 292, 3, 134, 67,
    0, 288, 289, 5, 3, 0, 0, 289, 291, 3, 134, 67, 0, 290, 288, 1, 0, 0, 0, 291, 294, 1, 0, 0, 0, 292, 290, 1, 0, 0, 0,
    292, 293, 1, 0, 0, 0, 293, 296, 1, 0, 0, 0, 294, 292, 1, 0, 0, 0, 295, 286, 1, 0, 0, 0, 295, 296, 1, 0, 0, 0, 296,
    297, 1, 0, 0, 0, 297, 298, 3, 14, 7, 0, 298, 7, 1, 0, 0, 0, 299, 300, 7, 0, 0, 0, 300, 301, 3, 246, 123, 0, 301,
    311, 3, 52, 26, 0, 302, 303, 5, 107, 0, 0, 303, 308, 3, 134, 67, 0, 304, 305, 5, 3, 0, 0, 305, 307, 3, 134, 67, 0,
    306, 304, 1, 0, 0, 0, 307, 310, 1, 0, 0, 0, 308, 306, 1, 0, 0, 0, 308, 309, 1, 0, 0, 0, 309, 312, 1, 0, 0, 0, 310,
    308, 1, 0, 0, 0, 311, 302, 1, 0, 0, 0, 311, 312, 1, 0, 0, 0, 312, 313, 1, 0, 0, 0, 313, 314, 3, 18, 9, 0, 314, 9, 1,
    0, 0, 0, 315, 316, 5, 113, 0, 0, 316, 317, 3, 246, 123, 0, 317, 327, 3, 52, 26, 0, 318, 319, 5, 109, 0, 0, 319, 324,
    3, 134, 67, 0, 320, 321, 5, 3, 0, 0, 321, 323, 3, 134, 67, 0, 322, 320, 1, 0, 0, 0, 323, 326, 1, 0, 0, 0, 324, 322,
    1, 0, 0, 0, 324, 325, 1, 0, 0, 0, 325, 328, 1, 0, 0, 0, 326, 324, 1, 0, 0, 0, 327, 318, 1, 0, 0, 0, 327, 328, 1, 0,
    0, 0, 328, 329, 1, 0, 0, 0, 329, 330, 3, 20, 10, 0, 330, 11, 1, 0, 0, 0, 331, 332, 5, 149, 0, 0, 332, 333, 3, 246,
    123, 0, 333, 334, 3, 52, 26, 0, 334, 335, 5, 4, 0, 0, 335, 340, 3, 134, 67, 0, 336, 337, 5, 5, 0, 0, 337, 339, 5, 6,
    0, 0, 338, 336, 1, 0, 0, 0, 339, 342, 1, 0, 0, 0, 340, 338, 1, 0, 0, 0, 340, 341, 1, 0, 0, 0, 341, 343, 1, 0, 0, 0,
    342, 340, 1, 0, 0, 0, 343, 344, 3, 16, 8, 0, 344, 13, 1, 0, 0, 0, 345, 346, 5, 7, 0, 0, 346, 347, 3, 28, 14, 0, 347,
    348, 5, 8, 0, 0, 348, 15, 1, 0, 0, 0, 349, 350, 5, 7, 0, 0, 350, 351, 3, 32, 16, 0, 351, 352, 5, 8, 0, 0, 352, 17,
    1, 0, 0, 0, 353, 354, 5, 7, 0, 0, 354, 355, 3, 26, 13, 0, 355, 356, 5, 8, 0, 0, 356, 19, 1, 0, 0, 0, 357, 359, 5, 7,
    0, 0, 358, 360, 3, 22, 11, 0, 359, 358, 1, 0, 0, 0, 359, 360, 1, 0, 0, 0, 360, 361, 1, 0, 0, 0, 361, 362, 3, 28, 14,
    0, 362, 363, 5, 8, 0, 0, 363, 21, 1, 0, 0, 0, 364, 369, 3, 24, 12, 0, 365, 366, 5, 3, 0, 0, 366, 368, 3, 24, 12, 0,
    367, 365, 1, 0, 0, 0, 368, 371, 1, 0, 0, 0, 369, 367, 1, 0, 0, 0, 369, 370, 1, 0, 0, 0, 370, 373, 1, 0, 0, 0, 371,
    369, 1, 0, 0, 0, 372, 374, 5, 3, 0, 0, 373, 372, 1, 0, 0, 0, 373, 374, 1, 0, 0, 0, 374, 376, 1, 0, 0, 0, 375, 377,
    5, 9, 0, 0, 376, 375, 1, 0, 0, 0, 376, 377, 1, 0, 0, 0, 377, 23, 1, 0, 0, 0, 378, 379, 3, 246, 123, 0, 379, 380, 3,
    182, 91, 0, 380, 25, 1, 0, 0, 0, 381, 388, 3, 72, 36, 0, 382, 389, 3, 60, 30, 0, 383, 389, 3, 42, 21, 0, 384, 389,
    3, 40, 20, 0, 385, 389, 3, 6, 3, 0, 386, 389, 3, 8, 4, 0, 387, 389, 3, 10, 5, 0, 388, 382, 1, 0, 0, 0, 388, 383, 1,
    0, 0, 0, 388, 384, 1, 0, 0, 0, 388, 385, 1, 0, 0, 0, 388, 386, 1, 0, 0, 0, 388, 387, 1, 0, 0, 0, 389, 391, 1, 0, 0,
    0, 390, 392, 5, 9, 0, 0, 391, 390, 1, 0, 0, 0, 391, 392, 1, 0, 0, 0, 392, 394, 1, 0, 0, 0, 393, 381, 1, 0, 0, 0,
    394, 397, 1, 0, 0, 0, 395, 393, 1, 0, 0, 0, 395, 396, 1, 0, 0, 0, 396, 27, 1, 0, 0, 0, 397, 395, 1, 0, 0, 0, 398,
    400, 3, 30, 15, 0, 399, 398, 1, 0, 0, 0, 400, 403, 1, 0, 0, 0, 401, 399, 1, 0, 0, 0, 401, 402, 1, 0, 0, 0, 402, 29,
    1, 0, 0, 0, 403, 401, 1, 0, 0, 0, 404, 421, 3, 72, 36, 0, 405, 407, 3, 60, 30, 0, 406, 408, 3, 56, 28, 0, 407, 406,
    1, 0, 0, 0, 407, 408, 1, 0, 0, 0, 408, 422, 1, 0, 0, 0, 409, 410, 3, 62, 31, 0, 410, 411, 3, 56, 28, 0, 411, 422, 1,
    0, 0, 0, 412, 422, 3, 64, 32, 0, 413, 414, 3, 42, 21, 0, 414, 415, 3, 56, 28, 0, 415, 422, 1, 0, 0, 0, 416, 422, 3,
    40, 20, 0, 417, 422, 3, 34, 17, 0, 418, 422, 3, 6, 3, 0, 419, 422, 3, 8, 4, 0, 420, 422, 3, 10, 5, 0, 421, 405, 1,
    0, 0, 0, 421, 409, 1, 0, 0, 0, 421, 412, 1, 0, 0, 0, 421, 413, 1, 0, 0, 0, 421, 416, 1, 0, 0, 0, 421, 417, 1, 0, 0,
    0, 421, 418, 1, 0, 0, 0, 421, 419, 1, 0, 0, 0, 421, 420, 1, 0, 0, 0, 422, 424, 1, 0, 0, 0, 423, 425, 5, 9, 0, 0,
    424, 423, 1, 0, 0, 0, 424, 425, 1, 0, 0, 0, 425, 31, 1, 0, 0, 0, 426, 434, 3, 72, 36, 0, 427, 428, 3, 60, 30, 0,
    428, 429, 3, 56, 28, 0, 429, 435, 1, 0, 0, 0, 430, 435, 3, 64, 32, 0, 431, 432, 3, 42, 21, 0, 432, 433, 3, 56, 28,
    0, 433, 435, 1, 0, 0, 0, 434, 427, 1, 0, 0, 0, 434, 430, 1, 0, 0, 0, 434, 431, 1, 0, 0, 0, 435, 437, 1, 0, 0, 0,
    436, 438, 5, 9, 0, 0, 437, 436, 1, 0, 0, 0, 437, 438, 1, 0, 0, 0, 438, 440, 1, 0, 0, 0, 439, 426, 1, 0, 0, 0, 440,
    443, 1, 0, 0, 0, 441, 439, 1, 0, 0, 0, 441, 442, 1, 0, 0, 0, 442, 33, 1, 0, 0, 0, 443, 441, 1, 0, 0, 0, 444, 445, 5,
    76, 0, 0, 445, 446, 3, 246, 123, 0, 446, 447, 3, 36, 18, 0, 447, 35, 1, 0, 0, 0, 448, 449, 5, 4, 0, 0, 449, 451, 3,
    124, 62, 0, 450, 448, 1, 0, 0, 0, 450, 451, 1, 0, 0, 0, 451, 452, 1, 0, 0, 0, 452, 453, 5, 77, 0, 0, 453, 458, 3,
    124, 62, 0, 454, 455, 5, 3, 0, 0, 455, 457, 3, 124, 62, 0, 456, 454, 1, 0, 0, 0, 457, 460, 1, 0, 0, 0, 458, 456, 1,
    0, 0, 0, 458, 459, 1, 0, 0, 0, 459, 463, 1, 0, 0, 0, 460, 458, 1, 0, 0, 0, 461, 462, 5, 10, 0, 0, 462, 464, 3, 140,
    70, 0, 463, 461, 1, 0, 0, 0, 463, 464, 1, 0, 0, 0, 464, 37, 1, 0, 0, 0, 465, 466, 5, 4, 0, 0, 466, 469, 3, 124, 62,
    0, 467, 469, 3, 118, 59, 0, 468, 465, 1, 0, 0, 0, 468, 467, 1, 0, 0, 0, 468, 469, 1, 0, 0, 0, 469, 39, 1, 0, 0, 0,
    470, 471, 5, 75, 0, 0, 471, 472, 3, 246, 123, 0, 472, 478, 3, 38, 19, 0, 473, 475, 5, 126, 0, 0, 474, 476, 5, 141,
    0, 0, 475, 474, 1, 0, 0, 0, 475, 476, 1, 0, 0, 0, 476, 477, 1, 0, 0, 0, 477, 479, 3, 246, 123, 0, 478, 473, 1, 0, 0,
    0, 478, 479, 1, 0, 0, 0, 479, 482, 1, 0, 0, 0, 480, 481, 5, 10, 0, 0, 481, 483, 3, 140, 70, 0, 482, 480, 1, 0, 0, 0,
    482, 483, 1, 0, 0, 0, 483, 41, 1, 0, 0, 0, 484, 485, 5, 96, 0, 0, 485, 486, 7, 1, 0, 0, 486, 487, 3, 246, 123, 0,
    487, 490, 3, 58, 29, 0, 488, 489, 5, 4, 0, 0, 489, 491, 3, 124, 62, 0, 490, 488, 1, 0, 0, 0, 490, 491, 1, 0, 0, 0,
    491, 43, 1, 0, 0, 0, 492, 497, 3, 250, 125, 0, 493, 494, 5, 2, 0, 0, 494, 496, 3, 250, 125, 0, 495, 493, 1, 0, 0, 0,
    496, 499, 1, 0, 0, 0, 497, 495, 1, 0, 0, 0, 497, 498, 1, 0, 0, 0, 498, 45, 1, 0, 0, 0, 499, 497, 1, 0, 0, 0, 500,
    504, 3, 44, 22, 0, 501, 503, 5, 9, 0, 0, 502, 501, 1, 0, 0, 0, 503, 506, 1, 0, 0, 0, 504, 502, 1, 0, 0, 0, 504, 505,
    1, 0, 0, 0, 505, 47, 1, 0, 0, 0, 506, 504, 1, 0, 0, 0, 507, 508, 5, 83, 0, 0, 508, 510, 3, 50, 25, 0, 509, 507, 1,
    0, 0, 0, 510, 511, 1, 0, 0, 0, 511, 509, 1, 0, 0, 0, 511, 512, 1, 0, 0, 0, 512, 49, 1, 0, 0, 0, 513, 516, 3, 44, 22,
    0, 514, 515, 5, 2, 0, 0, 515, 517, 5, 11, 0, 0, 516, 514, 1, 0, 0, 0, 516, 517, 1, 0, 0, 0, 517, 521, 1, 0, 0, 0,
    518, 520, 5, 9, 0, 0, 519, 518, 1, 0, 0, 0, 520, 523, 1, 0, 0, 0, 521, 519, 1, 0, 0, 0, 521, 522, 1, 0, 0, 0, 522,
    51, 1, 0, 0, 0, 523, 521, 1, 0, 0, 0, 524, 525, 5, 12, 0, 0, 525, 530, 3, 54, 27, 0, 526, 527, 5, 3, 0, 0, 527, 529,
    3, 54, 27, 0, 528, 526, 1, 0, 0, 0, 529, 532, 1, 0, 0, 0, 530, 528, 1, 0, 0, 0, 530, 531, 1, 0, 0, 0, 531, 533, 1,
    0, 0, 0, 532, 530, 1, 0, 0, 0, 533, 534, 5, 13, 0, 0, 534, 536, 1, 0, 0, 0, 535, 524, 1, 0, 0, 0, 535, 536, 1, 0, 0,
    0, 536, 53, 1, 0, 0, 0, 537, 540, 3, 246, 123, 0, 538, 539, 5, 107, 0, 0, 539, 541, 3, 130, 65, 0, 540, 538, 1, 0,
    0, 0, 540, 541, 1, 0, 0, 0, 541, 55, 1, 0, 0, 0, 542, 543, 3, 114, 57, 0, 543, 57, 1, 0, 0, 0, 544, 546, 5, 14, 0,
    0, 545, 547, 3, 174, 87, 0, 546, 545, 1, 0, 0, 0, 546, 547, 1, 0, 0, 0, 547, 548, 1, 0, 0, 0, 548, 549, 5, 15, 0, 0,
    549, 59, 1, 0, 0, 0, 550, 551, 5, 95, 0, 0, 551, 552, 3, 246, 123, 0, 552, 553, 3, 52, 26, 0, 553, 556, 3, 58, 29,
    0, 554, 555, 5, 4, 0, 0, 555, 557, 3, 124, 62, 0, 556, 554, 1, 0, 0, 0, 556, 557, 1, 0, 0, 0, 557, 61, 1, 0, 0, 0,
    558, 559, 5, 94, 0, 0, 559, 562, 3, 58, 29, 0, 560, 561, 5, 4, 0, 0, 561, 563, 3, 124, 62, 0, 562, 560, 1, 0, 0, 0,
    562, 563, 1, 0, 0, 0, 563, 63, 1, 0, 0, 0, 564, 565, 5, 96, 0, 0, 565, 567, 3, 246, 123, 0, 566, 568, 3, 52, 26, 0,
    567, 566, 1, 0, 0, 0, 567, 568, 1, 0, 0, 0, 568, 574, 1, 0, 0, 0, 569, 571, 3, 66, 33, 0, 570, 572, 3, 68, 34, 0,
    571, 570, 1, 0, 0, 0, 571, 572, 1, 0, 0, 0, 572, 575, 1, 0, 0, 0, 573, 575, 3, 68, 34, 0, 574, 569, 1, 0, 0, 0, 574,
    573, 1, 0, 0, 0, 575, 65, 1, 0, 0, 0, 576, 577, 5, 4, 0, 0, 577, 578, 3, 124, 62, 0, 578, 67, 1, 0, 0, 0, 579, 583,
    5, 7, 0, 0, 580, 582, 3, 70, 35, 0, 581, 580, 1, 0, 0, 0, 582, 585, 1, 0, 0, 0, 583, 581, 1, 0, 0, 0, 583, 584, 1,
    0, 0, 0, 584, 586, 1, 0, 0, 0, 585, 583, 1, 0, 0, 0, 586, 587, 5, 8, 0, 0, 587, 69, 1, 0, 0, 0, 588, 589, 3, 72, 36,
    0, 589, 590, 7, 1, 0, 0, 590, 593, 3, 58, 29, 0, 591, 592, 5, 4, 0, 0, 592, 594, 3, 124, 62, 0, 593, 591, 1, 0, 0,
    0, 593, 594, 1, 0, 0, 0, 594, 595, 1, 0, 0, 0, 595, 596, 3, 56, 28, 0, 596, 71, 1, 0, 0, 0, 597, 608, 3, 4, 2, 0,
    598, 608, 5, 133, 0, 0, 599, 608, 5, 134, 0, 0, 600, 608, 5, 135, 0, 0, 601, 608, 5, 136, 0, 0, 602, 608, 5, 140, 0,
    0, 603, 608, 5, 137, 0, 0, 604, 608, 5, 106, 0, 0, 605, 608, 5, 139, 0, 0, 606, 608, 5, 108, 0, 0, 607, 597, 1, 0,
    0, 0, 607, 598, 1, 0, 0, 0, 607, 599, 1, 0, 0, 0, 607, 600, 1, 0, 0, 0, 607, 601, 1, 0, 0, 0, 607, 602, 1, 0, 0, 0,
    607, 603, 1, 0, 0, 0, 607, 604, 1, 0, 0, 0, 607, 605, 1, 0, 0, 0, 607, 606, 1, 0, 0, 0, 608, 611, 1, 0, 0, 0, 609,
    607, 1, 0, 0, 0, 609, 610, 1, 0, 0, 0, 610, 73, 1, 0, 0, 0, 611, 609, 1, 0, 0, 0, 612, 631, 3, 76, 38, 0, 613, 631,
    3, 78, 39, 0, 614, 631, 3, 98, 49, 0, 615, 631, 5, 91, 0, 0, 616, 631, 5, 92, 0, 0, 617, 631, 3, 88, 44, 0, 618,
    631, 3, 102, 51, 0, 619, 631, 3, 90, 45, 0, 620, 631, 3, 92, 46, 0, 621, 631, 3, 94, 47, 0, 622, 631, 3, 86, 43, 0,
    623, 631, 3, 84, 42, 0, 624, 625, 5, 139, 0, 0, 625, 631, 3, 100, 50, 0, 626, 631, 3, 100, 50, 0, 627, 631, 3, 188,
    94, 0, 628, 631, 3, 112, 56, 0, 629, 631, 3, 114, 57, 0, 630, 612, 1, 0, 0, 0, 630, 613, 1, 0, 0, 0, 630, 614, 1, 0,
    0, 0, 630, 615, 1, 0, 0, 0, 630, 616, 1, 0, 0, 0, 630, 617, 1, 0, 0, 0, 630, 618, 1, 0, 0, 0, 630, 619, 1, 0, 0, 0,
    630, 620, 1, 0, 0, 0, 630, 621, 1, 0, 0, 0, 630, 622, 1, 0, 0, 0, 630, 623, 1, 0, 0, 0, 630, 624, 1, 0, 0, 0, 630,
    626, 1, 0, 0, 0, 630, 627, 1, 0, 0, 0, 630, 628, 1, 0, 0, 0, 630, 629, 1, 0, 0, 0, 631, 633, 1, 0, 0, 0, 632, 634,
    5, 9, 0, 0, 633, 632, 1, 0, 0, 0, 633, 634, 1, 0, 0, 0, 634, 637, 1, 0, 0, 0, 635, 637, 5, 9, 0, 0, 636, 630, 1, 0,
    0, 0, 636, 635, 1, 0, 0, 0, 637, 75, 1, 0, 0, 0, 638, 639, 5, 84, 0, 0, 639, 640, 5, 14, 0, 0, 640, 641, 3, 140, 70,
    0, 641, 642, 5, 15, 0, 0, 642, 644, 3, 74, 37, 0, 643, 645, 5, 9, 0, 0, 644, 643, 1, 0, 0, 0, 644, 645, 1, 0, 0, 0,
    645, 648, 1, 0, 0, 0, 646, 647, 5, 85, 0, 0, 647, 649, 3, 74, 37, 0, 648, 646, 1, 0, 0, 0, 648, 649, 1, 0, 0, 0,
    649, 77, 1, 0, 0, 0, 650, 651, 5, 97, 0, 0, 651, 661, 3, 114, 57, 0, 652, 654, 3, 82, 41, 0, 653, 652, 1, 0, 0, 0,
    654, 655, 1, 0, 0, 0, 655, 653, 1, 0, 0, 0, 655, 656, 1, 0, 0, 0, 656, 658, 1, 0, 0, 0, 657, 659, 3, 80, 40, 0, 658,
    657, 1, 0, 0, 0, 658, 659, 1, 0, 0, 0, 659, 662, 1, 0, 0, 0, 660, 662, 3, 80, 40, 0, 661, 653, 1, 0, 0, 0, 661, 660,
    1, 0, 0, 0, 662, 79, 1, 0, 0, 0, 663, 664, 5, 99, 0, 0, 664, 665, 3, 114, 57, 0, 665, 81, 1, 0, 0, 0, 666, 667, 5,
    98, 0, 0, 667, 669, 5, 14, 0, 0, 668, 670, 5, 75, 0, 0, 669, 668, 1, 0, 0, 0, 669, 670, 1, 0, 0, 0, 670, 671, 1, 0,
    0, 0, 671, 674, 3, 246, 123, 0, 672, 673, 5, 4, 0, 0, 673, 675, 3, 124, 62, 0, 674, 672, 1, 0, 0, 0, 674, 675, 1, 0,
    0, 0, 675, 676, 1, 0, 0, 0, 676, 677, 5, 15, 0, 0, 677, 678, 3, 114, 57, 0, 678, 83, 1, 0, 0, 0, 679, 680, 5, 132,
    0, 0, 680, 683, 3, 140, 70, 0, 681, 682, 5, 4, 0, 0, 682, 684, 3, 140, 70, 0, 683, 681, 1, 0, 0, 0, 683, 684, 1, 0,
    0, 0, 684, 85, 1, 0, 0, 0, 685, 686, 5, 114, 0, 0, 686, 696, 5, 14, 0, 0, 687, 692, 3, 100, 50, 0, 688, 689, 5, 3,
    0, 0, 689, 691, 3, 100, 50, 0, 690, 688, 1, 0, 0, 0, 691, 694, 1, 0, 0, 0, 692, 690, 1, 0, 0, 0, 692, 693, 1, 0, 0,
    0, 693, 697, 1, 0, 0, 0, 694, 692, 1, 0, 0, 0, 695, 697, 3, 140, 70, 0, 696, 687, 1, 0, 0, 0, 696, 695, 1, 0, 0, 0,
    697, 698, 1, 0, 0, 0, 698, 699, 5, 15, 0, 0, 699, 702, 3, 114, 57, 0, 700, 701, 5, 99, 0, 0, 701, 703, 3, 114, 57,
    0, 702, 700, 1, 0, 0, 0, 702, 703, 1, 0, 0, 0, 703, 87, 1, 0, 0, 0, 704, 706, 5, 93, 0, 0, 705, 707, 3, 140, 70, 0,
    706, 705, 1, 0, 0, 0, 706, 707, 1, 0, 0, 0, 707, 89, 1, 0, 0, 0, 708, 709, 5, 89, 0, 0, 709, 710, 5, 14, 0, 0, 710,
    711, 3, 140, 70, 0, 711, 712, 5, 15, 0, 0, 712, 713, 3, 74, 37, 0, 713, 91, 1, 0, 0, 0, 714, 715, 5, 90, 0, 0, 715,
    716, 3, 74, 37, 0, 716, 717, 5, 89, 0, 0, 717, 718, 5, 14, 0, 0, 718, 719, 3, 140, 70, 0, 719, 720, 5, 15, 0, 0,
    720, 93, 1, 0, 0, 0, 721, 722, 5, 102, 0, 0, 722, 723, 5, 14, 0, 0, 723, 724, 3, 140, 70, 0, 724, 725, 5, 15, 0, 0,
    725, 729, 5, 7, 0, 0, 726, 728, 3, 96, 48, 0, 727, 726, 1, 0, 0, 0, 728, 731, 1, 0, 0, 0, 729, 727, 1, 0, 0, 0, 729,
    730, 1, 0, 0, 0, 730, 732, 1, 0, 0, 0, 731, 729, 1, 0, 0, 0, 732, 733, 5, 8, 0, 0, 733, 95, 1, 0, 0, 0, 734, 735, 5,
    103, 0, 0, 735, 736, 3, 140, 70, 0, 736, 737, 5, 4, 0, 0, 737, 741, 1, 0, 0, 0, 738, 739, 5, 104, 0, 0, 739, 741, 5,
    4, 0, 0, 740, 734, 1, 0, 0, 0, 740, 738, 1, 0, 0, 0, 741, 745, 1, 0, 0, 0, 742, 744, 3, 74, 37, 0, 743, 742, 1, 0,
    0, 0, 744, 747, 1, 0, 0, 0, 745, 743, 1, 0, 0, 0, 745, 746, 1, 0, 0, 0, 746, 97, 1, 0, 0, 0, 747, 745, 1, 0, 0, 0,
    748, 749, 5, 100, 0, 0, 749, 750, 3, 140, 70, 0, 750, 99, 1, 0, 0, 0, 751, 752, 5, 75, 0, 0, 752, 753, 3, 246, 123,
    0, 753, 756, 3, 38, 19, 0, 754, 755, 5, 10, 0, 0, 755, 757, 3, 140, 70, 0, 756, 754, 1, 0, 0, 0, 756, 757, 1, 0, 0,
    0, 757, 101, 1, 0, 0, 0, 758, 759, 7, 2, 0, 0, 759, 773, 5, 14, 0, 0, 760, 762, 3, 140, 70, 0, 761, 763, 3, 106, 53,
    0, 762, 761, 1, 0, 0, 0, 762, 763, 1, 0, 0, 0, 763, 774, 1, 0, 0, 0, 764, 766, 5, 75, 0, 0, 765, 764, 1, 0, 0, 0,
    765, 766, 1, 0, 0, 0, 766, 767, 1, 0, 0, 0, 767, 768, 3, 246, 123, 0, 768, 769, 5, 74, 0, 0, 769, 771, 3, 140, 70,
    0, 770, 772, 3, 104, 52, 0, 771, 770, 1, 0, 0, 0, 771, 772, 1, 0, 0, 0, 772, 774, 1, 0, 0, 0, 773, 760, 1, 0, 0, 0,
    773, 765, 1, 0, 0, 0, 774, 775, 1, 0, 0, 0, 775, 776, 5, 15, 0, 0, 776, 777, 3, 74, 37, 0, 777, 103, 1, 0, 0, 0,
    778, 779, 3, 106, 53, 0, 779, 780, 3, 108, 54, 0, 780, 787, 1, 0, 0, 0, 781, 782, 3, 108, 54, 0, 782, 783, 3, 106,
    53, 0, 783, 787, 1, 0, 0, 0, 784, 787, 3, 106, 53, 0, 785, 787, 3, 108, 54, 0, 786, 778, 1, 0, 0, 0, 786, 781, 1, 0,
    0, 0, 786, 784, 1, 0, 0, 0, 786, 785, 1, 0, 0, 0, 787, 105, 1, 0, 0, 0, 788, 789, 5, 128, 0, 0, 789, 790, 3, 246,
    123, 0, 790, 107, 1, 0, 0, 0, 791, 792, 5, 129, 0, 0, 792, 793, 3, 246, 123, 0, 793, 109, 1, 0, 0, 0, 794, 795, 7,
    3, 0, 0, 795, 111, 1, 0, 0, 0, 796, 802, 3, 198, 99, 0, 797, 802, 3, 110, 55, 0, 798, 802, 3, 128, 64, 0, 799, 802,
    3, 196, 98, 0, 800, 802, 5, 156, 0, 0, 801, 796, 1, 0, 0, 0, 801, 797, 1, 0, 0, 0, 801, 798, 1, 0, 0, 0, 801, 799,
    1, 0, 0, 0, 801, 800, 1, 0, 0, 0, 802, 803, 1, 0, 0, 0, 803, 804, 3, 216, 108, 0, 804, 809, 1, 0, 0, 0, 805, 810, 3,
    228, 114, 0, 806, 807, 3, 226, 113, 0, 807, 808, 3, 140, 70, 0, 808, 810, 1, 0, 0, 0, 809, 805, 1, 0, 0, 0, 809,
    806, 1, 0, 0, 0, 809, 810, 1, 0, 0, 0, 810, 113, 1, 0, 0, 0, 811, 812, 3, 116, 58, 0, 812, 115, 1, 0, 0, 0, 813,
    817, 5, 7, 0, 0, 814, 816, 3, 74, 37, 0, 815, 814, 1, 0, 0, 0, 816, 819, 1, 0, 0, 0, 817, 815, 1, 0, 0, 0, 817, 818,
    1, 0, 0, 0, 818, 820, 1, 0, 0, 0, 819, 817, 1, 0, 0, 0, 820, 821, 5, 8, 0, 0, 821, 117, 1, 0, 0, 0, 822, 823, 3,
    120, 60, 0, 823, 119, 1, 0, 0, 0, 824, 833, 5, 14, 0, 0, 825, 830, 3, 122, 61, 0, 826, 827, 5, 3, 0, 0, 827, 829, 3,
    122, 61, 0, 828, 826, 1, 0, 0, 0, 829, 832, 1, 0, 0, 0, 830, 828, 1, 0, 0, 0, 830, 831, 1, 0, 0, 0, 831, 834, 1, 0,
    0, 0, 832, 830, 1, 0, 0, 0, 833, 825, 1, 0, 0, 0, 833, 834, 1, 0, 0, 0, 834, 835, 1, 0, 0, 0, 835, 838, 5, 15, 0, 0,
    836, 837, 5, 4, 0, 0, 837, 839, 3, 124, 62, 0, 838, 836, 1, 0, 0, 0, 838, 839, 1, 0, 0, 0, 839, 121, 1, 0, 0, 0,
    840, 844, 3, 246, 123, 0, 841, 842, 5, 10, 0, 0, 842, 845, 3, 140, 70, 0, 843, 845, 3, 118, 59, 0, 844, 841, 1, 0,
    0, 0, 844, 843, 1, 0, 0, 0, 845, 857, 1, 0, 0, 0, 846, 847, 3, 246, 123, 0, 847, 848, 5, 4, 0, 0, 848, 850, 1, 0, 0,
    0, 849, 846, 1, 0, 0, 0, 849, 850, 1, 0, 0, 0, 850, 851, 1, 0, 0, 0, 851, 854, 3, 124, 62, 0, 852, 853, 5, 10, 0, 0,
    853, 855, 3, 140, 70, 0, 854, 852, 1, 0, 0, 0, 854, 855, 1, 0, 0, 0, 855, 857, 1, 0, 0, 0, 856, 840, 1, 0, 0, 0,
    856, 849, 1, 0, 0, 0, 857, 123, 1, 0, 0, 0, 858, 863, 3, 132, 66, 0, 859, 860, 5, 16, 0, 0, 860, 862, 3, 132, 66, 0,
    861, 859, 1, 0, 0, 0, 862, 865, 1, 0, 0, 0, 863, 861, 1, 0, 0, 0, 863, 864, 1, 0, 0, 0, 864, 125, 1, 0, 0, 0, 865,
    863, 1, 0, 0, 0, 866, 867, 3, 124, 62, 0, 867, 127, 1, 0, 0, 0, 868, 869, 3, 124, 62, 0, 869, 129, 1, 0, 0, 0, 870,
    871, 3, 124, 62, 0, 871, 131, 1, 0, 0, 0, 872, 877, 3, 134, 67, 0, 873, 874, 5, 5, 0, 0, 874, 876, 5, 6, 0, 0, 875,
    873, 1, 0, 0, 0, 876, 879, 1, 0, 0, 0, 877, 875, 1, 0, 0, 0, 877, 878, 1, 0, 0, 0, 878, 883, 1, 0, 0, 0, 879, 877,
    1, 0, 0, 0, 880, 881, 5, 148, 0, 0, 881, 883, 3, 120, 60, 0, 882, 872, 1, 0, 0, 0, 882, 880, 1, 0, 0, 0, 883, 133,
    1, 0, 0, 0, 884, 885, 3, 248, 124, 0, 885, 892, 3, 136, 68, 0, 886, 887, 5, 2, 0, 0, 887, 888, 3, 246, 123, 0, 888,
    889, 3, 136, 68, 0, 889, 891, 1, 0, 0, 0, 890, 886, 1, 0, 0, 0, 891, 894, 1, 0, 0, 0, 892, 890, 1, 0, 0, 0, 892,
    893, 1, 0, 0, 0, 893, 135, 1, 0, 0, 0, 894, 892, 1, 0, 0, 0, 895, 896, 5, 12, 0, 0, 896, 901, 3, 138, 69, 0, 897,
    898, 5, 3, 0, 0, 898, 900, 3, 138, 69, 0, 899, 897, 1, 0, 0, 0, 900, 903, 1, 0, 0, 0, 901, 899, 1, 0, 0, 0, 901,
    902, 1, 0, 0, 0, 902, 904, 1, 0, 0, 0, 903, 901, 1, 0, 0, 0, 904, 905, 5, 13, 0, 0, 905, 907, 1, 0, 0, 0, 906, 895,
    1, 0, 0, 0, 906, 907, 1, 0, 0, 0, 907, 137, 1, 0, 0, 0, 908, 915, 3, 126, 63, 0, 909, 912, 5, 17, 0, 0, 910, 911, 7,
    4, 0, 0, 911, 913, 3, 126, 63, 0, 912, 910, 1, 0, 0, 0, 912, 913, 1, 0, 0, 0, 913, 915, 1, 0, 0, 0, 914, 908, 1, 0,
    0, 0, 914, 909, 1, 0, 0, 0, 915, 139, 1, 0, 0, 0, 916, 917, 3, 142, 71, 0, 917, 141, 1, 0, 0, 0, 918, 926, 3, 144,
    72, 0, 919, 920, 5, 17, 0, 0, 920, 921, 3, 142, 71, 0, 921, 922, 5, 4, 0, 0, 922, 923, 3, 142, 71, 0, 923, 927, 1,
    0, 0, 0, 924, 925, 5, 18, 0, 0, 925, 927, 3, 142, 71, 0, 926, 919, 1, 0, 0, 0, 926, 924, 1, 0, 0, 0, 926, 927, 1, 0,
    0, 0, 927, 143, 1, 0, 0, 0, 928, 934, 3, 146, 73, 0, 929, 930, 3, 222, 111, 0, 930, 931, 3, 146, 73, 0, 931, 933, 1,
    0, 0, 0, 932, 929, 1, 0, 0, 0, 933, 936, 1, 0, 0, 0, 934, 932, 1, 0, 0, 0, 934, 935, 1, 0, 0, 0, 935, 145, 1, 0, 0,
    0, 936, 934, 1, 0, 0, 0, 937, 943, 3, 148, 74, 0, 938, 939, 3, 224, 112, 0, 939, 940, 3, 148, 74, 0, 940, 942, 1, 0,
    0, 0, 941, 938, 1, 0, 0, 0, 942, 945, 1, 0, 0, 0, 943, 941, 1, 0, 0, 0, 943, 944, 1, 0, 0, 0, 944, 147, 1, 0, 0, 0,
    945, 943, 1, 0, 0, 0, 946, 951, 3, 150, 75, 0, 947, 948, 5, 19, 0, 0, 948, 950, 3, 150, 75, 0, 949, 947, 1, 0, 0, 0,
    950, 953, 1, 0, 0, 0, 951, 949, 1, 0, 0, 0, 951, 952, 1, 0, 0, 0, 952, 149, 1, 0, 0, 0, 953, 951, 1, 0, 0, 0, 954,
    959, 3, 152, 76, 0, 955, 956, 5, 20, 0, 0, 956, 958, 3, 152, 76, 0, 957, 955, 1, 0, 0, 0, 958, 961, 1, 0, 0, 0, 959,
    957, 1, 0, 0, 0, 959, 960, 1, 0, 0, 0, 960, 151, 1, 0, 0, 0, 961, 959, 1, 0, 0, 0, 962, 967, 3, 154, 77, 0, 963,
    964, 5, 16, 0, 0, 964, 966, 3, 154, 77, 0, 965, 963, 1, 0, 0, 0, 966, 969, 1, 0, 0, 0, 967, 965, 1, 0, 0, 0, 967,
    968, 1, 0, 0, 0, 968, 153, 1, 0, 0, 0, 969, 967, 1, 0, 0, 0, 970, 976, 3, 156, 78, 0, 971, 972, 3, 230, 115, 0, 972,
    973, 3, 156, 78, 0, 973, 975, 1, 0, 0, 0, 974, 971, 1, 0, 0, 0, 975, 978, 1, 0, 0, 0, 976, 974, 1, 0, 0, 0, 976,
    977, 1, 0, 0, 0, 977, 155, 1, 0, 0, 0, 978, 976, 1, 0, 0, 0, 979, 987, 3, 158, 79, 0, 980, 981, 3, 234, 117, 0, 981,
    982, 3, 158, 79, 0, 982, 986, 1, 0, 0, 0, 983, 984, 5, 80, 0, 0, 984, 986, 3, 126, 63, 0, 985, 980, 1, 0, 0, 0, 985,
    983, 1, 0, 0, 0, 986, 989, 1, 0, 0, 0, 987, 985, 1, 0, 0, 0, 987, 988, 1, 0, 0, 0, 988, 157, 1, 0, 0, 0, 989, 987,
    1, 0, 0, 0, 990, 994, 3, 160, 80, 0, 991, 992, 3, 232, 116, 0, 992, 993, 3, 160, 80, 0, 993, 995, 1, 0, 0, 0, 994,
    991, 1, 0, 0, 0, 994, 995, 1, 0, 0, 0, 995, 159, 1, 0, 0, 0, 996, 1002, 3, 162, 81, 0, 997, 998, 3, 236, 118, 0,
    998, 999, 3, 162, 81, 0, 999, 1001, 1, 0, 0, 0, 1000, 997, 1, 0, 0, 0, 1001, 1004, 1, 0, 0, 0, 1002, 1000, 1, 0, 0,
    0, 1002, 1003, 1, 0, 0, 0, 1003, 161, 1, 0, 0, 0, 1004, 1002, 1, 0, 0, 0, 1005, 1011, 3, 164, 82, 0, 1006, 1007, 3,
    238, 119, 0, 1007, 1008, 3, 164, 82, 0, 1008, 1010, 1, 0, 0, 0, 1009, 1006, 1, 0, 0, 0, 1010, 1013, 1, 0, 0, 0,
    1011, 1009, 1, 0, 0, 0, 1011, 1012, 1, 0, 0, 0, 1012, 163, 1, 0, 0, 0, 1013, 1011, 1, 0, 0, 0, 1014, 1020, 3, 166,
    83, 0, 1015, 1016, 3, 240, 120, 0, 1016, 1017, 3, 166, 83, 0, 1017, 1019, 1, 0, 0, 0, 1018, 1015, 1, 0, 0, 0, 1019,
    1022, 1, 0, 0, 0, 1020, 1018, 1, 0, 0, 0, 1020, 1021, 1, 0, 0, 0, 1021, 165, 1, 0, 0, 0, 1022, 1020, 1, 0, 0, 0,
    1023, 1029, 3, 168, 84, 0, 1024, 1025, 3, 242, 121, 0, 1025, 1026, 3, 124, 62, 0, 1026, 1028, 1, 0, 0, 0, 1027,
    1024, 1, 0, 0, 0, 1028, 1031, 1, 0, 0, 0, 1029, 1027, 1, 0, 0, 0, 1029, 1030, 1, 0, 0, 0, 1030, 167, 1, 0, 0, 0,
    1031, 1029, 1, 0, 0, 0, 1032, 1033, 7, 5, 0, 0, 1033, 1036, 3, 170, 85, 0, 1034, 1036, 3, 170, 85, 0, 1035, 1032, 1,
    0, 0, 0, 1035, 1034, 1, 0, 0, 0, 1036, 169, 1, 0, 0, 0, 1037, 1038, 3, 244, 122, 0, 1038, 1039, 3, 168, 84, 0, 1039,
    1045, 1, 0, 0, 0, 1040, 1041, 5, 24, 0, 0, 1041, 1045, 3, 172, 86, 0, 1042, 1045, 3, 188, 94, 0, 1043, 1045, 3, 194,
    97, 0, 1044, 1037, 1, 0, 0, 0, 1044, 1040, 1, 0, 0, 0, 1044, 1042, 1, 0, 0, 0, 1044, 1043, 1, 0, 0, 0, 1045, 171, 1,
    0, 0, 0, 1046, 1048, 3, 174, 87, 0, 1047, 1046, 1, 0, 0, 0, 1047, 1048, 1, 0, 0, 0, 1048, 1049, 1, 0, 0, 0, 1049,
    1052, 5, 25, 0, 0, 1050, 1053, 3, 140, 70, 0, 1051, 1053, 3, 114, 57, 0, 1052, 1050, 1, 0, 0, 0, 1052, 1051, 1, 0,
    0, 0, 1053, 173, 1, 0, 0, 0, 1054, 1059, 3, 176, 88, 0, 1055, 1056, 5, 3, 0, 0, 1056, 1058, 3, 176, 88, 0, 1057,
    1055, 1, 0, 0, 0, 1058, 1061, 1, 0, 0, 0, 1059, 1057, 1, 0, 0, 0, 1059, 1060, 1, 0, 0, 0, 1060, 175, 1, 0, 0, 0,
    1061, 1059, 1, 0, 0, 0, 1062, 1064, 3, 4, 2, 0, 1063, 1062, 1, 0, 0, 0, 1064, 1067, 1, 0, 0, 0, 1065, 1063, 1, 0, 0,
    0, 1065, 1066, 1, 0, 0, 0, 1066, 1069, 1, 0, 0, 0, 1067, 1065, 1, 0, 0, 0, 1068, 1070, 5, 139, 0, 0, 1069, 1068, 1,
    0, 0, 0, 1069, 1070, 1, 0, 0, 0, 1070, 1071, 1, 0, 0, 0, 1071, 1081, 3, 246, 123, 0, 1072, 1073, 5, 4, 0, 0, 1073,
    1076, 3, 124, 62, 0, 1074, 1075, 5, 10, 0, 0, 1075, 1077, 3, 140, 70, 0, 1076, 1074, 1, 0, 0, 0, 1076, 1077, 1, 0,
    0, 0, 1077, 1082, 1, 0, 0, 0, 1078, 1082, 3, 118, 59, 0, 1079, 1080, 5, 10, 0, 0, 1080, 1082, 3, 140, 70, 0, 1081,
    1072, 1, 0, 0, 0, 1081, 1078, 1, 0, 0, 0, 1081, 1079, 1, 0, 0, 0, 1081, 1082, 1, 0, 0, 0, 1082, 177, 1, 0, 0, 0,
    1083, 1084, 3, 180, 90, 0, 1084, 179, 1, 0, 0, 0, 1085, 1094, 5, 14, 0, 0, 1086, 1091, 3, 184, 92, 0, 1087, 1088, 5,
    3, 0, 0, 1088, 1090, 3, 184, 92, 0, 1089, 1087, 1, 0, 0, 0, 1090, 1093, 1, 0, 0, 0, 1091, 1089, 1, 0, 0, 0, 1091,
    1092, 1, 0, 0, 0, 1092, 1095, 1, 0, 0, 0, 1093, 1091, 1, 0, 0, 0, 1094, 1086, 1, 0, 0, 0, 1094, 1095, 1, 0, 0, 0,
    1095, 1096, 1, 0, 0, 0, 1096, 1097, 5, 15, 0, 0, 1097, 181, 1, 0, 0, 0, 1098, 1100, 3, 180, 90, 0, 1099, 1098, 1, 0,
    0, 0, 1099, 1100, 1, 0, 0, 0, 1100, 183, 1, 0, 0, 0, 1101, 1104, 3, 186, 93, 0, 1102, 1104, 3, 140, 70, 0, 1103,
    1101, 1, 0, 0, 0, 1103, 1102, 1, 0, 0, 0, 1104, 185, 1, 0, 0, 0, 1105, 1106, 5, 4, 0, 0, 1106, 1107, 3, 246, 123, 0,
    1107, 1108, 5, 10, 0, 0, 1108, 1109, 3, 140, 70, 0, 1109, 187, 1, 0, 0, 0, 1110, 1111, 5, 105, 0, 0, 1111, 1112, 5,
    14, 0, 0, 1112, 1113, 3, 140, 70, 0, 1113, 1114, 5, 15, 0, 0, 1114, 189, 1, 0, 0, 0, 1115, 1118, 5, 26, 0, 0, 1116,
    1119, 3, 246, 123, 0, 1117, 1119, 5, 94, 0, 0, 1118, 1116, 1, 0, 0, 0, 1118, 1117, 1, 0, 0, 0, 1119, 1120, 1, 0, 0,
    0, 1120, 1121, 3, 136, 68, 0, 1121, 1122, 3, 182, 91, 0, 1122, 191, 1, 0, 0, 0, 1123, 1125, 5, 7, 0, 0, 1124, 1126,
    3, 206, 103, 0, 1125, 1124, 1, 0, 0, 0, 1125, 1126, 1, 0, 0, 0, 1126, 1127, 1, 0, 0, 0, 1127, 1128, 5, 8, 0, 0,
    1128, 193, 1, 0, 0, 0, 1129, 1136, 3, 198, 99, 0, 1130, 1136, 3, 110, 55, 0, 1131, 1136, 3, 218, 109, 0, 1132, 1136,
    3, 128, 64, 0, 1133, 1136, 3, 196, 98, 0, 1134, 1136, 3, 192, 96, 0, 1135, 1129, 1, 0, 0, 0, 1135, 1130, 1, 0, 0, 0,
    1135, 1131, 1, 0, 0, 0, 1135, 1132, 1, 0, 0, 0, 1135, 1133, 1, 0, 0, 0, 1135, 1134, 1, 0, 0, 0, 1136, 1137, 1, 0, 0,
    0, 1137, 1138, 3, 216, 108, 0, 1138, 195, 1, 0, 0, 0, 1139, 1140, 5, 14, 0, 0, 1140, 1141, 3, 140, 70, 0, 1141,
    1142, 5, 15, 0, 0, 1142, 197, 1, 0, 0, 0, 1143, 1145, 5, 101, 0, 0, 1144, 1146, 3, 134, 67, 0, 1145, 1144, 1, 0, 0,
    0, 1145, 1146, 1, 0, 0, 0, 1146, 1187, 1, 0, 0, 0, 1147, 1155, 3, 180, 90, 0, 1148, 1151, 5, 7, 0, 0, 1149, 1152, 3,
    204, 102, 0, 1150, 1152, 3, 200, 100, 0, 1151, 1149, 1, 0, 0, 0, 1151, 1150, 1, 0, 0, 0, 1152, 1153, 1, 0, 0, 0,
    1153, 1154, 5, 8, 0, 0, 1154, 1156, 1, 0, 0, 0, 1155, 1148, 1, 0, 0, 0, 1155, 1156, 1, 0, 0, 0, 1156, 1188, 1, 0, 0,
    0, 1157, 1185, 5, 5, 0, 0, 1158, 1163, 5, 6, 0, 0, 1159, 1160, 5, 5, 0, 0, 1160, 1162, 5, 6, 0, 0, 1161, 1159, 1, 0,
    0, 0, 1162, 1165, 1, 0, 0, 0, 1163, 1161, 1, 0, 0, 0, 1163, 1164, 1, 0, 0, 0, 1164, 1166, 1, 0, 0, 0, 1165, 1163, 1,
    0, 0, 0, 1166, 1186, 3, 202, 101, 0, 1167, 1168, 3, 140, 70, 0, 1168, 1175, 5, 6, 0, 0, 1169, 1170, 5, 5, 0, 0,
    1170, 1171, 3, 140, 70, 0, 1171, 1172, 5, 6, 0, 0, 1172, 1174, 1, 0, 0, 0, 1173, 1169, 1, 0, 0, 0, 1174, 1177, 1, 0,
    0, 0, 1175, 1173, 1, 0, 0, 0, 1175, 1176, 1, 0, 0, 0, 1176, 1182, 1, 0, 0, 0, 1177, 1175, 1, 0, 0, 0, 1178, 1179, 5,
    5, 0, 0, 1179, 1181, 5, 6, 0, 0, 1180, 1178, 1, 0, 0, 0, 1181, 1184, 1, 0, 0, 0, 1182, 1180, 1, 0, 0, 0, 1182, 1183,
    1, 0, 0, 0, 1183, 1186, 1, 0, 0, 0, 1184, 1182, 1, 0, 0, 0, 1185, 1158, 1, 0, 0, 0, 1185, 1167, 1, 0, 0, 0, 1186,
    1188, 1, 0, 0, 0, 1187, 1147, 1, 0, 0, 0, 1187, 1157, 1, 0, 0, 0, 1188, 199, 1, 0, 0, 0, 1189, 1190, 3, 28, 14, 0,
    1190, 201, 1, 0, 0, 0, 1191, 1200, 5, 7, 0, 0, 1192, 1197, 3, 140, 70, 0, 1193, 1194, 5, 3, 0, 0, 1194, 1196, 3,
    140, 70, 0, 1195, 1193, 1, 0, 0, 0, 1196, 1199, 1, 0, 0, 0, 1197, 1195, 1, 0, 0, 0, 1197, 1198, 1, 0, 0, 0, 1198,
    1201, 1, 0, 0, 0, 1199, 1197, 1, 0, 0, 0, 1200, 1192, 1, 0, 0, 0, 1200, 1201, 1, 0, 0, 0, 1201, 1202, 1, 0, 0, 0,
    1202, 1203, 5, 8, 0, 0, 1203, 203, 1, 0, 0, 0, 1204, 1207, 3, 206, 103, 0, 1205, 1207, 3, 212, 106, 0, 1206, 1204,
    1, 0, 0, 0, 1206, 1205, 1, 0, 0, 0, 1206, 1207, 1, 0, 0, 0, 1207, 205, 1, 0, 0, 0, 1208, 1211, 3, 210, 105, 0, 1209,
    1211, 3, 208, 104, 0, 1210, 1208, 1, 0, 0, 0, 1210, 1209, 1, 0, 0, 0, 1211, 207, 1, 0, 0, 0, 1212, 1217, 3, 140, 70,
    0, 1213, 1214, 5, 3, 0, 0, 1214, 1216, 3, 140, 70, 0, 1215, 1213, 1, 0, 0, 0, 1216, 1219, 1, 0, 0, 0, 1217, 1215, 1,
    0, 0, 0, 1217, 1218, 1, 0, 0, 0, 1218, 209, 1, 0, 0, 0, 1219, 1217, 1, 0, 0, 0, 1220, 1221, 3, 140, 70, 0, 1221,
    1222, 5, 25, 0, 0, 1222, 1230, 3, 140, 70, 0, 1223, 1224, 5, 3, 0, 0, 1224, 1225, 3, 140, 70, 0, 1225, 1226, 5, 25,
    0, 0, 1226, 1227, 3, 140, 70, 0, 1227, 1229, 1, 0, 0, 0, 1228, 1223, 1, 0, 0, 0, 1229, 1232, 1, 0, 0, 0, 1230, 1228,
    1, 0, 0, 0, 1230, 1231, 1, 0, 0, 0, 1231, 211, 1, 0, 0, 0, 1232, 1230, 1, 0, 0, 0, 1233, 1238, 3, 214, 107, 0, 1234,
    1235, 5, 3, 0, 0, 1235, 1237, 3, 214, 107, 0, 1236, 1234, 1, 0, 0, 0, 1237, 1240, 1, 0, 0, 0, 1238, 1236, 1, 0, 0,
    0, 1238, 1239, 1, 0, 0, 0, 1239, 213, 1, 0, 0, 0, 1240, 1238, 1, 0, 0, 0, 1241, 1242, 5, 4, 0, 0, 1242, 1243, 3,
    246, 123, 0, 1243, 1244, 5, 10, 0, 0, 1244, 1245, 3, 140, 70, 0, 1245, 215, 1, 0, 0, 0, 1246, 1247, 7, 6, 0, 0,
    1247, 1248, 3, 250, 125, 0, 1248, 1249, 3, 136, 68, 0, 1249, 1257, 1, 0, 0, 0, 1250, 1257, 3, 190, 95, 0, 1251,
    1252, 7, 7, 0, 0, 1252, 1253, 3, 140, 70, 0, 1253, 1254, 5, 6, 0, 0, 1254, 1257, 1, 0, 0, 0, 1255, 1257, 3, 180, 90,
    0, 1256, 1246, 1, 0, 0, 0, 1256, 1250, 1, 0, 0, 0, 1256, 1251, 1, 0, 0, 0, 1256, 1255, 1, 0, 0, 0, 1257, 1260, 1, 0,
    0, 0, 1258, 1256, 1, 0, 0, 0, 1258, 1259, 1, 0, 0, 0, 1259, 217, 1, 0, 0, 0, 1260, 1258, 1, 0, 0, 0, 1261, 1269, 3,
    220, 110, 0, 1262, 1269, 3, 190, 95, 0, 1263, 1269, 5, 156, 0, 0, 1264, 1269, 5, 155, 0, 0, 1265, 1269, 5, 115, 0,
    0, 1266, 1269, 5, 116, 0, 0, 1267, 1269, 5, 119, 0, 0, 1268, 1261, 1, 0, 0, 0, 1268, 1262, 1, 0, 0, 0, 1268, 1263,
    1, 0, 0, 0, 1268, 1264, 1, 0, 0, 0, 1268, 1265, 1, 0, 0, 0, 1268, 1266, 1, 0, 0, 0, 1268, 1267, 1, 0, 0, 0, 1269,
    219, 1, 0, 0, 0, 1270, 1271, 7, 8, 0, 0, 1271, 221, 1, 0, 0, 0, 1272, 1273, 7, 9, 0, 0, 1273, 223, 1, 0, 0, 0, 1274,
    1275, 7, 10, 0, 0, 1275, 225, 1, 0, 0, 0, 1276, 1277, 7, 11, 0, 0, 1277, 227, 1, 0, 0, 0, 1278, 1279, 7, 12, 0, 0,
    1279, 229, 1, 0, 0, 0, 1280, 1281, 7, 13, 0, 0, 1281, 231, 1, 0, 0, 0, 1282, 1283, 7, 14, 0, 0, 1283, 233, 1, 0, 0,
    0, 1284, 1285, 7, 15, 0, 0, 1285, 235, 1, 0, 0, 0, 1286, 1287, 7, 16, 0, 0, 1287, 237, 1, 0, 0, 0, 1288, 1289, 7,
    17, 0, 0, 1289, 239, 1, 0, 0, 0, 1290, 1291, 7, 18, 0, 0, 1291, 241, 1, 0, 0, 0, 1292, 1293, 7, 19, 0, 0, 1293, 243,
    1, 0, 0, 0, 1294, 1295, 7, 20, 0, 0, 1295, 245, 1, 0, 0, 0, 1296, 1297, 7, 21, 0, 0, 1297, 247, 1, 0, 0, 0, 1298,
    1299, 7, 22, 0, 0, 1299, 249, 1, 0, 0, 0, 1300, 1346, 3, 246, 123, 0, 1301, 1346, 5, 71, 0, 0, 1302, 1346, 5, 72, 0,
    0, 1303, 1346, 5, 73, 0, 0, 1304, 1346, 5, 74, 0, 0, 1305, 1346, 5, 75, 0, 0, 1306, 1346, 5, 76, 0, 0, 1307, 1346,
    5, 77, 0, 0, 1308, 1346, 5, 78, 0, 0, 1309, 1346, 5, 79, 0, 0, 1310, 1346, 5, 80, 0, 0, 1311, 1346, 5, 81, 0, 0,
    1312, 1346, 5, 82, 0, 0, 1313, 1346, 5, 83, 0, 0, 1314, 1346, 5, 84, 0, 0, 1315, 1346, 5, 85, 0, 0, 1316, 1346, 5,
    86, 0, 0, 1317, 1346, 5, 87, 0, 0, 1318, 1346, 5, 88, 0, 0, 1319, 1346, 5, 89, 0, 0, 1320, 1346, 5, 90, 0, 0, 1321,
    1346, 5, 91, 0, 0, 1322, 1346, 5, 92, 0, 0, 1323, 1346, 5, 93, 0, 0, 1324, 1346, 5, 94, 0, 0, 1325, 1346, 5, 95, 0,
    0, 1326, 1346, 5, 96, 0, 0, 1327, 1346, 5, 97, 0, 0, 1328, 1346, 5, 98, 0, 0, 1329, 1346, 5, 99, 0, 0, 1330, 1346,
    5, 100, 0, 0, 1331, 1346, 5, 101, 0, 0, 1332, 1346, 5, 102, 0, 0, 1333, 1346, 5, 103, 0, 0, 1334, 1346, 5, 104, 0,
    0, 1335, 1346, 5, 105, 0, 0, 1336, 1346, 5, 106, 0, 0, 1337, 1346, 5, 107, 0, 0, 1338, 1346, 5, 108, 0, 0, 1339,
    1346, 5, 109, 0, 0, 1340, 1346, 5, 110, 0, 0, 1341, 1346, 5, 111, 0, 0, 1342, 1346, 5, 112, 0, 0, 1343, 1346, 5,
    113, 0, 0, 1344, 1346, 5, 114, 0, 0, 1345, 1300, 1, 0, 0, 0, 1345, 1301, 1, 0, 0, 0, 1345, 1302, 1, 0, 0, 0, 1345,
    1303, 1, 0, 0, 0, 1345, 1304, 1, 0, 0, 0, 1345, 1305, 1, 0, 0, 0, 1345, 1306, 1, 0, 0, 0, 1345, 1307, 1, 0, 0, 0,
    1345, 1308, 1, 0, 0, 0, 1345, 1309, 1, 0, 0, 0, 1345, 1310, 1, 0, 0, 0, 1345, 1311, 1, 0, 0, 0, 1345, 1312, 1, 0, 0,
    0, 1345, 1313, 1, 0, 0, 0, 1345, 1314, 1, 0, 0, 0, 1345, 1315, 1, 0, 0, 0, 1345, 1316, 1, 0, 0, 0, 1345, 1317, 1, 0,
    0, 0, 1345, 1318, 1, 0, 0, 0, 1345, 1319, 1, 0, 0, 0, 1345, 1320, 1, 0, 0, 0, 1345, 1321, 1, 0, 0, 0, 1345, 1322, 1,
    0, 0, 0, 1345, 1323, 1, 0, 0, 0, 1345, 1324, 1, 0, 0, 0, 1345, 1325, 1, 0, 0, 0, 1345, 1326, 1, 0, 0, 0, 1345, 1327,
    1, 0, 0, 0, 1345, 1328, 1, 0, 0, 0, 1345, 1329, 1, 0, 0, 0, 1345, 1330, 1, 0, 0, 0, 1345, 1331, 1, 0, 0, 0, 1345,
    1332, 1, 0, 0, 0, 1345, 1333, 1, 0, 0, 0, 1345, 1334, 1, 0, 0, 0, 1345, 1335, 1, 0, 0, 0, 1345, 1336, 1, 0, 0, 0,
    1345, 1337, 1, 0, 0, 0, 1345, 1338, 1, 0, 0, 0, 1345, 1339, 1, 0, 0, 0, 1345, 1340, 1, 0, 0, 0, 1345, 1341, 1, 0, 0,
    0, 1345, 1342, 1, 0, 0, 0, 1345, 1343, 1, 0, 0, 0, 1345, 1344, 1, 0, 0, 0, 1346, 251, 1, 0, 0, 0, 144, 258, 262,
    265, 273, 277, 284, 292, 295, 308, 311, 324, 327, 340, 359, 369, 373, 376, 388, 391, 395, 401, 407, 421, 424, 434,
    437, 441, 450, 458, 463, 468, 475, 478, 482, 490, 497, 504, 511, 516, 521, 530, 535, 540, 546, 556, 562, 567, 571,
    574, 583, 593, 607, 609, 630, 633, 636, 644, 648, 655, 658, 661, 669, 674, 683, 692, 696, 702, 706, 729, 740, 745,
    756, 762, 765, 771, 773, 786, 801, 809, 817, 830, 833, 838, 844, 849, 854, 856, 863, 877, 882, 892, 901, 906, 912,
    914, 926, 934, 943, 951, 959, 967, 976, 985, 987, 994, 1002, 1011, 1020, 1029, 1035, 1044, 1047, 1052, 1059, 1065,
    1069, 1076, 1081, 1091, 1094, 1099, 1103, 1118, 1125, 1135, 1145, 1151, 1155, 1163, 1175, 1182, 1185, 1187, 1197,
    1200, 1206, 1210, 1217, 1230, 1238, 1256, 1258, 1268, 1345,
  ]

  private static __ATN: antlr.ATN
  public static get _ATN(): antlr.ATN {
    if (!GosuParser.__ATN) {
      GosuParser.__ATN = new antlr.ATNDeserializer().deserialize(GosuParser._serializedATN)
    }

    return GosuParser.__ATN
  }

  private static readonly vocabulary = new antlr.Vocabulary(GosuParser.literalNames, GosuParser.symbolicNames, [])

  public override get vocabulary(): antlr.Vocabulary {
    return GosuParser.vocabulary
  }

  private static readonly decisionsToDFA = GosuParser._ATN.decisionToState.map(
    (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index),
  )
}

export class StartContext extends antlr.ParserRuleContext {
  public header(): HeaderContext {
    return this.getRuleContext(0, HeaderContext)!
  }
  public modifiers(): ModifiersContext {
    return this.getRuleContext(0, ModifiersContext)!
  }
  public gClass(): GClassContext | null {
    return this.getRuleContext(0, GClassContext)
  }
  public gInterfaceOrStructure(): GInterfaceOrStructureContext | null {
    return this.getRuleContext(0, GInterfaceOrStructureContext)
  }
  public gEnum(): GEnumContext | null {
    return this.getRuleContext(0, GEnumContext)
  }
  public gEnhancement(): GEnhancementContext | null {
    return this.getRuleContext(0, GEnhancementContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_start
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterStart) {
      listener.enterStart(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitStart) {
      listener.exitStart(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitStart) {
      return visitor.visitStart(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class HeaderContext extends antlr.ParserRuleContext {
  public PACKAGE(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.PACKAGE, 0)
  }
  public namespaceStatement(): NamespaceStatementContext | null {
    return this.getRuleContext(0, NamespaceStatementContext)
  }
  public usesStatementList(): UsesStatementListContext | null {
    return this.getRuleContext(0, UsesStatementListContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_header
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterHeader) {
      listener.enterHeader(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitHeader) {
      listener.exitHeader(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitHeader) {
      return visitor.visitHeader(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class AnnotationContext extends antlr.ParserRuleContext {
  public idAll(): IdAllContext[]
  public idAll(i: number): IdAllContext | null
  public idAll(i?: number): IdAllContext[] | IdAllContext | null {
    if (i === undefined) {
      return this.getRuleContexts(IdAllContext)
    }

    return this.getRuleContext(i, IdAllContext)
  }
  public annotationArguments(): AnnotationArgumentsContext | null {
    return this.getRuleContext(0, AnnotationArgumentsContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_annotation
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterAnnotation) {
      listener.enterAnnotation(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitAnnotation) {
      listener.exitAnnotation(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitAnnotation) {
      return visitor.visitAnnotation(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class GClassContext extends antlr.ParserRuleContext {
  public CLASS(): antlr.TerminalNode {
    return this.getToken(GosuParser.CLASS, 0)!
  }
  public id(): IdContext {
    return this.getRuleContext(0, IdContext)!
  }
  public typeVariableDefs(): TypeVariableDefsContext {
    return this.getRuleContext(0, TypeVariableDefsContext)!
  }
  public classBody(): ClassBodyContext {
    return this.getRuleContext(0, ClassBodyContext)!
  }
  public EXTENDS(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.EXTENDS, 0)
  }
  public classOrInterfaceType(): ClassOrInterfaceTypeContext[]
  public classOrInterfaceType(i: number): ClassOrInterfaceTypeContext | null
  public classOrInterfaceType(i?: number): ClassOrInterfaceTypeContext[] | ClassOrInterfaceTypeContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ClassOrInterfaceTypeContext)
    }

    return this.getRuleContext(i, ClassOrInterfaceTypeContext)
  }
  public IMPLEMENTS(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.IMPLEMENTS, 0)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_gClass
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterGClass) {
      listener.enterGClass(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitGClass) {
      listener.exitGClass(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitGClass) {
      return visitor.visitGClass(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class GInterfaceOrStructureContext extends antlr.ParserRuleContext {
  public id(): IdContext {
    return this.getRuleContext(0, IdContext)!
  }
  public typeVariableDefs(): TypeVariableDefsContext {
    return this.getRuleContext(0, TypeVariableDefsContext)!
  }
  public interfaceBody(): InterfaceBodyContext {
    return this.getRuleContext(0, InterfaceBodyContext)!
  }
  public INTERFACE(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.INTERFACE, 0)
  }
  public STRUCTURE(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.STRUCTURE, 0)
  }
  public EXTENDS(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.EXTENDS, 0)
  }
  public classOrInterfaceType(): ClassOrInterfaceTypeContext[]
  public classOrInterfaceType(i: number): ClassOrInterfaceTypeContext | null
  public classOrInterfaceType(i?: number): ClassOrInterfaceTypeContext[] | ClassOrInterfaceTypeContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ClassOrInterfaceTypeContext)
    }

    return this.getRuleContext(i, ClassOrInterfaceTypeContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_gInterfaceOrStructure
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterGInterfaceOrStructure) {
      listener.enterGInterfaceOrStructure(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitGInterfaceOrStructure) {
      listener.exitGInterfaceOrStructure(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitGInterfaceOrStructure) {
      return visitor.visitGInterfaceOrStructure(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class GEnumContext extends antlr.ParserRuleContext {
  public ENUM(): antlr.TerminalNode {
    return this.getToken(GosuParser.ENUM, 0)!
  }
  public id(): IdContext {
    return this.getRuleContext(0, IdContext)!
  }
  public typeVariableDefs(): TypeVariableDefsContext {
    return this.getRuleContext(0, TypeVariableDefsContext)!
  }
  public enumBody(): EnumBodyContext {
    return this.getRuleContext(0, EnumBodyContext)!
  }
  public IMPLEMENTS(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.IMPLEMENTS, 0)
  }
  public classOrInterfaceType(): ClassOrInterfaceTypeContext[]
  public classOrInterfaceType(i: number): ClassOrInterfaceTypeContext | null
  public classOrInterfaceType(i?: number): ClassOrInterfaceTypeContext[] | ClassOrInterfaceTypeContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ClassOrInterfaceTypeContext)
    }

    return this.getRuleContext(i, ClassOrInterfaceTypeContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_gEnum
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterGEnum) {
      listener.enterGEnum(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitGEnum) {
      listener.exitGEnum(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitGEnum) {
      return visitor.visitGEnum(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class GEnhancementContext extends antlr.ParserRuleContext {
  public ENHANCEMENT(): antlr.TerminalNode {
    return this.getToken(GosuParser.ENHANCEMENT, 0)!
  }
  public id(): IdContext {
    return this.getRuleContext(0, IdContext)!
  }
  public typeVariableDefs(): TypeVariableDefsContext {
    return this.getRuleContext(0, TypeVariableDefsContext)!
  }
  public classOrInterfaceType(): ClassOrInterfaceTypeContext {
    return this.getRuleContext(0, ClassOrInterfaceTypeContext)!
  }
  public enhancementBody(): EnhancementBodyContext {
    return this.getRuleContext(0, EnhancementBodyContext)!
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_gEnhancement
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterGEnhancement) {
      listener.enterGEnhancement(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitGEnhancement) {
      listener.exitGEnhancement(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitGEnhancement) {
      return visitor.visitGEnhancement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ClassBodyContext extends antlr.ParserRuleContext {
  public classMembers(): ClassMembersContext {
    return this.getRuleContext(0, ClassMembersContext)!
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_classBody
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterClassBody) {
      listener.enterClassBody(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitClassBody) {
      listener.exitClassBody(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitClassBody) {
      return visitor.visitClassBody(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class EnhancementBodyContext extends antlr.ParserRuleContext {
  public enhancementMembers(): EnhancementMembersContext {
    return this.getRuleContext(0, EnhancementMembersContext)!
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_enhancementBody
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterEnhancementBody) {
      listener.enterEnhancementBody(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitEnhancementBody) {
      listener.exitEnhancementBody(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitEnhancementBody) {
      return visitor.visitEnhancementBody(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class InterfaceBodyContext extends antlr.ParserRuleContext {
  public interfaceMembers(): InterfaceMembersContext {
    return this.getRuleContext(0, InterfaceMembersContext)!
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_interfaceBody
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterInterfaceBody) {
      listener.enterInterfaceBody(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitInterfaceBody) {
      listener.exitInterfaceBody(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitInterfaceBody) {
      return visitor.visitInterfaceBody(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class EnumBodyContext extends antlr.ParserRuleContext {
  public classMembers(): ClassMembersContext {
    return this.getRuleContext(0, ClassMembersContext)!
  }
  public enumConstants(): EnumConstantsContext | null {
    return this.getRuleContext(0, EnumConstantsContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_enumBody
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterEnumBody) {
      listener.enterEnumBody(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitEnumBody) {
      listener.exitEnumBody(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitEnumBody) {
      return visitor.visitEnumBody(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class EnumConstantsContext extends antlr.ParserRuleContext {
  public enumConstant(): EnumConstantContext[]
  public enumConstant(i: number): EnumConstantContext | null
  public enumConstant(i?: number): EnumConstantContext[] | EnumConstantContext | null {
    if (i === undefined) {
      return this.getRuleContexts(EnumConstantContext)
    }

    return this.getRuleContext(i, EnumConstantContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_enumConstants
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterEnumConstants) {
      listener.enterEnumConstants(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitEnumConstants) {
      listener.exitEnumConstants(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitEnumConstants) {
      return visitor.visitEnumConstants(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class EnumConstantContext extends antlr.ParserRuleContext {
  public id(): IdContext {
    return this.getRuleContext(0, IdContext)!
  }
  public optionalArguments(): OptionalArgumentsContext {
    return this.getRuleContext(0, OptionalArgumentsContext)!
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_enumConstant
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterEnumConstant) {
      listener.enterEnumConstant(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitEnumConstant) {
      listener.exitEnumConstant(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitEnumConstant) {
      return visitor.visitEnumConstant(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class InterfaceMembersContext extends antlr.ParserRuleContext {
  public modifiers(): ModifiersContext[]
  public modifiers(i: number): ModifiersContext | null
  public modifiers(i?: number): ModifiersContext[] | ModifiersContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ModifiersContext)
    }

    return this.getRuleContext(i, ModifiersContext)
  }
  public functionDefn(): FunctionDefnContext[]
  public functionDefn(i: number): FunctionDefnContext | null
  public functionDefn(i?: number): FunctionDefnContext[] | FunctionDefnContext | null {
    if (i === undefined) {
      return this.getRuleContexts(FunctionDefnContext)
    }

    return this.getRuleContext(i, FunctionDefnContext)
  }
  public propertyDefn(): PropertyDefnContext[]
  public propertyDefn(i: number): PropertyDefnContext | null
  public propertyDefn(i?: number): PropertyDefnContext[] | PropertyDefnContext | null {
    if (i === undefined) {
      return this.getRuleContexts(PropertyDefnContext)
    }

    return this.getRuleContext(i, PropertyDefnContext)
  }
  public fieldDefn(): FieldDefnContext[]
  public fieldDefn(i: number): FieldDefnContext | null
  public fieldDefn(i?: number): FieldDefnContext[] | FieldDefnContext | null {
    if (i === undefined) {
      return this.getRuleContexts(FieldDefnContext)
    }

    return this.getRuleContext(i, FieldDefnContext)
  }
  public gClass(): GClassContext[]
  public gClass(i: number): GClassContext | null
  public gClass(i?: number): GClassContext[] | GClassContext | null {
    if (i === undefined) {
      return this.getRuleContexts(GClassContext)
    }

    return this.getRuleContext(i, GClassContext)
  }
  public gInterfaceOrStructure(): GInterfaceOrStructureContext[]
  public gInterfaceOrStructure(i: number): GInterfaceOrStructureContext | null
  public gInterfaceOrStructure(i?: number): GInterfaceOrStructureContext[] | GInterfaceOrStructureContext | null {
    if (i === undefined) {
      return this.getRuleContexts(GInterfaceOrStructureContext)
    }

    return this.getRuleContext(i, GInterfaceOrStructureContext)
  }
  public gEnum(): GEnumContext[]
  public gEnum(i: number): GEnumContext | null
  public gEnum(i?: number): GEnumContext[] | GEnumContext | null {
    if (i === undefined) {
      return this.getRuleContexts(GEnumContext)
    }

    return this.getRuleContext(i, GEnumContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_interfaceMembers
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterInterfaceMembers) {
      listener.enterInterfaceMembers(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitInterfaceMembers) {
      listener.exitInterfaceMembers(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitInterfaceMembers) {
      return visitor.visitInterfaceMembers(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ClassMembersContext extends antlr.ParserRuleContext {
  public declaration(): DeclarationContext[]
  public declaration(i: number): DeclarationContext | null
  public declaration(i?: number): DeclarationContext[] | DeclarationContext | null {
    if (i === undefined) {
      return this.getRuleContexts(DeclarationContext)
    }

    return this.getRuleContext(i, DeclarationContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_classMembers
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterClassMembers) {
      listener.enterClassMembers(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitClassMembers) {
      listener.exitClassMembers(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitClassMembers) {
      return visitor.visitClassMembers(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DeclarationContext extends antlr.ParserRuleContext {
  public modifiers(): ModifiersContext {
    return this.getRuleContext(0, ModifiersContext)!
  }
  public functionDefn(): FunctionDefnContext | null {
    return this.getRuleContext(0, FunctionDefnContext)
  }
  public constructorDefn(): ConstructorDefnContext | null {
    return this.getRuleContext(0, ConstructorDefnContext)
  }
  public functionBody(): FunctionBodyContext | null {
    return this.getRuleContext(0, FunctionBodyContext)
  }
  public fullPropertyDefn(): FullPropertyDefnContext | null {
    return this.getRuleContext(0, FullPropertyDefnContext)
  }
  public propertyDefn(): PropertyDefnContext | null {
    return this.getRuleContext(0, PropertyDefnContext)
  }
  public fieldDefn(): FieldDefnContext | null {
    return this.getRuleContext(0, FieldDefnContext)
  }
  public delegateDefn(): DelegateDefnContext | null {
    return this.getRuleContext(0, DelegateDefnContext)
  }
  public gClass(): GClassContext | null {
    return this.getRuleContext(0, GClassContext)
  }
  public gInterfaceOrStructure(): GInterfaceOrStructureContext | null {
    return this.getRuleContext(0, GInterfaceOrStructureContext)
  }
  public gEnum(): GEnumContext | null {
    return this.getRuleContext(0, GEnumContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_declaration
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterDeclaration) {
      listener.enterDeclaration(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitDeclaration) {
      listener.exitDeclaration(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitDeclaration) {
      return visitor.visitDeclaration(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class EnhancementMembersContext extends antlr.ParserRuleContext {
  public modifiers(): ModifiersContext[]
  public modifiers(i: number): ModifiersContext | null
  public modifiers(i?: number): ModifiersContext[] | ModifiersContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ModifiersContext)
    }

    return this.getRuleContext(i, ModifiersContext)
  }
  public functionDefn(): FunctionDefnContext[]
  public functionDefn(i: number): FunctionDefnContext | null
  public functionDefn(i?: number): FunctionDefnContext[] | FunctionDefnContext | null {
    if (i === undefined) {
      return this.getRuleContexts(FunctionDefnContext)
    }

    return this.getRuleContext(i, FunctionDefnContext)
  }
  public functionBody(): FunctionBodyContext[]
  public functionBody(i: number): FunctionBodyContext | null
  public functionBody(i?: number): FunctionBodyContext[] | FunctionBodyContext | null {
    if (i === undefined) {
      return this.getRuleContexts(FunctionBodyContext)
    }

    return this.getRuleContext(i, FunctionBodyContext)
  }
  public fullPropertyDefn(): FullPropertyDefnContext[]
  public fullPropertyDefn(i: number): FullPropertyDefnContext | null
  public fullPropertyDefn(i?: number): FullPropertyDefnContext[] | FullPropertyDefnContext | null {
    if (i === undefined) {
      return this.getRuleContexts(FullPropertyDefnContext)
    }

    return this.getRuleContext(i, FullPropertyDefnContext)
  }
  public propertyDefn(): PropertyDefnContext[]
  public propertyDefn(i: number): PropertyDefnContext | null
  public propertyDefn(i?: number): PropertyDefnContext[] | PropertyDefnContext | null {
    if (i === undefined) {
      return this.getRuleContexts(PropertyDefnContext)
    }

    return this.getRuleContext(i, PropertyDefnContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_enhancementMembers
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterEnhancementMembers) {
      listener.enterEnhancementMembers(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitEnhancementMembers) {
      listener.exitEnhancementMembers(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitEnhancementMembers) {
      return visitor.visitEnhancementMembers(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DelegateDefnContext extends antlr.ParserRuleContext {
  public DELEGATE(): antlr.TerminalNode {
    return this.getToken(GosuParser.DELEGATE, 0)!
  }
  public id(): IdContext {
    return this.getRuleContext(0, IdContext)!
  }
  public delegateStatement(): DelegateStatementContext {
    return this.getRuleContext(0, DelegateStatementContext)!
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_delegateDefn
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterDelegateDefn) {
      listener.enterDelegateDefn(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitDelegateDefn) {
      listener.exitDelegateDefn(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitDelegateDefn) {
      return visitor.visitDelegateDefn(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DelegateStatementContext extends antlr.ParserRuleContext {
  public REPRESENTS(): antlr.TerminalNode {
    return this.getToken(GosuParser.REPRESENTS, 0)!
  }
  public typeLiteral(): TypeLiteralContext[]
  public typeLiteral(i: number): TypeLiteralContext | null
  public typeLiteral(i?: number): TypeLiteralContext[] | TypeLiteralContext | null {
    if (i === undefined) {
      return this.getRuleContexts(TypeLiteralContext)
    }

    return this.getRuleContext(i, TypeLiteralContext)
  }
  public expression(): ExpressionContext | null {
    return this.getRuleContext(0, ExpressionContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_delegateStatement
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterDelegateStatement) {
      listener.enterDelegateStatement(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitDelegateStatement) {
      listener.exitDelegateStatement(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitDelegateStatement) {
      return visitor.visitDelegateStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class OptionalTypeContext extends antlr.ParserRuleContext {
  public typeLiteral(): TypeLiteralContext | null {
    return this.getRuleContext(0, TypeLiteralContext)
  }
  public blockTypeLiteral(): BlockTypeLiteralContext | null {
    return this.getRuleContext(0, BlockTypeLiteralContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_optionalType
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterOptionalType) {
      listener.enterOptionalType(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitOptionalType) {
      listener.exitOptionalType(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitOptionalType) {
      return visitor.visitOptionalType(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class FieldDefnContext extends antlr.ParserRuleContext {
  public VAR(): antlr.TerminalNode {
    return this.getToken(GosuParser.VAR, 0)!
  }
  public id(): IdContext[]
  public id(i: number): IdContext | null
  public id(i?: number): IdContext[] | IdContext | null {
    if (i === undefined) {
      return this.getRuleContexts(IdContext)
    }

    return this.getRuleContext(i, IdContext)
  }
  public optionalType(): OptionalTypeContext {
    return this.getRuleContext(0, OptionalTypeContext)!
  }
  public AS(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.AS, 0)
  }
  public expression(): ExpressionContext | null {
    return this.getRuleContext(0, ExpressionContext)
  }
  public READONLY(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.READONLY, 0)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_fieldDefn
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterFieldDefn) {
      listener.enterFieldDefn(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitFieldDefn) {
      listener.exitFieldDefn(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitFieldDefn) {
      return visitor.visitFieldDefn(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class PropertyDefnContext extends antlr.ParserRuleContext {
  public PROPERTY(): antlr.TerminalNode {
    return this.getToken(GosuParser.PROPERTY, 0)!
  }
  public id(): IdContext {
    return this.getRuleContext(0, IdContext)!
  }
  public parameters(): ParametersContext {
    return this.getRuleContext(0, ParametersContext)!
  }
  public GET(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.GET, 0)
  }
  public SET(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.SET, 0)
  }
  public typeLiteral(): TypeLiteralContext | null {
    return this.getRuleContext(0, TypeLiteralContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_propertyDefn
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterPropertyDefn) {
      listener.enterPropertyDefn(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitPropertyDefn) {
      listener.exitPropertyDefn(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitPropertyDefn) {
      return visitor.visitPropertyDefn(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DotPathWordContext extends antlr.ParserRuleContext {
  public idAll(): IdAllContext[]
  public idAll(i: number): IdAllContext | null
  public idAll(i?: number): IdAllContext[] | IdAllContext | null {
    if (i === undefined) {
      return this.getRuleContexts(IdAllContext)
    }

    return this.getRuleContext(i, IdAllContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_dotPathWord
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterDotPathWord) {
      listener.enterDotPathWord(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitDotPathWord) {
      listener.exitDotPathWord(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitDotPathWord) {
      return visitor.visitDotPathWord(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class NamespaceStatementContext extends antlr.ParserRuleContext {
  public dotPathWord(): DotPathWordContext {
    return this.getRuleContext(0, DotPathWordContext)!
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_namespaceStatement
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterNamespaceStatement) {
      listener.enterNamespaceStatement(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitNamespaceStatement) {
      listener.exitNamespaceStatement(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitNamespaceStatement) {
      return visitor.visitNamespaceStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class UsesStatementListContext extends antlr.ParserRuleContext {
  public USES(): antlr.TerminalNode[]
  public USES(i: number): antlr.TerminalNode | null
  public USES(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GosuParser.USES)
    } else {
      return this.getToken(GosuParser.USES, i)
    }
  }
  public usesStatement(): UsesStatementContext[]
  public usesStatement(i: number): UsesStatementContext | null
  public usesStatement(i?: number): UsesStatementContext[] | UsesStatementContext | null {
    if (i === undefined) {
      return this.getRuleContexts(UsesStatementContext)
    }

    return this.getRuleContext(i, UsesStatementContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_usesStatementList
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterUsesStatementList) {
      listener.enterUsesStatementList(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitUsesStatementList) {
      listener.exitUsesStatementList(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitUsesStatementList) {
      return visitor.visitUsesStatementList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class UsesStatementContext extends antlr.ParserRuleContext {
  public dotPathWord(): DotPathWordContext {
    return this.getRuleContext(0, DotPathWordContext)!
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_usesStatement
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterUsesStatement) {
      listener.enterUsesStatement(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitUsesStatement) {
      listener.exitUsesStatement(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitUsesStatement) {
      return visitor.visitUsesStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class TypeVariableDefsContext extends antlr.ParserRuleContext {
  public typeVariableDefinition(): TypeVariableDefinitionContext[]
  public typeVariableDefinition(i: number): TypeVariableDefinitionContext | null
  public typeVariableDefinition(i?: number): TypeVariableDefinitionContext[] | TypeVariableDefinitionContext | null {
    if (i === undefined) {
      return this.getRuleContexts(TypeVariableDefinitionContext)
    }

    return this.getRuleContext(i, TypeVariableDefinitionContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_typeVariableDefs
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterTypeVariableDefs) {
      listener.enterTypeVariableDefs(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitTypeVariableDefs) {
      listener.exitTypeVariableDefs(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitTypeVariableDefs) {
      return visitor.visitTypeVariableDefs(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class TypeVariableDefinitionContext extends antlr.ParserRuleContext {
  public id(): IdContext {
    return this.getRuleContext(0, IdContext)!
  }
  public EXTENDS(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.EXTENDS, 0)
  }
  public typeLiteralList(): TypeLiteralListContext | null {
    return this.getRuleContext(0, TypeLiteralListContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_typeVariableDefinition
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterTypeVariableDefinition) {
      listener.enterTypeVariableDefinition(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitTypeVariableDefinition) {
      listener.exitTypeVariableDefinition(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitTypeVariableDefinition) {
      return visitor.visitTypeVariableDefinition(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class FunctionBodyContext extends antlr.ParserRuleContext {
  public statementBlock(): StatementBlockContext {
    return this.getRuleContext(0, StatementBlockContext)!
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_functionBody
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterFunctionBody) {
      listener.enterFunctionBody(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitFunctionBody) {
      listener.exitFunctionBody(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitFunctionBody) {
      return visitor.visitFunctionBody(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ParametersContext extends antlr.ParserRuleContext {
  public parameterDeclarationList(): ParameterDeclarationListContext | null {
    return this.getRuleContext(0, ParameterDeclarationListContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_parameters
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterParameters) {
      listener.enterParameters(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitParameters) {
      listener.exitParameters(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitParameters) {
      return visitor.visitParameters(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class FunctionDefnContext extends antlr.ParserRuleContext {
  public FUNCTION(): antlr.TerminalNode {
    return this.getToken(GosuParser.FUNCTION, 0)!
  }
  public id(): IdContext {
    return this.getRuleContext(0, IdContext)!
  }
  public typeVariableDefs(): TypeVariableDefsContext {
    return this.getRuleContext(0, TypeVariableDefsContext)!
  }
  public parameters(): ParametersContext {
    return this.getRuleContext(0, ParametersContext)!
  }
  public typeLiteral(): TypeLiteralContext | null {
    return this.getRuleContext(0, TypeLiteralContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_functionDefn
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterFunctionDefn) {
      listener.enterFunctionDefn(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitFunctionDefn) {
      listener.exitFunctionDefn(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitFunctionDefn) {
      return visitor.visitFunctionDefn(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ConstructorDefnContext extends antlr.ParserRuleContext {
  public CONSTRUCT(): antlr.TerminalNode {
    return this.getToken(GosuParser.CONSTRUCT, 0)!
  }
  public parameters(): ParametersContext {
    return this.getRuleContext(0, ParametersContext)!
  }
  public typeLiteral(): TypeLiteralContext | null {
    return this.getRuleContext(0, TypeLiteralContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_constructorDefn
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterConstructorDefn) {
      listener.enterConstructorDefn(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitConstructorDefn) {
      listener.exitConstructorDefn(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitConstructorDefn) {
      return visitor.visitConstructorDefn(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class FullPropertyDefnContext extends antlr.ParserRuleContext {
  public PROPERTY(): antlr.TerminalNode {
    return this.getToken(GosuParser.PROPERTY, 0)!
  }
  public id(): IdContext {
    return this.getRuleContext(0, IdContext)!
  }
  public propertyTypeSuffix(): PropertyTypeSuffixContext | null {
    return this.getRuleContext(0, PropertyTypeSuffixContext)
  }
  public propertyBody(): PropertyBodyContext | null {
    return this.getRuleContext(0, PropertyBodyContext)
  }
  public typeVariableDefs(): TypeVariableDefsContext | null {
    return this.getRuleContext(0, TypeVariableDefsContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_fullPropertyDefn
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterFullPropertyDefn) {
      listener.enterFullPropertyDefn(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitFullPropertyDefn) {
      listener.exitFullPropertyDefn(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitFullPropertyDefn) {
      return visitor.visitFullPropertyDefn(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class PropertyTypeSuffixContext extends antlr.ParserRuleContext {
  public typeLiteral(): TypeLiteralContext {
    return this.getRuleContext(0, TypeLiteralContext)!
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_propertyTypeSuffix
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterPropertyTypeSuffix) {
      listener.enterPropertyTypeSuffix(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitPropertyTypeSuffix) {
      listener.exitPropertyTypeSuffix(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitPropertyTypeSuffix) {
      return visitor.visitPropertyTypeSuffix(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class PropertyBodyContext extends antlr.ParserRuleContext {
  public propertyAccessor(): PropertyAccessorContext[]
  public propertyAccessor(i: number): PropertyAccessorContext | null
  public propertyAccessor(i?: number): PropertyAccessorContext[] | PropertyAccessorContext | null {
    if (i === undefined) {
      return this.getRuleContexts(PropertyAccessorContext)
    }

    return this.getRuleContext(i, PropertyAccessorContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_propertyBody
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterPropertyBody) {
      listener.enterPropertyBody(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitPropertyBody) {
      listener.exitPropertyBody(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitPropertyBody) {
      return visitor.visitPropertyBody(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class PropertyAccessorContext extends antlr.ParserRuleContext {
  public modifiers(): ModifiersContext {
    return this.getRuleContext(0, ModifiersContext)!
  }
  public parameters(): ParametersContext {
    return this.getRuleContext(0, ParametersContext)!
  }
  public functionBody(): FunctionBodyContext {
    return this.getRuleContext(0, FunctionBodyContext)!
  }
  public GET(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.GET, 0)
  }
  public SET(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.SET, 0)
  }
  public typeLiteral(): TypeLiteralContext | null {
    return this.getRuleContext(0, TypeLiteralContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_propertyAccessor
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterPropertyAccessor) {
      listener.enterPropertyAccessor(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitPropertyAccessor) {
      listener.exitPropertyAccessor(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitPropertyAccessor) {
      return visitor.visitPropertyAccessor(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ModifiersContext extends antlr.ParserRuleContext {
  public annotation(): AnnotationContext[]
  public annotation(i: number): AnnotationContext | null
  public annotation(i?: number): AnnotationContext[] | AnnotationContext | null {
    if (i === undefined) {
      return this.getRuleContexts(AnnotationContext)
    }

    return this.getRuleContext(i, AnnotationContext)
  }
  public PRIVATE(): antlr.TerminalNode[]
  public PRIVATE(i: number): antlr.TerminalNode | null
  public PRIVATE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GosuParser.PRIVATE)
    } else {
      return this.getToken(GosuParser.PRIVATE, i)
    }
  }
  public INTERNAL(): antlr.TerminalNode[]
  public INTERNAL(i: number): antlr.TerminalNode | null
  public INTERNAL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GosuParser.INTERNAL)
    } else {
      return this.getToken(GosuParser.INTERNAL, i)
    }
  }
  public PROTECTED(): antlr.TerminalNode[]
  public PROTECTED(i: number): antlr.TerminalNode | null
  public PROTECTED(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GosuParser.PROTECTED)
    } else {
      return this.getToken(GosuParser.PROTECTED, i)
    }
  }
  public PUBLIC(): antlr.TerminalNode[]
  public PUBLIC(i: number): antlr.TerminalNode | null
  public PUBLIC(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GosuParser.PUBLIC)
    } else {
      return this.getToken(GosuParser.PUBLIC, i)
    }
  }
  public STATIC(): antlr.TerminalNode[]
  public STATIC(i: number): antlr.TerminalNode | null
  public STATIC(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GosuParser.STATIC)
    } else {
      return this.getToken(GosuParser.STATIC, i)
    }
  }
  public ABSTRACT(): antlr.TerminalNode[]
  public ABSTRACT(i: number): antlr.TerminalNode | null
  public ABSTRACT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GosuParser.ABSTRACT)
    } else {
      return this.getToken(GosuParser.ABSTRACT, i)
    }
  }
  public OVERRIDE(): antlr.TerminalNode[]
  public OVERRIDE(i: number): antlr.TerminalNode | null
  public OVERRIDE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GosuParser.OVERRIDE)
    } else {
      return this.getToken(GosuParser.OVERRIDE, i)
    }
  }
  public FINAL(): antlr.TerminalNode[]
  public FINAL(i: number): antlr.TerminalNode | null
  public FINAL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GosuParser.FINAL)
    } else {
      return this.getToken(GosuParser.FINAL, i)
    }
  }
  public TRANSIENT(): antlr.TerminalNode[]
  public TRANSIENT(i: number): antlr.TerminalNode | null
  public TRANSIENT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GosuParser.TRANSIENT)
    } else {
      return this.getToken(GosuParser.TRANSIENT, i)
    }
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_modifiers
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterModifiers) {
      listener.enterModifiers(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitModifiers) {
      listener.exitModifiers(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitModifiers) {
      return visitor.visitModifiers(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class StatementContext extends antlr.ParserRuleContext {
  public ifStatement(): IfStatementContext | null {
    return this.getRuleContext(0, IfStatementContext)
  }
  public tryCatchFinallyStatement(): TryCatchFinallyStatementContext | null {
    return this.getRuleContext(0, TryCatchFinallyStatementContext)
  }
  public throwStatement(): ThrowStatementContext | null {
    return this.getRuleContext(0, ThrowStatementContext)
  }
  public CONTINUE(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.CONTINUE, 0)
  }
  public BREAK(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.BREAK, 0)
  }
  public returnStatement(): ReturnStatementContext | null {
    return this.getRuleContext(0, ReturnStatementContext)
  }
  public forEachStatement(): ForEachStatementContext | null {
    return this.getRuleContext(0, ForEachStatementContext)
  }
  public whileStatement(): WhileStatementContext | null {
    return this.getRuleContext(0, WhileStatementContext)
  }
  public doWhileStatement(): DoWhileStatementContext | null {
    return this.getRuleContext(0, DoWhileStatementContext)
  }
  public switchStatement(): SwitchStatementContext | null {
    return this.getRuleContext(0, SwitchStatementContext)
  }
  public usingStatement(): UsingStatementContext | null {
    return this.getRuleContext(0, UsingStatementContext)
  }
  public assertStatement(): AssertStatementContext | null {
    return this.getRuleContext(0, AssertStatementContext)
  }
  public FINAL(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.FINAL, 0)
  }
  public localVarStatement(): LocalVarStatementContext | null {
    return this.getRuleContext(0, LocalVarStatementContext)
  }
  public evalExpr(): EvalExprContext | null {
    return this.getRuleContext(0, EvalExprContext)
  }
  public assignmentOrMethodCall(): AssignmentOrMethodCallContext | null {
    return this.getRuleContext(0, AssignmentOrMethodCallContext)
  }
  public statementBlock(): StatementBlockContext | null {
    return this.getRuleContext(0, StatementBlockContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_statement
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterStatement) {
      listener.enterStatement(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitStatement) {
      listener.exitStatement(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitStatement) {
      return visitor.visitStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class IfStatementContext extends antlr.ParserRuleContext {
  public IF(): antlr.TerminalNode {
    return this.getToken(GosuParser.IF, 0)!
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)!
  }
  public statement(): StatementContext[]
  public statement(i: number): StatementContext | null
  public statement(i?: number): StatementContext[] | StatementContext | null {
    if (i === undefined) {
      return this.getRuleContexts(StatementContext)
    }

    return this.getRuleContext(i, StatementContext)
  }
  public ELSE(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.ELSE, 0)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_ifStatement
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterIfStatement) {
      listener.enterIfStatement(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitIfStatement) {
      listener.exitIfStatement(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitIfStatement) {
      return visitor.visitIfStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class TryCatchFinallyStatementContext extends antlr.ParserRuleContext {
  public TRY(): antlr.TerminalNode {
    return this.getToken(GosuParser.TRY, 0)!
  }
  public statementBlock(): StatementBlockContext {
    return this.getRuleContext(0, StatementBlockContext)!
  }
  public finallyClause(): FinallyClauseContext | null {
    return this.getRuleContext(0, FinallyClauseContext)
  }
  public catchClause(): CatchClauseContext[]
  public catchClause(i: number): CatchClauseContext | null
  public catchClause(i?: number): CatchClauseContext[] | CatchClauseContext | null {
    if (i === undefined) {
      return this.getRuleContexts(CatchClauseContext)
    }

    return this.getRuleContext(i, CatchClauseContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_tryCatchFinallyStatement
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterTryCatchFinallyStatement) {
      listener.enterTryCatchFinallyStatement(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitTryCatchFinallyStatement) {
      listener.exitTryCatchFinallyStatement(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitTryCatchFinallyStatement) {
      return visitor.visitTryCatchFinallyStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class FinallyClauseContext extends antlr.ParserRuleContext {
  public FINALLY(): antlr.TerminalNode {
    return this.getToken(GosuParser.FINALLY, 0)!
  }
  public statementBlock(): StatementBlockContext {
    return this.getRuleContext(0, StatementBlockContext)!
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_finallyClause
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterFinallyClause) {
      listener.enterFinallyClause(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitFinallyClause) {
      listener.exitFinallyClause(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitFinallyClause) {
      return visitor.visitFinallyClause(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class CatchClauseContext extends antlr.ParserRuleContext {
  public CATCH(): antlr.TerminalNode {
    return this.getToken(GosuParser.CATCH, 0)!
  }
  public id(): IdContext {
    return this.getRuleContext(0, IdContext)!
  }
  public statementBlock(): StatementBlockContext {
    return this.getRuleContext(0, StatementBlockContext)!
  }
  public VAR(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.VAR, 0)
  }
  public typeLiteral(): TypeLiteralContext | null {
    return this.getRuleContext(0, TypeLiteralContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_catchClause
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterCatchClause) {
      listener.enterCatchClause(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitCatchClause) {
      listener.exitCatchClause(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitCatchClause) {
      return visitor.visitCatchClause(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class AssertStatementContext extends antlr.ParserRuleContext {
  public ASSERT(): antlr.TerminalNode {
    return this.getToken(GosuParser.ASSERT, 0)!
  }
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext | null
  public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    }

    return this.getRuleContext(i, ExpressionContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_assertStatement
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterAssertStatement) {
      listener.enterAssertStatement(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitAssertStatement) {
      listener.exitAssertStatement(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitAssertStatement) {
      return visitor.visitAssertStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class UsingStatementContext extends antlr.ParserRuleContext {
  public USING(): antlr.TerminalNode {
    return this.getToken(GosuParser.USING, 0)!
  }
  public statementBlock(): StatementBlockContext[]
  public statementBlock(i: number): StatementBlockContext | null
  public statementBlock(i?: number): StatementBlockContext[] | StatementBlockContext | null {
    if (i === undefined) {
      return this.getRuleContexts(StatementBlockContext)
    }

    return this.getRuleContext(i, StatementBlockContext)
  }
  public localVarStatement(): LocalVarStatementContext[]
  public localVarStatement(i: number): LocalVarStatementContext | null
  public localVarStatement(i?: number): LocalVarStatementContext[] | LocalVarStatementContext | null {
    if (i === undefined) {
      return this.getRuleContexts(LocalVarStatementContext)
    }

    return this.getRuleContext(i, LocalVarStatementContext)
  }
  public expression(): ExpressionContext | null {
    return this.getRuleContext(0, ExpressionContext)
  }
  public FINALLY(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.FINALLY, 0)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_usingStatement
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterUsingStatement) {
      listener.enterUsingStatement(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitUsingStatement) {
      listener.exitUsingStatement(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitUsingStatement) {
      return visitor.visitUsingStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ReturnStatementContext extends antlr.ParserRuleContext {
  public RETURN(): antlr.TerminalNode {
    return this.getToken(GosuParser.RETURN, 0)!
  }
  public expression(): ExpressionContext | null {
    return this.getRuleContext(0, ExpressionContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_returnStatement
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterReturnStatement) {
      listener.enterReturnStatement(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitReturnStatement) {
      listener.exitReturnStatement(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitReturnStatement) {
      return visitor.visitReturnStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class WhileStatementContext extends antlr.ParserRuleContext {
  public WHILE(): antlr.TerminalNode {
    return this.getToken(GosuParser.WHILE, 0)!
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)!
  }
  public statement(): StatementContext {
    return this.getRuleContext(0, StatementContext)!
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_whileStatement
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterWhileStatement) {
      listener.enterWhileStatement(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitWhileStatement) {
      listener.exitWhileStatement(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitWhileStatement) {
      return visitor.visitWhileStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DoWhileStatementContext extends antlr.ParserRuleContext {
  public DO(): antlr.TerminalNode {
    return this.getToken(GosuParser.DO, 0)!
  }
  public statement(): StatementContext {
    return this.getRuleContext(0, StatementContext)!
  }
  public WHILE(): antlr.TerminalNode {
    return this.getToken(GosuParser.WHILE, 0)!
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)!
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_doWhileStatement
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterDoWhileStatement) {
      listener.enterDoWhileStatement(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitDoWhileStatement) {
      listener.exitDoWhileStatement(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitDoWhileStatement) {
      return visitor.visitDoWhileStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class SwitchStatementContext extends antlr.ParserRuleContext {
  public SWITCH(): antlr.TerminalNode {
    return this.getToken(GosuParser.SWITCH, 0)!
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)!
  }
  public switchBlockStatementGroup(): SwitchBlockStatementGroupContext[]
  public switchBlockStatementGroup(i: number): SwitchBlockStatementGroupContext | null
  public switchBlockStatementGroup(
    i?: number,
  ): SwitchBlockStatementGroupContext[] | SwitchBlockStatementGroupContext | null {
    if (i === undefined) {
      return this.getRuleContexts(SwitchBlockStatementGroupContext)
    }

    return this.getRuleContext(i, SwitchBlockStatementGroupContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_switchStatement
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterSwitchStatement) {
      listener.enterSwitchStatement(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitSwitchStatement) {
      listener.exitSwitchStatement(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitSwitchStatement) {
      return visitor.visitSwitchStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class SwitchBlockStatementGroupContext extends antlr.ParserRuleContext {
  public CASE(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.CASE, 0)
  }
  public expression(): ExpressionContext | null {
    return this.getRuleContext(0, ExpressionContext)
  }
  public DEFAULT(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.DEFAULT, 0)
  }
  public statement(): StatementContext[]
  public statement(i: number): StatementContext | null
  public statement(i?: number): StatementContext[] | StatementContext | null {
    if (i === undefined) {
      return this.getRuleContexts(StatementContext)
    }

    return this.getRuleContext(i, StatementContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_switchBlockStatementGroup
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterSwitchBlockStatementGroup) {
      listener.enterSwitchBlockStatementGroup(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitSwitchBlockStatementGroup) {
      listener.exitSwitchBlockStatementGroup(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitSwitchBlockStatementGroup) {
      return visitor.visitSwitchBlockStatementGroup(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ThrowStatementContext extends antlr.ParserRuleContext {
  public THROW(): antlr.TerminalNode {
    return this.getToken(GosuParser.THROW, 0)!
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)!
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_throwStatement
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterThrowStatement) {
      listener.enterThrowStatement(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitThrowStatement) {
      listener.exitThrowStatement(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitThrowStatement) {
      return visitor.visitThrowStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class LocalVarStatementContext extends antlr.ParserRuleContext {
  public VAR(): antlr.TerminalNode {
    return this.getToken(GosuParser.VAR, 0)!
  }
  public id(): IdContext {
    return this.getRuleContext(0, IdContext)!
  }
  public optionalType(): OptionalTypeContext {
    return this.getRuleContext(0, OptionalTypeContext)!
  }
  public expression(): ExpressionContext | null {
    return this.getRuleContext(0, ExpressionContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_localVarStatement
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterLocalVarStatement) {
      listener.enterLocalVarStatement(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitLocalVarStatement) {
      listener.exitLocalVarStatement(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitLocalVarStatement) {
      return visitor.visitLocalVarStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ForEachStatementContext extends antlr.ParserRuleContext {
  public statement(): StatementContext {
    return this.getRuleContext(0, StatementContext)!
  }
  public FOREACH(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.FOREACH, 0)
  }
  public FOR(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.FOR, 0)
  }
  public expression(): ExpressionContext | null {
    return this.getRuleContext(0, ExpressionContext)
  }
  public id(): IdContext | null {
    return this.getRuleContext(0, IdContext)
  }
  public IN(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.IN, 0)
  }
  public indexVar(): IndexVarContext | null {
    return this.getRuleContext(0, IndexVarContext)
  }
  public VAR(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.VAR, 0)
  }
  public indexRest(): IndexRestContext | null {
    return this.getRuleContext(0, IndexRestContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_forEachStatement
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterForEachStatement) {
      listener.enterForEachStatement(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitForEachStatement) {
      listener.exitForEachStatement(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitForEachStatement) {
      return visitor.visitForEachStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class IndexRestContext extends antlr.ParserRuleContext {
  public indexVar(): IndexVarContext | null {
    return this.getRuleContext(0, IndexVarContext)
  }
  public iteratorVar(): IteratorVarContext | null {
    return this.getRuleContext(0, IteratorVarContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_indexRest
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterIndexRest) {
      listener.enterIndexRest(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitIndexRest) {
      listener.exitIndexRest(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitIndexRest) {
      return visitor.visitIndexRest(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class IndexVarContext extends antlr.ParserRuleContext {
  public INDEX(): antlr.TerminalNode {
    return this.getToken(GosuParser.INDEX, 0)!
  }
  public id(): IdContext {
    return this.getRuleContext(0, IdContext)!
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_indexVar
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterIndexVar) {
      listener.enterIndexVar(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitIndexVar) {
      listener.exitIndexVar(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitIndexVar) {
      return visitor.visitIndexVar(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class IteratorVarContext extends antlr.ParserRuleContext {
  public ITERATOR(): antlr.TerminalNode {
    return this.getToken(GosuParser.ITERATOR, 0)!
  }
  public id(): IdContext {
    return this.getRuleContext(0, IdContext)!
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_iteratorVar
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterIteratorVar) {
      listener.enterIteratorVar(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitIteratorVar) {
      listener.exitIteratorVar(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitIteratorVar) {
      return visitor.visitIteratorVar(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ThisSuperExprContext extends antlr.ParserRuleContext {
  public THIS(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.THIS, 0)
  }
  public SUPER(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.SUPER, 0)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_thisSuperExpr
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterThisSuperExpr) {
      listener.enterThisSuperExpr(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitThisSuperExpr) {
      listener.exitThisSuperExpr(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitThisSuperExpr) {
      return visitor.visitThisSuperExpr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class AssignmentOrMethodCallContext extends antlr.ParserRuleContext {
  public indirectMemberAccess(): IndirectMemberAccessContext | null {
    return this.getRuleContext(0, IndirectMemberAccessContext)
  }
  public incrementOp(): IncrementOpContext | null {
    return this.getRuleContext(0, IncrementOpContext)
  }
  public assignmentOp(): AssignmentOpContext | null {
    return this.getRuleContext(0, AssignmentOpContext)
  }
  public expression(): ExpressionContext | null {
    return this.getRuleContext(0, ExpressionContext)
  }
  public newExpr(): NewExprContext | null {
    return this.getRuleContext(0, NewExprContext)
  }
  public thisSuperExpr(): ThisSuperExprContext | null {
    return this.getRuleContext(0, ThisSuperExprContext)
  }
  public typeLiteralExpr(): TypeLiteralExprContext | null {
    return this.getRuleContext(0, TypeLiteralExprContext)
  }
  public parenthExpr(): ParenthExprContext | null {
    return this.getRuleContext(0, ParenthExprContext)
  }
  public STRING_LITERAL(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.STRING_LITERAL, 0)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_assignmentOrMethodCall
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterAssignmentOrMethodCall) {
      listener.enterAssignmentOrMethodCall(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitAssignmentOrMethodCall) {
      listener.exitAssignmentOrMethodCall(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitAssignmentOrMethodCall) {
      return visitor.visitAssignmentOrMethodCall(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class StatementBlockContext extends antlr.ParserRuleContext {
  public statementBlockBody(): StatementBlockBodyContext {
    return this.getRuleContext(0, StatementBlockBodyContext)!
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_statementBlock
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterStatementBlock) {
      listener.enterStatementBlock(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitStatementBlock) {
      listener.exitStatementBlock(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitStatementBlock) {
      return visitor.visitStatementBlock(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class StatementBlockBodyContext extends antlr.ParserRuleContext {
  public statement(): StatementContext[]
  public statement(i: number): StatementContext | null
  public statement(i?: number): StatementContext[] | StatementContext | null {
    if (i === undefined) {
      return this.getRuleContexts(StatementContext)
    }

    return this.getRuleContext(i, StatementContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_statementBlockBody
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterStatementBlockBody) {
      listener.enterStatementBlockBody(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitStatementBlockBody) {
      listener.exitStatementBlockBody(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitStatementBlockBody) {
      return visitor.visitStatementBlockBody(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class BlockTypeLiteralContext extends antlr.ParserRuleContext {
  public blockLiteral(): BlockLiteralContext {
    return this.getRuleContext(0, BlockLiteralContext)!
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_blockTypeLiteral
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterBlockTypeLiteral) {
      listener.enterBlockTypeLiteral(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitBlockTypeLiteral) {
      listener.exitBlockTypeLiteral(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitBlockTypeLiteral) {
      return visitor.visitBlockTypeLiteral(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class BlockLiteralContext extends antlr.ParserRuleContext {
  public blockLiteralArg(): BlockLiteralArgContext[]
  public blockLiteralArg(i: number): BlockLiteralArgContext | null
  public blockLiteralArg(i?: number): BlockLiteralArgContext[] | BlockLiteralArgContext | null {
    if (i === undefined) {
      return this.getRuleContexts(BlockLiteralArgContext)
    }

    return this.getRuleContext(i, BlockLiteralArgContext)
  }
  public typeLiteral(): TypeLiteralContext | null {
    return this.getRuleContext(0, TypeLiteralContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_blockLiteral
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterBlockLiteral) {
      listener.enterBlockLiteral(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitBlockLiteral) {
      listener.exitBlockLiteral(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitBlockLiteral) {
      return visitor.visitBlockLiteral(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class BlockLiteralArgContext extends antlr.ParserRuleContext {
  public id(): IdContext | null {
    return this.getRuleContext(0, IdContext)
  }
  public expression(): ExpressionContext | null {
    return this.getRuleContext(0, ExpressionContext)
  }
  public blockTypeLiteral(): BlockTypeLiteralContext | null {
    return this.getRuleContext(0, BlockTypeLiteralContext)
  }
  public typeLiteral(): TypeLiteralContext | null {
    return this.getRuleContext(0, TypeLiteralContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_blockLiteralArg
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterBlockLiteralArg) {
      listener.enterBlockLiteralArg(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitBlockLiteralArg) {
      listener.exitBlockLiteralArg(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitBlockLiteralArg) {
      return visitor.visitBlockLiteralArg(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class TypeLiteralContext extends antlr.ParserRuleContext {
  public type_(): TypeContext[]
  public type_(i: number): TypeContext | null
  public type_(i?: number): TypeContext[] | TypeContext | null {
    if (i === undefined) {
      return this.getRuleContexts(TypeContext)
    }

    return this.getRuleContext(i, TypeContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_typeLiteral
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterTypeLiteral) {
      listener.enterTypeLiteral(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitTypeLiteral) {
      listener.exitTypeLiteral(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitTypeLiteral) {
      return visitor.visitTypeLiteral(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class TypeLiteralTypeContext extends antlr.ParserRuleContext {
  public typeLiteral(): TypeLiteralContext {
    return this.getRuleContext(0, TypeLiteralContext)!
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_typeLiteralType
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterTypeLiteralType) {
      listener.enterTypeLiteralType(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitTypeLiteralType) {
      listener.exitTypeLiteralType(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitTypeLiteralType) {
      return visitor.visitTypeLiteralType(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class TypeLiteralExprContext extends antlr.ParserRuleContext {
  public typeLiteral(): TypeLiteralContext {
    return this.getRuleContext(0, TypeLiteralContext)!
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_typeLiteralExpr
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterTypeLiteralExpr) {
      listener.enterTypeLiteralExpr(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitTypeLiteralExpr) {
      listener.exitTypeLiteralExpr(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitTypeLiteralExpr) {
      return visitor.visitTypeLiteralExpr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class TypeLiteralListContext extends antlr.ParserRuleContext {
  public typeLiteral(): TypeLiteralContext {
    return this.getRuleContext(0, TypeLiteralContext)!
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_typeLiteralList
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterTypeLiteralList) {
      listener.enterTypeLiteralList(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitTypeLiteralList) {
      listener.exitTypeLiteralList(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitTypeLiteralList) {
      return visitor.visitTypeLiteralList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class TypeContext extends antlr.ParserRuleContext {
  public classOrInterfaceType(): ClassOrInterfaceTypeContext | null {
    return this.getRuleContext(0, ClassOrInterfaceTypeContext)
  }
  public BLOCK(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.BLOCK, 0)
  }
  public blockLiteral(): BlockLiteralContext | null {
    return this.getRuleContext(0, BlockLiteralContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_type
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterType) {
      listener.enterType(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitType) {
      listener.exitType(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitType) {
      return visitor.visitType(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ClassOrInterfaceTypeContext extends antlr.ParserRuleContext {
  public idclassOrInterfaceType(): IdclassOrInterfaceTypeContext {
    return this.getRuleContext(0, IdclassOrInterfaceTypeContext)!
  }
  public typeArguments(): TypeArgumentsContext[]
  public typeArguments(i: number): TypeArgumentsContext | null
  public typeArguments(i?: number): TypeArgumentsContext[] | TypeArgumentsContext | null {
    if (i === undefined) {
      return this.getRuleContexts(TypeArgumentsContext)
    }

    return this.getRuleContext(i, TypeArgumentsContext)
  }
  public id(): IdContext[]
  public id(i: number): IdContext | null
  public id(i?: number): IdContext[] | IdContext | null {
    if (i === undefined) {
      return this.getRuleContexts(IdContext)
    }

    return this.getRuleContext(i, IdContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_classOrInterfaceType
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterClassOrInterfaceType) {
      listener.enterClassOrInterfaceType(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitClassOrInterfaceType) {
      listener.exitClassOrInterfaceType(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitClassOrInterfaceType) {
      return visitor.visitClassOrInterfaceType(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class TypeArgumentsContext extends antlr.ParserRuleContext {
  public typeArgument(): TypeArgumentContext[]
  public typeArgument(i: number): TypeArgumentContext | null
  public typeArgument(i?: number): TypeArgumentContext[] | TypeArgumentContext | null {
    if (i === undefined) {
      return this.getRuleContexts(TypeArgumentContext)
    }

    return this.getRuleContext(i, TypeArgumentContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_typeArguments
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterTypeArguments) {
      listener.enterTypeArguments(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitTypeArguments) {
      listener.exitTypeArguments(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitTypeArguments) {
      return visitor.visitTypeArguments(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class TypeArgumentContext extends antlr.ParserRuleContext {
  public typeLiteralType(): TypeLiteralTypeContext | null {
    return this.getRuleContext(0, TypeLiteralTypeContext)
  }
  public EXTENDS(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.EXTENDS, 0)
  }
  public SUPER(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.SUPER, 0)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_typeArgument
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterTypeArgument) {
      listener.enterTypeArgument(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitTypeArgument) {
      listener.exitTypeArgument(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitTypeArgument) {
      return visitor.visitTypeArgument(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ExpressionContext extends antlr.ParserRuleContext {
  public conditionalExpr(): ConditionalExprContext {
    return this.getRuleContext(0, ConditionalExprContext)!
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_expression
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterExpression) {
      listener.enterExpression(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitExpression) {
      listener.exitExpression(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitExpression) {
      return visitor.visitExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ConditionalExprContext extends antlr.ParserRuleContext {
  public conditionalOrExpr(): ConditionalOrExprContext {
    return this.getRuleContext(0, ConditionalOrExprContext)!
  }
  public conditionalExpr(): ConditionalExprContext[]
  public conditionalExpr(i: number): ConditionalExprContext | null
  public conditionalExpr(i?: number): ConditionalExprContext[] | ConditionalExprContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ConditionalExprContext)
    }

    return this.getRuleContext(i, ConditionalExprContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_conditionalExpr
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterConditionalExpr) {
      listener.enterConditionalExpr(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitConditionalExpr) {
      listener.exitConditionalExpr(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitConditionalExpr) {
      return visitor.visitConditionalExpr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ConditionalOrExprContext extends antlr.ParserRuleContext {
  public conditionalAndExpr(): ConditionalAndExprContext[]
  public conditionalAndExpr(i: number): ConditionalAndExprContext | null
  public conditionalAndExpr(i?: number): ConditionalAndExprContext[] | ConditionalAndExprContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ConditionalAndExprContext)
    }

    return this.getRuleContext(i, ConditionalAndExprContext)
  }
  public orOp(): OrOpContext[]
  public orOp(i: number): OrOpContext | null
  public orOp(i?: number): OrOpContext[] | OrOpContext | null {
    if (i === undefined) {
      return this.getRuleContexts(OrOpContext)
    }

    return this.getRuleContext(i, OrOpContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_conditionalOrExpr
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterConditionalOrExpr) {
      listener.enterConditionalOrExpr(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitConditionalOrExpr) {
      listener.exitConditionalOrExpr(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitConditionalOrExpr) {
      return visitor.visitConditionalOrExpr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ConditionalAndExprContext extends antlr.ParserRuleContext {
  public bitwiseOrExpr(): BitwiseOrExprContext[]
  public bitwiseOrExpr(i: number): BitwiseOrExprContext | null
  public bitwiseOrExpr(i?: number): BitwiseOrExprContext[] | BitwiseOrExprContext | null {
    if (i === undefined) {
      return this.getRuleContexts(BitwiseOrExprContext)
    }

    return this.getRuleContext(i, BitwiseOrExprContext)
  }
  public andOp(): AndOpContext[]
  public andOp(i: number): AndOpContext | null
  public andOp(i?: number): AndOpContext[] | AndOpContext | null {
    if (i === undefined) {
      return this.getRuleContexts(AndOpContext)
    }

    return this.getRuleContext(i, AndOpContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_conditionalAndExpr
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterConditionalAndExpr) {
      listener.enterConditionalAndExpr(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitConditionalAndExpr) {
      listener.exitConditionalAndExpr(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitConditionalAndExpr) {
      return visitor.visitConditionalAndExpr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class BitwiseOrExprContext extends antlr.ParserRuleContext {
  public bitwiseXorExpr(): BitwiseXorExprContext[]
  public bitwiseXorExpr(i: number): BitwiseXorExprContext | null
  public bitwiseXorExpr(i?: number): BitwiseXorExprContext[] | BitwiseXorExprContext | null {
    if (i === undefined) {
      return this.getRuleContexts(BitwiseXorExprContext)
    }

    return this.getRuleContext(i, BitwiseXorExprContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_bitwiseOrExpr
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterBitwiseOrExpr) {
      listener.enterBitwiseOrExpr(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitBitwiseOrExpr) {
      listener.exitBitwiseOrExpr(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitBitwiseOrExpr) {
      return visitor.visitBitwiseOrExpr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class BitwiseXorExprContext extends antlr.ParserRuleContext {
  public bitwiseAndExpr(): BitwiseAndExprContext[]
  public bitwiseAndExpr(i: number): BitwiseAndExprContext | null
  public bitwiseAndExpr(i?: number): BitwiseAndExprContext[] | BitwiseAndExprContext | null {
    if (i === undefined) {
      return this.getRuleContexts(BitwiseAndExprContext)
    }

    return this.getRuleContext(i, BitwiseAndExprContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_bitwiseXorExpr
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterBitwiseXorExpr) {
      listener.enterBitwiseXorExpr(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitBitwiseXorExpr) {
      listener.exitBitwiseXorExpr(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitBitwiseXorExpr) {
      return visitor.visitBitwiseXorExpr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class BitwiseAndExprContext extends antlr.ParserRuleContext {
  public equalityExpr(): EqualityExprContext[]
  public equalityExpr(i: number): EqualityExprContext | null
  public equalityExpr(i?: number): EqualityExprContext[] | EqualityExprContext | null {
    if (i === undefined) {
      return this.getRuleContexts(EqualityExprContext)
    }

    return this.getRuleContext(i, EqualityExprContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_bitwiseAndExpr
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterBitwiseAndExpr) {
      listener.enterBitwiseAndExpr(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitBitwiseAndExpr) {
      listener.exitBitwiseAndExpr(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitBitwiseAndExpr) {
      return visitor.visitBitwiseAndExpr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class EqualityExprContext extends antlr.ParserRuleContext {
  public relationalExpr(): RelationalExprContext[]
  public relationalExpr(i: number): RelationalExprContext | null
  public relationalExpr(i?: number): RelationalExprContext[] | RelationalExprContext | null {
    if (i === undefined) {
      return this.getRuleContexts(RelationalExprContext)
    }

    return this.getRuleContext(i, RelationalExprContext)
  }
  public equalityOp(): EqualityOpContext[]
  public equalityOp(i: number): EqualityOpContext | null
  public equalityOp(i?: number): EqualityOpContext[] | EqualityOpContext | null {
    if (i === undefined) {
      return this.getRuleContexts(EqualityOpContext)
    }

    return this.getRuleContext(i, EqualityOpContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_equalityExpr
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterEqualityExpr) {
      listener.enterEqualityExpr(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitEqualityExpr) {
      listener.exitEqualityExpr(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitEqualityExpr) {
      return visitor.visitEqualityExpr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class RelationalExprContext extends antlr.ParserRuleContext {
  public intervalExpr(): IntervalExprContext[]
  public intervalExpr(i: number): IntervalExprContext | null
  public intervalExpr(i?: number): IntervalExprContext[] | IntervalExprContext | null {
    if (i === undefined) {
      return this.getRuleContexts(IntervalExprContext)
    }

    return this.getRuleContext(i, IntervalExprContext)
  }
  public relOp(): RelOpContext[]
  public relOp(i: number): RelOpContext | null
  public relOp(i?: number): RelOpContext[] | RelOpContext | null {
    if (i === undefined) {
      return this.getRuleContexts(RelOpContext)
    }

    return this.getRuleContext(i, RelOpContext)
  }
  public TYPEIS(): antlr.TerminalNode[]
  public TYPEIS(i: number): antlr.TerminalNode | null
  public TYPEIS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GosuParser.TYPEIS)
    } else {
      return this.getToken(GosuParser.TYPEIS, i)
    }
  }
  public typeLiteralType(): TypeLiteralTypeContext[]
  public typeLiteralType(i: number): TypeLiteralTypeContext | null
  public typeLiteralType(i?: number): TypeLiteralTypeContext[] | TypeLiteralTypeContext | null {
    if (i === undefined) {
      return this.getRuleContexts(TypeLiteralTypeContext)
    }

    return this.getRuleContext(i, TypeLiteralTypeContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_relationalExpr
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterRelationalExpr) {
      listener.enterRelationalExpr(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitRelationalExpr) {
      listener.exitRelationalExpr(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitRelationalExpr) {
      return visitor.visitRelationalExpr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class IntervalExprContext extends antlr.ParserRuleContext {
  public bitshiftExpr(): BitshiftExprContext[]
  public bitshiftExpr(i: number): BitshiftExprContext | null
  public bitshiftExpr(i?: number): BitshiftExprContext[] | BitshiftExprContext | null {
    if (i === undefined) {
      return this.getRuleContexts(BitshiftExprContext)
    }

    return this.getRuleContext(i, BitshiftExprContext)
  }
  public intervalOp(): IntervalOpContext | null {
    return this.getRuleContext(0, IntervalOpContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_intervalExpr
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterIntervalExpr) {
      listener.enterIntervalExpr(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitIntervalExpr) {
      listener.exitIntervalExpr(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitIntervalExpr) {
      return visitor.visitIntervalExpr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class BitshiftExprContext extends antlr.ParserRuleContext {
  public additiveExpr(): AdditiveExprContext[]
  public additiveExpr(i: number): AdditiveExprContext | null
  public additiveExpr(i?: number): AdditiveExprContext[] | AdditiveExprContext | null {
    if (i === undefined) {
      return this.getRuleContexts(AdditiveExprContext)
    }

    return this.getRuleContext(i, AdditiveExprContext)
  }
  public bitshiftOp(): BitshiftOpContext[]
  public bitshiftOp(i: number): BitshiftOpContext | null
  public bitshiftOp(i?: number): BitshiftOpContext[] | BitshiftOpContext | null {
    if (i === undefined) {
      return this.getRuleContexts(BitshiftOpContext)
    }

    return this.getRuleContext(i, BitshiftOpContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_bitshiftExpr
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterBitshiftExpr) {
      listener.enterBitshiftExpr(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitBitshiftExpr) {
      listener.exitBitshiftExpr(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitBitshiftExpr) {
      return visitor.visitBitshiftExpr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class AdditiveExprContext extends antlr.ParserRuleContext {
  public multiplicativeExpr(): MultiplicativeExprContext[]
  public multiplicativeExpr(i: number): MultiplicativeExprContext | null
  public multiplicativeExpr(i?: number): MultiplicativeExprContext[] | MultiplicativeExprContext | null {
    if (i === undefined) {
      return this.getRuleContexts(MultiplicativeExprContext)
    }

    return this.getRuleContext(i, MultiplicativeExprContext)
  }
  public additiveOp(): AdditiveOpContext[]
  public additiveOp(i: number): AdditiveOpContext | null
  public additiveOp(i?: number): AdditiveOpContext[] | AdditiveOpContext | null {
    if (i === undefined) {
      return this.getRuleContexts(AdditiveOpContext)
    }

    return this.getRuleContext(i, AdditiveOpContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_additiveExpr
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterAdditiveExpr) {
      listener.enterAdditiveExpr(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitAdditiveExpr) {
      listener.exitAdditiveExpr(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitAdditiveExpr) {
      return visitor.visitAdditiveExpr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class MultiplicativeExprContext extends antlr.ParserRuleContext {
  public typeAsExpr(): TypeAsExprContext[]
  public typeAsExpr(i: number): TypeAsExprContext | null
  public typeAsExpr(i?: number): TypeAsExprContext[] | TypeAsExprContext | null {
    if (i === undefined) {
      return this.getRuleContexts(TypeAsExprContext)
    }

    return this.getRuleContext(i, TypeAsExprContext)
  }
  public multiplicativeOp(): MultiplicativeOpContext[]
  public multiplicativeOp(i: number): MultiplicativeOpContext | null
  public multiplicativeOp(i?: number): MultiplicativeOpContext[] | MultiplicativeOpContext | null {
    if (i === undefined) {
      return this.getRuleContexts(MultiplicativeOpContext)
    }

    return this.getRuleContext(i, MultiplicativeOpContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_multiplicativeExpr
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterMultiplicativeExpr) {
      listener.enterMultiplicativeExpr(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitMultiplicativeExpr) {
      listener.exitMultiplicativeExpr(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitMultiplicativeExpr) {
      return visitor.visitMultiplicativeExpr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class TypeAsExprContext extends antlr.ParserRuleContext {
  public unaryExpr(): UnaryExprContext {
    return this.getRuleContext(0, UnaryExprContext)!
  }
  public typeAsOp(): TypeAsOpContext[]
  public typeAsOp(i: number): TypeAsOpContext | null
  public typeAsOp(i?: number): TypeAsOpContext[] | TypeAsOpContext | null {
    if (i === undefined) {
      return this.getRuleContexts(TypeAsOpContext)
    }

    return this.getRuleContext(i, TypeAsOpContext)
  }
  public typeLiteral(): TypeLiteralContext[]
  public typeLiteral(i: number): TypeLiteralContext | null
  public typeLiteral(i?: number): TypeLiteralContext[] | TypeLiteralContext | null {
    if (i === undefined) {
      return this.getRuleContexts(TypeLiteralContext)
    }

    return this.getRuleContext(i, TypeLiteralContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_typeAsExpr
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterTypeAsExpr) {
      listener.enterTypeAsExpr(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitTypeAsExpr) {
      listener.exitTypeAsExpr(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitTypeAsExpr) {
      return visitor.visitTypeAsExpr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class UnaryExprContext extends antlr.ParserRuleContext {
  public unaryExprNotPlusMinus(): UnaryExprNotPlusMinusContext {
    return this.getRuleContext(0, UnaryExprNotPlusMinusContext)!
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_unaryExpr
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterUnaryExpr) {
      listener.enterUnaryExpr(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitUnaryExpr) {
      listener.exitUnaryExpr(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitUnaryExpr) {
      return visitor.visitUnaryExpr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class UnaryExprNotPlusMinusContext extends antlr.ParserRuleContext {
  public unaryOp(): UnaryOpContext | null {
    return this.getRuleContext(0, UnaryOpContext)
  }
  public unaryExpr(): UnaryExprContext | null {
    return this.getRuleContext(0, UnaryExprContext)
  }
  public blockExpr(): BlockExprContext | null {
    return this.getRuleContext(0, BlockExprContext)
  }
  public evalExpr(): EvalExprContext | null {
    return this.getRuleContext(0, EvalExprContext)
  }
  public primaryExpr(): PrimaryExprContext | null {
    return this.getRuleContext(0, PrimaryExprContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_unaryExprNotPlusMinus
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterUnaryExprNotPlusMinus) {
      listener.enterUnaryExprNotPlusMinus(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitUnaryExprNotPlusMinus) {
      listener.exitUnaryExprNotPlusMinus(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitUnaryExprNotPlusMinus) {
      return visitor.visitUnaryExprNotPlusMinus(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class BlockExprContext extends antlr.ParserRuleContext {
  public expression(): ExpressionContext | null {
    return this.getRuleContext(0, ExpressionContext)
  }
  public statementBlock(): StatementBlockContext | null {
    return this.getRuleContext(0, StatementBlockContext)
  }
  public parameterDeclarationList(): ParameterDeclarationListContext | null {
    return this.getRuleContext(0, ParameterDeclarationListContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_blockExpr
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterBlockExpr) {
      listener.enterBlockExpr(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitBlockExpr) {
      listener.exitBlockExpr(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitBlockExpr) {
      return visitor.visitBlockExpr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ParameterDeclarationListContext extends antlr.ParserRuleContext {
  public parameterDeclaration(): ParameterDeclarationContext[]
  public parameterDeclaration(i: number): ParameterDeclarationContext | null
  public parameterDeclaration(i?: number): ParameterDeclarationContext[] | ParameterDeclarationContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ParameterDeclarationContext)
    }

    return this.getRuleContext(i, ParameterDeclarationContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_parameterDeclarationList
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterParameterDeclarationList) {
      listener.enterParameterDeclarationList(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitParameterDeclarationList) {
      listener.exitParameterDeclarationList(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitParameterDeclarationList) {
      return visitor.visitParameterDeclarationList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ParameterDeclarationContext extends antlr.ParserRuleContext {
  public id(): IdContext {
    return this.getRuleContext(0, IdContext)!
  }
  public annotation(): AnnotationContext[]
  public annotation(i: number): AnnotationContext | null
  public annotation(i?: number): AnnotationContext[] | AnnotationContext | null {
    if (i === undefined) {
      return this.getRuleContexts(AnnotationContext)
    }

    return this.getRuleContext(i, AnnotationContext)
  }
  public FINAL(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.FINAL, 0)
  }
  public typeLiteral(): TypeLiteralContext | null {
    return this.getRuleContext(0, TypeLiteralContext)
  }
  public blockTypeLiteral(): BlockTypeLiteralContext | null {
    return this.getRuleContext(0, BlockTypeLiteralContext)
  }
  public expression(): ExpressionContext | null {
    return this.getRuleContext(0, ExpressionContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_parameterDeclaration
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterParameterDeclaration) {
      listener.enterParameterDeclaration(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitParameterDeclaration) {
      listener.exitParameterDeclaration(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitParameterDeclaration) {
      return visitor.visitParameterDeclaration(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class AnnotationArgumentsContext extends antlr.ParserRuleContext {
  public arguments(): ArgumentsContext {
    return this.getRuleContext(0, ArgumentsContext)!
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_annotationArguments
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterAnnotationArguments) {
      listener.enterAnnotationArguments(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitAnnotationArguments) {
      listener.exitAnnotationArguments(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitAnnotationArguments) {
      return visitor.visitAnnotationArguments(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ArgumentsContext extends antlr.ParserRuleContext {
  public argExpression(): ArgExpressionContext[]
  public argExpression(i: number): ArgExpressionContext | null
  public argExpression(i?: number): ArgExpressionContext[] | ArgExpressionContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ArgExpressionContext)
    }

    return this.getRuleContext(i, ArgExpressionContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_arguments
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterArguments) {
      listener.enterArguments(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitArguments) {
      listener.exitArguments(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitArguments) {
      return visitor.visitArguments(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class OptionalArgumentsContext extends antlr.ParserRuleContext {
  public arguments(): ArgumentsContext | null {
    return this.getRuleContext(0, ArgumentsContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_optionalArguments
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterOptionalArguments) {
      listener.enterOptionalArguments(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitOptionalArguments) {
      listener.exitOptionalArguments(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitOptionalArguments) {
      return visitor.visitOptionalArguments(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ArgExpressionContext extends antlr.ParserRuleContext {
  public namedArgumentExpression(): NamedArgumentExpressionContext | null {
    return this.getRuleContext(0, NamedArgumentExpressionContext)
  }
  public expression(): ExpressionContext | null {
    return this.getRuleContext(0, ExpressionContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_argExpression
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterArgExpression) {
      listener.enterArgExpression(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitArgExpression) {
      listener.exitArgExpression(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitArgExpression) {
      return visitor.visitArgExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class NamedArgumentExpressionContext extends antlr.ParserRuleContext {
  public id(): IdContext {
    return this.getRuleContext(0, IdContext)!
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)!
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_namedArgumentExpression
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterNamedArgumentExpression) {
      listener.enterNamedArgumentExpression(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitNamedArgumentExpression) {
      listener.exitNamedArgumentExpression(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitNamedArgumentExpression) {
      return visitor.visitNamedArgumentExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class EvalExprContext extends antlr.ParserRuleContext {
  public EVAL(): antlr.TerminalNode {
    return this.getToken(GosuParser.EVAL, 0)!
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)!
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_evalExpr
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterEvalExpr) {
      listener.enterEvalExpr(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitEvalExpr) {
      listener.exitEvalExpr(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitEvalExpr) {
      return visitor.visitEvalExpr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class FeatureLiteralContext extends antlr.ParserRuleContext {
  public typeArguments(): TypeArgumentsContext {
    return this.getRuleContext(0, TypeArgumentsContext)!
  }
  public optionalArguments(): OptionalArgumentsContext {
    return this.getRuleContext(0, OptionalArgumentsContext)!
  }
  public id(): IdContext | null {
    return this.getRuleContext(0, IdContext)
  }
  public CONSTRUCT(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.CONSTRUCT, 0)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_featureLiteral
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterFeatureLiteral) {
      listener.enterFeatureLiteral(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitFeatureLiteral) {
      listener.exitFeatureLiteral(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitFeatureLiteral) {
      return visitor.visitFeatureLiteral(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class StandAloneDataStructureInitializationContext extends antlr.ParserRuleContext {
  public initializerExpression(): InitializerExpressionContext | null {
    return this.getRuleContext(0, InitializerExpressionContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_standAloneDataStructureInitialization
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterStandAloneDataStructureInitialization) {
      listener.enterStandAloneDataStructureInitialization(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitStandAloneDataStructureInitialization) {
      listener.exitStandAloneDataStructureInitialization(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitStandAloneDataStructureInitialization) {
      return visitor.visitStandAloneDataStructureInitialization(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class PrimaryExprContext extends antlr.ParserRuleContext {
  public indirectMemberAccess(): IndirectMemberAccessContext {
    return this.getRuleContext(0, IndirectMemberAccessContext)!
  }
  public newExpr(): NewExprContext | null {
    return this.getRuleContext(0, NewExprContext)
  }
  public thisSuperExpr(): ThisSuperExprContext | null {
    return this.getRuleContext(0, ThisSuperExprContext)
  }
  public literal(): LiteralContext | null {
    return this.getRuleContext(0, LiteralContext)
  }
  public typeLiteralExpr(): TypeLiteralExprContext | null {
    return this.getRuleContext(0, TypeLiteralExprContext)
  }
  public parenthExpr(): ParenthExprContext | null {
    return this.getRuleContext(0, ParenthExprContext)
  }
  public standAloneDataStructureInitialization(): StandAloneDataStructureInitializationContext | null {
    return this.getRuleContext(0, StandAloneDataStructureInitializationContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_primaryExpr
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterPrimaryExpr) {
      listener.enterPrimaryExpr(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitPrimaryExpr) {
      listener.exitPrimaryExpr(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitPrimaryExpr) {
      return visitor.visitPrimaryExpr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ParenthExprContext extends antlr.ParserRuleContext {
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)!
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_parenthExpr
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterParenthExpr) {
      listener.enterParenthExpr(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitParenthExpr) {
      listener.exitParenthExpr(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitParenthExpr) {
      return visitor.visitParenthExpr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class NewExprContext extends antlr.ParserRuleContext {
  public NEW(): antlr.TerminalNode {
    return this.getToken(GosuParser.NEW, 0)!
  }
  public classOrInterfaceType(): ClassOrInterfaceTypeContext | null {
    return this.getRuleContext(0, ClassOrInterfaceTypeContext)
  }
  public arguments(): ArgumentsContext | null {
    return this.getRuleContext(0, ArgumentsContext)
  }
  public arrayInitializer(): ArrayInitializerContext | null {
    return this.getRuleContext(0, ArrayInitializerContext)
  }
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext | null
  public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    }

    return this.getRuleContext(i, ExpressionContext)
  }
  public initializer(): InitializerContext | null {
    return this.getRuleContext(0, InitializerContext)
  }
  public anonymousInnerClass(): AnonymousInnerClassContext | null {
    return this.getRuleContext(0, AnonymousInnerClassContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_newExpr
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterNewExpr) {
      listener.enterNewExpr(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitNewExpr) {
      listener.exitNewExpr(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitNewExpr) {
      return visitor.visitNewExpr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class AnonymousInnerClassContext extends antlr.ParserRuleContext {
  public classMembers(): ClassMembersContext {
    return this.getRuleContext(0, ClassMembersContext)!
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_anonymousInnerClass
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterAnonymousInnerClass) {
      listener.enterAnonymousInnerClass(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitAnonymousInnerClass) {
      listener.exitAnonymousInnerClass(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitAnonymousInnerClass) {
      return visitor.visitAnonymousInnerClass(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ArrayInitializerContext extends antlr.ParserRuleContext {
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext | null
  public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    }

    return this.getRuleContext(i, ExpressionContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_arrayInitializer
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterArrayInitializer) {
      listener.enterArrayInitializer(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitArrayInitializer) {
      listener.exitArrayInitializer(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitArrayInitializer) {
      return visitor.visitArrayInitializer(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class InitializerContext extends antlr.ParserRuleContext {
  public initializerExpression(): InitializerExpressionContext | null {
    return this.getRuleContext(0, InitializerExpressionContext)
  }
  public objectInitializer(): ObjectInitializerContext | null {
    return this.getRuleContext(0, ObjectInitializerContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_initializer
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterInitializer) {
      listener.enterInitializer(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitInitializer) {
      listener.exitInitializer(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitInitializer) {
      return visitor.visitInitializer(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class InitializerExpressionContext extends antlr.ParserRuleContext {
  public mapInitializerList(): MapInitializerListContext | null {
    return this.getRuleContext(0, MapInitializerListContext)
  }
  public arrayValueList(): ArrayValueListContext | null {
    return this.getRuleContext(0, ArrayValueListContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_initializerExpression
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterInitializerExpression) {
      listener.enterInitializerExpression(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitInitializerExpression) {
      listener.exitInitializerExpression(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitInitializerExpression) {
      return visitor.visitInitializerExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ArrayValueListContext extends antlr.ParserRuleContext {
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext | null
  public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    }

    return this.getRuleContext(i, ExpressionContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_arrayValueList
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterArrayValueList) {
      listener.enterArrayValueList(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitArrayValueList) {
      listener.exitArrayValueList(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitArrayValueList) {
      return visitor.visitArrayValueList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class MapInitializerListContext extends antlr.ParserRuleContext {
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext | null
  public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    }

    return this.getRuleContext(i, ExpressionContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_mapInitializerList
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterMapInitializerList) {
      listener.enterMapInitializerList(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitMapInitializerList) {
      listener.exitMapInitializerList(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitMapInitializerList) {
      return visitor.visitMapInitializerList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ObjectInitializerContext extends antlr.ParserRuleContext {
  public initializerAssignment(): InitializerAssignmentContext[]
  public initializerAssignment(i: number): InitializerAssignmentContext | null
  public initializerAssignment(i?: number): InitializerAssignmentContext[] | InitializerAssignmentContext | null {
    if (i === undefined) {
      return this.getRuleContexts(InitializerAssignmentContext)
    }

    return this.getRuleContext(i, InitializerAssignmentContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_objectInitializer
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterObjectInitializer) {
      listener.enterObjectInitializer(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitObjectInitializer) {
      listener.exitObjectInitializer(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitObjectInitializer) {
      return visitor.visitObjectInitializer(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class InitializerAssignmentContext extends antlr.ParserRuleContext {
  public id(): IdContext {
    return this.getRuleContext(0, IdContext)!
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)!
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_initializerAssignment
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterInitializerAssignment) {
      listener.enterInitializerAssignment(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitInitializerAssignment) {
      listener.exitInitializerAssignment(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitInitializerAssignment) {
      return visitor.visitInitializerAssignment(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class IndirectMemberAccessContext extends antlr.ParserRuleContext {
  public idAll(): IdAllContext[]
  public idAll(i: number): IdAllContext | null
  public idAll(i?: number): IdAllContext[] | IdAllContext | null {
    if (i === undefined) {
      return this.getRuleContexts(IdAllContext)
    }

    return this.getRuleContext(i, IdAllContext)
  }
  public typeArguments(): TypeArgumentsContext[]
  public typeArguments(i: number): TypeArgumentsContext | null
  public typeArguments(i?: number): TypeArgumentsContext[] | TypeArgumentsContext | null {
    if (i === undefined) {
      return this.getRuleContexts(TypeArgumentsContext)
    }

    return this.getRuleContext(i, TypeArgumentsContext)
  }
  public featureLiteral(): FeatureLiteralContext[]
  public featureLiteral(i: number): FeatureLiteralContext | null
  public featureLiteral(i?: number): FeatureLiteralContext[] | FeatureLiteralContext | null {
    if (i === undefined) {
      return this.getRuleContexts(FeatureLiteralContext)
    }

    return this.getRuleContext(i, FeatureLiteralContext)
  }
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext | null
  public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    }

    return this.getRuleContext(i, ExpressionContext)
  }
  public arguments(): ArgumentsContext[]
  public arguments(i: number): ArgumentsContext | null
  public arguments(i?: number): ArgumentsContext[] | ArgumentsContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ArgumentsContext)
    }

    return this.getRuleContext(i, ArgumentsContext)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_indirectMemberAccess
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterIndirectMemberAccess) {
      listener.enterIndirectMemberAccess(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitIndirectMemberAccess) {
      listener.exitIndirectMemberAccess(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitIndirectMemberAccess) {
      return visitor.visitIndirectMemberAccess(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class LiteralContext extends antlr.ParserRuleContext {
  public numberLiteral(): NumberLiteralContext | null {
    return this.getRuleContext(0, NumberLiteralContext)
  }
  public featureLiteral(): FeatureLiteralContext | null {
    return this.getRuleContext(0, FeatureLiteralContext)
  }
  public STRING_LITERAL(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.STRING_LITERAL, 0)
  }
  public CHAR_LITERAL(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.CHAR_LITERAL, 0)
  }
  public TRUE(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.TRUE, 0)
  }
  public FALSE(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.FALSE, 0)
  }
  public NULL(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.NULL, 0)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_literal
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterLiteral) {
      listener.enterLiteral(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitLiteral) {
      listener.exitLiteral(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitLiteral) {
      return visitor.visitLiteral(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class NumberLiteralContext extends antlr.ParserRuleContext {
  public NAN(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.NAN, 0)
  }
  public INFINITY(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.INFINITY, 0)
  }
  public HEX_LITERAL(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.HEX_LITERAL, 0)
  }
  public BIN_LITERAL(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.BIN_LITERAL, 0)
  }
  public DECIMAL_LITERAL(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.DECIMAL_LITERAL, 0)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_numberLiteral
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterNumberLiteral) {
      listener.enterNumberLiteral(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitNumberLiteral) {
      listener.exitNumberLiteral(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitNumberLiteral) {
      return visitor.visitNumberLiteral(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class OrOpContext extends antlr.ParserRuleContext {
  public OR(): antlr.TerminalNode {
    return this.getToken(GosuParser.OR, 0)!
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_orOp
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterOrOp) {
      listener.enterOrOp(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitOrOp) {
      listener.exitOrOp(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitOrOp) {
      return visitor.visitOrOp(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class AndOpContext extends antlr.ParserRuleContext {
  public AND(): antlr.TerminalNode {
    return this.getToken(GosuParser.AND, 0)!
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_andOp
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterAndOp) {
      listener.enterAndOp(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitAndOp) {
      listener.exitAndOp(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitAndOp) {
      return visitor.visitAndOp(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class AssignmentOpContext extends antlr.ParserRuleContext {
  public override get ruleIndex(): number {
    return GosuParser.RULE_assignmentOp
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterAssignmentOp) {
      listener.enterAssignmentOp(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitAssignmentOp) {
      listener.exitAssignmentOp(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitAssignmentOp) {
      return visitor.visitAssignmentOp(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class IncrementOpContext extends antlr.ParserRuleContext {
  public override get ruleIndex(): number {
    return GosuParser.RULE_incrementOp
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterIncrementOp) {
      listener.enterIncrementOp(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitIncrementOp) {
      listener.exitIncrementOp(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitIncrementOp) {
      return visitor.visitIncrementOp(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class EqualityOpContext extends antlr.ParserRuleContext {
  public override get ruleIndex(): number {
    return GosuParser.RULE_equalityOp
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterEqualityOp) {
      listener.enterEqualityOp(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitEqualityOp) {
      listener.exitEqualityOp(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitEqualityOp) {
      return visitor.visitEqualityOp(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class IntervalOpContext extends antlr.ParserRuleContext {
  public override get ruleIndex(): number {
    return GosuParser.RULE_intervalOp
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterIntervalOp) {
      listener.enterIntervalOp(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitIntervalOp) {
      listener.exitIntervalOp(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitIntervalOp) {
      return visitor.visitIntervalOp(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class RelOpContext extends antlr.ParserRuleContext {
  public override get ruleIndex(): number {
    return GosuParser.RULE_relOp
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterRelOp) {
      listener.enterRelOp(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitRelOp) {
      listener.exitRelOp(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitRelOp) {
      return visitor.visitRelOp(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class BitshiftOpContext extends antlr.ParserRuleContext {
  public override get ruleIndex(): number {
    return GosuParser.RULE_bitshiftOp
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterBitshiftOp) {
      listener.enterBitshiftOp(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitBitshiftOp) {
      listener.exitBitshiftOp(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitBitshiftOp) {
      return visitor.visitBitshiftOp(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class AdditiveOpContext extends antlr.ParserRuleContext {
  public override get ruleIndex(): number {
    return GosuParser.RULE_additiveOp
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterAdditiveOp) {
      listener.enterAdditiveOp(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitAdditiveOp) {
      listener.exitAdditiveOp(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitAdditiveOp) {
      return visitor.visitAdditiveOp(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class MultiplicativeOpContext extends antlr.ParserRuleContext {
  public override get ruleIndex(): number {
    return GosuParser.RULE_multiplicativeOp
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterMultiplicativeOp) {
      listener.enterMultiplicativeOp(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitMultiplicativeOp) {
      listener.exitMultiplicativeOp(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitMultiplicativeOp) {
      return visitor.visitMultiplicativeOp(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class TypeAsOpContext extends antlr.ParserRuleContext {
  public TYPEAS(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.TYPEAS, 0)
  }
  public AS(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.AS, 0)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_typeAsOp
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterTypeAsOp) {
      listener.enterTypeAsOp(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitTypeAsOp) {
      listener.exitTypeAsOp(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitTypeAsOp) {
      return visitor.visitTypeAsOp(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class UnaryOpContext extends antlr.ParserRuleContext {
  public NOT(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.NOT, 0)
  }
  public TYPEOF(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.TYPEOF, 0)
  }
  public STATICTYPEOF(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.STATICTYPEOF, 0)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_unaryOp
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterUnaryOp) {
      listener.enterUnaryOp(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitUnaryOp) {
      listener.exitUnaryOp(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitUnaryOp) {
      return visitor.visitUnaryOp(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class IdContext extends antlr.ParserRuleContext {
  public IDENT(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.IDENT, 0)
  }
  public TRUE(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.TRUE, 0)
  }
  public FALSE(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.FALSE, 0)
  }
  public NAN(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.NAN, 0)
  }
  public INFINITY(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.INFINITY, 0)
  }
  public NULL(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.NULL, 0)
  }
  public LENGTH(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.LENGTH, 0)
  }
  public EXISTS(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.EXISTS, 0)
  }
  public STARTSWITH(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.STARTSWITH, 0)
  }
  public CONTAINS(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.CONTAINS, 0)
  }
  public WHERE(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.WHERE, 0)
  }
  public FIND(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.FIND, 0)
  }
  public AS(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.AS, 0)
  }
  public EXCEPT(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.EXCEPT, 0)
  }
  public INDEX(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.INDEX, 0)
  }
  public ITERATOR(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.ITERATOR, 0)
  }
  public GET(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.GET, 0)
  }
  public SET(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.SET, 0)
  }
  public ASSERT(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.ASSERT, 0)
  }
  public PRIVATE(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.PRIVATE, 0)
  }
  public INTERNAL(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.INTERNAL, 0)
  }
  public PROTECTED(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.PROTECTED, 0)
  }
  public PUBLIC(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.PUBLIC, 0)
  }
  public ABSTRACT(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.ABSTRACT, 0)
  }
  public HIDE(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.HIDE, 0)
  }
  public FINAL(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.FINAL, 0)
  }
  public STATIC(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.STATIC, 0)
  }
  public READONLY(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.READONLY, 0)
  }
  public OUTER(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.OUTER, 0)
  }
  public EXECUTION(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.EXECUTION, 0)
  }
  public REQUEST(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.REQUEST, 0)
  }
  public SESSION(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.SESSION, 0)
  }
  public APPLICATION(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.APPLICATION, 0)
  }
  public VOID(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.VOID, 0)
  }
  public BLOCK(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.BLOCK, 0)
  }
  public ENHANCEMENT(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.ENHANCEMENT, 0)
  }
  public CLASSPATH(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.CLASSPATH, 0)
  }
  public TYPELOADER(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.TYPELOADER, 0)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_id
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterId) {
      listener.enterId(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitId) {
      listener.exitId(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitId) {
      return visitor.visitId(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class IdclassOrInterfaceTypeContext extends antlr.ParserRuleContext {
  public IDENT(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.IDENT, 0)
  }
  public TRUE(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.TRUE, 0)
  }
  public FALSE(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.FALSE, 0)
  }
  public NAN(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.NAN, 0)
  }
  public INFINITY(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.INFINITY, 0)
  }
  public NULL(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.NULL, 0)
  }
  public LENGTH(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.LENGTH, 0)
  }
  public EXISTS(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.EXISTS, 0)
  }
  public STARTSWITH(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.STARTSWITH, 0)
  }
  public CONTAINS(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.CONTAINS, 0)
  }
  public WHERE(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.WHERE, 0)
  }
  public FIND(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.FIND, 0)
  }
  public AS(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.AS, 0)
  }
  public EXCEPT(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.EXCEPT, 0)
  }
  public INDEX(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.INDEX, 0)
  }
  public ITERATOR(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.ITERATOR, 0)
  }
  public GET(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.GET, 0)
  }
  public SET(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.SET, 0)
  }
  public ASSERT(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.ASSERT, 0)
  }
  public PRIVATE(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.PRIVATE, 0)
  }
  public INTERNAL(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.INTERNAL, 0)
  }
  public PROTECTED(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.PROTECTED, 0)
  }
  public PUBLIC(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.PUBLIC, 0)
  }
  public ABSTRACT(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.ABSTRACT, 0)
  }
  public HIDE(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.HIDE, 0)
  }
  public FINAL(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.FINAL, 0)
  }
  public STATIC(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.STATIC, 0)
  }
  public READONLY(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.READONLY, 0)
  }
  public OUTER(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.OUTER, 0)
  }
  public EXECUTION(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.EXECUTION, 0)
  }
  public REQUEST(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.REQUEST, 0)
  }
  public SESSION(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.SESSION, 0)
  }
  public APPLICATION(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.APPLICATION, 0)
  }
  public VOID(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.VOID, 0)
  }
  public ENHANCEMENT(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.ENHANCEMENT, 0)
  }
  public CLASSPATH(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.CLASSPATH, 0)
  }
  public TYPELOADER(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.TYPELOADER, 0)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_idclassOrInterfaceType
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterIdclassOrInterfaceType) {
      listener.enterIdclassOrInterfaceType(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitIdclassOrInterfaceType) {
      listener.exitIdclassOrInterfaceType(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitIdclassOrInterfaceType) {
      return visitor.visitIdclassOrInterfaceType(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class IdAllContext extends antlr.ParserRuleContext {
  public id(): IdContext | null {
    return this.getRuleContext(0, IdContext)
  }
  public AND(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.AND, 0)
  }
  public OR(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.OR, 0)
  }
  public NOT(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.NOT, 0)
  }
  public IN(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.IN, 0)
  }
  public VAR(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.VAR, 0)
  }
  public DELEGATE(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.DELEGATE, 0)
  }
  public REPRESENTS(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.REPRESENTS, 0)
  }
  public TYPEOF(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.TYPEOF, 0)
  }
  public STATICTYPEOF(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.STATICTYPEOF, 0)
  }
  public TYPEIS(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.TYPEIS, 0)
  }
  public TYPEAS(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.TYPEAS, 0)
  }
  public PACKAGE(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.PACKAGE, 0)
  }
  public USES(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.USES, 0)
  }
  public IF(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.IF, 0)
  }
  public ELSE(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.ELSE, 0)
  }
  public UNLESS(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.UNLESS, 0)
  }
  public FOREACH(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.FOREACH, 0)
  }
  public FOR(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.FOR, 0)
  }
  public WHILE(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.WHILE, 0)
  }
  public DO(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.DO, 0)
  }
  public CONTINUE(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.CONTINUE, 0)
  }
  public BREAK(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.BREAK, 0)
  }
  public RETURN(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.RETURN, 0)
  }
  public CONSTRUCT(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.CONSTRUCT, 0)
  }
  public FUNCTION(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.FUNCTION, 0)
  }
  public PROPERTY(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.PROPERTY, 0)
  }
  public TRY(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.TRY, 0)
  }
  public CATCH(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.CATCH, 0)
  }
  public FINALLY(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.FINALLY, 0)
  }
  public THROW(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.THROW, 0)
  }
  public NEW(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.NEW, 0)
  }
  public SWITCH(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.SWITCH, 0)
  }
  public CASE(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.CASE, 0)
  }
  public DEFAULT(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.DEFAULT, 0)
  }
  public EVAL(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.EVAL, 0)
  }
  public OVERRIDE(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.OVERRIDE, 0)
  }
  public EXTENDS(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.EXTENDS, 0)
  }
  public TRANSIENT(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.TRANSIENT, 0)
  }
  public IMPLEMENTS(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.IMPLEMENTS, 0)
  }
  public CLASS(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.CLASS, 0)
  }
  public INTERFACE(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.INTERFACE, 0)
  }
  public STRUCTURE(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.STRUCTURE, 0)
  }
  public ENUM(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.ENUM, 0)
  }
  public USING(): antlr.TerminalNode | null {
    return this.getToken(GosuParser.USING, 0)
  }
  public override get ruleIndex(): number {
    return GosuParser.RULE_idAll
  }
  public override enterRule(listener: GosuListener): void {
    if (listener.enterIdAll) {
      listener.enterIdAll(this)
    }
  }
  public override exitRule(listener: GosuListener): void {
    if (listener.exitIdAll) {
      listener.exitIdAll(this)
    }
  }
  public override accept<Result>(visitor: GosuVisitor<Result>): Result | null {
    if (visitor.visitIdAll) {
      return visitor.visitIdAll(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
