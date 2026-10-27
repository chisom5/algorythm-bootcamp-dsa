/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

function combinationSum2(candidates, target) {
  candidates.sort((a, b) => a - b);

  let result = [];

  function dfs(start, path, remaining) {
    if (remaining === 0) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      // skip duplicate
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue;
      }
      //   pruning: knowing when to stop
      if (candidates[i] > remaining) {
        break;
      }
      path.push(candidates[i]);
      dfs(i + 1, path, remaining - candidates[i]);
      path.pop();
    }
  }
  dfs(0, [], target);
  return result;
}
