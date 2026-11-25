
function solution(bin1, bin2) {
    var answer = '';
    let [i, j] = [bin1.length - 1 , bin2.length - 1]
    let carry = 0
    while (i >= 0 || j >= 0){
        let m = i < 0 ? 0 : bin1[i]
        let n = j < 0 ? 0 : bin2[j]
        carry += +m + +n
        answer = carry % 2 + answer
        carry = carry/2 | 0
        i--;
        j--;
    }
    if (carry != 0) {answer = carry + answer}
    return answer;
}