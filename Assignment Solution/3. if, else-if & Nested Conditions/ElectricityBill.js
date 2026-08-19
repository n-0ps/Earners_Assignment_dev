let units;
units = 145;

if (units < 100) {
    console.log(units+ "*(₹5 per unit)= INR", (units*5));
}
else if (units < 200 && units >= 101) {
    // console.log(units+ "*(First 100 → 100 * 5, Remaining", (units-100),"→" (units-100), "* 5)= INR" , );
    console.log("INR", (100*5)+((units-100)*7));
}
else if (units >= 200) {
    console.log("INR", (100*5)+(100*7)((units-200)*100));
}