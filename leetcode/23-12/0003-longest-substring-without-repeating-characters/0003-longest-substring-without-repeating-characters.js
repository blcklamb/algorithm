/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const sList = [...s]
    let answer = 0
    while (sList.length > 0){
        const subStringList = [sList.pop()]
        
        for (let i = sList.length-1 ; i >= 0; i--){
            if (subStringList.includes(sList[i])){
                break
            }
            subStringList.push(sList[i])
        }
        answer = Math.max(answer, subStringList.length)
    }
    return answer
    
};