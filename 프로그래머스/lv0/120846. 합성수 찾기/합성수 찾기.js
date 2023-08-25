function isCompositeNum(n) {
    for (let i = 2; i <= n; i++){
        if (n%i === 0 & i != n) return true
    }
    return false
}

function solution(n) {
    var answer = 0;
    for (let i = 1; i <= n; i++){
        if (isCompositeNum(i)) answer += 1
    }
    return answer;
}