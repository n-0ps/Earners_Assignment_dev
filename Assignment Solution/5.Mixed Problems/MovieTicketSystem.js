let age, numberOfTickets;
age = 17;
numberOfTickets = 3;

if (age < 12) {
    console.log(
        "Age : " + age + "\n" +
        "Tickets : " + numberOfTickets + "\n" +
        "Total : ₹" + (100 * numberOfTickets) + "\n"
    );
}
else if (age >= 12 && age <= 59) {
    console.log(
        "Age : " + age + "\n" +
        "Tickets : " + numberOfTickets + "\n" +
        "Total : ₹" + (200 * numberOfTickets) + "\n"
    );
} else if (age > 60) {
    console.log(
        "Age : " + age + "\n" +
        "Tickets : " + numberOfTickets + "\n" +
        "Total : ₹" + (120 * numberOfTickets) + "\n"
    );
}

