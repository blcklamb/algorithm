function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let [numer, denom] = [numer1 * denom2 + numer2 * denom1, denom1 * denom2]

    const minDiv = Math.min(numer, denom)
    
    const getDivisor = (num) => {
        return Array.from({length: num}, (_, idx) => idx + 1).filter((ele) => num % ele === 0)
    }
    
    let GCD = 1
    getDivisor(minDiv).forEach((ele) => {
        if (numer % ele === 0 & denom % ele === 0){
            GCD = ele
        }
    })
    
    return [numer/ GCD, denom / GCD];
}