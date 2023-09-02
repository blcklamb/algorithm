function solution(arr, k) {
    const isKEven = k % 2 === 0
    const INIT = isKEven ? 0 : 1
    return arr.map((ele) => isKEven ? ele + k : ele * k, INIT);
}