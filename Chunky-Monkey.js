/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/ 

 function chunkArrayInGroups(arr, size) {
   let portion = [];

   do {
   portion.push(arr.splice(0, size));
   } 
   while(arr.length > size);

   portion.push(arr);
    
   return portion;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// return  [ [ 'a', 'b' ], [ 'c', 'd' ] ]

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
// return [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ] ]
