# Combinations 

## Problem Statement

Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

You may return the answer in any order.

Constraints:

- 1 <= n <= 20
- 1 <= k <= n

### Examples

- Input: n = 1, k = 1
Output: [[1]]

- Input: n = 4, k = 2
Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]

## Approach Plan

For combinations of k numbers order doesn't matter and we only collect solutions when a specific condition is met.
