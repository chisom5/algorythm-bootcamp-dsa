/**
 * @param {TreeNode} root
 * @param {number} k
 * @returns {number}
 */
function kthSmallest(root, k) {
  const stack = [];
  let count = 0;

  let node = root;

  while (node || stack.length) {
    while (node) {
      stack.push(node);
      node = node.left;
    }

    node = stack.pop();
    count++;

    if (count === k) {
      return node.val;
    }

    node = node.right;
  }

  return -1;
}
