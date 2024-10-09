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
