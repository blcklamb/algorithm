function solution(my_str, n) {
  return Array.from({ length: Math.ceil(my_str.length / n) }, (_, idx) => {
    return my_str.substring(idx * n, idx * n + n);
  });
}

// 우수 코드
function solution(my_str, n) {
  return my_str.match(new RegExp(`.{1,${n}}`, "g"));
}
