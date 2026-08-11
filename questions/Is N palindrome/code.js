/**
 * QUESTION: Given an integer N, return true if it is a palindrome else return false.
 *
 * A palindrome is a number that reads the same backward as forward. For example, 121, 1331, and 4554 are palindromes because they remain the same when their digits are reversed.
 */

const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);
let original = parseInt(input[0]);
let number = original;
let reversed = 0;

if (number < 0) number = -number;

while (number > 0) {
  let lastDigit = number % 10;
  reversed = reversed * 10 + lastDigit;

  number = parseInt(number / 10);
}

const result = original < 0 ? -original : original === reversed;
console.log(result);
console.log("The number:", original, result ? "is" : "isn't", "a palindrome");
