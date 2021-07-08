/*
Sum All Primes
A prime number is a whole number greater than 1
with exactly two divisors: 1 and itself. For 
example, 2 is a prime number because it is only 
divisible by 1 and 2. In contrast, 4 is not prime 
since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all 
prime numbers that are less than or equal to num.


*/

function sumPrimes(num) {
  let numArr = [];

  /*for(let s = 2; s <= num; s++){
    numArr.push(s);
  }*/

  for (let i = 2; i <= num; i++){
    //set a counter to add number of counts per iteration
    var count = 0;
    for (let x = 1; x <= i; x++){
      //checks by how many numbers i is divisible by
      if(i % x === 0){
        count++;
      }
    }
    //only numbers divisible by 2 other numbers (1 & itself) will be counted into the array
    if (count===2){
      //add the numbers that meet the requirements to the numArr array 
      numArr.push(i);
    }
  }
  
  //add all the numbers in the array
  return numArr.reduce((a,b) => {return a+b})
}

//------------------------TEST-------------------------

console.log(sumPrimes(10));
//returns 17

console.log(sumPrimes(977));
//returns 73156
