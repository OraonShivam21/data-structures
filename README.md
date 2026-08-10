# Data Structures - JavaScript Input/Output with VS Code

This setup lets you write JavaScript in `code.js`, read input from `input.txt`, and automatically write the program output to `output.txt`.

## Project structure

Keep these files in the root directory:

```text
project/
├── code.js
├── input.txt
├── output.txt
└── .vscode/
    └── tasks.json
```

> `output.txt` does not need to exist beforehand. The command will create it.

---

## 1. VS Code task configuration

Create:

```text
.vscode/tasks.json
```

Add:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "run js",
      "type": "shell",
      "command": "node \"${workspaceFolder}/code.js\" < \"${workspaceFolder}/input.txt\" > \"${workspaceFolder}/output.txt\"",
      "group": {
        "kind": "build",
        "isDefault": true
      }
    }
  ]
}
```

This version is slightly better than using `${file}` because it always runs the `code.js` file in the root directory, regardless of which file is currently open in VS Code.

---

## 2. How input works

The important part of the command is:

```bash
< input.txt
```

This redirects the contents of `input.txt` to the program's standard input (`stdin`).

Inside `code.js`, you can read that input using Node.js.

### Method 1: Read the complete input

Suppose `input.txt` contains:

```text
10 20
30 40
```

In `code.js`:

```js
const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim();

console.log(input);
```

`input` will contain:

```text
10 20
30 40
```

---

## 3. Read input as separate values

For programming/competitive-programming style input, you will usually want to split the input into individual values.

### input.txt

```text
10 20 30 40
```

### code.js

```js
const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);
const d = Number(input[3]);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
```

The resulting `output.txt` will contain:

```text
10
20
30
40
```

---

## 4. Convert all input values to numbers

Instead of converting every value individually:

```js
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);
```

For example:

### input.txt

```text
5
10 20 30 40 50
```

### code.js

```js
const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const n = input[0];
const arr = input.slice(1);

console.log("n =", n);
console.log("array =", arr);
```

---

## 5. Example: Read an array

### input.txt

```text
5
10 20 30 40 50
```

### code.js

```js
const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const n = input[0];
const arr = input.slice(1, n + 1);

let sum = 0;

for (const value of arr) {
    sum += value;
}

console.log(sum);
```

`output.txt`:

```text
150
```

---

## 6. Example: Multiple lines of input

### input.txt

```text
3
10 20
30 40
50 60
```

### code.js

```js
const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let index = 0;

const n = input[index++];

for (let i = 0; i < n; i++) {
    const a = input[index++];
    const b = input[index++];

    console.log(a + b);
}
```

`output.txt`:

```text
30
70
110
```

Notice that `split(/\s+/)` treats both spaces and new lines as separators. This makes it convenient for most programming problems.

---

## 7. How to run the JavaScript file

You have two options.

### Option A: Run from VS Code

With the project opened in VS Code:

1. Put your test input in `input.txt`.
2. Write your program in `code.js`.
3. Press:

```text
Ctrl + Shift + B
```

This runs the default build task:

```text
run js
```

The output will be written to:

```text
output.txt
```

You can open `output.txt` after the program finishes to see the result.

You can also open:

```text
Terminal → Run Build Task...
```

and select:

```text
run js
```

---

### Option B: Run directly from the terminal

From the project root directory:

```bash
node code.js < input.txt > output.txt
```

This does exactly the same thing as your VS Code task.

You can then check the output:

```bash
cat output.txt
```

---

## 8. Run without redirecting output

If you want to see the output directly in the terminal:

```bash
node code.js < input.txt
```

Here:

```text
input.txt → code.js → terminal
```

Whereas:

```bash
node code.js < input.txt > output.txt
```

does:

```text
input.txt → code.js → output.txt
```

---

## 9. Run with a different JavaScript file

If you don't want to use the VS Code task and have another file such as `test.js`:

```bash
node test.js < input.txt > output.txt
```

Or directly:

```bash
node test.js < input.txt
```

---

## 10. Important: empty input.txt

If `input.txt` is empty, this code:

```js
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);
```

can produce an unexpected value because `trim()` turns an empty string into `""`.

A safer reusable pattern is:

```js
const fs = require("fs");

const data = fs.readFileSync(0, "utf8").trim();

const input = data ? data.split(/\s+/).map(Number) : [];
```

Then you can safely handle empty input.

---

## 11. Recommended template for `code.js`

For general programming practice, you can start with:

```js
const fs = require("fs");

const data = fs.readFileSync(0, "utf8").trim();
const input = data ? data.split(/\s+/).map(Number) : [];

let index = 0;

// Read input here
// Example:
// const n = input[index++];
// const a = input[index++];

// Your code here

console.log("Output");
```

---

## 12. The complete setup

Your root directory should look like:

```text
project/
│
├── code.js
├── input.txt
├── output.txt
│
└── .vscode/
    └── tasks.json
```

### `.vscode/tasks.json`

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "run js",
      "type": "shell",
      "command": "node \"${workspaceFolder}/code.js\" < \"${workspaceFolder}/input.txt\" > \"${workspaceFolder}/output.txt\"",
      "group": {
        "kind": "build",
        "isDefault": true
      }
    }
  ]
}
```

### `input.txt`

```text
5
10 20 30 40 50
```

### `code.js`

```js
const fs = require("fs");

const data = fs.readFileSync(0, "utf8").trim();
const input = data ? data.split(/\s+/).map(Number) : [];

const n = input[0];
const arr = input.slice(1, n + 1);

let sum = 0;

for (const value of arr) {
    sum += value;
}

console.log(sum);
```

### Run

Press:

```text
Ctrl + Shift + B
```

or run:

```bash
node code.js < input.txt > output.txt
```

### Result in `output.txt`

```text
150
```

---

## Quick reference

| What you want | Command |
|---|---|
| Run JS normally | `node code.js` |
| Read from input.txt | `node code.js < input.txt` |
| Write output to output.txt | `node code.js > output.txt` |
| Read input + write output | `node code.js < input.txt > output.txt` |
| View output | `cat output.txt` |
| Run VS Code task | `Ctrl + Shift + B` |
| Read redirected stdin in JS | `fs.readFileSync(0, "utf8")` |

The key idea is:

```text
input.txt
   ↓
stdin
   ↓
code.js
   ↓
stdout
   ↓
output.txt
```