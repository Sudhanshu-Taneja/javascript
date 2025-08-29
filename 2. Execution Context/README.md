## JavaScript Execution Context

The execution context is the environment in which JavaScript code is evaluated and executed. Understanding it is crucial for grasping how variables, functions, and scope work in JavaScript.

### Key Concepts

- **Global Execution Context:** Created when the JavaScript engine starts executing code. It contains global variables and functions.
- **Function Execution Context:** Created whenever a function is invoked. Each function call gets its own context.
- **Components:**
  - **Memory Component (Variable Environment):** Stores variables and function declarations as key-value pairs.
  - **Code Component (Thread of Execution):** Executes code line by line.

### Phases of Execution

1. **Creation Phase:**
    - Allocates memory for variables and functions.
    - Variables are initialized with `undefined`.
    - Functions are stored as references.
    - ![Creation Phase](1st%20phase.png)

2. **Execution Phase:**
    - Code is executed line by line.
    - Variables are assigned actual values.
    - If a function is called, a new execution context is created for it.
    - ![Execution Phase](2nd%20phase%20part%201.png)
    - ![Function Context](2nd%20phase%20part%202.png)

### Visuals

The diagrams above illustrate how memory and code components work during each phase.

---
Understanding execution context helps in debugging, managing scope, and writing efficient JavaScript code.
