import { beforeEach, describe, expect, it } from "vitest"
import { GosuJavaSymbolResolver } from "../java-symbol-resolver"

describe("GosuJavaSymbolResolver", () => {
  let resolver: GosuJavaSymbolResolver

  beforeEach(() => {
    resolver = new GosuJavaSymbolResolver({
      sourcePaths: ["src/test/java"],
      classpath: ["lib/java-stdlib.jar"],
    })
  })

  describe("Given a Java symbol resolver instance", () => {
    describe("When creating the resolver", () => {
      it("Then it should be instantiated successfully", () => {
        expect(resolver).toBeDefined()
        expect(resolver).toBeInstanceOf(GosuJavaSymbolResolver)
      })
    })

    describe("When resolving standard Java types", () => {
      it("Then it should resolve java.lang.String", async () => {
        const result = await resolver.resolveJavaType("java.lang.String")

        expect(result).toBeDefined()
        expect(result?.fullyQualifiedName).toBe("java.lang.String")
        expect(result?.className).toBe("String")
        expect(result?.packageName).toBe("java.lang")
        expect(result?.isJavaStandardLibrary).toBe(true)
      })

      it("And it should resolve java.util.List", async () => {
        const result = await resolver.resolveJavaType("java.util.List")

        expect(result).toBeDefined()
        expect(result?.fullyQualifiedName).toBe("java.util.List")
        expect(result?.className).toBe("List")
        expect(result?.packageName).toBe("java.util")
        expect(result?.isInterface).toBe(true)
        expect(result?.isJavaStandardLibrary).toBe(true)
      })

      it("And it should resolve java.util.Map", async () => {
        const result = await resolver.resolveJavaType("java.util.Map")

        expect(result).toBeDefined()
        expect(result?.fullyQualifiedName).toBe("java.util.Map")
        expect(result?.isInterface).toBe(true)
        expect(result?.isGeneric).toBe(true)
      })
    })

    describe("When resolving custom Java types", () => {
      it("Then it should attempt to resolve from source paths", async () => {
        const result = await resolver.resolveJavaType("com.example.CustomClass")

        // Should return null if not found, but not throw an error
        expect(result).toBeNull()
      })

      it("And it should handle nested classes", async () => {
        const result = await resolver.resolveJavaType("com.example.OuterClass$InnerClass")

        expect(result).toBeNull() // Not found, but no error
      })
    })

    describe("When analyzing classpath", () => {
      it("Then it should find available Java packages", async () => {
        const packages = await resolver.getAvailablePackages()

        expect(packages).toBeDefined()
        expect(Array.isArray(packages)).toBe(true)
        expect(packages).toContain("java.lang")
        expect(packages).toContain("java.util")
        expect(packages).toContain("java.io")
      })

      it("And it should find classes in a package", async () => {
        const classes = await resolver.getClassesInPackage("java.util")

        expect(classes).toBeDefined()
        expect(Array.isArray(classes)).toBe(true)
        expect(classes).toContain("List")
        expect(classes).toContain("Map")
        expect(classes).toContain("ArrayList")
        expect(classes).toContain("HashMap")
      })
    })

    describe("When handling import resolution", () => {
      it("Then it should resolve short name from import", async () => {
        const result = await resolver.resolveImportedType("List", ["java.util.List"])

        expect(result).toBeDefined()
        expect(result?.fullyQualifiedName).toBe("java.util.List")
      })

      it("And it should handle wildcard imports", async () => {
        const result = await resolver.resolveImportedType("Map", ["java.util.*"])

        expect(result).toBeDefined()
        expect(result?.fullyQualifiedName).toBe("java.util.Map")
      })

      it("And it should prioritize specific imports over wildcards", async () => {
        const result = await resolver.resolveImportedType("List", ["java.awt.*", "java.util.List", "java.util.*"])

        expect(result).toBeDefined()
        expect(result?.fullyQualifiedName).toBe("java.util.List")
      })
    })

    describe("When handling generic types", () => {
      it("Then it should parse generic type information", async () => {
        const result = await resolver.resolveJavaType("java.util.List")

        expect(result).toBeDefined()
        expect(result?.isGeneric).toBe(true)
        expect(result?.genericParameters).toBeDefined()
        expect(result?.genericParameters?.length).toBeGreaterThan(0)
      })

      it("And it should handle parameterized types", async () => {
        const result = await resolver.parseParameterizedType("List<String>")

        expect(result).toBeDefined()
        expect(result?.baseType).toBe("List")
        expect(result?.typeParameters).toEqual(["String"])
      })

      it("And it should handle nested generic types", async () => {
        const result = await resolver.parseParameterizedType("Map<String, List<Integer>>")

        expect(result).toBeDefined()
        expect(result?.baseType).toBe("Map")
        expect(result?.typeParameters).toEqual(["String", "List<Integer>"])
      })
    })

    describe("When caching resolved types", () => {
      it("Then it should cache frequently accessed types", async () => {
        const startTime1 = Date.now()
        const result1 = await resolver.resolveJavaType("java.lang.String")
        const duration1 = Date.now() - startTime1

        const startTime2 = Date.now()
        const result2 = await resolver.resolveJavaType("java.lang.String")
        const duration2 = Date.now() - startTime2

        expect(result1).toEqual(result2)
        expect(duration2).toBeLessThanOrEqual(duration1) // Cache should be faster
      })

      it("And it should invalidate cache when configuration changes", async () => {
        await resolver.resolveJavaType("java.lang.String")

        resolver.updateConfiguration({
          sourcePaths: ["src/main/java"],
          classpath: ["lib/updated.jar"],
        })

        // Should work without errors after config update
        const result = await resolver.resolveJavaType("java.lang.String")
        expect(result).toBeDefined()
      })
    })

    describe("When handling error cases", () => {
      it("Then it should handle non-existent types gracefully", async () => {
        const result = await resolver.resolveJavaType("com.nonexistent.FakeClass")

        expect(result).toBeNull()
      })

      it("And it should handle malformed type names", async () => {
        const result = await resolver.resolveJavaType("invalid..type..name")

        expect(result).toBeNull()
      })

      it("And it should handle empty classpath gracefully", async () => {
        const emptyResolver = new GosuJavaSymbolResolver({
          sourcePaths: [],
          classpath: [],
        })

        // Java standard library should still be available
        const stdResult = await emptyResolver.resolveJavaType("java.lang.String")
        expect(stdResult).toBeDefined()
        expect(stdResult?.isJavaStandardLibrary).toBe(true)

        // Custom types should return null
        const customResult = await emptyResolver.resolveJavaType("com.example.CustomClass")
        expect(customResult).toBeNull()
      })
    })
  })
})
