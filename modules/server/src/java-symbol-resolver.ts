import {
  JavaSymbolInfo,
  JavaMethodInfo,
  JavaFieldInfo,
  JavaParameter,
  ParameterizedTypeInfo,
  JavaResolverConfig
} from '@gosu-lsp/shared';
import Debug from 'debug';

const debugLog = Debug('gosu:lsp:java-resolver');

/**
 * Java Symbol Resolver for cross-language navigation
 * Provides resolution of Java types, methods, and fields for Gosu interop
 */
export class GosuJavaSymbolResolver {
  private config: JavaResolverConfig;
  private cache = new Map<string, JavaSymbolInfo | null>();
  private packageCache = new Map<string, string[]>();
  private javaStandardLibrary: Map<string, JavaSymbolInfo>;

  constructor(config: JavaResolverConfig) {
    this.config = config;
    this.javaStandardLibrary = this.initializeJavaStandardLibrary();
    debugLog('Initialized GosuJavaSymbolResolver with config: %O', config);
  }

  /**
   * Resolve a Java type by its fully qualified name
   */
  async resolveJavaType(typeName: string): Promise<JavaSymbolInfo | null> {
    debugLog(`Resolving Java type: ${typeName}`);

    // Check cache first
    if (this.cache.has(typeName)) {
      const cached = this.cache.get(typeName);
      debugLog(`Found cached result for ${typeName}: ${cached ? 'resolved' : 'null'}`);
      return cached ?? null;
    }

    try {
      let result: JavaSymbolInfo | null = null;

      // First try standard library
      result = this.javaStandardLibrary.get(typeName) || null;
      
      if (!result) {
        // Try to resolve from classpath or source paths
        result = await this.resolveCustomJavaType(typeName);
      }

      // Cache the result
      this.cache.set(typeName, result);
      
      if (result) {
        debugLog(`Successfully resolved ${typeName}: ${result.className}`);
      } else {
        debugLog(`Could not resolve Java type: ${typeName}`);
      }

      return result;

    } catch (error) {
      debugLog(`Error resolving Java type ${typeName}:`, error);
      this.cache.set(typeName, null);
      return null;
    }
  }

  /**
   * Get all available Java packages
   */
  async getAvailablePackages(): Promise<string[]> {
    debugLog('Getting available Java packages');

    try {
      const packages = new Set<string>();

      // Add standard library packages
      for (const typeName of this.javaStandardLibrary.keys()) {
        const packageName = this.extractPackageName(typeName);
        if (packageName) {
          packages.add(packageName);
        }
      }

      // TODO: Add packages from classpath analysis
      // This would require JAR file parsing or external tools

      const result = Array.from(packages).sort();
      debugLog(`Found ${result.length} available packages`);
      return result;

    } catch (error) {
      debugLog('Error getting available packages:', error);
      return [];
    }
  }

  /**
   * Get classes available in a specific package
   */
  async getClassesInPackage(packageName: string): Promise<string[]> {
    debugLog(`Getting classes in package: ${packageName}`);

    // Check cache first
    if (this.packageCache.has(packageName)) {
      const cached = this.packageCache.get(packageName)!;
      debugLog(`Found cached classes for ${packageName}: ${cached.length} classes`);
      return cached;
    }

    try {
      const classes = new Set<string>();

      // Search standard library
      for (const [typeName, typeInfo] of this.javaStandardLibrary.entries()) {
        if (typeInfo.packageName === packageName) {
          classes.add(typeInfo.className);
        }
      }

      // TODO: Add classes from classpath analysis
      // This would require JAR file parsing or source file scanning

      const result = Array.from(classes).sort();
      this.packageCache.set(packageName, result);
      
      debugLog(`Found ${result.length} classes in package ${packageName}`);
      return result;

    } catch (error) {
      debugLog(`Error getting classes in package ${packageName}:`, error);
      return [];
    }
  }

