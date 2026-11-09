# House Robber

## Problem Statement

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Constraints:

- 1 <= nums.length <= 100
- 0 <= nums[i] <= 400

### Examples

- Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

- Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.

## Approach Plan

The constraint is that we cannot rob two adjacent houses. This means that for each house, we have two choices: either we rob it or we don't. If we rob it, we cannot rob the previous house, but if we don't rob it, we can consider robbing the previous house.

#### Key Constraints

The constraint that matters most is "1 <= nums.length <= 100" because it gives me a clue that the input can be too large to make use of brute force iterating over the array and for each element we iterate again to compare this will result in O(N^2) which will affect performance. but working with dynamic programming will give me O(N).

#### Pattern

- Dyanamic Programming

#### Complexity

- Time Complexity: O(N) where N is the length of the input array.

- Space Complexity: O(N) where N is for our cache array to store the maximum amount of money we can rob up to each house.

#### Steps

- create a cache to store the maximum amount of money we can rob up to each house.

- write a helper function to calculate the maximum amount of money we can rob up to each house.

- we can rob a house if we don't rob the previous house, so we can take the maximum of robbing the current house and not robbing it.