/*
Boo who
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/

function booWho(bool) {
  if (typeof bool === "boolean"){
    return true
  } 
  return false;
}

//TEST

booWho(null);
//returns false

booWho(false)
// returns true

booWho({ "a": 1 })
// returns false

booWho(true)
// returns true

booWho("a")
// returns false

