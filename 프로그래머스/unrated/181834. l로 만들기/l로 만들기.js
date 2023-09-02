function solution(myString) {
    return [...myString].map(ele => (ele < 'l') ? 'l':ele).join('');
}