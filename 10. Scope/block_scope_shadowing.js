"use strict";

let a = 100; // Global scope
function test(){
    let a = 10; // Function scope
    console.log("Inside function :: " + a);
}
test();
console.log("Outside function :: " + a);

if (true) {
    let a = 20; // Block scope
    console.log("Inside block :: " + a);
}