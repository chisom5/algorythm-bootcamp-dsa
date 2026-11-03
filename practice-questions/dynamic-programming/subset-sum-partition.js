/**
 * @param {number[]} nums
 * @return {boolean}
 *
 * - if total sum of all element in nums is odd, we can't split
 * else we can split.
 * - calculate the target (is our result of when the sum is split) just as combination sum.
 * 
 */

function canPartition(nums) {
  // total sum of nums
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  let target;
  if (sum % 2 !== 0) {
    return false;
  }
  target = sum / 2;
  

  function dfs(start, path, remaining) {
    if (remaining === 0) {
      return true;
    }

    for (let i = start; i < nums.length; i++) {
      if (nums[i] > remaining) continue; // skip

      path.push(nums[i]);
     if( dfs(i + 1, path, remaining - nums[i])){
        return true;
     }
      path.pop();
    }
  }

  return dfs(0, [], target);
}
