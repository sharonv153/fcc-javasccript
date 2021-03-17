/*
Return Largest Numbers in ArraysPassed

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/


const largestOfFour = arr => {
  let numA = [];
  let largest = 0;

  //create loop to iterate through main array
  for(let i = 0; i < arr.length; i++){
    //set 'largest' to the first value in inner array to compare with the rest
    largest = arr[i][0];
    //create a loop to iterate through inner arrays
    for (let e = 1; e < arr[i].length; e++){
      //build a conditional statement to get highest number 'numA' by comparing 'largest' variable to current iteration
      if (largest < arr[i][e]){
        largest = arr[i][e]
      }
    }
    /* We set the value of 'largest' into position [i] inside the 'numA' array.
     This will basically only happen when IF is true otherwise the process has nothing to add. */
    numA[i] = largest;
  }
  // Loops are completed and the array is full. Now return the results to the console.
  return numA
}

//test returns [5, 27, 39, 1001]
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

//test returns [9, 35, 97, 1000000]
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]))
