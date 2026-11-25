function solution(array) {
  return array.reduce(
    (a, b) => a + (b.toString() + "7").match(/7/g).length - 1,
    0
  );
}

// 우수 코드
function solution(array) {
  return array.join("").split("7").length - 1;
}
