/**
 * @param {number} catalogSize
 * @param {number[][]} recommendationLinks
 * @returns {boolean}
 */
function auditCatalogMap(catalogSize, recommendationLinks) {
  // build adjacency list
  const graph = Array.from({ length: catalogSize }, () => []);

  for (let [u, v] of recommendationLinks) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const visited = new Array(catalogSize).fill(false);

  let count = 0;

  for (let i = 0; i < catalogSize; i++) {
    if (!visited[i]) {
      count++;

      const queue = [[i, -1]];
      visited[i] = true;
      let front = 0;

      while (front < queue.length) {
        let [node, parent] = queue[front++];

        for (let nbr of graph[node]) {
          if (nbr === parent) continue;

          if (visited[nbr]) return false; // cycle;

          visited[nbr] = true;
          queue.push([nbr, node]);
        }
      }
    }
  }

  return count === 1;
}
