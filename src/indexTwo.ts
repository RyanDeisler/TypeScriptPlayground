//Function overloading
function log(message: string): void;
function log(object: object): void;
function log(statusCode: number): void;
function log(arg: any): void {
  if (typeof arg === "string") {
    console.log("This is a simple message");
  } else if (typeof arg === "number") {
    console.log(`API response is ${arg}`);
  } else {
    console.log(JSON.stringify(arg));
  }
}

log("ryan");
log(201);
log({ name: "Ryan", age: 27 });

//Classes, objects and constructors
class AtmMachine {
  //members
  //properties => member variables => variables
  //behaviors => methods => functions
  name: string;
  accNumber: number;
  balance: number;

  constructor(name: string, accNumber: number, balance: number) {
    this.name = name;
    this.accNumber = accNumber;
    this.balance = balance;
  }

  checkBalance() {
    return this.balance;
  }
}

let sbiMachine = new AtmMachine("Ryan", 123, 400000.99);
console.log(sbiMachine.checkBalance());

//Inheritance
class MainBranch {
  accountNumber: number;
  constructor(accountNumber: number) {
    this.accountNumber = accountNumber;
  }

  createAccount(): void {
    console.log("Account is created: ", this.accountNumber);
  }

  getCarLoan(): void {
    console.log("We provide car loans with an interest rate of 12%");
  }
}

class BranchOne extends MainBranch {
  constructor(accountNumber: number) {
    super(accountNumber);
  }

  getCarLoan(): void {
    console.log("We provide car loans with an 11% interest rate");
  }
}

class BranchTwo extends MainBranch {
  interestRate: number;
  getCarLoan(): void {
    console.log("The car loan interest rate is: ", this.interestRate);
  }
  constructor(accountNumber: number, interestRate: number) {
    super(accountNumber);
    this.interestRate = interestRate;
  }
}

let mainBranchCustomer = new MainBranch(532);
mainBranchCustomer.getCarLoan();

let newCustomer = new BranchOne(1234);
newCustomer.createAccount();
newCustomer.getCarLoan();

let newCustomerBranchTwo = new BranchTwo(231, 4.4);
newCustomerBranchTwo.createAccount();
newCustomerBranchTwo.getCarLoan();
