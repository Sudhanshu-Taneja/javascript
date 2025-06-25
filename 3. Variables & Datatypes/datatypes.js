const nameStr = "Sudhanshu";
const agrNumber = 25;
const isMale = true;
const nullObj = null;
let undefinedObj;


console.table([typeof nameStr, typeof agrNumber, typeof isMale, typeof nullObj, typeof undefinedObj])

stringConversion = Number(nameStr);
console.log(stringConversion); // NaN, because "Sudhanshu" cannot be converted to a number
console.log(typeof stringConversion); // "number"

stringConversion = Number(nullObj);
console.log(stringConversion); // 0, because null is converted to 0
console.log(typeof stringConversion); // "number"

booleanConversion = Boolean(nameStr);
console.log(booleanConversion); // true, because non-empty strings are truthy

const emptyStr = "";
booleanConversion = Boolean(emptyStr);
console.log(booleanConversion); // true, because non-zero numbers are truthy