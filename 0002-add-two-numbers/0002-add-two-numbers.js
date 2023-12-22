/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let answer = new ListNode(0)
    let answerLN = answer
    
    let left = 0

    while (l1 || l2){
        let curr = left
        if (l1){
            curr += l1.val
            l1 = l1.next
        }
        if (l2) {
            curr += l2.val
            l2 = l2.next
        }

        left = Math.floor(curr / 10 )
        curr -= left*10
        answerLN.next = new ListNode(curr)
        answerLN = answerLN.next
    }
    if (left){
        answerLN.next = new ListNode(left)
        answerLN = answerLN.next
    }

    return answer.next
};