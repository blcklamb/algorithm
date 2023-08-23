function solution(arr, idx) {
  return arr.map((ele, arrIdx) => (arrIdx < idx ? 0 : ele)).indexOf(1);
}

// 우수 코드
const solution = (a, i) => a.indexOf(1, i);
