const users = [
    {"firstName": "John", "lastName": "Doe", "age": 25},
    {"firstName": "Jane", "lastName": "Smith", "age": 30},
    {"firstName": "Jim", "lastName": "Brown", "age": 35},
    {"firstName": "Jake", "lastName": "White", "age": 40},
    {"firstName": "Jill", "lastName": "Green", "age": 50}
];

const output = users.reduce(function(acc, curr) {
    if (curr.age < 35) {
        acc.push(curr.firstName)
    }
    return acc;
}, [])

console.log(output)