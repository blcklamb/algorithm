function solution(arr, queries) {
    queries.forEach((ele) => {
        const [a, b] = ele
        const [prevA, prevB] = [arr[a], arr[b]]
        arr[a] = prevB
        arr[b] = prevA
    })
    return arr;
}