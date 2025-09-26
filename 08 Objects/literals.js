//"use strict";

const JsUser = {
    name: "Sudhanshu Taneja",
    age: 25,
    location: "Bangalore",
    email: "sudhanshutaneja001@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

console.log(JsUser["name"]); // Accessing property using bracket notation
console.log(JsUser.name); // Accessing property using dot notation

// Modifying an existing property
JsUser.age = 26;
console.log(JsUser);

JsUser.greeting = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
JsUser.greeting(); // Calling the greeting method

Object.freeze(JsUser); // Freezing the object to prevent further modifications
// Attempting to modify a frozen object will not work
JsUser.age = 27; // This will not change the age property
console.log(JsUser);