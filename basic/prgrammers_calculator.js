const text = `테스트 결과 copy and paste`;
const testCount = text.split("테스트").length - 1;

let time = [];
let memory = [];

text.split("통과 (").forEach((ele, idx) => {
  if (idx == 0) return;
  let value = ele.split(")")[0].split(", ");
  time.push(parseFloat(value[0].slice(0, 4)));
  memory.push(parseFloat(value[1].slice(0, 4)));
});
const getAverage = (data) =>
  (data.reduce((a, b) => a + b) / testCount).toFixed(3);
const averageTime = getAverage(time);
const averageMemory = getAverage(memory);
const getStandardDeviation = (data, average) =>
  (
    data.reduce((a, b) => a + (b - average) ** 2) /
    testCount ** (1 / 2)
  ).toFixed(3);
const SDT = getStandardDeviation(time, averageTime);
const SDM = getStandardDeviation(memory, averageMemory);

console.log(`평균 시간: ${averageTime}ms`);
console.log(`평균 메모리: ${averageMemory}MB`);
console.log(`최고 시간: ${Math.max(...time)}ms`);
console.log(`최저 시간: ${Math.min(...time)}ms`);
console.log(`최고 메모리: ${Math.max(...memory)}MB`);
console.log(`최저 메모리: ${Math.min(...memory)}MB`);
console.log(`시간 표준 편차: ${SDT}`);
console.log(`메모리 표준 편차: ${SDM}`);
