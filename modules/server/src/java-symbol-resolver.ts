import type { Dirent } from "node:fs"
import { promises as fs } from "node:fs"
import path from "node:path"
import type { JavaResolverConfig, JavaSymbolInfo, ParameterizedTypeInfo } from "@gosu-lsp/shared"
import Debug from "debug"

const debug = Debug("gosu:lsp:java-resolver")

/**
 * Java Symbol Resolver for cross-language navigation
 * Provides resolution of Java types, methods, and fields for Gosu interop
 */
export class GosuJavaSymbolResolver {
  private cache = new Map<string, JavaSymbolInfo | null>()
  private packageCache = new Map<string, string[]>()
  private javaStandardLibrary: Map<string, JavaSymbolInfo>
  private config: JavaResolverConfig

  constructor(config: JavaResolverConfig) {
    this.javaStandardLibrary = this.initializeJavaStandardLibrary()
    this.config = this.normalizeConfig(config)
    debug("Initialized GosuJavaSymbolResolver with config: %O", config)
  }

  async getStandardLibraryTypes(): Promise<string[]> {
    debug("Getting standard library types")

    return Array.from(this.javaStandardLibrary.values()).map(({ fullyQualifiedName }) => fullyQualifiedName)
  }

  /**
   * Resolve a Java type by its fully qualified name
   */
  async resolveJavaType(typeName: string): Promise<JavaSymbolInfo | null> {
    const normalizedTypeName = this.normalizeTypeName(typeName)
    debug(`Resolving Java type: ${typeName} (normalized: ${normalizedTypeName})`)

    // Check cache first
    if (this.cache.has(normalizedTypeName)) {
      const cached = this.cache.get(normalizedTypeName)
      debug(`Found cached result for ${normalizedTypeName}: ${cached ? "resolved" : "null"}`)
      return cached ?? null
    }

    try {
      let result: JavaSymbolInfo | null = null

      // First try standard library
      result = this.javaStandardLibrary.get(normalizedTypeName) || null

      if (!result) {
        // Try to resolve from configured source paths / classpath
        result = await this.resolveCustomJavaType(normalizedTypeName)
      }

      // Cache the result
      this.cache.set(normalizedTypeName, result)

      if (result) {
        debug(`Successfully resolved ${normalizedTypeName}: ${result.className}`)
      } else {
        debug(`Could not resolve Java type: ${normalizedTypeName}`)
      }

      return result
    } catch (error) {
      debug(`Error resolving Java type ${normalizedTypeName}:`, error)
      this.cache.set(normalizedTypeName, null)
      return null
    }
  }

  /**
   * Get all available Java packages
   */
  async getAvailablePackages(): Promise<string[]> {
    debug("Getting available Java packages")

    try {
      const packages = new Set<string>()

      // Add standard library packages
      for (const typeName of this.javaStandardLibrary.keys()) {
        const packageName = this.extractPackageName(typeName)
        if (packageName) {
          packages.add(packageName)
        }
      }

      // Collect packages from configured source paths
      const customPackages = await this.collectPackagesFromSourcePaths()
      for (const pkg of customPackages) {
        packages.add(pkg)
      }

      const result = Array.from(packages).sort()
      debug(`Found ${result.length} available packages`)
      return result
    } catch (error) {
      debug("Error getting available packages:", error)
      return []
    }
  }

  /**
   * Get classes available in a specific package
   */
  async getClassesInPackage(packageName: string): Promise<string[]> {
    debug(`Getting classes in package: ${packageName}`)

    // Check cache first
    if (this.packageCache.has(packageName)) {
      const cached = this.packageCache.get(packageName)
      if (cached) {
        debug(`Found cached classes for ${packageName}: ${cached.length} classes`)
        return cached
      }
    }

    try {
      const classes = new Set<string>()

      // Search standard library
      for (const [_typeName, typeInfo] of this.javaStandardLibrary.entries()) {
        if (typeInfo.packageName === packageName) {
          classes.add(typeInfo.className)
        }
      }

      // Collect classes from configured source paths
      const customClasses = await this.collectClassesFromSourcePaths(packageName)
      for (const className of customClasses) {
        classes.add(className)
      }

      const result = Array.from(classes).sort()
      this.packageCache.set(packageName, result)

      debug(`Found ${result.length} classes in package ${packageName}`)
      return result
    } catch (error) {
      debug(`Error getting classes in package ${packageName}:`, error)
      return []
    }
  }

