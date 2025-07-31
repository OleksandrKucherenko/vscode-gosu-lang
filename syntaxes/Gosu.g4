grammar Gosu; // Final Version (based on Grok 4, with fixes)

// options { language = TypeScript; }  // Uncomment after upgrading ANTLR to 4.12+; remove for Java target

// Parser rules

start
    : header modifiers (gClass | gInterfaceOrStructure | gEnum | gEnhancement)
    ;

header
    : (PACKAGE namespaceStatement)? usesStatementList?
    ;

annotation
    : '@' idAll ('.' idAll)* annotationArguments?
    ;

gClass
    : CLASS id typeVariableDefs (EXTENDS classOrInterfaceType)? (IMPLEMENTS classOrInterfaceType (',' classOrInterfaceType)*)? classBody
    ;

gInterfaceOrStructure
    : (INTERFACE | STRUCTURE) id typeVariableDefs (EXTENDS classOrInterfaceType (',' classOrInterfaceType)*)? interfaceBody
    ;

gEnum
    : ENUM id typeVariableDefs (IMPLEMENTS classOrInterfaceType (',' classOrInterfaceType)*)? enumBody
    ;

gEnhancement
    : ENHANCEMENT id typeVariableDefs ':' classOrInterfaceType ('[' ']')* enhancementBody
    ;

classBody
    : '{' classMembers '}'
    ;

enhancementBody
    : '{' enhancementMembers '}'
    ;

interfaceBody
    : '{' interfaceMembers '}'
    ;

enumBody
    : '{' enumConstants? classMembers '}'
    ;

enumConstants
    : enumConstant (',' enumConstant)* ','? ';'?
    ;

enumConstant
    : id optionalArguments
    ;

interfaceMembers
    : (modifiers (functionDefn | propertyDefn | fieldDefn | gClass | gInterfaceOrStructure | gEnum) ';'?)*
;

classMembers
    : declaration*
;

declaration
    : modifiers (functionDefn functionBody? | constructorDefn functionBody | fullPropertyDefn | propertyDefn functionBody | fieldDefn | delegateDefn | gClass | gInterfaceOrStructure | gEnum) ';'?
    ;

enhancementMembers
    : (modifiers (functionDefn functionBody | fullPropertyDefn | propertyDefn functionBody) ';'?)*
;

delegateDefn
    : DELEGATE id delegateStatement
    ;

delegateStatement
    : (':' typeLiteral)? REPRESENTS typeLiteral (',' typeLiteral)* ('=' expression)?
    ;

optionalType
    : (':' typeLiteral | blockTypeLiteral)?
    ;

fieldDefn
    : VAR id optionalType (AS READONLY? id)? ('=' expression)?
    ;

propertyDefn
    : PROPERTY (GET | SET) id parameters (':' typeLiteral)?
;

dotPathWord
    : idAll ('.' idAll)*
    ;

namespaceStatement
    : dotPathWord ';'*
    ;

usesStatementList
    : (USES usesStatement)+
    ;

usesStatement
    : dotPathWord ('.' '*')? ';'*
    ;

typeVariableDefs
    : ('<' typeVariableDefinition (',' typeVariableDefinition)* '>')?
    ;

typeVariableDefinition
    : id (EXTENDS typeLiteralList)?
    ;

functionBody
    : statementBlock
    ;

parameters
    : '(' parameterDeclarationList? ')'
    ;

functionDefn
    : FUNCTION id typeVariableDefs parameters (':' typeLiteral)?
    ;

constructorDefn
    : CONSTRUCT parameters (':' typeLiteral)?
;

// New: Defines a property declaration (field-like with optional get/set blocks)
fullPropertyDefn
    : PROPERTY id typeVariableDefs? (
          propertyTypeSuffix propertyBody? // e.g., 'property Foo : String { get {} }' or 'property Foo : String'
        | propertyBody                    // e.g., 'property Foo { get {} }'
    )
    ;

