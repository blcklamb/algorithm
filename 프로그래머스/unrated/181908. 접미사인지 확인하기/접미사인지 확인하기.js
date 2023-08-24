function solution(my_string, is_suffix) {
  var answer = 1;
  const reversed_compare = [...my_string].reverse();
  const reversed_target = [...is_suffix].reverse();
  reversed_target.forEach((ele, idx) => {
    if (ele != reversed_compare[idx]) answer = 0;
    return false;
  });
  return answer;
}

// 우수 코드
const solution = (str, suff) => (str.endsWith(suff) ? 1 : 0);
