# Fibonacci Number

## problem 

A game's quest chain awards loot score at each level following the Fibonacci sequence. Level 0 grants 0 loot points and level 1 grants 1 loot point. Every level from 2 onward grants loot equal to the combined total of the two levels immediately before it. Given a non-negative level index n, return the loot score unlocked at that level.

Constraints

0 <= n <= 30

### Examples
- n = 2  → 1
F(2) = F(1) + F(0) = 1 + 0 = 1.

- n = 3  → 2
F(3) = F(2) + F(1) = 1 + 1 = 2.

#### Follow-up question

Can you solve this iteratively in O(1) space instead of using recursion?

## Approach Plan

### Key Constraint

0 <= n <= 30 - tells me that the value is not that large, hence it can be ideal for recursion. O(2^n).

### Pattern 

Recursion

### Complexity

- Time O(2^n)
- Space O(n)

N.B - for the follow-up question we can optimize the problem to make use of O(1) space.

* The difference between the Recursion vs Iteration.
The difference is how the repetition is executed and managed in memory.

- recursion achieve repetition when a function calls itself repeatedly while
iteration achieve repetition by executing a set of instruction inside a loop until a condition becomes false.

For memory management. Recursion uses O(n) as each recursive call adds a frame to the execution stack. while 
iteration uses O(1) space for the loop variables.