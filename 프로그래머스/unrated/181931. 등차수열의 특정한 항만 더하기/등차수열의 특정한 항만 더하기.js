function solution(a, d, included) {
    return Array
        .from({length: included.length+1}, (_, idx) =>  a + d*idx)
        .filter((_, idx) => included[idx])
        .reduce((a, b) => a+ b, 0);
}