  /**
   * Resolve a type from imports (handles wildcards and specific imports)
   */
  async resolveImportedType(shortName: string, imports: string[]): Promise<JavaSymbolInfo | null> {
    debug(`Resolving imported type: ${shortName} with imports: ${imports.join(", ")}`)

    try {
      // First try specific imports (non-wildcard)
      for (const importPath of imports) {
        if (!importPath.endsWith(".*")) {
          const typeName = this.extractTypeName(importPath)
          if (typeName === shortName) {
            const result = await this.resolveJavaType(importPath)
            if (result) {
              debug(`Resolved ${shortName} from specific import: ${importPath}`)
              return result
            }
          }
        }
      }

      // Then try wildcard imports
      for (const importPath of imports) {
        if (importPath.endsWith(".*")) {
          const packageName = importPath.replace(".*", "")
          const fullyQualifiedName = `${packageName}.${shortName}`
          const result = await this.resolveJavaType(fullyQualifiedName)
          if (result) {
            debug(`Resolved ${shortName} from wildcard import: ${importPath}`)
            return result
          }
        }
      }

      // Finally try java.lang.* (implicit import)
      const javaLangType = `java.lang.${shortName}`
      const result = await this.resolveJavaType(javaLangType)
      if (result) {
        debug(`Resolved ${shortName} from implicit java.lang import`)
        return result
      }

      debug(`Could not resolve imported type: ${shortName}`)
      return null
    } catch (error) {
      debug(`Error resolving imported type ${shortName}:`, error)
      return null
    }
  }

  /**
   * Parse parameterized type (e.g., "List<String>" or "Map<String, Integer>")
   */
  async parseParameterizedType(typeString: string): Promise<ParameterizedTypeInfo | null> {
    debug(`Parsing parameterized type: ${typeString}`)

    try {
      const match = typeString.match(/^([^<]+)<(.+)>$/)
      if (!match) {
        debug(`Not a parameterized type: ${typeString}`)
        return null
      }

      const baseType = match[1].trim()
      const paramString = match[2].trim()

      // Parse type parameters (handle nested generics)
      const typeParameters = this.parseTypeParameters(paramString)

      const result: ParameterizedTypeInfo = {
        baseType,
        typeParameters,
      }

      debug(`Parsed parameterized type: ${baseType}<${typeParameters.join(", ")}>`)
      return result
    } catch (error) {
      debug(`Error parsing parameterized type ${typeString}:`, error)
      return null
    }
  }

  /**
   * Update resolver configuration
   */
  updateConfiguration(config: JavaResolverConfig): void {
    debug("Updating Java resolver configuration: %O", config)
    this.config = this.normalizeConfig(config)

    // Clear caches when configuration changes
    this.cache.clear()
    this.packageCache.clear()

    debug("Cleared caches due to configuration update")
  }

