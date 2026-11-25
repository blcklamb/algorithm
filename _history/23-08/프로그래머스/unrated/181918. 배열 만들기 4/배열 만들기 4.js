function solution(arr) {
  var stk = [];
  let i = 0;
  while (true) {
    if (i >= arr.length) break;
    if (stk.length != 0 && stk[stk.length - 1] >= arr[i]) {
      stk.pop();
      continue;
    }
    stk.push(arr[i]);
    i++;
  }
  return stk;
}

// 결과
```
'평균 시간: 3.518ms'
'평균 메모리: 38.091MB'
'최고 시간: 4.04ms'
'최저 시간: 2.81ms'
'최고 메모리: 39.2MB'
'최저 메모리: 37MB'
'시간 표준 편차: 1.540'
'메모리 표준 편차: 12.652'
```;
