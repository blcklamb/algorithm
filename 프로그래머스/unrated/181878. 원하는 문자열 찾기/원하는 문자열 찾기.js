function solution(myString, pat) {
    let answer = 0;
    const [lowerMS, lowerPat] = [myString.toLowerCase(), pat.toLowerCase()]
    const [msLen, patLen] = [myString.length, pat.length]
    for (let i=0; i<=msLen-patLen; i++){
        const isSame = lowerMS.slice(i, i+patLen) === lowerPat
        if (isSame) {
            answer = 1; 
            break;
        }
    }
    return answer;
}