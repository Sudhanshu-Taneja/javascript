function multiplyByFive(num) {
    return num * 5;
}

multiplyByFive.power = 2;

console.log(multiplyByFive(3)); // Outputs: 15
console.log(multiplyByFive.power); // Outputs: 2
console.log(multiplyByFive.prototype);


function menu(item, price) {
    this.item = item;
    this.price = price;
}

menu.prototype.increment = function() {
    this.price += 1;
}

menu.prototype.display = function() {
    console.log(`Item: ${this.item}, Price: $${this.price}`);
}

const burger = new menu('Burger', 5);
burger.display(); // Outputs: Item: Burger, Price: $5
burger.increment();
burger.display(); // Outputs: Item: Burger, Price: $6

let testObj = {
    name: "Test Object",
    type: "Demo"
};

Object.prototype.greet = function() {
    console.log("Hello!");
}

burger.greet(); // Outputs: Hello!
testObj.greet(); // Outputs: Hello!


const Teacher = {
    makeVideo: true
}

const TA = {
    isAvailable: false,
    makeAssignment: true,
    __proto__: Teacher
}

const user = {
    name: "Sudhanshu"
}

user.__proto__ = TA;

console.log(user.name); // Outputs: Sudhanshu
console.log(user.isAvailable); // Outputs: false
console.log(user.makeVideo); // Outputs: true
console.log(user.makeAssignment); // Outputs: true

const user2 = {
    name: "Taneja"
}

Object.setPrototypeOf(user2, Teacher);