function solution(start, end) {
    return Array.from({length: end - start + 1}, (_, idx) => idx+start);
}