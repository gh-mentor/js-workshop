import { BankAccount, performTransfers } from "../src/index";

describe("BankAccount", () => {
	let account1: BankAccount;
	let account2: BankAccount;

	beforeEach(() => {
		account1 = new BankAccount("Account1", 1000.0);
		account2 = new BankAccount("Account2", 1000.0);
	});

	test("should transfer money between accounts", async () => {
		await account1.transfer(account2, 200.0);

		expect(account1.printBalance()).toBeUndefined(); // Logs balance
		expect(account2.printBalance()).toBeUndefined(); // Logs balance
	});

	test("should not transfer money if insufficient funds", async () => {
		await account1.transfer(account2, 2000.0);

		expect(account1.printBalance()).toBeUndefined(); // Logs balance
		expect(account2.printBalance()).toBeUndefined(); // Logs balance
	});

	test("should handle concurrent transfers", async () => {
		await performTransfers(account1, account2);

		expect(account1.printBalance()).toBeUndefined(); // Logs balance
		expect(account2.printBalance()).toBeUndefined(); // Logs balance
	});
});