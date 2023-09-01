function solution(arr, k) {
    var answer = arr.reduce((prev, curr, _, redArr) => {
        if (prev.length === k) {redArr.splice(1); return prev}
        if (prev.length === 0) return [curr]
        if (!prev.includes(curr)) return [...prev, curr]
        return prev
    }, [])
    while (answer.length < k){
        answer.push(-1)
    }
    return answer;
}