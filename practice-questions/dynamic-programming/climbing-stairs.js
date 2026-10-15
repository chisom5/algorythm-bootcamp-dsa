/**
 * @param {number} n
 * @return {number}
 */

function climbStairs(n) {
  if (n <= 1) return 1;

  let ways = new Array(n + 1);

  ways[1] = 1;
  ways[2] = 2;

  for (let i = 3; i <= n; i++) {
    ways[i] = ways[i - 1] + ways[i - 2];
  }

  return ways[n];
}

//  To optmize to use Space O(1)
function climbStairs(n) {
  if (n <= 1) return 1;

  let prev2 = 1; // [i - 2]
  let prev1 = 2, // [i - 1]
    i = 3;

  while (i <= n) {
    let current = prev1 + prev2;

    prev2 = prev1;
    prev1 = current;

    i++;
  }
  return prev1;
}
