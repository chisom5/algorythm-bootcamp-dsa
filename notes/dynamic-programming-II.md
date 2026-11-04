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
But with Tabulation:  we initialize the base cases. A chosen loop order computes dependencies before the states that use them.
