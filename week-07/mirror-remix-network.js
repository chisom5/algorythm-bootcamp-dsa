/**
 * @param {number[][]} adj
 * @returns {number[][]}
 */

// recursive dfs
function solve(adj) {
  // base case
  if (!adj || adj.length === 0) return null;

  let cloneGraph = new Map();
  let visited = new Set();

  function dfs(node) {
    if (visited.has(node)) return;

    visited.add(node);

    // get the original neigbours from 0-indexed
    const neighbours = adj[node - 1] || [];
    // clone the neighbour
    cloneGraph.set(node, [...neighbours]);

    for (let neighbour of neighbours) {
      if (!visited.has(neighbour)) {
        dfs(neighbour);
      }
    }
  }

  //   starting from track 1
  dfs(1);

  //   return part
  let result = [];

  for (let i = 1; i <= adj.length; i++) {
    const row = cloneGraph.get(i) || [];

    row.sort((a, b) => a - b);
    result.push(row);
  }

  return result;
}



// iterative bfs
function solve(adj) {
  // base case
  if (!adj || adj.length === 0) return null;

  let n = adj.length;
  let cloneGraph = new Map();
  let visited = new Set([1]);

  let queue = [1];
  let front = 0;

  while (queue.length > 0) {
    let node = queue[front++];

     // get the original neigbours from 0-indexed
    const neighbours = adj[node - 1] || [];

    // clone the neighbour array
    cloneGraph.set(node, [...neighbours]);

    for (let neighbour of neighbours) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queue.push(neighbour);
      }
    }
  }

  //   result part
  let result = [];
  for (let i = 1; i <= n; i++) {
    const row = cloneGraph.get(i) || [];

    row.sort((a, b) => a - b);
    result.push(row);
  }
  return result;
}
