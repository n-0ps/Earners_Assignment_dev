//Take:
//age
//hasLicense
//A person can drive only when:
//● Age is 18 or above
//● They have a valid license

let age;
age = 45;
const hasLicense = true;

if(age>=18 && hasLicense){
    console.log("Eligible to drive");
}
else {
    console.log("Not Eligible to drive");
}