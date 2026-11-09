/**
 * @param {number[]} nums
 * @return {number}
 */
// memoization: Top-dowm Dynamic Programming.
function houseRobber(nums) {
  let memo = new Map();

  function helper(i) {
    // base case
    if (i >= nums.length) return 0;

    // use cache to prevent re-computation
    if (memo.has(i)) return memo.get(i);

    // if rob current house, jump 2 houses.
    const rob_it = nums[i] + helper(i + 2);
    // if skip current house, move to the next house to rob (i + 1)
    const skip_it = helper(i + 1);

    let result = Math.max(rob_it, skip_it);
    memo.set(i, result);
    return result;
  }

  return helper(0);
}


// Bottom-up Dynamic Programming
function houseRobber(nums){
  let n = nums.length;

  if(n === 0){
    return 0;
  }

  let dp = new Array(n + 1).fill(0);

  dp[1] = nums[0];

  for(let i= 2; i <=n; i++){
    let take = nums[i - 1] + dp[i - 2];
    let skip = dp[i - 1];

    dp[i] = Math.max(take, skip);
  }

  return dp[n];
}