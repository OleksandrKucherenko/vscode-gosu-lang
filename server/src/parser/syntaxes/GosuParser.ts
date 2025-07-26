// Generated from syntaxes/Gosu.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { GosuListener } from "./GosuListener";

export class GosuParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly T__58 = 59;
	public static readonly T__59 = 60;
	public static readonly T__60 = 61;
	public static readonly T__61 = 62;
	public static readonly T__62 = 63;
	public static readonly T__63 = 64;
	public static readonly T__64 = 65;
	public static readonly T__65 = 66;
	public static readonly T__66 = 67;
	public static readonly T__67 = 68;
	public static readonly T__68 = 69;
	public static readonly T__69 = 70;
	public static readonly T__70 = 71;
	public static readonly T__71 = 72;
	public static readonly T__72 = 73;
	public static readonly T__73 = 74;
	public static readonly T__74 = 75;
	public static readonly T__75 = 76;
	public static readonly T__76 = 77;
	public static readonly T__77 = 78;
	public static readonly T__78 = 79;
	public static readonly T__79 = 80;
	public static readonly T__80 = 81;
	public static readonly T__81 = 82;
	public static readonly T__82 = 83;
	public static readonly T__83 = 84;
	public static readonly T__84 = 85;
	public static readonly T__85 = 86;
	public static readonly T__86 = 87;
	public static readonly T__87 = 88;
	public static readonly T__88 = 89;
	public static readonly T__89 = 90;
	public static readonly T__90 = 91;
	public static readonly T__91 = 92;
	public static readonly T__92 = 93;
	public static readonly T__93 = 94;
	public static readonly T__94 = 95;
	public static readonly T__95 = 96;
	public static readonly T__96 = 97;
	public static readonly T__97 = 98;
	public static readonly T__98 = 99;
	public static readonly T__99 = 100;
	public static readonly T__100 = 101;
	public static readonly T__101 = 102;
	public static readonly T__102 = 103;
	public static readonly T__103 = 104;
	public static readonly T__104 = 105;
	public static readonly T__105 = 106;
	public static readonly T__106 = 107;
	public static readonly T__107 = 108;
	public static readonly T__108 = 109;
	public static readonly T__109 = 110;
	public static readonly T__110 = 111;
	public static readonly T__111 = 112;
	public static readonly T__112 = 113;
	public static readonly T__113 = 114;
	public static readonly T__114 = 115;
	public static readonly T__115 = 116;
	public static readonly T__116 = 117;
	public static readonly T__117 = 118;
	public static readonly T__118 = 119;
	public static readonly T__119 = 120;
	public static readonly T__120 = 121;
	public static readonly T__121 = 122;
	public static readonly T__122 = 123;
	public static readonly T__123 = 124;
	public static readonly T__124 = 125;
	public static readonly T__125 = 126;
	public static readonly T__126 = 127;
	public static readonly T__127 = 128;
	public static readonly T__128 = 129;
	public static readonly T__129 = 130;
	public static readonly T__130 = 131;
	public static readonly T__131 = 132;
	public static readonly T__132 = 133;
	public static readonly T__133 = 134;
	public static readonly T__134 = 135;
	public static readonly T__135 = 136;
	public static readonly T__136 = 137;
	public static readonly T__137 = 138;
	public static readonly T__138 = 139;
	public static readonly T__139 = 140;
	public static readonly T__140 = 141;
	public static readonly T__141 = 142;
	public static readonly T__142 = 143;
	public static readonly T__143 = 144;
	public static readonly T__144 = 145;
	public static readonly T__145 = 146;
	public static readonly RANGE_EXCLUSIVE_BOTH = 147;
	public static readonly RANGE_EXCLUSIVE_RIGHT = 148;
	public static readonly RANGE_EXCLUSIVE_LEFT = 149;
	public static readonly RANGE_INCLUSIVE = 150;
	public static readonly INCREMENT = 151;
	public static readonly DECREMENT = 152;
	public static readonly BACKSLASH = 153;
	public static readonly Ident = 154;
	public static readonly NumberLiteral = 155;
	public static readonly BinLiteral = 156;
	public static readonly HexLiteral = 157;
	public static readonly IntOrFloatPointLiteral = 158;
	public static readonly CharLiteral = 159;
	public static readonly StringLiteral = 160;
	public static readonly WS = 161;
	public static readonly COMMENT = 162;
	public static readonly LINE_COMMENT = 163;
	public static readonly RULE_start = 0;
	public static readonly RULE_header = 1;
	public static readonly RULE_annotation = 2;
	public static readonly RULE_gClass = 3;
	public static readonly RULE_gInterfaceOrStructure = 4;
	public static readonly RULE_gEnum = 5;
	public static readonly RULE_gEnhancement = 6;
	public static readonly RULE_classBody = 7;
	public static readonly RULE_enhancementBody = 8;
	public static readonly RULE_interfaceBody = 9;
	public static readonly RULE_enumBody = 10;
	public static readonly RULE_enumConstants = 11;
	public static readonly RULE_enumConstant = 12;
	public static readonly RULE_interfaceMembers = 13;
	public static readonly RULE_classMembers = 14;
	public static readonly RULE_declaration = 15;
	public static readonly RULE_enhancementMembers = 16;
	public static readonly RULE_delegateDefn = 17;
	public static readonly RULE_delegateStatement = 18;
	public static readonly RULE_optionalType = 19;
	public static readonly RULE_fieldDefn = 20;
	public static readonly RULE_propertyDefn = 21;
	public static readonly RULE_dotPathWord = 22;
	public static readonly RULE_namespaceStatement = 23;
	public static readonly RULE_usesStatementList = 24;
	public static readonly RULE_usesStatement = 25;
	public static readonly RULE_typeVariableDefs = 26;
	public static readonly RULE_typeVariableDefinition = 27;
	public static readonly RULE_functionBody = 28;
	public static readonly RULE_parameters = 29;
	public static readonly RULE_functionDefn = 30;
	public static readonly RULE_constructorDefn = 31;
	public static readonly RULE_modifiers = 32;
	public static readonly RULE_statement = 33;
	public static readonly RULE_incrementDecrementStatement = 34;
	public static readonly RULE_ifStatement = 35;
	public static readonly RULE_tryCatchFinallyStatement = 36;
	public static readonly RULE_catchClause = 37;
	public static readonly RULE_assertStatement = 38;
	public static readonly RULE_usingStatement = 39;
	public static readonly RULE_returnStatement = 40;
	public static readonly RULE_whileStatement = 41;
	public static readonly RULE_doWhileStatement = 42;
	public static readonly RULE_switchStatement = 43;
	public static readonly RULE_switchBlockStatementGroup = 44;
	public static readonly RULE_throwStatement = 45;
	public static readonly RULE_localVarStatement = 46;
	public static readonly RULE_forEachStatement = 47;
	public static readonly RULE_indexRest = 48;
	public static readonly RULE_indexVar = 49;
	public static readonly RULE_iteratorVar = 50;
	public static readonly RULE_thisSuperExpr = 51;
	public static readonly RULE_assignmentOrMethodCall = 52;
	public static readonly RULE_statementBlock = 53;
	public static readonly RULE_statementBlockBody = 54;
	public static readonly RULE_blockTypeLiteral = 55;
	public static readonly RULE_blockLiteral = 56;
	public static readonly RULE_blockLiteralArg = 57;
	public static readonly RULE_typeLiteral = 58;
	public static readonly RULE_typeLiteralType = 59;
	public static readonly RULE_typeLiteralExpr = 60;
	public static readonly RULE_typeLiteralList = 61;
	public static readonly RULE_type = 62;
	public static readonly RULE_classOrInterfaceType = 63;
	public static readonly RULE_typeArguments = 64;
	public static readonly RULE_typeArgument = 65;
	public static readonly RULE_expression = 66;
	public static readonly RULE_conditionalExpr = 67;
	public static readonly RULE_conditionalOrExpr = 68;
	public static readonly RULE_conditionalAndExpr = 69;
	public static readonly RULE_bitwiseOrExpr = 70;
	public static readonly RULE_bitwiseXorExpr = 71;
	public static readonly RULE_bitwiseAndExpr = 72;
	public static readonly RULE_equalityExpr = 73;
	public static readonly RULE_relationalExpr = 74;
	public static readonly RULE_intervalExpr = 75;
	public static readonly RULE_bitshiftExpr = 76;
	public static readonly RULE_additiveExpr = 77;
	public static readonly RULE_multiplicativeExpr = 78;
	public static readonly RULE_typeAsExpr = 79;
	public static readonly RULE_unaryExpr = 80;
	public static readonly RULE_unaryExprNotPlusMinus = 81;
	public static readonly RULE_blockExprWrap = 82;
	public static readonly RULE_blockExpr = 83;
	public static readonly RULE_parameterDeclarationList = 84;
	public static readonly RULE_parameterDeclaration = 85;
	public static readonly RULE_annotationArguments = 86;
	public static readonly RULE_arguments = 87;
	public static readonly RULE_optionalArguments = 88;
	public static readonly RULE_argExpression = 89;
	public static readonly RULE_namedArgumentExpression = 90;
	public static readonly RULE_evalExpr = 91;
	public static readonly RULE_featureLiteral = 92;
	public static readonly RULE_standAloneDataStructureInitialization = 93;
	public static readonly RULE_primaryExpr = 94;
	public static readonly RULE_parenthExpr = 95;
	public static readonly RULE_newExpr = 96;
	public static readonly RULE_anonymousInnerClass = 97;
	public static readonly RULE_arrayInitializer = 98;
	public static readonly RULE_initializer = 99;
	public static readonly RULE_initializerExpression = 100;
	public static readonly RULE_arrayValueList = 101;
	public static readonly RULE_mapInitializerList = 102;
	public static readonly RULE_objectInitializer = 103;
	public static readonly RULE_initializerAssignment = 104;
	public static readonly RULE_indirectMemberAccess = 105;
	public static readonly RULE_literal = 106;
	public static readonly RULE_orOp = 107;
	public static readonly RULE_andOp = 108;
	public static readonly RULE_assignmentOp = 109;
	public static readonly RULE_incrementOp = 110;
	public static readonly RULE_equalityOp = 111;
	public static readonly RULE_intervalOp = 112;
	public static readonly RULE_relOp = 113;
	public static readonly RULE_bitshiftOp = 114;
	public static readonly RULE_additiveOp = 115;
	public static readonly RULE_multiplicativeOp = 116;
	public static readonly RULE_typeAsOp = 117;
	public static readonly RULE_unaryOp = 118;
	public static readonly RULE_id = 119;
	public static readonly RULE_idclassOrInterfaceType = 120;
	public static readonly RULE_idAll = 121;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "header", "annotation", "gClass", "gInterfaceOrStructure", "gEnum", 
		"gEnhancement", "classBody", "enhancementBody", "interfaceBody", "enumBody", 
		"enumConstants", "enumConstant", "interfaceMembers", "classMembers", "declaration", 
		"enhancementMembers", "delegateDefn", "delegateStatement", "optionalType", 
		"fieldDefn", "propertyDefn", "dotPathWord", "namespaceStatement", "usesStatementList", 
		"usesStatement", "typeVariableDefs", "typeVariableDefinition", "functionBody", 
		"parameters", "functionDefn", "constructorDefn", "modifiers", "statement", 
		"incrementDecrementStatement", "ifStatement", "tryCatchFinallyStatement", 
		"catchClause", "assertStatement", "usingStatement", "returnStatement", 
		"whileStatement", "doWhileStatement", "switchStatement", "switchBlockStatementGroup", 
		"throwStatement", "localVarStatement", "forEachStatement", "indexRest", 
		"indexVar", "iteratorVar", "thisSuperExpr", "assignmentOrMethodCall", 
		"statementBlock", "statementBlockBody", "blockTypeLiteral", "blockLiteral", 
		"blockLiteralArg", "typeLiteral", "typeLiteralType", "typeLiteralExpr", 
		"typeLiteralList", "type", "classOrInterfaceType", "typeArguments", "typeArgument", 
		"expression", "conditionalExpr", "conditionalOrExpr", "conditionalAndExpr", 
		"bitwiseOrExpr", "bitwiseXorExpr", "bitwiseAndExpr", "equalityExpr", "relationalExpr", 
		"intervalExpr", "bitshiftExpr", "additiveExpr", "multiplicativeExpr", 
		"typeAsExpr", "unaryExpr", "unaryExprNotPlusMinus", "blockExprWrap", "blockExpr", 
		"parameterDeclarationList", "parameterDeclaration", "annotationArguments", 
		"arguments", "optionalArguments", "argExpression", "namedArgumentExpression", 
		"evalExpr", "featureLiteral", "standAloneDataStructureInitialization", 
		"primaryExpr", "parenthExpr", "newExpr", "anonymousInnerClass", "arrayInitializer", 
		"initializer", "initializerExpression", "arrayValueList", "mapInitializerList", 
		"objectInitializer", "initializerAssignment", "indirectMemberAccess", 
		"literal", "orOp", "andOp", "assignmentOp", "incrementOp", "equalityOp", 
		"intervalOp", "relOp", "bitshiftOp", "additiveOp", "multiplicativeOp", 
		"typeAsOp", "unaryOp", "id", "idclassOrInterfaceType", "idAll",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'package'", "'@'", "'.'", "'class'", "'extends'", "'implements'", 
		"','", "'interface'", "'structure'", "'enum'", "'enhancement'", "':'", 
		"'['", "']'", "'{'", "'}'", "';'", "'delegate'", "'represents'", "'='", 
		"'var'", "'as'", "'readonly'", "'property'", "'get'", "'set'", "'uses'", 
		"'*'", "'<'", "'>'", "'('", "')'", "'function'", "'construct'", "'private'", 
		"'internal'", "'protected'", "'public'", "'static'", "'abstract'", "'override'", 
		"'final'", "'transient'", "'continue'", "'break'", "'if'", "'else'", "'try'", 
		"'finally'", "'catch'", "'assert'", "'using'", "'return'", "'while'", 
		"'do'", "'switch'", "'case'", "'default'", "'throw'", "'foreach'", "'for'", 
		"'in'", "'index'", "'iterator'", "'this'", "'super'", "'&'", "'block'", 
		"'?'", "'?:'", "'|'", "'^'", "'typeis'", "'+'", "'-'", "'!-'", "'->'", 
		"'eval'", "'#'", "'new'", "'?.'", "'*.'", "'?['", "'true'", "'false'", 
		"'null'", "'||'", "'or'", "'&&'", "'and'", "'+='", "'-='", "'*='", "'/='", 
		"'&='", "'&&='", "'|='", "'||='", "'^='", "'%='", "'<<='", "'>>>='", "'>>='", 
		"'==='", "'!=='", "'=='", "'!='", "'<='", "'>='", "'<<'", "'>>>'", "'>>'", 
		"'?+'", "'?-'", "'!+'", "'/'", "'%'", "'?*'", "'!*'", "'?/'", "'?%'", 
		"'typeas'", "'~'", "'!'", "'not'", "'typeof'", "'statictypeof'", "'NaN'", 
		"'Infinity'", "'length'", "'exists'", "'startswith'", "'contains'", "'where'", 
		"'find'", "'except'", "'hide'", "'outer'", "'execution'", "'request'", 
		"'session'", "'application'", "'void'", "'classpath'", "'typeloader'", 
		"'unless'", "'|..|'", "'..|'", "'|..'", "'..'", "'++'", "'--'", "'\\'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"RANGE_EXCLUSIVE_BOTH", "RANGE_EXCLUSIVE_RIGHT", "RANGE_EXCLUSIVE_LEFT", 
		"RANGE_INCLUSIVE", "INCREMENT", "DECREMENT", "BACKSLASH", "Ident", "NumberLiteral", 
		"BinLiteral", "HexLiteral", "IntOrFloatPointLiteral", "CharLiteral", "StringLiteral", 
		"WS", "COMMENT", "LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(GosuParser._LITERAL_NAMES, GosuParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return GosuParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Gosu.g4"; }

	// @Override
	public get ruleNames(): string[] { return GosuParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return GosuParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(GosuParser._ATN, this);
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, GosuParser.RULE_start);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 244;
			this.header();
			this.state = 245;
			this.modifiers();
			this.state = 250;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GosuParser.T__3:
				{
				this.state = 246;
				this.gClass();
				}
				break;
			case GosuParser.T__7:
			case GosuParser.T__8:
				{
				this.state = 247;
				this.gInterfaceOrStructure();
				}
				break;
			case GosuParser.T__9:
				{
				this.state = 248;
				this.gEnum();
				}
				break;
			case GosuParser.T__10:
				{
				this.state = 249;
				this.gEnhancement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public header(): HeaderContext {
		let _localctx: HeaderContext = new HeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, GosuParser.RULE_header);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 254;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GosuParser.T__0) {
				{
				this.state = 252;
				this.match(GosuParser.T__0);
				this.state = 253;
				this.namespaceStatement();
				}
			}

			this.state = 257;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GosuParser.T__26) {
				{
				this.state = 256;
				this.usesStatementList();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation(): AnnotationContext {
		let _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, GosuParser.RULE_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 259;
			this.match(GosuParser.T__1);
			this.state = 260;
			this.idAll();
			this.state = 265;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GosuParser.T__2) {
				{
				{
				this.state = 261;
				this.match(GosuParser.T__2);
				this.state = 262;
				this.idAll();
				}
				}
				this.state = 267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 269;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GosuParser.T__30) {
				{
				this.state = 268;
				this.annotationArguments();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public gClass(): GClassContext {
		let _localctx: GClassContext = new GClassContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, GosuParser.RULE_gClass);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 271;
			this.match(GosuParser.T__3);
			this.state = 272;
			this.id();
			this.state = 273;
			this.typeVariableDefs();
			this.state = 276;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GosuParser.T__4) {
				{
				this.state = 274;
				this.match(GosuParser.T__4);
				this.state = 275;
				this.classOrInterfaceType();
				}
			}

			this.state = 287;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GosuParser.T__5) {
				{
				this.state = 278;
				this.match(GosuParser.T__5);
				this.state = 279;
				this.classOrInterfaceType();
				this.state = 284;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === GosuParser.T__6) {
					{
					{
					this.state = 280;
					this.match(GosuParser.T__6);
					this.state = 281;
					this.classOrInterfaceType();
					}
					}
					this.state = 286;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 289;
			this.classBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public gInterfaceOrStructure(): GInterfaceOrStructureContext {
		let _localctx: GInterfaceOrStructureContext = new GInterfaceOrStructureContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, GosuParser.RULE_gInterfaceOrStructure);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 291;
			_la = this._input.LA(1);
			if (!(_la === GosuParser.T__7 || _la === GosuParser.T__8)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 292;
			this.id();
			this.state = 293;
			this.typeVariableDefs();
			this.state = 303;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GosuParser.T__4) {
				{
				this.state = 294;
				this.match(GosuParser.T__4);
				this.state = 295;
				this.classOrInterfaceType();
				this.state = 300;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === GosuParser.T__6) {
					{
					{
					this.state = 296;
					this.match(GosuParser.T__6);
					this.state = 297;
					this.classOrInterfaceType();
					}
					}
					this.state = 302;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 305;
			this.interfaceBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public gEnum(): GEnumContext {
		let _localctx: GEnumContext = new GEnumContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, GosuParser.RULE_gEnum);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 307;
			this.match(GosuParser.T__9);
			this.state = 308;
			this.id();
			this.state = 309;
			this.typeVariableDefs();
			this.state = 319;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GosuParser.T__5) {
				{
				this.state = 310;
				this.match(GosuParser.T__5);
				this.state = 311;
				this.classOrInterfaceType();
				this.state = 316;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === GosuParser.T__6) {
					{
					{
					this.state = 312;
					this.match(GosuParser.T__6);
					this.state = 313;
					this.classOrInterfaceType();
					}
					}
					this.state = 318;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 321;
			this.enumBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public gEnhancement(): GEnhancementContext {
		let _localctx: GEnhancementContext = new GEnhancementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, GosuParser.RULE_gEnhancement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 323;
			this.match(GosuParser.T__10);
			this.state = 324;
			this.id();
			this.state = 325;
			this.typeVariableDefs();
			this.state = 326;
			this.match(GosuParser.T__11);
			this.state = 327;
			this.classOrInterfaceType();
			this.state = 332;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GosuParser.T__12) {
				{
				{
				this.state = 328;
				this.match(GosuParser.T__12);
				this.state = 329;
				this.match(GosuParser.T__13);
				}
				}
				this.state = 334;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 335;
			this.enhancementBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classBody(): ClassBodyContext {
		let _localctx: ClassBodyContext = new ClassBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, GosuParser.RULE_classBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 337;
			this.match(GosuParser.T__14);
			this.state = 338;
			this.classMembers();
			this.state = 339;
			this.match(GosuParser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enhancementBody(): EnhancementBodyContext {
		let _localctx: EnhancementBodyContext = new EnhancementBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, GosuParser.RULE_enhancementBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 341;
			this.match(GosuParser.T__14);
			this.state = 342;
			this.enhancementMembers();
			this.state = 343;
			this.match(GosuParser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceBody(): InterfaceBodyContext {
		let _localctx: InterfaceBodyContext = new InterfaceBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, GosuParser.RULE_interfaceBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 345;
			this.match(GosuParser.T__14);
			this.state = 346;
			this.interfaceMembers();
			this.state = 347;
			this.match(GosuParser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumBody(): EnumBodyContext {
		let _localctx: EnumBodyContext = new EnumBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, GosuParser.RULE_enumBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 349;
			this.match(GosuParser.T__14);
			this.state = 351;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 350;
				this.enumConstants();
				}
				break;
			}
			this.state = 353;
			this.classMembers();
			this.state = 354;
			this.match(GosuParser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumConstants(): EnumConstantsContext {
		let _localctx: EnumConstantsContext = new EnumConstantsContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, GosuParser.RULE_enumConstants);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 356;
			this.enumConstant();
			this.state = 361;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 357;
					this.match(GosuParser.T__6);
					this.state = 358;
					this.enumConstant();
					}
					}
				}
				this.state = 363;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			}
			this.state = 365;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GosuParser.T__6) {
				{
				this.state = 364;
				this.match(GosuParser.T__6);
				}
			}

			this.state = 368;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GosuParser.T__16) {
				{
				this.state = 367;
				this.match(GosuParser.T__16);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumConstant(): EnumConstantContext {
		let _localctx: EnumConstantContext = new EnumConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, GosuParser.RULE_enumConstant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 370;
			this.id();
			this.state = 371;
			this.optionalArguments();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceMembers(): InterfaceMembersContext {
		let _localctx: InterfaceMembersContext = new InterfaceMembersContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, GosuParser.RULE_interfaceMembers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GosuParser.T__1) | (1 << GosuParser.T__3) | (1 << GosuParser.T__7) | (1 << GosuParser.T__8) | (1 << GosuParser.T__9) | (1 << GosuParser.T__10) | (1 << GosuParser.T__17) | (1 << GosuParser.T__20) | (1 << GosuParser.T__23))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (GosuParser.T__32 - 33)) | (1 << (GosuParser.T__33 - 33)) | (1 << (GosuParser.T__34 - 33)) | (1 << (GosuParser.T__35 - 33)) | (1 << (GosuParser.T__36 - 33)) | (1 << (GosuParser.T__37 - 33)) | (1 << (GosuParser.T__38 - 33)) | (1 << (GosuParser.T__39 - 33)) | (1 << (GosuParser.T__40 - 33)) | (1 << (GosuParser.T__41 - 33)) | (1 << (GosuParser.T__42 - 33)))) !== 0)) {
				{
				{
				this.state = 373;
				this.modifiers();
				this.state = 380;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case GosuParser.T__32:
					{
					this.state = 374;
					this.functionDefn();
					}
					break;
				case GosuParser.T__23:
					{
					this.state = 375;
					this.propertyDefn();
					}
					break;
				case GosuParser.T__20:
					{
					this.state = 376;
					this.fieldDefn();
					}
					break;
				case GosuParser.T__3:
					{
					this.state = 377;
					this.gClass();
					}
					break;
				case GosuParser.T__7:
				case GosuParser.T__8:
					{
					this.state = 378;
					this.gInterfaceOrStructure();
					}
					break;
				case GosuParser.T__9:
					{
					this.state = 379;
					this.gEnum();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 383;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === GosuParser.T__16) {
					{
					this.state = 382;
					this.match(GosuParser.T__16);
					}
				}

				}
				}
				this.state = 389;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classMembers(): ClassMembersContext {
		let _localctx: ClassMembersContext = new ClassMembersContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, GosuParser.RULE_classMembers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 393;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GosuParser.T__1) | (1 << GosuParser.T__3) | (1 << GosuParser.T__7) | (1 << GosuParser.T__8) | (1 << GosuParser.T__9) | (1 << GosuParser.T__10) | (1 << GosuParser.T__17) | (1 << GosuParser.T__20) | (1 << GosuParser.T__23))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (GosuParser.T__32 - 33)) | (1 << (GosuParser.T__33 - 33)) | (1 << (GosuParser.T__34 - 33)) | (1 << (GosuParser.T__35 - 33)) | (1 << (GosuParser.T__36 - 33)) | (1 << (GosuParser.T__37 - 33)) | (1 << (GosuParser.T__38 - 33)) | (1 << (GosuParser.T__39 - 33)) | (1 << (GosuParser.T__40 - 33)) | (1 << (GosuParser.T__41 - 33)) | (1 << (GosuParser.T__42 - 33)))) !== 0)) {
				{
				{
				this.state = 390;
				this.declaration();
				}
				}
				this.state = 395;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, GosuParser.RULE_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 396;
			this.modifiers();
			this.state = 413;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GosuParser.T__32:
				{
				this.state = 397;
				this.functionDefn();
				this.state = 399;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === GosuParser.T__14) {
					{
					this.state = 398;
					this.functionBody();
					}
				}

				}
				break;
			case GosuParser.T__33:
				{
				this.state = 401;
				this.constructorDefn();
				this.state = 402;
				this.functionBody();
				}
				break;
			case GosuParser.T__23:
				{
				this.state = 404;
				this.propertyDefn();
				this.state = 406;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === GosuParser.T__14) {
					{
					this.state = 405;
					this.functionBody();
					}
				}

				}
				break;
			case GosuParser.T__20:
				{
				this.state = 408;
				this.fieldDefn();
				}
				break;
			case GosuParser.T__17:
				{
				this.state = 409;
				this.delegateDefn();
				}
				break;
			case GosuParser.T__3:
				{
				this.state = 410;
				this.gClass();
				}
				break;
			case GosuParser.T__7:
			case GosuParser.T__8:
				{
				this.state = 411;
				this.gInterfaceOrStructure();
				}
				break;
			case GosuParser.T__9:
				{
				this.state = 412;
				this.gEnum();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 416;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GosuParser.T__16) {
				{
				this.state = 415;
				this.match(GosuParser.T__16);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enhancementMembers(): EnhancementMembersContext {
		let _localctx: EnhancementMembersContext = new EnhancementMembersContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, GosuParser.RULE_enhancementMembers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 432;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GosuParser.T__1) | (1 << GosuParser.T__3) | (1 << GosuParser.T__7) | (1 << GosuParser.T__8) | (1 << GosuParser.T__9) | (1 << GosuParser.T__10) | (1 << GosuParser.T__17) | (1 << GosuParser.T__20) | (1 << GosuParser.T__23))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (GosuParser.T__32 - 33)) | (1 << (GosuParser.T__33 - 33)) | (1 << (GosuParser.T__34 - 33)) | (1 << (GosuParser.T__35 - 33)) | (1 << (GosuParser.T__36 - 33)) | (1 << (GosuParser.T__37 - 33)) | (1 << (GosuParser.T__38 - 33)) | (1 << (GosuParser.T__39 - 33)) | (1 << (GosuParser.T__40 - 33)) | (1 << (GosuParser.T__41 - 33)) | (1 << (GosuParser.T__42 - 33)))) !== 0)) {
				{
				{
				this.state = 418;
				this.modifiers();
				this.state = 425;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case GosuParser.T__32:
					{
					this.state = 419;
					this.functionDefn();
					this.state = 420;
					this.functionBody();
					}
					break;
				case GosuParser.T__23:
					{
					this.state = 422;
					this.propertyDefn();
					this.state = 423;
					this.functionBody();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 428;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === GosuParser.T__16) {
					{
					this.state = 427;
					this.match(GosuParser.T__16);
					}
				}

				}
				}
				this.state = 434;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public delegateDefn(): DelegateDefnContext {
		let _localctx: DelegateDefnContext = new DelegateDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, GosuParser.RULE_delegateDefn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 435;
			this.match(GosuParser.T__17);
			this.state = 436;
			this.id();
			this.state = 437;
			this.delegateStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public delegateStatement(): DelegateStatementContext {
		let _localctx: DelegateStatementContext = new DelegateStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, GosuParser.RULE_delegateStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 441;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GosuParser.T__11) {
				{
				this.state = 439;
				this.match(GosuParser.T__11);
				this.state = 440;
				this.typeLiteral();
				}
			}

			this.state = 443;
			this.match(GosuParser.T__18);
			this.state = 444;
			this.typeLiteral();
			this.state = 449;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GosuParser.T__6) {
				{
				{
				this.state = 445;
				this.match(GosuParser.T__6);
				this.state = 446;
				this.typeLiteral();
				}
				}
				this.state = 451;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 454;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GosuParser.T__19) {
				{
				this.state = 452;
				this.match(GosuParser.T__19);
				this.state = 453;
				this.expression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionalType(): OptionalTypeContext {
		let _localctx: OptionalTypeContext = new OptionalTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, GosuParser.RULE_optionalType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 459;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 456;
				this.match(GosuParser.T__11);
				this.state = 457;
				this.typeLiteral();
				}
				break;

			case 2:
				{
				this.state = 458;
				this.blockTypeLiteral();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldDefn(): FieldDefnContext {
		let _localctx: FieldDefnContext = new FieldDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, GosuParser.RULE_fieldDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 461;
			this.match(GosuParser.T__20);
			this.state = 462;
			this.id();
			this.state = 463;
			this.optionalType();
			this.state = 469;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GosuParser.T__21) {
				{
				this.state = 464;
				this.match(GosuParser.T__21);
				this.state = 466;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
				case 1:
					{
					this.state = 465;
					this.match(GosuParser.T__22);
					}
					break;
				}
				this.state = 468;
				this.id();
				}
			}

			this.state = 473;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GosuParser.T__19) {
				{
				this.state = 471;
				this.match(GosuParser.T__19);
				this.state = 472;
				this.expression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyDefn(): PropertyDefnContext {
		let _localctx: PropertyDefnContext = new PropertyDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, GosuParser.RULE_propertyDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 475;
			this.match(GosuParser.T__23);
			this.state = 476;
			_la = this._input.LA(1);
			if (!(_la === GosuParser.T__24 || _la === GosuParser.T__25)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 477;
			this.id();
			this.state = 478;
			this.parameters();
			this.state = 481;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GosuParser.T__11) {
				{
				this.state = 479;
				this.match(GosuParser.T__11);
				this.state = 480;
				this.typeLiteral();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dotPathWord(): DotPathWordContext {
		let _localctx: DotPathWordContext = new DotPathWordContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, GosuParser.RULE_dotPathWord);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 483;
			this.idAll();
			this.state = 488;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 484;
					this.match(GosuParser.T__2);
					this.state = 485;
					this.idAll();
					}
					}
				}
				this.state = 490;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespaceStatement(): NamespaceStatementContext {
		let _localctx: NamespaceStatementContext = new NamespaceStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, GosuParser.RULE_namespaceStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 491;
			this.dotPathWord();
			this.state = 495;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GosuParser.T__16) {
				{
				{
				this.state = 492;
				this.match(GosuParser.T__16);
				}
				}
				this.state = 497;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public usesStatementList(): UsesStatementListContext {
		let _localctx: UsesStatementListContext = new UsesStatementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, GosuParser.RULE_usesStatementList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 500;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 498;
				this.match(GosuParser.T__26);
				this.state = 499;
				this.usesStatement();
				}
				}
				this.state = 502;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === GosuParser.T__26);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public usesStatement(): UsesStatementContext {
		let _localctx: UsesStatementContext = new UsesStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, GosuParser.RULE_usesStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 504;
			this.dotPathWord();
			this.state = 507;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GosuParser.T__2) {
				{
				this.state = 505;
				this.match(GosuParser.T__2);
				this.state = 506;
				this.match(GosuParser.T__27);
				}
			}

			this.state = 512;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GosuParser.T__16) {
				{
				{
				this.state = 509;
				this.match(GosuParser.T__16);
				}
				}
				this.state = 514;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeVariableDefs(): TypeVariableDefsContext {
		let _localctx: TypeVariableDefsContext = new TypeVariableDefsContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, GosuParser.RULE_typeVariableDefs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 526;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GosuParser.T__28) {
				{
				this.state = 515;
				this.match(GosuParser.T__28);
				this.state = 516;
				this.typeVariableDefinition();
				this.state = 521;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === GosuParser.T__6) {
					{
					{
					this.state = 517;
					this.match(GosuParser.T__6);
					this.state = 518;
					this.typeVariableDefinition();
					}
					}
					this.state = 523;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 524;
				this.match(GosuParser.T__29);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeVariableDefinition(): TypeVariableDefinitionContext {
		let _localctx: TypeVariableDefinitionContext = new TypeVariableDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, GosuParser.RULE_typeVariableDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 528;
			this.id();
			this.state = 531;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GosuParser.T__4) {
				{
				this.state = 529;
				this.match(GosuParser.T__4);
				this.state = 530;
				this.typeLiteralList();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionBody(): FunctionBodyContext {
		let _localctx: FunctionBodyContext = new FunctionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, GosuParser.RULE_functionBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 533;
			this.statementBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, GosuParser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 535;
			this.match(GosuParser.T__30);
			this.state = 537;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GosuParser.T__1) | (1 << GosuParser.T__10) | (1 << GosuParser.T__21) | (1 << GosuParser.T__22) | (1 << GosuParser.T__24) | (1 << GosuParser.T__25))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (GosuParser.T__34 - 35)) | (1 << (GosuParser.T__35 - 35)) | (1 << (GosuParser.T__36 - 35)) | (1 << (GosuParser.T__37 - 35)) | (1 << (GosuParser.T__38 - 35)) | (1 << (GosuParser.T__39 - 35)) | (1 << (GosuParser.T__41 - 35)) | (1 << (GosuParser.T__50 - 35)) | (1 << (GosuParser.T__62 - 35)) | (1 << (GosuParser.T__63 - 35)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (GosuParser.T__67 - 68)) | (1 << (GosuParser.T__83 - 68)) | (1 << (GosuParser.T__84 - 68)) | (1 << (GosuParser.T__85 - 68)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (GosuParser.T__127 - 128)) | (1 << (GosuParser.T__128 - 128)) | (1 << (GosuParser.T__129 - 128)) | (1 << (GosuParser.T__130 - 128)) | (1 << (GosuParser.T__131 - 128)) | (1 << (GosuParser.T__132 - 128)) | (1 << (GosuParser.T__133 - 128)) | (1 << (GosuParser.T__134 - 128)) | (1 << (GosuParser.T__135 - 128)) | (1 << (GosuParser.T__136 - 128)) | (1 << (GosuParser.T__137 - 128)) | (1 << (GosuParser.T__138 - 128)) | (1 << (GosuParser.T__139 - 128)) | (1 << (GosuParser.T__140 - 128)) | (1 << (GosuParser.T__141 - 128)) | (1 << (GosuParser.T__142 - 128)) | (1 << (GosuParser.T__143 - 128)) | (1 << (GosuParser.T__144 - 128)) | (1 << (GosuParser.Ident - 128)))) !== 0)) {
				{
				this.state = 536;
				this.parameterDeclarationList();
				}
			}

			this.state = 539;
			this.match(GosuParser.T__31);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDefn(): FunctionDefnContext {
		let _localctx: FunctionDefnContext = new FunctionDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, GosuParser.RULE_functionDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 541;
			this.match(GosuParser.T__32);
			this.state = 542;
			this.id();
			this.state = 543;
			this.typeVariableDefs();
			this.state = 544;
			this.parameters();
			this.state = 547;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GosuParser.T__11) {
				{
				this.state = 545;
				this.match(GosuParser.T__11);
				this.state = 546;
				this.typeLiteral();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorDefn(): ConstructorDefnContext {
		let _localctx: ConstructorDefnContext = new ConstructorDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, GosuParser.RULE_constructorDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 549;
			this.match(GosuParser.T__33);
			this.state = 550;
			this.parameters();
			this.state = 553;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GosuParser.T__11) {
				{
				this.state = 551;
				this.match(GosuParser.T__11);
				this.state = 552;
				this.typeLiteral();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modifiers(): ModifiersContext {
		let _localctx: ModifiersContext = new ModifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, GosuParser.RULE_modifiers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 567;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GosuParser.T__1 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (GosuParser.T__34 - 35)) | (1 << (GosuParser.T__35 - 35)) | (1 << (GosuParser.T__36 - 35)) | (1 << (GosuParser.T__37 - 35)) | (1 << (GosuParser.T__38 - 35)) | (1 << (GosuParser.T__39 - 35)) | (1 << (GosuParser.T__40 - 35)) | (1 << (GosuParser.T__41 - 35)) | (1 << (GosuParser.T__42 - 35)))) !== 0)) {
				{
				this.state = 565;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case GosuParser.T__1:
					{
					this.state = 555;
					this.annotation();
					}
					break;
				case GosuParser.T__34:
					{
					this.state = 556;
					this.match(GosuParser.T__34);
					}
					break;
				case GosuParser.T__35:
					{
					this.state = 557;
					this.match(GosuParser.T__35);
					}
					break;
				case GosuParser.T__36:
					{
					this.state = 558;
					this.match(GosuParser.T__36);
					}
					break;
				case GosuParser.T__37:
					{
					this.state = 559;
					this.match(GosuParser.T__37);
					}
					break;
				case GosuParser.T__38:
					{
					this.state = 560;
					this.match(GosuParser.T__38);
					}
					break;
				case GosuParser.T__39:
					{
					this.state = 561;
					this.match(GosuParser.T__39);
					}
					break;
				case GosuParser.T__40:
					{
					this.state = 562;
					this.match(GosuParser.T__40);
					}
					break;
				case GosuParser.T__41:
					{
					this.state = 563;
					this.match(GosuParser.T__41);
					}
					break;
				case GosuParser.T__42:
					{
					this.state = 564;
					this.match(GosuParser.T__42);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 569;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, GosuParser.RULE_statement);
		try {
			this.state = 595;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GosuParser.T__10:
			case GosuParser.T__14:
			case GosuParser.T__20:
			case GosuParser.T__21:
			case GosuParser.T__22:
			case GosuParser.T__24:
			case GosuParser.T__25:
			case GosuParser.T__30:
			case GosuParser.T__34:
			case GosuParser.T__35:
			case GosuParser.T__36:
			case GosuParser.T__37:
			case GosuParser.T__38:
			case GosuParser.T__39:
			case GosuParser.T__41:
			case GosuParser.T__43:
			case GosuParser.T__44:
			case GosuParser.T__45:
			case GosuParser.T__47:
			case GosuParser.T__50:
			case GosuParser.T__51:
			case GosuParser.T__52:
			case GosuParser.T__53:
			case GosuParser.T__54:
			case GosuParser.T__55:
			case GosuParser.T__58:
			case GosuParser.T__59:
			case GosuParser.T__60:
			case GosuParser.T__62:
			case GosuParser.T__63:
			case GosuParser.T__64:
			case GosuParser.T__65:
			case GosuParser.T__67:
			case GosuParser.T__77:
			case GosuParser.T__78:
			case GosuParser.T__79:
			case GosuParser.T__83:
			case GosuParser.T__84:
			case GosuParser.T__85:
			case GosuParser.T__127:
			case GosuParser.T__128:
			case GosuParser.T__129:
			case GosuParser.T__130:
			case GosuParser.T__131:
			case GosuParser.T__132:
			case GosuParser.T__133:
			case GosuParser.T__134:
			case GosuParser.T__135:
			case GosuParser.T__136:
			case GosuParser.T__137:
			case GosuParser.T__138:
			case GosuParser.T__139:
			case GosuParser.T__140:
			case GosuParser.T__141:
			case GosuParser.T__142:
			case GosuParser.T__143:
			case GosuParser.T__144:
			case GosuParser.INCREMENT:
			case GosuParser.DECREMENT:
			case GosuParser.BACKSLASH:
			case GosuParser.Ident:
			case GosuParser.NumberLiteral:
			case GosuParser.CharLiteral:
			case GosuParser.StringLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 589;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
				case 1:
					{
					this.state = 570;
					this.ifStatement();
					}
					break;

				case 2:
					{
					this.state = 571;
					this.tryCatchFinallyStatement();
					}
					break;

				case 3:
					{
					this.state = 572;
					this.throwStatement();
					}
					break;

				case 4:
					{
					this.state = 573;
					this.match(GosuParser.T__43);
					}
					break;

				case 5:
					{
					this.state = 574;
					this.match(GosuParser.T__44);
					}
					break;

				case 6:
					{
					this.state = 575;
					this.returnStatement();
					}
					break;

				case 7:
					{
					this.state = 576;
					this.forEachStatement();
					}
					break;

				case 8:
					{
					this.state = 577;
					this.whileStatement();
					}
					break;

				case 9:
					{
					this.state = 578;
					this.doWhileStatement();
					}
					break;

				case 10:
					{
					this.state = 579;
					this.switchStatement();
					}
					break;

				case 11:
					{
					this.state = 580;
					this.usingStatement();
					}
					break;

				case 12:
					{
					this.state = 581;
					this.assertStatement();
					}
					break;

				case 13:
					{
					this.state = 582;
					this.match(GosuParser.T__41);
					this.state = 583;
					this.localVarStatement();
					}
					break;

				case 14:
					{
					this.state = 584;
					this.localVarStatement();
					}
					break;

				case 15:
					{
					this.state = 585;
					this.evalExpr();
					}
					break;

				case 16:
					{
					this.state = 586;
					this.assignmentOrMethodCall();
					}
					break;

				case 17:
					{
					this.state = 587;
					this.incrementDecrementStatement();
					}
					break;

				case 18:
					{
					this.state = 588;
					this.statementBlock();
					}
					break;
				}
				this.state = 592;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
				case 1:
					{
					this.state = 591;
					this.match(GosuParser.T__16);
					}
					break;
				}
				}
				}
				break;
			case GosuParser.T__16:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 594;
				this.match(GosuParser.T__16);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public incrementDecrementStatement(): IncrementDecrementStatementContext {
		let _localctx: IncrementDecrementStatementContext = new IncrementDecrementStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, GosuParser.RULE_incrementDecrementStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 600;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GosuParser.T__10) | (1 << GosuParser.T__14) | (1 << GosuParser.T__21) | (1 << GosuParser.T__22) | (1 << GosuParser.T__24) | (1 << GosuParser.T__25) | (1 << GosuParser.T__30))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (GosuParser.T__34 - 35)) | (1 << (GosuParser.T__35 - 35)) | (1 << (GosuParser.T__36 - 35)) | (1 << (GosuParser.T__37 - 35)) | (1 << (GosuParser.T__38 - 35)) | (1 << (GosuParser.T__39 - 35)) | (1 << (GosuParser.T__41 - 35)) | (1 << (GosuParser.T__50 - 35)) | (1 << (GosuParser.T__62 - 35)) | (1 << (GosuParser.T__63 - 35)) | (1 << (GosuParser.T__64 - 35)) | (1 << (GosuParser.T__65 - 35)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (GosuParser.T__67 - 68)) | (1 << (GosuParser.T__78 - 68)) | (1 << (GosuParser.T__79 - 68)) | (1 << (GosuParser.T__83 - 68)) | (1 << (GosuParser.T__84 - 68)) | (1 << (GosuParser.T__85 - 68)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (GosuParser.T__127 - 128)) | (1 << (GosuParser.T__128 - 128)) | (1 << (GosuParser.T__129 - 128)) | (1 << (GosuParser.T__130 - 128)) | (1 << (GosuParser.T__131 - 128)) | (1 << (GosuParser.T__132 - 128)) | (1 << (GosuParser.T__133 - 128)) | (1 << (GosuParser.T__134 - 128)) | (1 << (GosuParser.T__135 - 128)) | (1 << (GosuParser.T__136 - 128)) | (1 << (GosuParser.T__137 - 128)) | (1 << (GosuParser.T__138 - 128)) | (1 << (GosuParser.T__139 - 128)) | (1 << (GosuParser.T__140 - 128)) | (1 << (GosuParser.T__141 - 128)) | (1 << (GosuParser.T__142 - 128)) | (1 << (GosuParser.T__143 - 128)) | (1 << (GosuParser.T__144 - 128)) | (1 << (GosuParser.BACKSLASH - 128)) | (1 << (GosuParser.Ident - 128)) | (1 << (GosuParser.NumberLiteral - 128)) | (1 << (GosuParser.CharLiteral - 128)))) !== 0) || _la === GosuParser.StringLiteral) {
				{
				this.state = 597;
				this.primaryExpr();
				this.state = 598;
				this.indirectMemberAccess();
				}
			}

			this.state = 602;
			this.incrementOp();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, GosuParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 604;
			this.match(GosuParser.T__45);
			this.state = 605;
			this.match(GosuParser.T__30);
			this.state = 606;
			this.expression();
			this.state = 607;
			this.match(GosuParser.T__31);
			this.state = 608;
			this.statement();
			this.state = 610;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				{
				this.state = 609;
				this.match(GosuParser.T__16);
				}
				break;
			}
			this.state = 614;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				{
				this.state = 612;
				this.match(GosuParser.T__46);
				this.state = 613;
				this.statement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryCatchFinallyStatement(): TryCatchFinallyStatementContext {
		let _localctx: TryCatchFinallyStatementContext = new TryCatchFinallyStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, GosuParser.RULE_tryCatchFinallyStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 616;
			this.match(GosuParser.T__47);
			this.state = 617;
			this.statementBlock();
			this.state = 629;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GosuParser.T__49:
				{
				this.state = 619;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 618;
					this.catchClause();
					}
					}
					this.state = 621;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === GosuParser.T__49);
				this.state = 625;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === GosuParser.T__48) {
					{
					this.state = 623;
					this.match(GosuParser.T__48);
					this.state = 624;
					this.statementBlock();
					}
				}

				}
				break;
			case GosuParser.T__48:
				{
				this.state = 627;
				this.match(GosuParser.T__48);
				this.state = 628;
				this.statementBlock();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchClause(): CatchClauseContext {
		let _localctx: CatchClauseContext = new CatchClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, GosuParser.RULE_catchClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 631;
			this.match(GosuParser.T__49);
			this.state = 632;
			this.match(GosuParser.T__30);
			this.state = 634;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GosuParser.T__20) {
				{
				this.state = 633;
				this.match(GosuParser.T__20);
				}
			}

			this.state = 636;
			this.id();
			this.state = 639;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GosuParser.T__11) {
				{
				this.state = 637;
				this.match(GosuParser.T__11);
				this.state = 638;
				this.typeLiteral();
				}
			}

			this.state = 641;
			this.match(GosuParser.T__31);
			this.state = 642;
			this.statementBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assertStatement(): AssertStatementContext {
		let _localctx: AssertStatementContext = new AssertStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, GosuParser.RULE_assertStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 644;
			this.match(GosuParser.T__50);
			this.state = 645;
			this.expression();
			this.state = 648;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GosuParser.T__11) {
				{
				this.state = 646;
				this.match(GosuParser.T__11);
				this.state = 647;
				this.expression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public usingStatement(): UsingStatementContext {
		let _localctx: UsingStatementContext = new UsingStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, GosuParser.RULE_usingStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 650;
			this.match(GosuParser.T__51);
			this.state = 651;
			this.match(GosuParser.T__30);
			this.state = 661;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GosuParser.T__20:
				{
				this.state = 652;
				this.localVarStatement();
				this.state = 657;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === GosuParser.T__6) {
					{
					{
					this.state = 653;
					this.match(GosuParser.T__6);
					this.state = 654;
					this.localVarStatement();
					}
					}
					this.state = 659;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case GosuParser.T__10:
			case GosuParser.T__14:
			case GosuParser.T__21:
			case GosuParser.T__22:
			case GosuParser.T__24:
			case GosuParser.T__25:
			case GosuParser.T__30:
			case GosuParser.T__34:
			case GosuParser.T__35:
			case GosuParser.T__36:
			case GosuParser.T__37:
			case GosuParser.T__38:
			case GosuParser.T__39:
			case GosuParser.T__41:
			case GosuParser.T__50:
			case GosuParser.T__62:
			case GosuParser.T__63:
			case GosuParser.T__64:
			case GosuParser.T__65:
			case GosuParser.T__67:
			case GosuParser.T__73:
			case GosuParser.T__74:
			case GosuParser.T__75:
			case GosuParser.T__77:
			case GosuParser.T__78:
			case GosuParser.T__79:
			case GosuParser.T__83:
			case GosuParser.T__84:
			case GosuParser.T__85:
			case GosuParser.T__122:
			case GosuParser.T__123:
			case GosuParser.T__124:
			case GosuParser.T__125:
			case GosuParser.T__126:
			case GosuParser.T__127:
			case GosuParser.T__128:
			case GosuParser.T__129:
			case GosuParser.T__130:
			case GosuParser.T__131:
			case GosuParser.T__132:
			case GosuParser.T__133:
			case GosuParser.T__134:
			case GosuParser.T__135:
			case GosuParser.T__136:
			case GosuParser.T__137:
			case GosuParser.T__138:
			case GosuParser.T__139:
			case GosuParser.T__140:
			case GosuParser.T__141:
			case GosuParser.T__142:
			case GosuParser.T__143:
			case GosuParser.T__144:
			case GosuParser.BACKSLASH:
			case GosuParser.Ident:
			case GosuParser.NumberLiteral:
			case GosuParser.CharLiteral:
			case GosuParser.StringLiteral:
				{
				this.state = 660;
				this.expression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 663;
			this.match(GosuParser.T__31);
			this.state = 664;
			this.statementBlock();
			this.state = 667;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GosuParser.T__48) {
				{
				this.state = 665;
				this.match(GosuParser.T__48);
				this.state = 666;
				this.statementBlock();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, GosuParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 669;
			this.match(GosuParser.T__52);
			this.state = 671;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				{
				this.state = 670;
				this.expression();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, GosuParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 673;
			this.match(GosuParser.T__53);
			this.state = 674;
			this.match(GosuParser.T__30);
			this.state = 675;
			this.expression();
			this.state = 676;
			this.match(GosuParser.T__31);
			this.state = 677;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public doWhileStatement(): DoWhileStatementContext {
		let _localctx: DoWhileStatementContext = new DoWhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, GosuParser.RULE_doWhileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 679;
			this.match(GosuParser.T__54);
			this.state = 680;
			this.statement();
			this.state = 681;
			this.match(GosuParser.T__53);
			this.state = 682;
			this.match(GosuParser.T__30);
			this.state = 683;
			this.expression();
			this.state = 684;
			this.match(GosuParser.T__31);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchStatement(): SwitchStatementContext {
		let _localctx: SwitchStatementContext = new SwitchStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, GosuParser.RULE_switchStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 686;
			this.match(GosuParser.T__55);
			this.state = 687;
			this.match(GosuParser.T__30);
			this.state = 688;
			this.expression();
			this.state = 689;
			this.match(GosuParser.T__31);
			this.state = 690;
			this.match(GosuParser.T__14);
			this.state = 694;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GosuParser.T__56 || _la === GosuParser.T__57) {
				{
				{
				this.state = 691;
				this.switchBlockStatementGroup();
				}
				}
				this.state = 696;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 697;
			this.match(GosuParser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext {
		let _localctx: SwitchBlockStatementGroupContext = new SwitchBlockStatementGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, GosuParser.RULE_switchBlockStatementGroup);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 705;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GosuParser.T__56:
				{
				this.state = 699;
				this.match(GosuParser.T__56);
				this.state = 700;
				this.expression();
				this.state = 701;
				this.match(GosuParser.T__11);
				}
				break;
			case GosuParser.T__57:
				{
				this.state = 703;
				this.match(GosuParser.T__57);
				this.state = 704;
				this.match(GosuParser.T__11);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 710;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GosuParser.T__10) | (1 << GosuParser.T__14) | (1 << GosuParser.T__16) | (1 << GosuParser.T__20) | (1 << GosuParser.T__21) | (1 << GosuParser.T__22) | (1 << GosuParser.T__24) | (1 << GosuParser.T__25) | (1 << GosuParser.T__30))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (GosuParser.T__34 - 35)) | (1 << (GosuParser.T__35 - 35)) | (1 << (GosuParser.T__36 - 35)) | (1 << (GosuParser.T__37 - 35)) | (1 << (GosuParser.T__38 - 35)) | (1 << (GosuParser.T__39 - 35)) | (1 << (GosuParser.T__41 - 35)) | (1 << (GosuParser.T__43 - 35)) | (1 << (GosuParser.T__44 - 35)) | (1 << (GosuParser.T__45 - 35)) | (1 << (GosuParser.T__47 - 35)) | (1 << (GosuParser.T__50 - 35)) | (1 << (GosuParser.T__51 - 35)) | (1 << (GosuParser.T__52 - 35)) | (1 << (GosuParser.T__53 - 35)) | (1 << (GosuParser.T__54 - 35)) | (1 << (GosuParser.T__55 - 35)) | (1 << (GosuParser.T__58 - 35)) | (1 << (GosuParser.T__59 - 35)) | (1 << (GosuParser.T__60 - 35)) | (1 << (GosuParser.T__62 - 35)) | (1 << (GosuParser.T__63 - 35)) | (1 << (GosuParser.T__64 - 35)) | (1 << (GosuParser.T__65 - 35)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (GosuParser.T__67 - 68)) | (1 << (GosuParser.T__77 - 68)) | (1 << (GosuParser.T__78 - 68)) | (1 << (GosuParser.T__79 - 68)) | (1 << (GosuParser.T__83 - 68)) | (1 << (GosuParser.T__84 - 68)) | (1 << (GosuParser.T__85 - 68)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (GosuParser.T__127 - 128)) | (1 << (GosuParser.T__128 - 128)) | (1 << (GosuParser.T__129 - 128)) | (1 << (GosuParser.T__130 - 128)) | (1 << (GosuParser.T__131 - 128)) | (1 << (GosuParser.T__132 - 128)) | (1 << (GosuParser.T__133 - 128)) | (1 << (GosuParser.T__134 - 128)) | (1 << (GosuParser.T__135 - 128)) | (1 << (GosuParser.T__136 - 128)) | (1 << (GosuParser.T__137 - 128)) | (1 << (GosuParser.T__138 - 128)) | (1 << (GosuParser.T__139 - 128)) | (1 << (GosuParser.T__140 - 128)) | (1 << (GosuParser.T__141 - 128)) | (1 << (GosuParser.T__142 - 128)) | (1 << (GosuParser.T__143 - 128)) | (1 << (GosuParser.T__144 - 128)) | (1 << (GosuParser.INCREMENT - 128)) | (1 << (GosuParser.DECREMENT - 128)) | (1 << (GosuParser.BACKSLASH - 128)) | (1 << (GosuParser.Ident - 128)) | (1 << (GosuParser.NumberLiteral - 128)) | (1 << (GosuParser.CharLiteral - 128)))) !== 0) || _la === GosuParser.StringLiteral) {
				{
				{
				this.state = 707;
				this.statement();
				}
				}
				this.state = 712;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public throwStatement(): ThrowStatementContext {
		let _localctx: ThrowStatementContext = new ThrowStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, GosuParser.RULE_throwStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 713;
			this.match(GosuParser.T__58);
			this.state = 714;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localVarStatement(): LocalVarStatementContext {
		let _localctx: LocalVarStatementContext = new LocalVarStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, GosuParser.RULE_localVarStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 716;
			this.match(GosuParser.T__20);
			this.state = 717;
			this.id();
			this.state = 718;
			this.optionalType();
			this.state = 721;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GosuParser.T__19) {
				{
				this.state = 719;
				this.match(GosuParser.T__19);
				this.state = 720;
				this.expression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forEachStatement(): ForEachStatementContext {
		let _localctx: ForEachStatementContext = new ForEachStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, GosuParser.RULE_forEachStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 723;
			_la = this._input.LA(1);
			if (!(_la === GosuParser.T__59 || _la === GosuParser.T__60)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 724;
			this.match(GosuParser.T__30);
			this.state = 738;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				{
				this.state = 725;
				this.expression();
				this.state = 727;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === GosuParser.T__62) {
					{
					this.state = 726;
					this.indexVar();
					}
				}

				}
				break;

			case 2:
				{
				this.state = 730;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === GosuParser.T__20) {
					{
					this.state = 729;
					this.match(GosuParser.T__20);
					}
				}

				this.state = 732;
				this.id();
				this.state = 733;
				this.match(GosuParser.T__61);
				this.state = 734;
				this.expression();
				this.state = 736;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === GosuParser.T__62 || _la === GosuParser.T__63) {
					{
					this.state = 735;
					this.indexRest();
					}
				}

				}
				break;
			}
			this.state = 740;
			this.match(GosuParser.T__31);
			this.state = 741;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public indexRest(): IndexRestContext {
		let _localctx: IndexRestContext = new IndexRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, GosuParser.RULE_indexRest);
		try {
			this.state = 751;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 743;
				this.indexVar();
				this.state = 744;
				this.iteratorVar();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 746;
				this.iteratorVar();
				this.state = 747;
				this.indexVar();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 749;
				this.indexVar();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 750;
				this.iteratorVar();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public indexVar(): IndexVarContext {
		let _localctx: IndexVarContext = new IndexVarContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, GosuParser.RULE_indexVar);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 753;
			this.match(GosuParser.T__62);
			this.state = 754;
			this.id();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iteratorVar(): IteratorVarContext {
		let _localctx: IteratorVarContext = new IteratorVarContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, GosuParser.RULE_iteratorVar);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 756;
			this.match(GosuParser.T__63);
			this.state = 757;
			this.id();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thisSuperExpr(): ThisSuperExprContext {
		let _localctx: ThisSuperExprContext = new ThisSuperExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, GosuParser.RULE_thisSuperExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 759;
			_la = this._input.LA(1);
			if (!(_la === GosuParser.T__64 || _la === GosuParser.T__65)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentOrMethodCall(): AssignmentOrMethodCallContext {
		let _localctx: AssignmentOrMethodCallContext = new AssignmentOrMethodCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, GosuParser.RULE_assignmentOrMethodCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 767;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				{
				this.state = 761;
				this.newExpr();
				}
				break;

			case 2:
				{
				this.state = 762;
				this.thisSuperExpr();
				}
				break;

			case 3:
				{
				this.state = 763;
				this.typeLiteralExpr();
				}
				break;

			case 4:
				{
				this.state = 764;
				this.parenthExpr();
				}
				break;

			case 5:
				{
				this.state = 765;
				this.match(GosuParser.StringLiteral);
				}
				break;

			case 6:
				{
				this.state = 766;
				this.literal();
				}
				break;
			}
			this.state = 769;
			this.indirectMemberAccess();
			}
			this.state = 775;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				{
				this.state = 771;
				this.incrementOp();
				}
				break;

			case 2:
				{
				this.state = 772;
				this.assignmentOp();
				this.state = 773;
				this.expression();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementBlock(): StatementBlockContext {
		let _localctx: StatementBlockContext = new StatementBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, GosuParser.RULE_statementBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 777;
			this.statementBlockBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementBlockBody(): StatementBlockBodyContext {
		let _localctx: StatementBlockBodyContext = new StatementBlockBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, GosuParser.RULE_statementBlockBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 779;
			this.match(GosuParser.T__14);
			this.state = 783;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GosuParser.T__10) | (1 << GosuParser.T__14) | (1 << GosuParser.T__16) | (1 << GosuParser.T__20) | (1 << GosuParser.T__21) | (1 << GosuParser.T__22) | (1 << GosuParser.T__24) | (1 << GosuParser.T__25) | (1 << GosuParser.T__30))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (GosuParser.T__34 - 35)) | (1 << (GosuParser.T__35 - 35)) | (1 << (GosuParser.T__36 - 35)) | (1 << (GosuParser.T__37 - 35)) | (1 << (GosuParser.T__38 - 35)) | (1 << (GosuParser.T__39 - 35)) | (1 << (GosuParser.T__41 - 35)) | (1 << (GosuParser.T__43 - 35)) | (1 << (GosuParser.T__44 - 35)) | (1 << (GosuParser.T__45 - 35)) | (1 << (GosuParser.T__47 - 35)) | (1 << (GosuParser.T__50 - 35)) | (1 << (GosuParser.T__51 - 35)) | (1 << (GosuParser.T__52 - 35)) | (1 << (GosuParser.T__53 - 35)) | (1 << (GosuParser.T__54 - 35)) | (1 << (GosuParser.T__55 - 35)) | (1 << (GosuParser.T__58 - 35)) | (1 << (GosuParser.T__59 - 35)) | (1 << (GosuParser.T__60 - 35)) | (1 << (GosuParser.T__62 - 35)) | (1 << (GosuParser.T__63 - 35)) | (1 << (GosuParser.T__64 - 35)) | (1 << (GosuParser.T__65 - 35)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (GosuParser.T__67 - 68)) | (1 << (GosuParser.T__77 - 68)) | (1 << (GosuParser.T__78 - 68)) | (1 << (GosuParser.T__79 - 68)) | (1 << (GosuParser.T__83 - 68)) | (1 << (GosuParser.T__84 - 68)) | (1 << (GosuParser.T__85 - 68)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (GosuParser.T__127 - 128)) | (1 << (GosuParser.T__128 - 128)) | (1 << (GosuParser.T__129 - 128)) | (1 << (GosuParser.T__130 - 128)) | (1 << (GosuParser.T__131 - 128)) | (1 << (GosuParser.T__132 - 128)) | (1 << (GosuParser.T__133 - 128)) | (1 << (GosuParser.T__134 - 128)) | (1 << (GosuParser.T__135 - 128)) | (1 << (GosuParser.T__136 - 128)) | (1 << (GosuParser.T__137 - 128)) | (1 << (GosuParser.T__138 - 128)) | (1 << (GosuParser.T__139 - 128)) | (1 << (GosuParser.T__140 - 128)) | (1 << (GosuParser.T__141 - 128)) | (1 << (GosuParser.T__142 - 128)) | (1 << (GosuParser.T__143 - 128)) | (1 << (GosuParser.T__144 - 128)) | (1 << (GosuParser.INCREMENT - 128)) | (1 << (GosuParser.DECREMENT - 128)) | (1 << (GosuParser.BACKSLASH - 128)) | (1 << (GosuParser.Ident - 128)) | (1 << (GosuParser.NumberLiteral - 128)) | (1 << (GosuParser.CharLiteral - 128)))) !== 0) || _la === GosuParser.StringLiteral) {
				{
				{
				this.state = 780;
				this.statement();
				}
				}
				this.state = 785;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 786;
			this.match(GosuParser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockTypeLiteral(): BlockTypeLiteralContext {
		let _localctx: BlockTypeLiteralContext = new BlockTypeLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, GosuParser.RULE_blockTypeLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 788;
			this.blockLiteral();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockLiteral(): BlockLiteralContext {
		let _localctx: BlockLiteralContext = new BlockLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, GosuParser.RULE_blockLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 790;
			this.match(GosuParser.T__30);
			this.state = 799;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GosuParser.T__10) | (1 << GosuParser.T__21) | (1 << GosuParser.T__22) | (1 << GosuParser.T__24) | (1 << GosuParser.T__25))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (GosuParser.T__34 - 35)) | (1 << (GosuParser.T__35 - 35)) | (1 << (GosuParser.T__36 - 35)) | (1 << (GosuParser.T__37 - 35)) | (1 << (GosuParser.T__38 - 35)) | (1 << (GosuParser.T__39 - 35)) | (1 << (GosuParser.T__41 - 35)) | (1 << (GosuParser.T__50 - 35)) | (1 << (GosuParser.T__62 - 35)) | (1 << (GosuParser.T__63 - 35)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (GosuParser.T__67 - 68)) | (1 << (GosuParser.T__83 - 68)) | (1 << (GosuParser.T__84 - 68)) | (1 << (GosuParser.T__85 - 68)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (GosuParser.T__127 - 128)) | (1 << (GosuParser.T__128 - 128)) | (1 << (GosuParser.T__129 - 128)) | (1 << (GosuParser.T__130 - 128)) | (1 << (GosuParser.T__131 - 128)) | (1 << (GosuParser.T__132 - 128)) | (1 << (GosuParser.T__133 - 128)) | (1 << (GosuParser.T__134 - 128)) | (1 << (GosuParser.T__135 - 128)) | (1 << (GosuParser.T__136 - 128)) | (1 << (GosuParser.T__137 - 128)) | (1 << (GosuParser.T__138 - 128)) | (1 << (GosuParser.T__139 - 128)) | (1 << (GosuParser.T__140 - 128)) | (1 << (GosuParser.T__141 - 128)) | (1 << (GosuParser.T__142 - 128)) | (1 << (GosuParser.T__143 - 128)) | (1 << (GosuParser.T__144 - 128)) | (1 << (GosuParser.Ident - 128)))) !== 0)) {
				{
				this.state = 791;
				this.blockLiteralArg();
				this.state = 796;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === GosuParser.T__6) {
					{
					{
					this.state = 792;
					this.match(GosuParser.T__6);
					this.state = 793;
					this.blockLiteralArg();
					}
					}
					this.state = 798;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 801;
			this.match(GosuParser.T__31);
			this.state = 804;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				{
				this.state = 802;
				this.match(GosuParser.T__11);
				this.state = 803;
				this.typeLiteral();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockLiteralArg(): BlockLiteralArgContext {
		let _localctx: BlockLiteralArgContext = new BlockLiteralArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, GosuParser.RULE_blockLiteralArg);
		let _la: number;
		try {
			this.state = 822;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 806;
				this.id();
				this.state = 810;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case GosuParser.T__19:
					{
					this.state = 807;
					this.match(GosuParser.T__19);
					this.state = 808;
					this.expression();
					}
					break;
				case GosuParser.T__30:
					{
					this.state = 809;
					this.blockTypeLiteral();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 815;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
				case 1:
					{
					this.state = 812;
					this.id();
					this.state = 813;
					this.match(GosuParser.T__11);
					}
					break;
				}
				this.state = 817;
				this.typeLiteral();
				this.state = 820;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === GosuParser.T__19) {
					{
					this.state = 818;
					this.match(GosuParser.T__19);
					this.state = 819;
					this.expression();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeLiteral(): TypeLiteralContext {
		let _localctx: TypeLiteralContext = new TypeLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, GosuParser.RULE_typeLiteral);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 824;
			this.type();
			this.state = 829;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 825;
					this.match(GosuParser.T__66);
					this.state = 826;
					this.type();
					}
					}
				}
				this.state = 831;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeLiteralType(): TypeLiteralTypeContext {
		let _localctx: TypeLiteralTypeContext = new TypeLiteralTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, GosuParser.RULE_typeLiteralType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 832;
			this.typeLiteral();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeLiteralExpr(): TypeLiteralExprContext {
		let _localctx: TypeLiteralExprContext = new TypeLiteralExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, GosuParser.RULE_typeLiteralExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 834;
			this.typeLiteral();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeLiteralList(): TypeLiteralListContext {
		let _localctx: TypeLiteralListContext = new TypeLiteralListContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, GosuParser.RULE_typeLiteralList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 836;
			this.typeLiteral();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, GosuParser.RULE_type);
		try {
			let _alt: number;
			this.state = 848;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GosuParser.T__10:
			case GosuParser.T__21:
			case GosuParser.T__22:
			case GosuParser.T__24:
			case GosuParser.T__25:
			case GosuParser.T__34:
			case GosuParser.T__35:
			case GosuParser.T__36:
			case GosuParser.T__37:
			case GosuParser.T__38:
			case GosuParser.T__39:
			case GosuParser.T__41:
			case GosuParser.T__50:
			case GosuParser.T__62:
			case GosuParser.T__63:
			case GosuParser.T__83:
			case GosuParser.T__84:
			case GosuParser.T__85:
			case GosuParser.T__127:
			case GosuParser.T__128:
			case GosuParser.T__129:
			case GosuParser.T__130:
			case GosuParser.T__131:
			case GosuParser.T__132:
			case GosuParser.T__133:
			case GosuParser.T__134:
			case GosuParser.T__135:
			case GosuParser.T__136:
			case GosuParser.T__137:
			case GosuParser.T__138:
			case GosuParser.T__139:
			case GosuParser.T__140:
			case GosuParser.T__141:
			case GosuParser.T__142:
			case GosuParser.T__143:
			case GosuParser.T__144:
			case GosuParser.Ident:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 838;
				this.classOrInterfaceType();
				this.state = 843;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 839;
						this.match(GosuParser.T__12);
						this.state = 840;
						this.match(GosuParser.T__13);
						}
						}
					}
					this.state = 845;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
				}
				}
				break;
			case GosuParser.T__67:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 846;
				this.match(GosuParser.T__67);
				this.state = 847;
				this.blockLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		let _localctx: ClassOrInterfaceTypeContext = new ClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, GosuParser.RULE_classOrInterfaceType);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 850;
			this.idclassOrInterfaceType();
			this.state = 851;
			this.typeArguments();
			this.state = 858;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 852;
					this.match(GosuParser.T__2);
					this.state = 853;
					this.id();
					this.state = 854;
					this.typeArguments();
					}
					}
				}
				this.state = 860;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArguments(): TypeArgumentsContext {
		let _localctx: TypeArgumentsContext = new TypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, GosuParser.RULE_typeArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 872;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
			case 1:
				{
				this.state = 861;
				this.match(GosuParser.T__28);
				this.state = 862;
				this.typeArgument();
				this.state = 867;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === GosuParser.T__6) {
					{
					{
					this.state = 863;
					this.match(GosuParser.T__6);
					this.state = 864;
					this.typeArgument();
					}
					}
					this.state = 869;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 870;
				this.match(GosuParser.T__29);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArgument(): TypeArgumentContext {
		let _localctx: TypeArgumentContext = new TypeArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, GosuParser.RULE_typeArgument);
		let _la: number;
		try {
			this.state = 880;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GosuParser.T__10:
			case GosuParser.T__21:
			case GosuParser.T__22:
			case GosuParser.T__24:
			case GosuParser.T__25:
			case GosuParser.T__34:
			case GosuParser.T__35:
			case GosuParser.T__36:
			case GosuParser.T__37:
			case GosuParser.T__38:
			case GosuParser.T__39:
			case GosuParser.T__41:
			case GosuParser.T__50:
			case GosuParser.T__62:
			case GosuParser.T__63:
			case GosuParser.T__67:
			case GosuParser.T__83:
			case GosuParser.T__84:
			case GosuParser.T__85:
			case GosuParser.T__127:
			case GosuParser.T__128:
			case GosuParser.T__129:
			case GosuParser.T__130:
			case GosuParser.T__131:
			case GosuParser.T__132:
			case GosuParser.T__133:
			case GosuParser.T__134:
			case GosuParser.T__135:
			case GosuParser.T__136:
			case GosuParser.T__137:
			case GosuParser.T__138:
			case GosuParser.T__139:
			case GosuParser.T__140:
			case GosuParser.T__141:
			case GosuParser.T__142:
			case GosuParser.T__143:
			case GosuParser.T__144:
			case GosuParser.Ident:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 874;
				this.typeLiteralType();
				}
				break;
			case GosuParser.T__68:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 875;
				this.match(GosuParser.T__68);
				this.state = 878;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === GosuParser.T__4 || _la === GosuParser.T__65) {
					{
					this.state = 876;
					_la = this._input.LA(1);
					if (!(_la === GosuParser.T__4 || _la === GosuParser.T__65)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 877;
					this.typeLiteralType();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, GosuParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 882;
			this.conditionalExpr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalExpr(): ConditionalExprContext {
		let _localctx: ConditionalExprContext = new ConditionalExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, GosuParser.RULE_conditionalExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 884;
			this.conditionalOrExpr();
			this.state = 892;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				{
				this.state = 885;
				this.match(GosuParser.T__68);
				this.state = 886;
				this.conditionalExpr();
				this.state = 887;
				this.match(GosuParser.T__11);
				this.state = 888;
				this.conditionalExpr();
				}
				break;

			case 2:
				{
				this.state = 890;
				this.match(GosuParser.T__69);
				this.state = 891;
				this.conditionalExpr();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalOrExpr(): ConditionalOrExprContext {
		let _localctx: ConditionalOrExprContext = new ConditionalOrExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, GosuParser.RULE_conditionalOrExpr);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 894;
			this.conditionalAndExpr();
			this.state = 900;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 895;
					this.orOp();
					this.state = 896;
					this.conditionalAndExpr();
					}
					}
				}
				this.state = 902;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalAndExpr(): ConditionalAndExprContext {
		let _localctx: ConditionalAndExprContext = new ConditionalAndExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, GosuParser.RULE_conditionalAndExpr);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 903;
			this.bitwiseOrExpr();
			this.state = 909;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 904;
					this.andOp();
					this.state = 905;
					this.bitwiseOrExpr();
					}
					}
				}
				this.state = 911;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitwiseOrExpr(): BitwiseOrExprContext {
		let _localctx: BitwiseOrExprContext = new BitwiseOrExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, GosuParser.RULE_bitwiseOrExpr);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 912;
			this.bitwiseXorExpr();
			this.state = 917;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 913;
					this.match(GosuParser.T__70);
					this.state = 914;
					this.bitwiseXorExpr();
					}
					}
				}
				this.state = 919;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitwiseXorExpr(): BitwiseXorExprContext {
		let _localctx: BitwiseXorExprContext = new BitwiseXorExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, GosuParser.RULE_bitwiseXorExpr);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 920;
			this.bitwiseAndExpr();
			this.state = 925;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 921;
					this.match(GosuParser.T__71);
					this.state = 922;
					this.bitwiseAndExpr();
					}
					}
				}
				this.state = 927;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitwiseAndExpr(): BitwiseAndExprContext {
		let _localctx: BitwiseAndExprContext = new BitwiseAndExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, GosuParser.RULE_bitwiseAndExpr);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 928;
			this.equalityExpr();
			this.state = 933;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 929;
					this.match(GosuParser.T__66);
					this.state = 930;
					this.equalityExpr();
					}
					}
				}
				this.state = 935;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public equalityExpr(): EqualityExprContext {
		let _localctx: EqualityExprContext = new EqualityExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, GosuParser.RULE_equalityExpr);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 936;
			this.relationalExpr();
			this.state = 942;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 937;
					this.equalityOp();
					this.state = 938;
					this.relationalExpr();
					}
					}
				}
				this.state = 944;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public relationalExpr(): RelationalExprContext {
		let _localctx: RelationalExprContext = new RelationalExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, GosuParser.RULE_relationalExpr);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 945;
			this.intervalExpr();
			this.state = 953;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 951;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case GosuParser.T__28:
					case GosuParser.T__29:
					case GosuParser.T__107:
					case GosuParser.T__108:
						{
						this.state = 946;
						this.relOp();
						this.state = 947;
						this.intervalExpr();
						}
						break;
					case GosuParser.T__72:
						{
						this.state = 949;
						this.match(GosuParser.T__72);
						this.state = 950;
						this.typeLiteralType();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 955;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public intervalExpr(): IntervalExprContext {
		let _localctx: IntervalExprContext = new IntervalExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, GosuParser.RULE_intervalExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 956;
			this.bitshiftExpr();
			this.state = 960;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
			case 1:
				{
				this.state = 957;
				this.intervalOp();
				this.state = 958;
				this.bitshiftExpr();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitshiftExpr(): BitshiftExprContext {
		let _localctx: BitshiftExprContext = new BitshiftExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, GosuParser.RULE_bitshiftExpr);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 962;
			this.additiveExpr();
			this.state = 968;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 963;
					this.bitshiftOp();
					this.state = 964;
					this.additiveExpr();
					}
					}
				}
				this.state = 970;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public additiveExpr(): AdditiveExprContext {
		let _localctx: AdditiveExprContext = new AdditiveExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, GosuParser.RULE_additiveExpr);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 971;
			this.multiplicativeExpr();
			this.state = 977;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 972;
					this.additiveOp();
					this.state = 973;
					this.multiplicativeExpr();
					}
					}
				}
				this.state = 979;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiplicativeExpr(): MultiplicativeExprContext {
		let _localctx: MultiplicativeExprContext = new MultiplicativeExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, GosuParser.RULE_multiplicativeExpr);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 980;
			this.typeAsExpr();
			this.state = 986;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 981;
					this.multiplicativeOp();
					this.state = 982;
					this.typeAsExpr();
					}
					}
				}
				this.state = 988;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeAsExpr(): TypeAsExprContext {
		let _localctx: TypeAsExprContext = new TypeAsExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, GosuParser.RULE_typeAsExpr);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 989;
			this.unaryExpr();
			this.state = 995;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 990;
					this.typeAsOp();
					this.state = 991;
					this.typeLiteral();
					}
					}
				}
				this.state = 997;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryExpr(): UnaryExprContext {
		let _localctx: UnaryExprContext = new UnaryExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, GosuParser.RULE_unaryExpr);
		let _la: number;
		try {
			this.state = 1001;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GosuParser.T__73:
			case GosuParser.T__74:
			case GosuParser.T__75:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 998;
				_la = this._input.LA(1);
				if (!(((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (GosuParser.T__73 - 74)) | (1 << (GosuParser.T__74 - 74)) | (1 << (GosuParser.T__75 - 74)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 999;
				this.unaryExprNotPlusMinus();
				}
				break;
			case GosuParser.T__10:
			case GosuParser.T__14:
			case GosuParser.T__21:
			case GosuParser.T__22:
			case GosuParser.T__24:
			case GosuParser.T__25:
			case GosuParser.T__30:
			case GosuParser.T__34:
			case GosuParser.T__35:
			case GosuParser.T__36:
			case GosuParser.T__37:
			case GosuParser.T__38:
			case GosuParser.T__39:
			case GosuParser.T__41:
			case GosuParser.T__50:
			case GosuParser.T__62:
			case GosuParser.T__63:
			case GosuParser.T__64:
			case GosuParser.T__65:
			case GosuParser.T__67:
			case GosuParser.T__77:
			case GosuParser.T__78:
			case GosuParser.T__79:
			case GosuParser.T__83:
			case GosuParser.T__84:
			case GosuParser.T__85:
			case GosuParser.T__122:
			case GosuParser.T__123:
			case GosuParser.T__124:
			case GosuParser.T__125:
			case GosuParser.T__126:
			case GosuParser.T__127:
			case GosuParser.T__128:
			case GosuParser.T__129:
			case GosuParser.T__130:
			case GosuParser.T__131:
			case GosuParser.T__132:
			case GosuParser.T__133:
			case GosuParser.T__134:
			case GosuParser.T__135:
			case GosuParser.T__136:
			case GosuParser.T__137:
			case GosuParser.T__138:
			case GosuParser.T__139:
			case GosuParser.T__140:
			case GosuParser.T__141:
			case GosuParser.T__142:
			case GosuParser.T__143:
			case GosuParser.T__144:
			case GosuParser.BACKSLASH:
			case GosuParser.Ident:
			case GosuParser.NumberLiteral:
			case GosuParser.CharLiteral:
			case GosuParser.StringLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1000;
				this.unaryExprNotPlusMinus();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryExprNotPlusMinus(): UnaryExprNotPlusMinusContext {
		let _localctx: UnaryExprNotPlusMinusContext = new UnaryExprNotPlusMinusContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, GosuParser.RULE_unaryExprNotPlusMinus);
		try {
			this.state = 1009;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1003;
				this.unaryOp();
				this.state = 1004;
				this.unaryExpr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1006;
				this.blockExprWrap();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1007;
				this.evalExpr();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1008;
				this.primaryExpr();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockExprWrap(): BlockExprWrapContext {
		let _localctx: BlockExprWrapContext = new BlockExprWrapContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, GosuParser.RULE_blockExprWrap);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1011;
			this.match(GosuParser.BACKSLASH);
			this.state = 1012;
			this.blockExpr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockExpr(): BlockExprContext {
		let _localctx: BlockExprContext = new BlockExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, GosuParser.RULE_blockExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1015;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GosuParser.T__1) | (1 << GosuParser.T__10) | (1 << GosuParser.T__21) | (1 << GosuParser.T__22) | (1 << GosuParser.T__24) | (1 << GosuParser.T__25))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (GosuParser.T__34 - 35)) | (1 << (GosuParser.T__35 - 35)) | (1 << (GosuParser.T__36 - 35)) | (1 << (GosuParser.T__37 - 35)) | (1 << (GosuParser.T__38 - 35)) | (1 << (GosuParser.T__39 - 35)) | (1 << (GosuParser.T__41 - 35)) | (1 << (GosuParser.T__50 - 35)) | (1 << (GosuParser.T__62 - 35)) | (1 << (GosuParser.T__63 - 35)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (GosuParser.T__67 - 68)) | (1 << (GosuParser.T__83 - 68)) | (1 << (GosuParser.T__84 - 68)) | (1 << (GosuParser.T__85 - 68)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (GosuParser.T__127 - 128)) | (1 << (GosuParser.T__128 - 128)) | (1 << (GosuParser.T__129 - 128)) | (1 << (GosuParser.T__130 - 128)) | (1 << (GosuParser.T__131 - 128)) | (1 << (GosuParser.T__132 - 128)) | (1 << (GosuParser.T__133 - 128)) | (1 << (GosuParser.T__134 - 128)) | (1 << (GosuParser.T__135 - 128)) | (1 << (GosuParser.T__136 - 128)) | (1 << (GosuParser.T__137 - 128)) | (1 << (GosuParser.T__138 - 128)) | (1 << (GosuParser.T__139 - 128)) | (1 << (GosuParser.T__140 - 128)) | (1 << (GosuParser.T__141 - 128)) | (1 << (GosuParser.T__142 - 128)) | (1 << (GosuParser.T__143 - 128)) | (1 << (GosuParser.T__144 - 128)) | (1 << (GosuParser.Ident - 128)))) !== 0)) {
				{
				this.state = 1014;
				this.parameterDeclarationList();
				}
			}

			this.state = 1017;
			this.match(GosuParser.T__76);
			this.state = 1020;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 109, this._ctx) ) {
			case 1:
				{
				this.state = 1018;
				this.expression();
				}
				break;

			case 2:
				{
				this.state = 1019;
				this.statementBlock();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterDeclarationList(): ParameterDeclarationListContext {
		let _localctx: ParameterDeclarationListContext = new ParameterDeclarationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, GosuParser.RULE_parameterDeclarationList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1022;
			this.parameterDeclaration();
			this.state = 1027;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GosuParser.T__6) {
				{
				{
				this.state = 1023;
				this.match(GosuParser.T__6);
				this.state = 1024;
				this.parameterDeclaration();
				}
				}
				this.state = 1029;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterDeclaration(): ParameterDeclarationContext {
		let _localctx: ParameterDeclarationContext = new ParameterDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, GosuParser.RULE_parameterDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1033;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GosuParser.T__1) {
				{
				{
				this.state = 1030;
				this.annotation();
				}
				}
				this.state = 1035;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1037;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				{
				this.state = 1036;
				this.match(GosuParser.T__41);
				}
				break;
			}
			this.state = 1039;
			this.id();
			this.state = 1049;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GosuParser.T__11:
				{
				{
				this.state = 1040;
				this.match(GosuParser.T__11);
				this.state = 1041;
				this.typeLiteral();
				this.state = 1044;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === GosuParser.T__19) {
					{
					this.state = 1042;
					this.match(GosuParser.T__19);
					this.state = 1043;
					this.expression();
					}
				}

				}
				}
				break;
			case GosuParser.T__30:
				{
				this.state = 1046;
				this.blockTypeLiteral();
				}
				break;
			case GosuParser.T__19:
				{
				this.state = 1047;
				this.match(GosuParser.T__19);
				this.state = 1048;
				this.expression();
				}
				break;
			case GosuParser.T__6:
			case GosuParser.T__31:
			case GosuParser.T__76:
				break;
			default:
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationArguments(): AnnotationArgumentsContext {
		let _localctx: AnnotationArgumentsContext = new AnnotationArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, GosuParser.RULE_annotationArguments);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1051;
			this.arguments();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, GosuParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1053;
			this.match(GosuParser.T__30);
			this.state = 1062;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GosuParser.T__10) | (1 << GosuParser.T__11) | (1 << GosuParser.T__14) | (1 << GosuParser.T__21) | (1 << GosuParser.T__22) | (1 << GosuParser.T__24) | (1 << GosuParser.T__25) | (1 << GosuParser.T__30))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (GosuParser.T__34 - 35)) | (1 << (GosuParser.T__35 - 35)) | (1 << (GosuParser.T__36 - 35)) | (1 << (GosuParser.T__37 - 35)) | (1 << (GosuParser.T__38 - 35)) | (1 << (GosuParser.T__39 - 35)) | (1 << (GosuParser.T__41 - 35)) | (1 << (GosuParser.T__50 - 35)) | (1 << (GosuParser.T__62 - 35)) | (1 << (GosuParser.T__63 - 35)) | (1 << (GosuParser.T__64 - 35)) | (1 << (GosuParser.T__65 - 35)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (GosuParser.T__67 - 68)) | (1 << (GosuParser.T__73 - 68)) | (1 << (GosuParser.T__74 - 68)) | (1 << (GosuParser.T__75 - 68)) | (1 << (GosuParser.T__77 - 68)) | (1 << (GosuParser.T__78 - 68)) | (1 << (GosuParser.T__79 - 68)) | (1 << (GosuParser.T__83 - 68)) | (1 << (GosuParser.T__84 - 68)) | (1 << (GosuParser.T__85 - 68)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (GosuParser.T__122 - 123)) | (1 << (GosuParser.T__123 - 123)) | (1 << (GosuParser.T__124 - 123)) | (1 << (GosuParser.T__125 - 123)) | (1 << (GosuParser.T__126 - 123)) | (1 << (GosuParser.T__127 - 123)) | (1 << (GosuParser.T__128 - 123)) | (1 << (GosuParser.T__129 - 123)) | (1 << (GosuParser.T__130 - 123)) | (1 << (GosuParser.T__131 - 123)) | (1 << (GosuParser.T__132 - 123)) | (1 << (GosuParser.T__133 - 123)) | (1 << (GosuParser.T__134 - 123)) | (1 << (GosuParser.T__135 - 123)) | (1 << (GosuParser.T__136 - 123)) | (1 << (GosuParser.T__137 - 123)) | (1 << (GosuParser.T__138 - 123)) | (1 << (GosuParser.T__139 - 123)) | (1 << (GosuParser.T__140 - 123)) | (1 << (GosuParser.T__141 - 123)) | (1 << (GosuParser.T__142 - 123)) | (1 << (GosuParser.T__143 - 123)) | (1 << (GosuParser.T__144 - 123)) | (1 << (GosuParser.BACKSLASH - 123)) | (1 << (GosuParser.Ident - 123)))) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & ((1 << (GosuParser.NumberLiteral - 155)) | (1 << (GosuParser.CharLiteral - 155)) | (1 << (GosuParser.StringLiteral - 155)))) !== 0)) {
				{
				this.state = 1054;
				this.argExpression();
				this.state = 1059;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === GosuParser.T__6) {
					{
					{
					this.state = 1055;
					this.match(GosuParser.T__6);
					this.state = 1056;
					this.argExpression();
					}
					}
					this.state = 1061;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1064;
			this.match(GosuParser.T__31);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionalArguments(): OptionalArgumentsContext {
		let _localctx: OptionalArgumentsContext = new OptionalArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, GosuParser.RULE_optionalArguments);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1067;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				{
				this.state = 1066;
				this.arguments();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argExpression(): ArgExpressionContext {
		let _localctx: ArgExpressionContext = new ArgExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, GosuParser.RULE_argExpression);
		try {
			this.state = 1071;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GosuParser.T__11:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1069;
				this.namedArgumentExpression();
				}
				break;
			case GosuParser.T__10:
			case GosuParser.T__14:
			case GosuParser.T__21:
			case GosuParser.T__22:
			case GosuParser.T__24:
			case GosuParser.T__25:
			case GosuParser.T__30:
			case GosuParser.T__34:
			case GosuParser.T__35:
			case GosuParser.T__36:
			case GosuParser.T__37:
			case GosuParser.T__38:
			case GosuParser.T__39:
			case GosuParser.T__41:
			case GosuParser.T__50:
			case GosuParser.T__62:
			case GosuParser.T__63:
			case GosuParser.T__64:
			case GosuParser.T__65:
			case GosuParser.T__67:
			case GosuParser.T__73:
			case GosuParser.T__74:
			case GosuParser.T__75:
			case GosuParser.T__77:
			case GosuParser.T__78:
			case GosuParser.T__79:
			case GosuParser.T__83:
			case GosuParser.T__84:
			case GosuParser.T__85:
			case GosuParser.T__122:
			case GosuParser.T__123:
			case GosuParser.T__124:
			case GosuParser.T__125:
			case GosuParser.T__126:
			case GosuParser.T__127:
			case GosuParser.T__128:
			case GosuParser.T__129:
			case GosuParser.T__130:
			case GosuParser.T__131:
			case GosuParser.T__132:
			case GosuParser.T__133:
			case GosuParser.T__134:
			case GosuParser.T__135:
			case GosuParser.T__136:
			case GosuParser.T__137:
			case GosuParser.T__138:
			case GosuParser.T__139:
			case GosuParser.T__140:
			case GosuParser.T__141:
			case GosuParser.T__142:
			case GosuParser.T__143:
			case GosuParser.T__144:
			case GosuParser.BACKSLASH:
			case GosuParser.Ident:
			case GosuParser.NumberLiteral:
			case GosuParser.CharLiteral:
			case GosuParser.StringLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1070;
				this.expression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedArgumentExpression(): NamedArgumentExpressionContext {
		let _localctx: NamedArgumentExpressionContext = new NamedArgumentExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, GosuParser.RULE_namedArgumentExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1073;
			this.match(GosuParser.T__11);
			this.state = 1074;
			this.id();
			this.state = 1075;
			this.match(GosuParser.T__19);
			this.state = 1076;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public evalExpr(): EvalExprContext {
		let _localctx: EvalExprContext = new EvalExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, GosuParser.RULE_evalExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1078;
			this.match(GosuParser.T__77);
			this.state = 1079;
			this.match(GosuParser.T__30);
			this.state = 1080;
			this.expression();
			this.state = 1081;
			this.match(GosuParser.T__31);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public featureLiteral(): FeatureLiteralContext {
		let _localctx: FeatureLiteralContext = new FeatureLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, GosuParser.RULE_featureLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1083;
			this.match(GosuParser.T__78);
			this.state = 1086;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GosuParser.T__10:
			case GosuParser.T__21:
			case GosuParser.T__22:
			case GosuParser.T__24:
			case GosuParser.T__25:
			case GosuParser.T__34:
			case GosuParser.T__35:
			case GosuParser.T__36:
			case GosuParser.T__37:
			case GosuParser.T__38:
			case GosuParser.T__39:
			case GosuParser.T__41:
			case GosuParser.T__50:
			case GosuParser.T__62:
			case GosuParser.T__63:
			case GosuParser.T__67:
			case GosuParser.T__83:
			case GosuParser.T__84:
			case GosuParser.T__85:
			case GosuParser.T__127:
			case GosuParser.T__128:
			case GosuParser.T__129:
			case GosuParser.T__130:
			case GosuParser.T__131:
			case GosuParser.T__132:
			case GosuParser.T__133:
			case GosuParser.T__134:
			case GosuParser.T__135:
			case GosuParser.T__136:
			case GosuParser.T__137:
			case GosuParser.T__138:
			case GosuParser.T__139:
			case GosuParser.T__140:
			case GosuParser.T__141:
			case GosuParser.T__142:
			case GosuParser.T__143:
			case GosuParser.T__144:
			case GosuParser.Ident:
				{
				this.state = 1084;
				this.id();
				}
				break;
			case GosuParser.T__33:
				{
				this.state = 1085;
				this.match(GosuParser.T__33);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1088;
			this.typeArguments();
			this.state = 1089;
			this.optionalArguments();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public standAloneDataStructureInitialization(): StandAloneDataStructureInitializationContext {
		let _localctx: StandAloneDataStructureInitializationContext = new StandAloneDataStructureInitializationContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, GosuParser.RULE_standAloneDataStructureInitialization);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1091;
			this.match(GosuParser.T__14);
			this.state = 1093;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GosuParser.T__10) | (1 << GosuParser.T__14) | (1 << GosuParser.T__21) | (1 << GosuParser.T__22) | (1 << GosuParser.T__24) | (1 << GosuParser.T__25) | (1 << GosuParser.T__30))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (GosuParser.T__34 - 35)) | (1 << (GosuParser.T__35 - 35)) | (1 << (GosuParser.T__36 - 35)) | (1 << (GosuParser.T__37 - 35)) | (1 << (GosuParser.T__38 - 35)) | (1 << (GosuParser.T__39 - 35)) | (1 << (GosuParser.T__41 - 35)) | (1 << (GosuParser.T__50 - 35)) | (1 << (GosuParser.T__62 - 35)) | (1 << (GosuParser.T__63 - 35)) | (1 << (GosuParser.T__64 - 35)) | (1 << (GosuParser.T__65 - 35)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (GosuParser.T__67 - 68)) | (1 << (GosuParser.T__73 - 68)) | (1 << (GosuParser.T__74 - 68)) | (1 << (GosuParser.T__75 - 68)) | (1 << (GosuParser.T__77 - 68)) | (1 << (GosuParser.T__78 - 68)) | (1 << (GosuParser.T__79 - 68)) | (1 << (GosuParser.T__83 - 68)) | (1 << (GosuParser.T__84 - 68)) | (1 << (GosuParser.T__85 - 68)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (GosuParser.T__122 - 123)) | (1 << (GosuParser.T__123 - 123)) | (1 << (GosuParser.T__124 - 123)) | (1 << (GosuParser.T__125 - 123)) | (1 << (GosuParser.T__126 - 123)) | (1 << (GosuParser.T__127 - 123)) | (1 << (GosuParser.T__128 - 123)) | (1 << (GosuParser.T__129 - 123)) | (1 << (GosuParser.T__130 - 123)) | (1 << (GosuParser.T__131 - 123)) | (1 << (GosuParser.T__132 - 123)) | (1 << (GosuParser.T__133 - 123)) | (1 << (GosuParser.T__134 - 123)) | (1 << (GosuParser.T__135 - 123)) | (1 << (GosuParser.T__136 - 123)) | (1 << (GosuParser.T__137 - 123)) | (1 << (GosuParser.T__138 - 123)) | (1 << (GosuParser.T__139 - 123)) | (1 << (GosuParser.T__140 - 123)) | (1 << (GosuParser.T__141 - 123)) | (1 << (GosuParser.T__142 - 123)) | (1 << (GosuParser.T__143 - 123)) | (1 << (GosuParser.T__144 - 123)) | (1 << (GosuParser.BACKSLASH - 123)) | (1 << (GosuParser.Ident - 123)))) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & ((1 << (GosuParser.NumberLiteral - 155)) | (1 << (GosuParser.CharLiteral - 155)) | (1 << (GosuParser.StringLiteral - 155)))) !== 0)) {
				{
				this.state = 1092;
				this.initializerExpression();
				}
			}

			this.state = 1095;
			this.match(GosuParser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryExpr(): PrimaryExprContext {
		let _localctx: PrimaryExprContext = new PrimaryExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, GosuParser.RULE_primaryExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1104;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 121, this._ctx) ) {
			case 1:
				{
				this.state = 1097;
				this.newExpr();
				}
				break;

			case 2:
				{
				this.state = 1098;
				this.thisSuperExpr();
				}
				break;

			case 3:
				{
				this.state = 1099;
				this.literal();
				}
				break;

			case 4:
				{
				this.state = 1100;
				this.typeLiteralExpr();
				}
				break;

			case 5:
				{
				this.state = 1101;
				this.parenthExpr();
				}
				break;

			case 6:
				{
				this.state = 1102;
				this.standAloneDataStructureInitialization();
				}
				break;

			case 7:
				{
				this.state = 1103;
				this.blockExprWrap();
				}
				break;
			}
			this.state = 1106;
			this.indirectMemberAccess();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parenthExpr(): ParenthExprContext {
		let _localctx: ParenthExprContext = new ParenthExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, GosuParser.RULE_parenthExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1108;
			this.match(GosuParser.T__30);
			this.state = 1109;
			this.expression();
			this.state = 1110;
			this.match(GosuParser.T__31);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public newExpr(): NewExprContext {
		let _localctx: NewExprContext = new NewExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, GosuParser.RULE_newExpr);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1112;
			this.match(GosuParser.T__79);
			this.state = 1114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GosuParser.T__10) | (1 << GosuParser.T__21) | (1 << GosuParser.T__22) | (1 << GosuParser.T__24) | (1 << GosuParser.T__25))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (GosuParser.T__34 - 35)) | (1 << (GosuParser.T__35 - 35)) | (1 << (GosuParser.T__36 - 35)) | (1 << (GosuParser.T__37 - 35)) | (1 << (GosuParser.T__38 - 35)) | (1 << (GosuParser.T__39 - 35)) | (1 << (GosuParser.T__41 - 35)) | (1 << (GosuParser.T__50 - 35)) | (1 << (GosuParser.T__62 - 35)) | (1 << (GosuParser.T__63 - 35)))) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & ((1 << (GosuParser.T__83 - 84)) | (1 << (GosuParser.T__84 - 84)) | (1 << (GosuParser.T__85 - 84)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (GosuParser.T__127 - 128)) | (1 << (GosuParser.T__128 - 128)) | (1 << (GosuParser.T__129 - 128)) | (1 << (GosuParser.T__130 - 128)) | (1 << (GosuParser.T__131 - 128)) | (1 << (GosuParser.T__132 - 128)) | (1 << (GosuParser.T__133 - 128)) | (1 << (GosuParser.T__134 - 128)) | (1 << (GosuParser.T__135 - 128)) | (1 << (GosuParser.T__136 - 128)) | (1 << (GosuParser.T__137 - 128)) | (1 << (GosuParser.T__138 - 128)) | (1 << (GosuParser.T__139 - 128)) | (1 << (GosuParser.T__140 - 128)) | (1 << (GosuParser.T__141 - 128)) | (1 << (GosuParser.T__142 - 128)) | (1 << (GosuParser.T__143 - 128)) | (1 << (GosuParser.T__144 - 128)) | (1 << (GosuParser.Ident - 128)))) !== 0)) {
				{
				this.state = 1113;
				this.classOrInterfaceType();
				}
			}

			this.state = 1156;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GosuParser.T__30:
				{
				{
				this.state = 1116;
				this.arguments();
				this.state = 1124;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
				case 1:
					{
					this.state = 1117;
					this.match(GosuParser.T__14);
					this.state = 1120;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
					case 1:
						{
						this.state = 1118;
						this.initializer();
						}
						break;

					case 2:
						{
						this.state = 1119;
						this.anonymousInnerClass();
						}
						break;
					}
					this.state = 1122;
					this.match(GosuParser.T__15);
					}
					break;
				}
				}
				}
				break;
			case GosuParser.T__12:
				{
				{
				this.state = 1126;
				this.match(GosuParser.T__12);
				this.state = 1154;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case GosuParser.T__13:
					{
					{
					this.state = 1127;
					this.match(GosuParser.T__13);
					this.state = 1132;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === GosuParser.T__12) {
						{
						{
						this.state = 1128;
						this.match(GosuParser.T__12);
						this.state = 1129;
						this.match(GosuParser.T__13);
						}
						}
						this.state = 1134;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1135;
					this.arrayInitializer();
					}
					}
					break;
				case GosuParser.T__10:
				case GosuParser.T__14:
				case GosuParser.T__21:
				case GosuParser.T__22:
				case GosuParser.T__24:
				case GosuParser.T__25:
				case GosuParser.T__30:
				case GosuParser.T__34:
				case GosuParser.T__35:
				case GosuParser.T__36:
				case GosuParser.T__37:
				case GosuParser.T__38:
				case GosuParser.T__39:
				case GosuParser.T__41:
				case GosuParser.T__50:
				case GosuParser.T__62:
				case GosuParser.T__63:
				case GosuParser.T__64:
				case GosuParser.T__65:
				case GosuParser.T__67:
				case GosuParser.T__73:
				case GosuParser.T__74:
				case GosuParser.T__75:
				case GosuParser.T__77:
				case GosuParser.T__78:
				case GosuParser.T__79:
				case GosuParser.T__83:
				case GosuParser.T__84:
				case GosuParser.T__85:
				case GosuParser.T__122:
				case GosuParser.T__123:
				case GosuParser.T__124:
				case GosuParser.T__125:
				case GosuParser.T__126:
				case GosuParser.T__127:
				case GosuParser.T__128:
				case GosuParser.T__129:
				case GosuParser.T__130:
				case GosuParser.T__131:
				case GosuParser.T__132:
				case GosuParser.T__133:
				case GosuParser.T__134:
				case GosuParser.T__135:
				case GosuParser.T__136:
				case GosuParser.T__137:
				case GosuParser.T__138:
				case GosuParser.T__139:
				case GosuParser.T__140:
				case GosuParser.T__141:
				case GosuParser.T__142:
				case GosuParser.T__143:
				case GosuParser.T__144:
				case GosuParser.BACKSLASH:
				case GosuParser.Ident:
				case GosuParser.NumberLiteral:
				case GosuParser.CharLiteral:
				case GosuParser.StringLiteral:
					{
					{
					this.state = 1136;
					this.expression();
					this.state = 1137;
					this.match(GosuParser.T__13);
					this.state = 1144;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1138;
							this.match(GosuParser.T__12);
							this.state = 1139;
							this.expression();
							this.state = 1140;
							this.match(GosuParser.T__13);
							}
							}
						}
						this.state = 1146;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
					}
					this.state = 1151;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1147;
							this.match(GosuParser.T__12);
							this.state = 1148;
							this.match(GosuParser.T__13);
							}
							}
						}
						this.state = 1153;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public anonymousInnerClass(): AnonymousInnerClassContext {
		let _localctx: AnonymousInnerClassContext = new AnonymousInnerClassContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, GosuParser.RULE_anonymousInnerClass);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1158;
			this.classMembers();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayInitializer(): ArrayInitializerContext {
		let _localctx: ArrayInitializerContext = new ArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, GosuParser.RULE_arrayInitializer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1160;
			this.match(GosuParser.T__14);
			this.state = 1169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GosuParser.T__10) | (1 << GosuParser.T__14) | (1 << GosuParser.T__21) | (1 << GosuParser.T__22) | (1 << GosuParser.T__24) | (1 << GosuParser.T__25) | (1 << GosuParser.T__30))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (GosuParser.T__34 - 35)) | (1 << (GosuParser.T__35 - 35)) | (1 << (GosuParser.T__36 - 35)) | (1 << (GosuParser.T__37 - 35)) | (1 << (GosuParser.T__38 - 35)) | (1 << (GosuParser.T__39 - 35)) | (1 << (GosuParser.T__41 - 35)) | (1 << (GosuParser.T__50 - 35)) | (1 << (GosuParser.T__62 - 35)) | (1 << (GosuParser.T__63 - 35)) | (1 << (GosuParser.T__64 - 35)) | (1 << (GosuParser.T__65 - 35)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (GosuParser.T__67 - 68)) | (1 << (GosuParser.T__73 - 68)) | (1 << (GosuParser.T__74 - 68)) | (1 << (GosuParser.T__75 - 68)) | (1 << (GosuParser.T__77 - 68)) | (1 << (GosuParser.T__78 - 68)) | (1 << (GosuParser.T__79 - 68)) | (1 << (GosuParser.T__83 - 68)) | (1 << (GosuParser.T__84 - 68)) | (1 << (GosuParser.T__85 - 68)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (GosuParser.T__122 - 123)) | (1 << (GosuParser.T__123 - 123)) | (1 << (GosuParser.T__124 - 123)) | (1 << (GosuParser.T__125 - 123)) | (1 << (GosuParser.T__126 - 123)) | (1 << (GosuParser.T__127 - 123)) | (1 << (GosuParser.T__128 - 123)) | (1 << (GosuParser.T__129 - 123)) | (1 << (GosuParser.T__130 - 123)) | (1 << (GosuParser.T__131 - 123)) | (1 << (GosuParser.T__132 - 123)) | (1 << (GosuParser.T__133 - 123)) | (1 << (GosuParser.T__134 - 123)) | (1 << (GosuParser.T__135 - 123)) | (1 << (GosuParser.T__136 - 123)) | (1 << (GosuParser.T__137 - 123)) | (1 << (GosuParser.T__138 - 123)) | (1 << (GosuParser.T__139 - 123)) | (1 << (GosuParser.T__140 - 123)) | (1 << (GosuParser.T__141 - 123)) | (1 << (GosuParser.T__142 - 123)) | (1 << (GosuParser.T__143 - 123)) | (1 << (GosuParser.T__144 - 123)) | (1 << (GosuParser.BACKSLASH - 123)) | (1 << (GosuParser.Ident - 123)))) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & ((1 << (GosuParser.NumberLiteral - 155)) | (1 << (GosuParser.CharLiteral - 155)) | (1 << (GosuParser.StringLiteral - 155)))) !== 0)) {
				{
				this.state = 1161;
				this.expression();
				this.state = 1166;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === GosuParser.T__6) {
					{
					{
					this.state = 1162;
					this.match(GosuParser.T__6);
					this.state = 1163;
					this.expression();
					}
					}
					this.state = 1168;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1171;
			this.match(GosuParser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initializer(): InitializerContext {
		let _localctx: InitializerContext = new InitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, GosuParser.RULE_initializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1175;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GosuParser.T__10:
			case GosuParser.T__14:
			case GosuParser.T__21:
			case GosuParser.T__22:
			case GosuParser.T__24:
			case GosuParser.T__25:
			case GosuParser.T__30:
			case GosuParser.T__34:
			case GosuParser.T__35:
			case GosuParser.T__36:
			case GosuParser.T__37:
			case GosuParser.T__38:
			case GosuParser.T__39:
			case GosuParser.T__41:
			case GosuParser.T__50:
			case GosuParser.T__62:
			case GosuParser.T__63:
			case GosuParser.T__64:
			case GosuParser.T__65:
			case GosuParser.T__67:
			case GosuParser.T__73:
			case GosuParser.T__74:
			case GosuParser.T__75:
			case GosuParser.T__77:
			case GosuParser.T__78:
			case GosuParser.T__79:
			case GosuParser.T__83:
			case GosuParser.T__84:
			case GosuParser.T__85:
			case GosuParser.T__122:
			case GosuParser.T__123:
			case GosuParser.T__124:
			case GosuParser.T__125:
			case GosuParser.T__126:
			case GosuParser.T__127:
			case GosuParser.T__128:
			case GosuParser.T__129:
			case GosuParser.T__130:
			case GosuParser.T__131:
			case GosuParser.T__132:
			case GosuParser.T__133:
			case GosuParser.T__134:
			case GosuParser.T__135:
			case GosuParser.T__136:
			case GosuParser.T__137:
			case GosuParser.T__138:
			case GosuParser.T__139:
			case GosuParser.T__140:
			case GosuParser.T__141:
			case GosuParser.T__142:
			case GosuParser.T__143:
			case GosuParser.T__144:
			case GosuParser.BACKSLASH:
			case GosuParser.Ident:
			case GosuParser.NumberLiteral:
			case GosuParser.CharLiteral:
			case GosuParser.StringLiteral:
				{
				this.state = 1173;
				this.initializerExpression();
				}
				break;
			case GosuParser.T__11:
				{
				this.state = 1174;
				this.objectInitializer();
				}
				break;
			case GosuParser.T__15:
				break;
			default:
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initializerExpression(): InitializerExpressionContext {
		let _localctx: InitializerExpressionContext = new InitializerExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, GosuParser.RULE_initializerExpression);
		try {
			this.state = 1179;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 133, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1177;
				this.mapInitializerList();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1178;
				this.arrayValueList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayValueList(): ArrayValueListContext {
		let _localctx: ArrayValueListContext = new ArrayValueListContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, GosuParser.RULE_arrayValueList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1181;
			this.expression();
			this.state = 1186;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GosuParser.T__6) {
				{
				{
				this.state = 1182;
				this.match(GosuParser.T__6);
				this.state = 1183;
				this.expression();
				}
				}
				this.state = 1188;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapInitializerList(): MapInitializerListContext {
		let _localctx: MapInitializerListContext = new MapInitializerListContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, GosuParser.RULE_mapInitializerList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1189;
			this.expression();
			this.state = 1190;
			this.match(GosuParser.T__76);
			this.state = 1191;
			this.expression();
			this.state = 1199;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GosuParser.T__6) {
				{
				{
				this.state = 1192;
				this.match(GosuParser.T__6);
				this.state = 1193;
				this.expression();
				this.state = 1194;
				this.match(GosuParser.T__76);
				this.state = 1195;
				this.expression();
				}
				}
				this.state = 1201;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectInitializer(): ObjectInitializerContext {
		let _localctx: ObjectInitializerContext = new ObjectInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, GosuParser.RULE_objectInitializer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1202;
			this.initializerAssignment();
			this.state = 1207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GosuParser.T__6) {
				{
				{
				this.state = 1203;
				this.match(GosuParser.T__6);
				this.state = 1204;
				this.initializerAssignment();
				}
				}
				this.state = 1209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initializerAssignment(): InitializerAssignmentContext {
		let _localctx: InitializerAssignmentContext = new InitializerAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, GosuParser.RULE_initializerAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1210;
			this.match(GosuParser.T__11);
			this.state = 1211;
			this.id();
			this.state = 1212;
			this.match(GosuParser.T__19);
			this.state = 1213;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public indirectMemberAccess(): IndirectMemberAccessContext {
		let _localctx: IndirectMemberAccessContext = new IndirectMemberAccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, GosuParser.RULE_indirectMemberAccess);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1227;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 1225;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case GosuParser.T__2:
					case GosuParser.T__80:
					case GosuParser.T__81:
						{
						this.state = 1215;
						_la = this._input.LA(1);
						if (!(_la === GosuParser.T__2 || _la === GosuParser.T__80 || _la === GosuParser.T__81)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1216;
						this.idAll();
						this.state = 1217;
						this.typeArguments();
						}
						break;
					case GosuParser.T__78:
						{
						this.state = 1219;
						this.featureLiteral();
						}
						break;
					case GosuParser.T__12:
					case GosuParser.T__82:
						{
						this.state = 1220;
						_la = this._input.LA(1);
						if (!(_la === GosuParser.T__12 || _la === GosuParser.T__82)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1221;
						this.expression();
						this.state = 1222;
						this.match(GosuParser.T__13);
						}
						break;
					case GosuParser.T__30:
						{
						this.state = 1224;
						this.arguments();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 1229;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, GosuParser.RULE_literal);
		try {
			this.state = 1237;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GosuParser.NumberLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1230;
				this.match(GosuParser.NumberLiteral);
				}
				break;
			case GosuParser.T__78:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1231;
				this.featureLiteral();
				}
				break;
			case GosuParser.StringLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1232;
				this.match(GosuParser.StringLiteral);
				}
				break;
			case GosuParser.CharLiteral:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1233;
				this.match(GosuParser.CharLiteral);
				}
				break;
			case GosuParser.T__83:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1234;
				this.match(GosuParser.T__83);
				}
				break;
			case GosuParser.T__84:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1235;
				this.match(GosuParser.T__84);
				}
				break;
			case GosuParser.T__85:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1236;
				this.match(GosuParser.T__85);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orOp(): OrOpContext {
		let _localctx: OrOpContext = new OrOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, GosuParser.RULE_orOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1239;
			_la = this._input.LA(1);
			if (!(_la === GosuParser.T__86 || _la === GosuParser.T__87)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public andOp(): AndOpContext {
		let _localctx: AndOpContext = new AndOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, GosuParser.RULE_andOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1241;
			_la = this._input.LA(1);
			if (!(_la === GosuParser.T__88 || _la === GosuParser.T__89)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentOp(): AssignmentOpContext {
		let _localctx: AssignmentOpContext = new AssignmentOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, GosuParser.RULE_assignmentOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1243;
			_la = this._input.LA(1);
			if (!(_la === GosuParser.T__19 || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (GosuParser.T__90 - 91)) | (1 << (GosuParser.T__91 - 91)) | (1 << (GosuParser.T__92 - 91)) | (1 << (GosuParser.T__93 - 91)) | (1 << (GosuParser.T__94 - 91)) | (1 << (GosuParser.T__95 - 91)) | (1 << (GosuParser.T__96 - 91)) | (1 << (GosuParser.T__97 - 91)) | (1 << (GosuParser.T__98 - 91)) | (1 << (GosuParser.T__99 - 91)) | (1 << (GosuParser.T__100 - 91)) | (1 << (GosuParser.T__101 - 91)) | (1 << (GosuParser.T__102 - 91)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public incrementOp(): IncrementOpContext {
		let _localctx: IncrementOpContext = new IncrementOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, GosuParser.RULE_incrementOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1245;
			_la = this._input.LA(1);
			if (!(_la === GosuParser.INCREMENT || _la === GosuParser.DECREMENT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public equalityOp(): EqualityOpContext {
		let _localctx: EqualityOpContext = new EqualityOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, GosuParser.RULE_equalityOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1247;
			_la = this._input.LA(1);
			if (!(((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (GosuParser.T__103 - 104)) | (1 << (GosuParser.T__104 - 104)) | (1 << (GosuParser.T__105 - 104)) | (1 << (GosuParser.T__106 - 104)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public intervalOp(): IntervalOpContext {
		let _localctx: IntervalOpContext = new IntervalOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, GosuParser.RULE_intervalOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1249;
			_la = this._input.LA(1);
			if (!(((((_la - 147)) & ~0x1F) === 0 && ((1 << (_la - 147)) & ((1 << (GosuParser.RANGE_EXCLUSIVE_BOTH - 147)) | (1 << (GosuParser.RANGE_EXCLUSIVE_RIGHT - 147)) | (1 << (GosuParser.RANGE_EXCLUSIVE_LEFT - 147)) | (1 << (GosuParser.RANGE_INCLUSIVE - 147)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public relOp(): RelOpContext {
		let _localctx: RelOpContext = new RelOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, GosuParser.RULE_relOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1251;
			_la = this._input.LA(1);
			if (!(_la === GosuParser.T__28 || _la === GosuParser.T__29 || _la === GosuParser.T__107 || _la === GosuParser.T__108)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitshiftOp(): BitshiftOpContext {
		let _localctx: BitshiftOpContext = new BitshiftOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, GosuParser.RULE_bitshiftOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1253;
			_la = this._input.LA(1);
			if (!(((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (GosuParser.T__109 - 110)) | (1 << (GosuParser.T__110 - 110)) | (1 << (GosuParser.T__111 - 110)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public additiveOp(): AdditiveOpContext {
		let _localctx: AdditiveOpContext = new AdditiveOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, GosuParser.RULE_additiveOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1255;
			_la = this._input.LA(1);
			if (!(((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (GosuParser.T__73 - 74)) | (1 << (GosuParser.T__74 - 74)) | (1 << (GosuParser.T__75 - 74)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (GosuParser.T__112 - 113)) | (1 << (GosuParser.T__113 - 113)) | (1 << (GosuParser.T__114 - 113)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiplicativeOp(): MultiplicativeOpContext {
		let _localctx: MultiplicativeOpContext = new MultiplicativeOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, GosuParser.RULE_multiplicativeOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1257;
			_la = this._input.LA(1);
			if (!(_la === GosuParser.T__27 || ((((_la - 116)) & ~0x1F) === 0 && ((1 << (_la - 116)) & ((1 << (GosuParser.T__115 - 116)) | (1 << (GosuParser.T__116 - 116)) | (1 << (GosuParser.T__117 - 116)) | (1 << (GosuParser.T__118 - 116)) | (1 << (GosuParser.T__119 - 116)) | (1 << (GosuParser.T__120 - 116)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeAsOp(): TypeAsOpContext {
		let _localctx: TypeAsOpContext = new TypeAsOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, GosuParser.RULE_typeAsOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1259;
			_la = this._input.LA(1);
			if (!(_la === GosuParser.T__21 || _la === GosuParser.T__121)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryOp(): UnaryOpContext {
		let _localctx: UnaryOpContext = new UnaryOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, GosuParser.RULE_unaryOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1261;
			_la = this._input.LA(1);
			if (!(((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (GosuParser.T__122 - 123)) | (1 << (GosuParser.T__123 - 123)) | (1 << (GosuParser.T__124 - 123)) | (1 << (GosuParser.T__125 - 123)) | (1 << (GosuParser.T__126 - 123)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public id(): IdContext {
		let _localctx: IdContext = new IdContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, GosuParser.RULE_id);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1263;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GosuParser.T__10) | (1 << GosuParser.T__21) | (1 << GosuParser.T__22) | (1 << GosuParser.T__24) | (1 << GosuParser.T__25))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (GosuParser.T__34 - 35)) | (1 << (GosuParser.T__35 - 35)) | (1 << (GosuParser.T__36 - 35)) | (1 << (GosuParser.T__37 - 35)) | (1 << (GosuParser.T__38 - 35)) | (1 << (GosuParser.T__39 - 35)) | (1 << (GosuParser.T__41 - 35)) | (1 << (GosuParser.T__50 - 35)) | (1 << (GosuParser.T__62 - 35)) | (1 << (GosuParser.T__63 - 35)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (GosuParser.T__67 - 68)) | (1 << (GosuParser.T__83 - 68)) | (1 << (GosuParser.T__84 - 68)) | (1 << (GosuParser.T__85 - 68)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (GosuParser.T__127 - 128)) | (1 << (GosuParser.T__128 - 128)) | (1 << (GosuParser.T__129 - 128)) | (1 << (GosuParser.T__130 - 128)) | (1 << (GosuParser.T__131 - 128)) | (1 << (GosuParser.T__132 - 128)) | (1 << (GosuParser.T__133 - 128)) | (1 << (GosuParser.T__134 - 128)) | (1 << (GosuParser.T__135 - 128)) | (1 << (GosuParser.T__136 - 128)) | (1 << (GosuParser.T__137 - 128)) | (1 << (GosuParser.T__138 - 128)) | (1 << (GosuParser.T__139 - 128)) | (1 << (GosuParser.T__140 - 128)) | (1 << (GosuParser.T__141 - 128)) | (1 << (GosuParser.T__142 - 128)) | (1 << (GosuParser.T__143 - 128)) | (1 << (GosuParser.T__144 - 128)) | (1 << (GosuParser.Ident - 128)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public idclassOrInterfaceType(): IdclassOrInterfaceTypeContext {
		let _localctx: IdclassOrInterfaceTypeContext = new IdclassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, GosuParser.RULE_idclassOrInterfaceType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1265;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GosuParser.T__10) | (1 << GosuParser.T__21) | (1 << GosuParser.T__22) | (1 << GosuParser.T__24) | (1 << GosuParser.T__25))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (GosuParser.T__34 - 35)) | (1 << (GosuParser.T__35 - 35)) | (1 << (GosuParser.T__36 - 35)) | (1 << (GosuParser.T__37 - 35)) | (1 << (GosuParser.T__38 - 35)) | (1 << (GosuParser.T__39 - 35)) | (1 << (GosuParser.T__41 - 35)) | (1 << (GosuParser.T__50 - 35)) | (1 << (GosuParser.T__62 - 35)) | (1 << (GosuParser.T__63 - 35)))) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & ((1 << (GosuParser.T__83 - 84)) | (1 << (GosuParser.T__84 - 84)) | (1 << (GosuParser.T__85 - 84)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (GosuParser.T__127 - 128)) | (1 << (GosuParser.T__128 - 128)) | (1 << (GosuParser.T__129 - 128)) | (1 << (GosuParser.T__130 - 128)) | (1 << (GosuParser.T__131 - 128)) | (1 << (GosuParser.T__132 - 128)) | (1 << (GosuParser.T__133 - 128)) | (1 << (GosuParser.T__134 - 128)) | (1 << (GosuParser.T__135 - 128)) | (1 << (GosuParser.T__136 - 128)) | (1 << (GosuParser.T__137 - 128)) | (1 << (GosuParser.T__138 - 128)) | (1 << (GosuParser.T__139 - 128)) | (1 << (GosuParser.T__140 - 128)) | (1 << (GosuParser.T__141 - 128)) | (1 << (GosuParser.T__142 - 128)) | (1 << (GosuParser.T__143 - 128)) | (1 << (GosuParser.T__144 - 128)) | (1 << (GosuParser.Ident - 128)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public idAll(): IdAllContext {
		let _localctx: IdAllContext = new IdAllContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, GosuParser.RULE_idAll);
		try {
			this.state = 1312;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GosuParser.T__10:
			case GosuParser.T__21:
			case GosuParser.T__22:
			case GosuParser.T__24:
			case GosuParser.T__25:
			case GosuParser.T__34:
			case GosuParser.T__35:
			case GosuParser.T__36:
			case GosuParser.T__37:
			case GosuParser.T__38:
			case GosuParser.T__39:
			case GosuParser.T__41:
			case GosuParser.T__50:
			case GosuParser.T__62:
			case GosuParser.T__63:
			case GosuParser.T__67:
			case GosuParser.T__83:
			case GosuParser.T__84:
			case GosuParser.T__85:
			case GosuParser.T__127:
			case GosuParser.T__128:
			case GosuParser.T__129:
			case GosuParser.T__130:
			case GosuParser.T__131:
			case GosuParser.T__132:
			case GosuParser.T__133:
			case GosuParser.T__134:
			case GosuParser.T__135:
			case GosuParser.T__136:
			case GosuParser.T__137:
			case GosuParser.T__138:
			case GosuParser.T__139:
			case GosuParser.T__140:
			case GosuParser.T__141:
			case GosuParser.T__142:
			case GosuParser.T__143:
			case GosuParser.T__144:
			case GosuParser.Ident:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1267;
				this.id();
				}
				break;
			case GosuParser.T__89:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1268;
				this.match(GosuParser.T__89);
				}
				break;
			case GosuParser.T__87:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1269;
				this.match(GosuParser.T__87);
				}
				break;
			case GosuParser.T__124:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1270;
				this.match(GosuParser.T__124);
				}
				break;
			case GosuParser.T__61:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1271;
				this.match(GosuParser.T__61);
				}
				break;
			case GosuParser.T__20:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1272;
				this.match(GosuParser.T__20);
				}
				break;
			case GosuParser.T__17:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1273;
				this.match(GosuParser.T__17);
				}
				break;
			case GosuParser.T__18:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1274;
				this.match(GosuParser.T__18);
				}
				break;
			case GosuParser.T__125:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1275;
				this.match(GosuParser.T__125);
				}
				break;
			case GosuParser.T__126:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1276;
				this.match(GosuParser.T__126);
				}
				break;
			case GosuParser.T__72:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1277;
				this.match(GosuParser.T__72);
				}
				break;
			case GosuParser.T__121:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1278;
				this.match(GosuParser.T__121);
				}
				break;
			case GosuParser.T__0:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1279;
				this.match(GosuParser.T__0);
				}
				break;
			case GosuParser.T__26:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1280;
				this.match(GosuParser.T__26);
				}
				break;
			case GosuParser.T__45:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1281;
				this.match(GosuParser.T__45);
				}
				break;
			case GosuParser.T__46:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1282;
				this.match(GosuParser.T__46);
				}
				break;
			case GosuParser.T__145:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1283;
				this.match(GosuParser.T__145);
				}
				break;
			case GosuParser.T__59:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1284;
				this.match(GosuParser.T__59);
				}
				break;
			case GosuParser.T__60:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 1285;
				this.match(GosuParser.T__60);
				}
				break;
			case GosuParser.T__53:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 1286;
				this.match(GosuParser.T__53);
				}
				break;
			case GosuParser.T__54:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 1287;
				this.match(GosuParser.T__54);
				}
				break;
			case GosuParser.T__43:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 1288;
				this.match(GosuParser.T__43);
				}
				break;
			case GosuParser.T__44:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 1289;
				this.match(GosuParser.T__44);
				}
				break;
			case GosuParser.T__52:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 1290;
				this.match(GosuParser.T__52);
				}
				break;
			case GosuParser.T__33:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 1291;
				this.match(GosuParser.T__33);
				}
				break;
			case GosuParser.T__32:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 1292;
				this.match(GosuParser.T__32);
				}
				break;
			case GosuParser.T__23:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 1293;
				this.match(GosuParser.T__23);
				}
				break;
			case GosuParser.T__47:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 1294;
				this.match(GosuParser.T__47);
				}
				break;
			case GosuParser.T__49:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 1295;
				this.match(GosuParser.T__49);
				}
				break;
			case GosuParser.T__48:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 1296;
				this.match(GosuParser.T__48);
				}
				break;
			case GosuParser.T__58:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 1297;
				this.match(GosuParser.T__58);
				}
				break;
			case GosuParser.T__79:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 1298;
				this.match(GosuParser.T__79);
				}
				break;
			case GosuParser.T__55:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 1299;
				this.match(GosuParser.T__55);
				}
				break;
			case GosuParser.T__56:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 1300;
				this.match(GosuParser.T__56);
				}
				break;
			case GosuParser.T__57:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 1301;
				this.match(GosuParser.T__57);
				}
				break;
			case GosuParser.T__77:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 1302;
				this.match(GosuParser.T__77);
				}
				break;
			case GosuParser.T__40:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 1303;
				this.match(GosuParser.T__40);
				}
				break;
			case GosuParser.T__4:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 1304;
				this.match(GosuParser.T__4);
				}
				break;
			case GosuParser.T__42:
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 1305;
				this.match(GosuParser.T__42);
				}
				break;
			case GosuParser.T__5:
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 1306;
				this.match(GosuParser.T__5);
				}
				break;
			case GosuParser.T__3:
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 1307;
				this.match(GosuParser.T__3);
				}
				break;
			case GosuParser.T__7:
				this.enterOuterAlt(_localctx, 42);
				{
				this.state = 1308;
				this.match(GosuParser.T__7);
				}
				break;
			case GosuParser.T__8:
				this.enterOuterAlt(_localctx, 43);
				{
				this.state = 1309;
				this.match(GosuParser.T__8);
				}
				break;
			case GosuParser.T__9:
				this.enterOuterAlt(_localctx, 44);
				{
				this.state = 1310;
				this.match(GosuParser.T__9);
				}
				break;
			case GosuParser.T__51:
				this.enterOuterAlt(_localctx, 45);
				{
				this.state = 1311;
				this.match(GosuParser.T__51);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xA5\u0525\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02\xFD\n\x02" +
		"\x03\x03\x03\x03\x05\x03\u0101\n\x03\x03\x03\x05\x03\u0104\n\x03\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x07\x04\u010A\n\x04\f\x04\x0E\x04\u010D\v\x04" +
		"\x03\x04\x05\x04\u0110\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05" +
		"\x05\u0117\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\u011D\n\x05\f" +
		"\x05\x0E\x05\u0120\v\x05\x05\x05\u0122\n\x05\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\u012D\n\x06\f\x06" +
		"\x0E\x06\u0130\v\x06\x05\x06\u0132\n\x06\x03\x06\x03\x06\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\u013D\n\x07\f\x07\x0E" +
		"\x07\u0140\v\x07\x05\x07\u0142\n\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b" +
		"\x03\b\x03\b\x03\b\x03\b\x07\b\u014D\n\b\f\b\x0E\b\u0150\v\b\x03\b\x03" +
		"\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03" +
		"\v\x03\f\x03\f\x05\f\u0162\n\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x07" +
		"\r\u016A\n\r\f\r\x0E\r\u016D\v\r\x03\r\x05\r\u0170\n\r\x03\r\x05\r\u0173" +
		"\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x05\x0F\u017F\n\x0F\x03\x0F\x05\x0F\u0182\n\x0F\x07\x0F\u0184" +
		"\n\x0F\f\x0F\x0E\x0F\u0187\v\x0F\x03\x10\x07\x10\u018A\n\x10\f\x10\x0E" +
		"\x10\u018D\v\x10\x03\x11\x03\x11\x03\x11\x05\x11\u0192\n\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0199\n\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x05\x11\u01A0\n\x11\x03\x11\x05\x11\u01A3\n\x11\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u01AC\n\x12\x03" +
		"\x12\x05\x12\u01AF\n\x12\x07\x12\u01B1\n\x12\f\x12\x0E\x12\u01B4\v\x12" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x05\x14\u01BC\n\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x07\x14\u01C2\n\x14\f\x14\x0E\x14\u01C5\v" +
		"\x14\x03\x14\x03\x14\x05\x14\u01C9\n\x14\x03\x15\x03\x15\x03\x15\x05\x15" +
		"\u01CE\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u01D5\n\x16" +
		"\x03\x16\x05\x16\u01D8\n\x16\x03\x16\x03\x16\x05\x16\u01DC\n\x16\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u01E4\n\x17\x03\x18\x03" +
		"\x18\x03\x18\x07\x18\u01E9\n\x18\f\x18\x0E\x18\u01EC\v\x18\x03\x19\x03" +
		"\x19\x07\x19\u01F0\n\x19\f\x19\x0E\x19\u01F3\v\x19\x03\x1A\x03\x1A\x06" +
		"\x1A\u01F7\n\x1A\r\x1A\x0E\x1A\u01F8\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u01FE" +
		"\n\x1B\x03\x1B\x07\x1B\u0201\n\x1B\f\x1B\x0E\x1B\u0204\v\x1B\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x07\x1C\u020A\n\x1C\f\x1C\x0E\x1C\u020D\v\x1C\x03" +
		"\x1C\x03\x1C\x05\x1C\u0211\n\x1C\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0216" +
		"\n\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x05\x1F\u021C\n\x1F\x03\x1F\x03" +
		"\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x05 \u0226\n \x03!\x03!\x03!\x03!\x05" +
		"!\u022C\n!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"" +
		"\x07\"\u0238\n\"\f\"\x0E\"\u023B\v\"\x03#\x03#\x03#\x03#\x03#\x03#\x03" +
		"#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x05#\u0250" +
		"\n#\x03#\x05#\u0253\n#\x03#\x05#\u0256\n#\x03$\x03$\x03$\x05$\u025B\n" +
		"$\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x03%\x05%\u0265\n%\x03%\x03%\x05" +
		"%\u0269\n%\x03&\x03&\x03&\x06&\u026E\n&\r&\x0E&\u026F\x03&\x03&\x05&\u0274" +
		"\n&\x03&\x03&\x05&\u0278\n&\x03\'\x03\'\x03\'\x05\'\u027D\n\'\x03\'\x03" +
		"\'\x03\'\x05\'\u0282\n\'\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x05(\u028B" +
		"\n(\x03)\x03)\x03)\x03)\x03)\x07)\u0292\n)\f)\x0E)\u0295\v)\x03)\x05)" +
		"\u0298\n)\x03)\x03)\x03)\x03)\x05)\u029E\n)\x03*\x03*\x05*\u02A2\n*\x03" +
		"+\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x07-\u02B7\n-\f-\x0E-\u02BA\v-\x03-\x03-\x03.\x03" +
		".\x03.\x03.\x03.\x03.\x05.\u02C4\n.\x03.\x07.\u02C7\n.\f.\x0E.\u02CA\v" +
		".\x03/\x03/\x03/\x030\x030\x030\x030\x030\x050\u02D4\n0\x031\x031\x03" +
		"1\x031\x051\u02DA\n1\x031\x051\u02DD\n1\x031\x031\x031\x031\x051\u02E3" +
		"\n1\x051\u02E5\n1\x031\x031\x031\x032\x032\x032\x032\x032\x032\x032\x03" +
		"2\x052\u02F2\n2\x033\x033\x033\x034\x034\x034\x035\x035\x036\x036\x03" +
		"6\x036\x036\x036\x056\u0302\n6\x036\x036\x036\x036\x036\x036\x056\u030A" +
		"\n6\x037\x037\x038\x038\x078\u0310\n8\f8\x0E8\u0313\v8\x038\x038\x039" +
		"\x039\x03:\x03:\x03:\x03:\x07:\u031D\n:\f:\x0E:\u0320\v:\x05:\u0322\n" +
		":\x03:\x03:\x03:\x05:\u0327\n:\x03;\x03;\x03;\x03;\x05;\u032D\n;\x03;" +
		"\x03;\x03;\x05;\u0332\n;\x03;\x03;\x03;\x05;\u0337\n;\x05;\u0339\n;\x03" +
		"<\x03<\x03<\x07<\u033E\n<\f<\x0E<\u0341\v<\x03=\x03=\x03>\x03>\x03?\x03" +
		"?\x03@\x03@\x03@\x07@\u034C\n@\f@\x0E@\u034F\v@\x03@\x03@\x05@\u0353\n" +
		"@\x03A\x03A\x03A\x03A\x03A\x03A\x07A\u035B\nA\fA\x0EA\u035E\vA\x03B\x03" +
		"B\x03B\x03B\x07B\u0364\nB\fB\x0EB\u0367\vB\x03B\x03B\x05B\u036B\nB\x03" +
		"C\x03C\x03C\x03C\x05C\u0371\nC\x05C\u0373\nC\x03D\x03D\x03E\x03E\x03E" +
		"\x03E\x03E\x03E\x03E\x03E\x05E\u037F\nE\x03F\x03F\x03F\x03F\x07F\u0385" +
		"\nF\fF\x0EF\u0388\vF\x03G\x03G\x03G\x03G\x07G\u038E\nG\fG\x0EG\u0391\v" +
		"G\x03H\x03H\x03H\x07H\u0396\nH\fH\x0EH\u0399\vH\x03I\x03I\x03I\x07I\u039E" +
		"\nI\fI\x0EI\u03A1\vI\x03J\x03J\x03J\x07J\u03A6\nJ\fJ\x0EJ\u03A9\vJ\x03" +
		"K\x03K\x03K\x03K\x07K\u03AF\nK\fK\x0EK\u03B2\vK\x03L\x03L\x03L\x03L\x03" +
		"L\x03L\x07L\u03BA\nL\fL\x0EL\u03BD\vL\x03M\x03M\x03M\x03M\x05M\u03C3\n" +
		"M\x03N\x03N\x03N\x03N\x07N\u03C9\nN\fN\x0EN\u03CC\vN\x03O\x03O\x03O\x03" +
		"O\x07O\u03D2\nO\fO\x0EO\u03D5\vO\x03P\x03P\x03P\x03P\x07P\u03DB\nP\fP" +
		"\x0EP\u03DE\vP\x03Q\x03Q\x03Q\x03Q\x07Q\u03E4\nQ\fQ\x0EQ\u03E7\vQ\x03" +
		"R\x03R\x03R\x05R\u03EC\nR\x03S\x03S\x03S\x03S\x03S\x03S\x05S\u03F4\nS" +
		"\x03T\x03T\x03T\x03U\x05U\u03FA\nU\x03U\x03U\x03U\x05U\u03FF\nU\x03V\x03" +
		"V\x03V\x07V\u0404\nV\fV\x0EV\u0407\vV\x03W\x07W\u040A\nW\fW\x0EW\u040D" +
		"\vW\x03W\x05W\u0410\nW\x03W\x03W\x03W\x03W\x03W\x05W\u0417\nW\x03W\x03" +
		"W\x03W\x05W\u041C\nW\x03X\x03X\x03Y\x03Y\x03Y\x03Y\x07Y\u0424\nY\fY\x0E" +
		"Y\u0427\vY\x05Y\u0429\nY\x03Y\x03Y\x03Z\x05Z\u042E\nZ\x03[\x03[\x05[\u0432" +
		"\n[\x03\\\x03\\\x03\\\x03\\\x03\\\x03]\x03]\x03]\x03]\x03]\x03^\x03^\x03" +
		"^\x05^\u0441\n^\x03^\x03^\x03^\x03_\x03_\x05_\u0448\n_\x03_\x03_\x03`" +
		"\x03`\x03`\x03`\x03`\x03`\x03`\x05`\u0453\n`\x03`\x03`\x03a\x03a\x03a" +
		"\x03a\x03b\x03b\x05b\u045D\nb\x03b\x03b\x03b\x03b\x05b\u0463\nb\x03b\x03" +
		"b\x05b\u0467\nb\x03b\x03b\x03b\x03b\x07b\u046D\nb\fb\x0Eb\u0470\vb\x03" +
		"b\x03b\x03b\x03b\x03b\x03b\x03b\x07b\u0479\nb\fb\x0Eb\u047C\vb\x03b\x03" +
		"b\x07b\u0480\nb\fb\x0Eb\u0483\vb\x05b\u0485\nb\x05b\u0487\nb\x03c\x03" +
		"c\x03d\x03d\x03d\x03d\x07d\u048F\nd\fd\x0Ed\u0492\vd\x05d\u0494\nd\x03" +
		"d\x03d\x03e\x03e\x05e\u049A\ne\x03f\x03f\x05f\u049E\nf\x03g\x03g\x03g" +
		"\x07g\u04A3\ng\fg\x0Eg\u04A6\vg\x03h\x03h\x03h\x03h\x03h\x03h\x03h\x03" +
		"h\x07h\u04B0\nh\fh\x0Eh\u04B3\vh\x03i\x03i\x03i\x07i\u04B8\ni\fi\x0Ei" +
		"\u04BB\vi\x03j\x03j\x03j\x03j\x03j\x03k\x03k\x03k\x03k\x03k\x03k\x03k" +
		"\x03k\x03k\x03k\x07k\u04CC\nk\fk\x0Ek\u04CF\vk\x03l\x03l\x03l\x03l\x03" +
		"l\x03l\x03l\x05l\u04D8\nl\x03m\x03m\x03n\x03n\x03o\x03o\x03p\x03p\x03" +
		"q\x03q\x03r\x03r\x03s\x03s\x03t\x03t\x03u\x03u\x03v\x03v\x03w\x03w\x03" +
		"x\x03x\x03y\x03y\x03z\x03z\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03" +
		"{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03" +
		"{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03" +
		"{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x05{\u0523\n{\x03{\x02\x02\x02" +
		"|\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
		"*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02" +
		"F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02" +
		"b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02" +
		"~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02" +
		"\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02" +
		"\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02" +
		"\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02" +
		"\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02" +
		"\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8\x02" +
		"\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\x02\x18\x03\x02\n\v\x03" +
		"\x02\x1B\x1C\x03\x02>?\x03\x02CD\x04\x02\x07\x07DD\x03\x02LN\x04\x02\x05" +
		"\x05ST\x04\x02\x0F\x0FUU\x03\x02YZ\x03\x02[\\\x04\x02\x16\x16]i\x03\x02" +
		"\x99\x9A\x03\x02jm\x03\x02\x95\x98\x04\x02\x1F no\x03\x02pr\x04\x02LN" +
		"su\x04\x02\x1E\x1Ev{\x04\x02\x18\x18||\x03\x02}\x81\r\x02\r\r\x18\x19" +
		"\x1B\x1C%*,,55ABFFVX\x82\x93\x9C\x9C\f\x02\r\r\x18\x19\x1B\x1C%*,,55A" +
		"BVX\x82\x93\x9C\x9C\x02\u05A0\x02\xF6\x03\x02\x02\x02\x04\u0100\x03\x02" +
		"\x02\x02\x06\u0105\x03\x02\x02\x02\b\u0111\x03\x02\x02\x02\n\u0125\x03" +
		"\x02\x02\x02\f\u0135\x03\x02\x02\x02\x0E\u0145\x03\x02\x02\x02\x10\u0153" +
		"\x03\x02\x02\x02\x12\u0157\x03\x02\x02\x02\x14\u015B\x03\x02\x02\x02\x16" +
		"\u015F\x03\x02\x02\x02\x18\u0166\x03\x02\x02\x02\x1A\u0174\x03\x02\x02" +
		"\x02\x1C\u0185\x03\x02\x02\x02\x1E\u018B\x03\x02\x02\x02 \u018E\x03\x02" +
		"\x02\x02\"\u01B2\x03\x02\x02\x02$\u01B5\x03\x02\x02\x02&\u01BB\x03\x02" +
		"\x02\x02(\u01CD\x03\x02\x02\x02*\u01CF\x03\x02\x02\x02,\u01DD\x03\x02" +
		"\x02\x02.\u01E5\x03\x02\x02\x020\u01ED\x03\x02\x02\x022\u01F6\x03\x02" +
		"\x02\x024\u01FA\x03\x02\x02\x026\u0210\x03\x02\x02\x028\u0212\x03\x02" +
		"\x02\x02:\u0217\x03\x02\x02\x02<\u0219\x03\x02\x02\x02>\u021F\x03\x02" +
		"\x02\x02@\u0227\x03\x02\x02\x02B\u0239\x03\x02\x02\x02D\u0255\x03\x02" +
		"\x02\x02F\u025A\x03\x02\x02\x02H\u025E\x03\x02\x02\x02J\u026A\x03\x02" +
		"\x02\x02L\u0279\x03\x02\x02\x02N\u0286\x03\x02\x02\x02P\u028C\x03\x02" +
		"\x02\x02R\u029F\x03\x02\x02\x02T\u02A3\x03\x02\x02\x02V\u02A9\x03\x02" +
		"\x02\x02X\u02B0\x03\x02\x02\x02Z\u02C3\x03\x02\x02\x02\\\u02CB\x03\x02" +
		"\x02\x02^\u02CE\x03\x02\x02\x02`\u02D5\x03\x02\x02\x02b\u02F1\x03\x02" +
		"\x02\x02d\u02F3\x03\x02\x02\x02f\u02F6\x03\x02\x02\x02h\u02F9\x03\x02" +
		"\x02\x02j\u0301\x03\x02\x02\x02l\u030B\x03\x02\x02\x02n\u030D\x03\x02" +
		"\x02\x02p\u0316\x03\x02\x02\x02r\u0318\x03\x02\x02\x02t\u0338\x03\x02" +
		"\x02\x02v\u033A\x03\x02\x02\x02x\u0342\x03\x02\x02\x02z\u0344\x03\x02" +
		"\x02\x02|\u0346\x03\x02\x02\x02~\u0352\x03\x02\x02\x02\x80\u0354\x03\x02" +
		"\x02\x02\x82\u036A\x03\x02\x02\x02\x84\u0372\x03\x02\x02\x02\x86\u0374" +
		"\x03\x02\x02\x02\x88\u0376\x03\x02\x02\x02\x8A\u0380\x03\x02\x02\x02\x8C" +
		"\u0389\x03\x02\x02\x02\x8E\u0392\x03\x02\x02\x02\x90\u039A\x03\x02\x02" +
		"\x02\x92\u03A2\x03\x02\x02\x02\x94\u03AA\x03\x02\x02\x02\x96\u03B3\x03" +
		"\x02\x02\x02\x98\u03BE\x03\x02\x02\x02\x9A\u03C4\x03\x02\x02\x02\x9C\u03CD" +
		"\x03\x02\x02\x02\x9E\u03D6\x03\x02\x02\x02\xA0\u03DF\x03\x02\x02\x02\xA2" +
		"\u03EB\x03\x02\x02\x02\xA4\u03F3\x03\x02\x02\x02\xA6\u03F5\x03\x02\x02" +
		"\x02\xA8\u03F9\x03\x02\x02\x02\xAA\u0400\x03\x02\x02\x02\xAC\u040B\x03" +
		"\x02\x02\x02\xAE\u041D\x03\x02\x02\x02\xB0\u041F\x03\x02\x02\x02\xB2\u042D" +
		"\x03\x02\x02\x02\xB4\u0431\x03\x02\x02\x02\xB6\u0433\x03\x02\x02\x02\xB8" +
		"\u0438\x03\x02\x02\x02\xBA\u043D\x03\x02\x02\x02\xBC\u0445\x03\x02\x02" +
		"\x02\xBE\u0452\x03\x02\x02\x02\xC0\u0456\x03\x02\x02\x02\xC2\u045A\x03" +
		"\x02\x02\x02\xC4\u0488\x03\x02\x02\x02\xC6\u048A\x03\x02\x02\x02\xC8\u0499" +
		"\x03\x02\x02\x02\xCA\u049D\x03\x02\x02\x02\xCC\u049F\x03\x02\x02\x02\xCE" +
		"\u04A7\x03\x02\x02\x02\xD0\u04B4\x03\x02\x02\x02\xD2\u04BC\x03\x02\x02" +
		"\x02\xD4\u04CD\x03\x02\x02\x02\xD6\u04D7\x03\x02\x02\x02\xD8\u04D9\x03" +
		"\x02\x02\x02\xDA\u04DB\x03\x02\x02\x02\xDC\u04DD\x03\x02\x02\x02\xDE\u04DF" +
		"\x03\x02\x02\x02\xE0\u04E1\x03\x02\x02\x02\xE2\u04E3\x03\x02\x02\x02\xE4" +
		"\u04E5\x03\x02\x02\x02\xE6\u04E7\x03\x02\x02\x02\xE8\u04E9\x03\x02\x02" +
		"\x02\xEA\u04EB\x03\x02\x02\x02\xEC\u04ED\x03\x02\x02\x02\xEE\u04EF\x03" +
		"\x02\x02\x02\xF0\u04F1\x03\x02\x02\x02\xF2\u04F3\x03\x02\x02\x02\xF4\u0522" +
		"\x03\x02\x02\x02\xF6\xF7\x05\x04\x03\x02\xF7\xFC\x05B\"\x02\xF8\xFD\x05" +
		"\b\x05\x02\xF9\xFD\x05\n\x06\x02\xFA\xFD\x05\f\x07\x02\xFB\xFD\x05\x0E" +
		"\b\x02\xFC\xF8\x03\x02\x02\x02\xFC\xF9\x03\x02\x02\x02\xFC\xFA\x03\x02" +
		"\x02\x02\xFC\xFB\x03\x02\x02\x02\xFD\x03\x03\x02\x02\x02\xFE\xFF\x07\x03" +
		"\x02\x02\xFF\u0101\x050\x19\x02\u0100\xFE\x03\x02\x02\x02\u0100\u0101" +
		"\x03\x02\x02\x02\u0101\u0103\x03\x02\x02\x02\u0102\u0104\x052\x1A\x02" +
		"\u0103\u0102\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104\x05\x03" +
		"\x02\x02\x02\u0105\u0106\x07\x04\x02\x02\u0106\u010B\x05\xF4{\x02\u0107" +
		"\u0108\x07\x05\x02\x02\u0108\u010A\x05\xF4{\x02\u0109\u0107\x03\x02\x02" +
		"\x02\u010A\u010D\x03\x02\x02\x02\u010B\u0109\x03\x02\x02\x02\u010B\u010C" +
		"\x03\x02\x02\x02\u010C\u010F\x03\x02\x02\x02\u010D\u010B\x03\x02\x02\x02" +
		"\u010E\u0110\x05\xAEX\x02\u010F\u010E\x03\x02\x02\x02\u010F\u0110\x03" +
		"\x02\x02\x02\u0110\x07\x03\x02\x02\x02\u0111\u0112\x07\x06\x02\x02\u0112" +
		"\u0113\x05\xF0y\x02\u0113\u0116\x056\x1C\x02\u0114\u0115\x07\x07\x02\x02" +
		"\u0115\u0117\x05\x80A\x02\u0116\u0114\x03\x02\x02\x02\u0116\u0117\x03" +
		"\x02\x02\x02\u0117\u0121\x03\x02\x02\x02\u0118\u0119\x07\b\x02\x02\u0119" +
		"\u011E\x05\x80A\x02\u011A\u011B\x07\t\x02\x02\u011B\u011D\x05\x80A\x02" +
		"\u011C\u011A\x03\x02\x02\x02\u011D\u0120\x03\x02\x02\x02\u011E\u011C\x03" +
		"\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F\u0122\x03\x02\x02\x02\u0120" +
		"\u011E\x03\x02\x02\x02\u0121\u0118\x03\x02\x02\x02\u0121\u0122\x03\x02" +
		"\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0124\x05\x10\t\x02\u0124\t" +
		"\x03\x02\x02\x02\u0125\u0126\t\x02\x02\x02\u0126\u0127\x05\xF0y\x02\u0127" +
		"\u0131\x056\x1C\x02\u0128\u0129\x07\x07\x02\x02\u0129\u012E\x05\x80A\x02" +
		"\u012A\u012B\x07\t\x02\x02\u012B\u012D\x05\x80A\x02\u012C\u012A\x03\x02" +
		"\x02\x02\u012D\u0130\x03\x02\x02\x02\u012E\u012C\x03\x02\x02\x02\u012E" +
		"\u012F\x03\x02\x02\x02\u012F\u0132\x03\x02\x02\x02\u0130\u012E\x03\x02" +
		"\x02\x02\u0131\u0128\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132" +
		"\u0133\x03\x02\x02\x02\u0133\u0134\x05\x14\v\x02\u0134\v\x03\x02\x02\x02" +
		"\u0135\u0136\x07\f\x02\x02\u0136\u0137\x05\xF0y\x02\u0137\u0141\x056\x1C" +
		"\x02\u0138\u0139\x07\b\x02\x02\u0139\u013E\x05\x80A\x02\u013A\u013B\x07" +
		"\t\x02\x02\u013B\u013D\x05\x80A\x02\u013C\u013A\x03\x02\x02\x02\u013D" +
		"\u0140\x03\x02\x02\x02\u013E\u013C\x03\x02\x02\x02\u013E\u013F\x03\x02" +
		"\x02\x02\u013F\u0142\x03\x02\x02\x02\u0140\u013E\x03\x02\x02\x02\u0141" +
		"\u0138\x03\x02\x02\x02\u0141\u0142\x03\x02\x02\x02\u0142\u0143\x03\x02" +
		"\x02\x02\u0143\u0144\x05\x16\f\x02\u0144\r\x03\x02\x02\x02\u0145\u0146" +
		"\x07\r\x02\x02\u0146\u0147\x05\xF0y\x02\u0147\u0148\x056\x1C\x02\u0148" +
		"\u0149\x07\x0E\x02\x02\u0149\u014E\x05\x80A\x02\u014A\u014B\x07\x0F\x02" +
		"\x02\u014B\u014D\x07\x10\x02\x02\u014C\u014A\x03\x02\x02\x02\u014D\u0150" +
		"\x03\x02\x02\x02\u014E\u014C\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02" +
		"\u014F\u0151\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02\u0151\u0152\x05" +
		"\x12\n\x02\u0152\x0F\x03\x02\x02\x02\u0153\u0154\x07\x11\x02\x02\u0154" +
		"\u0155\x05\x1E\x10\x02\u0155\u0156\x07\x12\x02\x02\u0156\x11\x03\x02\x02" +
		"\x02\u0157\u0158\x07\x11\x02\x02\u0158\u0159\x05\"\x12\x02\u0159\u015A" +
		"\x07\x12\x02\x02\u015A\x13\x03\x02\x02\x02\u015B\u015C\x07\x11\x02\x02" +
		"\u015C\u015D\x05\x1C\x0F\x02\u015D\u015E\x07\x12\x02\x02\u015E\x15\x03" +
		"\x02\x02\x02\u015F\u0161\x07\x11\x02\x02\u0160\u0162\x05\x18\r\x02\u0161" +
		"\u0160\x03\x02\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162\u0163\x03\x02" +
		"\x02\x02\u0163\u0164\x05\x1E\x10\x02\u0164\u0165\x07\x12\x02\x02\u0165" +
		"\x17\x03\x02\x02\x02\u0166\u016B\x05\x1A\x0E\x02\u0167\u0168\x07\t\x02" +
		"\x02\u0168\u016A\x05\x1A\x0E\x02\u0169\u0167\x03\x02\x02\x02\u016A\u016D" +
		"\x03\x02\x02\x02\u016B\u0169\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02" +
		"\u016C\u016F\x03\x02\x02\x02\u016D\u016B\x03\x02\x02\x02\u016E\u0170\x07" +
		"\t\x02\x02\u016F\u016E\x03\x02\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170" +
		"\u0172\x03\x02\x02\x02\u0171\u0173\x07\x13\x02\x02\u0172\u0171\x03\x02" +
		"\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173\x19\x03\x02\x02\x02\u0174\u0175" +
		"\x05\xF0y\x02\u0175\u0176\x05\xB2Z\x02\u0176\x1B\x03\x02\x02\x02\u0177" +
		"\u017E\x05B\"\x02\u0178\u017F\x05> \x02\u0179\u017F\x05,\x17\x02\u017A" +
		"\u017F\x05*\x16\x02\u017B\u017F\x05\b\x05\x02\u017C\u017F\x05\n\x06\x02" +
		"\u017D\u017F\x05\f\x07\x02\u017E\u0178\x03\x02\x02\x02\u017E\u0179\x03" +
		"\x02\x02\x02\u017E\u017A\x03\x02\x02\x02\u017E\u017B\x03\x02\x02\x02\u017E" +
		"\u017C\x03\x02\x02\x02\u017E\u017D\x03\x02\x02\x02\u017F\u0181\x03\x02" +
		"\x02\x02\u0180\u0182\x07\x13\x02\x02\u0181\u0180\x03\x02\x02\x02\u0181" +
		"\u0182\x03\x02\x02\x02\u0182\u0184\x03\x02\x02\x02\u0183\u0177\x03\x02" +
		"\x02\x02\u0184\u0187\x03\x02\x02\x02\u0185\u0183\x03\x02\x02\x02\u0185" +
		"\u0186\x03\x02\x02\x02\u0186\x1D\x03\x02\x02\x02\u0187\u0185\x03\x02\x02" +
		"\x02\u0188\u018A\x05 \x11\x02\u0189\u0188\x03\x02\x02\x02\u018A\u018D";
	private static readonly _serializedATNSegment1: string =
		"\x03\x02\x02\x02\u018B\u0189\x03\x02\x02\x02\u018B\u018C\x03\x02\x02\x02" +
		"\u018C\x1F\x03\x02\x02\x02\u018D\u018B\x03\x02\x02\x02\u018E\u019F\x05" +
		"B\"\x02\u018F\u0191\x05> \x02\u0190\u0192\x05:\x1E\x02\u0191\u0190\x03" +
		"\x02\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192\u01A0\x03\x02\x02\x02\u0193" +
		"\u0194\x05@!\x02\u0194\u0195\x05:\x1E\x02\u0195\u01A0\x03\x02\x02\x02" +
		"\u0196\u0198\x05,\x17\x02\u0197\u0199\x05:\x1E\x02\u0198\u0197\x03\x02" +
		"\x02\x02\u0198\u0199\x03\x02\x02\x02\u0199\u01A0\x03\x02\x02\x02\u019A" +
		"\u01A0\x05*\x16\x02\u019B\u01A0\x05$\x13\x02\u019C\u01A0\x05\b\x05\x02" +
		"\u019D\u01A0\x05\n\x06\x02\u019E\u01A0\x05\f\x07\x02\u019F\u018F\x03\x02" +
		"\x02\x02\u019F\u0193\x03\x02\x02\x02\u019F\u0196\x03\x02\x02\x02\u019F" +
		"\u019A\x03\x02\x02\x02\u019F\u019B\x03\x02\x02\x02\u019F\u019C\x03\x02" +
		"\x02\x02\u019F\u019D\x03\x02\x02\x02\u019F\u019E\x03\x02\x02\x02\u01A0" +
		"\u01A2\x03\x02\x02\x02\u01A1\u01A3\x07\x13\x02\x02\u01A2\u01A1\x03\x02" +
		"\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3!\x03\x02\x02\x02\u01A4\u01AB" +
		"\x05B\"\x02\u01A5\u01A6\x05> \x02\u01A6\u01A7\x05:\x1E\x02\u01A7\u01AC" +
		"\x03\x02\x02\x02\u01A8\u01A9\x05,\x17\x02\u01A9\u01AA\x05:\x1E\x02\u01AA" +
		"\u01AC\x03\x02\x02\x02\u01AB\u01A5\x03\x02\x02\x02\u01AB\u01A8\x03\x02" +
		"\x02\x02\u01AC\u01AE\x03\x02\x02\x02\u01AD\u01AF\x07\x13\x02\x02\u01AE" +
		"\u01AD\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02\u01AF\u01B1\x03\x02" +
		"\x02\x02\u01B0\u01A4\x03\x02\x02\x02\u01B1\u01B4\x03\x02\x02\x02\u01B2" +
		"\u01B0\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3#\x03\x02\x02" +
		"\x02\u01B4\u01B2\x03\x02\x02\x02\u01B5\u01B6\x07\x14\x02\x02\u01B6\u01B7" +
		"\x05\xF0y\x02\u01B7\u01B8\x05&\x14\x02\u01B8%\x03\x02\x02\x02\u01B9\u01BA" +
		"\x07\x0E\x02\x02\u01BA\u01BC\x05v<\x02\u01BB\u01B9\x03\x02\x02\x02\u01BB" +
		"\u01BC\x03\x02\x02\x02\u01BC\u01BD\x03\x02\x02\x02\u01BD\u01BE\x07\x15" +
		"\x02\x02\u01BE\u01C3\x05v<\x02\u01BF\u01C0\x07\t\x02\x02\u01C0\u01C2\x05" +
		"v<\x02\u01C1\u01BF\x03\x02\x02\x02\u01C2\u01C5\x03\x02\x02\x02\u01C3\u01C1" +
		"\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4\u01C8\x03\x02\x02\x02" +
		"\u01C5\u01C3\x03\x02\x02\x02\u01C6\u01C7\x07\x16\x02\x02\u01C7\u01C9\x05" +
		"\x86D\x02\u01C8\u01C6\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9" +
		"\'\x03\x02\x02\x02\u01CA\u01CB\x07\x0E\x02\x02\u01CB\u01CE\x05v<\x02\u01CC" +
		"\u01CE\x05p9\x02\u01CD\u01CA\x03\x02\x02\x02\u01CD\u01CC\x03\x02\x02\x02" +
		"\u01CD\u01CE\x03\x02\x02\x02\u01CE)\x03\x02\x02\x02\u01CF\u01D0\x07\x17" +
		"\x02\x02\u01D0\u01D1\x05\xF0y\x02\u01D1\u01D7\x05(\x15\x02\u01D2\u01D4" +
		"\x07\x18\x02\x02\u01D3\u01D5\x07\x19\x02\x02\u01D4\u01D3\x03\x02\x02\x02" +
		"\u01D4\u01D5\x03\x02\x02\x02\u01D5\u01D6\x03\x02\x02\x02\u01D6\u01D8\x05" +
		"\xF0y\x02\u01D7\u01D2\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02\u01D8" +
		"\u01DB\x03\x02\x02\x02\u01D9\u01DA\x07\x16\x02\x02\u01DA\u01DC\x05\x86" +
		"D\x02\u01DB\u01D9\x03\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DC+\x03" +
		"\x02\x02\x02\u01DD\u01DE\x07\x1A\x02\x02\u01DE\u01DF\t\x03\x02\x02\u01DF" +
		"\u01E0\x05\xF0y\x02\u01E0\u01E3\x05<\x1F\x02\u01E1\u01E2\x07\x0E\x02\x02" +
		"\u01E2\u01E4\x05v<\x02\u01E3\u01E1\x03\x02\x02\x02\u01E3\u01E4\x03\x02" +
		"\x02\x02\u01E4-\x03\x02\x02\x02\u01E5\u01EA\x05\xF4{\x02\u01E6\u01E7\x07" +
		"\x05\x02\x02\u01E7\u01E9\x05\xF4{\x02\u01E8\u01E6\x03\x02\x02\x02\u01E9" +
		"\u01EC\x03\x02\x02\x02\u01EA\u01E8\x03\x02\x02\x02\u01EA\u01EB\x03\x02" +
		"\x02\x02\u01EB/\x03\x02\x02\x02\u01EC\u01EA\x03\x02\x02\x02\u01ED\u01F1" +
		"\x05.\x18\x02\u01EE\u01F0\x07\x13\x02\x02\u01EF\u01EE\x03\x02\x02\x02" +
		"\u01F0\u01F3\x03\x02\x02\x02\u01F1\u01EF\x03\x02\x02\x02\u01F1\u01F2\x03" +
		"\x02\x02\x02\u01F21\x03\x02\x02\x02\u01F3\u01F1\x03\x02\x02\x02\u01F4" +
		"\u01F5\x07\x1D\x02\x02\u01F5\u01F7\x054\x1B\x02\u01F6\u01F4\x03\x02\x02" +
		"\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8\u01F6\x03\x02\x02\x02\u01F8\u01F9" +
		"\x03\x02\x02\x02\u01F93\x03\x02\x02\x02\u01FA\u01FD\x05.\x18\x02\u01FB" +
		"\u01FC\x07\x05\x02\x02\u01FC\u01FE\x07\x1E\x02\x02\u01FD\u01FB\x03\x02" +
		"\x02\x02\u01FD\u01FE\x03\x02\x02\x02\u01FE\u0202\x03\x02\x02\x02\u01FF" +
		"\u0201\x07\x13\x02\x02\u0200\u01FF\x03\x02\x02\x02\u0201\u0204\x03\x02" +
		"\x02\x02\u0202\u0200\x03\x02\x02\x02\u0202\u0203\x03\x02\x02\x02\u0203" +
		"5\x03\x02\x02\x02\u0204\u0202\x03\x02\x02\x02\u0205\u0206\x07\x1F\x02" +
		"\x02\u0206\u020B\x058\x1D\x02\u0207\u0208\x07\t\x02\x02\u0208\u020A\x05" +
		"8\x1D\x02\u0209\u0207\x03\x02\x02\x02\u020A\u020D\x03\x02\x02\x02\u020B" +
		"\u0209\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C\u020E\x03\x02" +
		"\x02\x02\u020D\u020B\x03\x02\x02\x02\u020E\u020F\x07 \x02\x02\u020F\u0211" +
		"\x03\x02\x02\x02\u0210\u0205\x03\x02\x02\x02\u0210\u0211\x03\x02\x02\x02" +
		"\u02117\x03\x02\x02\x02\u0212\u0215\x05\xF0y\x02\u0213\u0214\x07\x07\x02" +
		"\x02\u0214\u0216\x05|?\x02\u0215\u0213\x03\x02\x02\x02\u0215\u0216\x03" +
		"\x02\x02\x02\u02169\x03\x02\x02\x02\u0217\u0218\x05l7\x02\u0218;\x03\x02" +
		"\x02\x02\u0219\u021B\x07!\x02\x02\u021A\u021C\x05\xAAV\x02\u021B\u021A" +
		"\x03\x02\x02\x02\u021B\u021C\x03\x02\x02\x02\u021C\u021D\x03\x02\x02\x02" +
		"\u021D\u021E\x07\"\x02\x02\u021E=\x03\x02\x02\x02\u021F\u0220\x07#\x02" +
		"\x02\u0220\u0221\x05\xF0y\x02\u0221\u0222\x056\x1C\x02\u0222\u0225\x05" +
		"<\x1F\x02\u0223\u0224\x07\x0E\x02\x02\u0224\u0226\x05v<\x02\u0225\u0223" +
		"\x03\x02\x02\x02\u0225\u0226\x03\x02\x02\x02\u0226?\x03\x02\x02\x02\u0227" +
		"\u0228\x07$\x02\x02\u0228\u022B\x05<\x1F\x02\u0229\u022A\x07\x0E\x02\x02" +
		"\u022A\u022C\x05v<\x02\u022B\u0229\x03\x02\x02\x02\u022B\u022C\x03\x02" +
		"\x02\x02\u022CA\x03\x02\x02\x02\u022D\u0238\x05\x06\x04\x02\u022E\u0238" +
		"\x07%\x02\x02\u022F\u0238\x07&\x02\x02\u0230\u0238\x07\'\x02\x02\u0231" +
		"\u0238\x07(\x02\x02\u0232\u0238\x07)\x02\x02\u0233\u0238\x07*\x02\x02" +
		"\u0234\u0238\x07+\x02\x02\u0235\u0238\x07,\x02\x02\u0236\u0238\x07-\x02" +
		"\x02\u0237\u022D\x03\x02\x02\x02\u0237\u022E\x03\x02\x02\x02\u0237\u022F" +
		"\x03\x02\x02\x02\u0237\u0230\x03\x02\x02\x02\u0237\u0231\x03\x02\x02\x02" +
		"\u0237\u0232\x03\x02\x02\x02\u0237\u0233\x03\x02\x02\x02\u0237\u0234\x03" +
		"\x02\x02\x02\u0237\u0235\x03\x02\x02\x02\u0237\u0236\x03\x02\x02\x02\u0238" +
		"\u023B\x03\x02\x02\x02\u0239\u0237\x03\x02\x02\x02\u0239\u023A\x03\x02" +
		"\x02\x02\u023AC\x03\x02\x02\x02\u023B\u0239\x03\x02\x02\x02\u023C\u0250" +
		"\x05H%\x02\u023D\u0250\x05J&\x02\u023E\u0250\x05\\/\x02\u023F\u0250\x07" +
		".\x02\x02\u0240\u0250\x07/\x02\x02\u0241\u0250\x05R*\x02\u0242\u0250\x05" +
		"`1\x02\u0243\u0250\x05T+\x02\u0244\u0250\x05V,\x02\u0245\u0250\x05X-\x02" +
		"\u0246\u0250\x05P)\x02\u0247\u0250\x05N(\x02\u0248\u0249\x07,\x02\x02" +
		"\u0249\u0250\x05^0\x02\u024A\u0250\x05^0\x02\u024B\u0250\x05\xB8]\x02" +
		"\u024C\u0250\x05j6\x02\u024D\u0250\x05F$\x02\u024E\u0250\x05l7\x02\u024F" +
		"\u023C\x03\x02\x02\x02\u024F\u023D\x03\x02\x02\x02\u024F\u023E\x03\x02" +
		"\x02\x02\u024F\u023F\x03\x02\x02\x02\u024F\u0240\x03\x02\x02\x02\u024F" +
		"\u0241\x03\x02\x02\x02\u024F\u0242\x03\x02\x02\x02\u024F\u0243\x03\x02" +
		"\x02\x02\u024F\u0244\x03\x02\x02\x02\u024F\u0245\x03\x02\x02\x02\u024F" +
		"\u0246\x03\x02\x02\x02\u024F\u0247\x03\x02\x02\x02\u024F\u0248\x03\x02" +
		"\x02\x02\u024F\u024A\x03\x02\x02\x02\u024F\u024B\x03\x02\x02\x02\u024F" +
		"\u024C\x03\x02\x02\x02\u024F\u024D\x03\x02\x02\x02\u024F\u024E\x03\x02" +
		"\x02\x02\u0250\u0252\x03\x02\x02\x02\u0251\u0253\x07\x13\x02\x02\u0252" +
		"\u0251\x03\x02\x02\x02\u0252\u0253\x03\x02\x02\x02\u0253\u0256\x03\x02" +
		"\x02\x02\u0254\u0256\x07\x13\x02\x02\u0255\u024F\x03\x02\x02\x02\u0255" +
		"\u0254\x03\x02\x02\x02\u0256E\x03\x02\x02\x02\u0257\u0258\x05\xBE`\x02" +
		"\u0258\u0259\x05\xD4k\x02\u0259\u025B\x03\x02\x02\x02\u025A\u0257\x03" +
		"\x02\x02\x02\u025A\u025B\x03\x02\x02\x02\u025B\u025C\x03\x02\x02\x02\u025C" +
		"\u025D\x05\xDEp\x02\u025DG\x03\x02\x02\x02\u025E\u025F\x070\x02\x02\u025F" +
		"\u0260\x07!\x02\x02\u0260\u0261\x05\x86D\x02\u0261\u0262\x07\"\x02\x02" +
		"\u0262\u0264\x05D#\x02\u0263\u0265\x07\x13\x02\x02\u0264\u0263\x03\x02" +
		"\x02\x02\u0264\u0265\x03\x02\x02\x02\u0265\u0268\x03\x02\x02\x02\u0266" +
		"\u0267\x071\x02\x02\u0267\u0269\x05D#\x02\u0268\u0266\x03\x02\x02\x02" +
		"\u0268\u0269\x03\x02\x02\x02\u0269I\x03\x02\x02\x02\u026A\u026B\x072\x02" +
		"\x02\u026B\u0277\x05l7\x02\u026C\u026E\x05L\'\x02\u026D\u026C\x03\x02" +
		"\x02\x02\u026E\u026F\x03\x02\x02\x02\u026F\u026D\x03\x02\x02\x02\u026F" +
		"\u0270\x03\x02\x02\x02\u0270\u0273\x03\x02\x02\x02\u0271\u0272\x073\x02" +
		"\x02\u0272\u0274\x05l7\x02\u0273\u0271\x03\x02\x02\x02\u0273\u0274\x03" +
		"\x02\x02\x02\u0274\u0278\x03\x02\x02\x02\u0275\u0276\x073\x02\x02\u0276" +
		"\u0278\x05l7\x02\u0277\u026D\x03\x02\x02\x02\u0277\u0275\x03\x02\x02\x02" +
		"\u0278K\x03\x02\x02\x02\u0279\u027A\x074\x02\x02\u027A\u027C\x07!\x02" +
		"\x02\u027B\u027D\x07\x17\x02\x02\u027C\u027B\x03\x02\x02\x02\u027C\u027D" +
		"\x03\x02\x02\x02\u027D\u027E\x03\x02\x02\x02\u027E\u0281\x05\xF0y\x02" +
		"\u027F\u0280\x07\x0E\x02\x02\u0280\u0282\x05v<\x02\u0281\u027F\x03\x02" +
		"\x02\x02\u0281\u0282\x03\x02\x02\x02\u0282\u0283\x03\x02\x02\x02\u0283" +
		"\u0284\x07\"\x02\x02\u0284\u0285\x05l7\x02\u0285M\x03\x02\x02\x02\u0286" +
		"\u0287\x075\x02\x02\u0287\u028A\x05\x86D\x02\u0288\u0289\x07\x0E\x02\x02" +
		"\u0289\u028B\x05\x86D\x02\u028A\u0288\x03\x02\x02\x02\u028A\u028B\x03" +
		"\x02\x02\x02\u028BO\x03\x02\x02\x02\u028C\u028D\x076\x02\x02\u028D\u0297" +
		"\x07!\x02\x02\u028E\u0293\x05^0\x02\u028F\u0290\x07\t\x02\x02\u0290\u0292" +
		"\x05^0\x02\u0291\u028F\x03\x02\x02\x02\u0292\u0295\x03\x02\x02\x02\u0293" +
		"\u0291\x03\x02\x02\x02\u0293\u0294\x03\x02\x02\x02\u0294\u0298\x03\x02" +
		"\x02\x02\u0295\u0293\x03\x02\x02\x02\u0296\u0298\x05\x86D\x02\u0297\u028E" +
		"\x03\x02\x02\x02\u0297\u0296\x03\x02\x02\x02\u0298\u0299\x03\x02\x02\x02" +
		"\u0299\u029A\x07\"\x02\x02\u029A\u029D\x05l7\x02\u029B\u029C\x073\x02" +
		"\x02\u029C\u029E\x05l7\x02\u029D\u029B\x03\x02\x02\x02\u029D\u029E\x03" +
		"\x02\x02\x02\u029EQ\x03\x02\x02\x02\u029F\u02A1\x077\x02\x02\u02A0\u02A2" +
		"\x05\x86D\x02\u02A1\u02A0\x03\x02\x02\x02\u02A1\u02A2\x03\x02\x02\x02" +
		"\u02A2S\x03\x02\x02\x02\u02A3\u02A4\x078\x02\x02\u02A4\u02A5\x07!\x02" +
		"\x02\u02A5\u02A6\x05\x86D\x02\u02A6\u02A7\x07\"\x02\x02\u02A7\u02A8\x05" +
		"D#\x02\u02A8U\x03\x02\x02\x02\u02A9\u02AA\x079\x02\x02\u02AA\u02AB\x05" +
		"D#\x02\u02AB\u02AC\x078\x02\x02\u02AC\u02AD\x07!\x02\x02\u02AD\u02AE\x05" +
		"\x86D\x02\u02AE\u02AF\x07\"\x02\x02\u02AFW\x03\x02\x02\x02\u02B0\u02B1" +
		"\x07:\x02\x02\u02B1\u02B2\x07!\x02\x02\u02B2\u02B3\x05\x86D\x02\u02B3" +
		"\u02B4\x07\"\x02\x02\u02B4\u02B8\x07\x11\x02\x02\u02B5\u02B7\x05Z.\x02" +
		"\u02B6\u02B5\x03\x02\x02\x02\u02B7\u02BA\x03\x02\x02\x02\u02B8\u02B6\x03" +
		"\x02\x02\x02\u02B8\u02B9\x03\x02\x02\x02\u02B9\u02BB\x03\x02\x02\x02\u02BA" +
		"\u02B8\x03\x02\x02\x02\u02BB\u02BC\x07\x12\x02\x02\u02BCY\x03\x02\x02" +
		"\x02\u02BD\u02BE\x07;\x02\x02\u02BE\u02BF\x05\x86D\x02\u02BF\u02C0\x07" +
		"\x0E\x02\x02\u02C0\u02C4\x03\x02\x02\x02\u02C1\u02C2\x07<\x02\x02\u02C2" +
		"\u02C4\x07\x0E\x02\x02\u02C3\u02BD\x03\x02\x02\x02\u02C3\u02C1\x03\x02" +
		"\x02\x02\u02C4\u02C8\x03\x02\x02\x02\u02C5\u02C7\x05D#\x02\u02C6\u02C5" +
		"\x03\x02\x02\x02\u02C7\u02CA\x03\x02\x02\x02\u02C8\u02C6\x03\x02\x02\x02" +
		"\u02C8\u02C9\x03\x02\x02\x02\u02C9[\x03\x02\x02\x02\u02CA\u02C8\x03\x02" +
		"\x02\x02\u02CB\u02CC\x07=\x02\x02\u02CC\u02CD\x05\x86D\x02\u02CD]\x03" +
		"\x02\x02\x02\u02CE\u02CF\x07\x17\x02\x02\u02CF\u02D0\x05\xF0y\x02\u02D0" +
		"\u02D3\x05(\x15\x02\u02D1\u02D2\x07\x16\x02\x02\u02D2\u02D4\x05\x86D\x02" +
		"\u02D3\u02D1\x03\x02\x02\x02\u02D3\u02D4\x03\x02\x02\x02\u02D4_\x03\x02" +
		"\x02\x02\u02D5\u02D6\t\x04\x02\x02\u02D6\u02E4\x07!\x02\x02\u02D7\u02D9" +
		"\x05\x86D\x02\u02D8\u02DA\x05d3\x02\u02D9\u02D8\x03\x02\x02\x02\u02D9" +
		"\u02DA\x03\x02\x02\x02\u02DA\u02E5\x03\x02\x02\x02\u02DB\u02DD\x07\x17" +
		"\x02\x02\u02DC\u02DB\x03\x02\x02\x02\u02DC\u02DD\x03\x02\x02\x02\u02DD" +
		"\u02DE\x03\x02\x02\x02\u02DE\u02DF\x05\xF0y\x02\u02DF\u02E0\x07@\x02\x02" +
		"\u02E0\u02E2\x05\x86D\x02\u02E1\u02E3\x05b2\x02\u02E2\u02E1\x03\x02\x02" +
		"\x02\u02E2\u02E3\x03\x02\x02\x02\u02E3\u02E5\x03\x02\x02\x02\u02E4\u02D7" +
		"\x03\x02\x02\x02\u02E4\u02DC\x03\x02\x02\x02\u02E5\u02E6\x03\x02\x02\x02" +
		"\u02E6\u02E7\x07\"\x02\x02\u02E7\u02E8\x05D#\x02\u02E8a\x03\x02\x02\x02" +
		"\u02E9\u02EA\x05d3\x02\u02EA\u02EB\x05f4\x02\u02EB\u02F2\x03\x02\x02\x02" +
		"\u02EC\u02ED\x05f4\x02\u02ED\u02EE\x05d3\x02\u02EE\u02F2\x03\x02\x02\x02" +
		"\u02EF\u02F2\x05d3\x02\u02F0\u02F2\x05f4\x02\u02F1\u02E9\x03\x02\x02\x02" +
		"\u02F1\u02EC\x03\x02\x02\x02\u02F1\u02EF\x03\x02\x02\x02\u02F1\u02F0\x03" +
		"\x02\x02\x02\u02F2c\x03\x02\x02\x02\u02F3\u02F4\x07A\x02\x02\u02F4\u02F5" +
		"\x05\xF0y\x02\u02F5e\x03\x02\x02\x02\u02F6\u02F7\x07B\x02\x02\u02F7\u02F8" +
		"\x05\xF0y\x02\u02F8g\x03\x02\x02\x02\u02F9\u02FA\t\x05\x02\x02\u02FAi" +
		"\x03\x02\x02\x02\u02FB\u0302\x05\xC2b\x02\u02FC\u0302\x05h5\x02\u02FD" +
		"\u0302\x05z>\x02\u02FE\u0302\x05\xC0a\x02\u02FF\u0302\x07\xA2\x02\x02" +
		"\u0300\u0302\x05\xD6l\x02\u0301\u02FB\x03\x02\x02\x02\u0301\u02FC\x03" +
		"\x02\x02\x02\u0301\u02FD\x03\x02\x02\x02\u0301\u02FE\x03\x02\x02\x02\u0301" +
		"\u02FF\x03\x02\x02\x02\u0301\u0300\x03\x02\x02\x02\u0302\u0303\x03\x02" +
		"\x02\x02\u0303\u0304\x05\xD4k\x02\u0304\u0309\x03\x02\x02\x02\u0305\u030A" +
		"\x05\xDEp\x02\u0306\u0307\x05\xDCo\x02\u0307\u0308\x05\x86D\x02\u0308" +
		"\u030A\x03\x02\x02\x02\u0309\u0305\x03\x02\x02\x02\u0309\u0306\x03\x02" +
		"\x02\x02\u0309\u030A\x03\x02\x02\x02\u030Ak\x03\x02\x02\x02\u030B\u030C" +
		"\x05n8\x02\u030Cm\x03\x02\x02\x02\u030D\u0311\x07\x11\x02\x02\u030E\u0310" +
		"\x05D#\x02\u030F\u030E\x03\x02\x02\x02\u0310\u0313\x03\x02\x02\x02\u0311" +
		"\u030F\x03\x02\x02\x02\u0311\u0312\x03\x02\x02\x02\u0312\u0314\x03\x02" +
		"\x02\x02\u0313\u0311\x03\x02\x02\x02\u0314\u0315\x07\x12\x02\x02\u0315" +
		"o\x03\x02\x02\x02\u0316\u0317\x05r:\x02\u0317q\x03\x02\x02\x02\u0318\u0321" +
		"\x07!\x02\x02\u0319\u031E\x05t;\x02\u031A\u031B\x07\t\x02\x02\u031B\u031D" +
		"\x05t;\x02\u031C\u031A\x03\x02\x02\x02\u031D\u0320\x03\x02\x02\x02\u031E" +
		"\u031C\x03\x02\x02\x02\u031E\u031F\x03\x02\x02\x02\u031F\u0322\x03\x02" +
		"\x02\x02\u0320\u031E\x03\x02\x02\x02\u0321\u0319\x03\x02\x02\x02\u0321" +
		"\u0322\x03\x02\x02\x02\u0322\u0323\x03\x02\x02\x02\u0323\u0326\x07\"\x02" +
		"\x02\u0324\u0325\x07\x0E\x02\x02\u0325\u0327\x05v<\x02\u0326\u0324\x03" +
		"\x02\x02\x02\u0326\u0327\x03\x02\x02\x02\u0327s\x03\x02\x02\x02\u0328" +
		"\u032C\x05\xF0y\x02\u0329\u032A\x07\x16\x02\x02\u032A\u032D\x05\x86D\x02" +
		"\u032B\u032D\x05p9\x02\u032C\u0329\x03\x02\x02\x02\u032C\u032B\x03\x02" +
		"\x02\x02\u032D\u0339\x03\x02\x02\x02\u032E\u032F\x05\xF0y\x02\u032F\u0330" +
		"\x07\x0E\x02\x02\u0330\u0332\x03\x02\x02\x02\u0331\u032E\x03\x02\x02\x02" +
		"\u0331\u0332\x03\x02\x02\x02\u0332\u0333\x03\x02\x02\x02\u0333\u0336\x05" +
		"v<\x02\u0334\u0335\x07\x16\x02\x02\u0335\u0337\x05\x86D\x02\u0336\u0334" +
		"\x03\x02\x02\x02\u0336\u0337\x03\x02\x02\x02\u0337\u0339\x03\x02\x02\x02" +
		"\u0338\u0328\x03\x02\x02\x02\u0338\u0331\x03\x02\x02\x02\u0339u\x03\x02" +
		"\x02\x02\u033A\u033F\x05~@\x02\u033B\u033C\x07E\x02\x02\u033C\u033E\x05" +
		"~@\x02\u033D\u033B\x03\x02\x02\x02\u033E\u0341\x03\x02\x02\x02\u033F\u033D" +
		"\x03\x02\x02\x02\u033F\u0340\x03\x02\x02\x02\u0340w\x03\x02\x02\x02\u0341" +
		"\u033F\x03\x02\x02\x02\u0342\u0343\x05v<\x02\u0343y\x03\x02\x02\x02\u0344" +
		"\u0345\x05v<\x02\u0345{\x03\x02\x02\x02\u0346\u0347\x05v<\x02\u0347}\x03" +
		"\x02\x02\x02\u0348\u034D\x05\x80A\x02\u0349\u034A\x07\x0F\x02\x02\u034A" +
		"\u034C\x07\x10\x02\x02\u034B\u0349\x03\x02\x02\x02\u034C\u034F\x03\x02" +
		"\x02\x02\u034D\u034B\x03\x02\x02\x02\u034D\u034E\x03\x02\x02\x02\u034E" +
		"\u0353\x03\x02\x02\x02\u034F\u034D\x03\x02\x02\x02\u0350\u0351\x07F\x02" +
		"\x02\u0351\u0353\x05r:\x02\u0352\u0348\x03\x02\x02\x02\u0352\u0350\x03" +
		"\x02\x02\x02\u0353\x7F\x03\x02\x02\x02\u0354\u0355\x05\xF2z\x02\u0355" +
		"\u035C\x05\x82B\x02\u0356\u0357\x07\x05\x02\x02\u0357\u0358\x05\xF0y\x02" +
		"\u0358\u0359\x05\x82B\x02\u0359\u035B\x03\x02\x02\x02\u035A\u0356\x03" +
		"\x02\x02\x02\u035B\u035E\x03\x02\x02\x02\u035C\u035A\x03\x02\x02\x02\u035C" +
		"\u035D\x03\x02\x02\x02\u035D\x81\x03\x02\x02\x02\u035E\u035C\x03\x02\x02" +
		"\x02\u035F\u0360\x07\x1F\x02\x02\u0360\u0365\x05\x84C\x02\u0361\u0362" +
		"\x07\t\x02\x02\u0362\u0364\x05\x84C\x02\u0363\u0361\x03\x02\x02\x02\u0364" +
		"\u0367\x03\x02\x02\x02\u0365\u0363\x03\x02\x02\x02\u0365\u0366\x03\x02" +
		"\x02\x02\u0366\u0368\x03\x02\x02\x02\u0367\u0365\x03\x02\x02\x02\u0368" +
		"\u0369\x07 \x02\x02\u0369\u036B\x03\x02\x02\x02\u036A\u035F\x03\x02\x02" +
		"\x02\u036A\u036B\x03\x02\x02\x02\u036B\x83\x03\x02\x02\x02\u036C\u0373" +
		"\x05x=\x02\u036D\u0370\x07G\x02\x02\u036E\u036F\t\x06\x02\x02\u036F\u0371" +
		"\x05x=\x02\u0370\u036E\x03\x02\x02\x02\u0370\u0371\x03\x02\x02\x02\u0371" +
		"\u0373\x03\x02\x02\x02\u0372\u036C\x03\x02\x02\x02\u0372\u036D\x03\x02" +
		"\x02\x02\u0373\x85\x03\x02\x02\x02\u0374\u0375\x05\x88E\x02\u0375\x87" +
		"\x03\x02\x02\x02\u0376\u037E\x05\x8AF\x02\u0377\u0378\x07G\x02\x02\u0378" +
		"\u0379\x05\x88E\x02\u0379\u037A\x07\x0E\x02\x02\u037A\u037B\x05\x88E\x02" +
		"\u037B\u037F\x03\x02\x02\x02\u037C\u037D\x07H\x02\x02\u037D\u037F\x05" +
		"\x88E\x02\u037E\u0377\x03\x02\x02\x02\u037E\u037C\x03\x02\x02\x02\u037E" +
		"\u037F\x03\x02\x02\x02\u037F\x89\x03\x02\x02\x02\u0380\u0386\x05\x8CG" +
		"\x02\u0381\u0382\x05\xD8m\x02\u0382\u0383\x05\x8CG\x02\u0383\u0385\x03" +
		"\x02\x02\x02\u0384\u0381\x03\x02\x02\x02\u0385\u0388\x03\x02\x02\x02\u0386" +
		"\u0384\x03\x02\x02\x02\u0386\u0387\x03\x02\x02\x02\u0387\x8B\x03\x02\x02" +
		"\x02\u0388\u0386\x03\x02\x02\x02\u0389\u038F\x05\x8EH\x02\u038A\u038B" +
		"\x05\xDAn\x02\u038B\u038C\x05\x8EH\x02\u038C\u038E\x03\x02\x02\x02\u038D" +
		"\u038A\x03\x02\x02\x02\u038E\u0391\x03\x02\x02\x02\u038F\u038D\x03\x02" +
		"\x02\x02\u038F\u0390\x03\x02\x02\x02\u0390\x8D\x03\x02\x02\x02\u0391\u038F" +
		"\x03\x02\x02\x02\u0392\u0397\x05\x90I\x02\u0393\u0394\x07I\x02\x02\u0394" +
		"\u0396\x05\x90I\x02\u0395\u0393\x03\x02\x02\x02\u0396\u0399\x03\x02\x02" +
		"\x02\u0397\u0395\x03\x02\x02\x02\u0397\u0398\x03\x02\x02\x02\u0398\x8F" +
		"\x03\x02\x02\x02\u0399\u0397\x03\x02\x02\x02\u039A\u039F\x05\x92J\x02" +
		"\u039B\u039C\x07J\x02\x02\u039C\u039E\x05\x92J\x02\u039D\u039B\x03\x02" +
		"\x02\x02\u039E\u03A1\x03\x02\x02\x02\u039F\u039D\x03\x02\x02\x02\u039F" +
		"\u03A0\x03\x02\x02\x02\u03A0\x91\x03\x02\x02\x02\u03A1\u039F\x03\x02\x02" +
		"\x02\u03A2\u03A7\x05\x94K\x02\u03A3\u03A4\x07E\x02\x02\u03A4\u03A6\x05" +
		"\x94K\x02\u03A5\u03A3\x03\x02\x02\x02\u03A6\u03A9\x03\x02\x02\x02\u03A7" +
		"\u03A5\x03\x02\x02\x02\u03A7\u03A8\x03\x02\x02\x02\u03A8\x93\x03\x02\x02" +
		"\x02\u03A9\u03A7\x03\x02\x02\x02\u03AA\u03B0\x05\x96L\x02\u03AB\u03AC" +
		"\x05\xE0q\x02\u03AC\u03AD\x05\x96L\x02\u03AD\u03AF\x03\x02\x02\x02\u03AE" +
		"\u03AB\x03\x02\x02\x02\u03AF\u03B2\x03\x02\x02\x02\u03B0\u03AE\x03\x02" +
		"\x02\x02\u03B0\u03B1\x03\x02\x02\x02\u03B1\x95\x03\x02\x02\x02\u03B2\u03B0" +
		"\x03\x02\x02\x02\u03B3\u03BB\x05\x98M\x02\u03B4\u03B5\x05\xE4s\x02\u03B5" +
		"\u03B6\x05\x98M\x02\u03B6\u03BA\x03\x02\x02\x02\u03B7\u03B8\x07K\x02\x02" +
		"\u03B8\u03BA\x05x=\x02\u03B9\u03B4\x03\x02\x02\x02\u03B9\u03B7\x03\x02" +
		"\x02\x02\u03BA\u03BD\x03\x02\x02\x02\u03BB\u03B9\x03\x02\x02\x02\u03BB" +
		"\u03BC\x03\x02\x02\x02\u03BC\x97\x03\x02\x02\x02\u03BD\u03BB\x03\x02\x02" +
		"\x02\u03BE\u03C2\x05\x9AN\x02\u03BF\u03C0\x05\xE2r\x02\u03C0\u03C1\x05" +
		"\x9AN\x02\u03C1\u03C3\x03\x02\x02\x02\u03C2\u03BF\x03\x02\x02\x02\u03C2" +
		"\u03C3\x03\x02\x02\x02\u03C3\x99\x03\x02\x02\x02\u03C4\u03CA\x05\x9CO" +
		"\x02\u03C5\u03C6\x05\xE6t\x02\u03C6\u03C7\x05\x9CO\x02\u03C7\u03C9\x03" +
		"\x02\x02\x02\u03C8\u03C5\x03\x02\x02\x02\u03C9\u03CC\x03\x02\x02\x02\u03CA" +
		"\u03C8\x03\x02\x02\x02\u03CA\u03CB\x03\x02\x02\x02\u03CB\x9B\x03\x02\x02" +
		"\x02\u03CC\u03CA\x03\x02\x02\x02\u03CD\u03D3\x05\x9EP\x02\u03CE\u03CF" +
		"\x05\xE8u\x02\u03CF\u03D0\x05\x9EP\x02\u03D0\u03D2\x03\x02\x02\x02\u03D1" +
		"\u03CE\x03\x02\x02\x02\u03D2\u03D5\x03\x02\x02\x02\u03D3\u03D1\x03\x02" +
		"\x02\x02\u03D3\u03D4\x03\x02\x02\x02\u03D4\x9D\x03\x02\x02\x02\u03D5\u03D3" +
		"\x03\x02\x02\x02\u03D6\u03DC\x05\xA0Q\x02\u03D7\u03D8\x05\xEAv\x02\u03D8" +
		"\u03D9\x05\xA0Q\x02\u03D9\u03DB\x03\x02\x02\x02\u03DA\u03D7\x03\x02\x02" +
		"\x02\u03DB\u03DE\x03\x02\x02\x02\u03DC\u03DA\x03\x02\x02\x02\u03DC\u03DD" +
		"\x03\x02\x02\x02\u03DD\x9F\x03\x02\x02\x02\u03DE\u03DC\x03\x02\x02\x02" +
		"\u03DF\u03E5\x05\xA2R\x02\u03E0\u03E1\x05\xECw\x02\u03E1\u03E2\x05v<\x02" +
		"\u03E2\u03E4\x03\x02\x02\x02\u03E3\u03E0\x03\x02\x02\x02\u03E4\u03E7\x03" +
		"\x02\x02\x02\u03E5\u03E3\x03\x02\x02\x02\u03E5\u03E6\x03\x02\x02\x02\u03E6" +
		"\xA1\x03\x02\x02\x02\u03E7\u03E5\x03\x02\x02\x02\u03E8\u03E9\t\x07\x02" +
		"\x02\u03E9\u03EC\x05\xA4S\x02\u03EA\u03EC\x05\xA4S\x02\u03EB\u03E8\x03" +
		"\x02\x02\x02\u03EB\u03EA\x03\x02\x02\x02\u03EC\xA3\x03\x02\x02\x02\u03ED" +
		"\u03EE\x05\xEEx\x02\u03EE\u03EF\x05\xA2R\x02\u03EF\u03F4\x03\x02\x02\x02" +
		"\u03F0\u03F4\x05\xA6T\x02\u03F1\u03F4\x05\xB8]\x02\u03F2\u03F4\x05\xBE" +
		"`\x02\u03F3\u03ED\x03\x02\x02\x02\u03F3\u03F0\x03\x02\x02\x02\u03F3\u03F1" +
		"\x03\x02\x02\x02\u03F3\u03F2\x03\x02\x02\x02\u03F4\xA5\x03\x02\x02\x02" +
		"\u03F5\u03F6\x07\x9B\x02\x02\u03F6\u03F7\x05\xA8U\x02\u03F7\xA7\x03\x02" +
		"\x02\x02\u03F8\u03FA\x05\xAAV\x02\u03F9\u03F8\x03\x02\x02\x02\u03F9\u03FA" +
		"\x03\x02\x02\x02\u03FA\u03FB\x03\x02\x02\x02\u03FB\u03FE\x07O\x02\x02" +
		"\u03FC\u03FF\x05\x86D\x02\u03FD\u03FF\x05l7\x02\u03FE\u03FC\x03\x02\x02" +
		"\x02\u03FE\u03FD\x03\x02\x02\x02\u03FF\xA9\x03\x02\x02\x02\u0400\u0405" +
		"\x05\xACW\x02\u0401\u0402\x07\t\x02\x02\u0402\u0404\x05\xACW\x02\u0403" +
		"\u0401\x03\x02\x02\x02\u0404\u0407\x03\x02\x02\x02\u0405\u0403\x03\x02" +
		"\x02\x02\u0405\u0406\x03\x02\x02\x02\u0406\xAB\x03\x02\x02\x02\u0407\u0405" +
		"\x03\x02\x02\x02\u0408\u040A\x05\x06\x04\x02\u0409\u0408\x03\x02\x02\x02" +
		"\u040A\u040D\x03\x02\x02\x02\u040B\u0409\x03\x02\x02\x02\u040B\u040C\x03" +
		"\x02\x02\x02\u040C\u040F\x03\x02\x02\x02\u040D\u040B\x03\x02\x02\x02\u040E" +
		"\u0410\x07,\x02\x02\u040F\u040E\x03\x02\x02\x02\u040F\u0410\x03\x02\x02" +
		"\x02\u0410\u0411\x03\x02\x02\x02\u0411\u041B\x05\xF0y\x02\u0412\u0413" +
		"\x07\x0E\x02\x02\u0413\u0416\x05v<\x02\u0414\u0415\x07\x16\x02\x02\u0415" +
		"\u0417\x05\x86D\x02\u0416\u0414\x03\x02\x02\x02\u0416\u0417\x03\x02\x02" +
		"\x02\u0417\u041C\x03\x02\x02\x02\u0418\u041C\x05p9\x02\u0419\u041A\x07" +
		"\x16\x02\x02\u041A\u041C\x05\x86D\x02\u041B\u0412\x03\x02\x02\x02\u041B" +
		"\u0418\x03\x02\x02\x02\u041B\u0419\x03\x02\x02\x02\u041B\u041C\x03\x02" +
		"\x02\x02\u041C\xAD\x03\x02\x02\x02\u041D\u041E\x05\xB0Y\x02\u041E\xAF" +
		"\x03\x02\x02\x02\u041F\u0428\x07!\x02\x02\u0420\u0425\x05\xB4[\x02\u0421" +
		"\u0422\x07\t\x02\x02\u0422\u0424\x05\xB4[\x02\u0423\u0421\x03\x02\x02" +
		"\x02\u0424\u0427\x03\x02\x02\x02\u0425\u0423\x03\x02\x02\x02\u0425\u0426" +
		"\x03\x02\x02\x02\u0426\u0429\x03\x02\x02\x02\u0427\u0425\x03\x02\x02\x02" +
		"\u0428\u0420\x03\x02\x02\x02\u0428\u0429\x03\x02\x02\x02\u0429\u042A\x03" +
		"\x02\x02\x02\u042A\u042B\x07\"\x02\x02\u042B\xB1\x03\x02\x02\x02\u042C" +
		"\u042E\x05\xB0Y\x02\u042D\u042C\x03\x02\x02\x02\u042D\u042E\x03\x02\x02" +
		"\x02\u042E\xB3\x03\x02\x02\x02\u042F\u0432\x05\xB6\\\x02\u0430\u0432\x05" +
		"\x86D\x02\u0431\u042F\x03\x02\x02\x02\u0431\u0430\x03\x02\x02\x02\u0432" +
		"\xB5\x03\x02\x02\x02\u0433\u0434\x07\x0E\x02\x02\u0434\u0435\x05\xF0y" +
		"\x02\u0435\u0436\x07\x16\x02\x02\u0436\u0437\x05\x86D\x02\u0437\xB7\x03" +
		"\x02\x02\x02\u0438\u0439\x07P\x02\x02\u0439\u043A\x07!\x02\x02\u043A\u043B" +
		"\x05\x86D\x02\u043B\u043C\x07\"\x02\x02\u043C\xB9\x03\x02\x02\x02\u043D" +
		"\u0440\x07Q";
	private static readonly _serializedATNSegment2: string =
		"\x02\x02\u043E\u0441\x05\xF0y\x02\u043F\u0441\x07$\x02\x02\u0440\u043E" +
		"\x03\x02\x02\x02\u0440\u043F\x03\x02\x02\x02\u0441\u0442\x03\x02\x02\x02" +
		"\u0442\u0443\x05\x82B\x02\u0443\u0444\x05\xB2Z\x02\u0444\xBB\x03\x02\x02" +
		"\x02\u0445\u0447\x07\x11\x02\x02\u0446\u0448\x05\xCAf\x02\u0447\u0446" +
		"\x03\x02\x02\x02\u0447\u0448\x03\x02\x02\x02\u0448\u0449\x03\x02\x02\x02" +
		"\u0449\u044A\x07\x12\x02\x02\u044A\xBD\x03\x02\x02\x02\u044B\u0453\x05" +
		"\xC2b\x02\u044C\u0453\x05h5\x02\u044D\u0453\x05\xD6l\x02\u044E\u0453\x05" +
		"z>\x02\u044F\u0453\x05\xC0a\x02\u0450\u0453\x05\xBC_\x02\u0451\u0453\x05" +
		"\xA6T\x02\u0452\u044B\x03\x02\x02\x02\u0452\u044C\x03\x02\x02\x02\u0452" +
		"\u044D\x03\x02\x02\x02\u0452\u044E\x03\x02\x02\x02\u0452\u044F\x03\x02" +
		"\x02\x02\u0452\u0450\x03\x02\x02\x02\u0452\u0451\x03\x02\x02\x02\u0453" +
		"\u0454\x03\x02\x02\x02\u0454\u0455\x05\xD4k\x02\u0455\xBF\x03\x02\x02" +
		"\x02\u0456\u0457\x07!\x02\x02\u0457\u0458\x05\x86D\x02\u0458\u0459\x07" +
		"\"\x02\x02\u0459\xC1\x03\x02\x02\x02\u045A\u045C\x07R\x02\x02\u045B\u045D" +
		"\x05\x80A\x02\u045C\u045B\x03\x02\x02\x02\u045C\u045D\x03\x02\x02\x02" +
		"\u045D\u0486\x03\x02\x02\x02\u045E\u0466\x05\xB0Y\x02\u045F\u0462\x07" +
		"\x11\x02\x02\u0460\u0463\x05\xC8e\x02\u0461\u0463\x05\xC4c\x02\u0462\u0460" +
		"\x03\x02\x02\x02\u0462\u0461\x03\x02\x02\x02\u0463\u0464\x03\x02\x02\x02" +
		"\u0464\u0465\x07\x12\x02\x02\u0465\u0467\x03\x02\x02\x02\u0466\u045F\x03" +
		"\x02\x02\x02\u0466\u0467\x03\x02\x02\x02\u0467\u0487\x03\x02\x02\x02\u0468" +
		"\u0484\x07\x0F\x02\x02\u0469\u046E\x07\x10\x02\x02\u046A\u046B\x07\x0F" +
		"\x02\x02\u046B\u046D\x07\x10\x02\x02\u046C\u046A\x03\x02\x02\x02\u046D" +
		"\u0470\x03\x02\x02\x02\u046E\u046C\x03\x02\x02\x02\u046E\u046F\x03\x02" +
		"\x02\x02\u046F\u0471\x03\x02\x02\x02\u0470\u046E\x03\x02\x02\x02\u0471" +
		"\u0485\x05\xC6d\x02\u0472\u0473\x05\x86D\x02\u0473\u047A\x07\x10\x02\x02" +
		"\u0474\u0475\x07\x0F\x02\x02\u0475\u0476\x05\x86D\x02\u0476\u0477\x07" +
		"\x10\x02\x02\u0477\u0479\x03\x02\x02\x02\u0478\u0474\x03\x02\x02\x02\u0479" +
		"\u047C\x03\x02\x02\x02\u047A\u0478\x03\x02\x02\x02\u047A\u047B\x03\x02" +
		"\x02\x02\u047B\u0481\x03\x02\x02\x02\u047C\u047A\x03\x02\x02\x02\u047D" +
		"\u047E\x07\x0F\x02\x02\u047E\u0480\x07\x10\x02\x02\u047F\u047D\x03\x02" +
		"\x02\x02\u0480\u0483\x03\x02\x02\x02\u0481\u047F\x03\x02\x02\x02\u0481" +
		"\u0482\x03\x02\x02\x02\u0482\u0485\x03\x02\x02\x02\u0483\u0481\x03\x02" +
		"\x02\x02\u0484\u0469\x03\x02\x02\x02\u0484\u0472\x03\x02\x02\x02\u0485" +
		"\u0487\x03\x02\x02\x02\u0486\u045E\x03\x02\x02\x02\u0486\u0468\x03\x02" +
		"\x02\x02\u0487\xC3\x03\x02\x02\x02\u0488\u0489\x05\x1E\x10\x02\u0489\xC5" +
		"\x03\x02\x02\x02\u048A\u0493\x07\x11\x02\x02\u048B\u0490\x05\x86D\x02" +
		"\u048C\u048D\x07\t\x02\x02\u048D\u048F\x05\x86D\x02\u048E\u048C\x03\x02" +
		"\x02\x02\u048F\u0492\x03\x02\x02\x02\u0490\u048E\x03\x02\x02\x02\u0490" +
		"\u0491\x03\x02\x02\x02\u0491\u0494\x03\x02\x02\x02\u0492\u0490\x03\x02" +
		"\x02\x02\u0493\u048B\x03\x02\x02\x02\u0493\u0494\x03\x02\x02\x02\u0494" +
		"\u0495\x03\x02\x02\x02\u0495\u0496\x07\x12\x02\x02\u0496\xC7\x03\x02\x02" +
		"\x02\u0497\u049A\x05\xCAf\x02\u0498\u049A\x05\xD0i\x02\u0499\u0497\x03" +
		"\x02\x02\x02\u0499\u0498\x03\x02\x02\x02\u0499\u049A\x03\x02\x02\x02\u049A" +
		"\xC9\x03\x02\x02\x02\u049B\u049E\x05\xCEh\x02\u049C\u049E\x05\xCCg\x02" +
		"\u049D\u049B\x03\x02\x02\x02\u049D\u049C\x03\x02\x02\x02\u049E\xCB\x03" +
		"\x02\x02\x02\u049F\u04A4\x05\x86D\x02\u04A0\u04A1\x07\t\x02\x02\u04A1" +
		"\u04A3\x05\x86D\x02\u04A2\u04A0\x03\x02\x02\x02\u04A3\u04A6\x03\x02\x02" +
		"\x02\u04A4\u04A2\x03\x02\x02\x02\u04A4\u04A5\x03\x02\x02\x02\u04A5\xCD" +
		"\x03\x02\x02\x02\u04A6\u04A4\x03\x02\x02\x02\u04A7\u04A8\x05\x86D\x02" +
		"\u04A8\u04A9\x07O\x02\x02\u04A9\u04B1\x05\x86D\x02\u04AA\u04AB\x07\t\x02" +
		"\x02\u04AB\u04AC\x05\x86D\x02\u04AC\u04AD\x07O\x02\x02\u04AD\u04AE\x05" +
		"\x86D\x02\u04AE\u04B0\x03\x02\x02\x02\u04AF\u04AA\x03\x02\x02\x02\u04B0" +
		"\u04B3\x03\x02\x02\x02\u04B1\u04AF\x03\x02\x02\x02\u04B1\u04B2\x03\x02" +
		"\x02\x02\u04B2\xCF\x03\x02\x02\x02\u04B3\u04B1\x03\x02\x02\x02\u04B4\u04B9" +
		"\x05\xD2j\x02\u04B5\u04B6\x07\t\x02\x02\u04B6\u04B8\x05\xD2j\x02\u04B7" +
		"\u04B5\x03\x02\x02\x02\u04B8\u04BB\x03\x02\x02\x02\u04B9\u04B7\x03\x02" +
		"\x02\x02\u04B9\u04BA\x03\x02\x02\x02\u04BA\xD1\x03\x02\x02\x02\u04BB\u04B9" +
		"\x03\x02\x02\x02\u04BC\u04BD\x07\x0E\x02\x02\u04BD\u04BE\x05\xF0y\x02" +
		"\u04BE\u04BF\x07\x16\x02\x02\u04BF\u04C0\x05\x86D\x02\u04C0\xD3\x03\x02" +
		"\x02\x02\u04C1\u04C2\t\b\x02\x02\u04C2\u04C3\x05\xF4{\x02\u04C3\u04C4" +
		"\x05\x82B\x02\u04C4\u04CC\x03\x02\x02\x02\u04C5\u04CC\x05\xBA^\x02\u04C6" +
		"\u04C7\t\t\x02\x02\u04C7\u04C8\x05\x86D\x02\u04C8\u04C9\x07\x10\x02\x02" +
		"\u04C9\u04CC\x03\x02\x02\x02\u04CA\u04CC\x05\xB0Y\x02\u04CB\u04C1\x03" +
		"\x02\x02\x02\u04CB\u04C5\x03\x02\x02\x02\u04CB\u04C6\x03\x02\x02\x02\u04CB" +
		"\u04CA\x03\x02\x02\x02\u04CC\u04CF\x03\x02\x02\x02\u04CD\u04CB\x03\x02" +
		"\x02\x02\u04CD\u04CE\x03\x02\x02\x02\u04CE\xD5\x03\x02\x02\x02\u04CF\u04CD" +
		"\x03\x02\x02\x02\u04D0\u04D8\x07\x9D\x02\x02\u04D1\u04D8\x05\xBA^\x02" +
		"\u04D2\u04D8\x07\xA2\x02\x02\u04D3\u04D8\x07\xA1\x02\x02\u04D4\u04D8\x07" +
		"V\x02\x02\u04D5\u04D8\x07W\x02\x02\u04D6\u04D8\x07X\x02\x02\u04D7\u04D0" +
		"\x03\x02\x02\x02\u04D7\u04D1\x03\x02\x02\x02\u04D7\u04D2\x03\x02\x02\x02" +
		"\u04D7\u04D3\x03\x02\x02\x02\u04D7\u04D4\x03\x02\x02\x02\u04D7\u04D5\x03" +
		"\x02\x02\x02\u04D7\u04D6\x03\x02\x02\x02\u04D8\xD7\x03\x02\x02\x02\u04D9" +
		"\u04DA\t\n\x02\x02\u04DA\xD9\x03\x02\x02\x02\u04DB\u04DC\t\v\x02\x02\u04DC" +
		"\xDB\x03\x02\x02\x02\u04DD\u04DE\t\f\x02\x02\u04DE\xDD\x03\x02\x02\x02" +
		"\u04DF\u04E0\t\r\x02\x02\u04E0\xDF\x03\x02\x02\x02\u04E1\u04E2\t\x0E\x02" +
		"\x02\u04E2\xE1\x03\x02\x02\x02\u04E3\u04E4\t\x0F\x02\x02\u04E4\xE3\x03" +
		"\x02\x02\x02\u04E5\u04E6\t\x10\x02\x02\u04E6\xE5\x03\x02\x02\x02\u04E7" +
		"\u04E8\t\x11\x02\x02\u04E8\xE7\x03\x02\x02\x02\u04E9\u04EA\t\x12\x02\x02" +
		"\u04EA\xE9\x03\x02\x02\x02\u04EB\u04EC\t\x13\x02\x02\u04EC\xEB\x03\x02" +
		"\x02\x02\u04ED\u04EE\t\x14\x02\x02\u04EE\xED\x03\x02\x02\x02\u04EF\u04F0" +
		"\t\x15\x02\x02\u04F0\xEF\x03\x02\x02\x02\u04F1\u04F2\t\x16\x02\x02\u04F2" +
		"\xF1\x03\x02\x02\x02\u04F3\u04F4\t\x17\x02\x02\u04F4\xF3\x03\x02\x02\x02" +
		"\u04F5\u0523\x05\xF0y\x02\u04F6\u0523\x07\\\x02\x02\u04F7\u0523\x07Z\x02" +
		"\x02\u04F8\u0523\x07\x7F\x02\x02\u04F9\u0523\x07@\x02\x02\u04FA\u0523" +
		"\x07\x17\x02\x02\u04FB\u0523\x07\x14\x02\x02\u04FC\u0523\x07\x15\x02\x02" +
		"\u04FD\u0523\x07\x80\x02\x02\u04FE\u0523\x07\x81\x02\x02\u04FF\u0523\x07" +
		"K\x02\x02\u0500\u0523\x07|\x02\x02\u0501\u0523\x07\x03\x02\x02\u0502\u0523" +
		"\x07\x1D\x02\x02\u0503\u0523\x070\x02\x02\u0504\u0523\x071\x02\x02\u0505" +
		"\u0523\x07\x94\x02\x02\u0506\u0523\x07>\x02\x02\u0507\u0523\x07?\x02\x02" +
		"\u0508\u0523\x078\x02\x02\u0509\u0523\x079\x02\x02\u050A\u0523\x07.\x02" +
		"\x02\u050B\u0523\x07/\x02\x02\u050C\u0523\x077\x02\x02\u050D\u0523\x07" +
		"$\x02\x02\u050E\u0523\x07#\x02\x02\u050F\u0523\x07\x1A\x02\x02\u0510\u0523" +
		"\x072\x02\x02\u0511\u0523\x074\x02\x02\u0512\u0523\x073\x02\x02\u0513" +
		"\u0523\x07=\x02\x02\u0514\u0523\x07R\x02\x02\u0515\u0523\x07:\x02\x02" +
		"\u0516\u0523\x07;\x02\x02\u0517\u0523\x07<\x02\x02\u0518\u0523\x07P\x02" +
		"\x02\u0519\u0523\x07+\x02\x02\u051A\u0523\x07\x07\x02\x02\u051B\u0523" +
		"\x07-\x02\x02\u051C\u0523\x07\b\x02\x02\u051D\u0523\x07\x06\x02\x02\u051E" +
		"\u0523\x07\n\x02\x02\u051F\u0523\x07\v\x02\x02\u0520\u0523\x07\f\x02\x02" +
		"\u0521\u0523\x076\x02\x02\u0522\u04F5\x03\x02\x02\x02\u0522\u04F6\x03" +
		"\x02\x02\x02\u0522\u04F7\x03\x02\x02\x02\u0522\u04F8\x03\x02\x02\x02\u0522" +
		"\u04F9\x03\x02\x02\x02\u0522\u04FA\x03\x02\x02\x02\u0522\u04FB\x03\x02" +
		"\x02\x02\u0522\u04FC\x03\x02\x02\x02\u0522\u04FD\x03\x02\x02\x02\u0522" +
		"\u04FE\x03\x02\x02\x02\u0522\u04FF\x03\x02\x02\x02\u0522\u0500\x03\x02" +
		"\x02\x02\u0522\u0501\x03\x02\x02\x02\u0522\u0502\x03\x02\x02\x02\u0522" +
		"\u0503\x03\x02\x02\x02\u0522\u0504\x03\x02\x02\x02\u0522\u0505\x03\x02" +
		"\x02\x02\u0522\u0506\x03\x02\x02\x02\u0522\u0507\x03\x02\x02\x02\u0522" +
		"\u0508\x03\x02\x02\x02\u0522\u0509\x03\x02\x02\x02\u0522\u050A\x03\x02" +
		"\x02\x02\u0522\u050B\x03\x02\x02\x02\u0522\u050C\x03\x02\x02\x02\u0522" +
		"\u050D\x03\x02\x02\x02\u0522\u050E\x03\x02\x02\x02\u0522\u050F\x03\x02" +
		"\x02\x02\u0522\u0510\x03\x02\x02\x02\u0522\u0511\x03\x02\x02\x02\u0522" +
		"\u0512\x03\x02\x02\x02\u0522\u0513\x03\x02\x02\x02\u0522\u0514\x03\x02" +
		"\x02\x02\u0522\u0515\x03\x02\x02\x02\u0522\u0516\x03\x02\x02\x02\u0522" +
		"\u0517\x03\x02\x02\x02\u0522\u0518\x03\x02\x02\x02\u0522\u0519\x03\x02" +
		"\x02\x02\u0522\u051A\x03\x02\x02\x02\u0522\u051B\x03\x02\x02\x02\u0522" +
		"\u051C\x03\x02\x02\x02\u0522\u051D\x03\x02\x02\x02\u0522\u051E\x03\x02" +
		"\x02\x02\u0522\u051F\x03\x02\x02\x02\u0522\u0520\x03\x02\x02\x02\u0522" +
		"\u0521\x03\x02\x02\x02\u0523\xF5\x03\x02\x02\x02\x8F\xFC\u0100\u0103\u010B" +
		"\u010F\u0116\u011E\u0121\u012E\u0131\u013E\u0141\u014E\u0161\u016B\u016F" +
		"\u0172\u017E\u0181\u0185\u018B\u0191\u0198\u019F\u01A2\u01AB\u01AE\u01B2" +
		"\u01BB\u01C3\u01C8\u01CD\u01D4\u01D7\u01DB\u01E3\u01EA\u01F1\u01F8\u01FD" +
		"\u0202\u020B\u0210\u0215\u021B\u0225\u022B\u0237\u0239\u024F\u0252\u0255" +
		"\u025A\u0264\u0268\u026F\u0273\u0277\u027C\u0281\u028A\u0293\u0297\u029D" +
		"\u02A1\u02B8\u02C3\u02C8\u02D3\u02D9\u02DC\u02E2\u02E4\u02F1\u0301\u0309" +
		"\u0311\u031E\u0321\u0326\u032C\u0331\u0336\u0338\u033F\u034D\u0352\u035C" +
		"\u0365\u036A\u0370\u0372\u037E\u0386\u038F\u0397\u039F\u03A7\u03B0\u03B9" +
		"\u03BB\u03C2\u03CA\u03D3\u03DC\u03E5\u03EB\u03F3\u03F9\u03FE\u0405\u040B" +
		"\u040F\u0416\u041B\u0425\u0428\u042D\u0431\u0440\u0447\u0452\u045C\u0462" +
		"\u0466\u046E\u047A\u0481\u0484\u0486\u0490\u0493\u0499\u049D\u04A4\u04B1" +
		"\u04B9\u04CB\u04CD\u04D7\u0522";
	public static readonly _serializedATN: string = Utils.join(
		[
			GosuParser._serializedATNSegment0,
			GosuParser._serializedATNSegment1,
			GosuParser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GosuParser.__ATN) {
			GosuParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(GosuParser._serializedATN));
		}

		return GosuParser.__ATN;
	}

}

export class StartContext extends ParserRuleContext {
	public header(): HeaderContext {
		return this.getRuleContext(0, HeaderContext);
	}
	public modifiers(): ModifiersContext {
		return this.getRuleContext(0, ModifiersContext);
	}
	public gClass(): GClassContext | undefined {
		return this.tryGetRuleContext(0, GClassContext);
	}
	public gInterfaceOrStructure(): GInterfaceOrStructureContext | undefined {
		return this.tryGetRuleContext(0, GInterfaceOrStructureContext);
	}
	public gEnum(): GEnumContext | undefined {
		return this.tryGetRuleContext(0, GEnumContext);
	}
	public gEnhancement(): GEnhancementContext | undefined {
		return this.tryGetRuleContext(0, GEnhancementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_start; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterStart) {
			listener.enterStart(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitStart) {
			listener.exitStart(this);
		}
	}
}


export class HeaderContext extends ParserRuleContext {
	public namespaceStatement(): NamespaceStatementContext | undefined {
		return this.tryGetRuleContext(0, NamespaceStatementContext);
	}
	public usesStatementList(): UsesStatementListContext | undefined {
		return this.tryGetRuleContext(0, UsesStatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_header; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterHeader) {
			listener.enterHeader(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitHeader) {
			listener.exitHeader(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	public idAll(): IdAllContext[];
	public idAll(i: number): IdAllContext;
	public idAll(i?: number): IdAllContext | IdAllContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdAllContext);
		} else {
			return this.getRuleContext(i, IdAllContext);
		}
	}
	public annotationArguments(): AnnotationArgumentsContext | undefined {
		return this.tryGetRuleContext(0, AnnotationArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_annotation; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterAnnotation) {
			listener.enterAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitAnnotation) {
			listener.exitAnnotation(this);
		}
	}
}


export class GClassContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public typeVariableDefs(): TypeVariableDefsContext {
		return this.getRuleContext(0, TypeVariableDefsContext);
	}
	public classBody(): ClassBodyContext {
		return this.getRuleContext(0, ClassBodyContext);
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext[];
	public classOrInterfaceType(i: number): ClassOrInterfaceTypeContext;
	public classOrInterfaceType(i?: number): ClassOrInterfaceTypeContext | ClassOrInterfaceTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassOrInterfaceTypeContext);
		} else {
			return this.getRuleContext(i, ClassOrInterfaceTypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_gClass; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterGClass) {
			listener.enterGClass(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitGClass) {
			listener.exitGClass(this);
		}
	}
}


export class GInterfaceOrStructureContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public typeVariableDefs(): TypeVariableDefsContext {
		return this.getRuleContext(0, TypeVariableDefsContext);
	}
	public interfaceBody(): InterfaceBodyContext {
		return this.getRuleContext(0, InterfaceBodyContext);
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext[];
	public classOrInterfaceType(i: number): ClassOrInterfaceTypeContext;
	public classOrInterfaceType(i?: number): ClassOrInterfaceTypeContext | ClassOrInterfaceTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassOrInterfaceTypeContext);
		} else {
			return this.getRuleContext(i, ClassOrInterfaceTypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_gInterfaceOrStructure; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterGInterfaceOrStructure) {
			listener.enterGInterfaceOrStructure(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitGInterfaceOrStructure) {
			listener.exitGInterfaceOrStructure(this);
		}
	}
}


export class GEnumContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public typeVariableDefs(): TypeVariableDefsContext {
		return this.getRuleContext(0, TypeVariableDefsContext);
	}
	public enumBody(): EnumBodyContext {
		return this.getRuleContext(0, EnumBodyContext);
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext[];
	public classOrInterfaceType(i: number): ClassOrInterfaceTypeContext;
	public classOrInterfaceType(i?: number): ClassOrInterfaceTypeContext | ClassOrInterfaceTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassOrInterfaceTypeContext);
		} else {
			return this.getRuleContext(i, ClassOrInterfaceTypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_gEnum; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterGEnum) {
			listener.enterGEnum(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitGEnum) {
			listener.exitGEnum(this);
		}
	}
}


export class GEnhancementContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public typeVariableDefs(): TypeVariableDefsContext {
		return this.getRuleContext(0, TypeVariableDefsContext);
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		return this.getRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public enhancementBody(): EnhancementBodyContext {
		return this.getRuleContext(0, EnhancementBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_gEnhancement; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterGEnhancement) {
			listener.enterGEnhancement(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitGEnhancement) {
			listener.exitGEnhancement(this);
		}
	}
}


export class ClassBodyContext extends ParserRuleContext {
	public classMembers(): ClassMembersContext {
		return this.getRuleContext(0, ClassMembersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_classBody; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterClassBody) {
			listener.enterClassBody(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitClassBody) {
			listener.exitClassBody(this);
		}
	}
}


export class EnhancementBodyContext extends ParserRuleContext {
	public enhancementMembers(): EnhancementMembersContext {
		return this.getRuleContext(0, EnhancementMembersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_enhancementBody; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterEnhancementBody) {
			listener.enterEnhancementBody(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitEnhancementBody) {
			listener.exitEnhancementBody(this);
		}
	}
}


export class InterfaceBodyContext extends ParserRuleContext {
	public interfaceMembers(): InterfaceMembersContext {
		return this.getRuleContext(0, InterfaceMembersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_interfaceBody; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterInterfaceBody) {
			listener.enterInterfaceBody(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitInterfaceBody) {
			listener.exitInterfaceBody(this);
		}
	}
}


export class EnumBodyContext extends ParserRuleContext {
	public classMembers(): ClassMembersContext {
		return this.getRuleContext(0, ClassMembersContext);
	}
	public enumConstants(): EnumConstantsContext | undefined {
		return this.tryGetRuleContext(0, EnumConstantsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_enumBody; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterEnumBody) {
			listener.enterEnumBody(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitEnumBody) {
			listener.exitEnumBody(this);
		}
	}
}


export class EnumConstantsContext extends ParserRuleContext {
	public enumConstant(): EnumConstantContext[];
	public enumConstant(i: number): EnumConstantContext;
	public enumConstant(i?: number): EnumConstantContext | EnumConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumConstantContext);
		} else {
			return this.getRuleContext(i, EnumConstantContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_enumConstants; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterEnumConstants) {
			listener.enterEnumConstants(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitEnumConstants) {
			listener.exitEnumConstants(this);
		}
	}
}


export class EnumConstantContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public optionalArguments(): OptionalArgumentsContext {
		return this.getRuleContext(0, OptionalArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_enumConstant; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterEnumConstant) {
			listener.enterEnumConstant(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitEnumConstant) {
			listener.exitEnumConstant(this);
		}
	}
}


export class InterfaceMembersContext extends ParserRuleContext {
	public modifiers(): ModifiersContext[];
	public modifiers(i: number): ModifiersContext;
	public modifiers(i?: number): ModifiersContext | ModifiersContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifiersContext);
		} else {
			return this.getRuleContext(i, ModifiersContext);
		}
	}
	public functionDefn(): FunctionDefnContext[];
	public functionDefn(i: number): FunctionDefnContext;
	public functionDefn(i?: number): FunctionDefnContext | FunctionDefnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionDefnContext);
		} else {
			return this.getRuleContext(i, FunctionDefnContext);
		}
	}
	public propertyDefn(): PropertyDefnContext[];
	public propertyDefn(i: number): PropertyDefnContext;
	public propertyDefn(i?: number): PropertyDefnContext | PropertyDefnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyDefnContext);
		} else {
			return this.getRuleContext(i, PropertyDefnContext);
		}
	}
	public fieldDefn(): FieldDefnContext[];
	public fieldDefn(i: number): FieldDefnContext;
	public fieldDefn(i?: number): FieldDefnContext | FieldDefnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldDefnContext);
		} else {
			return this.getRuleContext(i, FieldDefnContext);
		}
	}
	public gClass(): GClassContext[];
	public gClass(i: number): GClassContext;
	public gClass(i?: number): GClassContext | GClassContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GClassContext);
		} else {
			return this.getRuleContext(i, GClassContext);
		}
	}
	public gInterfaceOrStructure(): GInterfaceOrStructureContext[];
	public gInterfaceOrStructure(i: number): GInterfaceOrStructureContext;
	public gInterfaceOrStructure(i?: number): GInterfaceOrStructureContext | GInterfaceOrStructureContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GInterfaceOrStructureContext);
		} else {
			return this.getRuleContext(i, GInterfaceOrStructureContext);
		}
	}
	public gEnum(): GEnumContext[];
	public gEnum(i: number): GEnumContext;
	public gEnum(i?: number): GEnumContext | GEnumContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GEnumContext);
		} else {
			return this.getRuleContext(i, GEnumContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_interfaceMembers; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterInterfaceMembers) {
			listener.enterInterfaceMembers(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitInterfaceMembers) {
			listener.exitInterfaceMembers(this);
		}
	}
}


