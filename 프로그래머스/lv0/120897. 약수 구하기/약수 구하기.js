function solution(n) {
    return Array.from({length: n}, (_, idx) => idx + 1).filter(ele => n % ele === 0);
}