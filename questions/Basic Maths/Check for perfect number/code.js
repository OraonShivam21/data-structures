/**
 * QUESTION: You are given an integer n. You need to check if the number is a perfect number or not. Return true if it is a perfect number, otherwise, return false.
 * 
 * A perfect number is a number whose proper divisors (excluding the number itself) add up to the number itself.


 */

const fs = require("fs");

class Solution {
  isPerfect(n) {
    let divisor = 1,
      sum = 0;

    while (divisor <= Math.ceil(n / 2)) {
      if (n % divisor === 0) sum += divisor;

      divisor++;
    }

    return sum === n;
  }
}

function main() {
  const input = fs.readFileSync(0, "utf8").trim().split(/\n/);
  const n = parseInt(input[0]);

  const solution = new Solution();
  const result = solution.isPerfect(n);
  console.log(result);
}

main();
