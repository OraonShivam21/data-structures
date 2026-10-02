/**
 * QUESTION: Given an integer N, return true it is an Armstrong number otherwise return false.
 */

const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);
const num = input[0];

function countDigits(num) {
  let digits = 0;
  let temp = num;

  while (temp > 0) {
    digits++;
    temp = parseInt(temp / 10);
  }

  return digits;
}

const digits = countDigits(num);

const numsArr = num.toString().split("");
let result = 0;

for (let n of numsArr) {
  let temp = parseInt(n);
  let cube = 1;
  for (let i = 0; i < digits; i++) {
    cube *= temp;
  }
  result += cube;
}

console.log(result === num);
