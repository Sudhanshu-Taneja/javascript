const newUser = new Object();
newUser.id  = "123abc";
newUser.isLoggedIn = false;

const loginDetails = {
    email: "sudhanshu@gmail.com",
    fullName: {
        firstName: "Sudhanshu",
        lastName: "Taneja"
    }
}

newUser.details = loginDetails;
// console.log(newUser);

// const obj1 = {
//     1: "a",
//     2: "b"
// };
// const obj2 = {
//     3: "c",
//     4: "d"
// };

// const obj3 = Object.assign(obj2,obj1);
// console.log(obj3);

// const obj4 = {...obj1, ...obj2};
// console.log(obj4);

// console.log(Object.keys(newUser));
// console.log(Object.values(newUser));

// console.log(newUser.hasOwnProperty('isLoggedIn'));

const {details: userDetails} = newUser; // Destructuring
console.log(userDetails);
