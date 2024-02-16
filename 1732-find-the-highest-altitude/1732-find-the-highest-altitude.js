/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let highest = 0
    let current = 0
    for (const gain_ele of gain){
        current += gain_ele
        highest = Math.max(highest, current)
    }
    return highest
};