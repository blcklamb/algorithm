function solution(arr, queries) {
  return queries.map(([s, e, k]) => {
    return arr.slice(s, e + 1).reduce((a, val) => {
      if (a === -1) return val > k ? val : a;
      return val > k && val - k < a - k ? val : a;
    }, -1);
  });
}
// 결과
```
'평균 시간: 5.751ms'
'평균 메모리: 35.609MB'
'최고 시간: 27ms'
'최저 시간: 0.1ms'
'최고 메모리: 36.9MB'
'최저 메모리: 33.4MB'
'시간 표준 편차: 198.218'
'메모리 표준 편차: 16.450'
```;
// 우수 코드
function solution(arr, queries) {
  return queries.map(
    ([s, e, k]) =>
      arr
        .slice(s, e + 1)
        .filter((n) => n > k)
        .sort((a, b) => a - b)[0] || -1
  );
}

// 결과
```
'평균 시간: 9.355ms'
'평균 메모리: 35.664MB'
'최고 시간: 29.1ms'
'최저 시간: 0.29ms'
'최고 메모리: 36.9MB'
'최저 메모리: 33.5MB'
'시간 표준 편차: 130.189'
'메모리 표준 편차: 17.716'
```;
