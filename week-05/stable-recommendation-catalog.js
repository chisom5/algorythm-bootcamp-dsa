/**
 * @param {TreeNode | null} catalogRoot
 * @returns {boolean}
 *
 * A catalog is considered stable when, for every product in the structure,
 * the depth of its left suggestion chain and right suggestion chain differ by no more than one.
 */

function isCatalogStable(catalogRoot) {
    // return boolean
    return checkDepth(catalogRoot) !==  -1
}

function checkDepth(node) {
  if (!node) {
    return 0;
  }

  let leftDepth = checkDepth(node.left);
  if (leftDepth === -1) return -1; // not balance

  let rightDepth = checkDepth(node.right);
  if (rightDepth === -1) return -1; // not balance

  if (Math.abs(leftDepth - rightDepth) > 1) {
    return -1;
  }

  return 1 + Math.max(leftDepth, rightDepth);
}
