// for loop

for (let index = 0; index < 10; index++) {
    const element = index;   
    console.log(element);
    
}

// break condition

for (let index = 0; index < 10; index++) {
    const element = index;   
    console.log(element);
    if (element === 5) {
        break;
    }
}

// continue condition

for (let index = 0; index < 10; index++) {
    const element = index;   
    console.log(element);
    if (element === 5) {
        continue;
    }
    console.log("This will not log if element is 5");
}