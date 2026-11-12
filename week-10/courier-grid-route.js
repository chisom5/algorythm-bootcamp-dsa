/**
 * @param {number} m
 * @param {number} n
 * @returns {number}
 */
function uniquePaths(m, n) {
  // implement

  let dp = Array.from({ length: m }, () => Array(n).fill(0));

  //   allocate cell of rows
  for (let r = 0; r < m; r++) {
    dp[r][0] = 1;
  }

  //   allocate cell of c
  for (let c = 0; c < n; c++) {
    dp[0][c] = 1;
  }

  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      dp[r][c] = dp[r - 1][c] + dp[r][c - 1];
    }
  }

  return dp[m - 1][n - 1];
}

// Space Optimization

function uniquePaths(m, n) {
  let dp = Array(n).fill(1);

  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      // dp[c] - holds the old value from the first row
      // dp[c - 1] - holds the new value.
      dp[c] += dp[c - 1];
    }
  }

  return dp[n - 1];
}
