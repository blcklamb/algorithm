function solution(myString) {
    return [...myString].map(ele => ele === 'a' || ele === 'A' ? 'A': ele.toLowerCase()).join('');
}