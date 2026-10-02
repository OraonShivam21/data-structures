/**
 * QUESTION: You are given an integer n. You need to return the number of odd digits present in the number.
 *
 * The number will have no leading zeroes, except when the number is 0 itself.
 */

const fs = require("fs");

class Solution {
  countOddDigits(n) {
    let count = 0;

    if (n === 0) return count;

    while (n !== 0) {
      const digit = n % 10;
      if (digit % 2 !== 0) count++;

      n = parseInt(n / 10);
    }

    return count;
  }
}

function main() {
  const input = fs.readFileSync(0, "utf8").trim().split(/\n/);
  const n = parseInt(input[0]);

  const solution = new Solution();
  const result = solution.countOddDigits(n);
  console.log(result);
}

main();
