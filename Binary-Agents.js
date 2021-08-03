/*
Binary Agents
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
*/

function binaryAgent(str) {
  //split str into an array
  let binary = str.split(" ");
  //create an empty array to store all numbers converted to decimal system
  let redArr = [];

  //iterate through array, select arr[a] and then separate the items
  for (let a = 0, l = binary.length; a < l; a++){
    //split the string we're iterating through then reverse it (has to do with formula conversion)
    let subBinary = binary[a].split("").reverse();

    //build nested for loop to iterate through subBinary array then compute 
    //now create a sub array with j that will compute arr[b] = binNum X Math.pow(2, b)
    for(let b = 0, l2 = subBinary.length; b < l2; b++){
      //compute binary to decimal formula and then substitute in subBinary[b]
      subBinary[b] = subBinary[b] * Math.pow(2, b);
    }

    //exited the inner for loop, now we have to use reduce() to sum all numbers in sub array
    redArr.push(subBinary.reduce((a, b) => a + b, 0))
  }

  //make use of ascii, translate from decimal to char using String.fromCharCode() and store in new variable letters
  let letters = redArr.map(a => {return String.fromCharCode(a)});

  //join all the char together to build a string and return result
  return letters.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
//returns Aren't bonfires fun!?

binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001");
//returns I love FreeCodeCamp!
