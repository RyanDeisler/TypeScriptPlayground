//Abstract classes and abstract methods
abstract class BFCU {
  abstract createAccount(): void;
  checkBalance(): number {
    console.log("Regular function check balance was called");
    return 1000;
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

let bfcu = new BFCU_One();
bfcu.createAccount();
bfcu.checkBalance();

let bfcu_two = new BFCU_Two();
bfcu_two.createAccount();
