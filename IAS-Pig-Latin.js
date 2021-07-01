/*
Pig Latin

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant
cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed
to be English words in all lowercase.
*/


function translatePigLatin(str) {
  //find if str starts with a vowel
  if (str.match(/^[aeiou]/i)){
      //if it starts with a vowel add "way" at the end
      return str.concat("way")
//find if str has a vowel in it
  } else if (str.match(/[aeiou]/i)){
      //assign in a variable the position of the first vowel in the str
      let strArr = str.match(/[aeiou]/i);
      //convert str to an array and extract the first consonants and then add "ay"
      let consonants = str.split("").slice(0, strArr.index).concat("ay");
      //in a new variable extract the first consonants and then concatenate them to the array and then join back into a string 
      let pigLatin = str.split("").slice(strArr.index,).concat(consonants).join("");
    
      return pigLatin;   

  } else {
      //for strings that don't start or contain a vowel only add "ay" at the end
      return str.concat("ay");

  }
}

//-----------------------------TEST-----------------------------

console.log(translatePigLatin("consonant"));
//return onsonantcay

console.log(translatePigLatin("algorithm"));
//return algorithmway

console.log(translatePigLatin("california"));
//return aliforniacay

console.log(translatePigLatin("glove"));
//return oveglay

console.log(translatePigLatin("schwartz"));
//return artzschway

console.log(translatePigLatin("rhythm"));
//return rhythmay
