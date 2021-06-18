/*
Implement the filter Method on a Prototype

You might learn a lot about the filter method if you implement your own version of it.
It is recommended you use a for loop or Array.prototype.forEach().

---------------------------------------------------------------------------------------

Write your own Array.prototype.myFilter(), which should behave exactly like 
Array.prototype.filter(). You should not use the built-in filter method. The Array 
instance can be accessed in the myFilter method using this.
*/

// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  //ANSWER:
  //create a new var to store the new array
  var newArray = [];
  
  //iterate through og array with a for loop
  for (let i = 0; i < this.length; i++){
    //use an if statement to filter the actions to perform by the callback fn
    if (callback(this[i]) == true){
      //push the filtered results into the array
      newArray.push(this[i])
    }
  }
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

//TEST
console.log(new_s)
// returns all odd values in the s array [23, 65, 5]
