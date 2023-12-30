/**
 * @param {string} s
 * @return {string}
 */
const isPalindrome = function(s) {
    return s.split('').reverse().join("") === s
}
var longestPalindrome = function(s) {
    const sLen = s.length
    if (sLen === 1) return s

    let [idx, len] = [0, 0] 
    for (let i = 0; i < sLen; i++){
        if (isPalindrome(s.substring(i-len, i+1))){
            [idx, len] = [i-len, len+1]
        } else if (i > len && isPalindrome(s.substring(i-len-1, i+1))){
            [idx, len] = [i-len-1, len+2]
        }
    }
    return s.substr(idx, len)
};