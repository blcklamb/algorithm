/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const prefixProduct = Array(nums.length).fill(null)
    const suffixProduct = Array(nums.length).fill(null)
    prefixProduct[0] = 1
    suffixProduct[nums.length-1] = 1
    
    for (let i = 1; i < nums.length; i++){
        prefixProduct[i] = prefixProduct[i-1] * nums[i-1]
        suffixProduct[nums.length - 1 - i] = suffixProduct[nums.length - i] * nums[nums.length - i]
    }
    
    return prefixProduct.map((ele, idx) => ele * suffixProduct[idx])
};