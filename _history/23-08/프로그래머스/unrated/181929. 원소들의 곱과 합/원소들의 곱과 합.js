function solution(num_list) {
    const mul = num_list.reduce((a, b) => a * b, 1)
    const sum = num_list.reduce((a, b) => a + b, 0)
    return mul < sum**2 ? 1: 0;
}