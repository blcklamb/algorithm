function solution(myString, pat) {
  for (let i = myString.length; i >= pat.length - 1; i--) {
    if (myString.slice(i - pat.length, i) === pat) {
      return myString.slice(0, i);
    }
  }
}

// 우수 코드
const solution = (str, pat) => str.substring(0, str.lastIndexOf(pat)) + pat;
