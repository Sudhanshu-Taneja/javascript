// for loop

for (let index = 0; index < 10; index++) {
    const element = index;   
    console.log(element);
    
}

// while loop

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// do-while loop

let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

// For-of loop

const array = [1, 2, 3, 4, 5];
for (const element of array) {
    console.log(element);
}

// break condition

for (let index = 0; index < 10; index++) {
    const element = index;   
    console.log(element);
    if (element === 5) {
        console.log("Breaking the loop");
        break;
    }
}

// continue condition

for (let index = 0; index < 10; index++) {
    const element = index;   
    if (element === 5) {
        continue;
    }
    console.log(element);
}

// Map iteration using for...of loop

const map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}

// Object iteration using for...in loop

const obj = { x: 10, y: 20, z: 30 };

for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(`${key}: ${obj[key]}`);
    }
}