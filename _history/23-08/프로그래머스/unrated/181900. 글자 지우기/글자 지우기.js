function solution(my_string, indices) {
    return [...my_string]
        .filter((_, idx) => indices.indexOf(idx) === -1)
        .join('');
}