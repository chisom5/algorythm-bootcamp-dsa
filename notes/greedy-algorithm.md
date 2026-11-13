# Greedy Algorithm

A Greedy Algorithm we make a decision without comparing all of its alternatives. It uses a rule to make progress from the current situation.

In Greedy Alogrithm :

- State: means the information describing the current situation.

- Local Choice: means the decision made at the current step.

- Global objective: means What the entire solution must accomplish.

- Optimal solution: means A valid solution with the best possible result.

A greedy selection rule usually commits to a choice and continues with the remaining problem. It does not undo that choice to explore other branches, as backtracking would.

## From backtracking and DP to greedy

E.g were the goal was to make 63 cents using as few coins as possible, with coins worth 25, 10, 5, and 1 cent. More than one first coin is allowed. How should a program decide which one to use?

Backtracking, dp and greedy handles the question differently, start with the choice

- If the 25 cents is picked first, we would have 38 cents remaining with as few coins as possible.
- If 10 cents is picked first, it make the remaining 53 cents with as few coins as possible.
- If 5 cents or 1 cent is picked first, it Make the remaining 58 cents or 62 cents.

1. Backtracking: backtracking try different choices, - Choose a coin and keep choosing until you make exact change. Record the coin count, then undo choices to try other combinations. keep the smallest count found

2. DP: compare choices and remember smaller answers, - Taking 25 then 10 leaves 28 cents. Taking 10 then 25 also leaves 28 cents. Either way, the remaining task is identical. DP finds the fewest coins needed for 28 cents once and saves that answer for reuse. It still compares the totals produced by different choices.

3. Greedy: Commit to the choice selected by a rule, - With "the largest-coin rule", take 25 immediately. Continue with 38 cents remainig, using the same rule. The algorithm does not also solve the alternatives that start with 10, 5, or 1 to see which is better.