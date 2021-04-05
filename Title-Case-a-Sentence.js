/*
Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

function titleCase(str) {
  //separate the string and make all lower case
  let spltStr = str.toLowerCase().split(" ")

//iterate through array (list) and split each word in the array to then replace first letter and then join back
  for (let i = 0; i < spltStr.length; i++){
    spltStr[i] = spltStr[i].split("")
    spltStr[i][0] = spltStr[i][0].toUpperCase()
    spltStr[i] = spltStr[i].join("")
  }

  // put the whole sentence back together and return value
  let joinStr = spltStr.join(" ");
  return joinStr;
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"))
