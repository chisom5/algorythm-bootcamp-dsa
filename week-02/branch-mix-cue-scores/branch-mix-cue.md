#  Branching Mix Cue Scores

## Problem

A playlist editor encodes a mix cue as a string expression containing non-negative integers 
and the operators +, -, and *. Every valid way to fully parenthesize the expression corresponds to a different order in which the mix cue operations are applied, potentially yielding a different final score. 

Given the expression string, return the score produced by every valid full parenthesization of the expression 
— one result per parenthesization, including duplicates when two different parenthesizations happen to yield the same score. 

Do not remove duplicate values. Results may be returned in any order.

Constraints

- 1 <= expression.length <= 20
- Each integer token in the expression is between 0 and 99 inclusive
- The expression contains only non-negative integers and the operators +, -, and *
- Results may be returned in any order

### Examples

- expression = '2-1-1' → [2, 0]

- expression = '2*3-4*5' → [-34, -10, -14, -10, 10]

- expression = '11' → [11]

### Follow up

Could you use memoization to avoid recomputing subexpressions that appear more than once in the recursion tree?

## Approach Plan.

To avoid recomputing subexpressions that appear more than once in the recursion tree. I would be storing each value in a cache.

### Key Constraint

The constraint that matter most is "Return every possible result from every valid parenthesization of the expression." because it tells me I can't compute the expression only once.

### Pattern 

Recursion, Dynamic Programming.

### Complexity

- Time O(2^n) because we explore every possible split.
- Space O(2^n) because of recursion and we are saving every resuls.

### Steps

1. initialize cache, and final result [].
2. check if we have done the operation before use the value.
3. base case - if expression doesn't have any operator return the number.
4. iterate and split if we encount any operator.
5. then perform operation from the operator on each split. 