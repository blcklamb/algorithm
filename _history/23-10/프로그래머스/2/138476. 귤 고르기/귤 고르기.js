function solution(k, tangerine) {
    var answer = 0;
    let tanArr = Array(Math.max(...tangerine)+1).fill(0)
    tangerine.forEach(ele => tanArr[ele] += 1)
    tanArr.sort((a, b) => b - a)
    for (let i = 0 ; i < tanArr.length; i++){
        k -= tanArr[i];
        answer += 1;
        if (k<=0) break
    }
    
    return answer;
}