export class ClassMembersContext extends ParserRuleContext {
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_classMembers; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterClassMembers) {
			listener.enterClassMembers(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitClassMembers) {
			listener.exitClassMembers(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public modifiers(): ModifiersContext {
		return this.getRuleContext(0, ModifiersContext);
	}
	public functionDefn(): FunctionDefnContext | undefined {
		return this.tryGetRuleContext(0, FunctionDefnContext);
	}
	public constructorDefn(): ConstructorDefnContext | undefined {
		return this.tryGetRuleContext(0, ConstructorDefnContext);
	}
	public functionBody(): FunctionBodyContext | undefined {
		return this.tryGetRuleContext(0, FunctionBodyContext);
	}
	public propertyDefn(): PropertyDefnContext | undefined {
		return this.tryGetRuleContext(0, PropertyDefnContext);
	}
	public fieldDefn(): FieldDefnContext | undefined {
		return this.tryGetRuleContext(0, FieldDefnContext);
	}
	public delegateDefn(): DelegateDefnContext | undefined {
		return this.tryGetRuleContext(0, DelegateDefnContext);
	}
	public gClass(): GClassContext | undefined {
		return this.tryGetRuleContext(0, GClassContext);
	}
	public gInterfaceOrStructure(): GInterfaceOrStructureContext | undefined {
		return this.tryGetRuleContext(0, GInterfaceOrStructureContext);
	}
	public gEnum(): GEnumContext | undefined {
		return this.tryGetRuleContext(0, GEnumContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_declaration; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
}


export class EnhancementMembersContext extends ParserRuleContext {
	public modifiers(): ModifiersContext[];
	public modifiers(i: number): ModifiersContext;
	public modifiers(i?: number): ModifiersContext | ModifiersContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifiersContext);
		} else {
			return this.getRuleContext(i, ModifiersContext);
		}
	}
	public functionDefn(): FunctionDefnContext[];
	public functionDefn(i: number): FunctionDefnContext;
	public functionDefn(i?: number): FunctionDefnContext | FunctionDefnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionDefnContext);
		} else {
			return this.getRuleContext(i, FunctionDefnContext);
		}
	}
	public functionBody(): FunctionBodyContext[];
	public functionBody(i: number): FunctionBodyContext;
	public functionBody(i?: number): FunctionBodyContext | FunctionBodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionBodyContext);
		} else {
			return this.getRuleContext(i, FunctionBodyContext);
		}
	}
	public propertyDefn(): PropertyDefnContext[];
	public propertyDefn(i: number): PropertyDefnContext;
	public propertyDefn(i?: number): PropertyDefnContext | PropertyDefnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyDefnContext);
		} else {
			return this.getRuleContext(i, PropertyDefnContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_enhancementMembers; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterEnhancementMembers) {
			listener.enterEnhancementMembers(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitEnhancementMembers) {
			listener.exitEnhancementMembers(this);
		}
	}
}


