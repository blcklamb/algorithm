function solution(my_string, n) {    
    return [...my_string].reduce((a, b) => a + b.repeat(n), '');
}