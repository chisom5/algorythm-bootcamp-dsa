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

#### Topological Sort Pattern

when doing topological sort using:

- DFS topological sort -> DFS + 3 state cycle detection + Postorder

- BFS topological sort -> Indegree + queue (Khan’s algorithm)

DFS can construct a topological order by recording when each vertex finishes. keeping the same 3 states so that a directed cycle is still detected.

#### InDegree measures unfinished prerequisites

Indegree of a vertices is the number of edges directed into it. Kahn’s algorithm builds a topological order by repeatedly selecting a vertex with no remaining incoming requirements.

Kahn’s algorithm builds a topological order by repeatedly removing nodes with an in-degree of 0 (nodes with no incoming dependencies).

The steps:

- Compute the in-degree (number of incoming edges) for every vertex

- Initialize a queue with all vertices of in-degree 0

- While the queue is not empty, remove a vertex from the queue, add it to the topological order, and decrease the in-degree of its neighbors. If any neighbor's in-degree becomes 0, add it to the queue.

- If the topological order contains all vertices, the graph is a DAG (Directed Acyclic Graph). If not, it contains a cycle.

```js
function topologicalSortKahn(numVertices, edges) {
  const graph = Array.from({ length: numVertices }, () => []);
  const indegree = new Array(numVertices).fill(0);

  // build adjacency list.
  for (let [u, v] of edges) {
    graph[v].push(u);
    indegree[u]++; // calculate indegree
  }

  let queue = [];

  for (let i = 0; i < numVertices; i++) {
    if (indegree[i] === 0) queue.push(i);
  }
  let front = 0;
  let count = 0;

  while (front < queue.length) {
    const node = queue[front++];
    count++;

    for (let nbr of graph[node]) {
      indegree[nbr]--;
      if (indegree[nbr] === 0) queue.push(nbr);
    }
  }

  return count === numVertices; // if count is equal to numVertices, then the graph is a DAG (Directed Acyclic Graph) and a topological order exists. Otherwise, it contains a cycle.
}
```

#### Weighted Path

Weighted path problems are a generalization of unweighted path problems. In an unweighted graph, the shortest path is determined by the number of edges. In a weighted graph, each edge has a weight (or cost), and the shortest path is determined by the sum of the weights along the path. Weighted path ask 3 questions:

1. What is the cheapest route?

2. How long does spread take from several starting points?

3. Which vertices are connected as new edges arrive?

Each questions requires different information from the graph. A signal can reach the same server along several routes. We want the route with the smallest total delay: the sum of its edge weights. Counting edges is insufficient when their delays differ. We can use Dijkstra’s algorithm to find the shortest path in a weighted graph with non-negative weights, where there is single source. For graphs with negative weights, we can use the Bellman-Ford algorithm. multi-source BFS to model simultaneous spread, and Union-Find to maintain connected groups.

The ordinary BFS from Graphs I finds a path with the fewest edges. That also minimizes cost when every edge has the same positive cost. When costs differ, its first discovery of a vertex need not be the cheapest route to that vertex.

#### Dijkstra’s algorithm 

Dijkstra’s algorithm finds the minimum cost from one source to every reachable vertex when all edge weights are nonnegative. It maintains a priority queue of vertices to explore, prioritized by the current known cost to reach them. The algorithm repeatedly extracts the vertex with the lowest cost, updates the costs of its neighbors, and continues until all reachable vertices have been processed.

#### Priority Queue

A priority queue stores entries with a key called a priority. A minimum priority queue removes the entry with the smallest key, regardless of when that entry was inserted. This differs from a FIFO queue, which removes the oldest entry.

- Min Heap operations:

```js
class MinHeap {
  constructor(entries = []) {
    this.items = [];
    for (const entry of entries) this.push(entry);
  }

  get size() {
    return this.items.length;
  }

  less(a, b) {
    return a[0] < b[0] || (a[0] === b[0] && a[1] < b[1]);
  }

  push(entry) {
    const heap = this.items;
    heap.push(entry);
    let index = heap.length - 1;
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (!this.less(heap[index], heap[parent])) break;
      [heap[index], heap[parent]] = [heap[parent], heap[index]];
      index = parent;
    }
  }
  pop() {
    if (this.items.length === 0) throw new Error("Heap is empty");
    const heap = this.items;
    const minimum = heap[0];
    const last = heap.pop();
    if (heap.length > 0) {
      heap[0] = last;
      let index = 0;
      while (true) {
        const left = 2 * index + 1;
        const right = left + 1;
        let smallest = index;
        if (left < heap.length && this.less(heap[left], heap[smallest]))
          smallest = left;
        if (right < heap.length && this.less(heap[right], heap[smallest]))
          smallest = right;
        if (smallest === index) break;
        [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
        index = smallest;
      }
    }
    return minimum;
  }
}

const heap = new MinHeap();
for (const entry of [
  [5, 2],
  [1, 3],
  [3, 1],
  [1, 0],
]) {
  heap.push(entry);
}

const popped = [];
while (heap.size > 0) {
  popped.push(heap.pop());
}
```

