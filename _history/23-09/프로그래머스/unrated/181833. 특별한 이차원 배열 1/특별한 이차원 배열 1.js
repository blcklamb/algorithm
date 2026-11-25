function solution(n) {
  return Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => (i === j ? 1 : 0))
  );
}
// 결과
```
'평균 시간: 0.449ms'
'평균 메모리: 35.780MB'
'최고 시간: 1ms'
'최저 시간: 0.07ms'
'최고 메모리: 38MB'
'최저 메모리: 33.4MB'
'시간 표준 편차: 0.399'
'메모리 표준 편차: 25.350'
```;
// 우수코드
function solution(n) {
  const answer = Array.from(Array(n), () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    answer[i][i] = 1;
  }
  return answer;
}
// 결과
```
'평균 시간: 0.165ms'
'평균 메모리: 35.867MB'
'최고 시간: 0.29ms'
'최저 시간: 0.05ms'
'최고 메모리: 38.1MB'
'최저 메모리: 33.5MB'
'시간 표준 편차: 0.045'
'메모리 표준 편차: 25.358'
```;
