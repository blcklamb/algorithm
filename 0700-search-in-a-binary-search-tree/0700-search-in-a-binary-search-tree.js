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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let queue = [root]
    if (root.val === val) return root
    
    while (queue.length > 0){
        const curr = queue.shift()
        const left = curr.left
        const right = curr.right
        if (left) {
            if (left.val === val) return left
            queue.push(left)
        }
        if (right) {
            if (right.val === val) return right
            queue.push(right)
        }
    }
    
    return null
};