/**
 * @param {TreeNode | null} execRoot
 * @param {number} budgetTarget
 * @returns {boolean}
 */

function hasMatchingPathCost(execRoot, budgetTarget) {
  if (!execRoot) return false;

  budgetTarget -= execRoot.val;

  if (!execRoot.left && !execRoot.right && budgetTarget === 0) {
    return true;
  }

  return (
    hasMatchingPathCost(execRoot.left, budgetTarget) ||
    hasMatchingPathCost(execRoot.right, budgetTarget)
  );
}

// using Stack or Queue
function hasMatchingPathCost(execRoot, budgetTarget) {
  if (!execRoot) return false;

  const queue = [execRoot];
  let front = 0;

  while (front < queue.length) {
    let node = queue[front++];

    budgetTarget -= node.val;

    if (!node.left && !node.right && budgetTarget === 0) {
      return true;
    }

    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  // end of iteration
  return false;
}
