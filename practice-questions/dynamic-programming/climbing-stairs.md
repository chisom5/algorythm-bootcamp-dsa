# Climbing Stairs

## Problem Statement

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Constraints

- 1 <= n <= 45

### Examples

- Input: n = 2 Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

- Input: n = 3 Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

## Approach Plan

From the Question to reach to the top we can move 1 or 2 steps. this is a clue that my base case is I can either move 1 step or 2 steps. and 1 step + 2 steps is distinct from 2 steps + 1 step. with the constraint being small is feasible for brute force but too large for generating all possible sequence. using permutation 45! that will be too large to generate them all 

#### Key Constraint

The constraint that matter is "1 <= n <= 45" because it tell me that since the upper bound is small, brute force is feasible but it is expensive for generating all possible sequence and 1 step + 2 steps, 2 steps + 1 step being two distinct steps which mean ordering matter.

#### Pattern

- Dynmaic programming

#### Complexity

- Time O(N)

- Space O(N)
