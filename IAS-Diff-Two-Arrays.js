/*
Diff Two Arrays
Compare two arrays and return a new array with any items only found in
one of the two given arrays, but not both. In other words, return the
symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/
//METHOD 1
function diffArray(arr1, arr2) {
  var newArr = [];
  
  //combine both arrays into one in a separate variable
  var combined = arr1.concat(arr2);

//iterate through the concat array
  for (let a = 0; a < combined.length; a++){
    //check if any numbers of arr1 aren't in combined
     if(arr1.includes(combined[a], 0) === false){
       newArr.push(combined[a]);
       //now check if any numbers if arr2 aren't in combined
     } else if (arr2.includes(combined[a], 0) === false){
       newArr.push(combined[a]);
     }
  }
  
  return newArr;
}

//--------------------------------------------------

//METHOD 2
function diffArray(arr1, arr2) {

  //create a variable that combines both arrays
  let together = arr1.concat(arr2);

  //use the filter() method to iterate and extract everything in together that's not in arr1 and arr2
  return together.filter(
    item => !arr1.includes(item) || !arr2.includes(item)
    );
}

//---------------------------------------------------

//TEST
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
//returns [4]