  /**
   * Initialize Java standard library type definitions
   */
  private initializeJavaStandardLibrary(): Map<string, JavaSymbolInfo> {
    const stdlib = new Map<string, JavaSymbolInfo>()

    // java.lang package
    stdlib.set("java.lang.Object", {
      fullyQualifiedName: "java.lang.Object",
      className: "Object",
      packageName: "java.lang",
      isJavaStandardLibrary: true,
      methods: [
        {
          name: "toString",
          returnType: "java.lang.String",
          parameters: [],
          visibility: "public",
        },
        {
          name: "equals",
          returnType: "boolean",
          parameters: [{ name: "obj", type: "java.lang.Object" }],
          visibility: "public",
        },
        {
          name: "hashCode",
          returnType: "int",
          parameters: [],
          visibility: "public",
        },
      ],
    })

    stdlib.set("java.lang.String", {
      fullyQualifiedName: "java.lang.String",
      className: "String",
      packageName: "java.lang",
      isJavaStandardLibrary: true,
      isFinal: true,
      methods: [
        {
          name: "length",
          returnType: "int",
          parameters: [],
          visibility: "public",
        },
        {
          name: "substring",
          returnType: "java.lang.String",
          parameters: [{ name: "beginIndex", type: "int" }],
          visibility: "public",
        },
        {
          name: "charAt",
          returnType: "char",
          parameters: [{ name: "index", type: "int" }],
          visibility: "public",
        },
        {
          name: "toUpperCase",
          returnType: "java.lang.String",
          parameters: [],
          visibility: "public",
        },
        {
          name: "toLowerCase",
          returnType: "java.lang.String",
          parameters: [],
          visibility: "public",
        },
      ],
    })

    stdlib.set("java.lang.Integer", {
      fullyQualifiedName: "java.lang.Integer",
      className: "Integer",
      packageName: "java.lang",
      isJavaStandardLibrary: true,
      superclass: "java.lang.Number",
    })

    // java.util package
    stdlib.set("java.util.List", {
      fullyQualifiedName: "java.util.List",
      className: "List",
      packageName: "java.util",
      isInterface: true,
      isGeneric: true,
      genericParameters: ["E"],
      isJavaStandardLibrary: true,
      methods: [
        {
          name: "add",
          returnType: "boolean",
          parameters: [{ name: "e", type: "E" }],
          visibility: "public",
        },
        {
          name: "get",
          returnType: "E",
          parameters: [{ name: "index", type: "int" }],
          visibility: "public",
        },
        {
          name: "size",
          returnType: "int",
          parameters: [],
          visibility: "public",
        },
        {
          name: "isEmpty",
          returnType: "boolean",
          parameters: [],
          visibility: "public",
        },
      ],
    })

    stdlib.set("java.util.ArrayList", {
      fullyQualifiedName: "java.util.ArrayList",
      className: "ArrayList",
      packageName: "java.util",
      isGeneric: true,
      genericParameters: ["E"],
      isJavaStandardLibrary: true,
      interfaces: ["java.util.List"],
    })

    stdlib.set("java.util.Map", {
      fullyQualifiedName: "java.util.Map",
      className: "Map",
      packageName: "java.util",
      isInterface: true,
      isGeneric: true,
      genericParameters: ["K", "V"],
      isJavaStandardLibrary: true,
      methods: [
        {
          name: "put",
          returnType: "V",
          parameters: [
            { name: "key", type: "K" },
            { name: "value", type: "V" },
          ],
          visibility: "public",
        },
        {
          name: "get",
          returnType: "V",
          parameters: [{ name: "key", type: "java.lang.Object" }],
          visibility: "public",
        },
        {
          name: "containsKey",
          returnType: "boolean",
          parameters: [{ name: "key", type: "java.lang.Object" }],
          visibility: "public",
        },
      ],
    })

    stdlib.set("java.util.HashMap", {
      fullyQualifiedName: "java.util.HashMap",
      className: "HashMap",
      packageName: "java.util",
      isGeneric: true,
      genericParameters: ["K", "V"],
      isJavaStandardLibrary: true,
      interfaces: ["java.util.Map"],
    })

    // java.io package
    stdlib.set("java.io.File", {
      fullyQualifiedName: "java.io.File",
      className: "File",
      packageName: "java.io",
      isJavaStandardLibrary: true,
    })

    // Add common top-level packages as "meta" symbols for completion purposes
    // These won't have class names or methods, but will appear as import options
    stdlib.set("java", {
      fullyQualifiedName: "java",
      className: "java", // Represents the package itself
      packageName: "",
      isJavaStandardLibrary: true,
    })
    stdlib.set("javax", {
      fullyQualifiedName: "javax",
      className: "javax",
      packageName: "",
      isJavaStandardLibrary: true,
    })
    stdlib.set("org", {
      fullyQualifiedName: "org",
      className: "org",
      packageName: "",
      isJavaStandardLibrary: true,
    })
    stdlib.set("com", {
      fullyQualifiedName: "com",
      className: "com",
      packageName: "",
      isJavaStandardLibrary: true,
    })

    // Add more types that are commonly imported to expand completion list
    stdlib.set("java.util.Date", {
      fullyQualifiedName: "java.util.Date",
      className: "Date",
      packageName: "java.util",
      isJavaStandardLibrary: true,
    })
    stdlib.set("java.io.IOException", {
      fullyQualifiedName: "java.io.IOException",
      className: "IOException",
      packageName: "java.io",
      isJavaStandardLibrary: true,
    })
    stdlib.set("java.util.Set", {
      fullyQualifiedName: "java.util.Set",
      className: "Set",
      packageName: "java.util",
      isJavaStandardLibrary: true,
    })
    stdlib.set("java.util.HashSet", {
      fullyQualifiedName: "java.util.HashSet",
      className: "HashSet",
      packageName: "java.util",
      isJavaStandardLibrary: true,
    })
    stdlib.set("java.util.UUID", {
      fullyQualifiedName: "java.util.UUID",
      className: "UUID",
      packageName: "java.util",
      isJavaStandardLibrary: true,
    })
    stdlib.set("java.net.URI", {
      fullyQualifiedName: "java.net.URI",
      className: "URI",
      packageName: "java.net",
      isJavaStandardLibrary: true,
    })
    stdlib.set("java.util.concurrent.Callable", {
      fullyQualifiedName: "java.util.concurrent.Callable",
      className: "Callable",
      packageName: "java.util.concurrent",
      isJavaStandardLibrary: true,
    })
    stdlib.set("java.util.stream.Stream", {
      fullyQualifiedName: "java.util.stream.Stream",
      className: "Stream",
      packageName: "java.util.stream",
      isJavaStandardLibrary: true,
    })
    return stdlib
  }

