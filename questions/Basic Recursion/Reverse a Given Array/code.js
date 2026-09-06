/**
 * QUESTION: Basic Recursion
 * You are given an array. The task is to reverse the array and print it.
 */

const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\n/);
const n = parseInt(input[0]);
const arr = input[1].split(/\s+/).map(Number);

function reverseArray(n, arr, pos, res) {
  if (pos >= n) return res;

  res[pos] = arr[n - pos - 1];
  return reverseArray(n, arr, pos + 1, res);
}

console.log(reverseArray(n, arr, 0, []));
