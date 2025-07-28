/**
 * Gosu language keywords and their categories
 */

export interface GosuKeywordInfo {
  /** The keyword text */
  keyword: string
  /** Description of the keyword */
  description: string
  /** Category for organization */
  category: GosuKeywordCategory
  /** Template text for snippet completion */
  snippet?: string
}

export type GosuKeywordCategory =
  | 'declaration'
  | 'visibility'
  | 'control'
  | 'literal'
  | 'type'
  | 'modifier'

/**
 * Core Gosu keywords organized by category
 */
export const GOSU_KEYWORDS: Record<GosuKeywordCategory, GosuKeywordInfo[]> = {
  declaration: [
    {
      keyword: 'package',
      description: 'package declaration',
      category: 'declaration',
      snippet: 'package ${1:com.example}'
    },
    {
      keyword: 'class',
      description: 'class declaration',
      category: 'declaration',
      snippet: 'class ${1:ClassName} {\n\t$0\n}'
    },
    {
      keyword: 'interface',
      description: 'interface declaration',
      category: 'declaration',
      snippet: 'interface ${1:InterfaceName} {\n\t$0\n}'
    },
    {
      keyword: 'enhancement',
      description: 'enhancement declaration',
      category: 'declaration',
      snippet: 'enhancement ${1:EnhancementName} : ${2:TargetType} {\n\t$0\n}'
    },
    {
      keyword: 'structure',
      description: 'structure declaration',
      category: 'declaration',
      snippet: 'structure ${1:StructureName} {\n\t$0\n}'
    },
    {
      keyword: 'enum',
      description: 'enum declaration',
      category: 'declaration',
      snippet: 'enum ${1:EnumName} {\n\t$0\n}'
    },
    {
      keyword: 'function',
      description: 'function declaration',
      category: 'declaration',
      snippet: 'function ${1:functionName}(${2:params}) : ${3:ReturnType} {\n\t$0\n}'
    },
    {
      keyword: 'property',
      description: 'property declaration',
      category: 'declaration',
      snippet: 'property ${1:PropertyName} : ${2:Type}'
    },
    {
      keyword: 'construct',
      description: 'constructor declaration',
      category: 'declaration',
      snippet: 'construct(${1:params}) {\n\t$0\n}'
    },
    {
      keyword: 'var',
      description: 'variable declaration',
      category: 'declaration',
      snippet: 'var ${1:variableName} : ${2:Type} = ${3:value}'
    }
  ],
  visibility: [
    {
      keyword: 'public',
      description: 'Public visibility modifier',
      category: 'visibility'
    },
    {
      keyword: 'private',
      description: 'Private visibility modifier',
      category: 'visibility'
    },
    {
      keyword: 'protected',
      description: 'Protected visibility modifier',
      category: 'visibility'
    },
    {
      keyword: 'internal',
      description: 'Internal visibility modifier',
      category: 'visibility'
    }
  ],
  control: [
    {
      keyword: 'if',
      description: 'Conditional statement',
      category: 'control',
      snippet: 'if (${1:condition}) {\n\t$0\n}'
    },
    {
      keyword: 'else',
      description: 'Else clause',
      category: 'control',
      snippet: 'else {\n\t$0\n}'
    },
    {
      keyword: 'for',
      description: 'For loop',
      category: 'control',
      snippet: 'for (${1:item} in ${2:collection}) {\n\t$0\n}'
    },
    {
      keyword: 'foreach',
      description: 'Foreach loop',
      category: 'control',
      snippet: 'foreach (${1:item} in ${2:collection}) {\n\t$0\n}'
    },
    {
      keyword: 'while',
      description: 'While loop',
      category: 'control',
      snippet: 'while (${1:condition}) {\n\t$0\n}'
    },
    {
      keyword: 'do',
      description: 'Do-while loop',
      category: 'control',
      snippet: 'do {\n\t$0\n} while (${1:condition})'
    },
    {
      keyword: 'switch',
      description: 'Switch statement',
      category: 'control',
      snippet: 'switch (${1:expression}) {\n\tcase ${2:value}:\n\t\t$0\n\t\tbreak\n}'
    },
    {
      keyword: 'case',
      description: 'Switch case',
      category: 'control',
      snippet: 'case ${1:value}:\n\t$0\n\tbreak'
    },
    {
      keyword: 'default',
      description: 'Default case',
      category: 'control',
      snippet: 'default:\n\t$0'
    },
    {
      keyword: 'break',
      description: 'Break statement',
      category: 'control'
    },
    {
      keyword: 'continue',
      description: 'Continue statement',
      category: 'control'
    },
    {
      keyword: 'return',
      description: 'Return statement',
      category: 'control',
      snippet: 'return ${1:value}'
    },
    {
      keyword: 'try',
      description: 'Try-catch block',
      category: 'control',
      snippet: 'try {\n\t$0\n} catch (${1:e}) {\n\t\n}'
    },
    {
      keyword: 'catch',
      description: 'Catch block',
      category: 'control',
      snippet: 'catch (${1:e}) {\n\t$0\n}'
    },
    {
      keyword: 'finally',
      description: 'Finally block',
      category: 'control',
      snippet: 'finally {\n\t$0\n}'
    },
    {
      keyword: 'throw',
      description: 'Throw statement',
      category: 'control',
      snippet: 'throw ${1:exception}'
    }
  ],
  literal: [
    {
      keyword: 'true',
      description: 'Boolean true literal',
      category: 'literal'
    },
    {
      keyword: 'false',
      description: 'Boolean false literal',
      category: 'literal'
    },
    {
      keyword: 'null',
      description: 'Null literal',
      category: 'literal'
    },
    {
      keyword: 'this',
      description: 'Current instance reference',
      category: 'literal'
    },
    {
      keyword: 'super',
      description: 'Parent class reference',
      category: 'literal'
    }
  ],
  type: [
    {
      keyword: 'String',
      description: 'String type',
      category: 'type'
    },
    {
      keyword: 'int',
      description: 'Integer type',
      category: 'type'
    },
    {
      keyword: 'boolean',
      description: 'Boolean type',
      category: 'type'
    },
    {
      keyword: 'double',
      description: 'Double precision floating point type',
      category: 'type'
    },
    {
      keyword: 'Object',
      description: 'Object type',
      category: 'type'
    },
    {
      keyword: 'void',
      description: 'Void return type',
      category: 'type'
    }
  ],
  modifier: [
    {
      keyword: 'static',
      description: 'Static modifier',
      category: 'modifier'
    },
    {
      keyword: 'final',
      description: 'Final modifier',
      category: 'modifier'
    },
    {
      keyword: 'abstract',
      description: 'Abstract modifier',
      category: 'modifier'
    },
    {
      keyword: 'readonly',
      description: 'Readonly modifier',
      category: 'modifier'
    },
    {
      keyword: 'override',
      description: 'Override modifier',
      category: 'modifier'
    }
  ]
}

/**
 * Get all Gosu keywords as a flat array
 */
export function getAllGosuKeywords(): GosuKeywordInfo[] {
  return Object.values(GOSU_KEYWORDS).flat()
}

/**
 * Get keywords by category
 */
export function getKeywordsByCategory(category: GosuKeywordCategory): GosuKeywordInfo[] {
  return GOSU_KEYWORDS[category] || []
}

/**
 * Find keywords that start with the given prefix (case-insensitive)
 */
export function findKeywordsByPrefix(prefix: string): GosuKeywordInfo[] {
  const lowerPrefix = prefix.toLowerCase()
  return getAllGosuKeywords().filter(keyword => 
    keyword.keyword.toLowerCase().startsWith(lowerPrefix)
  )
}