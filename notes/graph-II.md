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
        if (!visited[nbr]) {
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

  return []; // if no edge closes cycle.
}
```

### Visited array doesn't work for cycle detection in directed graph

The undirected parent rule does not apply here. In a directed graph, an edge from a vertex to its DFS parent is a real directed edge; together with the discovery edge, it forms a two-edge cycle. We need states that describe the current DFS call path.

### 3 DFS States: Unseen, Active and Done.

- Unseen: means the DFS has not started (recurse into it)

- Active: Its call is on the current unfinished path. (here report a directed cycle)

- Done: Its outgoing work, finished without a cycle. (skip it's completed work)

#### Exercise 1:

Given a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [a_i, b_i] indicates that you must take course b_i first if you want to take course a_i.

- For example, the pair [0, 1] indicates that to take course 0 you have to first take course 1.

Return true if you can finish all courses. Otherwise, return false.

Constraint

- 1 <= numCourses <= 2000

- 0 <= prerequisites.length <= 5000

- prerequisites[i].length == 2

- 0 <= a_i, b_i < numCourses

- All the pairs prerequisites[i] are unique.

E.g: Input: numCourses = 2, prerequisites = [[1, 0]]

### Answer:

Building from what we already know. from the constraint the numCourses is up to 2000. and this is safe for us to use recursive dfs. and the keyword "prerequisites" means you must have done task a before b. This indicated that the graph is a directed graph.

- build adjacency list and a state array that uses 3 state instead of using a visited array of boolean.

```js
/**
 *  state 0 - Unseen
 *  state 1 - Visited(Active)
 *  state 2 - Done
 **/

function can_finish(num_courses, prerequisites) {
  const graph = Array({ length: num_courses }, () => []);
  for (let [u, v] of prerequisites) {
    graph[u].push(v);
  }

  const state = new Array(num_courses).fill(0);

  function dfs(course) {
    state[course] = 1; // active

    for (let next_course of graph[course]) {
      if (state[next_course] === 1) {
        return false;
      }

      if (state[next_course] === 0 && !dfs(next_course)) {
        return false;
      }
    }

    state[course] = 2; // done
    return true;
  }

// check all component inlcuding disconnected component.
  for (let i = 0; i < num_courses; i++) {
    if (state[i] === 0 && !dfs(i)) {
      return false;
    }
  }

  return true;
}
```

N.B: Specific keywords, relationship patterns, and structural characteristics that determine the kind of graph problem 

1. One-way relationship: 
Keywords - like "A leads to B", "A points to B", "A transfers to B", "one-way street", "can only move from X to Y".

Hint - is a directed graph

2. Order Requirement:
Keywords - "Prerequisites", "Task A must be completed before Task B", "Precedence", "Dependency tree/graph", "Build order", "Compilation order".

Hint - Topological Sort or 3 - state DFS.

3. Explicit Edge Format in Input:
Keywords - "array pair order, if the problem specify that in [u, v], the order matters: "An edge [a, b] means course b is a prerequisite for course a."

Hinit - Adjacency list must represent entry as graph[u] = [v]

### What's a topological order

A topological order lists every vertex of a directed graph exactly once so that, for every edge u → v, vertex u appears before vertex v. From the prerequisite graph example, every prerequisite appears before the course or task that needs it.

If we have a graph order represented as [0,1,2,3] and [0,2,1,3]. we notice that both place 0 before 1 and 2, and both place 1 and 2 before 3. “topological” does not mean numerical or alphabetical.

If we have the sequence as [0, 1, 3, 2] it is invalid because edge 2 → 3 requires 2 to appear first. To check a proposed order, record each vertex’s position and confirm position[u] < position[v] for every edge. Also check that every vertex appears exactly once.

Topological order is useful in a directed acyclic graph. a directed graph that has no cycle. To recongize when to apply topological sorting, check for the problem statements such as “must happen before,” “depends on,” or “requires.” If those requirement is a directed edges and the requested output is a valid overall order, topological sorting is a likely fit.
