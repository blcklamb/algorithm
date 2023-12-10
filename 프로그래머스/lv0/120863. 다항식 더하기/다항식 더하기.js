// 점수 5점이나 받았다!
function solution(polynomial) {
  let [coeffiX, constant] = polynomial.split("+").reduce(
    (a, b) => {
      if (b.trim() === "x") {
        a[0] += 1;
      } else if (b.includes("x")) {
        a[0] += +b.split("x")[0];
      } else {
        a[1] += +b;
      }
      return a;
    },
    [0, 0]
  );

  let result = "";
  if (constant === 0) {
    if (coeffiX === 1) {
      result = "x";
    } else if (coeffiX === 0) {
      result = "";
    } else {
      result = `${coeffiX}x`;
    }
  } else {
    if (coeffiX === 1) {
      result = `x + ${constant}`;
    } else if (coeffiX === 0) {
      result = `${constant}`;
    } else {
      result = `${coeffiX}x + ${constant}`;
    }
  }
  return result;
}

// 우수 코드
function solution(polynomial) {
  const arr = polynomial.split(" + ");
  const xNum = arr
    .filter((n) => n.includes("x"))
    .map((n) => n.replace("x", "") || "1")
    .reduce((acc, cur) => acc + parseInt(cur, 10), 0);
  const num = arr
    .filter((n) => !isNaN(n))
    .reduce((acc, cur) => acc + parseInt(cur, 10), 0);

  let answer = [];
  if (xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
  if (num) answer.push(num);

  return answer.join(" + ");
}
