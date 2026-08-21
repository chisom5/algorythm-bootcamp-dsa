/**
 * Platform type: ListNode
 * - node.val is the node's value.
 * - node.next is the next node, or null.
 *
 * @param {ListNode | null} review
 * @returns {ListNode | null}
 */
function findReviewMidpoint(review) {
    let slow = review;
    let fast = review;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
    
}
