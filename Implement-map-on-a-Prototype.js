/*
Implement map on a Prototype
As you have seen from applying Array.prototype.map(), or simply map() earlier, the map method returns an array of the same length as the one it was called on. It also doesn't alter the original array, as long as its callback function doesn't.

In other words, map is a pure function, and its output depends solely on its inputs. Plus, it takes another function as its argument.

You might learn a lot about the map method if you implement your own version of it. It is recommended you use a for loop or Array.prototype.forEach().

Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You should not use the built-in map method. The Array instance can be accessed in the myMap method using this.
*/

// METHOD 1
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  // ANSWER BELOW
  for (let i = 0; i < this.length; i++){
    newArray.push(callback(this[i])); 
    /*In here I used THIS to reference to the argument and then used callback to refer back to the action that would be used in*/
  }
  //ANSWER ABOVE
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});

console.log(new_s)
//returns [ 46, 130, 196, 10 ]

//-----------------------------------------------------------------------------

//METHOD 2
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  // ANSWER BELOW
  this.forEach(a => newArray.push(callback(a))); //used Array.prototype.forEach()
  // ANSWER ABOVE
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});
