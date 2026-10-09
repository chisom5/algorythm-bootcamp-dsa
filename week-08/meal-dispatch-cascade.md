# Meal Dispatch Cascade

## Problem Statement

A kitchen floor plan contains empty spaces, meals waiting for pickup, and meals already assigned to drivers. Return the minimum number of minutes needed for every waiting meal to enter the assigned-driver workflow. A meal can be picked up only from a directly north, south, east, or west neighboring active order; if any meal remains unreachable, return -1.

Constraints

- m == grid.length
- n == grid[i].length
- 1 <= m, n <= 10
- Each grid[i][j] is 0, 1, or 2, representing an empty space, a fresh meal order, or an order already assigned to a driver.
- Only the four orthogonal neighboring cells can affect one another.
- The input grid may be updated as orders are processed.

### Examples

- Input: grid = [[2,1,1],[1,1,0],[0,1,1]]  
  Output: 4

- Input: grid = [[2,1,1],[0,1,1],[1,0,1]]  
  Output: -1

## Approach Plan

The question states that "for every waiting meal to enter the assigned-driver workflow, any fresh meal order that is 4-directionally adjacent to an assigned order becomes assigned." This means that we can use a multi-source BFS approach to solve this problem. Since we are to return the minimum number of minutes that must elapse until no cell has a fresh meal order, we can use BFS to traverse the grid and keep track of the time taken for each fresh meal order to be assigned.

#### Key Constraints

The constraints that matter most is "1 <= m, n <= 10" which means that the grid is small enough to use BFS without worrying about performance issues.

#### Pattern

- Multi-source BFS, Shortest path, Grid traversal

#### Complexity 

- Time : O(m * n) where m is the number of rows and n is the number of columns in the grid. This is because we may need to visit each cell in the grid once.

- Space : O(m * n) for the queue and the visited array.

#### Steps

1. Initialize a queue to keep track of the assigned orders and their positions in the grid.

2. Initialize a variable to keep track of the number of fresh meal orders in the grid.

3. Multi-source Queue Initialization: Traverse the grid row and column to find all the assigned orders (value 2) and add their positions to the queue. Also, count the number of fresh meal orders (value 1).

4. Initialize a variable to keep track of the number of minutes elapsed.

5. While the queue is not empty, perform the following steps:
   - For each assigned order in the queue, check its 4-directionally adjacent cells (up, down, left, right).
   - If an adjacent cell contains a fresh meal order (value 1), change its value to assigned (value 2), decrement the count of fresh meal orders, and add its position to the queue.
   - After processing all assigned orders in the current minute, increment the minutes elapsed. 

6. After the BFS completes, check if there are any remaining fresh meal orders. If there are, return -1; otherwise, return the number of minutes elapsed.
