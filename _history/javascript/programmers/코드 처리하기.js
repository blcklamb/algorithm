// https://school.programmers.co.kr/learn/courses/30/lessons/181932

function solution(code) {
  let ret = "";
  let mode = 0;
  [...code].forEach((ele, idx) => {
    if (+ele) {
      mode = Math.abs(mode - 1);
      return;
    }
    if (!mode) ret += idx % 2 === 0 ? ele : "";
    if (mode) ret += idx % 2 != 0 ? ele : "";
  });
  return ret.length != 0 ? ret : "EMPTY";
}
```
'평균 시간: 5.284ms'
'평균 메모리: 37.469MB'
'최고 시간: 14.5ms'
'최저 시간: 0.06ms'
'최고 메모리: 39.7MB'
'최저 메모리: 33.5MB'
'시간 표준 편차: 61.918'
'메모리 표준 편차: 23.317'
```;

function solution(code) {
  let ret = "";
  let mode = 0;
  [...code].forEach((ele, idx) => {
    if (!mode) {
      if (ele === "1") {
        mode = 1;
      } else {
        ret += idx % 2 === 0 ? ele : "";
      }
    } else {
      if (ele === "1") {
        mode = 0;
      } else {
        ret += idx % 2 != 0 ? ele : "";
      }
    }
  });
  return ret.length != 0 ? ret : "EMPTY";
}
```
'평균 시간: 5.183ms'
'평균 메모리: 37.662MB'
'최고 시간: 11.1ms'
'최저 시간: 0.08ms'
'최고 메모리: 40MB'
'최저 메모리: 33.5MB'
'시간 표준 편차: 39.855'
'메모리 표준 편차: 24.711'
```;
