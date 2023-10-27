function solution(n) {
    var answer = n + 1;
    const get1Count = (str) => str.toString(2).split('').filter(ele => ele === '1').length
    const n2Base = get1Count(n)
    
    while (get1Count(answer) !== n2Base) answer += 1
    
    return answer;
}