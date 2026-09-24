# Profile Circle in a Fragmented network

## Problem

A social platform stores profiles as nodes in an undirected graph, with each mutual connection recorded as an edge in an edge list. Count the connected components, meaning the number of isolated friend circles where every profile can reach every other profile in the same circle but cannot reach anyone outside it.

Constraints

- 1 <= n <= 2000
- 1 <= edges.length <= 5000
- edges[i].length == 2
- 0 <= edges[i][0] <= edges[i][1] < n
- edges[i][0] != edges[i][1]
- There are no repeated edges.

### Examples

- n = 1, edges = []  → 1
The lone vertex has no edges, so it forms exactly one component.

- edges input [0	1], n = 2  →  1
The only edge joins both vertices into one component.

### Approach Plan

The problem says "Count the connected components" in an undirected graph. for this question where  n  input can be as high as 2000. it is safe to use either DFS or BFS for counting the connected component and it is small enough for an adjacency list.

#### Key Constraint

The constraint that matter most is "1 <= n <= 2000" because it tells me it is small enough for an adjacency list. and safe to use either DFS or BFS.

#### Pattern

- BFS or DFS travseral

#### Complexity

- Time O(V + E)

- Space O(V + E)

#### Steps

1. Build adjacency list

2.  Maintain a visited boolean array of size n. and initialize max_cluster as 0

3. Iterate through every n, If not visited, increment count and launch iterative BFS or DFS.

4. Return count of connected component.