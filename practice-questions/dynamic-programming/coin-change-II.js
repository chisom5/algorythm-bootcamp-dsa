/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
function coinChangeII(amount, coins) {
  let memo = new Map();

  function helper(i, remaining) {
    if (remaining === 0) return 1; // we have a possible combination.
    if (remaining < 0) return 0; // edge case for negative

    // ensure we have account for all coins
    if (i === coins.length) return 0;

    const key = `${i}-${remaining}`;
    if (memo.has(key)) return memo.get(key);

    let ways = 0;

    for (let x = i; x < coins.length; x++) {
      ways += helper(i, remaining - coins[x]);
    }

    memo.set(key, ways);
    return ways;
  }

  return helper(0, amount);
}

// bottom-up
function coinChangeII(amount, coins) {
  let dp = new Array(amount + 1).fill(0);

  dp[0] = 1;

  for (let coin of coins) {
    // Update all amounts from the coin value up to the target amount
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin];
    }
  }

  return dp[amount];
}