export class DelegateDefnContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public delegateStatement(): DelegateStatementContext {
		return this.getRuleContext(0, DelegateStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_delegateDefn; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterDelegateDefn) {
			listener.enterDelegateDefn(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitDelegateDefn) {
			listener.exitDelegateDefn(this);
		}
	}
}


export class DelegateStatementContext extends ParserRuleContext {
	public typeLiteral(): TypeLiteralContext[];
	public typeLiteral(i: number): TypeLiteralContext;
	public typeLiteral(i?: number): TypeLiteralContext | TypeLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeLiteralContext);
		} else {
			return this.getRuleContext(i, TypeLiteralContext);
		}
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_delegateStatement; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterDelegateStatement) {
			listener.enterDelegateStatement(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitDelegateStatement) {
			listener.exitDelegateStatement(this);
		}
	}
}


export class OptionalTypeContext extends ParserRuleContext {
	public typeLiteral(): TypeLiteralContext | undefined {
		return this.tryGetRuleContext(0, TypeLiteralContext);
	}
	public blockTypeLiteral(): BlockTypeLiteralContext | undefined {
		return this.tryGetRuleContext(0, BlockTypeLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_optionalType; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterOptionalType) {
			listener.enterOptionalType(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitOptionalType) {
			listener.exitOptionalType(this);
		}
	}
}


export class FieldDefnContext extends ParserRuleContext {
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public optionalType(): OptionalTypeContext {
		return this.getRuleContext(0, OptionalTypeContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_fieldDefn; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterFieldDefn) {
			listener.enterFieldDefn(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitFieldDefn) {
			listener.exitFieldDefn(this);
		}
	}
}


export class PropertyDefnContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public typeLiteral(): TypeLiteralContext | undefined {
		return this.tryGetRuleContext(0, TypeLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_propertyDefn; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterPropertyDefn) {
			listener.enterPropertyDefn(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitPropertyDefn) {
			listener.exitPropertyDefn(this);
		}
	}
}


export class DotPathWordContext extends ParserRuleContext {
	public idAll(): IdAllContext[];
	public idAll(i: number): IdAllContext;
	public idAll(i?: number): IdAllContext | IdAllContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdAllContext);
		} else {
			return this.getRuleContext(i, IdAllContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_dotPathWord; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterDotPathWord) {
			listener.enterDotPathWord(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitDotPathWord) {
			listener.exitDotPathWord(this);
		}
	}
}


export class NamespaceStatementContext extends ParserRuleContext {
	public dotPathWord(): DotPathWordContext {
		return this.getRuleContext(0, DotPathWordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_namespaceStatement; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterNamespaceStatement) {
			listener.enterNamespaceStatement(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitNamespaceStatement) {
			listener.exitNamespaceStatement(this);
		}
	}
}


export class UsesStatementListContext extends ParserRuleContext {
	public usesStatement(): UsesStatementContext[];
	public usesStatement(i: number): UsesStatementContext;
	public usesStatement(i?: number): UsesStatementContext | UsesStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UsesStatementContext);
		} else {
			return this.getRuleContext(i, UsesStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_usesStatementList; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterUsesStatementList) {
			listener.enterUsesStatementList(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitUsesStatementList) {
			listener.exitUsesStatementList(this);
		}
	}
}


export class UsesStatementContext extends ParserRuleContext {
	public dotPathWord(): DotPathWordContext {
		return this.getRuleContext(0, DotPathWordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_usesStatement; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterUsesStatement) {
			listener.enterUsesStatement(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitUsesStatement) {
			listener.exitUsesStatement(this);
		}
	}
}


export class TypeVariableDefsContext extends ParserRuleContext {
	public typeVariableDefinition(): TypeVariableDefinitionContext[];
	public typeVariableDefinition(i: number): TypeVariableDefinitionContext;
	public typeVariableDefinition(i?: number): TypeVariableDefinitionContext | TypeVariableDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeVariableDefinitionContext);
		} else {
			return this.getRuleContext(i, TypeVariableDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_typeVariableDefs; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterTypeVariableDefs) {
			listener.enterTypeVariableDefs(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitTypeVariableDefs) {
			listener.exitTypeVariableDefs(this);
		}
	}
}


export class TypeVariableDefinitionContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public typeLiteralList(): TypeLiteralListContext | undefined {
		return this.tryGetRuleContext(0, TypeLiteralListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_typeVariableDefinition; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterTypeVariableDefinition) {
			listener.enterTypeVariableDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitTypeVariableDefinition) {
			listener.exitTypeVariableDefinition(this);
		}
	}
}


