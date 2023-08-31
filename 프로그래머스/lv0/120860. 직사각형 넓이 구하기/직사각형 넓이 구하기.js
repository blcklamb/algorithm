function solution(dots) {
    return dots.reduce(([resW, resH], [w, h]) => {
        resW.push(w)
        resH.push(h)
        return [[...new Set(resW)], [...new Set(resH)]]
    }, [[], []]).reduce((a, [s, e]) => a*(Math.abs(s-e)), 1);
}