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

  return hasMatchingPathCost(execRoot.left, budgetTarget) || hasMatchingPathCost(execRoot.right, budgetTarget);
}