function solution(array) {
    return array.reduce((a,b) => a + (b.toString() + '7').match(/7/g).length - 1, 0);
}