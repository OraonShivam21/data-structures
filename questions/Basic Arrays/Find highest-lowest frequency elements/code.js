/**
 * QUESTION: Given an array of size N. Find the highest and lowest frequency element.
 */

const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\n/);
const arr = input[0].split(" ").map(Number);

function getOcurrences(arr, ind, obj) {
  if (ind === arr.length) return obj;

  obj[arr[ind]] = (obj[arr[ind]] || 0) + 1;

  return getOcurrences(arr, ind + 1, obj);
}

const obj = getOcurrences(arr, 0, {});

let freqLow = arr.length,
  numLow = arr[0],
  freqHigh = 0,
  numHigh = arr[0];
for (let ob in obj) {
  if (freqHigh < obj[ob]) {
    freqHigh = obj[ob];
    numHigh = ob;
  }
  if (freqLow > obj[ob]) {
    freqLow = obj[ob];
    numLow = ob;
  }
}

console.log(numHigh, numLow);
