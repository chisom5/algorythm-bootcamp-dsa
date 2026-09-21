/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @returns {boolean}
 */

// iterative BFS approach
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
  let front = 0;

  // traverse.
  while (front < queue.length) {
    // let current = queue.shift();
    let current = queue[front++]; //take from the front

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

// recursive DFS
function validPath(n, edges, source, destination) {
  if (source === destination) return true;

  // build adjacent list
  const graph = Array.from({ length: n }, () => []);
  for (let [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const visited = new Array(n).fill(false); // mark visited

  // dfs helper
  function dfs(node) {
    if (node === destination) { //base case
      return true;
    }

    visited[node] = true;
    for (const neighbor of graph[node]) {
      // if (!visited[neighbor]) {
      //   if (dfs(node)) return true;
      // }
      if(!visited[neighbor] && dfs(node)) return true;
    }

    return false;
  }

  return dfs(source)
}
