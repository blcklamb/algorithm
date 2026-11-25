function solution(strArr) {
    const lenArr = Array(31).fill(0)
    strArr.forEach(ele=> lenArr[ele.length] += 1)
    return Math.max(...lenArr);
}