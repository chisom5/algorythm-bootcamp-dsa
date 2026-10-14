/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @returns {TreeNode}
 */

function lowestCommonAncestor(root, p, q) {
  if (!root) return null;

  while (root) {
    // both are smaller
    if (p.val < root.val && q.val < root.val) {
      root = root.left;
    }
    // both are bigger
    else if (p.val > root.val && q.val > root.val) {
      root = root.right;
    } else {
      return root;
    }
  }

  return null;
}
