var a = 100;
function test(){
    var a = 10;
    console.log("Inside function :: " + a);
}
test();
console.log("Outside function :: " + a);