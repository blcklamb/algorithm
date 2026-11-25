/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let answer = '';
    let firstIdx = 0;
    const circuitUnit = 2*numRows-2
    
    if (numRows === 1) return s
    
    for (let r = 0; r < numRows; r++){
        
        const putOnce = r % circuitUnit === 0 || r % circuitUnit === numRows - 1
        
        for (let i = firstIdx; i < s.length; i+= circuitUnit){
            answer += s[i]
            if (!putOnce && i+2*(numRows-(i%circuitUnit)-1) < s.length){
                answer += s[i+2*(numRows-(i%circuitUnit)-1)]
            }
        }
        firstIdx += 1
    }
    return answer
};