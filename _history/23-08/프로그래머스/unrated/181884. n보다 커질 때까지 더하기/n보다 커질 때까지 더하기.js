function solution(numbers, n) {
    return numbers.reduce((a, b, _ , arr) => {
        if (a+b>n) arr.splice(1)
        return a+b
    }, 0);
}