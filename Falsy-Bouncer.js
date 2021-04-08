/*
Falsy Bouncer
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/

// METHOD 1
function bouncer(arr) {
  //create an array with all negative values
  let negative = [false, null, 0, "", undefined, NaN, ''];

  //create a new array to store only positive values
  let others = [];

  for(let i = 0, n = arr.length ; i < n; i++){
//check if arr[i] is in the negative array, if it isn't then add to the others array
    if (negative.includes(arr[i]) == false){
      others.push(arr[i])
    }
  }
  return others;
}

// TEST CODE

console.log(bouncer([7, "ate", "", false, 9]));
// returns [ 7, 'ate', 9 ]

console.log(bouncer([false, null, 0, NaN, undefined, ""]))
// returns []


//----------------------------------------------------------------------------------------

// METHOD 2
// https://www.w3schools.com/jsref/jsref_filter.asp

function bouncer(arr) {
  // use filter function to extract all values other than false
  return arr.filter(Boolean);
}

// TEST CODE:

console.log(bouncer([7, "ate", "", false, 9]));
// return: [ 7, 'ate', 9 ]

console.log(bouncer([null, NaN, 1, 2, undefined]))
// return: [ 1, 2 ]
