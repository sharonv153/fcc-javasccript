/*
Steamroller

Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
  //use a new variable to store the items in the array
  let newArr = [];
  
  //use mapping to iterate through array
  arr.map(function mapping(i){
    //determine if current item is an array
    if(Array.isArray(i)){
      //if it is then iterate through it
      return i.map(mapping);
    } else {
      //if it isn't an array add the value to the new variable
      newArr.push(i);
    }
  })

  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
//return [1, 2, 3, 4]

steamrollArray([[["a"]], [["b"]]])
//returns ["a", "b"]
