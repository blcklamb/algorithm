/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const [W1LEN, W2LEN] = [word1.length, word2.length]
    let answer = ''
    for (let i = 0; i < Math.min(W1LEN, W2LEN); i++){
        answer += word1[i]
        answer += word2[i]
    }
    
    if (W1LEN > W2LEN){
        answer += word1.slice(W2LEN)
    } else {
        answer += word2.slice(W1LEN)
    }
    
    return answer
};