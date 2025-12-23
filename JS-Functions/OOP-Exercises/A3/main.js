// A3. Encapsulation with Private Fields
class BankAccount {
  #balance = 0;

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
    } else if (amount > this.#balance) {
      console.log("Insufficient balance!");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

// Test
const acc = new BankAccount("Nurlan");
acc.deposit(100);
acc.withdraw(30);
console.log(acc.getBalance()); // 70

acc.withdraw(100); // Should log insufficient balance