// if condition

if (2 !== "2"){
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}

const month = 7;

switch (month) {
    case 0:
        console.log("It's January");
        break;

    case 1:
        console.log("It's February");
        break;

    case 2:
        console.log("It's March");
        break;

    case 3:
        console.log("It's April");
        break;

    case 4:
        console.log("It's May");
        break;

    case 5:
        console.log("It's June");
        break;

    case 6:
        console.log("It's July");
        break;

    case 7:
        console.log("It's August");
        break;

    case 8:
        console.log("It's September");
        break;

    case 9:
        console.log("It's October");
        break;

    case 10:
        console.log("It's November");
        break;

    case 11:
        console.log("It's December");
        break;

    default:
        break;
}

let val1;
val1 = null ?? 10;
console.log(val1);
