/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function(root) {
    if (!root) return 0
    const queue = [[root, 1]]
    let maxDepth = 1
    while (queue.length > 0){
        const [node, depth]  = queue.shift()
        const [left, right] = [node.left, node.right]
        if (left || right) maxDepth = Math.max(depth+1, maxDepth)
        if (left) queue.push([left, depth+1])
        if (right) queue.push([right, depth+1])
    }
    return maxDepth
};