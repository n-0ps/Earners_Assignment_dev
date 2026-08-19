let balance;
let withdrawAmount;

balance = 500;
withdrawAmount = 45;

if (balance > 0 && withdrawAmount <= balance) {
    console.log(
        "Balance: " +balance, "\n"+
        // "Balance: " ${balance},
        "Withdraw: " +withdrawAmount, "\n"+
        "Withdrawal successful", "\n"+
        "Remaining balance:" + (balance-withdrawAmount)
    );
}
else {
    console.log("Insufficient Balance");
}