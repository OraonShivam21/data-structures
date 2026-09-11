/**
 * QUESTION: Given an array of N integers, write a program to implement the Selection sorting algorithm.
 */

const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\n/);
const n = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);

function selectionSort(n, arr) {
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

const sortedArr = selectionSort(n, arr);
console.log(sortedArr);
