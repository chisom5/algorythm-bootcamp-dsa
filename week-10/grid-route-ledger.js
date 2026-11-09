/**
 * @param {number[][]} grid
 * @returns {number}
 */
function minPathSum(grid) {
  // implement
  let m = grid.length, n = grid[0].length;

  let dp = Array.from({ length: m }, () => Array(n).fill(0));

  // base case
  dp[0][0] = grid[0][0]

  for (let r = 1; r < m; r++) {
    dp[r][0] = dp[r - 1][0] + grid[r][0];
  }
  for (let c = 1; c < n; c++) {
    dp[0][c] = dp[0][c - 1] + grid[0][c];
  }

  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      dp[r][c] = grid[r][c] + Math.min(dp[r - 1][c], dp[r][c - 1])
    }
  }

  return dp[m - 1][n - 1];
}
