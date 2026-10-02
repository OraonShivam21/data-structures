/**
 * QUESTION: Given an array, we have to find the number of occurrences of each element in the array.
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

for (let ob in obj) {
  console.log(ob, obj[ob]);
}
