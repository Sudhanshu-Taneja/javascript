We've 3 different types of variables in JS - 
1. Var - The variable can be re-declared and updated. A global scope variable. It shouldn't be used anywhere.
2. Let - The variable can't be re-declared but can be updated. A block scope variable.
3. Const - the variable can't be re-declared or updated. A block scope variable. It is compulsory to assign a value to it.

![alt text](error_output.png)

Once we comment out the code which tries to update a const variable, it'll result in a successful output.

![alt text](success_output.png)