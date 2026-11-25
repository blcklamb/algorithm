function solution(arr, flag) {
  var answer = [];
  arr.forEach((ele, idx) => {
    if (flag[idx]) {
      for (let i = 0; i < ele * 2; i++) answer.push(ele);
    } else {
      for (let i = 0; i < ele; i++) answer.pop();
    }
  });
  return answer;
}

// 우수 코드
function solution(arr, flag) {
  return arr.reduce(
    (prev, num, i) =>
      flag[i]
        ? [...prev, ...new Array(num * 2).fill(num)]
        : prev.slice(0, -num),
    []
  );
}
