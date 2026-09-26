# Graph II

In Graph-I I learn how to represent a graph and use DFS or BFS to explore it. I can find connected components and count the fewest edges from a starting vertex. For this Graph-II we use knowledge from graph-I to build on it. e.g suppose the edges describe travel times. A route with fewer edges may still take longer than another route. To find the fastest route, the algorithm must compare the total weight of each path. Other problems begin from several locations at once, or ask whether two vertices become connected as new edges arrive.

### Cycle tells us

A cycle returns to its starting vertex through a sequence of edges. a visited set prevents a traversal from running forever. Here the goal is different: determine whether a cycle exists and use that fact to answer a problem.

### Detect Cycle across the whole graph

Use one visited set for the entire graph. The outer loop considers every vertex as a possible start. If a vertex is unseen, mark it visited and begin a stack with (start, -1). The parent value -1 means that no vertex discovered this component’s starting vertex.

While the stack is not empty, pop (node, parent) and inspect the current vertex’s neighbors. Skip the parent. If another neighbor is already visited, return true: a cycle exists. Otherwise, mark that neighbor visited before pushing (neighbor, node)

- code template for cycle detection in undirected graph.

```js
function hasCycle(n, edges) {
  const graph = Array.from({ length: n }, () => []);

  for (let [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const visited = new Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;

      // perform bfs or dfs
      const stack = [[i, -1]]; // where represent current_node, parent_node.

      while (stack.length) {
        const [node, parent] = stack.pop();

        for (let nbr of graph[node]) {
          if (nbr === parent) {
            continue;
          }
          if (visited[nbr]) return true; //detect cycle.

          visited[nbr] = true;
          stack.push([nbr, node]);
        }
      }
    }
  }
  return false; // no cycle detected.
}
```

### Finding the edge that closes the cycle (Undirected graph)

We have been able to detect a cycle in the graph, so to know the exact point that closes this cycle. we use the visited set and parent value to get this.

```js
// 1-indexed nodes - that's why Array(n + 1)
function findRedundantEdgeFromAdjacencyList(n, adj) {
  const visited = new Array(n + 1).fill(false);
  const parent = new Array(n + 1).fill(0);

  const stack = [1];
  visited[1] = true;

  while (stack.length) {
    let node = stack.pop();

    for (const nbr of adj[node]) {
      if (nbr === parent[node]) continue; // skip the edge we just came from.

      if (visited[nbr]) {
        return [node, nbr];
      }
      visited[nbr] = true;
      parent[nbr] = node;
      stack.push(nbr);
    }
  }

  return []; // if no edge closes cycle.
}
```

If given an edges to find the edge that closes the cycle.

```js
function findRedundantConnectionDFS(n, edges) {
  const graph = Array.from({ length: n + 1 }, () => []);

  // check if i have a cycle.
  function hasPath(start, target) {
    const visited = new Array(n + 1).fill(false);
    const stack = [start];
    visited[start] = true;

    while (stack.length) {
      const node = stack.pop();
      if (node === target) return true; // there is a path

      for (let nbr of graph[node]) {
        if(!visited[nbr]){
          visited[nbr] = true;
          stack.push(nbr);
        }
      }
    }
    return false;
  }

  for (let [u, v] of edges) {
    if (graph[u].length > 0 && graph[v].length > 0 && hasPath(u, v)) {
      return [u, v];
    }

    graph[u].push(v);
    graph[v].push(u);
  }

return [] // if no edge closes cycle.
}
```

### Visited array doesn't work for cycle detection in directed graph

The undirected parent rule does not apply here. In a directed graph, an edge from a vertex to its DFS parent is a real directed edge; together with the discovery edge, it forms a two-edge cycle. We need states that describe the current DFS call path.