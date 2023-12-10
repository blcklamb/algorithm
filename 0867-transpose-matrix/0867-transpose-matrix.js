/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const transposed = Array.from({length: matrix[0].length}, () => Array(matrix.length).fill(0))
    matrix.forEach((row, rIdx) => {
        row.forEach((ele, cIdx) => {
            transposed[cIdx][rIdx] = ele
        })
    })
    return transposed
};