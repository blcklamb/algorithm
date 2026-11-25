function solution(num, total) {
    const start = num % 2 === 1 
    ? (total / num) - ~~(num / 2) : ((total / (num/2)) - num + 1)/2
    return Array.from({length: num}, (_, idx) => idx + start);
}