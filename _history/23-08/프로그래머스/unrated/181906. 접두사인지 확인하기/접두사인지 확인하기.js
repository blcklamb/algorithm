function solution(my_string, is_prefix) {
  if (my_string.length < is_prefix.length) return 0;
  for (let i = 0; i < is_prefix.length; i++) {
    if (is_prefix[i] != my_string[i]) return 0;
  }
  return 1;
}

// 우수 코드
function solution(my_string, is_prefix) {
  return my_string.slice(0, is_prefix.length) === is_prefix ? 1 : 0;
}

// 우수 코드
function solution(my_string, is_prefix) {
  return +my_string.startsWith(is_prefix);
}
