function solution(my_strings, parts) {
    return my_strings.reduce((a, b, i) => {
        const [s, e] = parts[i]
        return a + b.slice(s, e+1)
    }, '');
}