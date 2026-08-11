/**
 * QUESTION: Given an integer N, return the number of digits in N.
 */

const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);
let original = input[0];
let number = original;

let count = 1;
while (number > 0) {
  number = parseInt(number / 10);

  if (number !== 0) count++;
}

console.log("The number of digits in", original, "are:", count);
