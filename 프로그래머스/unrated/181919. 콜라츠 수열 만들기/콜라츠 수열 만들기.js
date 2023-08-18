function solution(n) {
  var answer = [n];
  while (true) {
    const lastEle = answer[answer.length - 1];
    if (lastEle === 1) break;
    if (lastEle % 2 === 0) answer.push(lastEle / 2);
    else answer.push(lastEle * 3 + 1);
  }
  return answer;
}

// 결과
```
'평균 시간: 0.134ms'
'평균 메모리: 33.464MB'
'최고 시간: 0.2ms'
'최저 시간: 0.06ms'
'최고 메모리: 33.5MB'
'최저 메모리: 33.4MB'
'시간 표준 편차: 0.020'
'메모리 표준 편차: 10.108'
```;

// 우수 코드

function solution(n, arr = []) {
  arr.push(n);
  if (n === 1) return arr;
  if (n % 2 === 0) return solution(n / 2, arr);
  return solution(3 * n + 1, arr);
}

// 결과
```
'평균 시간: 0.137ms'
'평균 메모리: 33.518MB'
'최고 시간: 0.18ms'
'최저 시간: 0.05ms'
'최고 메모리: 33.6MB'
'최저 메모리: 33.4MB'
'시간 표준 편차: 0.018'
'메모리 표준 편차: 10.111'
```;
