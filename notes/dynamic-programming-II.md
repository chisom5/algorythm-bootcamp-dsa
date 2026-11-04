# Dynamic Programming II

In Dynamic Programming I, you used recursion to describe choices and memoization to reuse answers to repeated subproblems. This lesson keeps those state definitions and recurrences, then changes how the answers are computed.

Tabulation, also called bottom-up dynamic programming, starts with known answers and uses loops to fill a table in dependency order.

- One-dimensional tables:
  Revisit climbing stairs, house robber, and maximum subarray problems. These problems can be solved by defining each table, choosing a safe order, and reduce memory when possible.

- Two-dimensional tables:
  Use pairs of indices for grid paths and sequence problems. Then replace whole tables with rolling rows when the dependencies allow it.