  /**
   * Resolve a type from imports (handles wildcards and specific imports)
   */
  async resolveImportedType(shortName: string, imports: string[]): Promise<JavaSymbolInfo | null> {
    debugLog(`Resolving imported type: ${shortName} with imports: ${imports.join(', ')}`);

    try {
      // First try specific imports (non-wildcard)
      for (const importPath of imports) {
        if (!importPath.endsWith('.*')) {
          const typeName = this.extractTypeName(importPath);
          if (typeName === shortName) {
            const result = await this.resolveJavaType(importPath);
            if (result) {
              debugLog(`Resolved ${shortName} from specific import: ${importPath}`);
              return result;
            }
          }
        }
      }

      // Then try wildcard imports
      for (const importPath of imports) {
        if (importPath.endsWith('.*')) {
          const packageName = importPath.replace('.*', '');
          const fullyQualifiedName = `${packageName}.${shortName}`;
          const result = await this.resolveJavaType(fullyQualifiedName);
          if (result) {
            debugLog(`Resolved ${shortName} from wildcard import: ${importPath}`);
            return result;
          }
        }
      }

      // Finally try java.lang.* (implicit import)
      const javaLangType = `java.lang.${shortName}`;
      const result = await this.resolveJavaType(javaLangType);
      if (result) {
        debugLog(`Resolved ${shortName} from implicit java.lang import`);
        return result;
      }

      debugLog(`Could not resolve imported type: ${shortName}`);
      return null;

    } catch (error) {
      debugLog(`Error resolving imported type ${shortName}:`, error);
      return null;
    }
  }

  /**
   * Parse parameterized type (e.g., "List<String>" or "Map<String, Integer>")
   */
  async parseParameterizedType(typeString: string): Promise<ParameterizedTypeInfo | null> {
    debugLog(`Parsing parameterized type: ${typeString}`);

    try {
      const match = typeString.match(/^([^<]+)<(.+)>$/);
      if (!match) {
        debugLog(`Not a parameterized type: ${typeString}`);
        return null;
      }

      const baseType = match[1].trim();
      const paramString = match[2].trim();

      // Parse type parameters (handle nested generics)
      const typeParameters = this.parseTypeParameters(paramString);

      const result: ParameterizedTypeInfo = {
        baseType,
        typeParameters
      };

      debugLog(`Parsed parameterized type: ${baseType}<${typeParameters.join(', ')}>`);
      return result;

    } catch (error) {
      debugLog(`Error parsing parameterized type ${typeString}:`, error);
      return null;
    }
  }

  /**
   * Update resolver configuration
   */
  updateConfiguration(config: JavaResolverConfig): void {
    debugLog('Updating Java resolver configuration: %O', config);
    this.config = config;
    
    // Clear caches when configuration changes
    this.cache.clear();
    this.packageCache.clear();
    
    debugLog('Cleared caches due to configuration update');
  }

