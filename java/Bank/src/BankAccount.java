public class BankAccount {
    private double balance;
    private String accountNumber;

    // Constructor
    public BankAccount(String accountNumber) {
        this.accountNumber = accountNumber;
        this.balance = 0.0; // Initialize balance to zero
    }

    // Method to deposit money into the account
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println(amount + " deposited successfully.");
        } else {
            System.out.println("Invalid amount. Deposit failed.");
        }
    }

    // Method to withdraw money from the account
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println(amount + " withdrawn successfully.");
        } else {
            System.out.println("Insufficient funds or invalid amount. Withdrawal failed.");
        }
    }

    // Method to check the account balance
    public double getBalance() {
        return balance;
    }

    // Method to get the account number
    public String getAccountNumber() {
        return accountNumber;
    }

    public static void main(String[] args) {
        // Example usage of the BankAccount class
        BankAccount account = new BankAccount("1234567890");

        // Display account number
        System.out.println("Account Number: " + account.getAccountNumber());

        // Deposit some money
        account.deposit(1000);

        // Withdraw some money
        account.withdraw(500);

        // Check the balance
        System.out.println("Account Balance: $" + account.getBalance());
    }
}
