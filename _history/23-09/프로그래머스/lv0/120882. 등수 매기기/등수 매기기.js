function solution(score) {
    const average = score.map(([a, b]) => (a+b)).sort((a, b) => b - a)
    return score.map(([a,b]) => average.indexOf(a+b)+1);
}