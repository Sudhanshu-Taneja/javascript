const user = {
    username: 'Sudhanshu',
    loginCount: 5,
    signedIn: true,

    getUserDetails: function() {
        return `${this.username} has logged in ${this.loginCount} times. Signed in: ${this.signedIn}`;
    }
}

console.log(user.getUserDetails());
