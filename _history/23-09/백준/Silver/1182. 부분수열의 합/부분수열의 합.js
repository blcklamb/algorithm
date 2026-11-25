const fs = require("fs");
const path = require("path");
const problemID = path.basename(__filename).split("_")[0];
let fileLocation =
  process.platform === "darwin" ? `./${problemID}.txt` : "/dev/stdin";
const testCasePath = path.resolve(__dirname, fileLocation);

const [NS, num] = fs.readFileSync(testCasePath).toString().trim().split("\n");

const [N, S] = NS.split(" ").map((ele) => +ele);
const numArr = num.split(" ").map((ele) => +ele);

let answer = 0;

const add = (curr, total) => {
  if (curr === N) {
    if (total === S) answer++;
    return;
  }
  add(curr + 1, total);
  add(curr + 1, total + numArr[curr]);
};

add(0, 0);

if (S === 0) answer--;
console.log(answer);