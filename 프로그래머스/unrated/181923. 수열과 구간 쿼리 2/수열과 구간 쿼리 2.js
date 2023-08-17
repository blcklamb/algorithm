function solution(arr, queries) {
    return queries.map(([s, e, k])=> {
        return arr.slice(s, e+1).reduce((a, val) => {
            if (a === -1) return val > k ? val : a
            return (val > k && (val - k) < (a - k)) ? val : a
        }, -1)
    });
}