/**
 * @param {number[]} candidates
 * @param {number} target
 * @returns {number[][]}
 */

function combinationSum(candidates, target) {
  let result = [];
  candidates.sort((a, b) => a - b);

  function dfs(start, path, count) {
    if (count > target) return;

    if (count === target) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      // make choice
      path.push(candidates[i]);
      // recurse
      dfs(i, path, count + candidates[i]);
      // undo
      path.pop();
    }
  }
  dfs(0, [], 0);
  return result;
}
