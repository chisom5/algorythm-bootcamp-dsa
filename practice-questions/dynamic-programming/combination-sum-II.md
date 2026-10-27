# Combination Sum II

## Problem Statement

Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

Constraints:

- 1 <= candidates.length <= 100
- 1 <= candidates[i] <= 50
- 1 <= target <= 30

### Examples

- Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: [ [1,1,6], [1,2,5], [1,7], [2,6] ]

- Input: candidates = [2,5,2,1,2], target = 5
Output: [[1,2,2], [5] ]

## Approach Plan

For this problem our answer must not contain duplicate meaning we are not permitted to use the same number from the candidates multiple times. as this will result to duplicate in our solution. e.g Input = [10,1,2,7,6,1,5], we have multiple 1's. so we first sort, so we can skip duplicate branches.