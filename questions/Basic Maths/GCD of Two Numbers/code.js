/**
 * QUESTION: Given two integers N1 and N2, find their greatest common divisor.
 */

const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);
let first = input[0];
let second = input[1];

// brute force approach
let smallest = first > second ? first : second;

let gcd = 1;
for (let i = 2; i < smallest; i++) {
  if (first % i === 0 && second % i === 0) gcd = i;
}

console.log("The GCD of", first, "and", second, "is:", gcd);

// optimized approach

// 1. using recursion
function gcd(first, second) {
  if (first === 0) return second;
  if (second === 0) return first;

  if (first > second) return gcd(first - second, second);
  else return gcd(second - first, first);
}

// 2. using modulo
function gcd(first, second) {
  while (first > 0 && second > 0) {
    if (first > second) {
      first = first % second;
    } else {
      second = second % first;
    }
  }

  if (first === 0) return second;

  return first;
}

console.log("The GCD of", first, "and", second, "is:", gcd(first, second));
