const user ={
    username: "Sudhanshu",
    price: 100,

    welcomeMessage: function(){
        console.log(`Hello ${this.username}, welcome to the website`);
    }
}

// // Default context
// user.welcomeMessage();

// // Changing the context

// user.username = "Manoj"
// user.welcomeMessage();

// function test() {
//     let name = "Sudhanshu"
//     console.log(this.name);
// }

// test();

// Explicit return in arrow function
const test = (num1, num2) => {
    return num1 + num2;
}

console.log(test(5, 10));

// Implicit return in arrow function
const test2 = (num1, num2) => num1 + num2;

console.log(test2(5, 10));


const calc = (num1, num2) => ({
    sum: num1 + num2,
    diff: num1 - num2,
    prod: num1 * num2,
    quot: num1 / num2
});

console.log(calc(5, 10));
