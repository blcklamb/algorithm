function solution(my_string) {
    return [...my_string]
        .filter(ele => !isNaN(ele))
        .map(ele => parseInt(ele))
        .sort((a, b) => a - b);
}