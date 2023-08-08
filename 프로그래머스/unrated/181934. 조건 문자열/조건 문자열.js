function solution(ineq, eq, n, m) {
    var answer = 0;
    if (ineq === '>'){
        answer = (eq === '=') ? n >= m : n > m
    } else {
        answer = (eq === '=') ? n <= m : n < m
    }
    return +answer;
}