/**
 * QUESTION: You are given an integer n. Return the largest digit present in the number.
 */

const fs = require("fs");

class Solution {
  largestDigit(n) {
    let largest = 0;

    while (n !== 0) {
      const digit = n % 10;

      if (largest < digit) largest = digit;

      n = parseInt(n / 10);
    }

    return largest;
  }
}

function main() {
  const input = fs.readFileSync(0, "utf8").trim().split(/\n/);
  const n = parseInt(input[0]);

  const solution = new Solution();
  const result = solution.largestDigit(n);
  console.log(result);
}

main();