export class FunctionBodyContext extends ParserRuleContext {
	public statementBlock(): StatementBlockContext {
		return this.getRuleContext(0, StatementBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_functionBody; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterFunctionBody) {
			listener.enterFunctionBody(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitFunctionBody) {
			listener.exitFunctionBody(this);
		}
	}
}


export class ParametersContext extends ParserRuleContext {
	public parameterDeclarationList(): ParameterDeclarationListContext | undefined {
		return this.tryGetRuleContext(0, ParameterDeclarationListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_parameters; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterParameters) {
			listener.enterParameters(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitParameters) {
			listener.exitParameters(this);
		}
	}
}


export class FunctionDefnContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public typeVariableDefs(): TypeVariableDefsContext {
		return this.getRuleContext(0, TypeVariableDefsContext);
	}
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public typeLiteral(): TypeLiteralContext | undefined {
		return this.tryGetRuleContext(0, TypeLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_functionDefn; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterFunctionDefn) {
			listener.enterFunctionDefn(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitFunctionDefn) {
			listener.exitFunctionDefn(this);
		}
	}
}


export class ConstructorDefnContext extends ParserRuleContext {
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public typeLiteral(): TypeLiteralContext | undefined {
		return this.tryGetRuleContext(0, TypeLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_constructorDefn; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterConstructorDefn) {
			listener.enterConstructorDefn(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitConstructorDefn) {
			listener.exitConstructorDefn(this);
		}
	}
}


export class ModifiersContext extends ParserRuleContext {
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_modifiers; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterModifiers) {
			listener.enterModifiers(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitModifiers) {
			listener.exitModifiers(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public tryCatchFinallyStatement(): TryCatchFinallyStatementContext | undefined {
		return this.tryGetRuleContext(0, TryCatchFinallyStatementContext);
	}
	public throwStatement(): ThrowStatementContext | undefined {
		return this.tryGetRuleContext(0, ThrowStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public forEachStatement(): ForEachStatementContext | undefined {
		return this.tryGetRuleContext(0, ForEachStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public doWhileStatement(): DoWhileStatementContext | undefined {
		return this.tryGetRuleContext(0, DoWhileStatementContext);
	}
	public switchStatement(): SwitchStatementContext | undefined {
		return this.tryGetRuleContext(0, SwitchStatementContext);
	}
	public usingStatement(): UsingStatementContext | undefined {
		return this.tryGetRuleContext(0, UsingStatementContext);
	}
	public assertStatement(): AssertStatementContext | undefined {
		return this.tryGetRuleContext(0, AssertStatementContext);
	}
	public localVarStatement(): LocalVarStatementContext | undefined {
		return this.tryGetRuleContext(0, LocalVarStatementContext);
	}
	public evalExpr(): EvalExprContext | undefined {
		return this.tryGetRuleContext(0, EvalExprContext);
	}
	public assignmentOrMethodCall(): AssignmentOrMethodCallContext | undefined {
		return this.tryGetRuleContext(0, AssignmentOrMethodCallContext);
	}
	public incrementDecrementStatement(): IncrementDecrementStatementContext | undefined {
		return this.tryGetRuleContext(0, IncrementDecrementStatementContext);
	}
	public statementBlock(): StatementBlockContext | undefined {
		return this.tryGetRuleContext(0, StatementBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_statement; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class IncrementDecrementStatementContext extends ParserRuleContext {
	public incrementOp(): IncrementOpContext {
		return this.getRuleContext(0, IncrementOpContext);
	}
	public primaryExpr(): PrimaryExprContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExprContext);
	}
	public indirectMemberAccess(): IndirectMemberAccessContext | undefined {
		return this.tryGetRuleContext(0, IndirectMemberAccessContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_incrementDecrementStatement; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterIncrementDecrementStatement) {
			listener.enterIncrementDecrementStatement(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitIncrementDecrementStatement) {
			listener.exitIncrementDecrementStatement(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
}


export class TryCatchFinallyStatementContext extends ParserRuleContext {
	public statementBlock(): StatementBlockContext[];
	public statementBlock(i: number): StatementBlockContext;
	public statementBlock(i?: number): StatementBlockContext | StatementBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementBlockContext);
		} else {
			return this.getRuleContext(i, StatementBlockContext);
		}
	}
	public catchClause(): CatchClauseContext[];
	public catchClause(i: number): CatchClauseContext;
	public catchClause(i?: number): CatchClauseContext | CatchClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CatchClauseContext);
		} else {
			return this.getRuleContext(i, CatchClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_tryCatchFinallyStatement; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterTryCatchFinallyStatement) {
			listener.enterTryCatchFinallyStatement(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitTryCatchFinallyStatement) {
			listener.exitTryCatchFinallyStatement(this);
		}
	}
}


export class CatchClauseContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public statementBlock(): StatementBlockContext {
		return this.getRuleContext(0, StatementBlockContext);
	}
	public typeLiteral(): TypeLiteralContext | undefined {
		return this.tryGetRuleContext(0, TypeLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_catchClause; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterCatchClause) {
			listener.enterCatchClause(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitCatchClause) {
			listener.exitCatchClause(this);
		}
	}
}


export class AssertStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_assertStatement; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterAssertStatement) {
			listener.enterAssertStatement(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitAssertStatement) {
			listener.exitAssertStatement(this);
		}
	}
}


export class UsingStatementContext extends ParserRuleContext {
	public statementBlock(): StatementBlockContext[];
	public statementBlock(i: number): StatementBlockContext;
	public statementBlock(i?: number): StatementBlockContext | StatementBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementBlockContext);
		} else {
			return this.getRuleContext(i, StatementBlockContext);
		}
	}
	public localVarStatement(): LocalVarStatementContext[];
	public localVarStatement(i: number): LocalVarStatementContext;
	public localVarStatement(i?: number): LocalVarStatementContext | LocalVarStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LocalVarStatementContext);
		} else {
			return this.getRuleContext(i, LocalVarStatementContext);
		}
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_usingStatement; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterUsingStatement) {
			listener.enterUsingStatement(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitUsingStatement) {
			listener.exitUsingStatement(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_whileStatement; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
}


export class DoWhileStatementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_doWhileStatement; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterDoWhileStatement) {
			listener.enterDoWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitDoWhileStatement) {
			listener.exitDoWhileStatement(this);
		}
	}
}


export class SwitchStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext[];
	public switchBlockStatementGroup(i: number): SwitchBlockStatementGroupContext;
	public switchBlockStatementGroup(i?: number): SwitchBlockStatementGroupContext | SwitchBlockStatementGroupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchBlockStatementGroupContext);
		} else {
			return this.getRuleContext(i, SwitchBlockStatementGroupContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_switchStatement; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterSwitchStatement) {
			listener.enterSwitchStatement(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitSwitchStatement) {
			listener.exitSwitchStatement(this);
		}
	}
}


export class SwitchBlockStatementGroupContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_switchBlockStatementGroup; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterSwitchBlockStatementGroup) {
			listener.enterSwitchBlockStatementGroup(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitSwitchBlockStatementGroup) {
			listener.exitSwitchBlockStatementGroup(this);
		}
	}
}


export class ThrowStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_throwStatement; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterThrowStatement) {
			listener.enterThrowStatement(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitThrowStatement) {
			listener.exitThrowStatement(this);
		}
	}
}


export class LocalVarStatementContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public optionalType(): OptionalTypeContext {
		return this.getRuleContext(0, OptionalTypeContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_localVarStatement; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterLocalVarStatement) {
			listener.enterLocalVarStatement(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitLocalVarStatement) {
			listener.exitLocalVarStatement(this);
		}
	}
}


export class ForEachStatementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public indexVar(): IndexVarContext | undefined {
		return this.tryGetRuleContext(0, IndexVarContext);
	}
	public indexRest(): IndexRestContext | undefined {
		return this.tryGetRuleContext(0, IndexRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_forEachStatement; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterForEachStatement) {
			listener.enterForEachStatement(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitForEachStatement) {
			listener.exitForEachStatement(this);
		}
	}
}


export class IndexRestContext extends ParserRuleContext {
	public indexVar(): IndexVarContext | undefined {
		return this.tryGetRuleContext(0, IndexVarContext);
	}
	public iteratorVar(): IteratorVarContext | undefined {
		return this.tryGetRuleContext(0, IteratorVarContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_indexRest; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterIndexRest) {
			listener.enterIndexRest(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitIndexRest) {
			listener.exitIndexRest(this);
		}
	}
}


export class IndexVarContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_indexVar; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterIndexVar) {
			listener.enterIndexVar(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitIndexVar) {
			listener.exitIndexVar(this);
		}
	}
}


