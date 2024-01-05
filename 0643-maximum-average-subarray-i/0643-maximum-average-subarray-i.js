/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let subArray = nums.slice(0, k)
    let sum = subArray.reduce((a, b) => a + b, 0)
    let answer = sum
    
    for (let i=0; i < nums.length -k; i++){
        const outNum = nums[i]
        const inNum = nums[i+k]
        sum = sum - outNum + inNum
        if (answer < sum){
            answer = sum
        }
    }
    return (answer / k).toFixed(5)
};