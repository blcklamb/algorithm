function solution(arr, flag) {
    var answer = [];
    arr.forEach((ele, idx) => {
        if (flag[idx]) {
            for (let i = 0; i < ele*2; i++) answer.push(ele)
        } else {
            for (let i = 0; i < ele; i++)answer.pop()
        }
    })
    return answer;
}