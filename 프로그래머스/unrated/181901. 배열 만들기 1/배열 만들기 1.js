function solution(n, k) {
    return Array.from({length: Math.floor(n/k)}, (_, idx) => (idx+1)*k)
}