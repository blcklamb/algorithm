function solution(number) {
    return number.toString().split('').reduce((a, b) => a+parseInt(b), 0) % 9
}