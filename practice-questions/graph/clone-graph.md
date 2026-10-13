# Clone Graph

## Problem Statement

Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.

Each node in the graph contains a value (number) and a list of its neighbors (Node[]):
```js
class Node {
  constructor(val = 0, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}
```

Constraints
- The number of nodes in the graph is in the range [0, 100].

- 1 <= Node.val <= 100

- Node.val is unique for each node.

- There are no repeated edges and no self-loops in the graph.

- The Graph is connected and all nodes can be visited starting from the given node.

### Examples

- Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]

## Approach Plan

To create a clone graph, the idea is to use either BFS or DFS to traverse the original graph and create a copy of each node and its neighbors. We can use a hash map to keep track of the nodes that have already been cloned to avoid creating duplicates.

#### Key Constraints

The constraints that matters is "The Graph is connected and all nodes can be visited starting from the given node." This means that we can start from the given node and traverse the entire graph.

#### Pattern

- BFS or DFS 

#### Complexity

- Time O(V + E) where V is the number of vertices and E is the number of edges in the graph.

- Space O(V) for the hash map to store the cloned nodes.

#### Steps

1. Create a hash map to store the cloned nodes.

2. Use BFS or DFS to traverse the original graph starting from the given node.

3. For each node, check if it has already been cloned. If not, create a new node and add it to the hash map.

4. For each neighbor of the current node, check if it has already been cloned. If not, create a new node and add it to the hash map.

5. Add the cloned neighbor to the neighbors list of the cloned current node.

6. Return the cloned node corresponding to the given node.
