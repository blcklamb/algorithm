function solution(my_string) {
    return [...my_string].reduce((a, b) => !isNaN(b) ? a + ~~b : a, 0);
}