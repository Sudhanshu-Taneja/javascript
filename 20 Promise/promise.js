const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is complete.');  
        resolve();
    },1000)

})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function (resolve, reject){
    setTimeout(function(){
        console.log("Async task 2 is complete");
        resolve();
    },1000)
}).then(function(){
    console.log("Promise 2 consumed");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'Sudhanshu', email: 'sudhanshu@example.com'})
    },1500)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){

    setTimeout(function(){
        let error = true;
        if(!error) resolve("Promise 4 resolved");
        else reject("Promise 4 failed");
    },2000)

})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("Promise 4 settled");
})

const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error) resolve("Promise 5 resolved");
        else reject("Promise 5 failed");
    },1000);
});

async function consumePromiseFive(){
    const res = await promiseFive
    .then((message)=>{
        console.log(message);
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        console.log("Promise 5 settled");
    });

    console.log(res);
    
}

consumePromiseFive();
async function getAllUsers(params) {
    const users = await Promise.all([promiseThree, promiseFour]);
    console.log(users);
}

fetch('https://api.github.com/users/Sudhanshu-Taneja')
.then((res)=>res.json())
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
});