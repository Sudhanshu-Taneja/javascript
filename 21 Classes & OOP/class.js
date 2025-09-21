class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    encryptPassword() {
        return this.password.split('').reverse().join('');
    }
    changeUserName(newName) {
        this.name = newName;
    }
    static createId() {
        return Math.floor(Math.random() * 10000);
    }
}

class student extends User {
    constructor(name, email, password, studentId) {
        super(name, email, password);
        this.studentId = studentId;
    }
    getStudentDetails() {
        return `Name: ${this.name}, Email: ${this.email}, Student ID: ${this.studentId}`;
    }
}

const user1 = new User('Sudhanshu', 'sudhanshu@example.com', 'password123');

console.log(user1.encryptPassword());
user1.changeUserName('Sudhanshu Taneja');
console.log(user1.name);

const student1 = new student('Manoj', 'manoj@example.com', 'password456', 'S12345');
console.log(student1.getStudentDetails());

