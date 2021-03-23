/*
Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending.
*/

function truncateString(str, num) {
  //create a variable to store the extracted values
  let beginStr = str.slice(0, num);

  // use a logic operation to return the string truncated or full if the num is equal or higher than the length of the string else return the truncated string
  if (num >= str.length){
    return str
  }
  return `${beginStr}...`
}


//Test the code:

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
// returns A-tisket...

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length))
// returns A-tisket a-tasket A green and yellow basket

console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11))
// returns Peter Piper...

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2))
// returns A-tisket a-tasket A green and yellow basket
