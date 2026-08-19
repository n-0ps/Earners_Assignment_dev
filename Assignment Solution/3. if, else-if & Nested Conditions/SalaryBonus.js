let salary, exp;
salary = 80000;
exp = 23;

if(exp>=10){
    console.log("Original Salary :", salary);
    console.log("Bonus :", (salary)*0.2);
    console.log("Final Salary :", salary+((salary)*0.2));
}
else if(exp>=5){
    console.log("Original Salary :", salary);
    console.log("Bonus :", (salary)/10);
    console.log("Final Salary :", salary+((salary)/10));
}
else if(exp>=2){
    console.log("Original Salary :", salary);
    console.log("Bonus :", (salary)*0.05);
    console.log("Final Salary :", salary+((salary)*0.05));
}
else if(exp<2){
    console.log("No Bonus");
}