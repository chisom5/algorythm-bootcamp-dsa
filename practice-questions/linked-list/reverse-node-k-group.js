/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function reverseKGroup(head, k) {
  // create a dummy node
  let dummy = new ListNode(0);
  dummy.next = head;

  let slow = dummy,
    fast = dummy;

  while (true) {
    // traverse forward to k steps.
    for (let i = 0; i < k; i++) {
      if (fast.next === null) {
        return dummy;
      }

      fast = fast.next;
    }

    // reverse
    let prev = fast.next,
      current = slow.next;
    let startOfGroup = current;

    for (let i = 0; i < k; i++) {
      let node = current.next;

      current.next = prev;
      prev = current;
      current = node;
    }

    slow.next = prev;

    // the tail of one group point to the head of another group.
    slow = startOfGroup;
    fast = startOfGroup;
  }
}
