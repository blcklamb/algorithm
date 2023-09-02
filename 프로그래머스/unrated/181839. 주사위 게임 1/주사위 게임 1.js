function solution(a, b) {
    const isAOdd = a % 2 != 0;
    const isBOdd = b % 2 != 0;
    return isAOdd & isBOdd ? a**2 + b**2 : isAOdd | isBOdd ? 2*(a + b) : Math.abs(a - b);
}