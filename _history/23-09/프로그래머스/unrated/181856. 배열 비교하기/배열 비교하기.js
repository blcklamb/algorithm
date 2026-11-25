function solution(arr1, arr2) {
    var answer = 0;
    const [len1, len2] = [arr1.length, arr2.length]
    if (len1 !== len2){
        return (len1>len2) ? 1 : -1
    }
    const sum = (arr) => arr.reduce((a, b) => a+b)
    const [sum1, sum2] = [sum(arr1), sum(arr2)]
    if (sum1 !== sum2) {
        return (sum1>sum2) ? 1 : -1
    }
    return 0
}