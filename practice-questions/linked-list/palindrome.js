/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function palindrome(head) {
  let dummy = new ListNode(0);
  dummy.next = head;

  // 1. get the middle
  let slow = head,
    fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  //2. reverse from middle onward
  let prev = null,
    current = slow;

  while (current !== null) {
    let node = current.next;

    current.next = prev;
    prev = current;
    current = node;
  }

  // 3. prev holds my reverse list. compare both halves
  let left = head,
    right = prev;
  while (right !== null) {
    if (left.val !== right.val) {
      return false; // it is not a palindrome
    }
    left = left.next;
    right = right.next;
  }

  return true; // it is a palindrome
}
