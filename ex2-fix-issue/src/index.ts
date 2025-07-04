export class BankAccount {
  private name: string;
  private balance: number;
  private isLocked: boolean;

  constructor(name: string, balance: number) {
    this.name = name;
    this.balance = balance;
    this.isLocked = false;
  }

  /**
   * Transfers money from this account to another account.
   * @param toAccount The account to transfer money to.
   * @param amount The amount to transfer.
   */
  async transfer(toAccount: BankAccount, amount: number): Promise<void> {
    // Simulate locking both accounts
    while (this.isLocked || toAccount.isLocked) {
      await new Promise((resolve) => setTimeout(resolve, 10)); // Wait for locks to be released
    }

    this.isLocked = true;
    console.log(`Lock acquired on ${this.name}`);
    await new Promise((resolve) => setTimeout(resolve, 10)); // Simulate processing delay

    toAccount.isLocked = true;
    console.log(`Lock acquired on ${toAccount.name}`);

    try {
      if (this.balance >= amount) {
        this.balance -= amount;
        toAccount.balance += amount;
        console.log(
          `Transferred ${amount} from ${this.name} to ${toAccount.name}.`
        );
      } else {
        console.log(
          `Insufficient funds in ${this.name} to transfer ${amount}.`
        );
      }
    } finally {
      // Release locks
      this.isLocked = false;
      toAccount.isLocked = false;
      console.log(`Locks released on ${this.name} and ${toAccount.name}`);
    }
  }

  /**
   * Prints the current balance of the account.
   */
  printBalance(): void {
    console.log(`${this.name} balance: ${this.balance}`);
  }
}

/**
 * Handles money transfer between two accounts using asynchronous functions.
 * @param account1 The first account.
 * @param account2 The second account.
 */
export async function performTransfers(
  account1: BankAccount,
  account2: BankAccount
): Promise<void> {
  const transfers: Promise<void>[] = [];
  for (let i = 0; i < 1; ++i) {
    transfers.push(account1.transfer(account2, 100.0));
    transfers.push(account2.transfer(account1, 200.0));
  }
  await Promise.all(transfers);
}

(async () => {
  const account1 = new BankAccount("Account1", 1000.0);
  const account2 = new BankAccount("Account2", 1000.0);

  await performTransfers(account1, account2);

  account1.printBalance();
  account2.printBalance();
})();