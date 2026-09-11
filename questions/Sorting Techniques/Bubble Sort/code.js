/**
 * QUESTION: Given an array of N integers, write a program to implement the Bubble Sorting algorithm.
 */

const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\n/);
const n = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);

function BubbleSort(n, arr) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

const sortedArr = BubbleSort(n, arr);
console.log(sortedArr);
