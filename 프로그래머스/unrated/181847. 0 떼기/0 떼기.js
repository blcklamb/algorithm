function solution(n_str) {
  let flag = 1;
  return [...n_str]
    .filter((a) => {
      if ((a === "0") & (flag > 0)) {
        flag += 1;
        return false;
      }
      flag = -1;
      return true;
    })
    .join("");
}

// 우수 코드
const solution = (str) => String(Number(str));
