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
  public static readonly RULE_modifiers = 32
  public static readonly RULE_statement = 33
  public static readonly RULE_ifStatement = 34
  public static readonly RULE_tryCatchFinallyStatement = 35
  public static readonly RULE_finallyClause = 36
  public static readonly RULE_catchClause = 37
  public static readonly RULE_assertStatement = 38
  public static readonly RULE_usingStatement = 39
  public static readonly RULE_returnStatement = 40
  public static readonly RULE_whileStatement = 41
  public static readonly RULE_doWhileStatement = 42
  public static readonly RULE_switchStatement = 43
  public static readonly RULE_switchBlockStatementGroup = 44
  public static readonly RULE_throwStatement = 45
  public static readonly RULE_localVarStatement = 46
  public static readonly RULE_forEachStatement = 47
  public static readonly RULE_indexRest = 48
  public static readonly RULE_indexVar = 49
  public static readonly RULE_iteratorVar = 50
  public static readonly RULE_thisSuperExpr = 51
  public static readonly RULE_assignmentOrMethodCall = 52
  public static readonly RULE_statementBlock = 53
  public static readonly RULE_statementBlockBody = 54
  public static readonly RULE_blockTypeLiteral = 55
  public static readonly RULE_blockLiteral = 56
  public static readonly RULE_blockLiteralArg = 57
  public static readonly RULE_typeLiteral = 58
  public static readonly RULE_typeLiteralType = 59
  public static readonly RULE_typeLiteralExpr = 60
  public static readonly RULE_typeLiteralList = 61
  public static readonly RULE_type = 62
  public static readonly RULE_classOrInterfaceType = 63
  public static readonly RULE_typeArguments = 64
  public static readonly RULE_typeArgument = 65
  public static readonly RULE_expression = 66
  public static readonly RULE_conditionalExpr = 67
  public static readonly RULE_conditionalOrExpr = 68
  public static readonly RULE_conditionalAndExpr = 69
  public static readonly RULE_bitwiseOrExpr = 70
  public static readonly RULE_bitwiseXorExpr = 71
  public static readonly RULE_bitwiseAndExpr = 72
  public static readonly RULE_equalityExpr = 73
  public static readonly RULE_relationalExpr = 74
  public static readonly RULE_intervalExpr = 75
  public static readonly RULE_bitshiftExpr = 76
  public static readonly RULE_additiveExpr = 77
  public static readonly RULE_multiplicativeExpr = 78
  public static readonly RULE_typeAsExpr = 79
  public static readonly RULE_unaryExpr = 80
  public static readonly RULE_unaryExprNotPlusMinus = 81
  public static readonly RULE_blockExpr = 82
  public static readonly RULE_parameterDeclarationList = 83
  public static readonly RULE_parameterDeclaration = 84
  public static readonly RULE_annotationArguments = 85
  public static readonly RULE_arguments = 86
  public static readonly RULE_optionalArguments = 87
  public static readonly RULE_argExpression = 88
  public static readonly RULE_namedArgumentExpression = 89
  public static readonly RULE_evalExpr = 90
  public static readonly RULE_featureLiteral = 91
  public static readonly RULE_standAloneDataStructureInitialization = 92
  public static readonly RULE_primaryExpr = 93
  public static readonly RULE_parenthExpr = 94
  public static readonly RULE_newExpr = 95
  public static readonly RULE_anonymousInnerClass = 96
  public static readonly RULE_arrayInitializer = 97
  public static readonly RULE_initializer = 98
  public static readonly RULE_initializerExpression = 99
  public static readonly RULE_arrayValueList = 100
  public static readonly RULE_mapInitializerList = 101
  public static readonly RULE_objectInitializer = 102
  public static readonly RULE_initializerAssignment = 103
  public static readonly RULE_indirectMemberAccess = 104
  public static readonly RULE_literal = 105
  public static readonly RULE_numberLiteral = 106
  public static readonly RULE_orOp = 107
  public static readonly RULE_andOp = 108
  public static readonly RULE_assignmentOp = 109
  public static readonly RULE_incrementOp = 110
  public static readonly RULE_equalityOp = 111
  public static readonly RULE_intervalOp = 112
  public static readonly RULE_relOp = 113
  public static readonly RULE_bitshiftOp = 114
  public static readonly RULE_additiveOp = 115
  public static readonly RULE_multiplicativeOp = 116
  public static readonly RULE_typeAsOp = 117
  public static readonly RULE_unaryOp = 118
  public static readonly RULE_id = 119
  public static readonly RULE_idclassOrInterfaceType = 120
  public static readonly RULE_idAll = 121

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
      this.state = 244
      this.header()
      this.state = 245
      this.modifiers()
      this.state = 250
      this.errorHandler.sync(this)
      switch (this.tokenStream.LA(1)) {
        case GosuParser.CLASS:
          {
            this.state = 246
            this.gClass()
          }
          break
        case GosuParser.INTERFACE:
        case GosuParser.STRUCTURE:
          {
            this.state = 247
            this.gInterfaceOrStructure()
          }
          break
        case GosuParser.ENUM:
          {
            this.state = 248
            this.gEnum()
          }
          break
        case GosuParser.ENHANCEMENT:
          {
            this.state = 249
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
      this.state = 254
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 82) {
        this.state = 252
        this.match(GosuParser.PACKAGE)
        this.state = 253
        this.namespaceStatement()
      }

      this.state = 257
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 83) {
        this.state = 256
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
      this.state = 259
      this.match(GosuParser.T__0)
      this.state = 260
      this.idAll()
      this.state = 265
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      while (_la === 2) {
        this.state = 261
        this.match(GosuParser.T__1)
        this.state = 262
        this.idAll()
        this.state = 267
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
      }
      this.state = 269
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 14) {
        this.state = 268
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
      this.state = 271
      this.match(GosuParser.CLASS)
      this.state = 272
      this.id()
      this.state = 273
      this.typeVariableDefs()
      this.state = 276
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 107) {
        this.state = 274
        this.match(GosuParser.EXTENDS)
        this.state = 275
        this.classOrInterfaceType()
      }

      this.state = 287
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 109) {
        this.state = 278
        this.match(GosuParser.IMPLEMENTS)
        this.state = 279
        this.classOrInterfaceType()
        this.state = 284
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
        while (_la === 3) {
          this.state = 280
          this.match(GosuParser.T__2)
          this.state = 281
          this.classOrInterfaceType()
          this.state = 286
          this.errorHandler.sync(this)
          _la = this.tokenStream.LA(1)
        }
      }

      this.state = 289
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
      this.state = 291
      _la = this.tokenStream.LA(1)
      if (!(_la === 111 || _la === 112)) {
        this.errorHandler.recoverInline(this)
      } else {
        this.errorHandler.reportMatch(this)
        this.consume()
      }
      this.state = 292
      this.id()
      this.state = 293
      this.typeVariableDefs()
      this.state = 303
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 107) {
        this.state = 294
        this.match(GosuParser.EXTENDS)
        this.state = 295
        this.classOrInterfaceType()
        this.state = 300
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
        while (_la === 3) {
          this.state = 296
          this.match(GosuParser.T__2)
          this.state = 297
          this.classOrInterfaceType()
          this.state = 302
          this.errorHandler.sync(this)
          _la = this.tokenStream.LA(1)
        }
      }

      this.state = 305
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
      this.state = 307
      this.match(GosuParser.ENUM)
      this.state = 308
      this.id()
      this.state = 309
      this.typeVariableDefs()
      this.state = 319
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 109) {
        this.state = 310
        this.match(GosuParser.IMPLEMENTS)
        this.state = 311
        this.classOrInterfaceType()
        this.state = 316
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
        while (_la === 3) {
          this.state = 312
          this.match(GosuParser.T__2)
          this.state = 313
          this.classOrInterfaceType()
          this.state = 318
          this.errorHandler.sync(this)
          _la = this.tokenStream.LA(1)
        }
      }

      this.state = 321
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
      this.state = 323
      this.match(GosuParser.ENHANCEMENT)
      this.state = 324
      this.id()
      this.state = 325
      this.typeVariableDefs()
      this.state = 326
      this.match(GosuParser.T__3)
      this.state = 327
      this.classOrInterfaceType()
      this.state = 332
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      while (_la === 5) {
        this.state = 328
        this.match(GosuParser.T__4)
        this.state = 329
        this.match(GosuParser.T__5)
        this.state = 334
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
      }
      this.state = 335
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
      this.state = 337
      this.match(GosuParser.T__6)
      this.state = 338
      this.classMembers()
      this.state = 339
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
      this.state = 341
      this.match(GosuParser.T__6)
      this.state = 342
      this.enhancementMembers()
      this.state = 343
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
      this.state = 345
      this.match(GosuParser.T__6)
      this.state = 346
      this.interfaceMembers()
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
  public enumBody(): EnumBodyContext {
    const localContext = new EnumBodyContext(this.context, this.state)
    this.enterRule(localContext, 20, GosuParser.RULE_enumBody)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 349
      this.match(GosuParser.T__6)
      this.state = 351
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 13, this.context)) {
        case 1:
          {
            this.state = 350
            this.enumConstants()
          }
          break
      }
      this.state = 353
      this.classMembers()
      this.state = 354
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
      this.state = 356
      this.enumConstant()
      this.state = 361
      this.errorHandler.sync(this)
      alternative = this.interpreter.adaptivePredict(this.tokenStream, 14, this.context)
      while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
        if (alternative === 1) {
          this.state = 357
          this.match(GosuParser.T__2)
          this.state = 358
          this.enumConstant()
        }
        this.state = 363
        this.errorHandler.sync(this)
        alternative = this.interpreter.adaptivePredict(this.tokenStream, 14, this.context)
      }
      this.state = 365
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 3) {
        this.state = 364
        this.match(GosuParser.T__2)
      }

      this.state = 368
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 9) {
        this.state = 367
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
      this.state = 370
      this.id()
      this.state = 371
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
      this.state = 387
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      while (
        _la === 1 ||
        (((_la - 75) & ~0x1f) === 0 && ((1 << (_la - 75)) & 2150629377) !== 0) ||
        (((_la - 108) & ~0x1f) === 0 && ((1 << (_la - 108)) & 3187671101) !== 0) ||
        _la === 140
      ) {
        this.state = 373
        this.modifiers()
        this.state = 380
        this.errorHandler.sync(this)
        switch (this.tokenStream.LA(1)) {
          case GosuParser.FUNCTION:
            {
              this.state = 374
              this.functionDefn()
            }
            break
          case GosuParser.PROPERTY:
            {
              this.state = 375
              this.propertyDefn()
            }
            break
          case GosuParser.VAR:
            {
              this.state = 376
              this.fieldDefn()
            }
            break
          case GosuParser.CLASS:
            {
              this.state = 377
              this.gClass()
            }
            break
          case GosuParser.INTERFACE:
          case GosuParser.STRUCTURE:
            {
              this.state = 378
              this.gInterfaceOrStructure()
            }
            break
          case GosuParser.ENUM:
            {
              this.state = 379
              this.gEnum()
            }
            break
          default:
            throw new antlr.NoViableAltException(this)
        }
        this.state = 383
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
        if (_la === 9) {
          this.state = 382
          this.match(GosuParser.T__8)
        }
        this.state = 389
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
      this.state = 393
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      while (
        _la === 1 ||
        (((_la - 75) & ~0x1f) === 0 && ((1 << (_la - 75)) & 2151153667) !== 0) ||
        (((_la - 108) & ~0x1f) === 0 && ((1 << (_la - 108)) & 3187671101) !== 0) ||
        _la === 140
      ) {
        this.state = 390
        this.declaration()
        this.state = 395
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
      this.state = 396
      this.modifiers()
      this.state = 413
      this.errorHandler.sync(this)
      switch (this.tokenStream.LA(1)) {
        case GosuParser.FUNCTION:
          {
            this.state = 397
            this.functionDefn()
            this.state = 399
            this.errorHandler.sync(this)
            _la = this.tokenStream.LA(1)
            if (_la === 7) {
              this.state = 398
              this.functionBody()
            }
          }
          break
        case GosuParser.CONSTRUCT:
          {
            this.state = 401
            this.constructorDefn()
            this.state = 402
            this.functionBody()
          }
          break
        case GosuParser.PROPERTY:
          {
            this.state = 404
            this.propertyDefn()
            this.state = 406
            this.errorHandler.sync(this)
            _la = this.tokenStream.LA(1)
            if (_la === 7) {
              this.state = 405
              this.functionBody()
            }
          }
          break
        case GosuParser.VAR:
          {
            this.state = 408
            this.fieldDefn()
          }
          break
        case GosuParser.DELEGATE:
          {
            this.state = 409
            this.delegateDefn()
          }
          break
        case GosuParser.CLASS:
          {
            this.state = 410
            this.gClass()
          }
          break
        case GosuParser.INTERFACE:
        case GosuParser.STRUCTURE:
          {
            this.state = 411
            this.gInterfaceOrStructure()
          }
          break
        case GosuParser.ENUM:
          {
            this.state = 412
            this.gEnum()
          }
          break
        default:
          throw new antlr.NoViableAltException(this)
      }
      this.state = 416
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 9) {
        this.state = 415
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
      this.state = 432
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      while (
        _la === 1 ||
        (((_la - 95) & ~0x1f) === 0 && ((1 << (_la - 95)) & 10243) !== 0) ||
        (((_la - 133) & ~0x1f) === 0 && ((1 << (_la - 133)) & 223) !== 0)
      ) {
        this.state = 418
        this.modifiers()
        this.state = 425
        this.errorHandler.sync(this)
        switch (this.tokenStream.LA(1)) {
          case GosuParser.FUNCTION:
            {
              this.state = 419
              this.functionDefn()
              this.state = 420
              this.functionBody()
            }
            break
          case GosuParser.PROPERTY:
            {
              this.state = 422
              this.propertyDefn()
              this.state = 423
              this.functionBody()
            }
            break
          default:
            throw new antlr.NoViableAltException(this)
        }
        this.state = 428
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
        if (_la === 9) {
          this.state = 427
          this.match(GosuParser.T__8)
        }
        this.state = 434
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
      this.state = 435
      this.match(GosuParser.DELEGATE)
      this.state = 436
      this.id()
      this.state = 437
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
      this.state = 441
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 4) {
        this.state = 439
        this.match(GosuParser.T__3)
        this.state = 440
        this.typeLiteral()
      }

      this.state = 443
      this.match(GosuParser.REPRESENTS)
      this.state = 444
      this.typeLiteral()
      this.state = 449
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      while (_la === 3) {
        this.state = 445
        this.match(GosuParser.T__2)
        this.state = 446
        this.typeLiteral()
        this.state = 451
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
      }
      this.state = 454
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 10) {
        this.state = 452
        this.match(GosuParser.T__9)
        this.state = 453
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
      this.state = 459
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 31, this.context)) {
        case 1:
          {
            this.state = 456
            this.match(GosuParser.T__3)
            this.state = 457
            this.typeLiteral()
          }
          break
        case 2:
          {
            this.state = 458
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
      this.state = 461
      this.match(GosuParser.VAR)
      this.state = 462
      this.id()
      this.state = 463
      this.optionalType()
      this.state = 469
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 126) {
        this.state = 464
        this.match(GosuParser.AS)
        this.state = 466
        this.errorHandler.sync(this)
        switch (this.interpreter.adaptivePredict(this.tokenStream, 32, this.context)) {
          case 1:
            {
              this.state = 465
              this.match(GosuParser.READONLY)
            }
            break
        }
        this.state = 468
        this.id()
      }

      this.state = 473
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 10) {
        this.state = 471
        this.match(GosuParser.T__9)
        this.state = 472
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
      this.state = 475
      this.match(GosuParser.PROPERTY)
      this.state = 476
      _la = this.tokenStream.LA(1)
      if (!(_la === 130 || _la === 131)) {
        this.errorHandler.recoverInline(this)
      } else {
        this.errorHandler.reportMatch(this)
        this.consume()
      }
      this.state = 477
      this.id()
      this.state = 478
      this.parameters()
      this.state = 481
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 4) {
        this.state = 479
        this.match(GosuParser.T__3)
        this.state = 480
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
      this.state = 483
      this.idAll()
      this.state = 488
      this.errorHandler.sync(this)
      alternative = this.interpreter.adaptivePredict(this.tokenStream, 36, this.context)
      while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
        if (alternative === 1) {
          this.state = 484
          this.match(GosuParser.T__1)
          this.state = 485
          this.idAll()
        }
        this.state = 490
        this.errorHandler.sync(this)
        alternative = this.interpreter.adaptivePredict(this.tokenStream, 36, this.context)
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
      this.state = 491
      this.dotPathWord()
      this.state = 495
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      while (_la === 9) {
        this.state = 492
        this.match(GosuParser.T__8)
        this.state = 497
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
      this.state = 500
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      do {
        this.state = 498
        this.match(GosuParser.USES)
        this.state = 499
        this.usesStatement()
        this.state = 502
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
      this.state = 504
      this.dotPathWord()
      this.state = 507
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 2) {
        this.state = 505
        this.match(GosuParser.T__1)
        this.state = 506
        this.match(GosuParser.T__10)
      }

      this.state = 512
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      while (_la === 9) {
        this.state = 509
        this.match(GosuParser.T__8)
        this.state = 514
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
      this.state = 526
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 12) {
        this.state = 515
        this.match(GosuParser.T__11)
        this.state = 516
        this.typeVariableDefinition()
        this.state = 521
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
        while (_la === 3) {
          this.state = 517
          this.match(GosuParser.T__2)
          this.state = 518
          this.typeVariableDefinition()
          this.state = 523
          this.errorHandler.sync(this)
          _la = this.tokenStream.LA(1)
        }
        this.state = 524
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
      this.state = 528
      this.id()
      this.state = 531
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 107) {
        this.state = 529
        this.match(GosuParser.EXTENDS)
        this.state = 530
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
      this.state = 533
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
      this.state = 535
      this.match(GosuParser.T__13)
      this.state = 537
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (
        _la === 1 ||
        (((_la - 115) & ~0x1f) === 0 && ((1 << (_la - 115)) & 4294967295) !== 0) ||
        (((_la - 147) & ~0x1f) === 0 && ((1 << (_la - 147)) & 159) !== 0)
      ) {
        this.state = 536
        this.parameterDeclarationList()
      }

      this.state = 539
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
      this.state = 541
      this.match(GosuParser.FUNCTION)
      this.state = 542
      this.id()
      this.state = 543
      this.typeVariableDefs()
      this.state = 544
      this.parameters()
      this.state = 547
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 4) {
        this.state = 545
        this.match(GosuParser.T__3)
        this.state = 546
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
      this.state = 549
      this.match(GosuParser.CONSTRUCT)
      this.state = 550
      this.parameters()
      this.state = 553
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 4) {
        this.state = 551
        this.match(GosuParser.T__3)
        this.state = 552
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
  public modifiers(): ModifiersContext {
    const localContext = new ModifiersContext(this.context, this.state)
    this.enterRule(localContext, 64, GosuParser.RULE_modifiers)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 567
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      while (
        _la === 1 ||
        (((_la - 106) & ~0x1f) === 0 && ((1 << (_la - 106)) & 4160749573) !== 0) ||
        _la === 139 ||
        _la === 140
      ) {
        this.state = 565
        this.errorHandler.sync(this)
        switch (this.tokenStream.LA(1)) {
          case GosuParser.T__0:
            {
              this.state = 555
              this.annotation()
            }
            break
          case GosuParser.PRIVATE:
            {
              this.state = 556
              this.match(GosuParser.PRIVATE)
            }
            break
          case GosuParser.INTERNAL:
            {
              this.state = 557
              this.match(GosuParser.INTERNAL)
            }
            break
          case GosuParser.PROTECTED:
            {
              this.state = 558
              this.match(GosuParser.PROTECTED)
            }
            break
          case GosuParser.PUBLIC:
            {
              this.state = 559
              this.match(GosuParser.PUBLIC)
            }
            break
          case GosuParser.STATIC:
            {
              this.state = 560
              this.match(GosuParser.STATIC)
            }
            break
          case GosuParser.ABSTRACT:
            {
              this.state = 561
              this.match(GosuParser.ABSTRACT)
            }
            break
          case GosuParser.OVERRIDE:
            {
              this.state = 562
              this.match(GosuParser.OVERRIDE)
            }
            break
          case GosuParser.FINAL:
            {
              this.state = 563
              this.match(GosuParser.FINAL)
            }
            break
          case GosuParser.TRANSIENT:
            {
              this.state = 564
              this.match(GosuParser.TRANSIENT)
            }
            break
          default:
            throw new antlr.NoViableAltException(this)
        }
        this.state = 569
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
    this.enterRule(localContext, 66, GosuParser.RULE_statement)
    try {
      this.state = 594
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
            this.state = 588
            this.errorHandler.sync(this)
            switch (this.interpreter.adaptivePredict(this.tokenStream, 49, this.context)) {
              case 1:
                {
                  this.state = 570
                  this.ifStatement()
                }
                break
              case 2:
                {
                  this.state = 571
                  this.tryCatchFinallyStatement()
                }
                break
              case 3:
                {
                  this.state = 572
                  this.throwStatement()
                }
                break
              case 4:
                {
                  this.state = 573
                  this.match(GosuParser.CONTINUE)
                }
                break
              case 5:
                {
                  this.state = 574
                  this.match(GosuParser.BREAK)
                }
                break
              case 6:
                {
                  this.state = 575
                  this.returnStatement()
                }
                break
              case 7:
                {
                  this.state = 576
                  this.forEachStatement()
                }
                break
              case 8:
                {
                  this.state = 577
                  this.whileStatement()
                }
                break
              case 9:
                {
                  this.state = 578
                  this.doWhileStatement()
                }
                break
              case 10:
                {
                  this.state = 579
                  this.switchStatement()
                }
                break
              case 11:
                {
                  this.state = 580
                  this.usingStatement()
                }
                break
              case 12:
                {
                  this.state = 581
                  this.assertStatement()
                }
                break
              case 13:
                {
                  this.state = 582
                  this.match(GosuParser.FINAL)
                  this.state = 583
                  this.localVarStatement()
                }
                break
              case 14:
                {
                  this.state = 584
                  this.localVarStatement()
                }
                break
              case 15:
                {
                  this.state = 585
                  this.evalExpr()
                }
                break
              case 16:
                {
                  this.state = 586
                  this.assignmentOrMethodCall()
                }
                break
              case 17:
                {
                  this.state = 587
                  this.statementBlock()
                }
                break
            }
            this.state = 591
            this.errorHandler.sync(this)
            switch (this.interpreter.adaptivePredict(this.tokenStream, 50, this.context)) {
              case 1:
                {
                  this.state = 590
                  this.match(GosuParser.T__8)
                }
                break
            }
          }
          break
        case GosuParser.T__8:
          this.enterOuterAlt(localContext, 2)
          {
            this.state = 593
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
    this.enterRule(localContext, 68, GosuParser.RULE_ifStatement)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 596
      this.match(GosuParser.IF)
      this.state = 597
      this.match(GosuParser.T__13)
      this.state = 598
      this.expression()
      this.state = 599
      this.match(GosuParser.T__14)
      this.state = 600
      this.statement()
      this.state = 602
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 52, this.context)) {
        case 1:
          {
            this.state = 601
            this.match(GosuParser.T__8)
          }
          break
      }
      this.state = 606
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 53, this.context)) {
        case 1:
          {
            this.state = 604
            this.match(GosuParser.ELSE)
            this.state = 605
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
    this.enterRule(localContext, 70, GosuParser.RULE_tryCatchFinallyStatement)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 608
      this.match(GosuParser.TRY)
      this.state = 609
      this.statementBlock()
      this.state = 619
      this.errorHandler.sync(this)
      switch (this.tokenStream.LA(1)) {
        case GosuParser.CATCH:
          {
            this.state = 611
            this.errorHandler.sync(this)
            _la = this.tokenStream.LA(1)
            do {
              this.state = 610
              this.catchClause()
              this.state = 613
              this.errorHandler.sync(this)
              _la = this.tokenStream.LA(1)
            } while (_la === 98)
            this.state = 616
            this.errorHandler.sync(this)
            _la = this.tokenStream.LA(1)
            if (_la === 99) {
              this.state = 615
              this.finallyClause()
            }
          }
          break
        case GosuParser.FINALLY:
          {
            this.state = 618
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
    this.enterRule(localContext, 72, GosuParser.RULE_finallyClause)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 621
      this.match(GosuParser.FINALLY)
      this.state = 622
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
    this.enterRule(localContext, 74, GosuParser.RULE_catchClause)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 624
      this.match(GosuParser.CATCH)
      this.state = 625
      this.match(GosuParser.T__13)
      this.state = 627
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 75) {
        this.state = 626
        this.match(GosuParser.VAR)
      }

      this.state = 629
      this.id()
      this.state = 632
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 4) {
        this.state = 630
        this.match(GosuParser.T__3)
        this.state = 631
        this.typeLiteral()
      }

      this.state = 634
      this.match(GosuParser.T__14)
      this.state = 635
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
    this.enterRule(localContext, 76, GosuParser.RULE_assertStatement)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 637
      this.match(GosuParser.ASSERT)
      this.state = 638
      this.expression()
      this.state = 641
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 4) {
        this.state = 639
        this.match(GosuParser.T__3)
        this.state = 640
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
    this.enterRule(localContext, 78, GosuParser.RULE_usingStatement)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 643
      this.match(GosuParser.USING)
      this.state = 644
      this.match(GosuParser.T__13)
      this.state = 654
      this.errorHandler.sync(this)
      switch (this.tokenStream.LA(1)) {
        case GosuParser.VAR:
          {
            this.state = 645
            this.localVarStatement()
            this.state = 650
            this.errorHandler.sync(this)
            _la = this.tokenStream.LA(1)
            while (_la === 3) {
              this.state = 646
              this.match(GosuParser.T__2)
              this.state = 647
              this.localVarStatement()
              this.state = 652
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
            this.state = 653
            this.expression()
          }
          break
        default:
          throw new antlr.NoViableAltException(this)
      }
      this.state = 656
      this.match(GosuParser.T__14)
      this.state = 657
      this.statementBlock()
      this.state = 660
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 99) {
        this.state = 658
        this.match(GosuParser.FINALLY)
        this.state = 659
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
    this.enterRule(localContext, 80, GosuParser.RULE_returnStatement)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 662
      this.match(GosuParser.RETURN)
      this.state = 664
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 63, this.context)) {
        case 1:
          {
            this.state = 663
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
    this.enterRule(localContext, 82, GosuParser.RULE_whileStatement)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 666
      this.match(GosuParser.WHILE)
      this.state = 667
      this.match(GosuParser.T__13)
      this.state = 668
      this.expression()
      this.state = 669
      this.match(GosuParser.T__14)
      this.state = 670
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
    this.enterRule(localContext, 84, GosuParser.RULE_doWhileStatement)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 672
      this.match(GosuParser.DO)
      this.state = 673
      this.statement()
      this.state = 674
      this.match(GosuParser.WHILE)
      this.state = 675
      this.match(GosuParser.T__13)
      this.state = 676
      this.expression()
      this.state = 677
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
    this.enterRule(localContext, 86, GosuParser.RULE_switchStatement)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 679
      this.match(GosuParser.SWITCH)
      this.state = 680
      this.match(GosuParser.T__13)
      this.state = 681
      this.expression()
      this.state = 682
      this.match(GosuParser.T__14)
      this.state = 683
      this.match(GosuParser.T__6)
      this.state = 687
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      while (_la === 103 || _la === 104) {
        this.state = 684
        this.switchBlockStatementGroup()
        this.state = 689
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
      }
      this.state = 690
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
    this.enterRule(localContext, 88, GosuParser.RULE_switchBlockStatementGroup)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 698
      this.errorHandler.sync(this)
      switch (this.tokenStream.LA(1)) {
        case GosuParser.CASE:
          {
            this.state = 692
            this.match(GosuParser.CASE)
            this.state = 693
            this.expression()
            this.state = 694
            this.match(GosuParser.T__3)
          }
          break
        case GosuParser.DEFAULT:
          {
            this.state = 696
            this.match(GosuParser.DEFAULT)
            this.state = 697
            this.match(GosuParser.T__3)
          }
          break
        default:
          throw new antlr.NoViableAltException(this)
      }
      this.state = 703
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      while (
        ((_la & ~0x1f) === 0 && ((1 << _la) & 17024) !== 0) ||
        (((_la - 75) & ~0x1f) === 0 && ((1 << (_la - 75)) & 1313337857) !== 0) ||
        (((_la - 114) & ~0x1f) === 0 && ((1 << (_la - 114)) & 4294967295) !== 0) ||
        (((_la - 146) & ~0x1f) === 0 && ((1 << (_la - 146)) & 1535) !== 0)
      ) {
        this.state = 700
        this.statement()
        this.state = 705
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
    this.enterRule(localContext, 90, GosuParser.RULE_throwStatement)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 706
      this.match(GosuParser.THROW)
      this.state = 707
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
    this.enterRule(localContext, 92, GosuParser.RULE_localVarStatement)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 709
      this.match(GosuParser.VAR)
      this.state = 710
      this.id()
      this.state = 711
      this.optionalType()
      this.state = 714
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (_la === 10) {
        this.state = 712
        this.match(GosuParser.T__9)
        this.state = 713
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
    this.enterRule(localContext, 94, GosuParser.RULE_forEachStatement)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 716
      _la = this.tokenStream.LA(1)
      if (!(_la === 87 || _la === 88)) {
        this.errorHandler.recoverInline(this)
      } else {
        this.errorHandler.reportMatch(this)
        this.consume()
      }
      this.state = 717
      this.match(GosuParser.T__13)
      this.state = 731
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 71, this.context)) {
        case 1:
          {
            this.state = 718
            this.expression()
            this.state = 720
            this.errorHandler.sync(this)
            _la = this.tokenStream.LA(1)
            if (_la === 128) {
              this.state = 719
              this.indexVar()
            }
          }
          break
        case 2:
          {
            this.state = 723
            this.errorHandler.sync(this)
            _la = this.tokenStream.LA(1)
            if (_la === 75) {
              this.state = 722
              this.match(GosuParser.VAR)
            }

            this.state = 725
            this.id()
            this.state = 726
            this.match(GosuParser.IN)
            this.state = 727
            this.expression()
            this.state = 729
            this.errorHandler.sync(this)
            _la = this.tokenStream.LA(1)
            if (_la === 128 || _la === 129) {
              this.state = 728
              this.indexRest()
            }
          }
          break
      }
      this.state = 733
      this.match(GosuParser.T__14)
      this.state = 734
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
    this.enterRule(localContext, 96, GosuParser.RULE_indexRest)
    try {
      this.state = 744
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 72, this.context)) {
        case 1:
          this.enterOuterAlt(localContext, 1)
          {
            this.state = 736
            this.indexVar()
            this.state = 737
            this.iteratorVar()
          }
          break
        case 2:
          this.enterOuterAlt(localContext, 2)
          {
            this.state = 739
            this.iteratorVar()
            this.state = 740
            this.indexVar()
          }
          break
        case 3:
          this.enterOuterAlt(localContext, 3)
          {
            this.state = 742
            this.indexVar()
          }
          break
        case 4:
          this.enterOuterAlt(localContext, 4)
          {
            this.state = 743
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
    this.enterRule(localContext, 98, GosuParser.RULE_indexVar)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 746
      this.match(GosuParser.INDEX)
      this.state = 747
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
    this.enterRule(localContext, 100, GosuParser.RULE_iteratorVar)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 749
      this.match(GosuParser.ITERATOR)
      this.state = 750
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
    this.enterRule(localContext, 102, GosuParser.RULE_thisSuperExpr)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 752
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
    this.enterRule(localContext, 104, GosuParser.RULE_assignmentOrMethodCall)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 759
      this.errorHandler.sync(this)
      switch (this.tokenStream.LA(1)) {
        case GosuParser.NEW:
          {
            this.state = 754
            this.newExpr()
          }
          break
        case GosuParser.THIS:
        case GosuParser.SUPER:
          {
            this.state = 755
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
            this.state = 756
            this.typeLiteralExpr()
          }
          break
        case GosuParser.T__13:
          {
            this.state = 757
            this.parenthExpr()
          }
          break
        case GosuParser.STRING_LITERAL:
          {
            this.state = 758
            this.match(GosuParser.STRING_LITERAL)
          }
          break
        default:
          throw new antlr.NoViableAltException(this)
      }
      this.state = 761
      this.indirectMemberAccess()
      this.state = 767
      this.errorHandler.sync(this)
      switch (this.tokenStream.LA(1)) {
        case GosuParser.T__44:
        case GosuParser.T__45:
          {
            this.state = 763
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
            this.state = 764
            this.assignmentOp()
            this.state = 765
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
    this.enterRule(localContext, 106, GosuParser.RULE_statementBlock)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 769
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
    this.enterRule(localContext, 108, GosuParser.RULE_statementBlockBody)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 771
      this.match(GosuParser.T__6)
      this.state = 775
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      while (
        ((_la & ~0x1f) === 0 && ((1 << _la) & 17024) !== 0) ||
        (((_la - 75) & ~0x1f) === 0 && ((1 << (_la - 75)) & 1313337857) !== 0) ||
        (((_la - 114) & ~0x1f) === 0 && ((1 << (_la - 114)) & 4294967295) !== 0) ||
        (((_la - 146) & ~0x1f) === 0 && ((1 << (_la - 146)) & 1535) !== 0)
      ) {
        this.state = 772
        this.statement()
        this.state = 777
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
      }
      this.state = 778
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
    this.enterRule(localContext, 110, GosuParser.RULE_blockTypeLiteral)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 780
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
    this.enterRule(localContext, 112, GosuParser.RULE_blockLiteral)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 782
      this.match(GosuParser.T__13)
      this.state = 791
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (
        (((_la - 115) & ~0x1f) === 0 && ((1 << (_la - 115)) & 4294967295) !== 0) ||
        (((_la - 147) & ~0x1f) === 0 && ((1 << (_la - 147)) & 159) !== 0)
      ) {
        this.state = 783
        this.blockLiteralArg()
        this.state = 788
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
        while (_la === 3) {
          this.state = 784
          this.match(GosuParser.T__2)
          this.state = 785
          this.blockLiteralArg()
          this.state = 790
          this.errorHandler.sync(this)
          _la = this.tokenStream.LA(1)
        }
      }

      this.state = 793
      this.match(GosuParser.T__14)
      this.state = 796
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 78, this.context)) {
        case 1:
          {
            this.state = 794
            this.match(GosuParser.T__3)
            this.state = 795
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
    this.enterRule(localContext, 114, GosuParser.RULE_blockLiteralArg)
    let _la: number
    try {
      this.state = 814
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 82, this.context)) {
        case 1:
          this.enterOuterAlt(localContext, 1)
          {
            this.state = 798
            this.id()
            this.state = 802
            this.errorHandler.sync(this)
            switch (this.tokenStream.LA(1)) {
              case GosuParser.T__9:
                {
                  this.state = 799
                  this.match(GosuParser.T__9)
                  this.state = 800
                  this.expression()
                }
                break
              case GosuParser.T__13:
                {
                  this.state = 801
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
            this.state = 807
            this.errorHandler.sync(this)
            switch (this.interpreter.adaptivePredict(this.tokenStream, 80, this.context)) {
              case 1:
                {
                  this.state = 804
                  this.id()
                  this.state = 805
                  this.match(GosuParser.T__3)
                }
                break
            }
            this.state = 809
            this.typeLiteral()
            this.state = 812
            this.errorHandler.sync(this)
            _la = this.tokenStream.LA(1)
            if (_la === 10) {
              this.state = 810
              this.match(GosuParser.T__9)
              this.state = 811
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
    this.enterRule(localContext, 116, GosuParser.RULE_typeLiteral)
    try {
      let alternative: number
      this.enterOuterAlt(localContext, 1)
      this.state = 816
      this.type_()
      this.state = 821
      this.errorHandler.sync(this)
      alternative = this.interpreter.adaptivePredict(this.tokenStream, 83, this.context)
      while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
        if (alternative === 1) {
          this.state = 817
          this.match(GosuParser.T__15)
          this.state = 818
          this.type_()
        }
        this.state = 823
        this.errorHandler.sync(this)
        alternative = this.interpreter.adaptivePredict(this.tokenStream, 83, this.context)
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
    this.enterRule(localContext, 118, GosuParser.RULE_typeLiteralType)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 824
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
    this.enterRule(localContext, 120, GosuParser.RULE_typeLiteralExpr)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 826
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
    this.enterRule(localContext, 122, GosuParser.RULE_typeLiteralList)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 828
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
    this.enterRule(localContext, 124, GosuParser.RULE_type)
    try {
      let alternative: number
      this.state = 840
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
            this.state = 830
            this.classOrInterfaceType()
            this.state = 835
            this.errorHandler.sync(this)
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 84, this.context)
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
              if (alternative === 1) {
                this.state = 831
                this.match(GosuParser.T__4)
                this.state = 832
                this.match(GosuParser.T__5)
              }
              this.state = 837
              this.errorHandler.sync(this)
              alternative = this.interpreter.adaptivePredict(this.tokenStream, 84, this.context)
            }
          }
          break
        case GosuParser.BLOCK:
          this.enterOuterAlt(localContext, 2)
          {
            this.state = 838
            this.match(GosuParser.BLOCK)
            this.state = 839
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
    this.enterRule(localContext, 126, GosuParser.RULE_classOrInterfaceType)
    try {
      let alternative: number
      this.enterOuterAlt(localContext, 1)
      this.state = 842
      this.idclassOrInterfaceType()
      this.state = 843
      this.typeArguments()
      this.state = 850
      this.errorHandler.sync(this)
      alternative = this.interpreter.adaptivePredict(this.tokenStream, 86, this.context)
      while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
        if (alternative === 1) {
          this.state = 844
          this.match(GosuParser.T__1)
          this.state = 845
          this.id()
          this.state = 846
          this.typeArguments()
        }
        this.state = 852
        this.errorHandler.sync(this)
        alternative = this.interpreter.adaptivePredict(this.tokenStream, 86, this.context)
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
    this.enterRule(localContext, 128, GosuParser.RULE_typeArguments)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 864
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 88, this.context)) {
        case 1:
          {
            this.state = 853
            this.match(GosuParser.T__11)
            this.state = 854
            this.typeArgument()
            this.state = 859
            this.errorHandler.sync(this)
            _la = this.tokenStream.LA(1)
            while (_la === 3) {
              this.state = 855
              this.match(GosuParser.T__2)
              this.state = 856
              this.typeArgument()
              this.state = 861
              this.errorHandler.sync(this)
              _la = this.tokenStream.LA(1)
            }
            this.state = 862
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
    this.enterRule(localContext, 130, GosuParser.RULE_typeArgument)
    let _la: number
    try {
      this.state = 872
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
            this.state = 866
            this.typeLiteralType()
          }
          break
        case GosuParser.T__16:
          this.enterOuterAlt(localContext, 2)
          {
            this.state = 867
            this.match(GosuParser.T__16)
            this.state = 870
            this.errorHandler.sync(this)
            _la = this.tokenStream.LA(1)
            if (_la === 107 || _la === 153) {
              this.state = 868
              _la = this.tokenStream.LA(1)
              if (!(_la === 107 || _la === 153)) {
                this.errorHandler.recoverInline(this)
              } else {
                this.errorHandler.reportMatch(this)
                this.consume()
              }
              this.state = 869
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
    this.enterRule(localContext, 132, GosuParser.RULE_expression)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 874
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
    this.enterRule(localContext, 134, GosuParser.RULE_conditionalExpr)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 876
      this.conditionalOrExpr()
      this.state = 884
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 91, this.context)) {
        case 1:
          {
            this.state = 877
            this.match(GosuParser.T__16)
            this.state = 878
            this.conditionalExpr()
            this.state = 879
            this.match(GosuParser.T__3)
            this.state = 880
            this.conditionalExpr()
          }
          break
        case 2:
          {
            this.state = 882
            this.match(GosuParser.T__17)
            this.state = 883
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
    this.enterRule(localContext, 136, GosuParser.RULE_conditionalOrExpr)
    try {
      let alternative: number
      this.enterOuterAlt(localContext, 1)
      this.state = 886
      this.conditionalAndExpr()
      this.state = 892
      this.errorHandler.sync(this)
      alternative = this.interpreter.adaptivePredict(this.tokenStream, 92, this.context)
      while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
        if (alternative === 1) {
          this.state = 887
          this.orOp()
          this.state = 888
          this.conditionalAndExpr()
        }
        this.state = 894
        this.errorHandler.sync(this)
        alternative = this.interpreter.adaptivePredict(this.tokenStream, 92, this.context)
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
    this.enterRule(localContext, 138, GosuParser.RULE_conditionalAndExpr)
    try {
      let alternative: number
      this.enterOuterAlt(localContext, 1)
      this.state = 895
      this.bitwiseOrExpr()
      this.state = 901
      this.errorHandler.sync(this)
      alternative = this.interpreter.adaptivePredict(this.tokenStream, 93, this.context)
      while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
        if (alternative === 1) {
          this.state = 896
          this.andOp()
          this.state = 897
          this.bitwiseOrExpr()
        }
        this.state = 903
        this.errorHandler.sync(this)
        alternative = this.interpreter.adaptivePredict(this.tokenStream, 93, this.context)
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
    this.enterRule(localContext, 140, GosuParser.RULE_bitwiseOrExpr)
    try {
      let alternative: number
      this.enterOuterAlt(localContext, 1)
      this.state = 904
      this.bitwiseXorExpr()
      this.state = 909
      this.errorHandler.sync(this)
      alternative = this.interpreter.adaptivePredict(this.tokenStream, 94, this.context)
      while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
        if (alternative === 1) {
          this.state = 905
          this.match(GosuParser.T__18)
          this.state = 906
          this.bitwiseXorExpr()
        }
        this.state = 911
        this.errorHandler.sync(this)
        alternative = this.interpreter.adaptivePredict(this.tokenStream, 94, this.context)
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
    this.enterRule(localContext, 142, GosuParser.RULE_bitwiseXorExpr)
    try {
      let alternative: number
      this.enterOuterAlt(localContext, 1)
      this.state = 912
      this.bitwiseAndExpr()
      this.state = 917
      this.errorHandler.sync(this)
      alternative = this.interpreter.adaptivePredict(this.tokenStream, 95, this.context)
      while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
        if (alternative === 1) {
          this.state = 913
          this.match(GosuParser.T__19)
          this.state = 914
          this.bitwiseAndExpr()
        }
        this.state = 919
        this.errorHandler.sync(this)
        alternative = this.interpreter.adaptivePredict(this.tokenStream, 95, this.context)
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
    this.enterRule(localContext, 144, GosuParser.RULE_bitwiseAndExpr)
    try {
      let alternative: number
      this.enterOuterAlt(localContext, 1)
      this.state = 920
      this.equalityExpr()
      this.state = 925
      this.errorHandler.sync(this)
      alternative = this.interpreter.adaptivePredict(this.tokenStream, 96, this.context)
      while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
        if (alternative === 1) {
          this.state = 921
          this.match(GosuParser.T__15)
          this.state = 922
          this.equalityExpr()
        }
        this.state = 927
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
  public equalityExpr(): EqualityExprContext {
    const localContext = new EqualityExprContext(this.context, this.state)
    this.enterRule(localContext, 146, GosuParser.RULE_equalityExpr)
    try {
      let alternative: number
      this.enterOuterAlt(localContext, 1)
      this.state = 928
      this.relationalExpr()
      this.state = 934
      this.errorHandler.sync(this)
      alternative = this.interpreter.adaptivePredict(this.tokenStream, 97, this.context)
      while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
        if (alternative === 1) {
          this.state = 929
          this.equalityOp()
          this.state = 930
          this.relationalExpr()
        }
        this.state = 936
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
  public relationalExpr(): RelationalExprContext {
    const localContext = new RelationalExprContext(this.context, this.state)
    this.enterRule(localContext, 148, GosuParser.RULE_relationalExpr)
    try {
      let alternative: number
      this.enterOuterAlt(localContext, 1)
      this.state = 937
      this.intervalExpr()
      this.state = 945
      this.errorHandler.sync(this)
      alternative = this.interpreter.adaptivePredict(this.tokenStream, 99, this.context)
      while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
        if (alternative === 1) {
          this.state = 943
          this.errorHandler.sync(this)
          switch (this.tokenStream.LA(1)) {
            case GosuParser.T__11:
            case GosuParser.T__12:
            case GosuParser.T__54:
            case GosuParser.T__55:
              {
                this.state = 938
                this.relOp()
                this.state = 939
                this.intervalExpr()
              }
              break
            case GosuParser.TYPEIS:
              {
                this.state = 941
                this.match(GosuParser.TYPEIS)
                this.state = 942
                this.typeLiteralType()
              }
              break
            default:
              throw new antlr.NoViableAltException(this)
          }
        }
        this.state = 947
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
  public intervalExpr(): IntervalExprContext {
    const localContext = new IntervalExprContext(this.context, this.state)
    this.enterRule(localContext, 150, GosuParser.RULE_intervalExpr)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 948
      this.bitshiftExpr()
      this.state = 952
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 100, this.context)) {
        case 1:
          {
            this.state = 949
            this.intervalOp()
            this.state = 950
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
    this.enterRule(localContext, 152, GosuParser.RULE_bitshiftExpr)
    try {
      let alternative: number
      this.enterOuterAlt(localContext, 1)
      this.state = 954
      this.additiveExpr()
      this.state = 960
      this.errorHandler.sync(this)
      alternative = this.interpreter.adaptivePredict(this.tokenStream, 101, this.context)
      while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
        if (alternative === 1) {
          this.state = 955
          this.bitshiftOp()
          this.state = 956
          this.additiveExpr()
        }
        this.state = 962
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
  public additiveExpr(): AdditiveExprContext {
    const localContext = new AdditiveExprContext(this.context, this.state)
    this.enterRule(localContext, 154, GosuParser.RULE_additiveExpr)
    try {
      let alternative: number
      this.enterOuterAlt(localContext, 1)
      this.state = 963
      this.multiplicativeExpr()
      this.state = 969
      this.errorHandler.sync(this)
      alternative = this.interpreter.adaptivePredict(this.tokenStream, 102, this.context)
      while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
        if (alternative === 1) {
          this.state = 964
          this.additiveOp()
          this.state = 965
          this.multiplicativeExpr()
        }
        this.state = 971
        this.errorHandler.sync(this)
        alternative = this.interpreter.adaptivePredict(this.tokenStream, 102, this.context)
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
    this.enterRule(localContext, 156, GosuParser.RULE_multiplicativeExpr)
    try {
      let alternative: number
      this.enterOuterAlt(localContext, 1)
      this.state = 972
      this.typeAsExpr()
      this.state = 978
      this.errorHandler.sync(this)
      alternative = this.interpreter.adaptivePredict(this.tokenStream, 103, this.context)
      while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
        if (alternative === 1) {
          this.state = 973
          this.multiplicativeOp()
          this.state = 974
          this.typeAsExpr()
        }
        this.state = 980
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
  public typeAsExpr(): TypeAsExprContext {
    const localContext = new TypeAsExprContext(this.context, this.state)
    this.enterRule(localContext, 158, GosuParser.RULE_typeAsExpr)
    try {
      let alternative: number
      this.enterOuterAlt(localContext, 1)
      this.state = 981
      this.unaryExpr()
      this.state = 987
      this.errorHandler.sync(this)
      alternative = this.interpreter.adaptivePredict(this.tokenStream, 104, this.context)
      while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
        if (alternative === 1) {
          this.state = 982
          this.typeAsOp()
          this.state = 983
          this.typeLiteral()
        }
        this.state = 989
        this.errorHandler.sync(this)
        alternative = this.interpreter.adaptivePredict(this.tokenStream, 104, this.context)
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
    this.enterRule(localContext, 160, GosuParser.RULE_unaryExpr)
    let _la: number
    try {
      this.state = 993
      this.errorHandler.sync(this)
      switch (this.tokenStream.LA(1)) {
        case GosuParser.T__20:
        case GosuParser.T__21:
        case GosuParser.T__22:
          this.enterOuterAlt(localContext, 1)
          {
            this.state = 990
            _la = this.tokenStream.LA(1)
            if (!((_la & ~0x1f) === 0 && ((1 << _la) & 14680064) !== 0)) {
              this.errorHandler.recoverInline(this)
            } else {
              this.errorHandler.reportMatch(this)
              this.consume()
            }
            this.state = 991
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
            this.state = 992
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
    this.enterRule(localContext, 162, GosuParser.RULE_unaryExprNotPlusMinus)
    try {
      this.state = 1002
      this.errorHandler.sync(this)
      switch (this.tokenStream.LA(1)) {
        case GosuParser.T__68:
        case GosuParser.T__69:
        case GosuParser.NOT:
        case GosuParser.TYPEOF:
        case GosuParser.STATICTYPEOF:
          this.enterOuterAlt(localContext, 1)
          {
            this.state = 995
            this.unaryOp()
            this.state = 996
            this.unaryExpr()
          }
          break
        case GosuParser.T__23:
          this.enterOuterAlt(localContext, 2)
          {
            this.state = 998
            this.match(GosuParser.T__23)
            this.state = 999
            this.blockExpr()
          }
          break
        case GosuParser.EVAL:
          this.enterOuterAlt(localContext, 3)
          {
            this.state = 1000
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
            this.state = 1001
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
    this.enterRule(localContext, 164, GosuParser.RULE_blockExpr)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1005
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (
        _la === 1 ||
        (((_la - 115) & ~0x1f) === 0 && ((1 << (_la - 115)) & 4294967295) !== 0) ||
        (((_la - 147) & ~0x1f) === 0 && ((1 << (_la - 147)) & 159) !== 0)
      ) {
        this.state = 1004
        this.parameterDeclarationList()
      }

      this.state = 1007
      this.match(GosuParser.T__24)
      this.state = 1010
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 108, this.context)) {
        case 1:
          {
            this.state = 1008
            this.expression()
          }
          break
        case 2:
          {
            this.state = 1009
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
    this.enterRule(localContext, 166, GosuParser.RULE_parameterDeclarationList)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1012
      this.parameterDeclaration()
      this.state = 1017
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      while (_la === 3) {
        this.state = 1013
        this.match(GosuParser.T__2)
        this.state = 1014
        this.parameterDeclaration()
        this.state = 1019
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
    this.enterRule(localContext, 168, GosuParser.RULE_parameterDeclaration)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1023
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      while (_la === 1) {
        this.state = 1020
        this.annotation()
        this.state = 1025
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
      }
      this.state = 1027
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 111, this.context)) {
        case 1:
          {
            this.state = 1026
            this.match(GosuParser.FINAL)
          }
          break
      }
      this.state = 1029
      this.id()
      this.state = 1039
      this.errorHandler.sync(this)
      switch (this.tokenStream.LA(1)) {
        case GosuParser.T__3:
          {
            this.state = 1030
            this.match(GosuParser.T__3)
            this.state = 1031
            this.typeLiteral()
            this.state = 1034
            this.errorHandler.sync(this)
            _la = this.tokenStream.LA(1)
            if (_la === 10) {
              this.state = 1032
              this.match(GosuParser.T__9)
              this.state = 1033
              this.expression()
            }
          }
          break
        case GosuParser.T__13:
          {
            this.state = 1036
            this.blockTypeLiteral()
          }
          break
        case GosuParser.T__9:
          {
            this.state = 1037
            this.match(GosuParser.T__9)
            this.state = 1038
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
    this.enterRule(localContext, 170, GosuParser.RULE_annotationArguments)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1041
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
    this.enterRule(localContext, 172, GosuParser.RULE_arguments)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1043
      this.match(GosuParser.T__13)
      this.state = 1052
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (
        ((_la & ~0x1f) === 0 && ((1 << _la) & 98582672) !== 0) ||
        (((_la - 69) & ~0x1f) === 0 && ((1 << (_la - 69)) & 1555) !== 0) ||
        (((_la - 101) & ~0x1f) === 0 && ((1 << (_la - 101)) & 4294950929) !== 0) ||
        (((_la - 133) & ~0x1f) === 0 && ((1 << (_la - 133)) & 134217727) !== 0)
      ) {
        this.state = 1044
        this.argExpression()
        this.state = 1049
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
        while (_la === 3) {
          this.state = 1045
          this.match(GosuParser.T__2)
          this.state = 1046
          this.argExpression()
          this.state = 1051
          this.errorHandler.sync(this)
          _la = this.tokenStream.LA(1)
        }
      }

      this.state = 1054
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
    this.enterRule(localContext, 174, GosuParser.RULE_optionalArguments)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1057
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 116, this.context)) {
        case 1:
          {
            this.state = 1056
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
    this.enterRule(localContext, 176, GosuParser.RULE_argExpression)
    try {
      this.state = 1061
      this.errorHandler.sync(this)
      switch (this.tokenStream.LA(1)) {
        case GosuParser.T__3:
          this.enterOuterAlt(localContext, 1)
          {
            this.state = 1059
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
            this.state = 1060
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
    this.enterRule(localContext, 178, GosuParser.RULE_namedArgumentExpression)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1063
      this.match(GosuParser.T__3)
      this.state = 1064
      this.id()
      this.state = 1065
      this.match(GosuParser.T__9)
      this.state = 1066
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
    this.enterRule(localContext, 180, GosuParser.RULE_evalExpr)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1068
      this.match(GosuParser.EVAL)
      this.state = 1069
      this.match(GosuParser.T__13)
      this.state = 1070
      this.expression()
      this.state = 1071
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
    this.enterRule(localContext, 182, GosuParser.RULE_featureLiteral)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1073
      this.match(GosuParser.T__25)
      this.state = 1076
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
            this.state = 1074
            this.id()
          }
          break
        case GosuParser.CONSTRUCT:
          {
            this.state = 1075
            this.match(GosuParser.CONSTRUCT)
          }
          break
        default:
          throw new antlr.NoViableAltException(this)
      }
      this.state = 1078
      this.typeArguments()
      this.state = 1079
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
    this.enterRule(localContext, 184, GosuParser.RULE_standAloneDataStructureInitialization)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1081
      this.match(GosuParser.T__6)
      this.state = 1083
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (
        ((_la & ~0x1f) === 0 && ((1 << _la) & 98582656) !== 0) ||
        (((_la - 69) & ~0x1f) === 0 && ((1 << (_la - 69)) & 1555) !== 0) ||
        (((_la - 101) & ~0x1f) === 0 && ((1 << (_la - 101)) & 4294950929) !== 0) ||
        (((_la - 133) & ~0x1f) === 0 && ((1 << (_la - 133)) & 134217727) !== 0)
      ) {
        this.state = 1082
        this.initializerExpression()
      }

      this.state = 1085
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
    this.enterRule(localContext, 186, GosuParser.RULE_primaryExpr)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1093
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 120, this.context)) {
        case 1:
          {
            this.state = 1087
            this.newExpr()
          }
          break
        case 2:
          {
            this.state = 1088
            this.thisSuperExpr()
          }
          break
        case 3:
          {
            this.state = 1089
            this.literal()
          }
          break
        case 4:
          {
            this.state = 1090
            this.typeLiteralExpr()
          }
          break
        case 5:
          {
            this.state = 1091
            this.parenthExpr()
          }
          break
        case 6:
          {
            this.state = 1092
            this.standAloneDataStructureInitialization()
          }
          break
      }
      this.state = 1095
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
    this.enterRule(localContext, 188, GosuParser.RULE_parenthExpr)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1097
      this.match(GosuParser.T__13)
      this.state = 1098
      this.expression()
      this.state = 1099
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
    this.enterRule(localContext, 190, GosuParser.RULE_newExpr)
    let _la: number
    try {
      let alternative: number
      this.enterOuterAlt(localContext, 1)
      this.state = 1101
      this.match(GosuParser.NEW)
      this.state = 1103
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (
        (((_la - 115) & ~0x1f) === 0 && ((1 << (_la - 115)) & 4294967295) !== 0) ||
        (((_la - 147) & ~0x1f) === 0 && ((1 << (_la - 147)) & 157) !== 0)
      ) {
        this.state = 1102
        this.classOrInterfaceType()
      }

      this.state = 1145
      this.errorHandler.sync(this)
      switch (this.tokenStream.LA(1)) {
        case GosuParser.T__13:
          {
            this.state = 1105
            this.arguments()
            this.state = 1113
            this.errorHandler.sync(this)
            switch (this.interpreter.adaptivePredict(this.tokenStream, 123, this.context)) {
              case 1:
                {
                  this.state = 1106
                  this.match(GosuParser.T__6)
                  this.state = 1109
                  this.errorHandler.sync(this)
                  switch (this.interpreter.adaptivePredict(this.tokenStream, 122, this.context)) {
                    case 1:
                      {
                        this.state = 1107
                        this.initializer()
                      }
                      break
                    case 2:
                      {
                        this.state = 1108
                        this.anonymousInnerClass()
                      }
                      break
                  }
                  this.state = 1111
                  this.match(GosuParser.T__7)
                }
                break
            }
          }
          break
        case GosuParser.T__4:
          {
            this.state = 1115
            this.match(GosuParser.T__4)
            this.state = 1143
            this.errorHandler.sync(this)
            switch (this.tokenStream.LA(1)) {
              case GosuParser.T__5:
                {
                  this.state = 1116
                  this.match(GosuParser.T__5)
                  this.state = 1121
                  this.errorHandler.sync(this)
                  _la = this.tokenStream.LA(1)
                  while (_la === 5) {
                    this.state = 1117
                    this.match(GosuParser.T__4)
                    this.state = 1118
                    this.match(GosuParser.T__5)
                    this.state = 1123
                    this.errorHandler.sync(this)
                    _la = this.tokenStream.LA(1)
                  }
                  this.state = 1124
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
                  this.state = 1125
                  this.expression()
                  this.state = 1126
                  this.match(GosuParser.T__5)
                  this.state = 1133
                  this.errorHandler.sync(this)
                  alternative = this.interpreter.adaptivePredict(this.tokenStream, 125, this.context)
                  while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                      this.state = 1127
                      this.match(GosuParser.T__4)
                      this.state = 1128
                      this.expression()
                      this.state = 1129
                      this.match(GosuParser.T__5)
                    }
                    this.state = 1135
                    this.errorHandler.sync(this)
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 125, this.context)
                  }
                  this.state = 1140
                  this.errorHandler.sync(this)
                  alternative = this.interpreter.adaptivePredict(this.tokenStream, 126, this.context)
                  while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                      this.state = 1136
                      this.match(GosuParser.T__4)
                      this.state = 1137
                      this.match(GosuParser.T__5)
                    }
                    this.state = 1142
                    this.errorHandler.sync(this)
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 126, this.context)
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
    this.enterRule(localContext, 192, GosuParser.RULE_anonymousInnerClass)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1147
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
    this.enterRule(localContext, 194, GosuParser.RULE_arrayInitializer)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1149
      this.match(GosuParser.T__6)
      this.state = 1158
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      if (
        ((_la & ~0x1f) === 0 && ((1 << _la) & 98582656) !== 0) ||
        (((_la - 69) & ~0x1f) === 0 && ((1 << (_la - 69)) & 1555) !== 0) ||
        (((_la - 101) & ~0x1f) === 0 && ((1 << (_la - 101)) & 4294950929) !== 0) ||
        (((_la - 133) & ~0x1f) === 0 && ((1 << (_la - 133)) & 134217727) !== 0)
      ) {
        this.state = 1150
        this.expression()
        this.state = 1155
        this.errorHandler.sync(this)
        _la = this.tokenStream.LA(1)
        while (_la === 3) {
          this.state = 1151
          this.match(GosuParser.T__2)
          this.state = 1152
          this.expression()
          this.state = 1157
          this.errorHandler.sync(this)
          _la = this.tokenStream.LA(1)
        }
      }

      this.state = 1160
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
    this.enterRule(localContext, 196, GosuParser.RULE_initializer)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1164
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
            this.state = 1162
            this.initializerExpression()
          }
          break
        case GosuParser.T__3:
          {
            this.state = 1163
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
    this.enterRule(localContext, 198, GosuParser.RULE_initializerExpression)
    try {
      this.state = 1168
      this.errorHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this.tokenStream, 132, this.context)) {
        case 1:
          this.enterOuterAlt(localContext, 1)
          {
            this.state = 1166
            this.mapInitializerList()
          }
          break
        case 2:
          this.enterOuterAlt(localContext, 2)
          {
            this.state = 1167
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
    this.enterRule(localContext, 200, GosuParser.RULE_arrayValueList)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1170
      this.expression()
      this.state = 1175
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      while (_la === 3) {
        this.state = 1171
        this.match(GosuParser.T__2)
        this.state = 1172
        this.expression()
        this.state = 1177
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
    this.enterRule(localContext, 202, GosuParser.RULE_mapInitializerList)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1178
      this.expression()
      this.state = 1179
      this.match(GosuParser.T__24)
      this.state = 1180
      this.expression()
      this.state = 1188
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      while (_la === 3) {
        this.state = 1181
        this.match(GosuParser.T__2)
        this.state = 1182
        this.expression()
        this.state = 1183
        this.match(GosuParser.T__24)
        this.state = 1184
        this.expression()
        this.state = 1190
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
    this.enterRule(localContext, 204, GosuParser.RULE_objectInitializer)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1191
      this.initializerAssignment()
      this.state = 1196
      this.errorHandler.sync(this)
      _la = this.tokenStream.LA(1)
      while (_la === 3) {
        this.state = 1192
        this.match(GosuParser.T__2)
        this.state = 1193
        this.initializerAssignment()
        this.state = 1198
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
    this.enterRule(localContext, 206, GosuParser.RULE_initializerAssignment)
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1199
      this.match(GosuParser.T__3)
      this.state = 1200
      this.id()
      this.state = 1201
      this.match(GosuParser.T__9)
      this.state = 1202
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
    this.enterRule(localContext, 208, GosuParser.RULE_indirectMemberAccess)
    let _la: number
    try {
      let alternative: number
      this.enterOuterAlt(localContext, 1)
      this.state = 1216
      this.errorHandler.sync(this)
      alternative = this.interpreter.adaptivePredict(this.tokenStream, 137, this.context)
      while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
        if (alternative === 1) {
          this.state = 1214
          this.errorHandler.sync(this)
          switch (this.tokenStream.LA(1)) {
            case GosuParser.T__1:
            case GosuParser.T__26:
            case GosuParser.T__27:
              {
                this.state = 1204
                _la = this.tokenStream.LA(1)
                if (!((_la & ~0x1f) === 0 && ((1 << _la) & 402653188) !== 0)) {
                  this.errorHandler.recoverInline(this)
                } else {
                  this.errorHandler.reportMatch(this)
                  this.consume()
                }
                this.state = 1205
                this.idAll()
                this.state = 1206
                this.typeArguments()
              }
              break
            case GosuParser.T__25:
              {
                this.state = 1208
                this.featureLiteral()
              }
              break
            case GosuParser.T__4:
            case GosuParser.T__28:
              {
                this.state = 1209
                _la = this.tokenStream.LA(1)
                if (!(_la === 5 || _la === 29)) {
                  this.errorHandler.recoverInline(this)
                } else {
                  this.errorHandler.reportMatch(this)
                  this.consume()
                }
                this.state = 1210
                this.expression()
                this.state = 1211
                this.match(GosuParser.T__5)
              }
              break
            case GosuParser.T__13:
              {
                this.state = 1213
                this.arguments()
              }
              break
            default:
              throw new antlr.NoViableAltException(this)
          }
        }
        this.state = 1218
        this.errorHandler.sync(this)
        alternative = this.interpreter.adaptivePredict(this.tokenStream, 137, this.context)
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
    this.enterRule(localContext, 210, GosuParser.RULE_literal)
    try {
      this.state = 1226
      this.errorHandler.sync(this)
      switch (this.tokenStream.LA(1)) {
        case GosuParser.NAN:
        case GosuParser.INFINITY:
        case GosuParser.HEX_LITERAL:
        case GosuParser.BIN_LITERAL:
        case GosuParser.DECIMAL_LITERAL:
          this.enterOuterAlt(localContext, 1)
          {
            this.state = 1219
            this.numberLiteral()
          }
          break
        case GosuParser.T__25:
          this.enterOuterAlt(localContext, 2)
          {
            this.state = 1220
            this.featureLiteral()
          }
          break
        case GosuParser.STRING_LITERAL:
          this.enterOuterAlt(localContext, 3)
          {
            this.state = 1221
            this.match(GosuParser.STRING_LITERAL)
          }
          break
        case GosuParser.CHAR_LITERAL:
          this.enterOuterAlt(localContext, 4)
          {
            this.state = 1222
            this.match(GosuParser.CHAR_LITERAL)
          }
          break
        case GosuParser.TRUE:
          this.enterOuterAlt(localContext, 5)
          {
            this.state = 1223
            this.match(GosuParser.TRUE)
          }
          break
        case GosuParser.FALSE:
          this.enterOuterAlt(localContext, 6)
          {
            this.state = 1224
            this.match(GosuParser.FALSE)
          }
          break
        case GosuParser.NULL:
          this.enterOuterAlt(localContext, 7)
          {
            this.state = 1225
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
    this.enterRule(localContext, 212, GosuParser.RULE_numberLiteral)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1228
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
    this.enterRule(localContext, 214, GosuParser.RULE_orOp)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1230
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
    this.enterRule(localContext, 216, GosuParser.RULE_andOp)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1232
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
    this.enterRule(localContext, 218, GosuParser.RULE_assignmentOp)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1234
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
    this.enterRule(localContext, 220, GosuParser.RULE_incrementOp)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1236
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
    this.enterRule(localContext, 222, GosuParser.RULE_equalityOp)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1238
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
    this.enterRule(localContext, 224, GosuParser.RULE_intervalOp)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1240
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
    this.enterRule(localContext, 226, GosuParser.RULE_relOp)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1242
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
    this.enterRule(localContext, 228, GosuParser.RULE_bitshiftOp)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1244
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
    this.enterRule(localContext, 230, GosuParser.RULE_additiveOp)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1246
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
    this.enterRule(localContext, 232, GosuParser.RULE_multiplicativeOp)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1248
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
    this.enterRule(localContext, 234, GosuParser.RULE_typeAsOp)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1250
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
    this.enterRule(localContext, 236, GosuParser.RULE_unaryOp)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1252
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
    this.enterRule(localContext, 238, GosuParser.RULE_id)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1254
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
    this.enterRule(localContext, 240, GosuParser.RULE_idclassOrInterfaceType)
    let _la: number
    try {
      this.enterOuterAlt(localContext, 1)
      this.state = 1256
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
    this.enterRule(localContext, 242, GosuParser.RULE_idAll)
    try {
      this.state = 1303
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
            this.state = 1258
            this.id()
          }
          break
        case GosuParser.AND:
          this.enterOuterAlt(localContext, 2)
          {
            this.state = 1259
            this.match(GosuParser.AND)
          }
          break
        case GosuParser.OR:
          this.enterOuterAlt(localContext, 3)
          {
            this.state = 1260
            this.match(GosuParser.OR)
          }
          break
        case GosuParser.NOT:
          this.enterOuterAlt(localContext, 4)
          {
            this.state = 1261
            this.match(GosuParser.NOT)
          }
          break
        case GosuParser.IN:
          this.enterOuterAlt(localContext, 5)
          {
            this.state = 1262
            this.match(GosuParser.IN)
          }
          break
        case GosuParser.VAR:
          this.enterOuterAlt(localContext, 6)
          {
            this.state = 1263
            this.match(GosuParser.VAR)
          }
          break
        case GosuParser.DELEGATE:
          this.enterOuterAlt(localContext, 7)
          {
            this.state = 1264
            this.match(GosuParser.DELEGATE)
          }
          break
        case GosuParser.REPRESENTS:
          this.enterOuterAlt(localContext, 8)
          {
            this.state = 1265
            this.match(GosuParser.REPRESENTS)
          }
          break
        case GosuParser.TYPEOF:
          this.enterOuterAlt(localContext, 9)
          {
            this.state = 1266
            this.match(GosuParser.TYPEOF)
          }
          break
        case GosuParser.STATICTYPEOF:
          this.enterOuterAlt(localContext, 10)
          {
            this.state = 1267
            this.match(GosuParser.STATICTYPEOF)
          }
          break
        case GosuParser.TYPEIS:
          this.enterOuterAlt(localContext, 11)
          {
            this.state = 1268
            this.match(GosuParser.TYPEIS)
          }
          break
        case GosuParser.TYPEAS:
          this.enterOuterAlt(localContext, 12)
          {
            this.state = 1269
            this.match(GosuParser.TYPEAS)
          }
          break
        case GosuParser.PACKAGE:
          this.enterOuterAlt(localContext, 13)
          {
            this.state = 1270
            this.match(GosuParser.PACKAGE)
          }
          break
        case GosuParser.USES:
          this.enterOuterAlt(localContext, 14)
          {
            this.state = 1271
            this.match(GosuParser.USES)
          }
          break
        case GosuParser.IF:
          this.enterOuterAlt(localContext, 15)
          {
            this.state = 1272
            this.match(GosuParser.IF)
          }
          break
        case GosuParser.ELSE:
          this.enterOuterAlt(localContext, 16)
          {
            this.state = 1273
            this.match(GosuParser.ELSE)
          }
          break
        case GosuParser.UNLESS:
          this.enterOuterAlt(localContext, 17)
          {
            this.state = 1274
            this.match(GosuParser.UNLESS)
          }
          break
        case GosuParser.FOREACH:
          this.enterOuterAlt(localContext, 18)
          {
            this.state = 1275
            this.match(GosuParser.FOREACH)
          }
          break
        case GosuParser.FOR:
          this.enterOuterAlt(localContext, 19)
          {
            this.state = 1276
            this.match(GosuParser.FOR)
          }
          break
        case GosuParser.WHILE:
          this.enterOuterAlt(localContext, 20)
          {
            this.state = 1277
            this.match(GosuParser.WHILE)
          }
          break
        case GosuParser.DO:
          this.enterOuterAlt(localContext, 21)
          {
            this.state = 1278
            this.match(GosuParser.DO)
          }
          break
        case GosuParser.CONTINUE:
          this.enterOuterAlt(localContext, 22)
          {
            this.state = 1279
            this.match(GosuParser.CONTINUE)
          }
          break
        case GosuParser.BREAK:
          this.enterOuterAlt(localContext, 23)
          {
            this.state = 1280
            this.match(GosuParser.BREAK)
          }
          break
        case GosuParser.RETURN:
          this.enterOuterAlt(localContext, 24)
          {
            this.state = 1281
            this.match(GosuParser.RETURN)
          }
          break
        case GosuParser.CONSTRUCT:
          this.enterOuterAlt(localContext, 25)
          {
            this.state = 1282
            this.match(GosuParser.CONSTRUCT)
          }
          break
        case GosuParser.FUNCTION:
          this.enterOuterAlt(localContext, 26)
          {
            this.state = 1283
            this.match(GosuParser.FUNCTION)
          }
          break
        case GosuParser.PROPERTY:
          this.enterOuterAlt(localContext, 27)
          {
            this.state = 1284
            this.match(GosuParser.PROPERTY)
          }
          break
        case GosuParser.TRY:
          this.enterOuterAlt(localContext, 28)
          {
            this.state = 1285
            this.match(GosuParser.TRY)
          }
          break
        case GosuParser.CATCH:
          this.enterOuterAlt(localContext, 29)
          {
            this.state = 1286
            this.match(GosuParser.CATCH)
          }
          break
        case GosuParser.FINALLY:
          this.enterOuterAlt(localContext, 30)
          {
            this.state = 1287
            this.match(GosuParser.FINALLY)
          }
          break
        case GosuParser.THROW:
          this.enterOuterAlt(localContext, 31)
          {
            this.state = 1288
            this.match(GosuParser.THROW)
          }
          break
        case GosuParser.NEW:
          this.enterOuterAlt(localContext, 32)
          {
            this.state = 1289
            this.match(GosuParser.NEW)
          }
          break
        case GosuParser.SWITCH:
          this.enterOuterAlt(localContext, 33)
          {
            this.state = 1290
            this.match(GosuParser.SWITCH)
          }
          break
        case GosuParser.CASE:
          this.enterOuterAlt(localContext, 34)
          {
            this.state = 1291
            this.match(GosuParser.CASE)
          }
          break
        case GosuParser.DEFAULT:
          this.enterOuterAlt(localContext, 35)
          {
            this.state = 1292
            this.match(GosuParser.DEFAULT)
          }
          break
        case GosuParser.EVAL:
          this.enterOuterAlt(localContext, 36)
          {
            this.state = 1293
            this.match(GosuParser.EVAL)
          }
          break
        case GosuParser.OVERRIDE:
          this.enterOuterAlt(localContext, 37)
          {
            this.state = 1294
            this.match(GosuParser.OVERRIDE)
          }
          break
        case GosuParser.EXTENDS:
          this.enterOuterAlt(localContext, 38)
          {
            this.state = 1295
            this.match(GosuParser.EXTENDS)
          }
          break
        case GosuParser.TRANSIENT:
          this.enterOuterAlt(localContext, 39)
          {
            this.state = 1296
            this.match(GosuParser.TRANSIENT)
          }
          break
        case GosuParser.IMPLEMENTS:
          this.enterOuterAlt(localContext, 40)
          {
            this.state = 1297
            this.match(GosuParser.IMPLEMENTS)
          }
          break
        case GosuParser.CLASS:
          this.enterOuterAlt(localContext, 41)
          {
            this.state = 1298
            this.match(GosuParser.CLASS)
          }
          break
        case GosuParser.INTERFACE:
          this.enterOuterAlt(localContext, 42)
          {
            this.state = 1299
            this.match(GosuParser.INTERFACE)
          }
          break
        case GosuParser.STRUCTURE:
          this.enterOuterAlt(localContext, 43)
          {
            this.state = 1300
            this.match(GosuParser.STRUCTURE)
          }
          break
        case GosuParser.ENUM:
          this.enterOuterAlt(localContext, 44)
          {
            this.state = 1301
            this.match(GosuParser.ENUM)
          }
          break
        case GosuParser.USING:
          this.enterOuterAlt(localContext, 45)
          {
            this.state = 1302
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
    4, 1, 162, 1306, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2,
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
    2, 121, 7, 121, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 3, 0, 251, 8, 0, 1, 1, 1, 1, 3, 1, 255, 8, 1, 1, 1, 3, 1, 258,
    8, 1, 1, 2, 1, 2, 1, 2, 1, 2, 5, 2, 264, 8, 2, 10, 2, 12, 2, 267, 9, 2, 1, 2, 3, 2, 270, 8, 2, 1, 3, 1, 3, 1, 3, 1,
    3, 1, 3, 3, 3, 277, 8, 3, 1, 3, 1, 3, 1, 3, 1, 3, 5, 3, 283, 8, 3, 10, 3, 12, 3, 286, 9, 3, 3, 3, 288, 8, 3, 1, 3,
    1, 3, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 5, 4, 299, 8, 4, 10, 4, 12, 4, 302, 9, 4, 3, 4, 304, 8, 4, 1, 4, 1,
    4, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 5, 5, 315, 8, 5, 10, 5, 12, 5, 318, 9, 5, 3, 5, 320, 8, 5, 1, 5, 1, 5,
    1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 5, 6, 331, 8, 6, 10, 6, 12, 6, 334, 9, 6, 1, 6, 1, 6, 1, 7, 1, 7, 1, 7, 1,
    7, 1, 8, 1, 8, 1, 8, 1, 8, 1, 9, 1, 9, 1, 9, 1, 9, 1, 10, 1, 10, 3, 10, 352, 8, 10, 1, 10, 1, 10, 1, 10, 1, 11, 1,
    11, 1, 11, 5, 11, 360, 8, 11, 10, 11, 12, 11, 363, 9, 11, 1, 11, 3, 11, 366, 8, 11, 1, 11, 3, 11, 369, 8, 11, 1, 12,
    1, 12, 1, 12, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 3, 13, 381, 8, 13, 1, 13, 3, 13, 384, 8, 13, 5, 13,
    386, 8, 13, 10, 13, 12, 13, 389, 9, 13, 1, 14, 5, 14, 392, 8, 14, 10, 14, 12, 14, 395, 9, 14, 1, 15, 1, 15, 1, 15,
    3, 15, 400, 8, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 3, 15, 407, 8, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 3, 15,
    414, 8, 15, 1, 15, 3, 15, 417, 8, 15, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 3, 16, 426, 8, 16, 1, 16, 3,
    16, 429, 8, 16, 5, 16, 431, 8, 16, 10, 16, 12, 16, 434, 9, 16, 1, 17, 1, 17, 1, 17, 1, 17, 1, 18, 1, 18, 3, 18, 442,
    8, 18, 1, 18, 1, 18, 1, 18, 1, 18, 5, 18, 448, 8, 18, 10, 18, 12, 18, 451, 9, 18, 1, 18, 1, 18, 3, 18, 455, 8, 18,
    1, 19, 1, 19, 1, 19, 3, 19, 460, 8, 19, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 3, 20, 467, 8, 20, 1, 20, 3, 20, 470, 8,
    20, 1, 20, 1, 20, 3, 20, 474, 8, 20, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 3, 21, 482, 8, 21, 1, 22, 1, 22, 1,
    22, 5, 22, 487, 8, 22, 10, 22, 12, 22, 490, 9, 22, 1, 23, 1, 23, 5, 23, 494, 8, 23, 10, 23, 12, 23, 497, 9, 23, 1,
    24, 1, 24, 4, 24, 501, 8, 24, 11, 24, 12, 24, 502, 1, 25, 1, 25, 1, 25, 3, 25, 508, 8, 25, 1, 25, 5, 25, 511, 8, 25,
    10, 25, 12, 25, 514, 9, 25, 1, 26, 1, 26, 1, 26, 1, 26, 5, 26, 520, 8, 26, 10, 26, 12, 26, 523, 9, 26, 1, 26, 1, 26,
    3, 26, 527, 8, 26, 1, 27, 1, 27, 1, 27, 3, 27, 532, 8, 27, 1, 28, 1, 28, 1, 29, 1, 29, 3, 29, 538, 8, 29, 1, 29, 1,
    29, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 3, 30, 548, 8, 30, 1, 31, 1, 31, 1, 31, 1, 31, 3, 31, 554, 8, 31, 1,
    32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 5, 32, 566, 8, 32, 10, 32, 12, 32, 569, 9, 32, 1,
    33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33,
    1, 33, 3, 33, 589, 8, 33, 1, 33, 3, 33, 592, 8, 33, 1, 33, 3, 33, 595, 8, 33, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1,
    34, 3, 34, 603, 8, 34, 1, 34, 1, 34, 3, 34, 607, 8, 34, 1, 35, 1, 35, 1, 35, 4, 35, 612, 8, 35, 11, 35, 12, 35, 613,
    1, 35, 3, 35, 617, 8, 35, 1, 35, 3, 35, 620, 8, 35, 1, 36, 1, 36, 1, 36, 1, 37, 1, 37, 1, 37, 3, 37, 628, 8, 37, 1,
    37, 1, 37, 1, 37, 3, 37, 633, 8, 37, 1, 37, 1, 37, 1, 37, 1, 38, 1, 38, 1, 38, 1, 38, 3, 38, 642, 8, 38, 1, 39, 1,
    39, 1, 39, 1, 39, 1, 39, 5, 39, 649, 8, 39, 10, 39, 12, 39, 652, 9, 39, 1, 39, 3, 39, 655, 8, 39, 1, 39, 1, 39, 1,
    39, 1, 39, 3, 39, 661, 8, 39, 1, 40, 1, 40, 3, 40, 665, 8, 40, 1, 41, 1, 41, 1, 41, 1, 41, 1, 41, 1, 41, 1, 42, 1,
    42, 1, 42, 1, 42, 1, 42, 1, 42, 1, 42, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 5, 43, 686, 8, 43, 10, 43, 12, 43,
    689, 9, 43, 1, 43, 1, 43, 1, 44, 1, 44, 1, 44, 1, 44, 1, 44, 1, 44, 3, 44, 699, 8, 44, 1, 44, 5, 44, 702, 8, 44, 10,
    44, 12, 44, 705, 9, 44, 1, 45, 1, 45, 1, 45, 1, 46, 1, 46, 1, 46, 1, 46, 1, 46, 3, 46, 715, 8, 46, 1, 47, 1, 47, 1,
    47, 1, 47, 3, 47, 721, 8, 47, 1, 47, 3, 47, 724, 8, 47, 1, 47, 1, 47, 1, 47, 1, 47, 3, 47, 730, 8, 47, 3, 47, 732,
    8, 47, 1, 47, 1, 47, 1, 47, 1, 48, 1, 48, 1, 48, 1, 48, 1, 48, 1, 48, 1, 48, 1, 48, 3, 48, 745, 8, 48, 1, 49, 1, 49,
    1, 49, 1, 50, 1, 50, 1, 50, 1, 51, 1, 51, 1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 3, 52, 760, 8, 52, 1, 52, 1, 52, 1, 52,
    1, 52, 1, 52, 1, 52, 3, 52, 768, 8, 52, 1, 53, 1, 53, 1, 54, 1, 54, 5, 54, 774, 8, 54, 10, 54, 12, 54, 777, 9, 54,
    1, 54, 1, 54, 1, 55, 1, 55, 1, 56, 1, 56, 1, 56, 1, 56, 5, 56, 787, 8, 56, 10, 56, 12, 56, 790, 9, 56, 3, 56, 792,
    8, 56, 1, 56, 1, 56, 1, 56, 3, 56, 797, 8, 56, 1, 57, 1, 57, 1, 57, 1, 57, 3, 57, 803, 8, 57, 1, 57, 1, 57, 1, 57,
    3, 57, 808, 8, 57, 1, 57, 1, 57, 1, 57, 3, 57, 813, 8, 57, 3, 57, 815, 8, 57, 1, 58, 1, 58, 1, 58, 5, 58, 820, 8,
    58, 10, 58, 12, 58, 823, 9, 58, 1, 59, 1, 59, 1, 60, 1, 60, 1, 61, 1, 61, 1, 62, 1, 62, 1, 62, 5, 62, 834, 8, 62,
    10, 62, 12, 62, 837, 9, 62, 1, 62, 1, 62, 3, 62, 841, 8, 62, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 5, 63, 849,
    8, 63, 10, 63, 12, 63, 852, 9, 63, 1, 64, 1, 64, 1, 64, 1, 64, 5, 64, 858, 8, 64, 10, 64, 12, 64, 861, 9, 64, 1, 64,
    1, 64, 3, 64, 865, 8, 64, 1, 65, 1, 65, 1, 65, 1, 65, 3, 65, 871, 8, 65, 3, 65, 873, 8, 65, 1, 66, 1, 66, 1, 67, 1,
    67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 3, 67, 885, 8, 67, 1, 68, 1, 68, 1, 68, 1, 68, 5, 68, 891, 8, 68, 10,
    68, 12, 68, 894, 9, 68, 1, 69, 1, 69, 1, 69, 1, 69, 5, 69, 900, 8, 69, 10, 69, 12, 69, 903, 9, 69, 1, 70, 1, 70, 1,
    70, 5, 70, 908, 8, 70, 10, 70, 12, 70, 911, 9, 70, 1, 71, 1, 71, 1, 71, 5, 71, 916, 8, 71, 10, 71, 12, 71, 919, 9,
    71, 1, 72, 1, 72, 1, 72, 5, 72, 924, 8, 72, 10, 72, 12, 72, 927, 9, 72, 1, 73, 1, 73, 1, 73, 1, 73, 5, 73, 933, 8,
    73, 10, 73, 12, 73, 936, 9, 73, 1, 74, 1, 74, 1, 74, 1, 74, 1, 74, 1, 74, 5, 74, 944, 8, 74, 10, 74, 12, 74, 947, 9,
    74, 1, 75, 1, 75, 1, 75, 1, 75, 3, 75, 953, 8, 75, 1, 76, 1, 76, 1, 76, 1, 76, 5, 76, 959, 8, 76, 10, 76, 12, 76,
    962, 9, 76, 1, 77, 1, 77, 1, 77, 1, 77, 5, 77, 968, 8, 77, 10, 77, 12, 77, 971, 9, 77, 1, 78, 1, 78, 1, 78, 1, 78,
    5, 78, 977, 8, 78, 10, 78, 12, 78, 980, 9, 78, 1, 79, 1, 79, 1, 79, 1, 79, 5, 79, 986, 8, 79, 10, 79, 12, 79, 989,
    9, 79, 1, 80, 1, 80, 1, 80, 3, 80, 994, 8, 80, 1, 81, 1, 81, 1, 81, 1, 81, 1, 81, 1, 81, 1, 81, 3, 81, 1003, 8, 81,
    1, 82, 3, 82, 1006, 8, 82, 1, 82, 1, 82, 1, 82, 3, 82, 1011, 8, 82, 1, 83, 1, 83, 1, 83, 5, 83, 1016, 8, 83, 10, 83,
    12, 83, 1019, 9, 83, 1, 84, 5, 84, 1022, 8, 84, 10, 84, 12, 84, 1025, 9, 84, 1, 84, 3, 84, 1028, 8, 84, 1, 84, 1,
    84, 1, 84, 1, 84, 1, 84, 3, 84, 1035, 8, 84, 1, 84, 1, 84, 1, 84, 3, 84, 1040, 8, 84, 1, 85, 1, 85, 1, 86, 1, 86, 1,
    86, 1, 86, 5, 86, 1048, 8, 86, 10, 86, 12, 86, 1051, 9, 86, 3, 86, 1053, 8, 86, 1, 86, 1, 86, 1, 87, 3, 87, 1058, 8,
    87, 1, 88, 1, 88, 3, 88, 1062, 8, 88, 1, 89, 1, 89, 1, 89, 1, 89, 1, 89, 1, 90, 1, 90, 1, 90, 1, 90, 1, 90, 1, 91,
    1, 91, 1, 91, 3, 91, 1077, 8, 91, 1, 91, 1, 91, 1, 91, 1, 92, 1, 92, 3, 92, 1084, 8, 92, 1, 92, 1, 92, 1, 93, 1, 93,
    1, 93, 1, 93, 1, 93, 1, 93, 3, 93, 1094, 8, 93, 1, 93, 1, 93, 1, 94, 1, 94, 1, 94, 1, 94, 1, 95, 1, 95, 3, 95, 1104,
    8, 95, 1, 95, 1, 95, 1, 95, 1, 95, 3, 95, 1110, 8, 95, 1, 95, 1, 95, 3, 95, 1114, 8, 95, 1, 95, 1, 95, 1, 95, 1, 95,
    5, 95, 1120, 8, 95, 10, 95, 12, 95, 1123, 9, 95, 1, 95, 1, 95, 1, 95, 1, 95, 1, 95, 1, 95, 1, 95, 5, 95, 1132, 8,
    95, 10, 95, 12, 95, 1135, 9, 95, 1, 95, 1, 95, 5, 95, 1139, 8, 95, 10, 95, 12, 95, 1142, 9, 95, 3, 95, 1144, 8, 95,
    3, 95, 1146, 8, 95, 1, 96, 1, 96, 1, 97, 1, 97, 1, 97, 1, 97, 5, 97, 1154, 8, 97, 10, 97, 12, 97, 1157, 9, 97, 3,
    97, 1159, 8, 97, 1, 97, 1, 97, 1, 98, 1, 98, 3, 98, 1165, 8, 98, 1, 99, 1, 99, 3, 99, 1169, 8, 99, 1, 100, 1, 100,
    1, 100, 5, 100, 1174, 8, 100, 10, 100, 12, 100, 1177, 9, 100, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1,
    101, 1, 101, 5, 101, 1187, 8, 101, 10, 101, 12, 101, 1190, 9, 101, 1, 102, 1, 102, 1, 102, 5, 102, 1195, 8, 102, 10,
    102, 12, 102, 1198, 9, 102, 1, 103, 1, 103, 1, 103, 1, 103, 1, 103, 1, 104, 1, 104, 1, 104, 1, 104, 1, 104, 1, 104,
    1, 104, 1, 104, 1, 104, 1, 104, 5, 104, 1215, 8, 104, 10, 104, 12, 104, 1218, 9, 104, 1, 105, 1, 105, 1, 105, 1,
    105, 1, 105, 1, 105, 1, 105, 3, 105, 1227, 8, 105, 1, 106, 1, 106, 1, 107, 1, 107, 1, 108, 1, 108, 1, 109, 1, 109,
    1, 110, 1, 110, 1, 111, 1, 111, 1, 112, 1, 112, 1, 113, 1, 113, 1, 114, 1, 114, 1, 115, 1, 115, 1, 116, 1, 116, 1,
    117, 1, 117, 1, 118, 1, 118, 1, 119, 1, 119, 1, 120, 1, 120, 1, 121, 1, 121, 1, 121, 1, 121, 1, 121, 1, 121, 1, 121,
    1, 121, 1, 121, 1, 121, 1, 121, 1, 121, 1, 121, 1, 121, 1, 121, 1, 121, 1, 121, 1, 121, 1, 121, 1, 121, 1, 121, 1,
    121, 1, 121, 1, 121, 1, 121, 1, 121, 1, 121, 1, 121, 1, 121, 1, 121, 1, 121, 1, 121, 1, 121, 1, 121, 1, 121, 1, 121,
    1, 121, 1, 121, 1, 121, 1, 121, 1, 121, 1, 121, 1, 121, 1, 121, 1, 121, 3, 121, 1304, 8, 121, 1, 121, 0, 0, 122, 0,
    2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60,
    62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114,
    116, 118, 120, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 148, 150, 152, 154, 156, 158, 160,
    162, 164, 166, 168, 170, 172, 174, 176, 178, 180, 182, 184, 186, 188, 190, 192, 194, 196, 198, 200, 202, 204, 206,
    208, 210, 212, 214, 216, 218, 220, 222, 224, 226, 228, 230, 232, 234, 236, 238, 240, 242, 0, 23, 1, 0, 111, 112, 1,
    0, 130, 131, 1, 0, 87, 88, 1, 0, 152, 153, 2, 0, 107, 107, 153, 153, 1, 0, 21, 23, 2, 0, 2, 2, 27, 28, 2, 0, 5, 5,
    29, 29, 2, 0, 117, 118, 157, 159, 2, 0, 30, 30, 72, 72, 2, 0, 31, 31, 71, 71, 2, 0, 10, 10, 32, 44, 1, 0, 45, 46, 1,
    0, 47, 50, 1, 0, 51, 54, 2, 0, 12, 13, 55, 56, 1, 0, 57, 59, 2, 0, 21, 23, 60, 62, 2, 0, 11, 11, 63, 68, 2, 0, 81,
    81, 126, 126, 3, 0, 69, 70, 73, 73, 78, 79, 2, 0, 115, 151, 154, 154, 3, 0, 115, 147, 149, 151, 154, 154, 1425, 0,
    244, 1, 0, 0, 0, 2, 254, 1, 0, 0, 0, 4, 259, 1, 0, 0, 0, 6, 271, 1, 0, 0, 0, 8, 291, 1, 0, 0, 0, 10, 307, 1, 0, 0,
    0, 12, 323, 1, 0, 0, 0, 14, 337, 1, 0, 0, 0, 16, 341, 1, 0, 0, 0, 18, 345, 1, 0, 0, 0, 20, 349, 1, 0, 0, 0, 22, 356,
    1, 0, 0, 0, 24, 370, 1, 0, 0, 0, 26, 387, 1, 0, 0, 0, 28, 393, 1, 0, 0, 0, 30, 396, 1, 0, 0, 0, 32, 432, 1, 0, 0, 0,
    34, 435, 1, 0, 0, 0, 36, 441, 1, 0, 0, 0, 38, 459, 1, 0, 0, 0, 40, 461, 1, 0, 0, 0, 42, 475, 1, 0, 0, 0, 44, 483, 1,
    0, 0, 0, 46, 491, 1, 0, 0, 0, 48, 500, 1, 0, 0, 0, 50, 504, 1, 0, 0, 0, 52, 526, 1, 0, 0, 0, 54, 528, 1, 0, 0, 0,
    56, 533, 1, 0, 0, 0, 58, 535, 1, 0, 0, 0, 60, 541, 1, 0, 0, 0, 62, 549, 1, 0, 0, 0, 64, 567, 1, 0, 0, 0, 66, 594, 1,
    0, 0, 0, 68, 596, 1, 0, 0, 0, 70, 608, 1, 0, 0, 0, 72, 621, 1, 0, 0, 0, 74, 624, 1, 0, 0, 0, 76, 637, 1, 0, 0, 0,
    78, 643, 1, 0, 0, 0, 80, 662, 1, 0, 0, 0, 82, 666, 1, 0, 0, 0, 84, 672, 1, 0, 0, 0, 86, 679, 1, 0, 0, 0, 88, 698, 1,
    0, 0, 0, 90, 706, 1, 0, 0, 0, 92, 709, 1, 0, 0, 0, 94, 716, 1, 0, 0, 0, 96, 744, 1, 0, 0, 0, 98, 746, 1, 0, 0, 0,
    100, 749, 1, 0, 0, 0, 102, 752, 1, 0, 0, 0, 104, 759, 1, 0, 0, 0, 106, 769, 1, 0, 0, 0, 108, 771, 1, 0, 0, 0, 110,
    780, 1, 0, 0, 0, 112, 782, 1, 0, 0, 0, 114, 814, 1, 0, 0, 0, 116, 816, 1, 0, 0, 0, 118, 824, 1, 0, 0, 0, 120, 826,
    1, 0, 0, 0, 122, 828, 1, 0, 0, 0, 124, 840, 1, 0, 0, 0, 126, 842, 1, 0, 0, 0, 128, 864, 1, 0, 0, 0, 130, 872, 1, 0,
    0, 0, 132, 874, 1, 0, 0, 0, 134, 876, 1, 0, 0, 0, 136, 886, 1, 0, 0, 0, 138, 895, 1, 0, 0, 0, 140, 904, 1, 0, 0, 0,
    142, 912, 1, 0, 0, 0, 144, 920, 1, 0, 0, 0, 146, 928, 1, 0, 0, 0, 148, 937, 1, 0, 0, 0, 150, 948, 1, 0, 0, 0, 152,
    954, 1, 0, 0, 0, 154, 963, 1, 0, 0, 0, 156, 972, 1, 0, 0, 0, 158, 981, 1, 0, 0, 0, 160, 993, 1, 0, 0, 0, 162, 1002,
    1, 0, 0, 0, 164, 1005, 1, 0, 0, 0, 166, 1012, 1, 0, 0, 0, 168, 1023, 1, 0, 0, 0, 170, 1041, 1, 0, 0, 0, 172, 1043,
    1, 0, 0, 0, 174, 1057, 1, 0, 0, 0, 176, 1061, 1, 0, 0, 0, 178, 1063, 1, 0, 0, 0, 180, 1068, 1, 0, 0, 0, 182, 1073,
    1, 0, 0, 0, 184, 1081, 1, 0, 0, 0, 186, 1093, 1, 0, 0, 0, 188, 1097, 1, 0, 0, 0, 190, 1101, 1, 0, 0, 0, 192, 1147,
    1, 0, 0, 0, 194, 1149, 1, 0, 0, 0, 196, 1164, 1, 0, 0, 0, 198, 1168, 1, 0, 0, 0, 200, 1170, 1, 0, 0, 0, 202, 1178,
    1, 0, 0, 0, 204, 1191, 1, 0, 0, 0, 206, 1199, 1, 0, 0, 0, 208, 1216, 1, 0, 0, 0, 210, 1226, 1, 0, 0, 0, 212, 1228,
    1, 0, 0, 0, 214, 1230, 1, 0, 0, 0, 216, 1232, 1, 0, 0, 0, 218, 1234, 1, 0, 0, 0, 220, 1236, 1, 0, 0, 0, 222, 1238,
    1, 0, 0, 0, 224, 1240, 1, 0, 0, 0, 226, 1242, 1, 0, 0, 0, 228, 1244, 1, 0, 0, 0, 230, 1246, 1, 0, 0, 0, 232, 1248,
    1, 0, 0, 0, 234, 1250, 1, 0, 0, 0, 236, 1252, 1, 0, 0, 0, 238, 1254, 1, 0, 0, 0, 240, 1256, 1, 0, 0, 0, 242, 1303,
    1, 0, 0, 0, 244, 245, 3, 2, 1, 0, 245, 250, 3, 64, 32, 0, 246, 251, 3, 6, 3, 0, 247, 251, 3, 8, 4, 0, 248, 251, 3,
    10, 5, 0, 249, 251, 3, 12, 6, 0, 250, 246, 1, 0, 0, 0, 250, 247, 1, 0, 0, 0, 250, 248, 1, 0, 0, 0, 250, 249, 1, 0,
    0, 0, 251, 1, 1, 0, 0, 0, 252, 253, 5, 82, 0, 0, 253, 255, 3, 46, 23, 0, 254, 252, 1, 0, 0, 0, 254, 255, 1, 0, 0, 0,
    255, 257, 1, 0, 0, 0, 256, 258, 3, 48, 24, 0, 257, 256, 1, 0, 0, 0, 257, 258, 1, 0, 0, 0, 258, 3, 1, 0, 0, 0, 259,
    260, 5, 1, 0, 0, 260, 265, 3, 242, 121, 0, 261, 262, 5, 2, 0, 0, 262, 264, 3, 242, 121, 0, 263, 261, 1, 0, 0, 0,
    264, 267, 1, 0, 0, 0, 265, 263, 1, 0, 0, 0, 265, 266, 1, 0, 0, 0, 266, 269, 1, 0, 0, 0, 267, 265, 1, 0, 0, 0, 268,
    270, 3, 170, 85, 0, 269, 268, 1, 0, 0, 0, 269, 270, 1, 0, 0, 0, 270, 5, 1, 0, 0, 0, 271, 272, 5, 110, 0, 0, 272,
    273, 3, 238, 119, 0, 273, 276, 3, 52, 26, 0, 274, 275, 5, 107, 0, 0, 275, 277, 3, 126, 63, 0, 276, 274, 1, 0, 0, 0,
    276, 277, 1, 0, 0, 0, 277, 287, 1, 0, 0, 0, 278, 279, 5, 109, 0, 0, 279, 284, 3, 126, 63, 0, 280, 281, 5, 3, 0, 0,
    281, 283, 3, 126, 63, 0, 282, 280, 1, 0, 0, 0, 283, 286, 1, 0, 0, 0, 284, 282, 1, 0, 0, 0, 284, 285, 1, 0, 0, 0,
    285, 288, 1, 0, 0, 0, 286, 284, 1, 0, 0, 0, 287, 278, 1, 0, 0, 0, 287, 288, 1, 0, 0, 0, 288, 289, 1, 0, 0, 0, 289,
    290, 3, 14, 7, 0, 290, 7, 1, 0, 0, 0, 291, 292, 7, 0, 0, 0, 292, 293, 3, 238, 119, 0, 293, 303, 3, 52, 26, 0, 294,
    295, 5, 107, 0, 0, 295, 300, 3, 126, 63, 0, 296, 297, 5, 3, 0, 0, 297, 299, 3, 126, 63, 0, 298, 296, 1, 0, 0, 0,
    299, 302, 1, 0, 0, 0, 300, 298, 1, 0, 0, 0, 300, 301, 1, 0, 0, 0, 301, 304, 1, 0, 0, 0, 302, 300, 1, 0, 0, 0, 303,
    294, 1, 0, 0, 0, 303, 304, 1, 0, 0, 0, 304, 305, 1, 0, 0, 0, 305, 306, 3, 18, 9, 0, 306, 9, 1, 0, 0, 0, 307, 308, 5,
    113, 0, 0, 308, 309, 3, 238, 119, 0, 309, 319, 3, 52, 26, 0, 310, 311, 5, 109, 0, 0, 311, 316, 3, 126, 63, 0, 312,
    313, 5, 3, 0, 0, 313, 315, 3, 126, 63, 0, 314, 312, 1, 0, 0, 0, 315, 318, 1, 0, 0, 0, 316, 314, 1, 0, 0, 0, 316,
    317, 1, 0, 0, 0, 317, 320, 1, 0, 0, 0, 318, 316, 1, 0, 0, 0, 319, 310, 1, 0, 0, 0, 319, 320, 1, 0, 0, 0, 320, 321,
    1, 0, 0, 0, 321, 322, 3, 20, 10, 0, 322, 11, 1, 0, 0, 0, 323, 324, 5, 149, 0, 0, 324, 325, 3, 238, 119, 0, 325, 326,
    3, 52, 26, 0, 326, 327, 5, 4, 0, 0, 327, 332, 3, 126, 63, 0, 328, 329, 5, 5, 0, 0, 329, 331, 5, 6, 0, 0, 330, 328,
    1, 0, 0, 0, 331, 334, 1, 0, 0, 0, 332, 330, 1, 0, 0, 0, 332, 333, 1, 0, 0, 0, 333, 335, 1, 0, 0, 0, 334, 332, 1, 0,
    0, 0, 335, 336, 3, 16, 8, 0, 336, 13, 1, 0, 0, 0, 337, 338, 5, 7, 0, 0, 338, 339, 3, 28, 14, 0, 339, 340, 5, 8, 0,
    0, 340, 15, 1, 0, 0, 0, 341, 342, 5, 7, 0, 0, 342, 343, 3, 32, 16, 0, 343, 344, 5, 8, 0, 0, 344, 17, 1, 0, 0, 0,
    345, 346, 5, 7, 0, 0, 346, 347, 3, 26, 13, 0, 347, 348, 5, 8, 0, 0, 348, 19, 1, 0, 0, 0, 349, 351, 5, 7, 0, 0, 350,
    352, 3, 22, 11, 0, 351, 350, 1, 0, 0, 0, 351, 352, 1, 0, 0, 0, 352, 353, 1, 0, 0, 0, 353, 354, 3, 28, 14, 0, 354,
    355, 5, 8, 0, 0, 355, 21, 1, 0, 0, 0, 356, 361, 3, 24, 12, 0, 357, 358, 5, 3, 0, 0, 358, 360, 3, 24, 12, 0, 359,
    357, 1, 0, 0, 0, 360, 363, 1, 0, 0, 0, 361, 359, 1, 0, 0, 0, 361, 362, 1, 0, 0, 0, 362, 365, 1, 0, 0, 0, 363, 361,
    1, 0, 0, 0, 364, 366, 5, 3, 0, 0, 365, 364, 1, 0, 0, 0, 365, 366, 1, 0, 0, 0, 366, 368, 1, 0, 0, 0, 367, 369, 5, 9,
    0, 0, 368, 367, 1, 0, 0, 0, 368, 369, 1, 0, 0, 0, 369, 23, 1, 0, 0, 0, 370, 371, 3, 238, 119, 0, 371, 372, 3, 174,
    87, 0, 372, 25, 1, 0, 0, 0, 373, 380, 3, 64, 32, 0, 374, 381, 3, 60, 30, 0, 375, 381, 3, 42, 21, 0, 376, 381, 3, 40,
    20, 0, 377, 381, 3, 6, 3, 0, 378, 381, 3, 8, 4, 0, 379, 381, 3, 10, 5, 0, 380, 374, 1, 0, 0, 0, 380, 375, 1, 0, 0,
    0, 380, 376, 1, 0, 0, 0, 380, 377, 1, 0, 0, 0, 380, 378, 1, 0, 0, 0, 380, 379, 1, 0, 0, 0, 381, 383, 1, 0, 0, 0,
    382, 384, 5, 9, 0, 0, 383, 382, 1, 0, 0, 0, 383, 384, 1, 0, 0, 0, 384, 386, 1, 0, 0, 0, 385, 373, 1, 0, 0, 0, 386,
    389, 1, 0, 0, 0, 387, 385, 1, 0, 0, 0, 387, 388, 1, 0, 0, 0, 388, 27, 1, 0, 0, 0, 389, 387, 1, 0, 0, 0, 390, 392, 3,
    30, 15, 0, 391, 390, 1, 0, 0, 0, 392, 395, 1, 0, 0, 0, 393, 391, 1, 0, 0, 0, 393, 394, 1, 0, 0, 0, 394, 29, 1, 0, 0,
    0, 395, 393, 1, 0, 0, 0, 396, 413, 3, 64, 32, 0, 397, 399, 3, 60, 30, 0, 398, 400, 3, 56, 28, 0, 399, 398, 1, 0, 0,
    0, 399, 400, 1, 0, 0, 0, 400, 414, 1, 0, 0, 0, 401, 402, 3, 62, 31, 0, 402, 403, 3, 56, 28, 0, 403, 414, 1, 0, 0, 0,
    404, 406, 3, 42, 21, 0, 405, 407, 3, 56, 28, 0, 406, 405, 1, 0, 0, 0, 406, 407, 1, 0, 0, 0, 407, 414, 1, 0, 0, 0,
    408, 414, 3, 40, 20, 0, 409, 414, 3, 34, 17, 0, 410, 414, 3, 6, 3, 0, 411, 414, 3, 8, 4, 0, 412, 414, 3, 10, 5, 0,
    413, 397, 1, 0, 0, 0, 413, 401, 1, 0, 0, 0, 413, 404, 1, 0, 0, 0, 413, 408, 1, 0, 0, 0, 413, 409, 1, 0, 0, 0, 413,
    410, 1, 0, 0, 0, 413, 411, 1, 0, 0, 0, 413, 412, 1, 0, 0, 0, 414, 416, 1, 0, 0, 0, 415, 417, 5, 9, 0, 0, 416, 415,
    1, 0, 0, 0, 416, 417, 1, 0, 0, 0, 417, 31, 1, 0, 0, 0, 418, 425, 3, 64, 32, 0, 419, 420, 3, 60, 30, 0, 420, 421, 3,
    56, 28, 0, 421, 426, 1, 0, 0, 0, 422, 423, 3, 42, 21, 0, 423, 424, 3, 56, 28, 0, 424, 426, 1, 0, 0, 0, 425, 419, 1,
    0, 0, 0, 425, 422, 1, 0, 0, 0, 426, 428, 1, 0, 0, 0, 427, 429, 5, 9, 0, 0, 428, 427, 1, 0, 0, 0, 428, 429, 1, 0, 0,
    0, 429, 431, 1, 0, 0, 0, 430, 418, 1, 0, 0, 0, 431, 434, 1, 0, 0, 0, 432, 430, 1, 0, 0, 0, 432, 433, 1, 0, 0, 0,
    433, 33, 1, 0, 0, 0, 434, 432, 1, 0, 0, 0, 435, 436, 5, 76, 0, 0, 436, 437, 3, 238, 119, 0, 437, 438, 3, 36, 18, 0,
    438, 35, 1, 0, 0, 0, 439, 440, 5, 4, 0, 0, 440, 442, 3, 116, 58, 0, 441, 439, 1, 0, 0, 0, 441, 442, 1, 0, 0, 0, 442,
    443, 1, 0, 0, 0, 443, 444, 5, 77, 0, 0, 444, 449, 3, 116, 58, 0, 445, 446, 5, 3, 0, 0, 446, 448, 3, 116, 58, 0, 447,
    445, 1, 0, 0, 0, 448, 451, 1, 0, 0, 0, 449, 447, 1, 0, 0, 0, 449, 450, 1, 0, 0, 0, 450, 454, 1, 0, 0, 0, 451, 449,
    1, 0, 0, 0, 452, 453, 5, 10, 0, 0, 453, 455, 3, 132, 66, 0, 454, 452, 1, 0, 0, 0, 454, 455, 1, 0, 0, 0, 455, 37, 1,
    0, 0, 0, 456, 457, 5, 4, 0, 0, 457, 460, 3, 116, 58, 0, 458, 460, 3, 110, 55, 0, 459, 456, 1, 0, 0, 0, 459, 458, 1,
    0, 0, 0, 459, 460, 1, 0, 0, 0, 460, 39, 1, 0, 0, 0, 461, 462, 5, 75, 0, 0, 462, 463, 3, 238, 119, 0, 463, 469, 3,
    38, 19, 0, 464, 466, 5, 126, 0, 0, 465, 467, 5, 141, 0, 0, 466, 465, 1, 0, 0, 0, 466, 467, 1, 0, 0, 0, 467, 468, 1,
    0, 0, 0, 468, 470, 3, 238, 119, 0, 469, 464, 1, 0, 0, 0, 469, 470, 1, 0, 0, 0, 470, 473, 1, 0, 0, 0, 471, 472, 5,
    10, 0, 0, 472, 474, 3, 132, 66, 0, 473, 471, 1, 0, 0, 0, 473, 474, 1, 0, 0, 0, 474, 41, 1, 0, 0, 0, 475, 476, 5, 96,
    0, 0, 476, 477, 7, 1, 0, 0, 477, 478, 3, 238, 119, 0, 478, 481, 3, 58, 29, 0, 479, 480, 5, 4, 0, 0, 480, 482, 3,
    116, 58, 0, 481, 479, 1, 0, 0, 0, 481, 482, 1, 0, 0, 0, 482, 43, 1, 0, 0, 0, 483, 488, 3, 242, 121, 0, 484, 485, 5,
    2, 0, 0, 485, 487, 3, 242, 121, 0, 486, 484, 1, 0, 0, 0, 487, 490, 1, 0, 0, 0, 488, 486, 1, 0, 0, 0, 488, 489, 1, 0,
    0, 0, 489, 45, 1, 0, 0, 0, 490, 488, 1, 0, 0, 0, 491, 495, 3, 44, 22, 0, 492, 494, 5, 9, 0, 0, 493, 492, 1, 0, 0, 0,
    494, 497, 1, 0, 0, 0, 495, 493, 1, 0, 0, 0, 495, 496, 1, 0, 0, 0, 496, 47, 1, 0, 0, 0, 497, 495, 1, 0, 0, 0, 498,
    499, 5, 83, 0, 0, 499, 501, 3, 50, 25, 0, 500, 498, 1, 0, 0, 0, 501, 502, 1, 0, 0, 0, 502, 500, 1, 0, 0, 0, 502,
    503, 1, 0, 0, 0, 503, 49, 1, 0, 0, 0, 504, 507, 3, 44, 22, 0, 505, 506, 5, 2, 0, 0, 506, 508, 5, 11, 0, 0, 507, 505,
    1, 0, 0, 0, 507, 508, 1, 0, 0, 0, 508, 512, 1, 0, 0, 0, 509, 511, 5, 9, 0, 0, 510, 509, 1, 0, 0, 0, 511, 514, 1, 0,
    0, 0, 512, 510, 1, 0, 0, 0, 512, 513, 1, 0, 0, 0, 513, 51, 1, 0, 0, 0, 514, 512, 1, 0, 0, 0, 515, 516, 5, 12, 0, 0,
    516, 521, 3, 54, 27, 0, 517, 518, 5, 3, 0, 0, 518, 520, 3, 54, 27, 0, 519, 517, 1, 0, 0, 0, 520, 523, 1, 0, 0, 0,
    521, 519, 1, 0, 0, 0, 521, 522, 1, 0, 0, 0, 522, 524, 1, 0, 0, 0, 523, 521, 1, 0, 0, 0, 524, 525, 5, 13, 0, 0, 525,
    527, 1, 0, 0, 0, 526, 515, 1, 0, 0, 0, 526, 527, 1, 0, 0, 0, 527, 53, 1, 0, 0, 0, 528, 531, 3, 238, 119, 0, 529,
    530, 5, 107, 0, 0, 530, 532, 3, 122, 61, 0, 531, 529, 1, 0, 0, 0, 531, 532, 1, 0, 0, 0, 532, 55, 1, 0, 0, 0, 533,
    534, 3, 106, 53, 0, 534, 57, 1, 0, 0, 0, 535, 537, 5, 14, 0, 0, 536, 538, 3, 166, 83, 0, 537, 536, 1, 0, 0, 0, 537,
    538, 1, 0, 0, 0, 538, 539, 1, 0, 0, 0, 539, 540, 5, 15, 0, 0, 540, 59, 1, 0, 0, 0, 541, 542, 5, 95, 0, 0, 542, 543,
    3, 238, 119, 0, 543, 544, 3, 52, 26, 0, 544, 547, 3, 58, 29, 0, 545, 546, 5, 4, 0, 0, 546, 548, 3, 116, 58, 0, 547,
    545, 1, 0, 0, 0, 547, 548, 1, 0, 0, 0, 548, 61, 1, 0, 0, 0, 549, 550, 5, 94, 0, 0, 550, 553, 3, 58, 29, 0, 551, 552,
    5, 4, 0, 0, 552, 554, 3, 116, 58, 0, 553, 551, 1, 0, 0, 0, 553, 554, 1, 0, 0, 0, 554, 63, 1, 0, 0, 0, 555, 566, 3,
    4, 2, 0, 556, 566, 5, 133, 0, 0, 557, 566, 5, 134, 0, 0, 558, 566, 5, 135, 0, 0, 559, 566, 5, 136, 0, 0, 560, 566,
    5, 140, 0, 0, 561, 566, 5, 137, 0, 0, 562, 566, 5, 106, 0, 0, 563, 566, 5, 139, 0, 0, 564, 566, 5, 108, 0, 0, 565,
    555, 1, 0, 0, 0, 565, 556, 1, 0, 0, 0, 565, 557, 1, 0, 0, 0, 565, 558, 1, 0, 0, 0, 565, 559, 1, 0, 0, 0, 565, 560,
    1, 0, 0, 0, 565, 561, 1, 0, 0, 0, 565, 562, 1, 0, 0, 0, 565, 563, 1, 0, 0, 0, 565, 564, 1, 0, 0, 0, 566, 569, 1, 0,
    0, 0, 567, 565, 1, 0, 0, 0, 567, 568, 1, 0, 0, 0, 568, 65, 1, 0, 0, 0, 569, 567, 1, 0, 0, 0, 570, 589, 3, 68, 34, 0,
    571, 589, 3, 70, 35, 0, 572, 589, 3, 90, 45, 0, 573, 589, 5, 91, 0, 0, 574, 589, 5, 92, 0, 0, 575, 589, 3, 80, 40,
    0, 576, 589, 3, 94, 47, 0, 577, 589, 3, 82, 41, 0, 578, 589, 3, 84, 42, 0, 579, 589, 3, 86, 43, 0, 580, 589, 3, 78,
    39, 0, 581, 589, 3, 76, 38, 0, 582, 583, 5, 139, 0, 0, 583, 589, 3, 92, 46, 0, 584, 589, 3, 92, 46, 0, 585, 589, 3,
    180, 90, 0, 586, 589, 3, 104, 52, 0, 587, 589, 3, 106, 53, 0, 588, 570, 1, 0, 0, 0, 588, 571, 1, 0, 0, 0, 588, 572,
    1, 0, 0, 0, 588, 573, 1, 0, 0, 0, 588, 574, 1, 0, 0, 0, 588, 575, 1, 0, 0, 0, 588, 576, 1, 0, 0, 0, 588, 577, 1, 0,
    0, 0, 588, 578, 1, 0, 0, 0, 588, 579, 1, 0, 0, 0, 588, 580, 1, 0, 0, 0, 588, 581, 1, 0, 0, 0, 588, 582, 1, 0, 0, 0,
    588, 584, 1, 0, 0, 0, 588, 585, 1, 0, 0, 0, 588, 586, 1, 0, 0, 0, 588, 587, 1, 0, 0, 0, 589, 591, 1, 0, 0, 0, 590,
    592, 5, 9, 0, 0, 591, 590, 1, 0, 0, 0, 591, 592, 1, 0, 0, 0, 592, 595, 1, 0, 0, 0, 593, 595, 5, 9, 0, 0, 594, 588,
    1, 0, 0, 0, 594, 593, 1, 0, 0, 0, 595, 67, 1, 0, 0, 0, 596, 597, 5, 84, 0, 0, 597, 598, 5, 14, 0, 0, 598, 599, 3,
    132, 66, 0, 599, 600, 5, 15, 0, 0, 600, 602, 3, 66, 33, 0, 601, 603, 5, 9, 0, 0, 602, 601, 1, 0, 0, 0, 602, 603, 1,
    0, 0, 0, 603, 606, 1, 0, 0, 0, 604, 605, 5, 85, 0, 0, 605, 607, 3, 66, 33, 0, 606, 604, 1, 0, 0, 0, 606, 607, 1, 0,
    0, 0, 607, 69, 1, 0, 0, 0, 608, 609, 5, 97, 0, 0, 609, 619, 3, 106, 53, 0, 610, 612, 3, 74, 37, 0, 611, 610, 1, 0,
    0, 0, 612, 613, 1, 0, 0, 0, 613, 611, 1, 0, 0, 0, 613, 614, 1, 0, 0, 0, 614, 616, 1, 0, 0, 0, 615, 617, 3, 72, 36,
    0, 616, 615, 1, 0, 0, 0, 616, 617, 1, 0, 0, 0, 617, 620, 1, 0, 0, 0, 618, 620, 3, 72, 36, 0, 619, 611, 1, 0, 0, 0,
    619, 618, 1, 0, 0, 0, 620, 71, 1, 0, 0, 0, 621, 622, 5, 99, 0, 0, 622, 623, 3, 106, 53, 0, 623, 73, 1, 0, 0, 0, 624,
    625, 5, 98, 0, 0, 625, 627, 5, 14, 0, 0, 626, 628, 5, 75, 0, 0, 627, 626, 1, 0, 0, 0, 627, 628, 1, 0, 0, 0, 628,
    629, 1, 0, 0, 0, 629, 632, 3, 238, 119, 0, 630, 631, 5, 4, 0, 0, 631, 633, 3, 116, 58, 0, 632, 630, 1, 0, 0, 0, 632,
    633, 1, 0, 0, 0, 633, 634, 1, 0, 0, 0, 634, 635, 5, 15, 0, 0, 635, 636, 3, 106, 53, 0, 636, 75, 1, 0, 0, 0, 637,
    638, 5, 132, 0, 0, 638, 641, 3, 132, 66, 0, 639, 640, 5, 4, 0, 0, 640, 642, 3, 132, 66, 0, 641, 639, 1, 0, 0, 0,
    641, 642, 1, 0, 0, 0, 642, 77, 1, 0, 0, 0, 643, 644, 5, 114, 0, 0, 644, 654, 5, 14, 0, 0, 645, 650, 3, 92, 46, 0,
    646, 647, 5, 3, 0, 0, 647, 649, 3, 92, 46, 0, 648, 646, 1, 0, 0, 0, 649, 652, 1, 0, 0, 0, 650, 648, 1, 0, 0, 0, 650,
    651, 1, 0, 0, 0, 651, 655, 1, 0, 0, 0, 652, 650, 1, 0, 0, 0, 653, 655, 3, 132, 66, 0, 654, 645, 1, 0, 0, 0, 654,
    653, 1, 0, 0, 0, 655, 656, 1, 0, 0, 0, 656, 657, 5, 15, 0, 0, 657, 660, 3, 106, 53, 0, 658, 659, 5, 99, 0, 0, 659,
    661, 3, 106, 53, 0, 660, 658, 1, 0, 0, 0, 660, 661, 1, 0, 0, 0, 661, 79, 1, 0, 0, 0, 662, 664, 5, 93, 0, 0, 663,
    665, 3, 132, 66, 0, 664, 663, 1, 0, 0, 0, 664, 665, 1, 0, 0, 0, 665, 81, 1, 0, 0, 0, 666, 667, 5, 89, 0, 0, 667,
    668, 5, 14, 0, 0, 668, 669, 3, 132, 66, 0, 669, 670, 5, 15, 0, 0, 670, 671, 3, 66, 33, 0, 671, 83, 1, 0, 0, 0, 672,
    673, 5, 90, 0, 0, 673, 674, 3, 66, 33, 0, 674, 675, 5, 89, 0, 0, 675, 676, 5, 14, 0, 0, 676, 677, 3, 132, 66, 0,
    677, 678, 5, 15, 0, 0, 678, 85, 1, 0, 0, 0, 679, 680, 5, 102, 0, 0, 680, 681, 5, 14, 0, 0, 681, 682, 3, 132, 66, 0,
    682, 683, 5, 15, 0, 0, 683, 687, 5, 7, 0, 0, 684, 686, 3, 88, 44, 0, 685, 684, 1, 0, 0, 0, 686, 689, 1, 0, 0, 0,
    687, 685, 1, 0, 0, 0, 687, 688, 1, 0, 0, 0, 688, 690, 1, 0, 0, 0, 689, 687, 1, 0, 0, 0, 690, 691, 5, 8, 0, 0, 691,
    87, 1, 0, 0, 0, 692, 693, 5, 103, 0, 0, 693, 694, 3, 132, 66, 0, 694, 695, 5, 4, 0, 0, 695, 699, 1, 0, 0, 0, 696,
    697, 5, 104, 0, 0, 697, 699, 5, 4, 0, 0, 698, 692, 1, 0, 0, 0, 698, 696, 1, 0, 0, 0, 699, 703, 1, 0, 0, 0, 700, 702,
    3, 66, 33, 0, 701, 700, 1, 0, 0, 0, 702, 705, 1, 0, 0, 0, 703, 701, 1, 0, 0, 0, 703, 704, 1, 0, 0, 0, 704, 89, 1, 0,
    0, 0, 705, 703, 1, 0, 0, 0, 706, 707, 5, 100, 0, 0, 707, 708, 3, 132, 66, 0, 708, 91, 1, 0, 0, 0, 709, 710, 5, 75,
    0, 0, 710, 711, 3, 238, 119, 0, 711, 714, 3, 38, 19, 0, 712, 713, 5, 10, 0, 0, 713, 715, 3, 132, 66, 0, 714, 712, 1,
    0, 0, 0, 714, 715, 1, 0, 0, 0, 715, 93, 1, 0, 0, 0, 716, 717, 7, 2, 0, 0, 717, 731, 5, 14, 0, 0, 718, 720, 3, 132,
    66, 0, 719, 721, 3, 98, 49, 0, 720, 719, 1, 0, 0, 0, 720, 721, 1, 0, 0, 0, 721, 732, 1, 0, 0, 0, 722, 724, 5, 75, 0,
    0, 723, 722, 1, 0, 0, 0, 723, 724, 1, 0, 0, 0, 724, 725, 1, 0, 0, 0, 725, 726, 3, 238, 119, 0, 726, 727, 5, 74, 0,
    0, 727, 729, 3, 132, 66, 0, 728, 730, 3, 96, 48, 0, 729, 728, 1, 0, 0, 0, 729, 730, 1, 0, 0, 0, 730, 732, 1, 0, 0,
    0, 731, 718, 1, 0, 0, 0, 731, 723, 1, 0, 0, 0, 732, 733, 1, 0, 0, 0, 733, 734, 5, 15, 0, 0, 734, 735, 3, 66, 33, 0,
    735, 95, 1, 0, 0, 0, 736, 737, 3, 98, 49, 0, 737, 738, 3, 100, 50, 0, 738, 745, 1, 0, 0, 0, 739, 740, 3, 100, 50, 0,
    740, 741, 3, 98, 49, 0, 741, 745, 1, 0, 0, 0, 742, 745, 3, 98, 49, 0, 743, 745, 3, 100, 50, 0, 744, 736, 1, 0, 0, 0,
    744, 739, 1, 0, 0, 0, 744, 742, 1, 0, 0, 0, 744, 743, 1, 0, 0, 0, 745, 97, 1, 0, 0, 0, 746, 747, 5, 128, 0, 0, 747,
    748, 3, 238, 119, 0, 748, 99, 1, 0, 0, 0, 749, 750, 5, 129, 0, 0, 750, 751, 3, 238, 119, 0, 751, 101, 1, 0, 0, 0,
    752, 753, 7, 3, 0, 0, 753, 103, 1, 0, 0, 0, 754, 760, 3, 190, 95, 0, 755, 760, 3, 102, 51, 0, 756, 760, 3, 120, 60,
    0, 757, 760, 3, 188, 94, 0, 758, 760, 5, 156, 0, 0, 759, 754, 1, 0, 0, 0, 759, 755, 1, 0, 0, 0, 759, 756, 1, 0, 0,
    0, 759, 757, 1, 0, 0, 0, 759, 758, 1, 0, 0, 0, 760, 761, 1, 0, 0, 0, 761, 762, 3, 208, 104, 0, 762, 767, 1, 0, 0, 0,
    763, 768, 3, 220, 110, 0, 764, 765, 3, 218, 109, 0, 765, 766, 3, 132, 66, 0, 766, 768, 1, 0, 0, 0, 767, 763, 1, 0,
    0, 0, 767, 764, 1, 0, 0, 0, 767, 768, 1, 0, 0, 0, 768, 105, 1, 0, 0, 0, 769, 770, 3, 108, 54, 0, 770, 107, 1, 0, 0,
    0, 771, 775, 5, 7, 0, 0, 772, 774, 3, 66, 33, 0, 773, 772, 1, 0, 0, 0, 774, 777, 1, 0, 0, 0, 775, 773, 1, 0, 0, 0,
    775, 776, 1, 0, 0, 0, 776, 778, 1, 0, 0, 0, 777, 775, 1, 0, 0, 0, 778, 779, 5, 8, 0, 0, 779, 109, 1, 0, 0, 0, 780,
    781, 3, 112, 56, 0, 781, 111, 1, 0, 0, 0, 782, 791, 5, 14, 0, 0, 783, 788, 3, 114, 57, 0, 784, 785, 5, 3, 0, 0, 785,
    787, 3, 114, 57, 0, 786, 784, 1, 0, 0, 0, 787, 790, 1, 0, 0, 0, 788, 786, 1, 0, 0, 0, 788, 789, 1, 0, 0, 0, 789,
    792, 1, 0, 0, 0, 790, 788, 1, 0, 0, 0, 791, 783, 1, 0, 0, 0, 791, 792, 1, 0, 0, 0, 792, 793, 1, 0, 0, 0, 793, 796,
    5, 15, 0, 0, 794, 795, 5, 4, 0, 0, 795, 797, 3, 116, 58, 0, 796, 794, 1, 0, 0, 0, 796, 797, 1, 0, 0, 0, 797, 113, 1,
    0, 0, 0, 798, 802, 3, 238, 119, 0, 799, 800, 5, 10, 0, 0, 800, 803, 3, 132, 66, 0, 801, 803, 3, 110, 55, 0, 802,
    799, 1, 0, 0, 0, 802, 801, 1, 0, 0, 0, 803, 815, 1, 0, 0, 0, 804, 805, 3, 238, 119, 0, 805, 806, 5, 4, 0, 0, 806,
    808, 1, 0, 0, 0, 807, 804, 1, 0, 0, 0, 807, 808, 1, 0, 0, 0, 808, 809, 1, 0, 0, 0, 809, 812, 3, 116, 58, 0, 810,
    811, 5, 10, 0, 0, 811, 813, 3, 132, 66, 0, 812, 810, 1, 0, 0, 0, 812, 813, 1, 0, 0, 0, 813, 815, 1, 0, 0, 0, 814,
    798, 1, 0, 0, 0, 814, 807, 1, 0, 0, 0, 815, 115, 1, 0, 0, 0, 816, 821, 3, 124, 62, 0, 817, 818, 5, 16, 0, 0, 818,
    820, 3, 124, 62, 0, 819, 817, 1, 0, 0, 0, 820, 823, 1, 0, 0, 0, 821, 819, 1, 0, 0, 0, 821, 822, 1, 0, 0, 0, 822,
    117, 1, 0, 0, 0, 823, 821, 1, 0, 0, 0, 824, 825, 3, 116, 58, 0, 825, 119, 1, 0, 0, 0, 826, 827, 3, 116, 58, 0, 827,
    121, 1, 0, 0, 0, 828, 829, 3, 116, 58, 0, 829, 123, 1, 0, 0, 0, 830, 835, 3, 126, 63, 0, 831, 832, 5, 5, 0, 0, 832,
    834, 5, 6, 0, 0, 833, 831, 1, 0, 0, 0, 834, 837, 1, 0, 0, 0, 835, 833, 1, 0, 0, 0, 835, 836, 1, 0, 0, 0, 836, 841,
    1, 0, 0, 0, 837, 835, 1, 0, 0, 0, 838, 839, 5, 148, 0, 0, 839, 841, 3, 112, 56, 0, 840, 830, 1, 0, 0, 0, 840, 838,
    1, 0, 0, 0, 841, 125, 1, 0, 0, 0, 842, 843, 3, 240, 120, 0, 843, 850, 3, 128, 64, 0, 844, 845, 5, 2, 0, 0, 845, 846,
    3, 238, 119, 0, 846, 847, 3, 128, 64, 0, 847, 849, 1, 0, 0, 0, 848, 844, 1, 0, 0, 0, 849, 852, 1, 0, 0, 0, 850, 848,
    1, 0, 0, 0, 850, 851, 1, 0, 0, 0, 851, 127, 1, 0, 0, 0, 852, 850, 1, 0, 0, 0, 853, 854, 5, 12, 0, 0, 854, 859, 3,
    130, 65, 0, 855, 856, 5, 3, 0, 0, 856, 858, 3, 130, 65, 0, 857, 855, 1, 0, 0, 0, 858, 861, 1, 0, 0, 0, 859, 857, 1,
    0, 0, 0, 859, 860, 1, 0, 0, 0, 860, 862, 1, 0, 0, 0, 861, 859, 1, 0, 0, 0, 862, 863, 5, 13, 0, 0, 863, 865, 1, 0, 0,
    0, 864, 853, 1, 0, 0, 0, 864, 865, 1, 0, 0, 0, 865, 129, 1, 0, 0, 0, 866, 873, 3, 118, 59, 0, 867, 870, 5, 17, 0, 0,
    868, 869, 7, 4, 0, 0, 869, 871, 3, 118, 59, 0, 870, 868, 1, 0, 0, 0, 870, 871, 1, 0, 0, 0, 871, 873, 1, 0, 0, 0,
    872, 866, 1, 0, 0, 0, 872, 867, 1, 0, 0, 0, 873, 131, 1, 0, 0, 0, 874, 875, 3, 134, 67, 0, 875, 133, 1, 0, 0, 0,
    876, 884, 3, 136, 68, 0, 877, 878, 5, 17, 0, 0, 878, 879, 3, 134, 67, 0, 879, 880, 5, 4, 0, 0, 880, 881, 3, 134, 67,
    0, 881, 885, 1, 0, 0, 0, 882, 883, 5, 18, 0, 0, 883, 885, 3, 134, 67, 0, 884, 877, 1, 0, 0, 0, 884, 882, 1, 0, 0, 0,
    884, 885, 1, 0, 0, 0, 885, 135, 1, 0, 0, 0, 886, 892, 3, 138, 69, 0, 887, 888, 3, 214, 107, 0, 888, 889, 3, 138, 69,
    0, 889, 891, 1, 0, 0, 0, 890, 887, 1, 0, 0, 0, 891, 894, 1, 0, 0, 0, 892, 890, 1, 0, 0, 0, 892, 893, 1, 0, 0, 0,
    893, 137, 1, 0, 0, 0, 894, 892, 1, 0, 0, 0, 895, 901, 3, 140, 70, 0, 896, 897, 3, 216, 108, 0, 897, 898, 3, 140, 70,
    0, 898, 900, 1, 0, 0, 0, 899, 896, 1, 0, 0, 0, 900, 903, 1, 0, 0, 0, 901, 899, 1, 0, 0, 0, 901, 902, 1, 0, 0, 0,
    902, 139, 1, 0, 0, 0, 903, 901, 1, 0, 0, 0, 904, 909, 3, 142, 71, 0, 905, 906, 5, 19, 0, 0, 906, 908, 3, 142, 71, 0,
    907, 905, 1, 0, 0, 0, 908, 911, 1, 0, 0, 0, 909, 907, 1, 0, 0, 0, 909, 910, 1, 0, 0, 0, 910, 141, 1, 0, 0, 0, 911,
    909, 1, 0, 0, 0, 912, 917, 3, 144, 72, 0, 913, 914, 5, 20, 0, 0, 914, 916, 3, 144, 72, 0, 915, 913, 1, 0, 0, 0, 916,
    919, 1, 0, 0, 0, 917, 915, 1, 0, 0, 0, 917, 918, 1, 0, 0, 0, 918, 143, 1, 0, 0, 0, 919, 917, 1, 0, 0, 0, 920, 925,
    3, 146, 73, 0, 921, 922, 5, 16, 0, 0, 922, 924, 3, 146, 73, 0, 923, 921, 1, 0, 0, 0, 924, 927, 1, 0, 0, 0, 925, 923,
    1, 0, 0, 0, 925, 926, 1, 0, 0, 0, 926, 145, 1, 0, 0, 0, 927, 925, 1, 0, 0, 0, 928, 934, 3, 148, 74, 0, 929, 930, 3,
    222, 111, 0, 930, 931, 3, 148, 74, 0, 931, 933, 1, 0, 0, 0, 932, 929, 1, 0, 0, 0, 933, 936, 1, 0, 0, 0, 934, 932, 1,
    0, 0, 0, 934, 935, 1, 0, 0, 0, 935, 147, 1, 0, 0, 0, 936, 934, 1, 0, 0, 0, 937, 945, 3, 150, 75, 0, 938, 939, 3,
    226, 113, 0, 939, 940, 3, 150, 75, 0, 940, 944, 1, 0, 0, 0, 941, 942, 5, 80, 0, 0, 942, 944, 3, 118, 59, 0, 943,
    938, 1, 0, 0, 0, 943, 941, 1, 0, 0, 0, 944, 947, 1, 0, 0, 0, 945, 943, 1, 0, 0, 0, 945, 946, 1, 0, 0, 0, 946, 149,
    1, 0, 0, 0, 947, 945, 1, 0, 0, 0, 948, 952, 3, 152, 76, 0, 949, 950, 3, 224, 112, 0, 950, 951, 3, 152, 76, 0, 951,
    953, 1, 0, 0, 0, 952, 949, 1, 0, 0, 0, 952, 953, 1, 0, 0, 0, 953, 151, 1, 0, 0, 0, 954, 960, 3, 154, 77, 0, 955,
    956, 3, 228, 114, 0, 956, 957, 3, 154, 77, 0, 957, 959, 1, 0, 0, 0, 958, 955, 1, 0, 0, 0, 959, 962, 1, 0, 0, 0, 960,
    958, 1, 0, 0, 0, 960, 961, 1, 0, 0, 0, 961, 153, 1, 0, 0, 0, 962, 960, 1, 0, 0, 0, 963, 969, 3, 156, 78, 0, 964,
    965, 3, 230, 115, 0, 965, 966, 3, 156, 78, 0, 966, 968, 1, 0, 0, 0, 967, 964, 1, 0, 0, 0, 968, 971, 1, 0, 0, 0, 969,
    967, 1, 0, 0, 0, 969, 970, 1, 0, 0, 0, 970, 155, 1, 0, 0, 0, 971, 969, 1, 0, 0, 0, 972, 978, 3, 158, 79, 0, 973,
    974, 3, 232, 116, 0, 974, 975, 3, 158, 79, 0, 975, 977, 1, 0, 0, 0, 976, 973, 1, 0, 0, 0, 977, 980, 1, 0, 0, 0, 978,
    976, 1, 0, 0, 0, 978, 979, 1, 0, 0, 0, 979, 157, 1, 0, 0, 0, 980, 978, 1, 0, 0, 0, 981, 987, 3, 160, 80, 0, 982,
    983, 3, 234, 117, 0, 983, 984, 3, 116, 58, 0, 984, 986, 1, 0, 0, 0, 985, 982, 1, 0, 0, 0, 986, 989, 1, 0, 0, 0, 987,
    985, 1, 0, 0, 0, 987, 988, 1, 0, 0, 0, 988, 159, 1, 0, 0, 0, 989, 987, 1, 0, 0, 0, 990, 991, 7, 5, 0, 0, 991, 994,
    3, 162, 81, 0, 992, 994, 3, 162, 81, 0, 993, 990, 1, 0, 0, 0, 993, 992, 1, 0, 0, 0, 994, 161, 1, 0, 0, 0, 995, 996,
    3, 236, 118, 0, 996, 997, 3, 160, 80, 0, 997, 1003, 1, 0, 0, 0, 998, 999, 5, 24, 0, 0, 999, 1003, 3, 164, 82, 0,
    1000, 1003, 3, 180, 90, 0, 1001, 1003, 3, 186, 93, 0, 1002, 995, 1, 0, 0, 0, 1002, 998, 1, 0, 0, 0, 1002, 1000, 1,
    0, 0, 0, 1002, 1001, 1, 0, 0, 0, 1003, 163, 1, 0, 0, 0, 1004, 1006, 3, 166, 83, 0, 1005, 1004, 1, 0, 0, 0, 1005,
    1006, 1, 0, 0, 0, 1006, 1007, 1, 0, 0, 0, 1007, 1010, 5, 25, 0, 0, 1008, 1011, 3, 132, 66, 0, 1009, 1011, 3, 106,
    53, 0, 1010, 1008, 1, 0, 0, 0, 1010, 1009, 1, 0, 0, 0, 1011, 165, 1, 0, 0, 0, 1012, 1017, 3, 168, 84, 0, 1013, 1014,
    5, 3, 0, 0, 1014, 1016, 3, 168, 84, 0, 1015, 1013, 1, 0, 0, 0, 1016, 1019, 1, 0, 0, 0, 1017, 1015, 1, 0, 0, 0, 1017,
    1018, 1, 0, 0, 0, 1018, 167, 1, 0, 0, 0, 1019, 1017, 1, 0, 0, 0, 1020, 1022, 3, 4, 2, 0, 1021, 1020, 1, 0, 0, 0,
    1022, 1025, 1, 0, 0, 0, 1023, 1021, 1, 0, 0, 0, 1023, 1024, 1, 0, 0, 0, 1024, 1027, 1, 0, 0, 0, 1025, 1023, 1, 0, 0,
    0, 1026, 1028, 5, 139, 0, 0, 1027, 1026, 1, 0, 0, 0, 1027, 1028, 1, 0, 0, 0, 1028, 1029, 1, 0, 0, 0, 1029, 1039, 3,
    238, 119, 0, 1030, 1031, 5, 4, 0, 0, 1031, 1034, 3, 116, 58, 0, 1032, 1033, 5, 10, 0, 0, 1033, 1035, 3, 132, 66, 0,
    1034, 1032, 1, 0, 0, 0, 1034, 1035, 1, 0, 0, 0, 1035, 1040, 1, 0, 0, 0, 1036, 1040, 3, 110, 55, 0, 1037, 1038, 5,
    10, 0, 0, 1038, 1040, 3, 132, 66, 0, 1039, 1030, 1, 0, 0, 0, 1039, 1036, 1, 0, 0, 0, 1039, 1037, 1, 0, 0, 0, 1039,
    1040, 1, 0, 0, 0, 1040, 169, 1, 0, 0, 0, 1041, 1042, 3, 172, 86, 0, 1042, 171, 1, 0, 0, 0, 1043, 1052, 5, 14, 0, 0,
    1044, 1049, 3, 176, 88, 0, 1045, 1046, 5, 3, 0, 0, 1046, 1048, 3, 176, 88, 0, 1047, 1045, 1, 0, 0, 0, 1048, 1051, 1,
    0, 0, 0, 1049, 1047, 1, 0, 0, 0, 1049, 1050, 1, 0, 0, 0, 1050, 1053, 1, 0, 0, 0, 1051, 1049, 1, 0, 0, 0, 1052, 1044,
    1, 0, 0, 0, 1052, 1053, 1, 0, 0, 0, 1053, 1054, 1, 0, 0, 0, 1054, 1055, 5, 15, 0, 0, 1055, 173, 1, 0, 0, 0, 1056,
    1058, 3, 172, 86, 0, 1057, 1056, 1, 0, 0, 0, 1057, 1058, 1, 0, 0, 0, 1058, 175, 1, 0, 0, 0, 1059, 1062, 3, 178, 89,
    0, 1060, 1062, 3, 132, 66, 0, 1061, 1059, 1, 0, 0, 0, 1061, 1060, 1, 0, 0, 0, 1062, 177, 1, 0, 0, 0, 1063, 1064, 5,
    4, 0, 0, 1064, 1065, 3, 238, 119, 0, 1065, 1066, 5, 10, 0, 0, 1066, 1067, 3, 132, 66, 0, 1067, 179, 1, 0, 0, 0,
    1068, 1069, 5, 105, 0, 0, 1069, 1070, 5, 14, 0, 0, 1070, 1071, 3, 132, 66, 0, 1071, 1072, 5, 15, 0, 0, 1072, 181, 1,
    0, 0, 0, 1073, 1076, 5, 26, 0, 0, 1074, 1077, 3, 238, 119, 0, 1075, 1077, 5, 94, 0, 0, 1076, 1074, 1, 0, 0, 0, 1076,
    1075, 1, 0, 0, 0, 1077, 1078, 1, 0, 0, 0, 1078, 1079, 3, 128, 64, 0, 1079, 1080, 3, 174, 87, 0, 1080, 183, 1, 0, 0,
    0, 1081, 1083, 5, 7, 0, 0, 1082, 1084, 3, 198, 99, 0, 1083, 1082, 1, 0, 0, 0, 1083, 1084, 1, 0, 0, 0, 1084, 1085, 1,
    0, 0, 0, 1085, 1086, 5, 8, 0, 0, 1086, 185, 1, 0, 0, 0, 1087, 1094, 3, 190, 95, 0, 1088, 1094, 3, 102, 51, 0, 1089,
    1094, 3, 210, 105, 0, 1090, 1094, 3, 120, 60, 0, 1091, 1094, 3, 188, 94, 0, 1092, 1094, 3, 184, 92, 0, 1093, 1087,
    1, 0, 0, 0, 1093, 1088, 1, 0, 0, 0, 1093, 1089, 1, 0, 0, 0, 1093, 1090, 1, 0, 0, 0, 1093, 1091, 1, 0, 0, 0, 1093,
    1092, 1, 0, 0, 0, 1094, 1095, 1, 0, 0, 0, 1095, 1096, 3, 208, 104, 0, 1096, 187, 1, 0, 0, 0, 1097, 1098, 5, 14, 0,
    0, 1098, 1099, 3, 132, 66, 0, 1099, 1100, 5, 15, 0, 0, 1100, 189, 1, 0, 0, 0, 1101, 1103, 5, 101, 0, 0, 1102, 1104,
    3, 126, 63, 0, 1103, 1102, 1, 0, 0, 0, 1103, 1104, 1, 0, 0, 0, 1104, 1145, 1, 0, 0, 0, 1105, 1113, 3, 172, 86, 0,
    1106, 1109, 5, 7, 0, 0, 1107, 1110, 3, 196, 98, 0, 1108, 1110, 3, 192, 96, 0, 1109, 1107, 1, 0, 0, 0, 1109, 1108, 1,
    0, 0, 0, 1110, 1111, 1, 0, 0, 0, 1111, 1112, 5, 8, 0, 0, 1112, 1114, 1, 0, 0, 0, 1113, 1106, 1, 0, 0, 0, 1113, 1114,
    1, 0, 0, 0, 1114, 1146, 1, 0, 0, 0, 1115, 1143, 5, 5, 0, 0, 1116, 1121, 5, 6, 0, 0, 1117, 1118, 5, 5, 0, 0, 1118,
    1120, 5, 6, 0, 0, 1119, 1117, 1, 0, 0, 0, 1120, 1123, 1, 0, 0, 0, 1121, 1119, 1, 0, 0, 0, 1121, 1122, 1, 0, 0, 0,
    1122, 1124, 1, 0, 0, 0, 1123, 1121, 1, 0, 0, 0, 1124, 1144, 3, 194, 97, 0, 1125, 1126, 3, 132, 66, 0, 1126, 1133, 5,
    6, 0, 0, 1127, 1128, 5, 5, 0, 0, 1128, 1129, 3, 132, 66, 0, 1129, 1130, 5, 6, 0, 0, 1130, 1132, 1, 0, 0, 0, 1131,
    1127, 1, 0, 0, 0, 1132, 1135, 1, 0, 0, 0, 1133, 1131, 1, 0, 0, 0, 1133, 1134, 1, 0, 0, 0, 1134, 1140, 1, 0, 0, 0,
    1135, 1133, 1, 0, 0, 0, 1136, 1137, 5, 5, 0, 0, 1137, 1139, 5, 6, 0, 0, 1138, 1136, 1, 0, 0, 0, 1139, 1142, 1, 0, 0,
    0, 1140, 1138, 1, 0, 0, 0, 1140, 1141, 1, 0, 0, 0, 1141, 1144, 1, 0, 0, 0, 1142, 1140, 1, 0, 0, 0, 1143, 1116, 1, 0,
    0, 0, 1143, 1125, 1, 0, 0, 0, 1144, 1146, 1, 0, 0, 0, 1145, 1105, 1, 0, 0, 0, 1145, 1115, 1, 0, 0, 0, 1146, 191, 1,
    0, 0, 0, 1147, 1148, 3, 28, 14, 0, 1148, 193, 1, 0, 0, 0, 1149, 1158, 5, 7, 0, 0, 1150, 1155, 3, 132, 66, 0, 1151,
    1152, 5, 3, 0, 0, 1152, 1154, 3, 132, 66, 0, 1153, 1151, 1, 0, 0, 0, 1154, 1157, 1, 0, 0, 0, 1155, 1153, 1, 0, 0, 0,
    1155, 1156, 1, 0, 0, 0, 1156, 1159, 1, 0, 0, 0, 1157, 1155, 1, 0, 0, 0, 1158, 1150, 1, 0, 0, 0, 1158, 1159, 1, 0, 0,
    0, 1159, 1160, 1, 0, 0, 0, 1160, 1161, 5, 8, 0, 0, 1161, 195, 1, 0, 0, 0, 1162, 1165, 3, 198, 99, 0, 1163, 1165, 3,
    204, 102, 0, 1164, 1162, 1, 0, 0, 0, 1164, 1163, 1, 0, 0, 0, 1164, 1165, 1, 0, 0, 0, 1165, 197, 1, 0, 0, 0, 1166,
    1169, 3, 202, 101, 0, 1167, 1169, 3, 200, 100, 0, 1168, 1166, 1, 0, 0, 0, 1168, 1167, 1, 0, 0, 0, 1169, 199, 1, 0,
    0, 0, 1170, 1175, 3, 132, 66, 0, 1171, 1172, 5, 3, 0, 0, 1172, 1174, 3, 132, 66, 0, 1173, 1171, 1, 0, 0, 0, 1174,
    1177, 1, 0, 0, 0, 1175, 1173, 1, 0, 0, 0, 1175, 1176, 1, 0, 0, 0, 1176, 201, 1, 0, 0, 0, 1177, 1175, 1, 0, 0, 0,
    1178, 1179, 3, 132, 66, 0, 1179, 1180, 5, 25, 0, 0, 1180, 1188, 3, 132, 66, 0, 1181, 1182, 5, 3, 0, 0, 1182, 1183,
    3, 132, 66, 0, 1183, 1184, 5, 25, 0, 0, 1184, 1185, 3, 132, 66, 0, 1185, 1187, 1, 0, 0, 0, 1186, 1181, 1, 0, 0, 0,
    1187, 1190, 1, 0, 0, 0, 1188, 1186, 1, 0, 0, 0, 1188, 1189, 1, 0, 0, 0, 1189, 203, 1, 0, 0, 0, 1190, 1188, 1, 0, 0,
    0, 1191, 1196, 3, 206, 103, 0, 1192, 1193, 5, 3, 0, 0, 1193, 1195, 3, 206, 103, 0, 1194, 1192, 1, 0, 0, 0, 1195,
    1198, 1, 0, 0, 0, 1196, 1194, 1, 0, 0, 0, 1196, 1197, 1, 0, 0, 0, 1197, 205, 1, 0, 0, 0, 1198, 1196, 1, 0, 0, 0,
    1199, 1200, 5, 4, 0, 0, 1200, 1201, 3, 238, 119, 0, 1201, 1202, 5, 10, 0, 0, 1202, 1203, 3, 132, 66, 0, 1203, 207,
    1, 0, 0, 0, 1204, 1205, 7, 6, 0, 0, 1205, 1206, 3, 242, 121, 0, 1206, 1207, 3, 128, 64, 0, 1207, 1215, 1, 0, 0, 0,
    1208, 1215, 3, 182, 91, 0, 1209, 1210, 7, 7, 0, 0, 1210, 1211, 3, 132, 66, 0, 1211, 1212, 5, 6, 0, 0, 1212, 1215, 1,
    0, 0, 0, 1213, 1215, 3, 172, 86, 0, 1214, 1204, 1, 0, 0, 0, 1214, 1208, 1, 0, 0, 0, 1214, 1209, 1, 0, 0, 0, 1214,
    1213, 1, 0, 0, 0, 1215, 1218, 1, 0, 0, 0, 1216, 1214, 1, 0, 0, 0, 1216, 1217, 1, 0, 0, 0, 1217, 209, 1, 0, 0, 0,
    1218, 1216, 1, 0, 0, 0, 1219, 1227, 3, 212, 106, 0, 1220, 1227, 3, 182, 91, 0, 1221, 1227, 5, 156, 0, 0, 1222, 1227,
    5, 155, 0, 0, 1223, 1227, 5, 115, 0, 0, 1224, 1227, 5, 116, 0, 0, 1225, 1227, 5, 119, 0, 0, 1226, 1219, 1, 0, 0, 0,
    1226, 1220, 1, 0, 0, 0, 1226, 1221, 1, 0, 0, 0, 1226, 1222, 1, 0, 0, 0, 1226, 1223, 1, 0, 0, 0, 1226, 1224, 1, 0, 0,
    0, 1226, 1225, 1, 0, 0, 0, 1227, 211, 1, 0, 0, 0, 1228, 1229, 7, 8, 0, 0, 1229, 213, 1, 0, 0, 0, 1230, 1231, 7, 9,
    0, 0, 1231, 215, 1, 0, 0, 0, 1232, 1233, 7, 10, 0, 0, 1233, 217, 1, 0, 0, 0, 1234, 1235, 7, 11, 0, 0, 1235, 219, 1,
    0, 0, 0, 1236, 1237, 7, 12, 0, 0, 1237, 221, 1, 0, 0, 0, 1238, 1239, 7, 13, 0, 0, 1239, 223, 1, 0, 0, 0, 1240, 1241,
    7, 14, 0, 0, 1241, 225, 1, 0, 0, 0, 1242, 1243, 7, 15, 0, 0, 1243, 227, 1, 0, 0, 0, 1244, 1245, 7, 16, 0, 0, 1245,
    229, 1, 0, 0, 0, 1246, 1247, 7, 17, 0, 0, 1247, 231, 1, 0, 0, 0, 1248, 1249, 7, 18, 0, 0, 1249, 233, 1, 0, 0, 0,
    1250, 1251, 7, 19, 0, 0, 1251, 235, 1, 0, 0, 0, 1252, 1253, 7, 20, 0, 0, 1253, 237, 1, 0, 0, 0, 1254, 1255, 7, 21,
    0, 0, 1255, 239, 1, 0, 0, 0, 1256, 1257, 7, 22, 0, 0, 1257, 241, 1, 0, 0, 0, 1258, 1304, 3, 238, 119, 0, 1259, 1304,
    5, 71, 0, 0, 1260, 1304, 5, 72, 0, 0, 1261, 1304, 5, 73, 0, 0, 1262, 1304, 5, 74, 0, 0, 1263, 1304, 5, 75, 0, 0,
    1264, 1304, 5, 76, 0, 0, 1265, 1304, 5, 77, 0, 0, 1266, 1304, 5, 78, 0, 0, 1267, 1304, 5, 79, 0, 0, 1268, 1304, 5,
    80, 0, 0, 1269, 1304, 5, 81, 0, 0, 1270, 1304, 5, 82, 0, 0, 1271, 1304, 5, 83, 0, 0, 1272, 1304, 5, 84, 0, 0, 1273,
    1304, 5, 85, 0, 0, 1274, 1304, 5, 86, 0, 0, 1275, 1304, 5, 87, 0, 0, 1276, 1304, 5, 88, 0, 0, 1277, 1304, 5, 89, 0,
    0, 1278, 1304, 5, 90, 0, 0, 1279, 1304, 5, 91, 0, 0, 1280, 1304, 5, 92, 0, 0, 1281, 1304, 5, 93, 0, 0, 1282, 1304,
    5, 94, 0, 0, 1283, 1304, 5, 95, 0, 0, 1284, 1304, 5, 96, 0, 0, 1285, 1304, 5, 97, 0, 0, 1286, 1304, 5, 98, 0, 0,
    1287, 1304, 5, 99, 0, 0, 1288, 1304, 5, 100, 0, 0, 1289, 1304, 5, 101, 0, 0, 1290, 1304, 5, 102, 0, 0, 1291, 1304,
    5, 103, 0, 0, 1292, 1304, 5, 104, 0, 0, 1293, 1304, 5, 105, 0, 0, 1294, 1304, 5, 106, 0, 0, 1295, 1304, 5, 107, 0,
    0, 1296, 1304, 5, 108, 0, 0, 1297, 1304, 5, 109, 0, 0, 1298, 1304, 5, 110, 0, 0, 1299, 1304, 5, 111, 0, 0, 1300,
    1304, 5, 112, 0, 0, 1301, 1304, 5, 113, 0, 0, 1302, 1304, 5, 114, 0, 0, 1303, 1258, 1, 0, 0, 0, 1303, 1259, 1, 0, 0,
    0, 1303, 1260, 1, 0, 0, 0, 1303, 1261, 1, 0, 0, 0, 1303, 1262, 1, 0, 0, 0, 1303, 1263, 1, 0, 0, 0, 1303, 1264, 1, 0,
    0, 0, 1303, 1265, 1, 0, 0, 0, 1303, 1266, 1, 0, 0, 0, 1303, 1267, 1, 0, 0, 0, 1303, 1268, 1, 0, 0, 0, 1303, 1269, 1,
    0, 0, 0, 1303, 1270, 1, 0, 0, 0, 1303, 1271, 1, 0, 0, 0, 1303, 1272, 1, 0, 0, 0, 1303, 1273, 1, 0, 0, 0, 1303, 1274,
    1, 0, 0, 0, 1303, 1275, 1, 0, 0, 0, 1303, 1276, 1, 0, 0, 0, 1303, 1277, 1, 0, 0, 0, 1303, 1278, 1, 0, 0, 0, 1303,
    1279, 1, 0, 0, 0, 1303, 1280, 1, 0, 0, 0, 1303, 1281, 1, 0, 0, 0, 1303, 1282, 1, 0, 0, 0, 1303, 1283, 1, 0, 0, 0,
    1303, 1284, 1, 0, 0, 0, 1303, 1285, 1, 0, 0, 0, 1303, 1286, 1, 0, 0, 0, 1303, 1287, 1, 0, 0, 0, 1303, 1288, 1, 0, 0,
    0, 1303, 1289, 1, 0, 0, 0, 1303, 1290, 1, 0, 0, 0, 1303, 1291, 1, 0, 0, 0, 1303, 1292, 1, 0, 0, 0, 1303, 1293, 1, 0,
    0, 0, 1303, 1294, 1, 0, 0, 0, 1303, 1295, 1, 0, 0, 0, 1303, 1296, 1, 0, 0, 0, 1303, 1297, 1, 0, 0, 0, 1303, 1298, 1,
    0, 0, 0, 1303, 1299, 1, 0, 0, 0, 1303, 1300, 1, 0, 0, 0, 1303, 1301, 1, 0, 0, 0, 1303, 1302, 1, 0, 0, 0, 1304, 243,
    1, 0, 0, 0, 140, 250, 254, 257, 265, 269, 276, 284, 287, 300, 303, 316, 319, 332, 351, 361, 365, 368, 380, 383, 387,
    393, 399, 406, 413, 416, 425, 428, 432, 441, 449, 454, 459, 466, 469, 473, 481, 488, 495, 502, 507, 512, 521, 526,
    531, 537, 547, 553, 565, 567, 588, 591, 594, 602, 606, 613, 616, 619, 627, 632, 641, 650, 654, 660, 664, 687, 698,
    703, 714, 720, 723, 729, 731, 744, 759, 767, 775, 788, 791, 796, 802, 807, 812, 814, 821, 835, 840, 850, 859, 864,
    870, 872, 884, 892, 901, 909, 917, 925, 934, 943, 945, 952, 960, 969, 978, 987, 993, 1002, 1005, 1010, 1017, 1023,
    1027, 1034, 1039, 1049, 1052, 1057, 1061, 1076, 1083, 1093, 1103, 1109, 1113, 1121, 1133, 1140, 1143, 1145, 1155,
    1158, 1164, 1168, 1175, 1188, 1196, 1214, 1216, 1226, 1303,
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
