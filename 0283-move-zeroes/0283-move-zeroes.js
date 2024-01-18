/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeroCount = 0
    while(true){
        const zeroIndex = nums.indexOf(0)
        if (zeroIndex === -1) break
        nums.splice(zeroIndex, 1)
        zeroCount += 1
    }
    
    for (let i = 0; i < zeroCount; i++){
        nums.push(0)
    }
};