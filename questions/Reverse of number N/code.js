/**
 * QUESTION: Given an integer N return the reverse of the given number.
 * 
 * Note: If a number has trailing zeros, then its reverse will not include them. For e.g , reverse of 10400 will be 401 instead of 00401.
 */

const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);
let original = parseInt(input[0]);
let number = original;
let result = 0;

while (number > 0) {
    let lastDigit = number % 10;
    result = result * 10 + lastDigit;

    number = parseInt(number / 10);
}

console.log("The reverse of number", original, "is:", result);
