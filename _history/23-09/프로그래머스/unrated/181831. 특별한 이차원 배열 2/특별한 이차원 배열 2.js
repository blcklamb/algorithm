function solution(arr) {
  var answer = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i][j] != arr[j][i]) {
        answer = 0;
        break;
      }
    }
  }
  return answer;
}

// 우수 코드
function solution(arr) {
  return arr.every((r, i) => r.every((_, j) => arr[i][j] === arr[j][i]))
    ? 1
    : 0;
}
