/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false
    const len = Math.ceil(Math.log10(x+1))
    for (let i = 0; i < len/2;i++ ){
        const front = (x - x%(10**(len-1-i)))/(10**(len-1-i))%10
        const back = (x - x%(10**(i)))/(10**(i))%10
        if (front !== back) return false
    }
    return true
};