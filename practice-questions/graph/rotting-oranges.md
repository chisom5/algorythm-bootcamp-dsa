# Rotting Oranges using Multi-Source BFS.

## Problem Statement:

You are given an m x n grid where each cell can have one of three values:   
- 0 representing an empty cell,   
- 1 representing a fresh orange, or   
- 2 representing a rotten orange.   

Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.  
Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

Constraints:

- m == grid.length
- n == grid[i].length
- 1 <= m, n <= 10
- grid[i][j] is 0, 1, or 2.

### Examples

- Input: grid = [[2,1,1],[1,1,0],[0,1,1]]  
  Output: 4

- Input: grid = [[2,1,1],[0,1,1],[1,0,1]]  
  Output: -1

## Approach Plan

The question stated that "for every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten." This means that we can use a multi-source BFS approach to solve this problem. and since we are to return the minimum number of minutes that must elapse until no cell has a fresh orange, we can use BFS to traverse the grid and keep track of the time taken for each fresh orange to rot.

#### Key Constraints

The constraints that matter most is "1 <= m, n <= 10" which means that the grid is small enough to use BFS without worrying about performance issues. 

#### Pattern

- Multi-source BFS, Shortest path, Grid traversal

#### Complexity Analysis

- Time Complexity: O(m * n) where m is the number of rows and n is the number of columns in the grid. This is because we may need to visit each cell in the grid once.

- Space Complexity: O(m * n) for the queue and the visited array.


#### Steps

1. Initialize a queue to keep track of the rotten oranges and their positions in the grid.

2. Initialize a variable to keep track of the number of fresh oranges in the grid.

3. Traverse the grid to find all the rotten oranges (value 2) and add their positions to the queue. Also, count the number of fresh oranges (value 1).

4. Initialize a variable to keep track of the number of minutes elapsed.

5. While the queue is not empty, perform the following steps:
   - For each rotten orange in the queue, check its 4-directionally adjacent cells (up, down, left, right).
   - If an adjacent cell contains a fresh orange (value 1), change its value to rotten (value 2), decrement the count of fresh oranges, and add its position to the queue.
   - After processing all rotten oranges in the current minute, increment the minutes elapsed.

6. After the BFS traversal is complete, check if there are any fresh oranges left in the grid. If there are, return -1 as it is impossible to rot all oranges. Otherwise, return the number of minutes elapsed.