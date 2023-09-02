function solution(n) {
    const square = n**(1/2)
    return square === parseInt(square) ? 1 : 2
}