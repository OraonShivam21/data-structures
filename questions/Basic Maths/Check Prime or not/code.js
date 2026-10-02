/**
 * QUESTION: Given an integer N, check whether it is prime or not. A prime number is a number that is only divisible by 1 and itself and the total number of divisors is 2..
 */

const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);
const num = input[0];

const checkPrime = (num) => {
  let i = 1, count = 0;

  while (i < Math.sqrt(num)) {
    if (num % i === 0) {
      count++;
      count = (num/i) !== i ? count++ : count;
    }
    i++;
  }

  return count < 2;
};

console.log(checkPrime(num));
