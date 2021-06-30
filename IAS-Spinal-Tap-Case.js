/*
Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  //create regex that matches all spaces, _ , and capital letters
  let re = (/\s|_|(?=[A-Z])/);

  //use the regex to define where the string should split, then join using "-" and convert the final result to lower case
  let spinal = str.split(re).join("-").toLowerCase();

  return spinal;
}

//---------------------TEST---------------------

console.log(spinalCase('This Is Spinal Tap'));
//returns this-is-spinal-tap

console.log(spinalCase("thisIsSpinalTap"));
//returns this-is-spinal-tap

console.log(spinalCase("Teletubbies say Eh-oh"));
//returns teletubbies-say-eh-oh

console.log(spinalCase("AllThe-small Things"));
//returns all-the-small-things