propertyTypeSuffix
    : ':' typeLiteral // e.g., ': String'
    ;

// New: Defines the block for a property with explicit get/set accessors
propertyBody
    : '{' propertyAccessor* '}'
    ;

// New: Defines a single get or set accessor within a property block
propertyAccessor
    : modifiers (GET | SET) parameters (':' typeLiteral)? functionBody
    ;

modifiers
    : (annotation | PRIVATE | INTERNAL | PROTECTED | PUBLIC | STATIC | ABSTRACT | OVERRIDE | FINAL | TRANSIENT)*
    ;

statement
    : (ifStatement | tryCatchFinallyStatement | throwStatement | CONTINUE | BREAK | returnStatement | forEachStatement | whileStatement | doWhileStatement | switchStatement | usingStatement | assertStatement | FINAL localVarStatement | localVarStatement | evalExpr | assignmentOrMethodCall | statementBlock) ';'?
    | ';'
    ;

ifStatement
    : IF '(' expression ')' statement ';'? (ELSE statement)?
    ;

tryCatchFinallyStatement
    : TRY statementBlock (catchClause+ finallyClause? | finallyClause)
    ;

finallyClause
    : FINALLY statementBlock
    ;

catchClause
    : CATCH '(' VAR? id (':' typeLiteral)? ')' statementBlock
    ;

assertStatement
    : ASSERT expression (':' expression)?
    ;

usingStatement
    : USING '(' (localVarStatement (',' localVarStatement)* | expression) ')' statementBlock (FINALLY statementBlock)?
    ;

returnStatement
    : RETURN expression?
    ;

whileStatement
    : WHILE '(' expression ')' statement
    ;

doWhileStatement
    : DO statement WHILE '(' expression ')'
    ;

switchStatement
    : SWITCH '(' expression ')' '{' switchBlockStatementGroup* '}'
    ;

switchBlockStatementGroup
    : (CASE expression ':' | DEFAULT ':') statement*
    ;

throwStatement
    : THROW expression
    ;

localVarStatement
    : VAR id optionalType ('=' expression)?
    ;

forEachStatement
    : (FOREACH | FOR) '(' (expression indexVar? | VAR? id IN expression indexRest?) ')' statement
    ;

indexRest
    : indexVar iteratorVar | iteratorVar indexVar | indexVar | iteratorVar
    ;

indexVar
    : INDEX id
    ;

iteratorVar
    : ITERATOR id
    ;

thisSuperExpr
    : THIS | SUPER
    ;

assignmentOrMethodCall
    : ((newExpr | thisSuperExpr | typeLiteralExpr | parenthExpr | STRING_LITERAL) indirectMemberAccess) (incrementOp | assignmentOp expression)?
    ;

statementBlock
    : statementBlockBody
    ;

statementBlockBody
    : '{' statement* '}'
    ;

blockTypeLiteral
    : blockLiteral
    ;

blockLiteral
    : '(' (blockLiteralArg (',' blockLiteralArg)*)? ')' (':' typeLiteral)?
    ;

blockLiteralArg
    : id ('=' expression | blockTypeLiteral) | (id ':')? typeLiteral ('=' expression)?
    ;

typeLiteral
    : type ('&' type)*
    ;

typeLiteralType
    : typeLiteral
    ;

typeLiteralExpr
    : typeLiteral
    ;

typeLiteralList
    : typeLiteral
    ;

type
    : classOrInterfaceType ('[' ']')* | BLOCK blockLiteral
    ;

classOrInterfaceType
    : idclassOrInterfaceType typeArguments ('.' id typeArguments)*
    ;

typeArguments
    : ('<' typeArgument (',' typeArgument)* '>')?
    ;

typeArgument
    : typeLiteralType | '?' ((EXTENDS | SUPER) typeLiteralType)?
    ;

expression
    : conditionalExpr
    ;