  /**
   * Initialize Java standard library type definitions
   */
  private initializeJavaStandardLibrary(): Map<string, JavaSymbolInfo> {
    const stdlib = new Map<string, JavaSymbolInfo>();

    // java.lang package
    stdlib.set('java.lang.Object', {
      fullyQualifiedName: 'java.lang.Object',
      className: 'Object',
      packageName: 'java.lang',
      isJavaStandardLibrary: true,
      methods: [
        {
          name: 'toString',
          returnType: 'java.lang.String',
          parameters: [],
          visibility: 'public'
        },
        {
          name: 'equals',
          returnType: 'boolean',
          parameters: [{ name: 'obj', type: 'java.lang.Object' }],
          visibility: 'public'
        },
        {
          name: 'hashCode',
          returnType: 'int',
          parameters: [],
          visibility: 'public'
        }
      ]
    });

    stdlib.set('java.lang.String', {
      fullyQualifiedName: 'java.lang.String',
      className: 'String',
      packageName: 'java.lang',
      isJavaStandardLibrary: true,
      isFinal: true,
      methods: [
        {
          name: 'length',
          returnType: 'int',
          parameters: [],
          visibility: 'public'
        },
        {
          name: 'substring',
          returnType: 'java.lang.String',
          parameters: [{ name: 'beginIndex', type: 'int' }],
          visibility: 'public'
        },
        {
          name: 'charAt',
          returnType: 'char',
          parameters: [{ name: 'index', type: 'int' }],
          visibility: 'public'
        },
        {
          name: 'toUpperCase',
          returnType: 'java.lang.String',
          parameters: [],
          visibility: 'public'
        },
        {
          name: 'toLowerCase',
          returnType: 'java.lang.String',
          parameters: [],
          visibility: 'public'
        }
      ]
    });

    stdlib.set('java.lang.Integer', {
      fullyQualifiedName: 'java.lang.Integer',
      className: 'Integer',
      packageName: 'java.lang',
      isJavaStandardLibrary: true,
      superclass: 'java.lang.Number'
    });

    // java.util package
    stdlib.set('java.util.List', {
      fullyQualifiedName: 'java.util.List',
      className: 'List',
      packageName: 'java.util',
      isInterface: true,
      isGeneric: true,
      genericParameters: ['E'],
      isJavaStandardLibrary: true,
      methods: [
        {
          name: 'add',
          returnType: 'boolean',
          parameters: [{ name: 'e', type: 'E' }],
          visibility: 'public'
        },
        {
          name: 'get',
          returnType: 'E',
          parameters: [{ name: 'index', type: 'int' }],
          visibility: 'public'
        },
        {
          name: 'size',
          returnType: 'int',
          parameters: [],
          visibility: 'public'
        },
        {
          name: 'isEmpty',
          returnType: 'boolean',
          parameters: [],
          visibility: 'public'
        }
      ]
    });

    stdlib.set('java.util.ArrayList', {
      fullyQualifiedName: 'java.util.ArrayList',
      className: 'ArrayList',
      packageName: 'java.util',
      isGeneric: true,
      genericParameters: ['E'],
      isJavaStandardLibrary: true,
      interfaces: ['java.util.List']
    });

    stdlib.set('java.util.Map', {
      fullyQualifiedName: 'java.util.Map',
      className: 'Map',
      packageName: 'java.util',
      isInterface: true,
      isGeneric: true,
      genericParameters: ['K', 'V'],
      isJavaStandardLibrary: true,
      methods: [
        {
          name: 'put',
          returnType: 'V',
          parameters: [
            { name: 'key', type: 'K' },
            { name: 'value', type: 'V' }
          ],
          visibility: 'public'
        },
        {
          name: 'get',
          returnType: 'V',
          parameters: [{ name: 'key', type: 'java.lang.Object' }],
          visibility: 'public'
        },
        {
          name: 'containsKey',
          returnType: 'boolean',
          parameters: [{ name: 'key', type: 'java.lang.Object' }],
          visibility: 'public'
        }
      ]
    });

    stdlib.set('java.util.HashMap', {
      fullyQualifiedName: 'java.util.HashMap',
      className: 'HashMap',
      packageName: 'java.util',
      isGeneric: true,
      genericParameters: ['K', 'V'],
      isJavaStandardLibrary: true,
      interfaces: ['java.util.Map']
    });

    // java.io package
    stdlib.set('java.io.File', {
      fullyQualifiedName: 'java.io.File',
      className: 'File',
      packageName: 'java.io',
      isJavaStandardLibrary: true
    });

    debugLog(`Initialized ${stdlib.size} Java standard library types`);
    return stdlib;
  }

  /**
   * Resolve custom Java type from classpath or source paths
   */
  private async resolveCustomJavaType(typeName: string): Promise<JavaSymbolInfo | null> {
    debugLog(`Attempting to resolve custom Java type: ${typeName}`);

    // TODO: Implement actual classpath and source path analysis
    // This would involve:
    // 1. Parsing JAR files in classpath
    // 2. Scanning Java source files in source paths
    // 3. Using reflection or bytecode analysis
    // 4. External tools like javap or ASM library

    // For now, return null for custom types
    return null;
  }

  /**
   * Extract package name from fully qualified type name
   */
  private extractPackageName(fullyQualifiedName: string): string | null {
    const lastDotIndex = fullyQualifiedName.lastIndexOf('.');
    return lastDotIndex > 0 ? fullyQualifiedName.substring(0, lastDotIndex) : null;
  }

  /**
   * Extract simple type name from fully qualified name or import path
   */
  private extractTypeName(fullyQualifiedName: string): string {
    const lastDotIndex = fullyQualifiedName.lastIndexOf('.');
    return lastDotIndex >= 0 ? fullyQualifiedName.substring(lastDotIndex + 1) : fullyQualifiedName;
  }

  /**
   * Parse type parameters from a parameter string (handles nested generics)
   */
  private parseTypeParameters(paramString: string): string[] {
    const parameters: string[] = [];
    let current = '';
    let depth = 0;

    for (let i = 0; i < paramString.length; i++) {
      const char = paramString[i];

      if (char === '<') {
        depth++;
        current += char;
      } else if (char === '>') {
        depth--;
        current += char;
      } else if (char === ',' && depth === 0) {
        parameters.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }

    if (current.trim()) {
      parameters.push(current.trim());
    }

    return parameters;
  }
}