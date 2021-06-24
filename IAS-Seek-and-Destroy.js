/*
Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function),
followed by one or more arguments. Remove all elements from the initial array that are of
the same value as these arguments.

Note: You have to use the arguments object.
*/


function destroyer(arr) {

  //extract the values from the argument's array that arrent in the sub array
  let argsOuter = [].slice.call(arguments, 1);
  
  //filter out all items from argsOuter that are in arr
  return arr.filter(item => !argsOuter.includes(item));
}

//-------------------TEST------------------------------------

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
//returns [1,1]

console.log(destroyer(["tree", "hamburger", 53], "tree", 53))
//returns [ 'hamburger' ]
