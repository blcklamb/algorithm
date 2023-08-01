function solution(n) {
    return Array(parseInt((n+1)/2)).fill(null).map((ele, idx)=> idx*2+1);
}