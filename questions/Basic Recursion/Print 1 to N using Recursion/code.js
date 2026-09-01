/**
 * QUESTION: Basic Recursion
 * Print 1 to N using Recursion
 */

const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\n/);
const n = parseInt(input[0]);

function print1ToN(count, n) {
  if (count > n) return;

  console.log(count);
  print1ToN(count + 1, n);
}

print1ToN(1, n);
