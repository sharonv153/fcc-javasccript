/*
Convert HTML Entities
Convert the characters &, <, >, " (double quote), 
and ' (apostrophe), in a string to their 
corresponding HTML entities.
*/
//----------METHOD 1: USING A FOR LOOP-----------------------

function convertHTML(str) {
  //turn the string into an array to iterate through it later
  let strArr = str.split("");
  
  //iterate through it with a loop
  for(let i = 0, l = strArr.length; i < l; i++){
    //use switch to convert items when found
    switch(strArr[i]){
      case "&":
      strArr[i] = "&amp;";
      break;
    case "<":
      strArr[i] = "&lt;";
      break;
    case ">":
      strArr[i] = "&gt;";
      break;
    case '"':
      strArr[i] = "&quot;";
      break;
    case "'":
      strArr[i] = "&apos;";
      break;
      //use default to process all other letters and spaces
    default:
      break;
    }
  }
  //merge everything back together 
  return strArr.join("");
}

//----------------METHOD 2: USING MAP()--------------------------
function convertHTML(str) {
  //turn the string into an array to iterate through it with map()
  let strArr = str.split("").map(i => {
    //use switch to convert items when found
    switch(i){
      case "&":
      i = "&amp;";
      break;
    case "<":
      i = "&lt;";
      break;
    case ">":
      i = "&gt;";
      break;
    case '"':
      i = "&quot;";
      break;
    case "'":
      i = "&apos;";
      break;
      //use default to process all other letters and spaces
    default:
      break;
    }
    return i;
    //merge everything back together 
    }).join("");
  
  return strArr;
}

//----------------------TEST-----------------------------

console.log(convertHTML("Dolce & Gabbana"));
//returns Dolce &amp; Gabbana

console.log(convertHTML('Stuff in "quotation marks"'));
//returns Stuff in &quot;quotation marks&quot;
