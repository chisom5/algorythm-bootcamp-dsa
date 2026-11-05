# Dynamic Programming II

In Dynamic Programming I, you used recursion to describe choices and memoization to reuse answers to repeated subproblems. This lesson keeps those state definitions and recurrences, then changes how the answers are computed.

Tabulation, also called bottom-up dynamic programming, starts with known answers and uses loops to fill a table in dependency order.

- One-dimensional tables:
  Revisit climbing stairs, house robber, and maximum subarray problems. These problems can be solved by defining each table, choosing a safe order, and reduce memory when possible.

- Two-dimensional tables:
  Use pairs of indices for grid paths and sequence problems. Then replace whole tables with rolling rows when the dependencies allow it.

## From Memoization to Tabulation

A state identifies a subproblem. Its recurrence describes the answer using answers to other states. A base case gives a known answer without applying that recurrence.

With Memoization: we request the final state. where we Recursivly calls compute missing dependencies and cache their answers.
But with Tabulation: we initialize the base cases. A chosen loop order computes dependencies before the states that use them.

N.B: For Climbing Stairs, both approaches use ways(i) = ways(i − 1) + ways(i − 2). The mathematical relationship does not change when function calls become table lookups. - meaning whelther top-down or bottom-up the mathematical relationship remains the same, but the implementation differs.

- Table of answer: stores answer to one subproblem. For Climbing Stairs, dp[i] stores the number of ways to reach step i using moves of one or two steps.

We already know dp[0] = 1 and dp[1] = 1. Each later entry is the sum of the previous two.

Before writing a loop in Tabulation technique, describe the table in words.

1. State: What does dp[i] mean? Include exactly which part of the input it covers.
2. Transition: Which completed states determine this answer, and how are they combined?
3. Base cases: Which answers are known directly? How do we represent an impossible state?
4. Order: Which evaluation order guarantees that every required dependency is ready?
5. Answer: Which entry answers the original question?

- Transition: Look at Final move

On climbing staris, Every route to step i ends in exactly one of two ways: a one-step move from i − 1, or a two-step move from i − 2.

These groups do not overlap because their final moves differ. Appending the final move to each shorter route gives every route to i, so we add the two counts.

```js
dp[i] = dp[i − 1] + dp[i − 2]
```

- Base Case: The Empty Route Counts

dp[0] = 1: there is one way to reach the ground without climbing, namely the empty sequence of moves. dp[1] = 1: the only way to reach step one is a single one-step move. The empty route is neccessary for recurrence. The route consisting of one two-step move is formed from the empty route at step zero. Thus dp[2] = 1 + 1 = 2.

```js
// base cases
dp[0] = 1;
dp[1] = 1;
```

- Order: Compute Dependencies First

Each state uses the two smaller indices before it. Once the base cases are ready, compute dp[2], then dp[3], and continue toward dp[n]. so that means our base case is dependencies that need to be ready first. The order of evaluation is from the smallest index to the largest.

The complete Climbing Stairs solution is:

```js
function climbStairs(n) {
  if (n <= 1) return 1;

  let dp = new Array(n + 1).fill(0);

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}
```

### Space Optimization

Uses two prefix state variable in-place of tables.

on Climbing stairs example. we would use two variable to store the two previous answers rather than using a entire table.

```js
function climbStairs(n) {
  if (n <= 1) return 1;

  let prev2 = 1;
  let prev1 = 1;
  for (let i = 2; i <= n; i++) {
    const curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}
```

The recurrence is unchanged. the mathematical relationship is still the same.

Eg. for House robber space optimization uses two prefix total

```js
function rob(nums) {
  let prev2 = 0; // hold take 
  let prev1 = 0; // hold skip
  for (const x of nums) {
    const curr = Math.max(prev1, prev2 + x);
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}
```

The transition reads only two prefix totals. Before processing a house, prev1 holds the best total before that house, and prev2 holds the best total excluding its immediate predecessor.

#### 2D Dynamic Programming & Space Optimization

From Bottom-up Dp, we replaced recursive calls with table reads. We defined what each entry meant, initialized the base cases, and chose an order that made every dependency available before it was read.

Now we can transfer this method into grid position problems, a subproblem that need two state variables.

Examples of what we would do here is to count grid paths, minimize a path’s cost, and compare string subsequences. Then we will reduce memory by keeping only the values that later steps still need.

- When state variable is not enough : is If two situations share your proposed state but need different results, the state leaves out information. e.g 

1. a "Grid path" - where is provides both coordinates of a position, then state should account for state(row, col).

2. "Compare two strings" - The information that must be kept is "How much of each string is included" state(i, j).


- Reading a 2-Dimensional table.

The first index selects a row; the second selects a column. We write dp[r][c] for the entry at row r, column c. A boundary is an edge of the table where some neighbors do not exist.

N.B: If we have our current element in grid as dp[r][c] - the cell above is dp[r−1][c]. The left cell is dp[r][c−1]. And the diagonal cell dp[r−1][c−1]. Not every algorithm uses all three.

- When 2D Dp is useful

Two-dimensional DP is useful when a decision depends on progress in two directions or two sequences.