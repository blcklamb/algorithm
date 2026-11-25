function solution(strArr) {
    return strArr.map((ele, idx) => idx % 2 === 0 ? ele.toLowerCase() : ele.toUpperCase());
}