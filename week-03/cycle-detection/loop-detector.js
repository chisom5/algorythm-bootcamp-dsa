/**
 * @param {ListNode | null} server
 * @returns {boolean}
 */
function hasDeploymentLoop(server) {
  let slow = server, fast = server;

  while (fast !== null && fast.next !== null) {

    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}