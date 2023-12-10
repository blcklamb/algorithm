// https://school.programmers.co.kr/learn/courses/30/lessons/42746?language=javascript#

function solution(numbers) {
  numbers.sort((a, b) => {
    const A = [...String(a)].reduce((sum, val) => sum + Number(val), 0);
    const B = [...String(b)].reduce((sum, val) => sum + Number(val), 0);
    const A_average = A / String(a).length;
    const B_average = B / String(b).length;
    if (A_average === B_average) {
      return b - a;
    }
    return B_average - A_average;
  });
  return parseInt(numbers.join("")).toString();
}

```
반례
입력값 〉	[979, 97, 978, 81, 818, 817]
기댓값 〉	"9799797881881817"	
실행값 >   "9799789781881781"

```;

function solution(numbers) {
  const largestLength = Math.max(...numbers).toString().length;
  console.log(largestLength);
  numbers.sort((a, b) => {
    // 97 978
    const compareA = parseInt(a.toString().padEnd(largestLength, "0"));
    const compareB = parseInt(b.toString().padEnd(largestLength, "0"));

    return compareA - compareB;
  });
  if (numbers[0] === 0) {
    return "0";
  }
  return numbers.join("").toString();
}
