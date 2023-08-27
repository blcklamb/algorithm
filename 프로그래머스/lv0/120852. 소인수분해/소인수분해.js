function isPrimeNum(n) {
    if (n == 1) return false
    for (let i = 2; i <= Math.floor(n/2); i++){
        if (n % i == 0) return false
    }
    return true
}

function solution(n) {
    var answer = [];
    for (let i = 2; i <= n; i++){
        if (n % i == 0 && isPrimeNum(i)) answer.push(i)
    }
    return answer;
}