function solution(my_str, n) {
    return Array.from({length: Math.ceil(my_str.length / n)}, (_, idx) => {
        return my_str.substring(idx*n, (idx*n)+n)
    });
}