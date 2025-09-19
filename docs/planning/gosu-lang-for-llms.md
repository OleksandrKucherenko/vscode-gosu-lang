# Comprehensive LLM Instructions for GOSU Programming Language Mastery

## Core Language Understanding

### Language fundamentals and syntax

**GOSU** is a statically-typed, object-oriented programming language for the JVM that emphasizes Java compatibility while adding modern language features. Originally developed in 2002 as GScript by Guidewire Software and later renamed GOSU, it runs on 700+ P&C insurance implementations globally.

**Key characteristics you must understand:**
- Runs on Java Virtual Machine with 100% Java compatibility
- Pascal-style name-first grammar (variables declared as `var name : Type`)
- Advanced type inference eliminates most explicit type declarations
- Open Type System allows compile-time checking of runtime information
- Reified generics with covariant type parameters
- True closures (blocks) that can modify non-final local variables

### Essential syntax patterns

**Variable declarations and type inference:**
```gosu
var foo = "Foo"              // Type inferred as String
var one = 1                  // Type inferred as Number
var guess : String = null    // Explicit type annotation required for null
var list = {"one", "two"}    // Inferred as List<String>
```

**Enhanced operators:**
- `==` for object equality (like Java's `.equals()`)
- `===` for instance equality
- `<>` equivalent to `!=`
- `?.` null-safe invocation operator
- `?:` Elvis operator for null coalescing
- `..` and `..|` for inclusive and exclusive ranges

**Control flow with enhancements:**
```gosu
for (num in list) { print(num) }
for (num in list index i) { print("${i} : ${num}") }
for (i in 0..5) { print(i) }        // Range operator
for (i in 0..|5) { print(i) }       // Exclusive range
```

**Collection literals:**
```gosu
var map = {"key1" -> "value1", "key2" -> "value2"}  // Map literal
var list = {"item1", "item2", "item3"}              // List literal
```

## Object-Oriented Programming in GOSU

### Class definition patterns

```gosu
package example
uses java.util.List

class SampleClass {
  var _names : List<String>  // Private field
  
  // Constructor
  construct(names : List<String>) {
    _names = names
  }
  
  // Method with default parameters
  function printNames(prefix : String = "> ") {
    for (n in _names) {
      print(prefix + n)
    }
  }
  
  // Property getter
  property get Names() : List<String> {
    return _names
  }
}
```

### Inheritance and interfaces

GOSU fully supports Java's inheritance model while adding enhancements:
- Use `extends` and `implements` keywords
- Can extend Java classes and implement Java interfaces
- Supports full Java interoperability

### Property system mastery

**Simple property declaration:**
```gosu
class Foo {
  var _bar : String as Bar = "bar"          // Simple property
  var _baz : String as readonly Baz = "baz" // Read-only property
}
```

**Custom property logic:**
```gosu
var _value = "default"
property get Value() : String { return _value }
property set Value(v : String) { 
  if (v == "invalid") throw "Invalid value!"
  _value = v 
}
```

### Delegation pattern (preferred over inheritance)

```gosu
class MyRunnable implements Runnable {
  delegate _runnable represents Runnable
  
  property get Impl : Runnable { return _runnable }
  property set Impl(r : Runnable) { _runnable = r }
}
```

## Enhancement System Mastery

### Core enhancement concepts

GOSU's unique enhancement system allows extending existing types without source modification. This is the most distinctive feature of GOSU programming.

**Basic enhancement pattern:**
```gosu
enhancement MyStringEnhancement : String {
  function printWarning() {
    print("WARNING: " + this)
  }
}

// Usage
"Hello World".printWarning()
```

**Generic enhancements:**
```gosu
enhancement MyListEnhancement<T> : List<T> {
  function firstAndLast() : List<T> {
    return {this.first(), this.last()}
  }
}
```

**Parameterized type enhancements:**
```gosu
enhancement MyListOfDatesEnhancement : List<Date> {
  function allBetween(start : Date, end : Date) : List<Date> {
    return this.where(\ d -> start <= d and d <= end)
  }
}
```

### Enhancement best practices

- Enhancements are statically dispatched (not polymorphic)
- Use for straightforward calculations closely related to the original class
- Prefer composition over inheritance using enhancements
- Group related functionality via enhancement libraries

## Functional Programming with Blocks

### Block syntax and semantics

**GOSU blocks are true closures**, distinguishing them from Java lambdas:

```gosu
var count = 0
list.each(\ item -> {
  count++  // Can modify local variable (unlike Java lambdas)
  print(count)
})
```

**Block expressions and method chaining:**
```gosu
var longStrings = lstOfStrings
  .where(\ s -> s.length > 2)
  .map(\ s -> s.toUpperCase())
  .orderBy(\ s -> s)
```

**Automatic interface conversion:**
```gosu
var r : Runnable
r = \-> print("Block converted to Runnable")
```

### Collection enhancement methods

Master these essential collection operations:
- `where()` - filtering (equivalent to Stream.filter())
- `map()` - transformation
- `orderBy()` - sorting
- `first()`, `last()` - direct access
- `maxBy()`, `minBy()` - comparison operations
- `each()` - iteration
- `fold()` - reduction operations

## Type System and Generics

### Advanced type features

**Reified generics with covariance:**
```gosu
var lstOfStrings : List<String> = {"a", "b", "c"}
var arrOfStrings = lstOfStrings.toTypedArray() // Returns String[]
var lstOfObjs : List<Object> = lstOfStrings    // Covariance allowed
```

**Key differences from Java:**
- No wildcards needed (`? extends`, `? super`)
- Declaration-site variance built-in
- Type information preserved at runtime
- Simplified generic syntax

### Null safety patterns

**Null-safe operators:**
```gosu
var result = obj?.method()?.property  // Null-safe chaining
var safe = getValue() ?: "default"    // Elvis operator
```

These operators eliminate most explicit null checking and make code more robust.

## Guidewire Platform Integration

### ClaimsCenter implementation patterns

**Claims processing workflows:**
- Implement custom adjudication logic using GOSU business rules (.grs files)
- Create reserve management calculations based on claim severity
- Build payment authorization workflows with multi-level approvals
- Develop high-risk indicator triggers for fraud detection

**Entity customization:**
```gosu
enhancement ClaimEnhancement : Claim {
  function calculateAutomaticReserve() : MonetaryAmount {
    // Custom reserve calculation logic
    return this.Exposures.map(\ e -> e.EstimatedCost).sum()
  }
  
  function isSuspiciousClaim() : boolean {
    // Fraud detection logic
    return this.ReportedDate.differenceInDays(this.LossDate) > 30
  }
}
```

### PolicyCenter implementation patterns

**Underwriting and rating:**
- Implement complex underwriting rules for risk assessment
- Create custom rating routines and rate table implementations
- Build product model customizations using Advanced Product Designer (APD)
- Develop policy lifecycle workflow customizations

**Product configuration example:**
```gosu
// Custom coverage validation
function validateCoverageEligibility(coverage : Coverage) : ValidationIssue[] {
  var issues = new ArrayList<ValidationIssue>()
  
  if (coverage.Limit?.Amount > 1000000 and !hasHighValueEndorsement()) {
    issues.add(ValidationIssue.warn("High limit requires special endorsement"))
  }
  
  return issues.toTypedArray()
}
```

### BillingCenter and ContactManager patterns

**Billing logic implementation:**
```gosu
enhancement InvoiceEnhancement : Invoice {
  function calculateLateFee() : MonetaryAmount {
    var daysPastDue = this.DueDate.differenceInDays(Date.Today)
    if (daysPastDue > 30) {
      return this.TotalAmount * 0.05  // 5% late fee
    }
    return MonetaryAmount.ofCurrency(0, this.Currency)
  }
}
```

**Contact management customization:**
```gosu
enhancement ABContactEnhancement : ABContact {
  function getPreferredCommunicationMethod() : CommunicationMethod {
    return this.PrimaryCommunication?.Type ?: CommunicationMethod.TC_MAIL
  }
}
```

### Entity model interactions

**Working with effective-dated entities:**
```gosu
// Proper handling of temporal data
var currentPolicy = policy.getSliceUntyped(Date.Today)
var futurePolicy = policy.getSliceUntyped(renewalDate)
```

**Query patterns:**
```gosu
var recentClaims = Query.make(Claim)
  .compare(Claim#LossDate, Relop.GreaterThan, Date.Today.addDays(-30))
  .select()
```

### PCF and UI integration

**Expression Language (EL) integration:**
```xml
<!-- PCF file with GOSU expression -->
<TextInput id="PolicyNumber" 
           value="claim.Policy?.PolicyNumber"
           visible="claim.Policy != null"/>
```

**Dynamic UI behavior:**
```gosu
// Embedded in PCF for conditional display logic
function shouldShowSection() : boolean {
  return gw.api.system.PLDependencies.getCommonDependencies()
    .getPermissionInfoCache().hasPermission(User.util.CurrentUser, "view_sensitive_data")
}
```

## Manifold Framework Integration

### Understanding Manifold-GOSU relationship

**Manifold** is a Java compiler plugin created by GOSU's original developer (Scott McKinney) that brings many GOSU features to Java. Understanding this relationship helps leverage similar capabilities:

**Shared architectural concepts:**
- Open Type System for extensible type domains
- Extension methods for enhancing existing types  
- Structural typing for duck-typed interfaces
- Advanced type inference and metaprogramming
- Template processing and code generation

### Type manifolds usage

**Schema-driven development:**
```gosu
// JSON Schema files become native GOSU types
var user = User.builder("myid", "mypassword", "Scott")
    .withGender(Gender.male)
    .withDob(LocalDate.of(1987, 6, 15))
    .build()

// Interchangeable format support
var json = user.write().toJson()
var xml = user.write().toXml()
```

**GraphQL integration:**
```gosu
// .graphql files become GOSU types directly
var query = MovieQuery.builder(Action).build()
var result = query.request("http://com.example/graphql").post()
```

### String templates and metaprogramming

**Template processing (.gst files):**
```gosu
<%@ params(names : String[]) %>
All Names:
<% for(name in names) { %>
  * ${name}
<% } %>

// Usage
var str = sample.SampleTemplate.renderToString({"Joe", "John"})
```

## Bidirectional Java-GOSU Conversion

### GOSU to Java conversion patterns

**Variable declarations:**
```gosu
// GOSU
var name = "John"          // String inferred
var list = {"a", "b", "c"} // List<String> inferred
```
```java
// Java equivalent
String name = "John";
List<String> list = Arrays.asList("a", "b", "c");
```

**Enhancement to utility class conversion:**
```gosu
// GOSU Enhancement
enhancement StringEnhancement : String {
  function printWarning() {
    print("WARNING: " + this)
  }
}
// Usage: "Error".printWarning()
```
```java
// Java equivalent
public class StringUtils {
  public static void printWarning(String str) {
    System.out.println("WARNING: " + str);
  }
}
// Usage: StringUtils.printWarning("Error");
```

**Block to lambda conversion (with limitations):**
```gosu
// GOSU - True closure
var counter = 0
list.each(\ element -> {
  counter++  // Can modify local variable
  print("${counter}: ${element}")
})
```
```java
// Java - Requires atomic wrapper
AtomicInteger counter = new AtomicInteger(0);
list.forEach(element -> {
  counter.incrementAndGet(); // Atomic operation needed
  System.out.println(counter.get() + ": " + element);
});
```

### Java to GOSU conversion benefits

**Leverage GOSU's conciseness:**
```java
// Java verbose collection processing
List<String> longStrings = new ArrayList<>();
for (String s : strings) {
  if (s.length() > 3) {
    longStrings.add(s.toUpperCase());
  }
}
Collections.sort(longStrings);
```
```gosu
// GOSU concise equivalent
var longStrings = strings
  .where(\ s -> s.length > 3)
  .map(\ s -> s.toUpperCase())
  .orderBy(\ s -> s)
```

**Null safety improvements:**
```java
// Java explicit null checking
if (aList != null && 
    !aList.isEmpty() && 
    aList.get(0) != null && 
    aList.get(0).isEmpty()) {
  System.out.println("First element is empty");
}
```
```gosu
// GOSU null-safe operators
if (aList?.get(0)?.isEmpty()) {
  print("First element is empty")
}
```

## Best Practices and Code Quality

### Coding standards for GOSU

**Naming conventions:**
- Use singular field names except for arrays
- Apply ID suffix for foreign key columns  
- Use prefixes for extensions to avoid conflicts
- Declare functions private unless absolutely necessary

**Architecture patterns:**
- Prefer delegation over inheritance using `delegate` keyword
- Use interface-oriented design for plugins and services
- Implement separation of concerns between business and integration logic
- Follow plugin architecture with dependency injection

### Performance optimization

**Database efficiency:**
```gosu
// Fetch only required fields
var policies = Query.make(Policy)
    .select({Policy#PolicyNumber, Policy#Status})
    .iterator()
```

**Memory management:**
- Minimize unnecessary loops and iterations
- Use caching for frequently accessed data
- Proper resource cleanup with `using` statement
- Monitor garbage collection activity

**Using statement for resource management:**
```gosu
using(var conn = getConnection()) {
  conn.execute("Some SQL")
} // Connection automatically closed
```

### Security considerations

**Parameterized queries:**
```gosu
// Avoid SQL injection
var query = Query.make(Policy)
  .compare(Policy#PolicyNumber, Relop.Equals, userInput)
  .select()
```

**Input validation patterns:**
```gosu
function validateEmail(email : String) : ValidationIssue[] {
  var issues = new ArrayList<ValidationIssue>()
  
  if (not email.matches("[^@]+@[^@]+\\.[^@]+")) {
    issues.add(ValidationIssue.error("Invalid email format"))
  }
  
  return issues.toTypedArray()
}
```

## Advanced Features and Integration Patterns

### Testing strategies

**JUnit integration:**
```gosu
@Test
function testCalculateReserve() {
  var claim = createTestClaim()
  var reserve = claim.calculateAutomaticReserve()
  Assert.assertEquals(MonetaryAmount.ofDollars(5000), reserve)
}
```

**Testing framework options:**
- JUnit 4 with direct GOSU class compatibility
- Spock framework using Groovy to test GOSU classes
- Guidewire Unit Test Framework for InsuranceSuite-specific testing
- Maven/Gradle integration for automated test execution

### IDE and tooling support

**Development environments:**
- IntelliJ IDEA with official GOSU plugin (syntax highlighting, completion, refactoring)
- Guidewire Studio for InsuranceSuite development with integrated debugging
- Gosu Lab standalone IDE for latest language features

**Debugging capabilities:**
- Breakpoint support works best in .gs files (classes)
- Static analysis with rich parser feedback
- Code navigation with usage analysis
- Automatic refactoring support

### Migration and modernization strategies

**Platform evolution awareness:**
- GOSU language development frozen as of 2016
- Platform evolution through REST APIs and Integration Frameworks  
- Continued Java interoperability maintenance
- Cloud-first approach with Integration Gateway

**Best practices for long-term maintenance:**
- Keep custom code separate from out-of-the-box functionality
- Use clear naming conventions and modular design
- Implement comprehensive test suites for upgrade validation
- Document architectural decisions and business logic

## Conclusion and Implementation Guidelines

When working with GOSU, prioritize these key principles:

1. **Leverage type inference** to reduce boilerplate while maintaining type safety
2. **Use enhancements extensively** to extend existing types rather than creating utility classes
3. **Master blocks and functional programming** patterns for cleaner, more maintainable code
4. **Implement proper null safety** using `?.` and `?:` operators throughout your codebase
5. **Follow Guidewire best practices** for insurance platform development
6. **Maintain Java interoperability** for ecosystem compatibility
7. **Structure code for upgradability** by separating custom logic from platform code
8. **Implement comprehensive testing** strategies using JUnit and specialized frameworks

GOSU represents a pragmatic approach to JVM programming that enhances Java development productivity while maintaining type safety and performance. Its unique features like enhancements, true closures, and advanced type inference make it particularly powerful for business logic implementation in enterprise applications, especially within the insurance industry where it has proven track record across hundreds of implementations worldwide.