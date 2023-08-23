function solution(q, r, code) {
    return Array
        .from({length: Math.ceil(code.length / q)}, (_, idx) => q*idx + r)
        .reduce((a, b) => a + (code[b] || ''), '');
}