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

//TESTING CODE

console.log(titleCase("I'm a little tea pot"));
//return I'm A Little Tea Pot
console.log(titleCase("sHoRt AnD sToUt"))
// return Short And Stout


//---------------------------------------------------------------------------

//SHORTER SOLUTION:

function titleCase(str) {
  // lower case everything and then use regex to find A-Z & a-z that are at the begining to then replace with the function of L
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase())
  }


//TEST THE CODE

console.log(titleCase("I'm a little tea pot"));
//return I'm A Little Tea Pot
console.log(titleCase("sHoRt AnD sToUt"))
// return Short And Stout

