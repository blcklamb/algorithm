function solution(intStrs, k, s, l) {
    return intStrs.map((ele) => parseInt(ele.slice(s, s+l))).filter(ele => ele > k);
}