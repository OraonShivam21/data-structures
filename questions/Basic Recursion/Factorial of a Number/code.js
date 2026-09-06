/**
 * QUESTION: Basic Recursion
 * Given a number X,  print its factorial.
 *
 * To obtain the factorial of a number, it has to be multiplied by all the whole numbers preceding it. More precisely X! = X*(X-1)*(X-2) … 1.
 */

const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\n/);
const n = parseInt(input[0]);

function factorialOfN(res, n) {
  if (n <= 0) return res;

  return n * factorialOfN(res, n - 1);
}

console.log(factorialOfN(1, n));
