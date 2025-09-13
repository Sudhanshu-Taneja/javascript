var name = "Sudhanshu"; // Variable can be re-declared and updated

let age = 25; // Variable can be updated but not re-declared in the same scope

const birthCity = "Jaipur"; // Variable cannot be re-declared or updated

console.table([name, age, birthCity]);

name = "Sudhanshu Taneja"; // Updating the variable

age = 26; // Updating the variable

//birthCity = "Delhi"; // This will throw an error because const cannot be updated

console.table([name, age, birthCity]);