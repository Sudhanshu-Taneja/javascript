(function iife() {
    console.log("Immediately Invoked Function Expression");
})();

// Using arrow function

((name) => {
    console.log(`Immediately Invoked Function Expression: ${name}`);
})('Sudhanshu');
