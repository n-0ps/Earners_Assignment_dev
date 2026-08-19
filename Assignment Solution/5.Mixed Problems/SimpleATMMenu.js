// 1. Check Balance
// 2. Deposit Money
// 3. Withdraw Money
// 4. Exit
// Use switch-case.
// Rules:
// ● Check Balance → Display current balance
// ● Deposit → Add money to balance
// ● Withdraw → Check whether sufficient balance exists
// ● Exit → Display a goodbye message
// ● Invalid choice → Display an error message



let balance;
let withdrawAmount;
let Action;

balance = 500;
withdrawAmount = 45;
Action = "Deposit"


switch (Action) {
    case "Balance": {
        console.log(balance);
    }
        break;

    case "Deposit": {
        let Desposit;
        Deposit = 76;
        console.log("Deposit Amount :"+Deposit);
        console.log("Final Balance :"+(Deposit+balance));
    }
        break;



    case "Withdraw": {
        if (balance > 0 && withdrawAmount <= balance) {
            console.log(
                "Balance: " + balance, "\n" +
                // "Balance: " ${balance},
                "Withdraw: " + withdrawAmount, "\n" +
            "Withdrawal successful", "\n" +
            "Remaining balance:" + (balance - withdrawAmount)
            );
        }
        else {
            console.log("Insufficient Balance");
        }
    }
        break;


    case "Exit": {
        console.log("Goodbye");
    }
        break;



    default: {
        console.log("Invalid choice");
    }
}

