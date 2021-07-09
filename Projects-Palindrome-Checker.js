/*
Palindrome Checker

Return true if the given string is a palindrome.
Otherwise, return false.

A palindrome is a word or sentence that's spelled
the same way both forward and backward, ignoring 
punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric 
characters (punctuation, spaces and symbols) and 
turn everything into the same case (lower or upper 
case) in order to check for palindromes.

We'll pass strings with varying formats, such as 
racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such 
as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
*/

function palindrome(str) {
  //use replace + regex to remove all char that arent alphanumeric
  str = str.toLowerCase().replace((/[^A-Za-z0-9]\s*/g), "");

  //use slice to create a copy of str and then split it
  let original = str.slice().split("");

  //create a variable to store the reversed string
  let reversed = [];

  //use a for loop to run through the copy of the og array and reverse it
  for(let x = 0, l = original.length; x < l; x++){
    reversed.unshift(original[x]);
  }

  //put back together the reversed array into a string
  reversed = reversed.join("");

  //compare if str and reversed are the same
  return (reversed === str)? true : false;
}



console.log(palindrome("_eye"));
//returns true

console.log(palindrome("A man, a plan, a canal. Panama"));
//returns true

console.log(palindrome("0_0 (: /-\ :) 0-0"));
//returns false

console.log(palindrome("1 eye for of 1 eye."));
//returns false
