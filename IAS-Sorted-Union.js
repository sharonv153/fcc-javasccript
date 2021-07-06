/*
Sorted Union

Write a function that takes two or more arrays and returns 
a new array of unique values in the order of the original 
provided arrays.

In other words, all values present from all arrays should 
be included in their original order, but with no duplicates 
in the final array.

The unique numbers should be sorted by their original order,
but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/

//add ... to turn the arguments into 1 array that joins all items in the argument
function uniteUnique(...arr) {

  let finalArr = [];

  //iterate through main array
  for (var a = 0, l1 = arr.length; a < l1; a++){
    //iterate through sub array
    for (var b = 0, l2 = arr[a].length; b < l2; b++){
      //check if the number in this iteration is already in the final array, if not add
      if(finalArr.indexOf(arr[a][b]) == -1){
        finalArr.push(arr[a][b]);
      }
    }
  }

  return finalArr;
}

//-------------------------TEST---------------------------------

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
//returns [ 1, 3, 2, 5, 4 ]

console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
//returns [ 1, 2, 3, 5 ]

console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
//returns [ 1, 2, 3, 5, 4, 6, 7, 8 ]
