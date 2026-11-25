/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let min = 1
    let max = n
    while (min < max){
        let answer = Math.floor((min + max)/2)
        const guessResult = guess(answer)
        if (guessResult === 0) return answer
        if (guessResult === -1) {
            max = answer
        }
        if (guessResult === 1){
            min = answer + 1
        }
    }
    return n
};