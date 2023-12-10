const fs = require("fs");
const inputData1 = fs.readFileSync("/dev/stdin").toString().split(" ");

const currentTime = parseInt(inputData1[0]);
const hasDrink = parseInt(inputData1[1]);

let isLunch = 12 > currentTime || 16 < currentTime;
let result = 0;
if (!isLunch | (hasDrink === 1)) result = 280;
if (isLunch && hasDrink === 0) result = 320;
console.log(result);
