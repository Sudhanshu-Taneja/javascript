class User{
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password; // convention to indicate private property
    }

    get password(){
        return this._password.split('').reverse().join('');
    }

    set password(newPassword){
        if(newPassword.length < 6){
            console.log("Password must be at least 6 characters long.");
        } else {
            this._password = newPassword;
        }
    }
}

const user1 = new User('Sudhanshu', 'sudhanshu@example.com', 'password123');
console.log(user1.password); // Accessing the getter
user1.password = 'newpass'; // Using the setter
console.log(user1.password);