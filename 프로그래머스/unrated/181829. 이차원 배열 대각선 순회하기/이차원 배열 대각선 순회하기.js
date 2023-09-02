function solution(board, k) {
    return board.reduce((a, b, rIdx) => {
        return a + b.reduce((prev, ele, cIdx) => (rIdx + cIdx <= k) ? prev + ele : prev, 0)
    }, 0);
}