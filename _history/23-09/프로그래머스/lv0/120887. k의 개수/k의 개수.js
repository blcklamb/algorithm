function solution(i, j, k) {
    return Array
        .from({length: j - i +1}, (_, idx) => (i + idx)+'')
        .reduce((a, b) => {
        return a + (b+k).match(new RegExp(`${k}`, 'g')).length -1
    }, 0);
}