function solution(s) {
  let answer = "";
  const charObj = {};
  [...s].forEach((ele) => {
    if (charObj[ele]) charObj[ele] += 1;
    else charObj[ele] = 1;
  });
  for (const [key, value] of Object.entries(charObj)) {
    if (value === 1) answer += key;
  }
  return [...answer].sort().join("");
}

// 우수 코드
function solution(s) {
  let res = [];
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  return res.sort().join("");
}
