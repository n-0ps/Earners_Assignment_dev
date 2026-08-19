let sub1, sub2, sub3;
sub1 = 45;
sub2 = 67;
sub3 = 87;
avg = (sub1+sub2+sub3)/3;
if(sub1>=40 && sub2>=40 && sub3>=40) {
    // console.log("Pass");
    if(avg >= 75){
        console.log("Distinction");
    }
    else if(avg >= 60){
        console.log("First Division");
    }
    else if(avg >= 50){
        console.log("Second Division");
    }
    else if(avg<50){
        console.log("Pass");
    }
}
else {
    console.log("Fail");
}