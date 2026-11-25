function solution(a, b, c) {
    let answer = a + b + c
    const arr = [a, b, c].sort((a, b) => a - b)
    if (arr[1] === arr[0] || arr[1] === arr[2]){
        answer *= (a**2 + b**2 + c**2)
    }
    if (arr[0] === arr[2]) {
        answer *= (a**3 + b**3 + c**3)
    }
    return answer
}