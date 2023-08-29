function solution(array, n) {
    array.sort((a, b) => {
        if (Math.abs(a - n) < Math.abs(b - n)) return -1
        if (Math.abs(a - n) > Math.abs(b - n)) return 1
        return a - b
    })
    return array[0];
}