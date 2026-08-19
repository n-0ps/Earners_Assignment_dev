let units;
units = 3545;

if (units < 100) {
    console.log(units+ "*(₹5 per unit)= INR", (units*5));
}
else if (units < 200 && units >= 101) {
    console.log("Units: "+units);
    // console.log(units+ "*(First 100 → 100 * 5, Remaining", (units-100),"→" (units-100), "* 5)= INR" , );
    console.log("Original Bill :INR", (100*5)+((units-100)*7));
}
else if (units >= 200) {
    console.log("Units: "+units);
    console.log("Original Bill :INR", (100*5)+(100*7)+((units-200)*100));
    
    let OriginalBill = (100*5)+(100*7)+((units-200)*100);
    if(OriginalBill>2000){
        console.log("Discount : -"+(OriginalBill*0.1));
        console.log("          "+"_________");
        console.log("Final Bill :"+(OriginalBill-(OriginalBill*0.1)));
    }
    
}