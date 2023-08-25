function solution(box, n) {
    return box.map(ele => parseInt(ele/n)).reduce((a, b) => a * b, 1);
}