function solution(n, control) {
    var answer = n;
    let controlObj = {'w':0, 's':0, 'd':0, 'a':0}
    control.split('').forEach(ele => controlObj[ele] += 1)
    const {w, s, d, a} = controlObj
    
    const amount1 = Math.abs(w - s)
    w > s ? answer += amount1 : answer -= amount1
    const amount10 = Math.abs(d - a)*10
    d > a ? answer += amount10 : answer -= amount10
    
    return answer;
}