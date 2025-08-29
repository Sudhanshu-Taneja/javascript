## Scope in JavaScript

Scope determines the accessibility of variables and functions in different parts of your code.

### Key Concepts

- **Global Scope:**
	- Variables/functions declared outside any function or block are accessible everywhere.
- **Local Scope:**
	- Variables/functions declared inside a function or block are only accessible within that context.

### Example

```js
let globalVar = "I am global";
function testScope() {
	let localVar = "I am local";
	console.log(globalVar); // Accessible
	console.log(localVar);  // Accessible
}
// console.log(localVar); // Error: not defined
```

![Scope Code](images/code.png)
![Scope Output](images/output.png)