//Notice that the default function does not have to be imported with curly braces
//And it can be imported with ANY name
//If an imported function is not default then it's name can be changed with the 'as' keyword
import theDefaultFunction, {
  createExpense as createFunction,
  getExpenses,
} from "./expense";

getExpenses();
createFunction();
theDefaultFunction();
