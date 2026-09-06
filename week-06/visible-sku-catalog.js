/**
 * @param {TreeNode | null} root
 * @returns {number[]}
 */
function rightSideView(root) {
  if (!root) {
    return [];
  }

  let queue = [root];
  let result = [];

  while (queue.length) {
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();

      if (i === levelSize - 1) {
        result.push(node.val);
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return result;
}
