/*
Slice and Splice
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
*/
// METHOD 1
function frankenSplice(arr1, arr2, n) {

  let arr2Copy = arr2.slice() //if no numbers are entered in range slice(start, end) then the whole array is selected
  
  //set to decrement and go in reverse (start from end of list to the begini)
  for(let i = arr1.length - 1; i >= 0; i--){
    arr2Copy.splice(n, 0, arr1[i]);
  }
  return arr2Copy;
}

// TEST CODE:
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
// returns: [ 4, 1, 2, 3, 5, 6 ]

console.log(frankenSplice([1, 2], ["a", "b"], 1))
// returns: [ 'a', 1, 2, 'b' ]

//------------------------------------------------------------------------

// METHOD 2
function frankenSplice(arr1, arr2, n) {

  let arr2Copy = arr2.slice() //if no numbers are entered in range slice(start, end) then the whole array is selected

    arr2Copy.splice(n, 0, ...arr1); // use spread syntax ... instead of a for loop to iterate**

    return arr2Copy

}

// TEST CODE:
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2))
// returns: [ 'head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes' ]


// ** https://www.freecodecamp.org/news/an-introduction-to-spread-syntax-in-javascript-fba39595922c/


