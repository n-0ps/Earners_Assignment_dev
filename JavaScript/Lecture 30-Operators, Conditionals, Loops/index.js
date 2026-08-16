// console.log("Hello Baccho")

//Arithmetic Operators

// let num;
// num = 1;
let num1 = 2;
let num2 = 4;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);  // 2 to the power 4


// case sensitive

let NAME = "neeraj";
let name = "juhi";
let Name = "karan"


let num = 45;
// num++;  //post increment
// ++num; // pre increment 
console.log(++num); //45+1=46 -> pre increment 
console.log(num++); //46 -> post increment
console.log(num);   // 47



let num = 45;
console.log(--num); //45-1=44 -> pre decrement
console.log(num--); //44 -> post decrement
console.log(num);   // 43


let num = 2;
num += 5;
console.log(num);  //7
num -= 5;
console.log(num); // 2
num *= 5;
console.log(num);  //10
num /= 5;
console.log(num); // 2
num %= 5;
console.log(num); // 2
num **= 5;
console.log(num); // 32



const num1 = 3;
const num2 = 6;

console.log(3 > 6); //false
console.log(3 < 6); //true
console.log(3 >= 6); //f
console.log(3 <= 6); //t
console.log(3 == 6); //f
console.log(3 != 6); //t



// loose equality
console.log("5" == 5); // value must be same

// strict equality
console.log("5" === 5); // value and type must be same






console.log(true && false);
console.log(true || false);

const age = 17;
const hasId = true;

const canEnterClub = (age >= 18 && hasId == true);
console.log(canEnterClub);

console.log(!true);  // opposite kar deta hai
console.log(!56); // output: false
console.log(!0); // output: true

console.log("manish" / 60); // output: NaN = Not a Number
console.log(typeof NaN);


// const isLoggedIn = true;

const isLoggedIn = false;
// if(4){ //true
//     console.log("You can like, comment");
// }
// if(2-2){ //false
//     console.log("You can like, comment");
// }
if (isLoggedIn) {
    console.log("You can like, comment");
}
else {
    console.log("Please first login");
}





let temp = 40;

if (temp >= 25) {
    console.log("AC chala do");
} else {
    console.log("AC mat chalao")
}


let day = "monday";

if (day === "monday") {
    console.log("1st day of the week");
}
else if (day === "tuesday") {
    console.log("2nd day of the week");
}
else if (day === "wednesday") {
    console.log("3rd day of the week");
}
else if (day === "thursday") {
    console.log("4th day of the week");
}
else if (day === "friday") {
    console.log("5th day of the week");
}
else if (day === "saturday") {
    console.log("6th day of the week");
}
else if (day === "sunday") {
    console.log("7th day of the week");
}
else {
    console.log("Wrong day");
}






// score to grade convert












// nestedif else jio hotstar


const isLoggedIn = true;
const isSubscribed = false;

if (isLoggedIn) {
    if (isSubscribed) {
        console.log{
            "You can access premium content"
        }
    }
    else {
        console.log("You don't have any premium plan to access this content")
    }
}
else {
    console.log("Please login")
}




// switch case

const day = "fri";

switch (day) {
    case "non";
        console.log("1st day of the week")
        break;
    case "tue";
        console.log("2nd day of the week")
        break;
    case "wed";
        console.log("3rd day of the week")
        break;
    case "thur";
        console.log("4th day of the week")
        break;
    case "fri";
        console.log("5th day of the week")
        break;
    case "sat";
        console.log("6th day of the week")
        break;
    case "sun";
        console.log("7th day of the week")
        break;
    default :6
        console.log("wrong day");
}