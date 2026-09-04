/**
 * @param {TreeNode | null} root
 * @returns {number}
 */
function minDepth(root) {
  if (!root) {
    return 0;
  }

  let queue = [root];
  let depth = 1;

  while (queue.length) {
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();

      if (!node.left && !node.right) {
        return depth;
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    depth++;
  }

  return depth;
}
