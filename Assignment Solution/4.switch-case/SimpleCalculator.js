// Simple Calculator
let num1, num2;
num1 = 45;
num2 = 32;

const operator = '+';

switch (operator) {
    case '/' :
        console.log("First Number : ",num1 )
        console.log("First Number : ",num2 )
        console.log("Operator : ",operator )
        console.log("Output : ",num1 / num2)
        
        break;
    case  '+':
        console.log("First Number : ",num1 )
        console.log("First Number : ",num2 )
        console.log("Operator : ",operator )
        console.log("Output : ",num1 + num2)
        break;
    case '-':
        console.log("First Number : ",num1 )
        console.log("First Number : ",num2 )
        console.log("Operator : ",operator )
        console.log("Output : ",num1 - num2)
        break;
    case '*':
        console.log("First Number : ",num1 )
        console.log("First Number : ",num2 )
        console.log("Operator : ",operator )
        console.log("Output : ",num1 * num2)
        break;
    case '%' :
        console.log("First Number : ",num1 )
        console.log("First Number : ",num2 )
        console.log("Operator : ",operator )
        console.log("Output : ",num1 % num2)
        break;
    default :
        console.log("Invalid");
        break;
}