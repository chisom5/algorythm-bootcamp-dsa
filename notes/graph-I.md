# Graph I

A graph is a mathematical structure for describing relationships. It consists of a set of objects, called vertices, and a set of connections between pairs of those objects, called edges. A graph with vertex set V and edge set E is written G = (V, E).

A graph has no root, so a traversal must be told where to begin, and it discovers only what is reachable from there.

A graph may contain cycles, so a traversal that does not record where it has been will revisit the same vertices without end.

## Tree is a graph with rules

Every tree is a graph. Not every graph is a tree. The differences are exactly the things that make graph code different from tree code.

- In a graph there is no root, can start anywhere.

- Can have a cycle and can be disconnected.

- A tree has parent and child, while a graph just has neighbours.

N.B Two things to note for the a graph code. First, there is no root, so a traversal has to be told where to start, and it only finds what is reachable from there. Second, there can be a cycle, so a traversal can come back to a vertex it has already processed.

### Terminology

1. Vertex(plural vertices): a thing. can also be called a node.
2. Edge: is a relationship between two vertices.
3. Neighbours, or adjacent vertices: two vertices are adjacent if an edge connects them.
4. The degree of a vertex is the number of edges that touch it. e.g In Graph G, deg(D) = 3 and deg(E) = 1.

graph G = A - B, A - C, C - D, B - D, D - E.

5. A path is a sequence of vertices in which each consecutive pair is joined by an edge. Its length is the number of edges, not the number of vertices. A simple Path does not repeat a vertex.
6. Distance is the length of the shortest path between them. If no path exists the distance is infinity
7. Reachability - Y is reachable from X if some path runs from X to Y. but it is not reachable if there is no connection.

8. Cycle - is a path that starts and ends at the same vertex. cycles are why graph traversal needs memory. A traversal that follow edges without checking where it has been can go forever.

#### Connected Component

A connected component is a group of vertices in which every vertex can reach every other vertex. e,g

component 1 · {A, B, C, D, E}, component 2 · {F, G}

#### First step of almost every graph problem

Edge list(the input given) - Adjacency list(convert to the working from) - Run DFS or BFS algorithm.

#### Adjacent list

An adjacency list stores, for each vertex, the list of that vertex's neighbours. In javascript it is represented as Map - whose keys are vertices and whose values are lists or sets. The space complexity is O(V + E) likewise time. because one key per vertex, one entry per edge end

- Building an adjacent list

```js
function buildGraph(edges) {
  const graph = new Map();

  const add = (k, v) => {
    if (!graph.has(k)) graph.set(k, []);
    graph.get(k).push(v);
  };
  for (const [u, v] of edges) {
    add(u, v);
    // undirected: add both directions
    add(v, u);
  }
  return graph;
}
const edges = [
  ["A", "B"],
  ["A", "C"],
  ["B", "D"],
  ["C", "D"],
  ["D", "E"],
  ["F", "G"],
];
const g = buildGraph(edges);
```

operations around adjacent list:

|operation| | Time | | Why |
|List all neighbours of u| | O(deg(u))| | Exactly the neighbours, nothing else|
|Is there an edge u–v?| | O(deg(u))| | Scan u's list · O(1) if the lists are sets|
|Add an edge | | O(1) | | Append to one or two lists|
|Space | | O(V + E)| | One key per vertex, one entry per edge end|

#### Adjacent matrix

The matrix representation is a |V| × |V| table. Entry matrix[u][v] is 1 if there is an edge between u and v and 0 otherwise.

|operation| | Time | | Why |
|Is there an edge u–v?| | O(1) | | Read one cell|
|List all neighbours of u| | O(V) | |Scan the whole row, including every 0|
|Add or remove an edge | | O(1) | | write one or two cells|
|Space | | O(V^2)| | Every cell exists whether or not there is an edge|

Build adjacent matrix

```js
function buildMatrix(n, edges) {
  // n = number of vertices, labeled 0..n-1
  const matrix = Array.from({ length: n }, () => new Array(n).fill(0));
  for (const [u, v] of edges) {
    matrix[u][v] = 1;
    // undirected: mirror it
    matrix[v][u] = 1;
  }
  return matrix;
}
function neighbors(matrix, u) {
  const result = [];
  for (let v = 0; v < matrix.length; v++) {
    if (matrix[u][v] === 1) {
      result.push(v);
    }
  }
  return result;
}
// Graph G with A=0, B=1, C=2, D=3, E=4, F=5, G=6
const edges = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [3, 4],
  [5, 6],
];
const m = buildMatrix(7, edges);
// [1, 2, 4]  -> D: B, C, E
console.log(neighbors(m, 3));
```

- Time and Space complexity - Time = O(V) Space = O(V^2)

#### Graphs hiding in grids

