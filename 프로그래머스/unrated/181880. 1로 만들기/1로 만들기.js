function solution(num_list) {
  return num_list.reduce((a, b) => {
    let count = 0;
    while (b > 1) {
      b = b % 2 === 0 ? b / 2 : (b - 1) / 2;
      count += 1;
    }
    return a + count;
  }, 0);
}

// 우수 코드
function solution(num_list) {
  return num_list.map((v) => v.toString(2).length - 1).reduce((a, c) => a + c);
}
