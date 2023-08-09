function solution(age) {
    let answer = ""
    const stringAge = age.toString()
    for (let i = 0; i < stringAge.length; i++){
        const k = parseInt(+stringAge[i]+97, 10)
        answer += String.fromCharCode(k)
    }
    return answer;
}