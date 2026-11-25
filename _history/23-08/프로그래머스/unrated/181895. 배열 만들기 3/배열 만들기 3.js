function solution(arr, intervals) {
    return intervals.reduce((a, b) => {
        const [start, end] = b
        const sliced = arr.slice(start, end+1)
        return a.concat(sliced)
    }, []);
}