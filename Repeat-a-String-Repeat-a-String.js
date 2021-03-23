/*
Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number. For the purpose of 
this challenge, do not use the built-in .repeat() method.
*/

function repeatStringNumTimes(str, num) {
  // start a variable with an empty array
  let repeat = [];

  /* use a while loop that runs until variable i reaches the value of num,
  every time the loop runs add the value of str into the repeat array */
  while (0 < num){
    repeat.push(str);
    i++;
  }

  // because we have an array we now use join to turn the array into a string
  return repeat.join('')
}



console.log(repeatStringNumTimes("abc", 3));
// returns string abcabcabc

console.log(repeatStringNumTimes("*", 8));
// returns string ********
