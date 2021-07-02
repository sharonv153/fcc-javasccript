/*
Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  //turn the string into an array
  str = str.split("");

  for(let i = 0, l = str.length; i < l; i++){
    //convert each letter into ascii
    let iLower = str[i].charCodeAt(0);
    //use if statement to find if the current number is not equal to str[0] + i (current iteration #)
   if(iLower !== (str[0].charCodeAt(0) + i)) {
     //if it isn't then substract 1 from iLower and use return to break the loop
      return String.fromCharCode(iLower-1);
    }
  }
}

console.log(fearNotLetter("abce"));
//return d

console.log(fearNotLetter("stvwx"));
//return u

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
//return undefined
