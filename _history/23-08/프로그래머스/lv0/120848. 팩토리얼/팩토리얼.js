function solution(n) {
    const DP = [0, 1]
    while (DP[DP.length - 1] * DP.length <= n){
        DP.push(DP[DP.length - 1] * DP.length)
    }
    return DP.length - 1;
}