/*
Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the 
purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

function confirmEnding(str, target) {
    // split the string and extract the last items based of the length of 'target'
  let splitStr = str.slice(-target.length);
    // check if the extracted letters from 'str' are equal to the contents of 'target'
  return splitStr === target ? true : false;
}

//returns True
console.log(confirmEnding("Bastian", "n"));

//returns False
console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"))
