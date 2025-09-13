## Control Flow and Operators in JavaScript

Control flow determines the order in which statements are executed in a program. Operators are used to perform comparisons and logical operations.

### Key Concepts

- **Comparison Operators:**
	- `<` : Less than
	- `>` : Greater than
	- `<=` : Less than or equal to
	- `>=` : Greater than or equal to
	- `==` : Equality (loose, type-converting)
	- `!=` : Inequality (loose)
	- `===` : Strict equality (no type conversion)
	- `!==` : Strict inequality

- **Logical Operators:**
	- `&&` : Logical AND
	- `||` : Logical OR
	- `??` : Nullish coalescing (returns right-hand side if left is null/undefined)

### Truthy and Falsy Values

- **Falsy:** `false`, `0`, `-0`, `BigInt 0n`, `""`, `null`, `undefined`, `NaN`
- **Truthy:** `"0"`, `'false'`, `" "`, `[]`, `{}`, `function(){}`

### Example

```js
if (0) { console.log("Falsy"); } // Won't run
if ("0") { console.log("Truthy"); } // Will run
```