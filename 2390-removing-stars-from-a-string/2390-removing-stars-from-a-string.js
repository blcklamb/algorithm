/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const left = []
    const right = s.split('').reverse()
    while (right.length > 0){
        const current = right.pop()
        if (current === '*'){
            left.pop()
        } else {
            left.push(current)
        }
    }
    return left.join('')
};