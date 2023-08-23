function solution(my_string) {
    const A = 65
    const charArr = Array.from({length: 58}).fill(0);
    [...my_string].forEach(ele =>  charArr[ele.charCodeAt(0)-A] += 1);
    charArr.splice(26, 6)
    return charArr;
}