conditionalExpr
    : conditionalOrExpr ('?' conditionalExpr ':' conditionalExpr | '?:' conditionalExpr)?
    ;

conditionalOrExpr
    : conditionalAndExpr (orOp conditionalAndExpr)*
    ;

conditionalAndExpr
    : bitwiseOrExpr (andOp bitwiseOrExpr)*
    ;

bitwiseOrExpr
    : bitwiseXorExpr ('|' bitwiseXorExpr)*
    ;

bitwiseXorExpr
    : bitwiseAndExpr ('^' bitwiseAndExpr)*
    ;

bitwiseAndExpr
    : equalityExpr ('&' equalityExpr)*
    ;

equalityExpr
    : relationalExpr (equalityOp relationalExpr)*
    ;

relationalExpr
    : intervalExpr (relOp intervalExpr | TYPEIS typeLiteralType)*
    ;

intervalExpr
    : bitshiftExpr (intervalOp bitshiftExpr)?
    ;

bitshiftExpr
    : additiveExpr (bitshiftOp additiveExpr)*
    ;

additiveExpr
    : multiplicativeExpr (additiveOp multiplicativeExpr)*
    ;

multiplicativeExpr
    : typeAsExpr (multiplicativeOp typeAsExpr)*
    ;

typeAsExpr
    : unaryExpr (typeAsOp typeLiteral)*
    ;

unaryExpr
    : ('+' | '-' | '!-') unaryExprNotPlusMinus | unaryExprNotPlusMinus
    ;

unaryExprNotPlusMinus
    : unaryOp unaryExpr | '\\' blockExpr | evalExpr | primaryExpr
    ;

blockExpr
    : parameterDeclarationList? '->' (expression | statementBlock)
    ;

parameterDeclarationList
    : parameterDeclaration (',' parameterDeclaration)*
    ;

parameterDeclaration
    : annotation* FINAL? id (':' typeLiteral ('=' expression)? | blockTypeLiteral | '=' expression)?
    ;

annotationArguments
    : arguments
    ;

arguments
    : '(' (argExpression (',' argExpression)*)? ')'
    ;

optionalArguments
    : arguments?
    ;

argExpression
    : namedArgumentExpression | expression
    ;

namedArgumentExpression
    : ':' id '=' expression
    ;

evalExpr
    : EVAL '(' expression ')'
    ;

featureLiteral
    : '#' (id | CONSTRUCT) typeArguments optionalArguments
    ;

standAloneDataStructureInitialization
    : '{' initializerExpression? '}'
    ;

primaryExpr
    : (newExpr | thisSuperExpr | literal | typeLiteralExpr | parenthExpr | standAloneDataStructureInitialization) indirectMemberAccess
    ;

parenthExpr
    : '(' expression ')'
    ;

newExpr
    : NEW classOrInterfaceType? ((arguments ('{' (initializer | anonymousInnerClass) '}')?) | ('[' (']' ('[' ']')* arrayInitializer | expression ']' ('[' expression ']')* ('[' ']')*)))
    ;

anonymousInnerClass
    : classMembers
    ;

arrayInitializer
    : '{' (expression (',' expression)*)? '}'
    ;

initializer
    : (initializerExpression | objectInitializer)?
    ;

initializerExpression
    : mapInitializerList | arrayValueList
    ;

arrayValueList
    : expression (',' expression)*
    ;

mapInitializerList
    : expression '->' expression (',' expression '->' expression)*
    ;

objectInitializer
    : initializerAssignment (',' initializerAssignment)*
    ;

initializerAssignment
    : ':' id '=' expression
    ;

indirectMemberAccess
    : (('.' | '?.' | '*.') idAll typeArguments | featureLiteral | ('[' | '?[') expression ']' | arguments)*
    ;

literal
    : numberLiteral | featureLiteral | STRING_LITERAL | CHAR_LITERAL | TRUE | FALSE | NULL
    ;

