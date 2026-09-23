# Count Independent Stockout Zones

## Problem

In an inventory sync, count the independent stockout islands in a warehouse grid. Each "1" marks a product location with stock available, while "0" marks an empty location. Use horizontal and vertical connections only, so diagonal locations belong to different zones. Return the number of connected stock regions.

Constraints

- grid has m rows and n columns, where 1 <= m, n <= 300.
- Every grid[i][j] is either "0" or "1".
- Locations connect only to their horizontal and vertical neighbors, not diagonally.
- The area outside all four grid edges is water or empty space.

### Examples

- grid input [0] - Expected result 0.

- grid input         - Expected result 1.
[1	1	1	1	0
1	1	0	1	0
1	1	0	0	0
0	0	0	0	0]

#### Follow up

After identifying one stockout island, how can you prevent its cells from being counted again during the grid traversal?

## Approach Plan

Scan every cell in the grid. When an unvisited "1" is found increment the island count and run DFS or BFS from that cell. visit every horizontal and vertical connected "1". Record  visited cells separately or mark them during traversal so the same connected component will not be counted twice.

#### Key Constraint

The constraint that matter most is "Locations connect only to their horizontal and vertical neighbors, not diagonally." because it determine my traversal logic to use only four directions. i.e up, down, left and right.

#### Pattern 

- Grid traversal, (Connected component)

#### Complexity

- Time O(M * N)

- Space O(M * N)

#### Steps

1. Grid Dimension & traversal setup
    - read grid dimension as rows = grid.length and cols = grid[0].length
    - Define directional vectors: directions = [[-1, 0], [1, 0], [0, -1], [0, 1]] (Up, Down, Left, Right) to enforce 4-directional adjacency.
    - initialize count = 0;

2. Scan grid and locate unvisited stock zone, to increment count because a new independent zone has been discovered.

3. Seed the BFS Queue
    - Sink the starting cell immediately: Set grid[r][c] = "0".
    - Initialize queue = [[r, c]] and a pointer front = 0 (enabling $\mathcal{O}(1)$ array queue extraction instead of $O(N)$ shift() operations).

4. BFS Traversal loop
    While front < queue.length:

    - Dequeue the current cell coordinate: [currentR, currentC] = queue[front++].
    - Loop through all four direction vectors to calculate newR = currentR + dr and newC = currentC + dc.

5. Neighbor Validation & In-Place Sink (Answering Follow-up)
    For each neighbor (newR, newC):

    - Boundary Check: Ensure newR >= 0 && newR < rows && newC >=0 && newC < cols.
    - Unvisited Check: If grid[newR][newC] === "1":
    - Sink Cell: Immediately set grid[newR][newC] = "0" to mark it visited on push.
    - Enqueue: Push [newR, newC] into queue.  

6. return count of independent stock zone.