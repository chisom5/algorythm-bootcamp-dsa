# Cross-Dock Transfer Clearance

## Problem

A warehouse network has n docks labeled 0 through n-1, connected by bidirectional transfer routes given as an edge list. Determine whether a shipment can travel along any valid path from a source dock to a destination dock. Return true if such a path exists, false otherwise.

Constraints
- 1 <= n <= 2 * 10^5
- 0 <= edges.length <= 2 * 10^5
- edges[i].length == 2
- 0 <= ui, vi <= n - 1
- ui != vi
- 0 <= source, destination <= n - 1
- No duplicate edges.
- No self-edges (a dock cannot connect directly to itself).

### Examples

- Edge Input = 
[0	1
1	2
2	3
3	4]

Other inputs n = 5, source = 0, destination = 4.  - Expected result = True

### Approach Plan

For a bidirectional transfer route: I will build an adjacent list from the edge list to represent the undirected graph of docks. Starting from source perform a BFS or DFS while maintaining a visited set to avoid revisiting docks. if destination is reached during traversal return true, else when traversal ends return false.

#### Key Constraint

The costraint that matter most is 1 <= n <= 2 * 10^5 because it tells me that the graph can contain up to 200,000 nodes. and this can affect my data structure to use. using adjacent matrix will be 200,000 * 200,000 and that is alot entries. hence it forces me to make use of adjacent list and BFS or DFS.

#### Pattern

- BFS or DFS

#### Complexity

- Time O(n + E)

- Space O(n + E)

#### Steps

1. Create an adjacency list for all n docks.

2. Because routes are bidirectional, for every [u, v]:
    - add v to u's neighbors
    - add u to v's neighbors

3. Start a BFS/DFS from source.

4. Maintain a visited set so we don't repeatedly traverse the same dock.

5. Whenever we reach destination, return true.

6. If traversal finishes without reaching destination, return false.