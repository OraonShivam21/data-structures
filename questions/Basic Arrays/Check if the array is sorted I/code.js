/**
 * QUESTION: Given an array arr of size n, the task is to check if the given array is sorted in (ascending / Increasing / Non-decreasing) order. If the array is sorted then return True, else return False.
 */

const fs = require("fs");

class Solution {
  arraySortedOrNot(arr, n) {
    let lastEle = arr[0];

    for (let i = 1; i < n; i++) {
      if (lastEle > arr[i]) return false;
    }

    return true;
  }
}

function main() {
  const input = fs.readFileSync(0, "utf8").trim();
  const arr = input.split(/\s+/).filter(Number).map((m) => parseInt(m));
  const n = arr.length;

  const solution = new Solution();
  const result = solution.arraySortedOrNot(arr, n);
  console.log(result);
}

main();
