/**
 * QUESTION: Basic Recursion
 * Given an integer N, write a program to print numbers from N to 1.
 */

const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\n/);
const n = parseInt(input[0]);

function printNTo1(n) {
  if (n <= 0) return;

  console.log(n);
  printNTo1(n - 1);
}

printNTo1(n);
