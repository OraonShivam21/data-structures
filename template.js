/**
 * QUESTION: Statement of the question written here.
 * 
 * note: this is the standard template for competitive programming, to read input and give output using console.log in js, with supposed input like:
 * 5
 * 1 2 3 4 5
 * where first line is size of the array, and next line is the array itself
 */

const fs = require("fs");

const data = fs.readFileSync(0, "utf8").trim();
const input = data ? data.split(/\s+/).map(Number) : [];

const n = input[0];
const arr = input.slice(1, n + 1);

console.log(n);
console.log(arr);