A two-dimensional grid is a graph. Every cell is a vertex.

- A vertex is a coordinate pair (row, col).

- Nothing is stored about the edges. Neighbours are computed on demand from the coordinates.

- The neighbours of `${r},${c}` are (r−1, c), (r+1, c), (r, c−1) and (r, c+1): the four directions

- A grid with R rows and C columns has V = R · C vertices and roughly E ≈ 2 · R · C edges.

A grid is not an adjacency matrix
The two are both rectangular tables of cells, and they are easy to confuse. They are entirely different objects.

#### Directed and undirected graphs

In an undirected graph the edge A–B can be followed in either direction. In a directed graph, also called a digraph, an edge A → B can be followed only from A to B; B → A

For undirected graph the neighbour are friends with that node (Is a two-way street). and every edge appears twice. while directed graph the neighbour follows the outward flow(Is a one-way street). every edge appears once

Adjacency list holds - for undirected all neighbours and directed are only the arrows that leaves the vertex
Reachability - for undirected Symmetric: u reaches v if and only if v reaches u. directed is Not symmetric

#### Weighted and Unweighted graphs

In an unweighted graph every edge is equivalent: traversing it costs one step. In a weighted graph each edge carries a number, its weight, which may represent distance, time, cost, capacity or any other quantity that accumulates along a path.

Breadth-first search : is correct for shortest paths only in unweighted graphs. while Shortest paths by weight graph require Dijkstra's algorithm

#### Code format Directed, weighted and integer vertices

1. Directed: record the edge once

```js
function buildDirected(edges) {
  const graph = new Map();
  for (const [u, v] of edges) {
    if (!graph.has(u)) graph.set(u, []);
    // no mirror line
    graph.get(u).push(v);
  }
  return graph;
}
// [[A,B], [B,D], [D,C], [C,A]]  ->  A:[B]  B:[D]  D:[C]  C:[A]
```

2. Weighted: store (neighbour, weight) pairs

```js
function buildWeighted(edges) {
  const graph = new Map();
  const add = (k, v, w) => {
    if (!graph.has(k)) graph.set(k, []);
    graph.get(k).push([v, w]);
  };
  for (const [u, v, w] of edges) {
    add(u, v, w);
    add(v, u, w);
  }
  return graph;
}
// A---4---B, A---1---C  ->  A: [[B, 4], [C, 1]]
```

3.  Integer vertices 0 ..n−1: a list of lists

```js
function buildFromN(n, edges) {
  // every vertex has a slot
  const graph = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }
  return graph;
}
```

#### Tree DFS on Graphs

Tree DFS breaks on graph if implemented as a standard tree traversal because graphs can contain cycles and multiple paths to the same node, whereas trees cannot. Trees never revisit a node because every edge points down, away from the root. A graph has no "down".

The Difference between Tree and Graph:

- Trees: A tree is a directed acyclic graph (DAG) where every node (except the root) has exactly one parent, and there is only one path between the root and any node. There are no cycles.

- Graphs: Nodes can have multiple parents/incoming edges, and nodes can point back to previously visited ancestors (cycles) or cross-connect to other branches.

#### Why Tree DFS Fails on Graphs

When you run a standard tree DFS which recursively visits children without tracking where it has been. a graph causes two major failures on this:

1. Infinite loop and stack overflow: If a graph contains a directed cycle (e.g., $A \rightarrow B \rightarrow C \rightarrow A$), tree DFS will infinitely call itself along the cycle until it crashes with a StackOverflowError or maximum recursion depth error.

2. Duplicate process and redundant work: In a directed graph without cycle (e.g., $A \rightarrow B \rightarrow D$ and $A \rightarrow C \rightarrow D$), tree DFS will visit node $D$ multiple times via different paths. While it won't loop infinitely, it destroys the time complexity, turning an $O(V + E)$ graph traversal into an exponential $O(2^V)$ operations worst-case.

```js
// ❌ TREE DFS (Breaks on graphs with cycles/re-visits)
function dfsTree(node) {
  if (!node) return;

  process(node);

  for (const neighbor of node.neighbors) {
    dfsTree(neighbor); // Will recurse endlessly if neighbor points back to an ancestor
  }
}

// ✅ GRAPH DFS (Tracks visited state)
function dfsGraph(node, visited = new Set()) {
  if (!node || visited.has(node)) return;

  visited.add(node); // Track visited state
  process(node);

  for (const neighbor of node.neighbors) {
    dfsGraph(neighbor, visited);
  }
}
```

#### Iterative DFS with a stack

We can traverse a graph using a stack you can manage yourself, here there is no recursive limit.

Example: Visit every vertex reachable from A once. Expected order: [A, C, D, E, B], using iterative DFS

