"use strict";
const nameStr = "Sudhanshu";
const agrNumber = 25;
const isMale = true;
const nullObj = null;
let undefinedObj;


// console.table([typeof nameStr, typeof agrNumber, typeof isMale, typeof nullObj, typeof undefinedObj])

// stringConversion = Number(nameStr);
// console.log(stringConversion); // NaN, because "Sudhanshu" cannot be converted to a number
// console.log(typeof stringConversion); // "number"

// stringConversion = Number(nullObj);
// console.log(stringConversion); // 0, because null is converted to 0
// console.log(typeof stringConversion); // "number"

// booleanConversion = Boolean(nameStr);
// console.log(booleanConversion); // true, because non-empty strings are truthy

// const emptyStr = "";
// booleanConversion = Boolean(emptyStr);
// console.log(booleanConversion); // true, because non-zero numbers are truthy

const techStack = ["JavaScript", "Python", "Java"];
console.log("Type of techStack variable: " + typeof techStack); // "object", arrays are objects in JavaScript
console.log(techStack);

const myObject = {
  name: "Sudhanshu",
  age: 25,
  isMale: true,
  skills: techStack
};
console.log("Type of object variable: " + typeof myObject); // "object"
console.log(myObject);

const myFunction = function() {
  console.log("This is a function");
}
console.log("Type of function variable: " + typeof myFunction); // "function"
console.log(myFunction); // function definition