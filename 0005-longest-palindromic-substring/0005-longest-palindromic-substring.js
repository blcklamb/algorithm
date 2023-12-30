/**
 * @param {string} s
 * @return {string}
 */
const isPalindrome = function(s) {
    const sLen = s.length
    for (let i = 0; i < (Math.floor(sLen-1) / 2); i++){
        if (s[i] !== s[sLen-1-i]) return false
    }
    return true
}
var longestPalindrome = function(s) {
    let answer = s[0]
    const sLen = s.length
    for (let i = 0; i < sLen-1; i++){
        for (let j = i+answer.length; j < sLen; j++){
            if (isPalindrome(s.substring(i, j+1))){
                answer = s.substring(i, j+1)
            }
        }
    }
    return answer
};