numberLiteral
    : NAN | INFINITY | HEX_LITERAL | BIN_LITERAL | DECIMAL_LITERAL
    ;

orOp
    : '||' | OR
    ;

andOp
    : '&&' | AND
    ;

assignmentOp
    : '=' | '+=' | '-=' | '*=' | '/=' | '&=' | '&&=' | '|=' | '||=' | '^=' | '%=' | '<<=' | '>>>=' | '>>='
    ;

incrementOp
    : '++' | '--'
    ;

equalityOp
    : '===' | '!==' | '==' | '!='
    ;

intervalOp
    : '..' | '|..' | '..|' | '|..|'
    ;

relOp
    : '<=' | '>=' | '<' | '>'
    ;

bitshiftOp
    : '<<' | '>>>' | '>>'
    ;

additiveOp
    : '+' | '-' | '?+' | '?-' | '!+' | '!-'
    ;

multiplicativeOp
    : '*' | '/' | '%' | '?*' | '!*' | '?/' | '?%'
    ;

typeAsOp
    : TYPEAS | AS
    ;

unaryOp
    : '~' | '!' | NOT | TYPEOF | STATICTYPEOF
    ;

id
    : IDENT | TRUE | FALSE | NAN | INFINITY | NULL | LENGTH | EXISTS | STARTSWITH | CONTAINS | WHERE | FIND | AS | EXCEPT | INDEX | ITERATOR | GET | SET | ASSERT | PRIVATE | INTERNAL | PROTECTED | PUBLIC | ABSTRACT | HIDE | FINAL | STATIC | READONLY | OUTER | EXECUTION | REQUEST | SESSION | APPLICATION | VOID | BLOCK | ENHANCEMENT | CLASSPATH | TYPELOADER
    ;

idclassOrInterfaceType
    : IDENT | TRUE | FALSE | NAN | INFINITY | NULL | LENGTH | EXISTS | STARTSWITH | CONTAINS | WHERE | FIND | AS | EXCEPT | INDEX | ITERATOR | GET | SET | ASSERT | PRIVATE | INTERNAL | PROTECTED | PUBLIC | ABSTRACT | HIDE | FINAL | STATIC | READONLY | OUTER | EXECUTION | REQUEST | SESSION | APPLICATION | VOID | ENHANCEMENT | CLASSPATH | TYPELOADER
    ;

idAll
    : id | AND | OR | NOT | IN | VAR | DELEGATE | REPRESENTS | TYPEOF | STATICTYPEOF | TYPEIS | TYPEAS | PACKAGE | USES | IF | ELSE | UNLESS | FOREACH | FOR | WHILE | DO | CONTINUE | BREAK | RETURN | CONSTRUCT | FUNCTION | PROPERTY | TRY | CATCH | FINALLY | THROW | NEW | SWITCH | CASE | DEFAULT | EVAL | OVERRIDE | EXTENDS | TRANSIENT | IMPLEMENTS | CLASS | INTERFACE | STRUCTURE | ENUM | USING
;

// Lexer rules

AND : 'and';
OR : 'or';
NOT : 'not';
IN : 'in';
VAR : 'var';
DELEGATE : 'delegate';
REPRESENTS : 'represents';
TYPEOF : 'typeof';
STATICTYPEOF : 'statictypeof';
TYPEIS : 'typeis';
TYPEAS : 'typeas';
PACKAGE : 'package';
USES : 'uses';
IF : 'if';
ELSE : 'else';
UNLESS : 'unless';
FOREACH : 'foreach';
FOR : 'for';
WHILE : 'while';
DO : 'do';
CONTINUE : 'continue';
BREAK : 'break';
RETURN : 'return';
CONSTRUCT : 'construct';
FUNCTION : 'function';
PROPERTY : 'property';
TRY : 'try';
CATCH : 'catch';
FINALLY : 'finally';
THROW : 'throw';
NEW : 'new';
SWITCH : 'switch';
CASE : 'case';
DEFAULT : 'default';
EVAL : 'eval';
OVERRIDE : 'override';
EXTENDS : 'extends';
TRANSIENT : 'transient';
IMPLEMENTS : 'implements';
CLASS : 'class';
INTERFACE : 'interface';
STRUCTURE : 'structure';
ENUM : 'enum';
USING : 'using';