export class IteratorVarContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_iteratorVar; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterIteratorVar) {
			listener.enterIteratorVar(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitIteratorVar) {
			listener.exitIteratorVar(this);
		}
	}
}


export class ThisSuperExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_thisSuperExpr; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterThisSuperExpr) {
			listener.enterThisSuperExpr(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitThisSuperExpr) {
			listener.exitThisSuperExpr(this);
		}
	}
}


export class AssignmentOrMethodCallContext extends ParserRuleContext {
	public indirectMemberAccess(): IndirectMemberAccessContext | undefined {
		return this.tryGetRuleContext(0, IndirectMemberAccessContext);
	}
	public incrementOp(): IncrementOpContext | undefined {
		return this.tryGetRuleContext(0, IncrementOpContext);
	}
	public assignmentOp(): AssignmentOpContext | undefined {
		return this.tryGetRuleContext(0, AssignmentOpContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public newExpr(): NewExprContext | undefined {
		return this.tryGetRuleContext(0, NewExprContext);
	}
	public thisSuperExpr(): ThisSuperExprContext | undefined {
		return this.tryGetRuleContext(0, ThisSuperExprContext);
	}
	public typeLiteralExpr(): TypeLiteralExprContext | undefined {
		return this.tryGetRuleContext(0, TypeLiteralExprContext);
	}
	public parenthExpr(): ParenthExprContext | undefined {
		return this.tryGetRuleContext(0, ParenthExprContext);
	}
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(GosuParser.StringLiteral, 0); }
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_assignmentOrMethodCall; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterAssignmentOrMethodCall) {
			listener.enterAssignmentOrMethodCall(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitAssignmentOrMethodCall) {
			listener.exitAssignmentOrMethodCall(this);
		}
	}
}


