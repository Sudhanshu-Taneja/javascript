"use strict";

// let name = "Sudhanshu Taneja";
// let firstName = name; // A copy of the name variable is given to the firstName variable.

// console.log(name);
// console.log(firstName);

// firstName = "Sudhanshu" // The value of name variable won't change.

// console.log(name);
// console.log(firstName);


let user1 = {
    firstName : "Sudhanshu",
    lastName : "Taneja"
};

let user2 = user1; // A reference of the user1 variable will be assigned to the user2 variable.

console.table([user1,user2]);

user2.firstName = "Kartik";

console.table([user1,user2]);