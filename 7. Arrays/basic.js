"use strict";

let myArray = [1, 2, 3, 4, 5];
console.log(myArray); // Output: [1, 2, 3, 4, 5]

myArray.push(6); // Adds 6 to the end of the array
console.log(myArray); // Output: [1, 2, 3, 4, 5, 6]

myArray.pop(); // Removes the last element (6)
console.log(myArray); // Output: [1, 2, 3, 4, 5]

myArray.unshift(0); // Adds 0 to the beginning of the array
console.log(myArray); // Output: [0, 1, 2, 3, 4, 5]

myArray.shift(); // Removes the first element (0)
console.log(myArray); // Output: [1, 2, 3, 4, 5]

console.log(myArray.includes(3)); // Checks if 3 is in the array Output: true
console.log(myArray.indexOf(4)); // Finds the index of 4 Output: 3

const newArr = myArray.join();
console.log(newArr); // Converts the array to a string Output: "1,2,3,4,5"
console.log(typeof newArr); // Output: string

const newArr1 = myArray.slice(1, 3); // Slices the array from index 1 to 3 (exclusive)
console.log(newArr1); // Output: [2, 3]

let newArr2 = myArray.splice(1, 3); // Removes 3 elements starting from index 1
console.log(newArr2); // Output: [2, 3, 4]
console.log(myArray); // Output: [1, 5]

let newArr3 = myArray.concat(newArr2); // Concatenates newArr2 with myArray
console.log(newArr3); // Output: [1, 5, 2, 3, 4]

let newArr4 = [...newArr1, ...newArr2]; // Spread operator to combine arrays
console.log(newArr4); // Output: [2, 3, 2, 3, 4]

const myArr = Array.of(myArray,newArr,newArr1); // Creates an array with the list of elements.
console.log((myArr));
