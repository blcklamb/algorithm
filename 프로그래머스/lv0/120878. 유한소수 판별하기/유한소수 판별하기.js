function getPrimeFactors(n) {
    const result = [];
    let divider = 2;
    while (divider <= n**(1/2) || n != 1){
        if (n % divider === 0) {
            result.push(divider)
            n /= divider
        } else {
            divider += 1
        }
    }
    return result
}
function solution(a, b) {
    var answer = 0;
    const [numerator, denominator] = [getPrimeFactors(a), getPrimeFactors(b)]
    const ans = denominator.filter(ele => {
        const numIdx = numerator.indexOf(ele)
        if (numIdx != -1){
            numerator.splice(numIdx, 1)
            return false
        }
        return true
    }).join('').replaceAll('2', '').replaceAll('5', '').length
    return 1 + (ans===0 ? 0 : 1);
}