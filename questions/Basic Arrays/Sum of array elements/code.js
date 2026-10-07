/**
 * QUESTION: Given an array arr of size n, the task is to find the sum of all the elements in the array.
 */

const fs = require("fs");

class Solution {
  sum(arr, n) {
    let sum = 0;

    for (let i = 0; i < n; i++) {
      sum += arr[i];
    }

    return sum;
  }
}

function main() {
  const input = fs.readFileSync(0, "utf8").trim();
  const arr = input.split(/\s+/).filter(Number).map((m) => parseInt(m));
  const n = arr.length;

  const solution = new Solution();
  const result = solution.sum(arr, n);
  console.log(result);
}

main();
