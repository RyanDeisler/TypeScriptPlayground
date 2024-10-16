//Abstract classes and abstract methods
//Methods in an abstract class can have a body and fields can be initialized at the start.
abstract class BFCU {
  private balance: number = 0;
  abstract createAccount(): void;
  checkBalance(): number {
    console.log(`The balance of this account is: ${this.balance}`);
    return this.balance;
  }
  constructor(balance: number) {
    this.balance = balance;
  }
}

class BFCU_One extends BFCU {
  createAccount(): void {
    console.log("This is an account for branch one");
  }
}

class BFCU_Two extends BFCU {
  createAccount(): void {
    console.log("This is an account for branch two");
  }
}

let bfcu = new BFCU_One(1500);
bfcu.createAccount();
bfcu.checkBalance();

let bfcu_two = new BFCU_Two(40000);
bfcu_two.createAccount();

//interfaces
//Objects can use an interface as their declared type.
//Interfaces cannot be created with a constructor.
//They cannot use access modifiers.
//All their methods and fields are abstract/uninitialized.
//This is difference from Java in that Java interfaces can have static and final fields.
//Typescript interfaces cannot have static fields.
interface Bank {
  accountNumber?: number;
  customerName: string;
  checkBalance(): void;
}

let bankObject: Bank = {
  accountNumber: 12345,
  customerName: "Ryan",
  checkBalance() {
    console.log("Checking the balance...");
  },
};

console.log(bankObject);
bankObject.checkBalance();

//static properties and methods
//Static properties and methods can be accessed without creating an instance of the class
class AppUtils {
  static baseURL: string = "http://localhost:8080";
  static getExpensesResource() {
    return "/expenses";
  }
}
console.log(AppUtils.baseURL + AppUtils.getExpensesResource());

//union type
//Allows us to declare a type that can hold many types of values

let expenseId: number | string;
expenseId = 19;
console.log(expenseId);
expenseId = "aString!";
console.log(expenseId);

function getDataBasedOnExpenseId(expenseId: number | string) {
  console.log("Fetching the data based on expenseId: ", expenseId);
}
getDataBasedOnExpenseId(123);
getDataBasedOnExpenseId("another string!");