export class StatementBlockContext extends ParserRuleContext {
	public statementBlockBody(): StatementBlockBodyContext {
		return this.getRuleContext(0, StatementBlockBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_statementBlock; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterStatementBlock) {
			listener.enterStatementBlock(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitStatementBlock) {
			listener.exitStatementBlock(this);
		}
	}
}


export class StatementBlockBodyContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_statementBlockBody; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterStatementBlockBody) {
			listener.enterStatementBlockBody(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitStatementBlockBody) {
			listener.exitStatementBlockBody(this);
		}
	}
}


export class BlockTypeLiteralContext extends ParserRuleContext {
	public blockLiteral(): BlockLiteralContext {
		return this.getRuleContext(0, BlockLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_blockTypeLiteral; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterBlockTypeLiteral) {
			listener.enterBlockTypeLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitBlockTypeLiteral) {
			listener.exitBlockTypeLiteral(this);
		}
	}
}


export class BlockLiteralContext extends ParserRuleContext {
	public blockLiteralArg(): BlockLiteralArgContext[];
	public blockLiteralArg(i: number): BlockLiteralArgContext;
	public blockLiteralArg(i?: number): BlockLiteralArgContext | BlockLiteralArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockLiteralArgContext);
		} else {
			return this.getRuleContext(i, BlockLiteralArgContext);
		}
	}
	public typeLiteral(): TypeLiteralContext | undefined {
		return this.tryGetRuleContext(0, TypeLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_blockLiteral; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterBlockLiteral) {
			listener.enterBlockLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitBlockLiteral) {
			listener.exitBlockLiteral(this);
		}
	}
}


