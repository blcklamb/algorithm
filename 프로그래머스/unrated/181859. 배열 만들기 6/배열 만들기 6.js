function solution(arr) {
    const result = arr.reduce((prev, curr, i) => {
        if (prev.length === 0) return [curr]
        if (prev[prev.length -1] === curr) return prev.slice(0, prev.length-1)
        return [...prev, curr]
    }, []) 
    return result.length > 0 ? result : [-1];
}