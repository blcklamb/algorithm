function solution(n) {
    return Array.from({length: ~~n/2+1}, (_, idx) => idx*2).reduce((a, b) => a+b, 0);
}