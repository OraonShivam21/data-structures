/**
 * QUESTION: Given an integer N, return all divisors of N.
    A divisor of an integer N is a positive integer that divides N without leaving a remainder. In other words, if N is divisible by another integer without any remainder, then that integer is considered a divisor of N.
 */

const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);
const num = input[0];

const divisors = [];
for (let i = 1; i <= Math.sqrt(num); i++) {
  if (num % i === 0) {
    divisors.push(i);
    divisors.push(num / i);
  }
}

console.log(divisors.sort((a, b) => a - b));
