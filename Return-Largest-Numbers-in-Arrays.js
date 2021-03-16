/*
Return Largest Numbers in ArraysPassed

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/



function largestOfFour(arr) {
let maxNum = 0
let numArr = [];

for (let i = 0; i < arr.length; i++){
  maxNum = arr[i][0];
  for (let h = 0; h < arr[i].length; h++){
    if (maxNum < arr[i][h]){
      numArr = arr[i][h]
    }
  }
  return numArr[i] = maxNum 
}
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]))
