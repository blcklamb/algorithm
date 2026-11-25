function solution(arr, queries) {
  const N = arr.length;
  queries.forEach(([s, e, k]) => {
    Array.from({ length: N }, (_, idx) => idx)
      .filter((ele) => s <= ele && ele <= e && ele % k == 0)
      .forEach((ele) => (arr[ele] += 1));
  });
  return arr;
}
// 결과
```
'평균 시간: 29.040ms'
'평균 메모리: 35.982MB'
'최고 시간: 72.6ms'
'최저 시간: 0.23ms'
'최고 메모리: 37.7MB'
'최저 메모리: 33.6MB'
'시간 표준 편차: 979.395'
'메모리 표준 편차: 18.308'
```;

function solution(arr, queries) {
  queries.forEach(([s, e, k]) => {
    const leastPN = Math.ceil(s / k) * k;
    for (let i = leastPN; i <= e; i += k) {
      arr[i] += 1;
    }
  });
  return arr;
}

// 결과
```
'평균 시간: 0.288ms'
'평균 메모리: 33.700MB'
'최고 시간: 0.44ms'
'최저 시간: 0.06ms'
'최고 메모리: 34.1MB'
'최저 메모리: 33.2MB'
'시간 표준 편차: 0.148'
'메모리 표준 편차: 10.475'
```;
