let studentName, rollNumber ,mathMarks ,scienceMarks ,englishMarks;
studentName = "Neeraj";
rollNumber = 101;
mathMarks = 85;
scienceMarks = 78;
englishMarks = 92;


console.log("_______________________");
console.log("STUDENT RESULT");
console.log("_______________________");
console.log("  ");
console.log("Name       :"+studentName);
console.log("Roll No    :"+rollNumber);
console.log("  ");
console.log("Math       :"+mathMarks);
console.log("Science    :"+scienceMarks);
console.log("English    :"+englishMarks);
console.log("  ");
console.log("Total      :"+(englishMarks+scienceMarks+mathMarks));
console.log("Percentage :"+(englishMarks+scienceMarks+mathMarks)/3+"%");



//Grade

let perc;
perc = (englishMarks+scienceMarks+mathMarks)/3;

if(perc >= 90 && perc <= 100){
    console.log("Grade A");
}
else if(perc >= 80 && perc <= 89){
    console.log("Grade B");
}
else if(perc >= 70 && perc <= 79){
    console.log("Grade C");
}
else if(perc >= 60 && perc <= 69){
    console.log("Grade D");
}
else if(perc >= 40 && perc <= 59){
    console.log("Grade E");
}
else if(perc < 40){
    console.log("Grade F");
}


// Result
if(mathMarks>=40 && scienceMarks>=40 && englishMarks>=40) {
    console.log("Result : Pass");   
}
else {
    console.log("Result : Fail");
}

console.log("_______________________");