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

|operation|                  | Time |       | Why |
|List all neighbours of u|	 | O(deg(u))|	| Exactly the neighbours, nothing else|
|Is there an edge u–v?|	     | O(deg(u))|	| Scan u's list · O(1) if the lists are sets|
|Add an edge |	             | O(1) |	    | Append to one or two lists|
|Space |	                 | O(V + E)|	| One key per vertex, one entry per edge end|


#### Adjacent matrix 

The matrix representation is a |V| × |V| table. Entry matrix[u][v] is 1 if there is an edge between u and v and 0 otherwise.

|operation|                  | Time |       | Why |
|Is there an edge u–v?|	     | O(1) |	    | Read one cell|
|List all neighbours of u|	 | O(V)	|       |Scan the whole row, including every 0|
|Add or remove an edge |	 | O(1) |	    | write one or two cells|
|Space |	                 | O(V**2)|	    | Every cell exists whether or not there is an edge|


Build adjacent matrix

```js

function buildMatrix(n, edges) {
  // n = number of vertices, labeled 0..n-1
  const matrix = Array.from({length: n}, () => new Array(n).fill(0));
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
const edges = [[0,1], [0,2], [1,3], [2,3], [3,4], [5,6]];
const m = buildMatrix(7, edges);
// [1, 2, 4]  -> D: B, C, E
console.log(neighbors(m, 3));
```
* Time and Space complexity - Time = O(V) Space = O(V**2)

#### Graphs hiding in grids

A two-dimensional grid is a graph. Every cell is a vertex. 

- A vertex is a coordinate pair (row, col).

- Nothing is stored about the edges. Neighbours are computed on demand from the coordinates.

- The neighbours of `${r},${c}` are (r−1, c), (r+1, c), (r, c−1) and (r, c+1): the four directions

- A grid with R rows and C columns has V = R · C vertices and roughly E ≈ 2 · R · C edges.

A grid is not an adjacency matrix
The two are both rectangular tables of cells, and they are easy to confuse. They are entirely different objects.