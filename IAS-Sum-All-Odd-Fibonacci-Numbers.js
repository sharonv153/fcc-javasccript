/*
Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd 
Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. 
Every additional number in the sequence is the sum of the 
two previous numbers. The first six numbers of the Fibonacci
sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd 
Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {

  let current = 1;
  let prev = 0;
  let total = 0;

  //use a loop to add numbers till we reach the num
 while (current <= num) {

   //use if statement to filter odd numbers
    if (current % 2 != 0){
      total += current;
    }

    //sum the current number with previous
    current += prev;
    //reduce the previous number by the value of the current
    prev = current - prev;
   //console.log(now);
  } 

  return total; 
}

//------------------------TEST-------------------------------

console.log(sumFibs(4));
//returns 5

console.log(sumFibs(1000));
//returns 1785

console.log(sumFibs(75025));
//returns 135721
