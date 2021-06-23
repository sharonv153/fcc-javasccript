/*
Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers
plus the sum of all the numbers between them. The lowest number will not
always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers
between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {

//first, sort the array given
arr = arr.sort((x, y) => x - y);

   //create a new global variable to store the numbers in an array
  let numArr = [];

  //use for loop to create an array with numbers arr[0] to arr[1] and store values in numArray
   for (let i = arr[0]; i <= arr[1]; i++){
    numArr.push(i);
  }

//use reduce() to iterate through array and summ all numbers
 const sumAll = numArr.reduce((sum, number) => sum + number, 0)


  //return the variable where sum was stored
  return sumAll;
}


//TESTS
console.log(sumAll([1, 4]));
//returns 10

console.log(sumAll([4, 1]));
//returns 10

console.log(sumAll([10, 5]));
//returns 45
