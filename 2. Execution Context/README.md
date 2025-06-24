# Execution context
1. Everything in java script is executed inside a execution context.
2. It is a big box and it has 2 components in it - 
    2.1 Memory component (Variable environment) - All the variables are stored in the form of key, value pair. All the functions are also stored in it.
    2.2 Code component (Thread of execution)- The entire code is executed within this, line by line.
3. JS executes the code in 2 phases - 
    3.1 In the 1st phase of execution, it just saves all the variable values as undefined and saves the functions. 
    ![alt text](<1st phase.png>)
    3.2 In the 2nd phase, it executes the code and assign the respective value of variables.
    ![alt text](<2nd phase part 1.png>)
    3.3 During the 2nd phase of execution of code, if the code encounters a function, it creates an all together new execution context.
    ![alt text](<2nd phase part 2.png>)
