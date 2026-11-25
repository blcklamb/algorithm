function solution(numbers) {
  if (numbers.length === 2) return numbers[0] * numbers[1];
  var answer = 0;
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer = Math.max(answer, numbers[i] * numbers[j]);
    }
  }
  return answer;
}

// 우수 코드
function solution(numbers) {
  const N = numbers.length;

  numbers.sort((a, b) => a - b);

  return Math.max(numbers[N - 1] * numbers[N - 2], numbers[0] * numbers[1]);
}
