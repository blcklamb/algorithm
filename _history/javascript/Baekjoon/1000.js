const fs = require("fs");
const inputData1 = fs.readFileSync("/dev/stdin").toString().split(" ");

const A = parseInt(inputData1[0]);
const B = parseInt(inputData1[1]);

console.log(A + B);
