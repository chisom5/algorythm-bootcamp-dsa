/**
 * @param {ListNode | null} releaseChain
 * @returns {ListNode | null}
 */
function cleanReleaseChain(releaseChain) {
  let current = releaseChain;
  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      //skip
      current.next = current.next.next;
    }else{
    current = current.next;
    }
  }

  return releaseChain;
}