  /**
   * Extracts the package name from a fully qualified type name.
   */
  private extractPackageName(fullyQualifiedName: string): string | null {
    const lastDotIndex = fullyQualifiedName.lastIndexOf(".")
    return lastDotIndex > -1 ? fullyQualifiedName.substring(0, lastDotIndex) : null
  }

  /**
   * Extracts the type name from a fully qualified type name.
   */
  private extractTypeName(fullyQualifiedName: string): string {
    const lastDotIndex = fullyQualifiedName.lastIndexOf(".")
    return lastDotIndex > -1 ? fullyQualifiedName.substring(lastDotIndex + 1) : fullyQualifiedName
  }

  /**
   * Resolve custom Java types from configured source paths
   */
  private async resolveCustomJavaType(typeName: string): Promise<JavaSymbolInfo | null> {
    debug(`Attempting to resolve custom Java type: ${typeName}`)

    const primaryType = this.stripInnerClassReference(typeName)
    const packageAndClass = this.getPackageAndClassName(primaryType)
    if (!packageAndClass) {
      return null
    }

    const { packageName, className } = packageAndClass
    const candidatePaths = this.getCandidateSourcePaths(packageName, className)

    for (const candidatePath of candidatePaths) {
      try {
        await fs.access(candidatePath)
      } catch {
        continue
      }

      const symbol = await this.buildSymbolFromSource(candidatePath, packageName, className)
      if (symbol) {
        return symbol
      }
    }

    return null
  }

  private normalizeConfig(config: JavaResolverConfig): JavaResolverConfig {
    return {
      sourcePaths: Array.from(config.sourcePaths ?? []),
      classpath: Array.from(config.classpath ?? []),
    }
  }

  private normalizeTypeName(typeName: string): string {
    return typeName
      .replace(/<[^>]*>/g, "")
      .replace(/\s+/g, "")
      .replace(/\[\]/g, "")
      .trim()
  }

  private stripInnerClassReference(typeName: string): string {
    return typeName.split("$")[0]
  }

  private getPackageAndClassName(fullyQualifiedName: string): { packageName: string; className: string } | null {
    const sanitized = fullyQualifiedName.trim()
    const lastDotIndex = sanitized.lastIndexOf(".")
    if (lastDotIndex === -1) {
      return null
    }

    return {
      packageName: sanitized.substring(0, lastDotIndex),
      className: sanitized.substring(lastDotIndex + 1),
    }
  }

