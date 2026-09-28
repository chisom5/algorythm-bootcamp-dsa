# Two Sum

## Problem

You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Constraints:

- 2 <= nums.length <= 10^4
- -10^9 <= nums[i] <= 10^9
- -10^9  <= target <= 10^9
- Only one valid answer exists.

### Examples

- Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


### Approach Plan

For this problem, I will scan through the entire array integers when i find the two numbers when add up get target return. meaning i can't reuse the same element twice. hence I can use hashmap here.

#### Key Constraint

The constraint that matter most is "2 <= nums.length <= 10^4" because it tells me since the array integers can be as large as 10^4 my solution should involve me scanning through the array once.

#### Pattern

- Array, Hashmap

#### Complexity

- Time O(N)

- Space O(1)