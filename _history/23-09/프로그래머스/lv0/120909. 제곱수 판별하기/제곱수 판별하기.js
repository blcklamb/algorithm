function solution(n) {
  const square = n ** (1 / 2);
  return square === parseInt(square) ? 1 : 2;
}

//우수 코드
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}
