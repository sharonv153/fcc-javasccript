/*
Finders Keepers
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, 
return undefined.
*/

function findElement(arr, func) {
let  answer;

//we'll iterate through the array and run in the function to see it meets the condition
  for (let i = 0; i < arr.length; i++){
    let num = arr[i]
    if (func(arr[i])){
      return answer = arr[i];
    } 
    }
    //if the loop ran through all the arr without executing the IF statement then return undefined
  return undefined;
}

// TEST THE CODE:

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
// returns 2

console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }))
// returns undefined

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }))
// returns 8


/*ALTERNATIVE SOLUTION*/
// make use of .find() to run the array elements into the function
function findElement(arr, func) {
  return arr.find(func);
}

/* Read more about .find() here -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find */
