// Menu Based Calculator
let num1, num2;
num1 = 45;
num2 = 32;

const operator = 2;

switch (operator) {
    case 1 :
        console.log("First Number : ",num1 )
        console.log("First Number : ",num2 )
        console.log("Operator : Addition" )
        console.log("Output : ",num1 + num2)
        
        break;
    case  2:
        console.log("First Number : ",num1 )
        console.log("First Number : ",num2 )
        console.log("Operator : Subtraction")
        console.log("Output : ",num1 - num2)
        break;
    case 3:
        console.log("First Number : ",num1 )
        console.log("First Number : ",num2 )
        console.log("Operator : Multiplication")
        console.log("Output : ",num1 * num2)
        break;
    case 4:
        console.log("First Number : ",num1 )
        console.log("First Number : ",num2 )
        console.log("Operator : Division")
        console.log("Output : ",num1 / num2)
        break;
    case 5 :
        console.log("First Number : ",num1 )
        console.log("First Number : ",num2 )
        console.log("Operator : Modulus")
        console.log("Output : ",num1 % num2)
        break;
    default :
        console.log("Invalid");
        break;
}