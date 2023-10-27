function solution(n) {
    var answer = 1;
    for (let i = 2; i <= Math.ceil(n/2);i++){
        const start = (n/i + (1-i)/2)
        if (start === parseInt(start) && start > 0) answer += 1
    }
    return answer;
}