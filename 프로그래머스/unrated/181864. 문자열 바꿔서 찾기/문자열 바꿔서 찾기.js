function solution(myString, pat) {
    return [...myString].map(ele => ele === 'A'?'B':'A').join('').indexOf(pat) === -1 ? 0 : 1;
}