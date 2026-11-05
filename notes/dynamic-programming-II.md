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
