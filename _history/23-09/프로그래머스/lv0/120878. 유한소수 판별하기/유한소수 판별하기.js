function getPrimeFactors(n) {
  const result = [];
  let divider = 2;
  while (divider <= n ** (1 / 2) || n != 1) {
    if (n % divider === 0) {
      result.push(divider);
      n /= divider;
    } else {
      divider += 1;
    }
  }
  return result;
}
function solution(a, b) {
  var answer = 0;
  const [numerator, denominator] = [getPrimeFactors(a), getPrimeFactors(b)];
  const ans = denominator
    .filter((ele) => {
      const numIdx = numerator.indexOf(ele);
      if (numIdx != -1) {
        numerator.splice(numIdx, 1);
        return false;
      }
      return true;
    })
    .join("")
    .replaceAll("2", "")
    .replaceAll("5", "").length;
  return 1 + (ans === 0 ? 0 : 1);
}

// 우수 코드
function solution(a, b) {
  let n = 1;
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) n = i;
  }

  b /= n;
  while (b % 2 === 0) b /= 2;
  while (b % 5 === 0) b /= 5;

  return b === 1 ? 1 : 2;
}
