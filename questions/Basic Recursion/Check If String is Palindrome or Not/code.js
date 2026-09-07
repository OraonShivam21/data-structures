/**
 * QUESTION: Basic Recursion
 * Given a string, check if the string is palindrome or not. A string is said to be palindrome if the reverse of the string is the same as the string.
 */

const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\n/);
const str = input[0];

function checkPalindrome(str, ind) {
  if (ind === Math.ceil(str.length / 2)) return true;

  if (str.charAt(ind) !== str.charAt(str.length - ind - 1)) return false;

  return checkPalindrome(str, ind + 1);
}

console.log(checkPalindrome(str, 0));
