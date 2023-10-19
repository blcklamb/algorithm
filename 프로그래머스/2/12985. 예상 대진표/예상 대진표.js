function getBaseBy2(n){
    return Math.log(n) / Math.log(2)
}
function binary(n, maxRound){
    return (n-1).toString(2).padStart(maxRound, '0')
}
function solution(n,a,b) {
    let maxRound = getBaseBy2(n)
    var answer = maxRound 
    
    let a2 = binary(a, maxRound)
    let b2 = binary(b, maxRound)

    for (let i = 0; i < a2.length; i++){
        if (a2[i] != b2[i]) break
        answer -= 1
    }
    
    return answer;
}