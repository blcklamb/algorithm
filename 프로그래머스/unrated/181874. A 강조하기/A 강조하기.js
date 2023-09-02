function solution(myString) {
  return [...myString]
    .map((ele) => (ele === "a" || ele === "A" ? "A" : ele.toLowerCase()))
    .join("");
}

// 우수코드
const solution = (s) => s.toLowerCase().replaceAll("a", "A");
