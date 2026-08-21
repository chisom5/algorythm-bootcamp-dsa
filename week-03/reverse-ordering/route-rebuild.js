/**
 * Platform type: ListNode
 * - node.val is the node's value.
 * - node.next is the next node, or null.
 *
 * @param {ListNode | null} order
 * @returns {ListNode | null}
 */

function rebuildReturnRoute(order) {
    let previous = null;
    let current = order;

    while(current !== null){
        
        let next = current.next;

        current.next = previous;
        previous = current;

        current = next;
    }

    return previous;
}