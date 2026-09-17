/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @returns {boolean}
 */
function validPath(n, edges, source, destination) {
  if (source === destination) return true;

  //  create an adjacent list
  const adjList = new Map();
  const add = (k, v) => {
    if (!adjList.has(k)) adjList.set(k, []);
    adjList.get(k).push(v);
  };

  for (const [u, v] of edges) {
    add(u, v);

    add(v, u);
  }

  const queue = [source]; // track node we need to explore
  const visited = new Set([source]);

  // traverse.
  while (queue.length > 0) {
    let current = queue.shift();

    if (current === destination) return true;

    /**
     * for each neigbors have i already visited it?
     *if not add mark as visited
     * add it to the queue
     **/
    const neighbors = adjList.get(current) || [];

    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return false;
}
