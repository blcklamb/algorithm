function solution(a, b) {
    const A = a.toString()
    const B = b.toString()
    const AB = parseInt(A + B)
    const BA = parseInt(B + A)
    return AB >= BA ? AB : BA;
}

// function solution(a, b) {
    // return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))
// }