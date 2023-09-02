function solution(my_string, num1, num2) {
  const [a, b] = [my_string[num1], my_string[num2]];
  return [...my_string]
    .map((ele, idx) => (idx === num2 ? a : idx === num1 ? b : ele))
    .join("");
}

// 우수 코드
function solution(my_string, num1, num2) {
  my_string = my_string.split("");
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join("");
}
