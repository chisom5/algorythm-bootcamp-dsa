/**
 * @param {TreeNode | null} root
 * @returns {boolean}
 */
function isValidBST(root) {
  function checkValid(node, low, high) {
    if (!node) return true;

    if (!(low < node.val && node.val < high)) return false;

    return (
      checkValid(node.left, low, node.val) &&
      checkValid(node.right, node.val, high)
    );
  }

  return checkValid(root, -Infinity, Infinity);
}
