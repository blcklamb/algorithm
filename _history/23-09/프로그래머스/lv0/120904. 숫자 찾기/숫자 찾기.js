function solution(num, k) {
    let idx = num.toString().indexOf(k) + 1
    return idx || -1;
}