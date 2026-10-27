# Subset-II

## Problem Statement

Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Constraints:

- 1 <= nums.length <= 10
- -10 <= nums[i] <= 10

### Examples

- Input: nums = [1,2,2]
  Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

- Input: nums = [0]
  Output: [[],[0]]

## Approach Plan

Input can contain duplicate but our solution or answer must not contain duplicate subsets. to be able to have all duplicate input on one side I need to sort, then if nums[i] is same as nums[i - 1] we skip getting the subset of that value. else every other things is from existing knowledge of subset.

#### Key Constraints

The constraints that matter most is "1 <= nums.length <= 10" the upper bound is small enough to account for our solution of power set. time O(N!)

#### Pattern

- Dynamic Programming, Backtracking

#### Complexity

- Time O(N \* 2^N)

- Space O(N)
