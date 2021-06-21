/*
Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem

Complete the code for the squareList function using any combination of map(),
filter(), and reduce(). The function should return a new array containing the
squares of only the positive integers (decimal numbers are not integers) when
an array of real numbers is passed to it. An example of an array of real
numbers is [-3, 4.8, 5, 3, -3.2].
*/

//METHOD 1
const squareList = arr => {
  
  //assign a value to a variable and use filter() and map()
  var positive = 
    arr
    // filter the array by removing all negative numbers and odd numbers
    .filter(numbers => numbers > 0 && numbers % parseInt(numbers) === 0)
    // iterate through array of numbers left and square them
    .map(numbers => Math.pow(numbers, 2));

  return positive;
};

//-------------------------------------------------------------

//METHOD 2
const squareList = arr => {
  
// use the reduce method to solve and use a self executing function
  return arr.reduce((sqr, numb) => {
    //use conditional operator to fix issue 
      return Number.isInteger(numb) && numb > 0 ?
       //is condition is true then get number squared and concat to array
       sqr.concat(numb * numb): sqr;
    }, [])

};

//--------------------------------------------------------------

//TEST ANSWER:
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
//returns [25, 9]

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers);
//returns [16, 1764, 36]
