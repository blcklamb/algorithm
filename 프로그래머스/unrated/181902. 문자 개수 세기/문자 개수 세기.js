function solution(my_string) {
  const A = 65;
  const charArr = Array.from({ length: 58 }).fill(0);
  [...my_string].forEach((ele) => (charArr[ele.charCodeAt(0) - A] += 1));
  charArr.splice(26, 6);
  return charArr;
}

// 우수코드
function solution(str) {
  return [...str].reduce(
    (p, c) => (p[c.charCodeAt() - (c === c.toLowerCase() ? 71 : 65)]++, p),
    Array(52).fill(0)
  );
}
