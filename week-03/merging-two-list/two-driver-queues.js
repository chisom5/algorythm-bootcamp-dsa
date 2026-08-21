/**
 * Platform type: ListNode
 * - node.val is the node's value.
 * - node.next is the next node, or null.
 *
 * @param {ListNode | null} hubQueue
 * @param {ListNode | null} overflowQueue
 * @returns {ListNode | null}
 */
function mergeDriverQueues(hubQueue, overflowQueue) {
    let dummy = new ListNode(0)
    let tail = dummy;

    let currentHub = hubQueue;
    let currentOverflow = overflowQueue;

    while (currentHub !== null && currentOverflow !== null) {
        if (currentHub.val <= currentOverflow.val) {
            let next = currentHub.next;

            tail.next = currentHub;
            currentHub = next;
        } else {
            let next = currentOverflow.next;

            tail.next = currentOverflow;
            currentOverflow = next;
        }
        
        tail = tail.next;
    }

    tail.next = currentHub || currentOverflow;

    return dummy.next;

}
