/**
 * QUESTION: Basic Recursion
 * Given a number ‘N’, find out the sum of the first N natural numbers.
 */

const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\n/);
const n = parseInt(input[0]);

function sumToN(res, n) {
  if (n <= 0) return res;

  return n + sumToN(res, n - 1);
}

console.log(sumToN(0, n));
