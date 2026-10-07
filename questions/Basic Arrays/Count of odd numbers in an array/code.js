/**
 * QUESTION: Given an array of n elements. The task is to return the count of the number of odd numbers in the array.
 */

const fs = require("fs");

class Solution {
  countOdd(arr, n) {
    let count = 0;

    for (let i = 0 ; i < n; i++) {
      if (arr[i] % 2 !== 0) count++;
    }

    return count;
  }
}

function main() {
  const input = fs.readFileSync(0, "utf8").trim();
  const arr = input.split(/\s+/).filter(Number).map((m) => parseInt(m));
  const n = arr.length;

  const solution = new Solution();
  const result = solution.countOdd(arr, n);
  console.log(result);
}

main();