Dijkstra's algorithm Steps:

1. After building the mini priority queue, we build the adjacency list of the graph. The adjacency list is a representation of the graph where each vertex has a list of its neighbors and the corresponding edge weights.

2. We initialize a distance array to keep track of the minimum cost to reach each vertex from the source. The distance to the source itself is set to 0, while all other vertices are initialized to infinity.

3. We push the source vertex into the priority queue with a cost of 0.

4. While the priority queue is not empty, we pop the vertex with the smallest cost. If this cost is greater than the recorded distance for that vertex, we skip processing it.

5. For each neighbor of the current vertex, we calculate the new cost to reach that neighbor through the current vertex. If this new cost is less than the recorded distance for that neighbor, we update the distance and push the neighbor into the priority queue with the new cost.

6. After processing all vertices, we return the distance array, which contains the minimum cost to reach each vertex from the source.

```js
class MinPriorityQueue {
  constructor() {
    this.heap = [];
  }
  push(val) {
    this.heap.push(val);
    this._up(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();

    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._down(0);
    return top;
  }

  _Empty() {
    return this.heap.length === 0;
  }

  // bubble up
  _up(index) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);

      // if the distance of the parent node is less than the current node distance.
      if (this.heap[parent][1] <= this.heap[index][1]) break;

      // swap
      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ];

      index = parent;
    }
  }
  // bubble down
  _down(index) {
    while (2 * index + 1 < this.heap.length) {
      let left = 2 * index + 1,
        right = 2 * index + 2,
        min = left;

      // if i can get the smaller distance at the right, set min to be right.
      if (right < this.heap.length && this.heap[right][1] < this.heap[left][1])
        min = right;

      // check if the current node distance is smaller than the min distance
      if (this.heap[index][1] <= this.heap[min][1]) break;

      // swap
      [this.heap[index], this.heap[min]] = [this.heap[min], this.heap[index]];

      index = min;
    }
  }
}

function getShortestPathDW(edges, n, source) {
  // build adjacency list
  const graph = Array.from({ length: n }, () => []);
  for (let [u, v, w] of edges) {
    graph[u].push([v, w]);
  }

  // distance array
  const dist = new Array(n).fill(Infinity);
  dist[source] = 0;

  //  push source vertex into the priority queue.
  const pq = new MinPriorityQueue();
  pq.push([source, 0]);

  while (!pq._Empty()) {
    const [u, d] = pq.pop();

    if (d > dist[u]) continue;

    for (let [v, w] of graph[u]) {
      if (dist[u] + w > dist[v]) {
        dist[v] = dist[u] + w;
        pq.push([v, dist[v]]);
      }
    }
  }

  return dist;
}
```

#### Shortest path in DAG 

Topological sort + Relaxation:

To find shortest path in a directed acyclic graph (DAG), we can use topological sorting. The idea is to perform a topological sort of the vertices and then relax the edges in the order of the topological sort. This ensures that we process each vertex only after all its predecessors have been processed, allowing us to find the shortest path efficiently.

```js
/**
 * Shortest path in a DAG using Topological Sort (Kahn's Algorithm BFS)
 * 
 * @param {number} numNodes - Total number of nodes (0-indexed: 0 to numNodes - 1)
 * @param {number[][]} edges - Array of directed weighted edges [u, v, weight]
 * @param {number} source - Starting node
 * @returns {number[]} Array of shortest distances from source to all nodes
 */
function dagShortestPath(numNodes, edges, source) {
  // 1. Build Adjacency List and Indegree Array
  const graph = Array.from({ length: numNodes }, () => []);
  const inDegree = new Array(numNodes).fill(0);

  for (const [u, v, weight] of edges) {
    graph[u].push([v, weight]);
    inDegree[v]++;
  }

  // 2. Topological Sort using Kahn's Algorithm (BFS)
  const queue = [];
  for (let i = 0; i < numNodes; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  const topoOrder = [];
  while (queue.length > 0) {
    const node = queue.shift();
    topoOrder.push(node);

    for (const [nbr] of graph[node]) {
      inDegree[nbr]--;
      if (inDegree[nbr] === 0) {
        queue.push(nbr);
      }
    }
  }

  // 3. Initialize Distances
  const dist = new Array(numNodes).fill(Infinity);
  dist[source] = 0;

  // 4. Relax Edges in Topological Order
  for (const u of topoOrder) {
    // Only process reachable nodes
    if (dist[u] !== Infinity) {
      for (const [v, weight] of graph[u]) {
        if (dist[u] + weight < dist[v]) {
          dist[v] = dist[u] + weight;
        }
      }
    }
  }

  return dist;
}
```