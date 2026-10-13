/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
function cloneGraph(node) {
  if (!node) return null;

  var visited = new Map();
  visited.set(node, new Node(node.val));

  const queue = [node];
  let front = 0;

  while (front < queue.length) {
    const current = queue[front++];

    for (let nbr of current.neighbors) {
      if (!visited.has(nbr)) {
        visited.set(nbr, new Node(nbr.val));
        queue.push(nbr);
      }

    }
    // add the clone current node to it's clone neighbors
    visited.get(current).neighbors.push(current.neighbors)
  }
  
  return visited.get(node);
}
