// Shopping Bill

let Quantity;
let Prod1, Prod2;
let Prod1Price, Prod2Price;
let Discount;
let Total;

Prod1 = "Jeans";
Prod2 = "Shirt";
Prod1Price = 1599;
Prod2Price = 1899;

console.log("Ambience Mall");
console.log("Delhi, India");
console.log("Products" , "Price");
console.log(Prod1, "=INR", Prod1Price);
console.log(Prod2, "=INR", Prod2Price);
console.log("         ","_________");
console.log("Total", "=INR" ,Prod1Price+Prod2Price);

Discount = (Prod1Price+Prod2Price)/10;
Total = Prod1Price+Prod2Price;

console.log("Discount", "= -" +Discount);
console.log("         ","_________");
console.log("Final Amount", "= INR", (Total)-(Discount));



