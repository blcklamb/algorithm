function solution(a, b, c, d) {
    if ( a === b & a === c & a === d){
        return 1111 * a
    }
    
    const sorted_dice = [a, b, c, d].sort((a, b) => b - a)
    const [st0, st1, st2, st3] = sorted_dice
    
    
    if (st0 === st1 & st0 === st2){
        return (10*st0 + st3)**2
    }
    if (st1 === st2 & st1 === st3){
        return (10*st1 + st0)**2
    }
    
    if (st0 === st1 & st2 === st3){
        return (st0 + st2)*(st0 - st2)
    }
    if (st0 === st1 | st1 === st2 | st2 === st3){
        const count = (x, arr) => arr.filter(ele => ele === x).length
        let [p, q, r] = [st2, st0, st1]
        if (count(st0, sorted_dice) === 2) [p, q, r] = [st0, st2, st3]
        else if (count(st1, sorted_dice) === 2) [p, q, r] = [st1, st0, st3]
        return q * r
    }
    return st3;
}