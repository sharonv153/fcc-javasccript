/*
Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.
*/
function truthCheck(collection, pre) {

//create a new variable to assign the result of every iteration in the loop
let answer = false;
  
  //build a for loop to iterate through the object
  for (const a in collection){
    //if the value is in the obj then assign true to variable
    if(collection[a][pre]){
      answer = true;
      //if the value is not in the obj break the loop and return false;
    } else {
      return false;
    }
  } 

    //this line will only run if all turn true
   return answer; 
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
// returns true

console.log(truthCheck([{"single": "yes"}], "single"));
//returns true

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
//returns false
