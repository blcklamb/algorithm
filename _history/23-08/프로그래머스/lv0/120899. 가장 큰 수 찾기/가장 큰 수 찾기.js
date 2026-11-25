function solution(array) {
  return array.reduce(
    ([val, valIdx], b, idx) => {
      return val < b ? [b, idx] : [val, valIdx];
    },
    [0, 0]
  );
}

// 우수 코드
function solution(array) {
  let max = Math.max(...array);
  return [max, array.indexOf(max)];
}
