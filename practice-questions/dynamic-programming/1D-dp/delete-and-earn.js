function deleteAndEarn(nums) {
  // get the occurrence
  let numsOcc = new Map();

  for (let num of nums) {
    numsOcc.set(num, (numsOcc.get(num) || 0) + num);
  }

  // sort the keys
  let values = [...numsOcc.keys()].sort((a, b) => a - b);

  let points = values.map((i) => numsOcc.get(i));

  // perform normal house robber
  let memo = new Map();

  function helper(i) {
    if (i < 0) return 0;

    if (memo.has(i)) return memo.get(i);

    // if the current value is one greater than the previous, we include it or exclude it.
    let nextIndex = values[i] === values[i - 1] + 1 ? i - 2 : i - 1;

    let take = points[i] + helper(nextIndex);
    let skip = helper(i - 1);

    let result = Math.max(take, skip);

    memo.set(i, result);
    return result;
  }

  return helper(nums.length - 1);
}
