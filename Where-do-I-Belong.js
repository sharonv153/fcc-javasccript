/*
Where do I Belong
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/

function getIndexToIns(arr, num) {
  let ordenado = arr.sort()
  let indexNum = 0;
  
  // iterate through array
  for(var i = 0; i < ordenado.length; i++){
    // if number is greater than that of current iteration then +1 to the count
    if (num > ordenado[i]){
      indexNum++
    }
  }
  return indexNum;
}

console.log(getIndexToIns([40, 60], 50));
// returns 1

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
// returns 3

console.log(getIndexToIns([5, 3, 20, 3], 5));
// returns 2
