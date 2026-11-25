function solution(n) {
    return n % 2 === 0 ? 
        Array.from({length: parseInt(n/2)}, (_, idx) => (idx+1)*2).reduce((a, b) => a + b*b, 0) 
    : 
    Array.from({length: parseInt((n+1)/2)}, (_, idx) => (idx)*2+1).reduce((a, b) => a + b, 0);
}