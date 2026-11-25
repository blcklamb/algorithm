/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const memo = [0, 1, 1]
    if (n < 3) return memo[n]
    
    for (let i = 3; i <= n; i++){
        const curr = memo.reduce((a, b) => a + b, 0)
        memo.shift()
        memo.push(curr)
    }
    
    return memo[2]
};