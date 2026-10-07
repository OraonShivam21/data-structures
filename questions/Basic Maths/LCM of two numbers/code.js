/**
 * QUESTION: You are given two integers n1 and n2. You need find the Lowest Common Multiple (LCM) of the two given numbers. Return the LCM of the two numbers.
 *
 * The Lowest Common Multiple (LCM) of two integers is the lowest positive integer that is divisible by both the integers.
 */

const fs = require("fs");

class Solution {
  LCM(n1, n2) {
    let start = n1 * n2;
    let lcm = 1;

    while (start >= 1) {
      if (start % n1 === 0 && start % n2 === 0) {
        lcm = start;
        start = Math.ceil(start / 2);
      } else start = start - 1;
    }

    return lcm;
  }
}

function main() {
  const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);
  const n1 = parseInt(input[0]);
  const n2 = parseInt(input[1]);

  const solution = new Solution();
  const result = solution.LCM(n1, n2);
  console.log(result);
}

main();
