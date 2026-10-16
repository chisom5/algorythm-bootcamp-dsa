/**
 * @param {number[]} nums
 * @returns {number[][]}
 */

function permute(nums) {
  let result = [],
    path = [];
  let used = new Array(n + 1).fill(false);

  function backtrack() {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    // loop
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue;
      }
      // make choice
      path.push(nums[i]);
      used[i] = true;

      // recurse
      backtrack();

      // undo
      path.pop();
      used[i] = false;
    }
    return;
  }

  backtrack();
  return result;
}
