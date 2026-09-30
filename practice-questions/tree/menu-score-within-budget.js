/**
 * @param {TreeNode | null} restaurantMenu
 * @param {number} minScore
 * @param {number} maxScore
 * @returns {number}
 */

// Recursion
function sumMenuScoresInBand(restaurantMenu, minScore, maxScore) {
  // base case
  if (!restaurantMenu) return 0;

  let total = 0;

  if (restaurantMenu.val >= minScore && restaurantMenu.val <= maxScore) {
    total += restaurantMenu.val;
  }

  // move left
  if (restaurantMenu.val > minScore) {
    total += sumMenuScoresInBand(restaurantMenu.left, minScore, maxScore);
  }
  // move right
  if (restaurantMenu.val < maxScore) {
    total += sumMenuScoresInBand(restaurantMenu.right, minScore, maxScore);
  }

  return total;
}

// using Stack/Queue

function sumMenuScoresInBand(restaurantMenu, minScore, maxScore) {
  if (!restaurantMenu) return 0;

  let total = 0;

  const queue = [restaurantMenu];
  let front = 0;

  while (queue.length) {
    let node = queue[front++];

    // within range
    if (node.val >= minScore && node.val <= maxScore) {
      total += node.val;
    }

    if (node.left && node.val > minScore) {
      queue.push(node.left);
    }
    if (node.right && node.val < maxScore) {
      queue.push(node.right);
    }
  }

  return total;
}
