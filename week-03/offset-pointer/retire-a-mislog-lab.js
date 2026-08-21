/**
 * @param {ListNode | null} sampleChain
 * @param {number} backwardPosition
 * @returns {ListNode | null}
 */
function retireAuditedReading(sampleChain, backwardPosition) {
  let dummy = new ListNode(0);
  dummy.next = sampleChain;
  
  let slow = dummy, fast = dummy;

  for (let i = 0; i < backwardPosition; i++) {
    if (fast.next == null) {
      return dummy;
    }
    fast = fast.next;
  }

  while(fast.next !== null){
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return dummy.next;
}
