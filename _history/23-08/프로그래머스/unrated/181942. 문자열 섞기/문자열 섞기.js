function solution(str1, str2) {
    var answer = '';
    Array.from({length: str1.length}, (_, idx) => idx)
        .forEach((idx) => {
        answer += str1[idx]
        answer += str2[idx]
    })
    return answer;
}
// function solution(str1, str2) {
    // return [...str1].map((x, idx)=> x+str2[idx]).join("");
// }
