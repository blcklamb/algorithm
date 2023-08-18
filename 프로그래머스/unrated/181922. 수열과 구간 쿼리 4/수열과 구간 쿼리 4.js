function solution(arr, queries) {
    const N = arr.length
    queries.forEach(([s, e, k]) => {
        Array.from({length: N}, (_, idx) => idx)
            .filter(ele => s <= ele && ele <= e && ele % k == 0)
            .forEach(ele => arr[ele] += 1)  
    })
    return arr;
}