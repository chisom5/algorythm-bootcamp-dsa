# Grid Route Ledger

## Problem Statement

A travel ledger records entry fees in a rectangular grid, with one fee at each location. Find the lowest total fee for a route from the upper-left location to the lower-right, moving only down or right. Return that route's total, counting the fee at every grid location it visits.

Constraints

- grid has m rows and n columns, with 1 <= m, n <= 200.
- Each entry grid[i][j] is an integer from 0 to 100.

### Follow-up

How would you report both the lowest ledger total and one route that achieves it?

#### Examples

- grid input
  [[1	3	1],
[1	5	1],
[4	2	1]]
  Expected result 7

A route with fees 1, 3, 1, 1, and 1 gives a ledger total of 7 in this grid.


## Approach Plan

The approach plan will be to use 2D - dynamic programming to get the lowest total fee moving only down or right in the grid. The minimum total cost of a path from (0,0) to (r,c) will include grid[r][c].

#### Key Constraints

The constraint that matter most is "grid has m rows and n columns, with 1 <= m, n <= 200." because we can create a 2D array of size m * n which is manageable.

#### Pattern

- 2D Dynamic Programming, Grid traversal

#### Complexity

- Time Complexity: O(m * n) where m is the number of rows and n is the number of columns in the grid.

- Space : O( m * n) where m is the number of rows and n is the number of columns in the grid.

#### Steps

- Create a 2D table array from m - grid.length, n - grid[0].length.

- Base case or the starting point of dp[0][0] should be equal grid[0][0]

- Then for each row or col, we allocate the dp of each rows or cols including it's grid

- Then the inner loop give us the minimum or lowest fee as.
    dp[r][c] = grid[r][c] + Math.min(dp of row, dp of cols);

- Return the lowest path: dp[m - 1][r - 1]

### Steps for Follow-up
N.B for the follow-up Question: we can traceback after getting the lowest fee to retrive the route.

- Start at the destination, row = r - 1, col = c -1 and create a path = [[row, col]];

- Iterate backwards: while(row >0 || col > 0)
    - If I am at the top i.e row === 0 : move left (col--)
    - If I am at the left column i.e col === 0 : move up (row--)
    - Otherwise compare the Dp values of the neighbors, move towards the cell with the smaller value.

- Store the path and reverse it since our iteration was done in backwards directions.