function solution(arr, k) {
    const isKEven = k % 2 === 0
    return arr.map((ele) => isKEven ? ele + k : ele * k);
}