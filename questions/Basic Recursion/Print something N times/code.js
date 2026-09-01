/**
 * QUESTION: Basic Recursion
 * Printing something N times
 */

const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\n/);
const something = input[0];
const n = parseInt(input[1]);

function printNTimes(something, n) {
  if (n === 0) return;

  console.log(something);
  printNTimes(something, n - 1);
}

printNTimes(something, n);
