/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const [set1, set2] = [new Set(nums1), new Set(nums2)]
    const [answer1, answer2] = [[], []]
    for (const ele1 of set1){
        if (!set2.has(ele1)) answer1.push(ele1)
    }
    for (const ele2 of set2){
        if (!set1.has(ele2)) answer2.push(ele2)
    }
    return [answer1, answer2]
};