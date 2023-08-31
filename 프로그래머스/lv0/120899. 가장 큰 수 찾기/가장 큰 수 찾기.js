function solution(array) {
    return array.reduce(([val, valIdx], b, idx) => {
        return (val < b) ? [b, idx] : [val, valIdx]
    }, [0, 0]);
}