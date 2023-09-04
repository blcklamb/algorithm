function solution(sides) {
    const sum = sides[0] + sides[1]
    const max = Math.max(...sides)
    const isGivenLongest = sum - max
    const isRandomLongest = sum - 1 - max
    return isGivenLongest + isRandomLongest;
}