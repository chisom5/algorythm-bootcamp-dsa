# Emergency Warehouse Egress

## Problem

A warehouse floor is modeled as an n x n binary grid where 0 marks a clear aisle cell and 1 marks a blocked shelf. Find the shortest route, measured in cells visited, from the entry bay at the top-left corner (0, 0) to the exit dock at the bottom-right corner (n-1, n-1), moving eight-directionally through clear cells only. Return -1 if no such route exists.

Constraints

- n == grid.length
- n == grid[i].length
- 1 <= n <= 100
- grid[i][j] is 0 or 1
- Both the entry cell (0,0) and the exit cell (n-1,n-1) must be clear (value 0) for any route to exist.
- Route length equals the total number of cells visited, including start and end.

### Examples

- grid input
[0	1
1	0]  -> Expected result = 2.

- grid input 
[1	1	1	1	1
1	0	1	0	1
1	0	1	0	1
1	0	1	0	1
1	1	1	1	1]  -> Expected result -1

### Approach Plan

From the question, it is a grid traversal where we are to find the shortest route starting from (0, 0) to the end (n-1, n-1) moving in 8 directions through the cells.

#### Key Constraint

The constraint that matter most is "Both the entry cell (0,0) and the exit cell (n-1,n-1) must be clear (value 0) for any route to exist." because it tells me that I can only move on the clear cell 0 while 1 is block. this can represent my visited mark

#### Pattern

- Grid traversal (Shortest path)

#### Complexity

- Time O(M * N)

- Space O(M * N)

#### Steps

1. Grid Dimension & traversal setup
    - read grid dimension as rows = grid.length and cols = grid[0].length
    - Define directional vectors for 8 directions. = [-1, -1][-1, 0][-1, 1][0, -1][0, 1][1, -1][1,0][1,1]
    - grid[0][0] = 0 - starting point of visited
    - queue = [[startR, startC, d]]

2. Perform BFS traversal
    While front < queue.length:

    - Dequeue the current cell coordinate: [r,c d] = queue[front++].
    - return distance if r = endRow && c = endCol
    - Loop through all 8 direction vectors to calculate newR = currentR + dr and newC = currentC + dc.

3.  Neighbor Validation & In-Place Sink 
    For each neighbor (newR, newC):

    - Boundary Check: Ensure newR >= 0 && newR < rows && newC >=0 && newC < cols.
    - Unvisited Check: If grid[newR][newC] === 0: sink set grid[newR][newC] === 1.
    - Enqueue: Push [newR, newC] into queue.

4. Return -1 when there is no path.