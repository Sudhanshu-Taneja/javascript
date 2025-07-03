"use strict";

// num 1 & num2 below are parameters
function addTwoNumber(num1=0, num2){ // 0 is given as the default value in case num1 is empty
    let res = num1+num2;
    return res;
}

const res = addTwoNumber(2,3); // 2,3 are arguments passed to the function
console.log((res));
