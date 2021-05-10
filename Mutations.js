/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
*/

function mutation(arr) {
  let word1 = arr[0].toLowerCase().split("");
  let word2 = arr[1].toLowerCase().split("");

  let n = word2.length;
  let answer;

  for (let i = 0; i < n; i++){
    if (word1.indexOf(word2[i]) !== -1){
      answer = true;
    } else {
      return false;
    }
  }
  return answer;
}

console.log(mutation(["hello", "hey"]));
// return false

console.log(mutation(["Mary", "Army"]));
// return true

console.log(mutation(["floor", "for"]));
// return true

console.log(mutation(["voodoo", "no"]));
// return false
