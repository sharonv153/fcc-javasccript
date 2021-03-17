/* Find the Longest Word in a StringPassed

Return the length of the longest word in the provided sentence.

Your response should be a number. */

//METHOD 1

const findLongestWordLength = (str) => {
  //split the string and turn into an array
  let words = str.split(' ');
  //create a variable that will hold the count of the string with max number of characters
  let longest = 0;

  //create a for loop to iterate through the "words" array
  for (let i = 0; i < words.length; i++){
    //if the length of the string in position [i] in the array is greater than the value of longest, then replace with new number
    if(longest < words[i].length) {
        longest = words[i].length
      } 
    }
  return longest;
}

/*-----------------------------------------------------------------------------------------------------------------------*/

// METHOD 2

function findLongestWordLength(str) {
  //split the string and turn into an array
  let words = str.split(' ');
  
  //use reduce to run the Math.max() function through every value of the array 'words' (runs from left to right)
  return words.reduce(function(longest, word){
    //The 0 after the callback function, is used to give an initial value to the longest, so that Math.max will know where to start.
    return Math.max(longest, word.length)
  }, 0)
}


/*-----------------------------------------------------------------------------------------------------------------------*/

//test should return 6
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

//test should return 19
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"))

//test should return 8
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"))
