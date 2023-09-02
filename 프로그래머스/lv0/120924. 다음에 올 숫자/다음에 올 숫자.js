function solution(common) {
  const [a1, a2, a3] = common;
  return a2 - a1 === a3 - a2
    ? common[common.length - 1] + (a2 - a1)
    : a1 * (a2 / a1) ** common.length;
}

// 우수 코드
function solution(common) {
  if (common[1] - common[0] == common[2] - common[1]) {
    return common.pop() + common[1] - common[0];
  } else {
    return (common.pop() * common[1]) / common[0];
  }
}
