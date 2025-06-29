"use strict";

const nameStr = new String('Sudhanshu-Taneja'); // Using String constructor
//console.log(`Type of nameStr variable: ${typeof nameStr}`); // "object", because String constructor creates an object

const agrNumber = 25;
const isMale = true;

//console.log(`Hello! My name is ${nameStr} and my age is ${agrNumber}.`); // Template literals for string interpolation

console.log(`Length of nameStr: ${nameStr.length}`); // Accessing length property of String object
console.log(`Upper case of the name: ${nameStr.toUpperCase()}`); // Using toUpperCase method);
console.log(`Character at index 4: ${nameStr.charAt(4)}`); // Accessing character at index 0
console.log(`Index of 'h': ${nameStr.indexOf('h')}`); // Finding index of character 'h'

const firstName = nameStr.substring(0, 9); // Extracting substring from index 0 to 8
console.log(`First name: ${firstName}`); // Outputting first name

const lastName = nameStr.slice(-6); // Extracting substring of last 6 characters
console.log(`Last name: ${lastName}`);

const fullName = nameStr.replace('-', ' '); // Replaces the substring or character
console.log(fullName);

console.log(fullName.includes('Taneja')); // Checks if the given substring is present in the string or not
console.log(fullName.includes('Mr'));

const splitName = nameStr.split('-'); // Splits the string from the character mentioned.
console.log(splitName);
 
