/**
 * Platform type: TreeNode
 * - node.val is the node's value.
 * - node.left and node.right are child nodes, or null.
 *
 * @param {TreeNode | null} trip
 * @returns {number}
 */
function deepestEscalationChain(trip) {
  if (!trip) {
    return 0;
  }

  let leftDepth = deepestEscalationChain(trip.left);
  let rightDepth = deepestEscalationChain(trip.right);

  return 1 + Math.max(leftDepth, rightDepth);
}
