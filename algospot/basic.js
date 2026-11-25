let input = [];
require("readline")
  .createInterface(process.stdin, {})
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    for (let i = 1; i <= +input[0]; i++) {
      // 여기에 답안을 작성하면 됩니다.
    }
  });

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];
// rl.on("line", function (line) {
//   input.push(line);
// }).on("close", function () {
//   // 여기에 답안을 작성하면 됩니다.;
// });
