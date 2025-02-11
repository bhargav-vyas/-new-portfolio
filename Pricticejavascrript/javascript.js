console.log("<<<<<<<<<<<<<<<<<<<<function>>>>>>>>>>>>>>>>>");

function f1(num1, num2) {
    console.log("num1 + num2 = " + (num1 + num2)); // Fix concatenation issue
    console.log(`Result = ${num1 + num2}`);

}

f1(10, 20);
console.log("<<<<<<<<<<<<<<<<<<<< Switch case>>>>>>>>>>>>>>>>>");
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log( "Today day" + day);


let num =1 ;

switch (3) {
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
        case 3:
            console.log("3");
}

console.log("<<<<<<<<<<<<<<<<<<<< function with return type>>>>>>>>>>>>>>>>>");

function f2(num1, num2) {
    let c = num1 + num2;
    return c;    
}
let res =f2(10, 20);
console.log(res);