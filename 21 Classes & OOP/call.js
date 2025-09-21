function setUsername(username) {
    this.username = username;
}


function createUser(username, email, password) {

    this.email = email;
    this.password = password;
    setUsername.call(this, username);

}

const user1 = new createUser('Sudhanshu', 'sudhanshu@example.com', 'password123');

console.log(user1);
