"use string";

let myDate = new Date();
console.log(myDate.toString());

console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());

let birthDate = new Date(2000, 10, 8);
console.log(birthDate.toDateString());
console.log(birthDate.getTime());

const myTime = Date.now();
console.log(myTime);

console.log(birthDate.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }));