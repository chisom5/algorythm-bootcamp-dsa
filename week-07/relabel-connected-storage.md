# Relabel Connected Storage Zone

## Problem
A warehouse map stores zone labels in the grid image. Starting at cell (sr, sc), relabel its connected region and every matching cell reachable through four-directional neighbors with color. Return the modified map after the grid traversal. Cells touching only at a corner belong to separate zones.

Constraints

- m == image.length
- n == image[i].length
- 1 <= m, n <= 50
- 0 <= image[i][j], color < 65536
- 0 <= sr < m
- 0 <= sc < n
- Adjacent cells share a side, not merely a corner.
- The image is modified in place and then returned.

### Examples
- image input [0] Other inputs sr = 0, sc = 0, color = 0. - Expected grid  = [0]

- image input [1	1	1, 1	1	0, 1	0	1] Other inputs sr = 1, sc = 1, color = 2  - Expected grid [2  2  2, 1	1	0, 1	0	1]


### Approach Plan

Save the starting cells original label before changing anything. Traverse the connected region with either DFS or BFS, visiting only the in-bounds cells whose label still equal the original label and recolor each visited cell to color. If the original label already equal color return image immediately. to avoid repeating work.

#### Key Constraint

the constraint that matter most is "Adjacent cells share a side, not merely a corner." because it tells me how to traverse the grid. that from each cell we can only move in 4 directions - up, down, left and right.

#### Pattern

- Grid traversal

- DFS 

#### Complexity

- Time O(m * n)

- Space O(m * n)

