function solution(polynomial) {
    let [coeffiX, constant] = polynomial.split('+').reduce((a, b) => {
        if (b.trim() === 'x') {a[0] += 1}
        else if (b.includes('x')) {a[0] += +(b.split('x')[0])}
        else {a[1] += +b}
        return a
    }, [0, 0])
    
    let result = ''
    if (constant === 0) {
        if (coeffiX === 1) {result = 'x'}
        else if (coeffiX === 0) {result = ''}
        else {result = `${coeffiX}x`}
    } else {
        if (coeffiX === 1) {result = `x + ${constant}`}
        else if (coeffiX === 0) {result = `${constant}`}
        else {result = `${coeffiX}x + ${constant}`}
    }
    return result;
}