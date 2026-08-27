/**
 * @param {TreeNode | null} configRoot
 * @returns {boolean}
 */

// recursive traversal
function isMirroredConfig(configRoot) {
  function isMirror(left, right) {
    if (!left && !right) {
      return true;
    }

    if (!left || !right) {
      return false;
    }

    if (left.val !== right.val) {
      return false;
    }

    return isMirror(left.left, right.right) && isMirror(left.right, right.left);
  }

  return isMirror(configRoot, configRoot);
}

// iterative traversal

function isMirroredConfig(configRoot) {
  if (!configRoot) {
    return null;
  }

  let queue = [configRoot.left, configRoot.right];

  while (queue.length) {
    let left = queue.shift();
    let right = queue.shift();

    if (!left && !right) {
      continue;
    }

    if (!left || !right) {
      return false;
    }

    if (left.val !== right.val) {
      return false;
    }
    queue.push(left.left);
    queue.push(right.right);

    queue.push(left.right);
    queue.push(right.left);
  }

  return true;
}
