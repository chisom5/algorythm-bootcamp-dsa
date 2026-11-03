# Partition Equal Subset Sum

## Problem Statement

Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.

Constraints:

- 1 <= nums.length <= 200
- 1 <= nums[i] <= 100

### Examples

- Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].

- Input: nums = [1,2,3,5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.

## Approach Plan

The approach will be to first check if it is possible to split the array into two equal sum subsets. and we can do this by getting the total sum of the array and checking if it is even. If it is odd, we can return false immediately, because it's impossible to split it into two equal subsets. If it is even, we will then use dynamic programming to check if there exists a subset of the array that sums up to half of the total sum.

#### Key Constraints

The constraint that matter most is "1 <= nums[i] <= 100". This means that the maximum sum we can get from the array is 20000, which is manageable for dynamic programming. Additionally, the constraint on the length of the array will help us manage the recursion depth and ensure that we do not exceed the target.

#### Pattern

- Dynamic Programming, 0/1 Knapsack Problem

#### Complexity

- Time Complexity: O(N * S) - where N is the number of elements in the array and S is the total sum of the array. We are iterating through each element and checking if we can form a subset with a sum equal to half of the total sum.

- Space Complexity: O(S) - where S is the total sum of the array. 
