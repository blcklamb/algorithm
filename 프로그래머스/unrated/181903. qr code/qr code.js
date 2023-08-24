function solution(q, r, code) {
  return Array.from(
    { length: Math.ceil(code.length / q) },
    (_, idx) => q * idx + r
  ).reduce((a, b) => a + (code[b] || ""), "");
}

// 우수 코드

function solution(q, r, code) {
  return [...code].filter((_, i) => i % q === r).join("");
}
