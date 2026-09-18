/**
 * QUESTION: Given an array of integers called nums, sort the array in non-decreasing order using the insertion sort algorithm and return the sorted array.
 * A sorted array in non-decreasing order is an array where each element is greater than or equal to all preceding elements in the array.
 */

const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\n/);
const n = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);

function insertionSort(n, arr) {
  for (let i = 0; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}

const sortedArr = insertionSort(n, arr);
console.log(sortedArr);
