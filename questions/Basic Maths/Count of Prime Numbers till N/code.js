/**
 * QUESTION: You are given an integer n. You need to find out the number of prime numbers in the range [1, n] (inclusive). Return the number of prime numbers in the range.
 *
 * A prime number is a number which has no divisors except, 1 and itself.
 */

const fs = require("fs");

class Solution {
  checkIsPrime(n) {
    let num = 2;

    while (num < n) {
      if (n % num === 0) return false;

      num++;
    }

    return true;
  }

  primeUptoN(n) {
    let count = 0;

    for (let i = 2; i <= n; i++) {
      if (this.checkIsPrime(i)) count++;
    }

    return count;
  }
}

function main() {
  const input = fs.readFileSync(0, "utf8").trim().split(/\n/);
  const n = parseInt(input[0]);

  const solution = new Solution();
  const result = solution.primeUptoN(n);
  console.log(result);
}

main();
