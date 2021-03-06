/*
Factorialize a NumberPassed
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.
*/

//declare the function and set the name with its parameter
function factorialize (num){
  let fact = num;

 //use an if statement to select cases in which the number is zero where factor is 1
  if(num < 1){
    fact = 1;
  }
 //if the number is't zero then run the equation
  for (let i = 1; i < num; i++){
    fact = fact * i;
  }
  return fact;
}

//test the function with zero, returns 1
console.log(factorialize(0));

//test the function with 5, returns 120
console.log(factorialize(5));
