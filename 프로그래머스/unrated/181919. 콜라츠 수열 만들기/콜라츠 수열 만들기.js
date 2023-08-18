function solution(n) {
    var answer = [n];
    while (true){
        const lastEle = answer[answer.length -1] 
        if (lastEle === 1) break
        if (lastEle % 2 === 0) answer.push(lastEle/2); 
        else answer.push(lastEle * 3 +1)
    }
    return answer;
}