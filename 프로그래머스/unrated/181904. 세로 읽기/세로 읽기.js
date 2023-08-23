function solution(my_string, m, c) {
    return Array
        .from({length: my_string.length / m}, (_, idx) => m*idx+ (c-1))
        .reduce((a, b) => a + my_string[b], '');
}