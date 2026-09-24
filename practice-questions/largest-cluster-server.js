/**
 * @param {number} n
 * @param {number[][]} connections
 * @returns {number}
 */
function maxClusterSize(n, connections) {
  // base case
  if (n === 0) return 0;

  const graph = Array.from({ length: n }, () => []);

  for (let [u, v] of connections) {
    graph[u].push(v);
    graph[v].push(u);
  }

  let max_cluster = 0;
  let visited = new Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
     let current_cluster = 0;

      let queue = [i];
      let front = 0;
      visited[i] = true;

      while (front < queue.length) {
        let node = queue[front++];
        current_cluster++;

        const neighbors = graph[node] || [];
        for (let nbr of neighbors) {
          if (!visited[nbr]) {
            visited[nbr] = true;
            queue.push(nbr);
          }
        }
      }
    }

   max_cluster = Math.max(max_cluster, current_cluster);
  }

return max_cluster;
}
