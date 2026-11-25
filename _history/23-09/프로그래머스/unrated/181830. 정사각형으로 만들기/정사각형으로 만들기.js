function solution(arr) {
    var answer = [[]];
    const [lenRow, lenCol] = [arr.length, arr[0].length]
    if (lenRow > lenCol){
        answer = arr.map(ele => ele.concat(Array(lenRow - lenCol).fill(0)))
    } else if (lenRow < lenCol){
        answer = arr.concat(Array(lenCol - lenRow).fill(Array(lenCol).fill(0)))
    } else {
        answer = arr.slice(0)
    }
    return answer;
}