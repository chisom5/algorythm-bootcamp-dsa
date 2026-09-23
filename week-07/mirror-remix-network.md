# Mirror a Remix Network

## Problem

A remix network is a connected, 1-indexed adjacency list: row i lists the tracks directly connected to track i + 1. Starting from track 1, traverse the network and build a separate mirrored adjacency list. Return rows in track-label order, sorting each row of neighbor labels in ascending order. Return None when adj is empty.

Constraints

- 0 <= number of tracks <= 100
- When non-empty, every track is reachable from track 1.
- Track labels are 1-indexed; there are no self-loops or repeated edges.
- Return a newly built list and newly built row lists; do not return adj itself.

### Examples

- adj input
[2	3
1	3
1	2]  →  expected grid [2	 3, 1  3, 1	 2 ]  All three tracks are reachable from track 1.

-  adj = [[]]  → [[]]

#### Follow up

Can you use breadth-first traversal and the same original-to-copy map?

### Approach Plan

We already have  Adjacency list, so traverse the graph either with BFS/DFS starting from node 1, when visiting a node for the first time create a new clone node and record it in the hash map graph, for each neighbour of the original node recursively or iteratively ensure the neighbour are clone too, then append it to the current neighbour list. This ensures every node is clone exactly once and all adjacency relationship are reproduce in the copy.

#### Key Constraint

The constraint that matter most is "When non-empty, every track is reachable from track 1." because it tells me that the graph is a single connected component and i can trigger DFS/BFS once starting from track 1.

#### Pattern

- BFS/DFS Graph traversal

#### Complexity 

- Time O(M * N)

- Space O(M * N)

#### Steps

1. State the base case. - if adj list is empty return none which can be [] or null.

2. Initialize the clone graph and visited mark to ensure we traverse once for each node.
    -  let cloneGraph = new Map() and let visited = new Set();

3. Define the traversal function for recursive DFS. dfs(node):

    - Mark node as visited (visited.add(node)).   
    - Retrieve original neighbors from 0-indexed lookup: const neighbors = adj[node - 1] || [].   
    - Store a shallow copy in cloneGraph: cloneGraph.set(node, [...neighbors]).   
    - Loop through neighbors: if a neighbor hasn't been visited, invoke dfs(neighbor).   

4. Trigger the traversal dfs(1) - starting from 1. 

5. construct the mirror output.