TRUE : 'true';
FALSE : 'false';
NAN : 'NaN';
INFINITY : 'Infinity';
NULL : 'null';
LENGTH : 'length';
EXISTS : 'exists';
STARTSWITH : 'startswith';
CONTAINS : 'contains';
WHERE : 'where';
FIND : 'find';
AS : 'as';
EXCEPT : 'except';
INDEX : 'index';
ITERATOR : 'iterator';
GET : 'get';
SET : 'set';
ASSERT : 'assert';
PRIVATE : 'private';
INTERNAL : 'internal';
PROTECTED : 'protected';
PUBLIC : 'public';
ABSTRACT : 'abstract';
HIDE : 'hide';
FINAL : 'final';
STATIC : 'static';
READONLY : 'readonly';
OUTER : 'outer';
EXECUTION : 'execution';
REQUEST : 'request';
SESSION : 'session';
APPLICATION : 'application';
VOID : 'void';
BLOCK : 'block';
ENHANCEMENT : 'enhancement';
CLASSPATH : 'classpath';
TYPELOADER : 'typeloader';

THIS : 'this';
SUPER : 'super';

fragment LETTER : [A-Za-z_$];
fragment DIGIT : [0-9];
fragment ZERO_TO_SEVEN : [0-7];
fragment HEX_DIGIT : [0-9a-fA-F];
fragment EXPONENT : [eE] [+-]? DIGIT+;
fragment FLOAT_TYPE_SUFFIX : [fFdD] | 'bd' | 'BD';
fragment INTEGER_TYPE_SUFFIX : [lLsS] | 'bi' | 'BI' | [bB];
fragment ESCAPE_SEQUENCE : '\\' [vabtnfr"'\\$<] | UNICODE_ESCAPE | OCTAL_ESCAPE;
fragment OCTAL_ESCAPE : '\\' ([0-3] ZERO_TO_SEVEN ZERO_TO_SEVEN | ZERO_TO_SEVEN ZERO_TO_SEVEN | ZERO_TO_SEVEN);
fragment UNICODE_ESCAPE : '\\u' HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT;

IDENT : LETTER (LETTER | DIGIT)*;

CHAR_LITERAL : '\'' (ESCAPE_SEQUENCE | ~[\\'\r\n]) '\'';

// Must come after CHAR_LITERAL to resolve single-character single-quoted strings as CHAR_LITERAL
STRING_LITERAL
    : '"' (ESCAPE_SEQUENCE | ~[\\"\r\n])* '"'
    | '\'' (ESCAPE_SEQUENCE | ~[\\'\r\n])* '\''
    ;

// Number literals (without NaN/Infinity, handled separately)
HEX_LITERAL : ('0x' | '0X') HEX_DIGIT+ [sSlL]?;

BIN_LITERAL : ('0b' | '0B') [01]+ INTEGER_TYPE_SUFFIX?;

DECIMAL_LITERAL
    : '.' DIGIT+ FLOAT_TYPE_SUFFIX?
    | DIGIT+ ('.' DIGIT* EXPONENT? FLOAT_TYPE_SUFFIX? | EXPONENT FLOAT_TYPE_SUFFIX? | FLOAT_TYPE_SUFFIX | INTEGER_TYPE_SUFFIX)?
    ;

WS : [ \t\r\n]+ -> skip;
COMMENT : '/*' .*? '*/' -> skip;
LINE_COMMENT : '//' ~[\r\n]* -> skip;