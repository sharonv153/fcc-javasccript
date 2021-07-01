/*
Search and Replace

Perform a search and replace on the sentence using the arguments provided and
return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you
are replacing it. For example if you mean to replace the word Book with the 
word dog, it should be replaced as Dog
*/

function myReplace(str, before, after) {
  //first find if the word that will be substituted is capitalized, use text with regex
  if((/^[A-Z]/).test(before)){
    //if the first letter of before is capitalized turn after's first letter to upper case
    after = after.charAt(0).toUpperCase().concat(after.slice(1));

  } else {
    //if the first letter of before isn't capitalized turn after's first letter to lower case
    after = after.charAt(0).toLowerCase().concat(after.slice(1));
  }

  //use the replace() to substitute before for after in str
  var subAfter = str.replace(before, after);
  
  return subAfter;
}

//-------------------------------TEST-----------------------------------------------

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
//return A quick brown fox leaped over the lazy dog

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
//returns He is Sitting on the couch

console.log(myReplace("I think we should look up there", "up", "Down"))
//returns I think we should look down there