  private getCandidateSourcePaths(packageName: string, className: string): string[] {
    const packageSegments = packageName ? packageName.split(".") : []
    return this.config.sourcePaths.map((sourceRoot) =>
      path.resolve(sourceRoot, ...packageSegments, `${className}.java`),
    )
  }

  private async buildSymbolFromSource(
    filePath: string,
    packageName: string,
    className: string,
  ): Promise<JavaSymbolInfo | null> {
    try {
      const source = await fs.readFile(filePath, "utf8")
      const declarationRegex = new RegExp(
        `(public\\s+)?(final\\s+)?(abstract\\s+)?(class|interface|enum)\\s+${className}\\b`,
      )
      const declarationMatch = source.match(declarationRegex)

      if (!declarationMatch) {
        debug(`Unable to find declaration for ${className} in ${filePath}`)
        return null
      }

      const kind = declarationMatch[4]
      const symbol: JavaSymbolInfo = {
        fullyQualifiedName: packageName ? `${packageName}.${className}` : className,
        className,
        packageName,
        isInterface: kind === "interface",
        isEnum: kind === "enum",
        isAbstract: Boolean(declarationMatch[3]),
        isFinal: Boolean(declarationMatch[2]),
        isJavaStandardLibrary: false,
        sourceFilePath: filePath,
      }

      debug(`Resolved custom Java symbol from source: %o`, symbol)

      return symbol
    } catch (error) {
      debug(`Failed to parse Java source ${filePath}:`, error)
      return null
    }
  }

  private async collectPackagesFromSourcePaths(): Promise<Set<string>> {
    const packages = new Set<string>()

    for (const sourceRoot of this.config.sourcePaths) {
      await this.walkSourcePackages(sourceRoot, "", packages)
    }

    return packages
  }

  private async walkSourcePackages(currentDir: string, packagePrefix: string, packages: Set<string>): Promise<void> {
    let entries: Dirent[]
    try {
      entries = await fs.readdir(currentDir, { withFileTypes: true })
    } catch {
      return
    }

    const hasJavaFiles = entries.some((entry) => entry.isFile() && entry.name.endsWith(".java"))
    if (hasJavaFiles && packagePrefix) {
      packages.add(packagePrefix)
    }

    for (const entry of entries) {
      if (!entry.isDirectory()) continue
      const nextPrefix = packagePrefix ? `${packagePrefix}.${entry.name}` : entry.name
      await this.walkSourcePackages(path.join(currentDir, entry.name), nextPrefix, packages)
    }
  }

  private async collectClassesFromSourcePaths(packageName: string): Promise<Set<string>> {
    const classes = new Set<string>()
    const packageSegments = packageName ? packageName.split(".") : []

    for (const sourceRoot of this.config.sourcePaths) {
      const packageDir = path.resolve(sourceRoot, ...packageSegments)
      let entries: Dirent[]
      try {
        entries = await fs.readdir(packageDir, { withFileTypes: true })
      } catch {
        continue
      }

      for (const entry of entries) {
        if (entry.isFile() && entry.name.endsWith(".java")) {
          classes.add(entry.name.replace(/\.java$/, ""))
        }
      }
    }

    return classes
  }

  /**
   * Recursively parses generic type parameters from a string (e.g., "K, V" or "E, List<String>")
   * Assumes the input string is the content inside the angle brackets.
   */
  private parseTypeParameters(paramString: string): string[] {
    const params: string[] = []
    let balance = 0
    let lastCommaIndex = -1

    for (let i = 0; i < paramString.length; i++) {
      const char = paramString[i]
      if (char === "<") {
        balance++
      } else if (char === ">") {
        balance--
      } else if (char === "," && balance === 0) {
        params.push(paramString.substring(lastCommaIndex + 1, i).trim())
        lastCommaIndex = i
      }
    }
    params.push(paramString.substring(lastCommaIndex + 1).trim())
    return params.filter((p) => p.length > 0)
  }
}