```js
function iterativeDfs(graph, start) {
  let visited = new Set();
  let stack = [start];
  let order = [];

  while (stack.length) {
    let node = stack.pop();

    if (visited.has(node)) {
      continue;
    }
    visited.add(node);
    order.push(node);

    for (let adj of graph) {
      if (!visited.has(adj)) {
        stack.push(adj);
      }
    }
  }

  return order;
}
```

N.B Both Recursive and iterative are valid depth first searches. Both visit every reachable vertex exactly once. And they visit in different orders.

E.g Recursive from A - visit A B D C E. while Iterative from A - visit A C D E B

#### BFS Graph

The visited-set rule for BFS: mark a vertex when you put it in the queue, not when you take it out.

so the code for iterativeDFS above will be change here

```js
while (stack.length) {
  let node = stack.shift();

  // process

  for (let adj of graph) {
    if (!visited.has(adj)) {
      visited.add(node);
      stack.push(adj);
    }
  }
}
```

#### Grid Traversal BFS

```js
function bfsGrid(grid, startRow, startCol) {
  const rows = grid.length,
    cols = grid[0].length;

  const queue = [[startRow, startCol]];
  grid[startRow][startCol] = "0"; // Mutate to mark visited

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]; // Up, Down, Left, Right

  while (queue.length > 0) {
    const [r, c] = queue.shift();

    for (const [dr, dc] of directions) {
      const newR = r + dr,
        newC = c + dc;

      // Boundary check + condition check
      if (
        newR >= 0 &&
        newR < rows &&
        newC >= 0 &&
        newC < cols &&
        grid[newR][newC] === "1"
      ) {
        grid[newR][newC] = "0"; // Mark visited
        queue.push([newR, newC]);
      }
    }
  }
}
```

#### Counting connected component

The approach for counting connected component differ depending if the graph is directed or undirected.

For undirected graphs, connected components are disjoint set of reachable nodes.

- Template.

```js
function countComponentsDFS(numVertices, edges) {
  // 1. Build Adjacency List
  const graph = Array.from({ length: numVertices }, () => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const visited = new Array(numVertices).fill(false);
  let componentCount = 0;

  function dfs(node) {
    visited[node] = true;
    for (const neighbor of graph[node]) {
      if (!visited[neighbor]) {
        dfs(neighbor);
      }
    }
  }

  // 2. Iterate through all nodes
  for (let i = 0; i < numVertices; i++) {
    if (!visited[i]) {
      componentCount++; // Found a new unvisited component
      dfs(i); // Mark all connected nodes
    }
  }

  return componentCount;
}
```

The pattern is first build the adjacency list, initialize componentCount and visited mark to prevent us from counting twice. then iterate through all node and perform dfs or bfs.

N.B - Same thing for grids, while counting connected components in grid:

- get grid dimensions, setup traversal i.e directions, initialize count of component as 0
- scan all cells in the grid and increment count only when we found a new unvisited component
- then perfrom the bfs or dfs.

```js
function countGridComponentsBFS(grid) {
  let rows = grid.length;
  let cols = grid[0].length;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  let count = 0;

  //   scan every cell
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      //unvisited "1"
      if (grid[r][c] === "1") {
        count++;

        grid[r][c] = "0"; //  mark starting cell

        // perform bfs
      }
    }
  }
}
```

#### BFS find Shortest Path

In an unweighted graph, BFS visits vertices in order of distance from the start. All vertices at start distance are processed before any at other distance, and so on. Therefore the first time BFS reaches a vertex, it has reached it along a shortest path.

This works because every edge has the same cost. with weights, a path with more edges can be cheaper and BFS is wrong. that's the case of Dijkstra's algorithm.

- Tracking distance

BFS knows layers, so to return distances, we record them and every edge has a cost/distance of 1. so BFS naturally finds the shortest path in terms of edge count.

- Method 1

```js
function bfsDistances(graph, start) {
  const dist = [];
  let queue = [start];
  let front = 0;

  dist[start] = 0; //starting distance.

  while (front < queue.length) {
    let node = queue[front++];
    let currentDist = dist[node];

    for (let neighbor of graph[node]) {
      if (dist[neighbor] === undefined) {
        dist[node] = currentDist + 1;
        queue.push(node);
      }
    }
  }
  return dist;
}
```

- Method 2

```js
function bfsDistances(graph, start) {
  let queue = [];
  let visited = [];
  const dist = {};
  let front = 0;

  queue.push({ node: start, depth: 0 }); // starting node

  visited[start] = true; // visited mark

  while (front < queue.length) {
    const { node, depth } = queue[front++];
    dist[node] = depth;

    for (let neighbor of graph[node]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push({ node: neighbor, depth: depth + 1 });
      }
    }
  }
  return dist;
}
```
