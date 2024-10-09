console.log("Hello World!!");

//What is typescript?
//It is an open source programming language created by Microsoft
//It is a superset of JavaScript
//TypeScript provides static typing, classes, interfaces

//Differences between
//1. statically typed - variable type is determined at compile time.  JS is dynamically typed, variable type is determined at runtime
//2. Type annotations - the ability to declare the type of a variable at runtime (a: string, b: number): null
//3. Compile time errors - errors can be caught at compile time
//4. ES6 and Beyond - TS supports all ES6 features and can be transpiled to older versions of JavaScript

//Let is block-scoped.  It can only be accessed in the block where it is defined.
let myName: string = "Ryan";
//A const value cannot be changed once assigned.
const API_VERSION: string = "v2";
//Var is function scoped or globally scoped.  It can be accessed throughout the script.
var myAge: number = 32;

console.log(myAge, myName, API_VERSION);

//TypeScript Data types

//Basic Types
// number - integers and floats
let myFavNumber: number = 17;
let float: number = 200.34562;
console.log(myFavNumber, float.toFixed(1));

// string - a piece of text that can be made of alphabetical characters, numbers, and symbols
let myCity: string = `Smithtown - ${myName}`;
console.log(myCity);

// boolean - true or false value
let isAuthenticated: boolean = true;
if (isAuthenticated) {
  console.log("Display the menu bar");
}

// any - the value of this variable can be any type.  Useful when we do not know the type of the variable at compile time
let myFavMovie: any = "Forest Gump";
myFavMovie = 123;
console.log(myFavMovie);

// void - generally for functions that don't return anything.  Represents the absence of any value
const myFunction = (): void => {
  console.log("This is returning void");
};
myFunction();

// null - also represents the absence of a value.  You can initialize a variable to null.
let myCountry: null = null;

// undefined - represents a variable that hasn't been initialized.  However, you can also initialize a variable to undefined, like null.
let myState: undefined = undefined;

// never - represents a value that is never going to occur.  For example, a function that always throws an exception would never return a value, so we can put never as the returned type.
const handleException = (): never => {
  throw Error("Throwing the error");
};

// unknown - represents a variable that could be any type, similar to 'any' annotation.  The difference is that this type is safer.  It is safer because if we try to use the unknown typed variable it will force us to do a type-check
let mySalary: unknown = 1234.1234;
if (typeof mySalary === "number") {
  console.log(mySalary.toFixed(2));
}

// Array types
let cityNames: string[] = ["new york", "smithtown", "jersey city"];
console.log(cityNames);

// Tuple types - an array with fixed length and type
type LoginForm = [string, string];
let loginForm: LoginForm = ["email@example.com", "pwd"];
function handleSubmit(loginForm: LoginForm): void {
  const [email, pwd] = loginForm;
  console.log(email, pwd, loginForm[0]);
}
handleSubmit(loginForm);

// Enum types - named constants
enum Category {
  Entertainment = "entertainment",
  Movies = "movies",
  Lifestyle = "lifestyle",
  Food = "food",
}

let selectedCategory: Category = Category.Lifestyle;
console.log(selectedCategory);

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
