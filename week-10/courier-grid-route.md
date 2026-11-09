# Courier Grid Routes

## Problem Statement

A courier travels across an m-by-n grid from its upper-left position to its lower-right position, moving only down or right. Count the distinct routes the courier can take; two routes that use the same moves in a different order count separately. The returned integer is the total number of routes that reach the destination.

Constraints

- 1 <= m, n <= 100
- The number of routes is at most 2 ** 10^9.
- Routes with the same moves in different orders count as different routes.

### Examples

- m = 3, n = 7 → 28
  This grid has 28 distinct routes from its upper-left position to its lower-right position.

- m = 3, n = 2 → 3
  The grid has 3 routes: moving all the way down before moving right gives one, while interleaving the moves gives two more.

#### Follow-up

As either grid dimension grows, how does the number of distinct routes change?


## Approach Plan

The approach will be to use 2D - dynamic programming to count the number of distinct routes. where dp[i][j] represents the number of distinct routes to reach cell (i, j). The base case is that there is only one way to reach any cell in the first row or first column, which is by moving straight down or straight right respectively.


#### Key Constraints

The constraints that matter most is "1 <= m, n <= 100". This means that we can create a 2D array of size m x n, which is manageable. The other constraint is "The number of routes is at most 2 ** 10^9", which means that we can use a 32-bit integer to store the number of routes.

#### Pattern

- 2D Dynamic Programming, Grid traversal

#### Complexity

- Time Complexity: O(m * n) where m is the number of rows and n is the number of columns in the grid.

- Space : O( m * n) where m is the number of rows and n is the number of columns in the grid.

#### Steps

- Create a 2D table array and allocate 1 for each rows and cols.

- then moving straight down and right respectively, my state transistion will be 
    path(r, c) = path(r - 1)(c) + path(r)(c - 1);

- finally return the unique route as dp[r - 1][c - 1];