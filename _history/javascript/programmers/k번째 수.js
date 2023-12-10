//https://school.programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
function solution(array, commands) {
  var answer = [];
  function compareNums(a, b) {
    return a - b;
  }
  commands.forEach((val) => {
    let [i, j, k] = val;
    let sliced = array.slice(i - 1, j);
    sliced.sort(compareNums);
    answer.push(sliced[k - 1]);
  });
  return answer;
}
