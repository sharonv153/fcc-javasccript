/*
DNA Pairing

The DNA strand is missing the pairing element. Take each character,
get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to
the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the 
arrays are grouped into one encapsulating array.
*/

function pairElement(str) {
  let dna = [];

  //split the string so we can then iterate through it
  str = str.split("");

  //use map() to iterate through the str array
  const analysis = str.map(pair => {
    //use switch to add sub arrays into dna based of the item in the iteration
    switch(pair){
      case "A":
        dna.push(["A", "T"]);
        break;
      case "T":
        dna.push(["T", "A"]);
        break;
      case "G":
        dna.push(["G", "C"]);
        break;
      case "C":
        dna.push(["C", "G"]);
        break;
    }
  })

  return dna;
}

//----------------------TEST-------------------------

console.log(pairElement("GCG"));
//returns [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]

console.log(pairElement("TTGAG"));
//returns [ [ 'T', 'A' ],  [ 'T', 'A' ],  [ 'G', 'C' ],  [ 'A', 'T' ],  [ 'G', 'C' ] ]

console.log(pairElement("CTCTA"));
//returns [ [ 'C', 'G' ],  [ 'T', 'A' ],  [ 'C', 'G' ],  [ 'T', 'A' ],  [ 'A', 'T' ] ]
