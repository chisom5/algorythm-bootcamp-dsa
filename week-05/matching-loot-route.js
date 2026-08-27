/**
 * Platform type: TreeNode
 * - node.val is the node's value.
 * - node.left and node.right are child nodes, or null.
 *
 * @param {TreeNode | null} lootRouteA
 * @param {TreeNode | null} lootRouteB
 * @returns {boolean}
 */

function matchesLootRoute(lootRouteA, lootRouteB) {
  //if both are empty
  if (!lootRouteA && !lootRouteB) {
    return true;
  }
  // if one is empty
  if (!lootRouteA || !lootRouteB) {
    return false;
  }
  // different score
  if (lootRouteA.val !== lootRouteB.val) {
    return false;
  }

  return (
    matchesLootRoute(lootRouteA.left, lootRouteB.left) &&
    matchesLootRoute(lootRouteA.right, lootRouteB.right)
  );
}
