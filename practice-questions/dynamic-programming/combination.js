/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

function combine(n, k) {
  const results = [];

  function backtrack(start, path) {
    if (path.length === k) {
      results.push([...path]);
      return;
    }

    let need = k - path.length; //pruning
    for (let i = start; i < n - need + 1; i++) {
      path.push(i);
      backtrack(i + 1, path);
      path.pop();
    }
  }

  backtrack(1, []);
  return results;
}
