function solution(arr, idx) {
    return arr.map((ele, arrIdx) => (arrIdx<idx) ? 0 : ele).indexOf(1);
}