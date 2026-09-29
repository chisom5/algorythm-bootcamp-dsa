/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
function reverseBetween(head, left, right) {
  let dummy = new ListNode(0);
  dummy.next = head;

  let prev = dummy;

  //  set prev at this position = left - 1
  for (let i = 1; i < left; i++) {
    prev = prev.next;
  }

  let slow = prev.next; //start point
  let fast = slow; //ending point

  for (let i = left; i <= right; i++) {
    fast = fast.next;
  }

  // reverse
  let curr = slow;
  let subPrev = fast;

  while (curr !== subPrev) {
    let next = curr.next;

    curr.next = subPrev;
    subPrev = curr;

    curr = next;
  }

  //   reconnect what's remaining.
  prev.next = subPrev;

  return dummy.next;
}

/**
 * I have to know where I am starting in the reverse and where i end.
 * prev - point the node before left.
 * traverse the list to reverse between left and right
 * then reconnect the reverse section to the rest.
 */
