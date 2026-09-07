/**
 * QUESTION: Basic Recursion
 * Given an integer N. Print the Fibonacci series up to the Nth term.
 */

const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\n/);
const n = parseInt(input[0]);

function printFibonacci(p, n) {
  if (n === 1) return p;

  if (p[p.length - 1] === 0) p.push(1);

  p.push(p[p.length - 1] + p[p.length - 2]);

  return printFibonacci(p, n - 1);
}

const fibo = printFibonacci([0], n);
console.log(fibo.join(" "));
