function solution(my_string) {
    return my_string.split(/[a-zA-Z]/g).reduce((a, b) => a + +b, 0);
}