export class BlockLiteralArgContext extends ParserRuleContext {
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public blockTypeLiteral(): BlockTypeLiteralContext | undefined {
		return this.tryGetRuleContext(0, BlockTypeLiteralContext);
	}
	public typeLiteral(): TypeLiteralContext | undefined {
		return this.tryGetRuleContext(0, TypeLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_blockLiteralArg; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterBlockLiteralArg) {
			listener.enterBlockLiteralArg(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitBlockLiteralArg) {
			listener.exitBlockLiteralArg(this);
		}
	}
}


export class TypeLiteralContext extends ParserRuleContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_typeLiteral; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterTypeLiteral) {
			listener.enterTypeLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitTypeLiteral) {
			listener.exitTypeLiteral(this);
		}
	}
}


export class TypeLiteralTypeContext extends ParserRuleContext {
	public typeLiteral(): TypeLiteralContext {
		return this.getRuleContext(0, TypeLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_typeLiteralType; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterTypeLiteralType) {
			listener.enterTypeLiteralType(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitTypeLiteralType) {
			listener.exitTypeLiteralType(this);
		}
	}
}


export class TypeLiteralExprContext extends ParserRuleContext {
	public typeLiteral(): TypeLiteralContext {
		return this.getRuleContext(0, TypeLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_typeLiteralExpr; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterTypeLiteralExpr) {
			listener.enterTypeLiteralExpr(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitTypeLiteralExpr) {
			listener.exitTypeLiteralExpr(this);
		}
	}
}


export class TypeLiteralListContext extends ParserRuleContext {
	public typeLiteral(): TypeLiteralContext {
		return this.getRuleContext(0, TypeLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_typeLiteralList; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterTypeLiteralList) {
			listener.enterTypeLiteralList(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitTypeLiteralList) {
			listener.exitTypeLiteralList(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public blockLiteral(): BlockLiteralContext | undefined {
		return this.tryGetRuleContext(0, BlockLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_type; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
}


export class ClassOrInterfaceTypeContext extends ParserRuleContext {
	public idclassOrInterfaceType(): IdclassOrInterfaceTypeContext {
		return this.getRuleContext(0, IdclassOrInterfaceTypeContext);
	}
	public typeArguments(): TypeArgumentsContext[];
	public typeArguments(i: number): TypeArgumentsContext;
	public typeArguments(i?: number): TypeArgumentsContext | TypeArgumentsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentsContext);
		} else {
			return this.getRuleContext(i, TypeArgumentsContext);
		}
	}
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_classOrInterfaceType; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterClassOrInterfaceType) {
			listener.enterClassOrInterfaceType(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitClassOrInterfaceType) {
			listener.exitClassOrInterfaceType(this);
		}
	}
}


export class TypeArgumentsContext extends ParserRuleContext {
	public typeArgument(): TypeArgumentContext[];
	public typeArgument(i: number): TypeArgumentContext;
	public typeArgument(i?: number): TypeArgumentContext | TypeArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentContext);
		} else {
			return this.getRuleContext(i, TypeArgumentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_typeArguments; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterTypeArguments) {
			listener.enterTypeArguments(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitTypeArguments) {
			listener.exitTypeArguments(this);
		}
	}
}


export class TypeArgumentContext extends ParserRuleContext {
	public typeLiteralType(): TypeLiteralTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeLiteralTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_typeArgument; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterTypeArgument) {
			listener.enterTypeArgument(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitTypeArgument) {
			listener.exitTypeArgument(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public conditionalExpr(): ConditionalExprContext {
		return this.getRuleContext(0, ConditionalExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_expression; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class ConditionalExprContext extends ParserRuleContext {
	public conditionalOrExpr(): ConditionalOrExprContext {
		return this.getRuleContext(0, ConditionalOrExprContext);
	}
	public conditionalExpr(): ConditionalExprContext[];
	public conditionalExpr(i: number): ConditionalExprContext;
	public conditionalExpr(i?: number): ConditionalExprContext | ConditionalExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionalExprContext);
		} else {
			return this.getRuleContext(i, ConditionalExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_conditionalExpr; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterConditionalExpr) {
			listener.enterConditionalExpr(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitConditionalExpr) {
			listener.exitConditionalExpr(this);
		}
	}
}


export class ConditionalOrExprContext extends ParserRuleContext {
	public conditionalAndExpr(): ConditionalAndExprContext[];
	public conditionalAndExpr(i: number): ConditionalAndExprContext;
	public conditionalAndExpr(i?: number): ConditionalAndExprContext | ConditionalAndExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionalAndExprContext);
		} else {
			return this.getRuleContext(i, ConditionalAndExprContext);
		}
	}
	public orOp(): OrOpContext[];
	public orOp(i: number): OrOpContext;
	public orOp(i?: number): OrOpContext | OrOpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OrOpContext);
		} else {
			return this.getRuleContext(i, OrOpContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_conditionalOrExpr; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterConditionalOrExpr) {
			listener.enterConditionalOrExpr(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitConditionalOrExpr) {
			listener.exitConditionalOrExpr(this);
		}
	}
}


export class ConditionalAndExprContext extends ParserRuleContext {
	public bitwiseOrExpr(): BitwiseOrExprContext[];
	public bitwiseOrExpr(i: number): BitwiseOrExprContext;
	public bitwiseOrExpr(i?: number): BitwiseOrExprContext | BitwiseOrExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BitwiseOrExprContext);
		} else {
			return this.getRuleContext(i, BitwiseOrExprContext);
		}
	}
	public andOp(): AndOpContext[];
	public andOp(i: number): AndOpContext;
	public andOp(i?: number): AndOpContext | AndOpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AndOpContext);
		} else {
			return this.getRuleContext(i, AndOpContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_conditionalAndExpr; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterConditionalAndExpr) {
			listener.enterConditionalAndExpr(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitConditionalAndExpr) {
			listener.exitConditionalAndExpr(this);
		}
	}
}


export class BitwiseOrExprContext extends ParserRuleContext {
	public bitwiseXorExpr(): BitwiseXorExprContext[];
	public bitwiseXorExpr(i: number): BitwiseXorExprContext;
	public bitwiseXorExpr(i?: number): BitwiseXorExprContext | BitwiseXorExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BitwiseXorExprContext);
		} else {
			return this.getRuleContext(i, BitwiseXorExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_bitwiseOrExpr; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterBitwiseOrExpr) {
			listener.enterBitwiseOrExpr(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitBitwiseOrExpr) {
			listener.exitBitwiseOrExpr(this);
		}
	}
}


export class BitwiseXorExprContext extends ParserRuleContext {
	public bitwiseAndExpr(): BitwiseAndExprContext[];
	public bitwiseAndExpr(i: number): BitwiseAndExprContext;
	public bitwiseAndExpr(i?: number): BitwiseAndExprContext | BitwiseAndExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BitwiseAndExprContext);
		} else {
			return this.getRuleContext(i, BitwiseAndExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_bitwiseXorExpr; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterBitwiseXorExpr) {
			listener.enterBitwiseXorExpr(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitBitwiseXorExpr) {
			listener.exitBitwiseXorExpr(this);
		}
	}
}


export class BitwiseAndExprContext extends ParserRuleContext {
	public equalityExpr(): EqualityExprContext[];
	public equalityExpr(i: number): EqualityExprContext;
	public equalityExpr(i?: number): EqualityExprContext | EqualityExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EqualityExprContext);
		} else {
			return this.getRuleContext(i, EqualityExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_bitwiseAndExpr; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterBitwiseAndExpr) {
			listener.enterBitwiseAndExpr(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitBitwiseAndExpr) {
			listener.exitBitwiseAndExpr(this);
		}
	}
}


export class EqualityExprContext extends ParserRuleContext {
	public relationalExpr(): RelationalExprContext[];
	public relationalExpr(i: number): RelationalExprContext;
	public relationalExpr(i?: number): RelationalExprContext | RelationalExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationalExprContext);
		} else {
			return this.getRuleContext(i, RelationalExprContext);
		}
	}
	public equalityOp(): EqualityOpContext[];
	public equalityOp(i: number): EqualityOpContext;
	public equalityOp(i?: number): EqualityOpContext | EqualityOpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EqualityOpContext);
		} else {
			return this.getRuleContext(i, EqualityOpContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_equalityExpr; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterEqualityExpr) {
			listener.enterEqualityExpr(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitEqualityExpr) {
			listener.exitEqualityExpr(this);
		}
	}
}


export class RelationalExprContext extends ParserRuleContext {
	public intervalExpr(): IntervalExprContext[];
	public intervalExpr(i: number): IntervalExprContext;
	public intervalExpr(i?: number): IntervalExprContext | IntervalExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntervalExprContext);
		} else {
			return this.getRuleContext(i, IntervalExprContext);
		}
	}
	public relOp(): RelOpContext[];
	public relOp(i: number): RelOpContext;
	public relOp(i?: number): RelOpContext | RelOpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelOpContext);
		} else {
			return this.getRuleContext(i, RelOpContext);
		}
	}
	public typeLiteralType(): TypeLiteralTypeContext[];
	public typeLiteralType(i: number): TypeLiteralTypeContext;
	public typeLiteralType(i?: number): TypeLiteralTypeContext | TypeLiteralTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeLiteralTypeContext);
		} else {
			return this.getRuleContext(i, TypeLiteralTypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_relationalExpr; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterRelationalExpr) {
			listener.enterRelationalExpr(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitRelationalExpr) {
			listener.exitRelationalExpr(this);
		}
	}
}


export class IntervalExprContext extends ParserRuleContext {
	public bitshiftExpr(): BitshiftExprContext[];
	public bitshiftExpr(i: number): BitshiftExprContext;
	public bitshiftExpr(i?: number): BitshiftExprContext | BitshiftExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BitshiftExprContext);
		} else {
			return this.getRuleContext(i, BitshiftExprContext);
		}
	}
	public intervalOp(): IntervalOpContext | undefined {
		return this.tryGetRuleContext(0, IntervalOpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_intervalExpr; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterIntervalExpr) {
			listener.enterIntervalExpr(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitIntervalExpr) {
			listener.exitIntervalExpr(this);
		}
	}
}


export class BitshiftExprContext extends ParserRuleContext {
	public additiveExpr(): AdditiveExprContext[];
	public additiveExpr(i: number): AdditiveExprContext;
	public additiveExpr(i?: number): AdditiveExprContext | AdditiveExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditiveExprContext);
		} else {
			return this.getRuleContext(i, AdditiveExprContext);
		}
	}
	public bitshiftOp(): BitshiftOpContext[];
	public bitshiftOp(i: number): BitshiftOpContext;
	public bitshiftOp(i?: number): BitshiftOpContext | BitshiftOpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BitshiftOpContext);
		} else {
			return this.getRuleContext(i, BitshiftOpContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_bitshiftExpr; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterBitshiftExpr) {
			listener.enterBitshiftExpr(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitBitshiftExpr) {
			listener.exitBitshiftExpr(this);
		}
	}
}


export class AdditiveExprContext extends ParserRuleContext {
	public multiplicativeExpr(): MultiplicativeExprContext[];
	public multiplicativeExpr(i: number): MultiplicativeExprContext;
	public multiplicativeExpr(i?: number): MultiplicativeExprContext | MultiplicativeExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplicativeExprContext);
		} else {
			return this.getRuleContext(i, MultiplicativeExprContext);
		}
	}
	public additiveOp(): AdditiveOpContext[];
	public additiveOp(i: number): AdditiveOpContext;
	public additiveOp(i?: number): AdditiveOpContext | AdditiveOpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditiveOpContext);
		} else {
			return this.getRuleContext(i, AdditiveOpContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_additiveExpr; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterAdditiveExpr) {
			listener.enterAdditiveExpr(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitAdditiveExpr) {
			listener.exitAdditiveExpr(this);
		}
	}
}


export class MultiplicativeExprContext extends ParserRuleContext {
	public typeAsExpr(): TypeAsExprContext[];
	public typeAsExpr(i: number): TypeAsExprContext;
	public typeAsExpr(i?: number): TypeAsExprContext | TypeAsExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeAsExprContext);
		} else {
			return this.getRuleContext(i, TypeAsExprContext);
		}
	}
	public multiplicativeOp(): MultiplicativeOpContext[];
	public multiplicativeOp(i: number): MultiplicativeOpContext;
	public multiplicativeOp(i?: number): MultiplicativeOpContext | MultiplicativeOpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplicativeOpContext);
		} else {
			return this.getRuleContext(i, MultiplicativeOpContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_multiplicativeExpr; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterMultiplicativeExpr) {
			listener.enterMultiplicativeExpr(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitMultiplicativeExpr) {
			listener.exitMultiplicativeExpr(this);
		}
	}
}


export class TypeAsExprContext extends ParserRuleContext {
	public unaryExpr(): UnaryExprContext {
		return this.getRuleContext(0, UnaryExprContext);
	}
	public typeAsOp(): TypeAsOpContext[];
	public typeAsOp(i: number): TypeAsOpContext;
	public typeAsOp(i?: number): TypeAsOpContext | TypeAsOpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeAsOpContext);
		} else {
			return this.getRuleContext(i, TypeAsOpContext);
		}
	}
	public typeLiteral(): TypeLiteralContext[];
	public typeLiteral(i: number): TypeLiteralContext;
	public typeLiteral(i?: number): TypeLiteralContext | TypeLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeLiteralContext);
		} else {
			return this.getRuleContext(i, TypeLiteralContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_typeAsExpr; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterTypeAsExpr) {
			listener.enterTypeAsExpr(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitTypeAsExpr) {
			listener.exitTypeAsExpr(this);
		}
	}
}


export class UnaryExprContext extends ParserRuleContext {
	public unaryExprNotPlusMinus(): UnaryExprNotPlusMinusContext {
		return this.getRuleContext(0, UnaryExprNotPlusMinusContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_unaryExpr; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterUnaryExpr) {
			listener.enterUnaryExpr(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitUnaryExpr) {
			listener.exitUnaryExpr(this);
		}
	}
}


export class UnaryExprNotPlusMinusContext extends ParserRuleContext {
	public unaryOp(): UnaryOpContext | undefined {
		return this.tryGetRuleContext(0, UnaryOpContext);
	}
	public unaryExpr(): UnaryExprContext | undefined {
		return this.tryGetRuleContext(0, UnaryExprContext);
	}
	public blockExprWrap(): BlockExprWrapContext | undefined {
		return this.tryGetRuleContext(0, BlockExprWrapContext);
	}
	public evalExpr(): EvalExprContext | undefined {
		return this.tryGetRuleContext(0, EvalExprContext);
	}
	public primaryExpr(): PrimaryExprContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_unaryExprNotPlusMinus; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterUnaryExprNotPlusMinus) {
			listener.enterUnaryExprNotPlusMinus(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitUnaryExprNotPlusMinus) {
			listener.exitUnaryExprNotPlusMinus(this);
		}
	}
}


export class BlockExprWrapContext extends ParserRuleContext {
	public BACKSLASH(): TerminalNode { return this.getToken(GosuParser.BACKSLASH, 0); }
	public blockExpr(): BlockExprContext {
		return this.getRuleContext(0, BlockExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_blockExprWrap; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterBlockExprWrap) {
			listener.enterBlockExprWrap(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitBlockExprWrap) {
			listener.exitBlockExprWrap(this);
		}
	}
}


export class BlockExprContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public statementBlock(): StatementBlockContext | undefined {
		return this.tryGetRuleContext(0, StatementBlockContext);
	}
	public parameterDeclarationList(): ParameterDeclarationListContext | undefined {
		return this.tryGetRuleContext(0, ParameterDeclarationListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_blockExpr; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterBlockExpr) {
			listener.enterBlockExpr(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitBlockExpr) {
			listener.exitBlockExpr(this);
		}
	}
}


export class ParameterDeclarationListContext extends ParserRuleContext {
	public parameterDeclaration(): ParameterDeclarationContext[];
	public parameterDeclaration(i: number): ParameterDeclarationContext;
	public parameterDeclaration(i?: number): ParameterDeclarationContext | ParameterDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterDeclarationContext);
		} else {
			return this.getRuleContext(i, ParameterDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_parameterDeclarationList; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterParameterDeclarationList) {
			listener.enterParameterDeclarationList(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitParameterDeclarationList) {
			listener.exitParameterDeclarationList(this);
		}
	}
}


export class ParameterDeclarationContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public blockTypeLiteral(): BlockTypeLiteralContext | undefined {
		return this.tryGetRuleContext(0, BlockTypeLiteralContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public typeLiteral(): TypeLiteralContext | undefined {
		return this.tryGetRuleContext(0, TypeLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_parameterDeclaration; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterParameterDeclaration) {
			listener.enterParameterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitParameterDeclaration) {
			listener.exitParameterDeclaration(this);
		}
	}
}


export class AnnotationArgumentsContext extends ParserRuleContext {
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_annotationArguments; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterAnnotationArguments) {
			listener.enterAnnotationArguments(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitAnnotationArguments) {
			listener.exitAnnotationArguments(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public argExpression(): ArgExpressionContext[];
	public argExpression(i: number): ArgExpressionContext;
	public argExpression(i?: number): ArgExpressionContext | ArgExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgExpressionContext);
		} else {
			return this.getRuleContext(i, ArgExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_arguments; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
}


export class OptionalArgumentsContext extends ParserRuleContext {
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_optionalArguments; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterOptionalArguments) {
			listener.enterOptionalArguments(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitOptionalArguments) {
			listener.exitOptionalArguments(this);
		}
	}
}


export class ArgExpressionContext extends ParserRuleContext {
	public namedArgumentExpression(): NamedArgumentExpressionContext | undefined {
		return this.tryGetRuleContext(0, NamedArgumentExpressionContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_argExpression; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterArgExpression) {
			listener.enterArgExpression(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitArgExpression) {
			listener.exitArgExpression(this);
		}
	}
}


export class NamedArgumentExpressionContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_namedArgumentExpression; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterNamedArgumentExpression) {
			listener.enterNamedArgumentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitNamedArgumentExpression) {
			listener.exitNamedArgumentExpression(this);
		}
	}
}


export class EvalExprContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_evalExpr; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterEvalExpr) {
			listener.enterEvalExpr(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitEvalExpr) {
			listener.exitEvalExpr(this);
		}
	}
}


export class FeatureLiteralContext extends ParserRuleContext {
	public typeArguments(): TypeArgumentsContext {
		return this.getRuleContext(0, TypeArgumentsContext);
	}
	public optionalArguments(): OptionalArgumentsContext {
		return this.getRuleContext(0, OptionalArgumentsContext);
	}
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_featureLiteral; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterFeatureLiteral) {
			listener.enterFeatureLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitFeatureLiteral) {
			listener.exitFeatureLiteral(this);
		}
	}
}


export class StandAloneDataStructureInitializationContext extends ParserRuleContext {
	public initializerExpression(): InitializerExpressionContext | undefined {
		return this.tryGetRuleContext(0, InitializerExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_standAloneDataStructureInitialization; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterStandAloneDataStructureInitialization) {
			listener.enterStandAloneDataStructureInitialization(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitStandAloneDataStructureInitialization) {
			listener.exitStandAloneDataStructureInitialization(this);
		}
	}
}


export class PrimaryExprContext extends ParserRuleContext {
	public indirectMemberAccess(): IndirectMemberAccessContext {
		return this.getRuleContext(0, IndirectMemberAccessContext);
	}
	public newExpr(): NewExprContext | undefined {
		return this.tryGetRuleContext(0, NewExprContext);
	}
	public thisSuperExpr(): ThisSuperExprContext | undefined {
		return this.tryGetRuleContext(0, ThisSuperExprContext);
	}
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public typeLiteralExpr(): TypeLiteralExprContext | undefined {
		return this.tryGetRuleContext(0, TypeLiteralExprContext);
	}
	public parenthExpr(): ParenthExprContext | undefined {
		return this.tryGetRuleContext(0, ParenthExprContext);
	}
	public standAloneDataStructureInitialization(): StandAloneDataStructureInitializationContext | undefined {
		return this.tryGetRuleContext(0, StandAloneDataStructureInitializationContext);
	}
	public blockExprWrap(): BlockExprWrapContext | undefined {
		return this.tryGetRuleContext(0, BlockExprWrapContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_primaryExpr; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterPrimaryExpr) {
			listener.enterPrimaryExpr(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitPrimaryExpr) {
			listener.exitPrimaryExpr(this);
		}
	}
}


export class ParenthExprContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_parenthExpr; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterParenthExpr) {
			listener.enterParenthExpr(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitParenthExpr) {
			listener.exitParenthExpr(this);
		}
	}
}


export class NewExprContext extends ParserRuleContext {
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public arrayInitializer(): ArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializerContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public initializer(): InitializerContext | undefined {
		return this.tryGetRuleContext(0, InitializerContext);
	}
	public anonymousInnerClass(): AnonymousInnerClassContext | undefined {
		return this.tryGetRuleContext(0, AnonymousInnerClassContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_newExpr; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterNewExpr) {
			listener.enterNewExpr(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitNewExpr) {
			listener.exitNewExpr(this);
		}
	}
}


export class AnonymousInnerClassContext extends ParserRuleContext {
	public classMembers(): ClassMembersContext {
		return this.getRuleContext(0, ClassMembersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_anonymousInnerClass; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterAnonymousInnerClass) {
			listener.enterAnonymousInnerClass(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitAnonymousInnerClass) {
			listener.exitAnonymousInnerClass(this);
		}
	}
}


export class ArrayInitializerContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_arrayInitializer; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterArrayInitializer) {
			listener.enterArrayInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitArrayInitializer) {
			listener.exitArrayInitializer(this);
		}
	}
}


export class InitializerContext extends ParserRuleContext {
	public initializerExpression(): InitializerExpressionContext | undefined {
		return this.tryGetRuleContext(0, InitializerExpressionContext);
	}
	public objectInitializer(): ObjectInitializerContext | undefined {
		return this.tryGetRuleContext(0, ObjectInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_initializer; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterInitializer) {
			listener.enterInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitInitializer) {
			listener.exitInitializer(this);
		}
	}
}


export class InitializerExpressionContext extends ParserRuleContext {
	public mapInitializerList(): MapInitializerListContext | undefined {
		return this.tryGetRuleContext(0, MapInitializerListContext);
	}
	public arrayValueList(): ArrayValueListContext | undefined {
		return this.tryGetRuleContext(0, ArrayValueListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_initializerExpression; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterInitializerExpression) {
			listener.enterInitializerExpression(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitInitializerExpression) {
			listener.exitInitializerExpression(this);
		}
	}
}


export class ArrayValueListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_arrayValueList; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterArrayValueList) {
			listener.enterArrayValueList(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitArrayValueList) {
			listener.exitArrayValueList(this);
		}
	}
}


export class MapInitializerListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_mapInitializerList; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterMapInitializerList) {
			listener.enterMapInitializerList(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitMapInitializerList) {
			listener.exitMapInitializerList(this);
		}
	}
}


export class ObjectInitializerContext extends ParserRuleContext {
	public initializerAssignment(): InitializerAssignmentContext[];
	public initializerAssignment(i: number): InitializerAssignmentContext;
	public initializerAssignment(i?: number): InitializerAssignmentContext | InitializerAssignmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitializerAssignmentContext);
		} else {
			return this.getRuleContext(i, InitializerAssignmentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_objectInitializer; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterObjectInitializer) {
			listener.enterObjectInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitObjectInitializer) {
			listener.exitObjectInitializer(this);
		}
	}
}


export class InitializerAssignmentContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_initializerAssignment; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterInitializerAssignment) {
			listener.enterInitializerAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitInitializerAssignment) {
			listener.exitInitializerAssignment(this);
		}
	}
}


export class IndirectMemberAccessContext extends ParserRuleContext {
	public idAll(): IdAllContext[];
	public idAll(i: number): IdAllContext;
	public idAll(i?: number): IdAllContext | IdAllContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdAllContext);
		} else {
			return this.getRuleContext(i, IdAllContext);
		}
	}
	public typeArguments(): TypeArgumentsContext[];
	public typeArguments(i: number): TypeArgumentsContext;
	public typeArguments(i?: number): TypeArgumentsContext | TypeArgumentsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentsContext);
		} else {
			return this.getRuleContext(i, TypeArgumentsContext);
		}
	}
	public featureLiteral(): FeatureLiteralContext[];
	public featureLiteral(i: number): FeatureLiteralContext;
	public featureLiteral(i?: number): FeatureLiteralContext | FeatureLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FeatureLiteralContext);
		} else {
			return this.getRuleContext(i, FeatureLiteralContext);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public arguments(): ArgumentsContext[];
	public arguments(i: number): ArgumentsContext;
	public arguments(i?: number): ArgumentsContext | ArgumentsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentsContext);
		} else {
			return this.getRuleContext(i, ArgumentsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_indirectMemberAccess; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterIndirectMemberAccess) {
			listener.enterIndirectMemberAccess(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitIndirectMemberAccess) {
			listener.exitIndirectMemberAccess(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public NumberLiteral(): TerminalNode | undefined { return this.tryGetToken(GosuParser.NumberLiteral, 0); }
	public featureLiteral(): FeatureLiteralContext | undefined {
		return this.tryGetRuleContext(0, FeatureLiteralContext);
	}
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(GosuParser.StringLiteral, 0); }
	public CharLiteral(): TerminalNode | undefined { return this.tryGetToken(GosuParser.CharLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_literal; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
}


export class OrOpContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_orOp; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterOrOp) {
			listener.enterOrOp(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitOrOp) {
			listener.exitOrOp(this);
		}
	}
}


export class AndOpContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_andOp; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterAndOp) {
			listener.enterAndOp(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitAndOp) {
			listener.exitAndOp(this);
		}
	}
}


export class AssignmentOpContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_assignmentOp; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterAssignmentOp) {
			listener.enterAssignmentOp(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitAssignmentOp) {
			listener.exitAssignmentOp(this);
		}
	}
}


export class IncrementOpContext extends ParserRuleContext {
	public INCREMENT(): TerminalNode | undefined { return this.tryGetToken(GosuParser.INCREMENT, 0); }
	public DECREMENT(): TerminalNode | undefined { return this.tryGetToken(GosuParser.DECREMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_incrementOp; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterIncrementOp) {
			listener.enterIncrementOp(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitIncrementOp) {
			listener.exitIncrementOp(this);
		}
	}
}


export class EqualityOpContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_equalityOp; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterEqualityOp) {
			listener.enterEqualityOp(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitEqualityOp) {
			listener.exitEqualityOp(this);
		}
	}
}


export class IntervalOpContext extends ParserRuleContext {
	public RANGE_INCLUSIVE(): TerminalNode | undefined { return this.tryGetToken(GosuParser.RANGE_INCLUSIVE, 0); }
	public RANGE_EXCLUSIVE_LEFT(): TerminalNode | undefined { return this.tryGetToken(GosuParser.RANGE_EXCLUSIVE_LEFT, 0); }
	public RANGE_EXCLUSIVE_RIGHT(): TerminalNode | undefined { return this.tryGetToken(GosuParser.RANGE_EXCLUSIVE_RIGHT, 0); }
	public RANGE_EXCLUSIVE_BOTH(): TerminalNode | undefined { return this.tryGetToken(GosuParser.RANGE_EXCLUSIVE_BOTH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_intervalOp; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterIntervalOp) {
			listener.enterIntervalOp(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitIntervalOp) {
			listener.exitIntervalOp(this);
		}
	}
}


export class RelOpContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_relOp; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterRelOp) {
			listener.enterRelOp(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitRelOp) {
			listener.exitRelOp(this);
		}
	}
}


export class BitshiftOpContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_bitshiftOp; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterBitshiftOp) {
			listener.enterBitshiftOp(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitBitshiftOp) {
			listener.exitBitshiftOp(this);
		}
	}
}


export class AdditiveOpContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_additiveOp; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterAdditiveOp) {
			listener.enterAdditiveOp(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitAdditiveOp) {
			listener.exitAdditiveOp(this);
		}
	}
}


export class MultiplicativeOpContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_multiplicativeOp; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterMultiplicativeOp) {
			listener.enterMultiplicativeOp(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitMultiplicativeOp) {
			listener.exitMultiplicativeOp(this);
		}
	}
}


export class TypeAsOpContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_typeAsOp; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterTypeAsOp) {
			listener.enterTypeAsOp(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitTypeAsOp) {
			listener.exitTypeAsOp(this);
		}
	}
}


export class UnaryOpContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_unaryOp; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterUnaryOp) {
			listener.enterUnaryOp(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitUnaryOp) {
			listener.exitUnaryOp(this);
		}
	}
}


export class IdContext extends ParserRuleContext {
	public Ident(): TerminalNode { return this.getToken(GosuParser.Ident, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_id; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterId) {
			listener.enterId(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitId) {
			listener.exitId(this);
		}
	}
}


export class IdclassOrInterfaceTypeContext extends ParserRuleContext {
	public Ident(): TerminalNode { return this.getToken(GosuParser.Ident, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_idclassOrInterfaceType; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterIdclassOrInterfaceType) {
			listener.enterIdclassOrInterfaceType(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitIdclassOrInterfaceType) {
			listener.exitIdclassOrInterfaceType(this);
		}
	}
}


export class IdAllContext extends ParserRuleContext {
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GosuParser.RULE_idAll; }
	// @Override
	public enterRule(listener: GosuListener): void {
		if (listener.enterIdAll) {
			listener.enterIdAll(this);
		}
	}
	// @Override
	public exitRule(listener: GosuListener): void {
		if (listener.exitIdAll) {
			listener.exitIdAll(this);
		}
	}
}


